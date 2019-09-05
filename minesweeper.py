#!/usr/bin/env python
from __future__ import division
from __future__ import absolute_import
#import pygame as pg
import pyjsdl as pg
from pyjsdl.locals import *
from random import choice
import os


class Tile(object):
    
    def __init__(self):
        self.reset()

    def reset(self):
        self.number = 0  # -1 to 9: -1 means whitespace (no surrounding mines), 0 means the tile isn't being used, 1-8 means that amount of mines are nearby, 9 means mine
        self.isClicked = False         # tile is open or not
        self.isFlagged = False         # tile is flagged or not
        self.amtSurroundingFlags = 0   # used to keep track of how many of the surrounding tiles have been marked with a flag
        self.wasDoubleClicked = False  # indicates if tile has been processed by doubleClick() or not
        self.whitespaceClicked = False # indicates if tile has been processed by whitespaceClick() or not



''' Only one Gameboard object will be used per gaming session
    Instantiation, board resets, & difficulty changes will all be handled by newGame()'''
class Gameboard(object):                      
    
    def __init__(self):
        # this list is used if the user has power double-click enabled... it is a class variable because multiple Gameboard methods use it
        self.doubleClickQueue = []
        # these values are used to keep track of what the user has done in the Custom menu
        self.powerDoubleclickEnabled = False
        self.autoTileOpeningEnabled = False
        self.customDifficultyInputted = False

        '''Create a 25 x 45 board of Tile objects: this is the max allowed size for the board.
           A new board will not be created at the start of every new game, but rather all Tile objects in it will be reset'''
        self.board = [[Tile() for x in xrange(45)] for y in xrange(25)]
        self.started = False


    def loadImages(self):
        # load in the image files
        redMineImg = pg.image.get_image('mine_red.png')
        lightBlueMineImg = pg.image.get_image('mine_light_blue.png')
        darkBlueMineImg = pg.image.get_image('mine_dark_blue.png')
        lightGreenFlagImg = pg.image.get_image('flag_light_green.png')
        darkGreenFlagImg = pg.image.get_image('flag_dark_green.png')
        lightYellowFlagImg = pg.image.get_image('flag_light_yellow.png')
        darkYellowFlagImg = pg.image.get_image('flag_dark_yellow.png')

        # convert these image files to pyjsdl Surface objects
        self.redMineSurf = pg.image.convert_image(redMineImg)
        self.lightBlueMineSurf = pg.image.convert_image(lightBlueMineImg)
        self.darkBlueMineSurf = pg.image.convert_image(darkBlueMineImg)
        self.lightGreenFlagSurf = pg.image.convert_image(lightGreenFlagImg)
        self.darkGreenFlagSurf = pg.image.convert_image(darkGreenFlagImg)
        self.lightYellowFlagSurf = pg.image.convert_image(lightYellowFlagImg)
        self.darkYellowFlagSurf = pg.image.convert_image(darkYellowFlagImg)



    def firstClick(self, row, col):  # this chooses mine locations based on the first click location, and then updates the numbers of all Tiles objects on our board
        # there must not be any mines in any of the surrounding tiles of the first clicked tile, so we must change our population for the random sampling
        global screen
        excemptLocations = []
        for i in xrange(3):
            for j in xrange(3):
                excemptLocations.append((row - 1 + i) * self.numCols + (col - 1 + j))
        possibleLocations = [x for x in xrange(self.numCols * self.numRows) if x not in excemptLocations]

        self.mineLocations = []
        # obtain the random sampling for mine locations: random.choice used because random.sample broken with pyjsdl
        for i in xrange(self.numMines):
            pick = choice(possibleLocations)
            possibleLocations.remove(pick)
            self.mineLocations.append(pick)

        # change the random sampling (numbers ranging from 0 to the amount of tiles on the gameboard) into a list of coordinates
        for i in xrange(len(self.mineLocations)):
            self.mineLocations[i] = (self.mineLocations[i] // self.numCols, self.mineLocations[i] % self.numCols)

        # THIS PRINTS THE MINES TO THE SCREEN, YOU CAN UNCOMMENT IF YOU WANT TO
        '''for x, y in self.mineLocations:
            pg.draw.rect(screen, (10,10,10), (self.TILESIZE * y + int(self.TILESIZE/4), self.TILESIZE * x + int(self.TILESIZE/4), int(self.TILESIZE/2), int(self.TILESIZE/2)))
        pg.display.flip()'''
        
        # increment Tile.number for each tile surrounding each mine... there are 8 surrounding tiles
        for x, y in self.mineLocations:
            for i in xrange(3):
                for j in xrange(3):
                    try:
                        if (x - 1 + i) < self.numRows and (y - 1 + j) < self.numCols:
                            self.board[self.onlyNonnegative(x - 1 + i)][self.onlyNonnegative(y - 1 + j)].number += 1
                    except IndexError: # in case we try to go outside of the board, simply ignore (pass) this attempt
                        pass
                    
        # set Tile.number to 9 for each mine
        for x, y in self.mineLocations:
            self.board[x][y].number = 9

        # set Tile.number to -1 for remaining tiles on the board (whitespace)
        for x in xrange(self.numRows):   
            for y in xrange(self.numCols):
                if self.board[x][y].number == 0:
                    self.board[x][y].number = -1

        self.whitespaceClick(row, col) # this function will open the first click, which is guaranteed to be whitespace


        
    def mouseClick(self, row, col, button): # this function handles all clicks: different things happen depending on the type of click and selected tile
        global screen, bottomBarFont
        if row == 25: # this happens when the user sets the rows to the max size of 50 in the custom menu
            return
        
        tile = self.board[row][col]
        
        if button == 1 and tile.isClicked == False and tile.isFlagged == False: # single left-click
            if tile.number == -1:        # clicked on whitespace
                self.whitespaceClick(row, col)
            elif 1 <= tile.number <= 8:  # clicked on number
                self.openTiles([(row,col)])
            elif tile.number == 9:       # clicked on mine
                self.gameOver(row, col, 0)
                pg.display.setup(gameEndedLoop)
                
        elif button == 2 and tile.isFlagged == False: # double left-click (single-click takes care of whitespace and mines, all we have to look at are numbered tiles)
            if 1 <= tile.number <= 8 and self.powerDoubleclickEnabled == False:
                self.doubleClick(row, col)
            elif 1 <= tile.number <= 8 and self.powerDoubleclickEnabled == True:
                self.powerDoubleClick(row, col)
                
        elif button == 3 and tile.isClicked == False: # right-click
            if tile.isFlagged == False:  # flag not marked, mark it
                tile.isFlagged = True
                screen.blit(self.darkYellowFlag if (row + col) % 2 else self.lightYellowFlag, (col * self.TILESIZE, row * self.TILESIZE))
                self.numMinesRemaining -= 1
                
            elif tile.isFlagged == True: # flag already marked, undo it by switching back to blue tile
                tile.isFlagged = False
                pg.draw.rect(screen, (100, 108, 248) if (col + row) % 2 else (104, 113, 255), (self.TILESIZE * col, self.TILESIZE * row, self.TILESIZE, self.TILESIZE))
                self.numMinesRemaining += 1

            # update the numMinesRemaining text on the bottom bar
            numMinesRemainingText = bottomBarFont.render("   " + str(self.numMinesRemaining), True, (34, 34, 34), (200, 200, 210))
            numMinesRemainingRect = numMinesRemainingText.get_rect()
            numMinesRemainingRect.__setattr__('right', self.screenWidth - 9)
            numMinesRemainingRect.__setattr__('top', self.screenHeight - 23)
            screen.blit(numMinesRemainingText, numMinesRemainingRect)

            # flagging or unflagging a tile should change the state of surrounding tiles, specifically their amtSurroundingFlags and wasDoubleClicked attributes
            self.flaggedTileUpdate(row, col, True if tile.isFlagged else False)



    def whitespaceClick(self, row, col): # this function handles a single or double-click on whitespace
        whitespaceQueue = [(row, col)]
        tileCoordinates = [(row, col)]

        # algorithm: open whitespace, look at all 8 surrounding tiles. Add any whitespace you find to the whitespaceQueue and repeat
        while whitespaceQueue:
            row, col = whitespaceQueue[0][0], whitespaceQueue[0][1]
            self.board[row][col].whitespaceClicked = True
                
            for i in xrange(3):
                for j in xrange(3):
                    try:
                        tile = self.board[self.onlyNonnegative(row - 1 + i)][self.onlyNonnegative(col - 1 + j)]

                        if tile.number == -1 and tile.whitespaceClicked == False and tile.isFlagged == False:       # found more whitespace: add its location to the whitespace queue
                            tile.whitespaceClicked = True
                            whitespaceQueue.append((row - 1 + i, col - 1 + j))
                            tileCoordinates.append((row - 1 + i, col - 1 + j))
    
                        elif 1 <= tile.number <= 8 and tile.isClicked == False and tile.isFlagged == False: # found a number: add its location to tileCoordinates list to open
                            tileCoordinates.append((row - 1 + i, col - 1 + j))

                    except IndexError:
                        pass

            whitespaceQueue.pop(0) # pop the whitespace tile we just looked at
    
        self.openTiles(tileCoordinates)
            


    def doubleClick(self, row, col): # this function handles a double-click on a numbered tile... different from single-click on number because this one expands
        tileCoordinates = [(row, col)]
        self.board[row][col].wasDoubleClicked = True

        # if the amount of surrounding flags is not equal to the tile number, then it is not satisfied. simply return
        if self.board[row][col].amtSurroundingFlags != self.board[row][col].number:
            return
    
        # now since the tile is satisfied, open up 8 surrounding tiles, and look for any whitespace or mines as well
        for i in xrange(3):
            for j in xrange(3):    
                try:
                    tile = self.board[self.onlyNonnegative(row - 1 + i)][self.onlyNonnegative(col - 1 + j)]

                    if tile.number == -1 and tile.isClicked == False:  # whitespace
                        self.whitespaceClick(row - 1 + i, col - 1 + j)
                                
                    elif 1 <= tile.number <= 8 and (i, j) != (1, 1):   # number
                        if tile.isClicked == False:
                            tileCoordinates.append((row - 1 + i, col - 1 + j))

                        # if the user has power double-click enabled and this numbered tile hasn't been on the doubleClickQueue, we're going to append it to doubleClickQueue
                        if self.powerDoubleclickEnabled == True and tile.wasDoubleClicked == False:
                            tile.wasDoubleClicked = True
                            self.doubleClickQueue.append((row - 1 + i, col - 1 + j))

                    elif tile.number == 9 and tile.isFlagged == False: # mine
                            self.gameOver(row - 1 + i, col - 1 + j, 0)
                            pg.display.setup(gameEndedLoop)
                            return
                            
                except IndexError:
                    pass
        
        self.openTiles(tileCoordinates)

        

    def powerDoubleClick(self, row, col): # this function handles a power double-click on a numbered tile
        self.doubleClickQueue = []

        # power double-clicking isn't only activated by the double-clicked tile, but can also be triggered by any of the 8 surrounding tiles... check for satisfied UNOPENED tiles
        for i in xrange(3):
            for j in xrange(3):        
                try:
                    tile = self.board[self.onlyNonnegative(row - 1 + i)][self.onlyNonnegative(col - 1 + j)]
                    if tile.amtSurroundingFlags == tile.number and (row - 1 + i) < self.numRows and (col - 1 + j) < self.numCols and tile.isClicked:
                        self.doubleClickQueue.append((row - 1 + i, col - 1 + j))
                        tile.wasDoubleClicked = True
                except IndexError:
                    pass

        ''' algorithm: take the satisfied numbered tile that was power double-clicked, treat it as a generic double-click, ...
            and add any other satisfied, nearby tiles to the queue. Repeat.'''
        while self.doubleClickQueue:
            # first check if the game has ended from one of the previous iterations
            if self.started == False:
                return
            
            row, col = self.doubleClickQueue[0][0], self.doubleClickQueue[0][1]
            self.doubleClick(row, col)   # send the numbered tile to doubleClick()
            self.doubleClickQueue.pop(0) # pop the numbered tile we just looked at



    def flaggedTileUpdate(self, row, col, flagPlaced):
        ''' This function is only called when a tile is (un)flagged. It goes to all surrounding tiles to update their .amtSurroundingFlags and .wasDoubleClicked attributes.
            The reason for resetting .wasDoubleClicked to False is because powerDoubleClick() uses this attribute to identify which tiles to look at when opening them'''
        for i in xrange(3):
            for j in xrange(3):
                # first check if the game has ended from one of the previous iterations
                if self.started == False:
                    return
                
                try:
                    tile = self.board[self.onlyNonnegative(row - 1 + i)][self.onlyNonnegative(col - 1 + j)]
                    if 1 <= tile.number <= 8:
                        tile.amtSurroundingFlags += 1 if flagPlaced else -1 # adjust amtSurroundingFlags
                        tile.wasDoubleClicked = False # set to False, even if power double-click not enabled2

                    # if some surrounding tile is satisfied and the user has Automatic tile opening enabled, double-click it (or power double-click if the user has that enabled)
                    if self.autoTileOpeningEnabled == True and tile.amtSurroundingFlags == tile.number and (row - 1 + i) < self.numRows and (col - 1 + j) < self.numCols:
                        if self.powerDoubleclickEnabled == True:
                            self.powerDoubleClick(row - 1 + i, col - 1 + j)
                        elif self.powerDoubleclickEnabled == False and tile.isClicked == True:
                            self.powerDoubleClick(row - 1 + i, col - 1 + j)
                        
                except IndexError:
                    pass



    def openTiles(self, tileCoordinates): # this functions renders the text of the numbers and displays it on the appropriate tile
        global screen
        font = pg.font.SysFont('Lucida Grande', int(self.TILESIZE / 1.1))
        
        # determine the appropriate color for the text depending on the tile number
        for row,col in tileCoordinates:
            tile = self.board[row][col]

            if tile.isClicked == True:
                continue
            
            tile.isClicked = True
            self.numTilesRemaining -= 1
            
            if tile.number == 1 or tile.number == -1:
                color = (95, 104, 234)
            elif tile.number == 2:
                color = (61, 166, 66)
            elif tile.number == 3:
                color = (217, 72, 66)
            elif tile.number == 4:
                color = (67, 72, 170)
            elif tile.number == 5:
                color = (138, 0, 198)
            elif tile.number == 6:
                color = (104, 73, 0)
            elif tile.number == 7:
                color = (50, 50, 50)
            elif tile.number == 8:
                color = (0, 0, 0)

            # display the number
            txt = font.render('' if tile.number == -1 else str(tile.number), True, color)
            txtRect = txt.get_rect()
            txtRect.__setattr__('center', (int(self.TILESIZE * (col + .5)), int(self.TILESIZE * (row + .5))))
            pg.draw.rect(screen, (245, 245, 245) if (col + row) % 2 else (251, 250, 251), (self.TILESIZE * col, self.TILESIZE * row, self.TILESIZE, self.TILESIZE))
            screen.blit(txt, txtRect)

        pg.display.flip()



    def gameOver(self, row, col, gameState): # game ends either by clicking a mine or winning the game
        global screen, bottomBarFont
        self.started = False

        # update the numMinesRemaining text on the bottom bar
        numMinesRemainingText = bottomBarFont.render("   " + str(self.numMinesRemaining), True, (34, 34, 34), (200, 200, 210))
        numMinesRemainingRect = numMinesRemainingText.get_rect()
        numMinesRemainingRect.__setattr__('right', self.screenWidth - 9)
        numMinesRemainingRect.__setattr__('top',  self.screenHeight - 23)
        screen.blit(numMinesRemainingText, numMinesRemainingRect)

        # display all blue mines, green flags, and yellow flags in the appropriate locations
        for i in xrange(self.numRows):
            for j in xrange(self.numCols):
                tile = self.board[i][j]
                if tile.number == 9 and tile.isClicked == False and tile.isFlagged == False and (i, j) != (row, col):   # unclicked, unflagged mine: blue
                    screen.blit(self.darkBlueMine if (i + j) % 2 else self.lightBlueMine, (j * self.TILESIZE, i * self.TILESIZE))
                if tile.number == 9 and (tile.isFlagged == True or self.numTilesRemaining == 0):                        # correctly flagged mine: green
                    screen.blit(self.darkGreenFlag if (i + j) % 2 else self.lightGreenFlag, (j * self.TILESIZE, i * self.TILESIZE))
                if (tile.number == -1 or 1 <= tile.number <= 8) and tile.isFlagged == True:                             # incorrectly flagged mine: yellow
                    screen.blit(self.darkYellowFlag if (i + j) % 2 else self.lightYellowFlag, (j * self.TILESIZE, i * self.TILESIZE))
        
        # if the game ended by a mine click, display a red mine where it exploded
        if gameState == 0:
            screen.blit(self.redMine, (col * self.TILESIZE, row * self.TILESIZE))
        
        # set size and location of "Click for a new game" box
        self.gameOverBoxWidth = 185
        self.gameOverBoxHeight = 35
        self.gameOverBoxLeft = (self.screenWidth - self.gameOverBoxWidth) / 2
        self.gameOverBoxTop = self.screenHeight * .66

        pg.draw.rect(screen, (43, 43, 43), (self.gameOverBoxLeft, self.gameOverBoxTop, self.gameOverBoxWidth, self.gameOverBoxHeight))

        
        # display "Click for a new game" text
        font = pg.font.SysFont('Lucida Grande', 15)
        newGameText = font.render("Click for a new game", True, (255, 255, 255))
        screen.blit(newGameText, (self.gameOverBoxLeft + 16, self.gameOverBoxTop + 8))
        pg.display.flip()

        # while we wait for the user to select the "Click for a new game" box, we can reset all Tile objects' properties on our board
        self.resetTiles(self.numRows, self.numCols)



    def newGame(self, numRows, numCols, numMines, tilesize): # this function resets the Gameboard class properties, and displays the new gameboard
        global screen, bottomBarFont
        screen.fill((255, 255, 255))
        
        # most of Gameboard's member variables are initialized here
        self.started = False
        self.numRows = numRows
        self.numCols = numCols
        self.numMines = numMines
        self.TILESIZE = tilesize
        
        self.screenWidth = numCols * self.TILESIZE
        self.screenHeight = numRows * self.TILESIZE + 25 # 25 extra pixels for the bottom bar
        self.numMinesRemaining = numMines
        self.numTilesRemaining = (numCols * numRows) - numMines
        self.mineLocations = []

        # resize all our image Surfaces to match the tilesize
        self.redMine = pg.transform.scale(self.redMineSurf, (self.TILESIZE, self.TILESIZE))
        self.lightBlueMine = pg.transform.scale(self.lightBlueMineSurf, (self.TILESIZE, self.TILESIZE))
        self.darkBlueMine = pg.transform.scale(self.darkBlueMineSurf, (self.TILESIZE, self.TILESIZE))
        self.lightGreenFlag = pg.transform.scale(self.lightGreenFlagSurf, (self.TILESIZE, self.TILESIZE))
        self.darkGreenFlag = pg.transform.scale(self.darkGreenFlagSurf, (self.TILESIZE, self.TILESIZE))
        self.lightYellowFlag = pg.transform.scale(self.lightYellowFlagSurf, (self.TILESIZE, self.TILESIZE))
        self.darkYellowFlag = pg.transform.scale(self.darkYellowFlagSurf, (self.TILESIZE, self.TILESIZE))
        
        # create the blue checkerboard pattern
        colorSwitch = True
        for i in xrange(self.numRows):
            for j in xrange(self.numCols):
                pg.draw.rect(screen, (104, 113, 255) if colorSwitch else (100, 108, 248), (self.TILESIZE * j, self.TILESIZE * i, self.TILESIZE, self.TILESIZE))
                colorSwitch = not colorSwitch
            colorSwitch = colorSwitch if self.numCols % 2 else not colorSwitch
        

        # draw the bottom bar and the "Change difficulty box"
        pg.draw.rect(screen, (200,200,210), (0, self.screenHeight - 25, self.screenWidth, 25))
        font = pg.font.SysFont('Lucida Grande', 13)
        difficultyText = font.render("Change difficulty", True, (20, 20, 20), (200, 200, 210))
        difficultyRect = difficultyText.get_rect()
        difficultyRect.__setattr__('center', (int(self.screenWidth / 2) + 3, int(self.screenHeight - 13)))           
        screen.blit(difficultyText, difficultyRect)
        difficultyRect.__setattr__('width', 117)
        difficultyRect.__setattr__('height', 17)
        difficultyRect.__setattr__('left', difficultyRect.__getattr__('left') - 5)
        pg.draw.rect(screen, (110, 110,170), difficultyRect, 1)

        # set the numMinesRemaining text
        numMinesRemainingText = bottomBarFont.render("   " + str(self.numMinesRemaining), True, (34, 34, 34), (200, 200, 210))
        numMinesRemainingRect = numMinesRemainingText.get_rect()
        numMinesRemainingRect.__setattr__('right', self.screenWidth - 9)
        numMinesRemainingRect.__setattr__('top', self.screenHeight - 23)
        screen.blit(numMinesRemainingText, numMinesRemainingRect)
        
        pg.display.flip()


        
    def resetTiles(self, numRows, numCols):
        # we want to reset the tiles on the current gameboard, and one extra row and column, unless numRows and/or numCols hit their max: 50 and 99
        numRows = numRows + 1 if numRows != 25 else numRows
        numCols = numCols + 1 if numCols != 45 else numCols
        
        for row in xrange(numRows):
            for col in xrange(numCols):
                self.board[row][col].reset()



    def onlyNonnegative(self, num): # this is used throughout the Gameboard class to obtain integers >= 0, for the purpose of indexing into board[][]
        if num < 0:
            return 1000 # returning 1000 as an index value will throw IndexError. it will be caught
        else:
            return num




#######    DIFFICULTY MENU    ########        

class Menu(object):
    
    def difficultyMenu(self):
        global screen
        # initialize all of Menu's member variables
        screen.fill((255, 255, 255))
        pg.draw.rect(screen, (199, 204, 216), (0, 0, 300, 350))
        self.rowsBoxSelected = False
        self.colsBoxSelected = False
        self.minesBoxSelected = False
        self.cancelBoxSelected = False
        self.okBoxSelected = False
        self.numRows = 0
        self.numCols = 0
        self.numMines = 0
        self.tilesize = 28
        
        # display the Beginner, Intermediate, Expert, Custom, and Help boxes
        pg.draw.rect(screen, (82, 108, 235), (50, 40, 200, 42))
        pg.draw.rect(screen, (52, 78, 165), (50, 99, 200, 42))
        pg.draw.rect(screen, (22, 48, 115), (50, 158, 200, 42))
        pg.draw.rect(screen, (52, 78, 165), (100, 225, 100, 34), 2)
        pg.draw.rect(screen, (52, 78, 165), (110, 275, 80, 30), 2)

        # set font and font colors
        font = pg.font.SysFont('Lucida Grande', 20)
        difficultyColor = (245, 245, 250)
        otherBoxColor = (34,34,34)

        # render the texts
        txtBeginner = font.render('Beginner', True, difficultyColor)
        txtIntermediate = font.render('Intermediate', True, difficultyColor)
        txtExpert = font.render('Expert', True, difficultyColor)
        txtCustom = font.render('Custom', True, otherBoxColor)
        txtHelp = font.render('Help', True, otherBoxColor)

        # obtain text rectangles
        txtRectBeginner = txtBeginner.get_rect()
        txtRectIntermediate = txtIntermediate.get_rect()
        txtRectExpert = txtExpert.get_rect()
        txtRectCustom = txtCustom.get_rect()
        txtRectHelp = txtHelp.get_rect()

        # set text rectangles' centers
        txtRectBeginner.__setattr__('center', (150, 61))
        txtRectIntermediate.__setattr__('center', (150, 120))
        txtRectExpert.__setattr__('center', (150, 179))
        txtRectCustom.__setattr__('center', (150, 242))
        txtRectHelp.__setattr__('center', (150, 290))

        # blit the text to the screen
        screen.blit(txtBeginner, txtRectBeginner)
        screen.blit(txtIntermediate, txtRectIntermediate)
        screen.blit(txtExpert, txtRectExpert)
        screen.blit(txtCustom, txtRectCustom)
        screen.blit(txtHelp, txtRectHelp)

        pg.display.flip()



    def helpMenu(self):
        global screen
        pg.draw.rect(screen, (30, 30, 30), (35, 10, 230, 330))

        # render all Help box text
        font = pg.font.SysFont('Lucida Grande', 15)
        XButton = font.render('[X]', True, (255, 0, 0))
        line1 = font.render('Left-click to open a tile', True, (255, 255, 255))
        line2 = font.render('Right-click to place a flag', True, (255, 255, 255))
        line3 = font.render('Double-click\'s special ability:', True, (255, 255, 255))
        line4 = font.render('- Opens all surrounding tiles', True, (255, 255, 255))
        line5 = font.render('- BUT there must be the', True, (255, 255, 255))
        line6 = font.render('   correct amount of flags', True, (255, 255, 255))
        line7 = font.render('   surrounding the tile', True, (255, 255, 255))
        line8 = font.render('- Works for both opened', True, (255, 255, 255))
        line9 = font.render('   and unopened tiles', True, (255, 255, 255))

        # blit all text to the screen
        screen.blit(XButton, (40, 13, 19, 19))
        screen.blit(line1, (45, 45))
        screen.blit(line2, (45, 95))
        screen.blit(line3, (45, 145))
        screen.blit(line4, (45, 165))
        screen.blit(line5, (45, 185))
        screen.blit(line6, (45, 205))
        screen.blit(line7, (45, 225))
        screen.blit(line8, (45, 245))
        screen.blit(line9, (45, 265))

        pg.display.flip()



    def customMenu(self):
        global screen, Game
        screen.fill((255, 255, 255))
        pg.draw.rect(screen, (199, 204, 216), (0, 0, 300, 350))
        
        smallFont = pg.font.SysFont('Lucida Grande', 9)
        mediumFont = pg.font.SysFont('Lucida Grande', 12)
        largeFont = pg.font.SysFont('Lucida Grande', 15)

        # display the keyboard input boxes, Cancel & OK boxes, and the 2 checkboxes (black outline w/ a white/gray inner box)
        pg.draw.rect(screen, (0, 0, 0), (170, 45, 50, 25), 1)      # row
        pg.draw.rect(screen, (0, 0, 0), (170, 80, 50, 25), 1)      # col
        pg.draw.rect(screen, (0, 0, 0), (170, 115, 50, 25), 1)     # mines
        pg.draw.rect(screen, (0, 0, 0), (205, 200, 15, 15), 1)     # power double-click
        pg.draw.rect(screen, (0, 0, 0), (205, 224, 15, 15), 1)     # auto tile opening
        pg.draw.rect(screen, (0, 0, 0), (45, 285, 95, 30), 1)      # cancel
        pg.draw.rect(screen, (0, 0, 0), (160, 285, 95, 30), 1)     # OK
        
        pg.draw.rect(screen, (255, 255, 255), (171, 46, 48, 23))   # row
        pg.draw.rect(screen, (255, 255, 255), (171, 81, 48, 23))   # col
        pg.draw.rect(screen, (255, 255, 255), (171, 116, 48, 23))  # mines
        pg.draw.rect(screen, (255, 255, 255), (206, 201, 13, 13))  # power double-clicking
        pg.draw.rect(screen, (255, 255, 255), (206, 225, 13, 13))  # auto tile opening
        pg.draw.rect(screen, (200, 200, 200), (46, 286, 93, 28))   # cancel
        pg.draw.rect(screen, (200, 200, 200), (161, 286, 93, 28))  # OK

        # insert blue boxes in the checkboxes if they were previously selected
        if Game.powerDoubleclickEnabled:
            pg.draw.rect(screen, (0, 17, 255), (208, 203, 9, 9))
        if Game.autoTileOpeningEnabled:
            pg.draw.rect(screen, (0, 17, 255), (208, 227, 9, 9))

        # render all the text labelling the boxes
        rowBox = largeFont.render('Rows:', True, (0, 0, 0))
        rowRange = smallFont.render('10 to 25', True, (52, 52, 77))
        colBox = largeFont.render('Columns:', True, (0, 0, 0))
        colRange = smallFont.render('10 to 45', True, (52, 52, 77))
        mineBox = largeFont.render('Mines:', True, (0, 0, 0))
        mineRange = smallFont.render('1 to rows * cols - 10', True, (52, 52, 77))
        powerDoubleClick = mediumFont.render('Power double-click', True, (0, 0, 0))
        autoTileOpening = mediumFont.render('Automatic tile opening', True, (0, 0, 0))
        cancelBox = largeFont.render('Cancel', True, (0, 0, 0))
        okBox = largeFont.render('OK', True, (0, 0, 0))
        self.dimError = smallFont.render('dimensions not accepted', True, (229, 0, 0), (199, 204, 216)) # this one will be accessed from customMenuLoop()

        # get the rects of a few of the texts
        cancelBoxRect = cancelBox.get_rect()
        okBoxRect = okBox.get_rect()

        # set the locations of these rects
        cancelBoxRect.__setattr__('center', (92, 300))
        okBoxRect.__setattr__('center', (207, 300))

        # blit all the static text to the screen
        screen.blit(rowBox, (35, 43))
        screen.blit(rowRange, (35, 59))
        screen.blit(colBox, (35, 78))
        screen.blit(colRange, (35, 94))
        screen.blit(mineBox, (35, 113))
        screen.blit(mineRange, (35, 129))
        screen.blit(powerDoubleClick, (35, 200))
        screen.blit(autoTileOpening, (35, 224))
        screen.blit(cancelBox, cancelBoxRect)
        screen.blit(okBox, okBoxRect)
        
        #####   initialize all needed strings, texts, and text rectangles for the following loop   #####
        # if the Custom menu is entered before selecting a difficulty, Game.numRows, Game.numCols, etc haven't been initialized. In this case, set default values for strings
        try:
            self.rowsStr = str(Game.numRows) if Game.customDifficultyInputted else ''
            self.colsStr = str(Game.numCols) if Game.customDifficultyInputted else ''
            self.minesStr = str(Game.numMines) if Game.customDifficultyInputted else ''
        except AttributeError:
            self.rowsStr, self.colsStr, self.minesStr = '', '', ''

        rowsText = largeFont.render(self.rowsStr, True, (0, 0, 0), (255, 255, 255))
        colsText = largeFont.render(self.colsStr, True, (0, 0, 0), (255, 255, 255))
        minesText = largeFont.render(self.minesStr, True, (0, 0, 0), (255, 255, 255))
        
        rowsRect = (199, 48, 18, 19)
        colsRect = (199, 83, 18, 19)
        # the number displayed in the Mines box can be 1-4 digits long, while the others have to be 2, so it gets special treatment
        minesRect = minesText.get_rect()
        minesRect.__setattr__('right', 217)
        minesRect.__setattr__('top', 118)

        screen.blit(rowsText, rowsRect)
        screen.blit(colsText, colsRect)
        screen.blit(minesText, minesRect)
                        
        pg.display.flip()



pg.init()
clock = None
timer = None
bottomBarFont = None
screen = None
Game = None
menu = None
    

def run():
    global timer, Game, screen, gameOver, menu
    ms = clock.tick_busy_loop(30) # milliseconds since last tick
    for event in pg.event.get():
        if event.type == pg.MOUSEBUTTONUP:
            x,y = pg.mouse.get_pos()
            row, col = y // Game.TILESIZE, x // Game.TILESIZE
            pg.mouse.get_pressed()
            if event.button == 1:
                # check if user clicked on "Change difficulty" box. We will still have access to (x, y) from the main loop
                if int(Game.screenWidth / 2) - 56 < x < int(Game.screenWidth / 2) + 61 and Game.screenHeight - 21 < y < Game.screenHeight - 4:
                    menu.difficultyMenu()
                    pg.display.setup(mainMenuLoop)
                    continue

                if 0 < y < Game.screenHeight - 25 and 0 < x < Game.screenWidth:
                    if Game.started == False: # game hasn't been started and user clicks on a tile
                        Game.firstClick(row, col)    # first click is important... determines the positions of the mines
                        Game.started = True
                        continue

                    Game.mouseClick(row, col, 1)     # single left-click (ALWAYS EXECUTES, DOUBLE CLICK WILL BE SENT AFTER THE INITIAL SINGLE CLICK)
                        
                    if timer == 0:
                        timer = 1
                    elif timer <= 250:
                        Game.mouseClick(row, col, 2) # double left-click (second click happens within 250 milliseconds of first)
                        timer = 0
                        
            elif event.button == 3 and 0 < y < Game.screenHeight - 25 and 0 < x < Game.screenWidth: #right-click
                Game.mouseClick(row, col, 3)

    # correct timer to appropriate time. if it passed 250 ms, it's beyond a double click... reset to 0
    if timer != 0:
        timer += ms
        if timer > 250:
            timer = 0
        
    pg.display.flip()

    if Game.numTilesRemaining == 0: # if game is won, call gameOver() with a gameState of 1
        Game.numMinesRemaining = 0
        Game.gameOver(0, 0, 1)
        pg.display.setup(gameEndedLoop)


def gameEndedLoop():
# wait for the user to either click the "Click for a new game" box or click the "Change difficulty" box
    global Game, screen
    for event in pg.event.get():
        if event.type == pg.MOUSEBUTTONUP:
            x,y = pg.mouse.get_pos()
            pg.mouse.get_pressed()
            if event.button == 1:
                if Game.gameOverBoxLeft < x < Game.gameOverBoxLeft + Game.gameOverBoxWidth and Game.gameOverBoxTop < y < Game.gameOverBoxTop + Game.gameOverBoxHeight:    # user clicks "Create a new game" box
                    Game.newGame(Game.numRows, Game.numCols, Game.numMines, Game.TILESIZE)  # reset the gameboard with the same dimensions and numMines
                    pg.display.setup(run)

                # user clicks "Change difficulty" box
                elif int(Game.screenWidth / 2) - 56 < x < int(Game.screenWidth / 2) + 61 and Game.screenHeight - 21 < y < Game.screenHeight - 4:
                    menu.difficultyMenu()
                    pg.display.setup(mainMenuLoop)
                    continue
                

def mainMenuLoop():
    global Game, menu
    for event in pg.event.get():
        if event.type == pg.MOUSEBUTTONUP:
            x,y = pg.mouse.get_pos()
            pg.mouse.get_pressed()
            if event.button == 1:
                if 50 < x < 250 and 40 < y < 82:      # Beginner
                    menu.numRows, menu.numCols, menu.numMines, menu.tilesize = 10, 10, 15, 28
                    Game.customDifficultyInputted, Game.powerDoubleclickEnabled, Game.autoTileOpeningEnabled = False, False, False
                elif 50 < x < 250 and 99 < y < 141:   # Intermediate
                    menu.numRows, menu.numCols, menu.numMines, menu.tilesize = 15, 27, 80, 28
                    Game.customDifficultyInputted, Game.powerDoubleclickEnabled, Game.autoTileOpeningEnabled = False, False, False
                elif 50 < x < 250 and 158 < y < 200:  # Expert
                    menu.numRows, menu.numCols, menu.numMines, menu.tilesize = 25, 30, 160, 28
                    Game.customDifficultyInputted, Game.powerDoubleclickEnabled, Game.autoTileOpeningEnabled = False, False, False
                elif 100 < x < 200 and 225 < y < 259: # Custom menu
                    menu.customMenu()
                    pg.display.setup(customMenuLoop)
                    continue
                elif 110 < x < 190 and 275 < y < 305: # Help menu
                    menu.helpMenu()
                    pg.display.setup(helpMenuLoop)
                    continue
                else:  # any other click will be ignored
                    continue

                if Game.started:
                    Game.resetTiles(Game.numRows, Game.numCols)
                Game.newGame(menu.numRows, menu.numCols, menu.numMines, menu.tilesize)
                pg.display.setup(run)

                
def keyboardInput(string, typedChar, maximumDigits): # used by customMenuLoop() to validate what is being typed
    if pg.K_1 <= typedChar <= pg.K_9: # a number 1-9 has been typed
        return string + str(typedChar - 48) if len(string) < maximumDigits else string
    elif typedChar == pg.K_0 and string:    # 0 has been typed... only allowed if it's not the first typed number
        return string + '0' if len(string) < maximumDigits else string
    elif typedChar == pg.K_BACKSPACE:
        return '  ' + string[:-1]

def customMenuLoop():
    global Game, menu, screen
    for event in pg.event.get():
        if event.type == pg.KEYDOWN:
            font = pg.font.SysFont('Lucida Grande', 15)
            if event.key == pg.K_ESCAPE:
                menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, False
                menu.difficultyMenu()
                pg.display.setup(mainMenuLoop)

            elif menu.rowsBoxSelected:
                menu.rowsStr = keyboardInput(menu.rowsStr.lstrip(), event.key, 2)
                rowsText = font.render(menu.rowsStr, True, (0, 0, 0), (255, 255, 255))
                rowsRect = rowsText.get_rect()
                rowsRect.__setattr__('right', 217)
                rowsRect.__setattr__('top', 48)
                screen.blit(rowsText, rowsRect)
                pg.display.flip()

            elif menu.colsBoxSelected:
                menu.colsStr = keyboardInput(menu.colsStr.lstrip(), event.key, 2)
                colsText = font.render(menu.colsStr, True, (0, 0, 0), (255, 255, 255))
                colsRect = colsText.get_rect()
                colsRect.__setattr__('right', 217)
                colsRect.__setattr__('top', 83)
                screen.blit(colsText, colsRect)
                pg.display.flip()

            elif menu.minesBoxSelected:
                menu.minesStr = keyboardInput(menu.minesStr.lstrip(), event.key, 4)
                minesText = font.render(menu.minesStr, True, (0, 0, 0), (255, 255, 255))
                minesRect = minesText.get_rect()
                minesRect.__setattr__('right', 217)
                minesRect.__setattr__('top', 118)
                screen.blit(minesText, minesRect)
                pg.display.flip()
            
        elif event.type == pg.MOUSEBUTTONUP:
            x,y = pg.mouse.get_pos()
            pg.mouse.get_pressed()
            if event.button == 1:
                # if one of the 3 input boxes is selected, set its Selected variable equal to True, and all other boxes' Selected variable to False
                if 170 < x < 220 and 45 < y < 70:     # Rows box
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = True, False, False
                elif 170 < x < 220 and 80 < y < 105:  # Columns box
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, True, False
                elif 170 < x < 220 and 115 < y < 140: # Mines box
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, True
                elif 45 < x < 140 and 285 < y < 315:  # Cancel box
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, False
                    menu.difficultyMenu()
                    pg.display.setup(mainMenuLoop)
                    
                elif 160 < x < 255 and 285 < y < 315: # OK box
                    # if the OK box has been selected, check that all keyboard input is within the correct range. If not, display a warning message
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, False
                    if int(menu.rowsStr if menu.rowsStr else '0') < 10 or int(menu.rowsStr if menu.rowsStr else '0') > 25   \
                    or int(menu.colsStr if menu.colsStr else '0') < 10 or int(menu.colsStr if menu.colsStr else '0') > 45   \
                    or int(menu.minesStr if menu.minesStr else '0') < 1 or int(menu.minesStr if menu.minesStr else '0') >   \
                    int(menu.rowsStr if menu.rowsStr else '0') * int(menu.colsStr if menu.colsStr else '0') - 10:
                        pg.draw.rect(screen, (199, 204, 216), (157, 317, 120, 20))
                        screen.blit(menu.dimError, (160, 318))
                        pg.display.flip()
                    else:
                        menu.numRows, menu.numCols, menu.numMines = int(menu.rowsStr), int(menu.colsStr), int(menu.minesStr)
                        Game.customDifficultyInputted = True
                        if Game.started:
                            Game.resetTiles(Game.numRows, Game.numCols)
                        Game.newGame(menu.numRows, menu.numCols, menu.numMines, menu.tilesize)
                        pg.display.setup(run)
                    
                elif 205 < x < 220 and 200 < y < 215: # Power double-click checkbox
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, False
                    Game.powerDoubleclickEnabled = False if Game.powerDoubleclickEnabled else True
                    pg.draw.rect(screen, (0, 17, 255) if Game.powerDoubleclickEnabled else (255, 255, 255), (208, 203, 9, 9))
                    pg.display.flip()
                elif 205 < x < 220 and 224 < y < 239: # Automatic tile opening checkbox
                    menu.rowsBoxSelected, menu.colsBoxSelected, menu.minesBoxSelected = False, False, False
                    Game.autoTileOpeningEnabled = False if Game.autoTileOpeningEnabled else True
                    pg.draw.rect(screen, (0, 17, 255) if Game.autoTileOpeningEnabled else (255, 255, 255), (208, 227, 9, 9))
                    pg.display.flip()
    

def helpMenuLoop():
    global menu
    for event in pg.event.get():
        if event.type == pg.KEYDOWN and event.key == pg.K_ESCAPE:
            menu.difficultyMenu()
            pg.display.setup(mainMenuLoop)

        elif event.type == pg.MOUSEBUTTONUP:
            x,y = pg.mouse.get_pos()
            pg.mouse.get_pressed()
            if event.button == 1:
                if (40 < x < 59 and 13 < y < 32) or (x < 35 or x > 265 or y < 10 or y > 340):
                    menu.difficultyMenu()
                    pg.display.setup(mainMenuLoop)

def main():
    global screen, timer, bottomBarFont, clock, Game, menu
    screen = pg.display.set_mode((1260, 725))
    screen.fill((255, 255, 255))
    timer = 0
    bottomBarFont = pg.font.SysFont('Lucida Grande', 18)
    clock = pg.time.Clock()
    pg.display.set_caption("Minesweeper")
    Game = Gameboard()
    menu = Menu()
    loadImages = ['mine_red.png', 'mine_light_blue.png', 'mine_dark_blue.png', 'flag_light_green.png', 'flag_dark_green.png', 'flag_light_yellow.png', 'flag_dark_yellow.png']
    pg.display.setup(prerun, loadImages)

def prerun():
    global Game, menu
    Game.loadImages()
    menu.difficultyMenu()
    pg.event.set_blocked(pg.MOUSEMOTION)
    pg.display.setup(mainMenuLoop)

# <body oncontextmenu="return false;">
if __name__ == '__main__':
    main()
    

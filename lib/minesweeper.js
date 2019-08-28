/* start module: minesweeper */
$pyjs['loaded_modules']['minesweeper'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['minesweeper']['__was_initialized__']) return $pyjs['loaded_modules']['minesweeper'];
	var $m = $pyjs['loaded_modules']['minesweeper'];
	$m['__repr__'] = function() { return '<module: minesweeper>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'minesweeper';
	$m['__name__'] = __mod_name__;
	var $eq164,$eq163,$bool186;

	$m['pg'] = $p['___import___']('pyjsdl', null, null, false);
	$p['__import_all__']('pyjsdl.locals', null, $m, null, false);
	$m['choice'] = $p['___import___']('random.choice', null, null, false);
	$m['os'] = $p['___import___']('os', null);
	$m['Tile'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['number'] = 0;
			self['isClicked'] = false;
			self['isFlagged'] = false;
			self['amtSurroundingFlags'] = 0;
			self['wasDoubleClicked'] = false;
			self['whitespaceClicked'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tile', $p['tuple']($bases), $data);
	})();
	$m['Gameboard'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['doubleClickQueue'] = $p['list']([]);
			self['powerDoubleclickEnabled'] = false;
			self['autoTileOpeningEnabled'] = false;
			self['customDifficultyInputted'] = false;
			self['board'] = function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,y,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['xrange'](25);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				y = $iter1_nextval;
				$collcomp1['append'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,x,$iter2_array;
	$collcomp2 = $p['list']();
				$iter2_iter = $p['xrange'](45);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					x = $iter2_nextval;
					$collcomp2['append']($m['Tile']());
				}

	return $collcomp2;}());
			}

	return $collcomp1;}();
			self['started'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('loadImages', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var darkYellowFlagImg,lightGreenFlagImg,lightBlueMineImg,darkGreenFlagImg,darkBlueMineImg,redMineImg,lightYellowFlagImg;
			redMineImg = $m['pg']['image']['get_image']('mine_red.png');
			lightBlueMineImg = $m['pg']['image']['get_image']('mine_light_blue.png');
			darkBlueMineImg = $m['pg']['image']['get_image']('mine_dark_blue.png');
			lightGreenFlagImg = $m['pg']['image']['get_image']('flag_light_green.png');
			darkGreenFlagImg = $m['pg']['image']['get_image']('flag_dark_green.png');
			lightYellowFlagImg = $m['pg']['image']['get_image']('flag_light_yellow.png');
			darkYellowFlagImg = $m['pg']['image']['get_image']('flag_dark_yellow.png');
			self['redMineSurf'] = $m['pg']['image']['convert_image'](redMineImg);
			self['lightBlueMineSurf'] = $m['pg']['image']['convert_image'](lightBlueMineImg);
			self['darkBlueMineSurf'] = $m['pg']['image']['convert_image'](darkBlueMineImg);
			self['lightGreenFlagSurf'] = $m['pg']['image']['convert_image'](lightGreenFlagImg);
			self['darkGreenFlagSurf'] = $m['pg']['image']['convert_image'](darkGreenFlagImg);
			self['lightYellowFlagSurf'] = $m['pg']['image']['convert_image'](lightYellowFlagImg);
			self['darkYellowFlagSurf'] = $m['pg']['image']['convert_image'](darkYellowFlagImg);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadImages'] = $method;
		$method = $pyjs__bind_method2('firstClick', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $attr35,$attr34,$iter4_type,$attr38,$iter9_iter,$iter3_iter,$iter7_type,$iter13_array,$and1,$and2,$iter12_array,$bool2,$bool3,$iter6_array,$17,$bool4,$iter11_array,$iter13_nextval,$iter7_nextval,$iter4_nextval,$iter9_type,x,$iter10_nextval,$iter8_iter,$mod1,$mod2,$iter6_iter,$iter9_nextval,$iter12_nextval,possibleLocations,$attr9,$attr8,$eq1,$iter6_idx,$attr1,$iter11_iter,$iter8_type,$attr2,$attr7,$iter4_array,$iter13_iter,$iter11_type,$iter8_array,$iter10_array,pick,$iter12_idx,$iter9_array,$iter6_type,$iter7_idx,$iter13_idx,$iter4_iter,$iter11_nextval,excemptLocations,$iter3_array,$iter3_nextval,$iter9_idx,$iter13_type,$iter8_idx,$iter7_iter,$attr33,$attr32,$attr31,$attr30,$attr37,$iter8_nextval,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$iter11_idx,$10,$11,$12,$13,j,$18,$19,$iter12_iter,$len1,$iter10_type,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$iter10_iter,$iter6_nextval,$iter3_idx,$20,$pyjs_try_err,$eq2,$iter10_idx,$attr19,$attr18,$iter3_type,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$cmp4,$cmp1,$cmp3,$cmp2,i,$iter12_type,$iter7_array,$iter4_idx,y,$attr36;
			excemptLocations = $p['list']([]);
			$iter3_iter = $p['xrange'](3);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$iter4_iter = $p['xrange'](3);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					j = $iter4_nextval;
					excemptLocations['append'](((((row)-(1))+(i))*(self['numCols']))+(((col)-(1))+(j)));
				}
			}
			possibleLocations = function(){
				var $iter5_nextval,x,$bool1,$attr5,$iter5_idx,$attr3,$collcomp3,$attr4,$attr6,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
			$iter5_iter = $p['xrange']((self['numCols'])*(self['numRows']));
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				x = $iter5_nextval;
				if ((($bool1=!excemptLocations['__contains__'](x)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$collcomp3['append'](x);
				}
			}

	return $collcomp3;}();
			self['mineLocations'] = $p['list']([]);
			$iter6_iter = $p['xrange'](self['numMines']);
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				pick = $m['choice'](possibleLocations);
				possibleLocations['remove'](pick);
				self['mineLocations']['append'](pick);
			}
			$iter7_iter = $p['xrange']((($len1=self['mineLocations']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))));
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				self['mineLocations']['__setitem__'](i, $p['tuple']([Math['floor']((typeof ($1=self['mineLocations'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i))/self['numCols']), (($mod1=(typeof ($3=self['mineLocations'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](i)))!=null && ($mod2=self['numCols'])!=null && typeof $mod1=='string'?
					$p['sprintf']($mod1,$mod2):
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1))]));
			}
			$iter8_iter = self['mineLocations'];
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter8_nextval, 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				$iter9_iter = $p['xrange'](3);
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$iter10_iter = $p['xrange'](3);
					if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter['__iter__']();
						$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						j = $iter10_nextval;
						try {
							if ((($bool3=((($bool2=$and1=((($cmp1=((x)-(1))+(i))===($cmp2=self['numRows'])?0:
								(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
									($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
									$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
								false :
								(typeof $bool2=='object'?
									(typeof $bool2['__nonzero__']=='function'?
										$bool2['__nonzero__']() :
										(typeof $bool2['__len__']=='function'?
											($bool2['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($cmp3=((y)-(1))+(j))===($cmp4=self['numCols'])?0:
								(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
									($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
									$p['cmp']($cmp3, $cmp4))) == -1):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
									false :
									(typeof $bool3=='object'?
										(typeof $bool3['__nonzero__']=='function'?
											$bool3['__nonzero__']() :
											(typeof $bool3['__len__']=='function'?
												($bool3['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								(typeof ($7=(typeof ($5=self['board'])['__array'] != 'undefined'?
									((typeof $5['__array'][$6=self['onlyNonnegative'](((x)-(1))+(i))]) != 'undefined'?$5['__array'][$6]:
										$5['__getitem__']($6)):
										$5['__getitem__'](self['onlyNonnegative'](((x)-(1))+(i)))))['__array'] != 'undefined'?
									((typeof $7['__array'][$8=self['onlyNonnegative'](((y)-(1))+(j))]) != 'undefined'?$7['__array'][$8]:
										$7['__getitem__']($8)):
										$7['__getitem__'](self['onlyNonnegative'](((y)-(1))+(j))))['number'] += 1;
							}
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
				}
			}
			$iter11_iter = self['mineLocations'];
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter11_nextval, 2, null);
				x = $tupleassign2[0];
				y = $tupleassign2[1];
				(typeof ($11=(typeof ($9=self['board'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10=x]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](x)))['__array'] != 'undefined'?
					((typeof $11['__array'][$12=y]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](y))['number'] = 9;
			}
			$iter12_iter = $p['xrange'](self['numRows']);
			if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter['__iter__']();
				$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				x = $iter12_nextval;
				$iter13_iter = $p['xrange'](self['numCols']);
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					y = $iter13_nextval;
					if ((($bool4=(($eq1=(typeof ($15=(typeof ($13=self['board'])['__array'] != 'undefined'?
						((typeof $13['__array'][$14=x]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](x)))['__array'] != 'undefined'?
						((typeof $15['__array'][$16=y]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](y))['number'])===($eq2=0)&&$eq1===null?true:
						($eq1===null?false:($eq2===null?false:
							((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
								((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
									$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
							false :
							(typeof $bool4=='object'?
								(typeof $bool4['__nonzero__']=='function'?
									$bool4['__nonzero__']() :
									(typeof $bool4['__len__']=='function'?
										($bool4['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						(typeof ($19=(typeof ($17=self['board'])['__array'] != 'undefined'?
							((typeof $17['__array'][$18=x]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](x)))['__array'] != 'undefined'?
							((typeof $19['__array'][$20=y]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](y))['number'] = -(1);
					}
				}
			}
			self['whitespaceClick'](row, col);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['firstClick'] = $method;
		$method = $pyjs__bind_method2('mouseClick', function(row, col, button) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				button = arguments[3];
			}
			var $bool18,$bool19,numMinesRemainingRect,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$eq26,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,$bool20,$and8,$and9,$and12,$and3,$and4,$and5,$and6,$and7,$eq21,$eq20,$eq23,$eq22,$bool6,$bool7,$eq27,$bool5,$eq29,$eq28,$bool8,$bool9,$eq18,$attr79,$eq19,$attr77,$attr76,$attr74,$attr73,$attr72,$attr71,$attr70,$attr75,$mod5,$mod4,$eq30,$mod6,numMinesRemainingText,$mod3,$attr68,$attr69,$attr64,$attr65,$attr66,$attr67,$attr60,$attr61,$attr62,$attr63,$bool24,$bool21,$eq16,$bool23,$bool22,$eq17,$attr59,$attr58,$and13,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$and11,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$attr48,$attr49,$attr78,$attr39,$21,$22,$24,tile,$eq8,$eq9,$eq3,$eq6,$eq7,$eq4,$eq5,$cmp15,$cmp14,$and10,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp5,$cmp7,$cmp6,$attr90,$cmp9,$cmp8,$eq25,$23,$eq24;
			if ((($bool5=(($eq3=row)===($eq4=25)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			tile = (typeof ($23=(typeof ($21=self['board'])['__array'] != 'undefined'?
				((typeof $21['__array'][$22=row]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](row)))['__array'] != 'undefined'?
				((typeof $23['__array'][$24=col]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](col));
			if ((($bool8=((($bool6=$and3=(($eq5=button)===($eq6=1)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool7=$and4=(($eq7=tile['isClicked'])===($eq8=false)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq9=tile['isFlagged'])===($eq10=false)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10))))):$and4):$and3)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool9=(($eq11=tile['number'])===($eq12=-(1))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['whitespaceClick'](row, col);
				}
				else if ((($bool10=(((($cmp5=1)===($cmp6=($compare1 = tile['number']))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) < 1)&&((($cmp7=$compare1)===($cmp8=($compare2 = 8))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['openTiles']($p['list']([$p['tuple']([row, col])]));
				}
				else if ((($bool11=(($eq13=tile['number'])===($eq14=9)&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11['__nonzero__']=='function'?
								$bool11['__nonzero__']() :
								(typeof $bool11['__len__']=='function'?
									($bool11['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['gameOver'](row, col, 0);
					$m['pg']['display']['setup']((typeof gameEndedLoop == "undefined"?$m['gameEndedLoop']:gameEndedLoop));
				}
			}
			else if ((($bool13=((($bool12=$and6=(($eq15=button)===($eq16=2)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12['__nonzero__']=='function'?
						$bool12['__nonzero__']() :
						(typeof $bool12['__len__']=='function'?
							($bool12['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq17=tile['isFlagged'])===($eq18=false)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18))))):$and6)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool15=((($bool14=$and8=(((($cmp9=1)===($cmp10=($compare3 = tile['number']))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1)&&((($cmp11=$compare3)===($cmp12=($compare4 = 8))?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) < 1))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq19=self['powerDoubleclickEnabled'])===($eq20=false)&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
								$eq19==$eq20))))):$and8)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['doubleClick'](row, col);
				}
				else if ((($bool17=((($bool16=$and10=(((($cmp13=1)===($cmp14=($compare5 = tile['number']))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) < 1)&&((($cmp15=$compare5)===($cmp16=($compare6 = 8))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) < 1))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq21=self['powerDoubleclickEnabled'])===($eq22=true)&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
								$eq21==$eq22))))):$and10)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['powerDoubleClick'](row, col);
				}
			}
			else if ((($bool19=((($bool18=$and12=(($eq23=button)===($eq24=3)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18['__nonzero__']=='function'?
						$bool18['__nonzero__']() :
						(typeof $bool18['__len__']=='function'?
							($bool18['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq25=tile['isClicked'])===($eq26=false)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26))))):$and12)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool20=(($eq27=tile['isFlagged'])===($eq28=false)&&$eq27===null?true:
					($eq27===null?false:($eq28===null?false:
						((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
							((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
								$eq27==$eq28)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					tile['isFlagged'] = true;
					$m['screen']['blit'](((($bool21=(($mod3=(row)+(col))!=null && ($mod4=2)!=null && typeof $mod3=='string'?
						$p['sprintf']($mod3,$mod4):
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (self['darkYellowFlag']) : (self['lightYellowFlag'])), $p['tuple']([(col)*(self['TILESIZE']), (row)*(self['TILESIZE'])]));
					self['numMinesRemaining'] -= 1;
				}
				else if ((($bool22=(($eq29=tile['isFlagged'])===($eq30=true)&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					tile['isFlagged'] = false;
					$m['pg']['draw']['rect']($m['screen'], ((($bool23=(($mod5=(col)+(row))!=null && ($mod6=2)!=null && typeof $mod5=='string'?
						$p['sprintf']($mod5,$mod6):
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? ($p['tuple']([100, 108, 248])) : ($p['tuple']([104, 113, 255]))), $p['tuple']([(self['TILESIZE'])*(col), (self['TILESIZE'])*(row), self['TILESIZE'], self['TILESIZE']]));
					self['numMinesRemaining'] += 1;
				}
				numMinesRemainingText = $m['bottomBarFont']['render'](('   ')+($p['str'](self['numMinesRemaining'])), true, $p['tuple']([34, 34, 34]), $p['tuple']([200, 200, 210]));
				numMinesRemainingRect = numMinesRemainingText['get_rect']();
				numMinesRemainingRect['__setattr__']('right', (self['screenWidth'])-(9));
				numMinesRemainingRect['__setattr__']('top', (self['screenHeight'])-(23));
				$m['screen']['blit'](numMinesRemainingText, numMinesRemainingRect);
				self['flaggedTileUpdate'](row, col, ((($bool24=tile['isFlagged']) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (true) : (false)));
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['col'],['button']]);
		$cls_definition['mouseClick'] = $method;
		$method = $pyjs__bind_method2('whitespaceClick', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var j,tileCoordinates,$attr99,$eq35,$attr98,$eq32,$eq33,$eq31,$eq36,$eq37,$eq34,$39,$attr106,$eq38,$iter15_idx,$29,$28,$eq39,$iter15_iter,$25,$attr104,$27,$26,$bool25,$attr105,$bool27,$bool26,$attr102,$attr103,$attr100,$attr101,tile,whitespaceQueue,$bool29,$bool28,$pyjs_try_err,$iter14_array,$iter14_type,$iter15_array,$eq40,$cmp17,$attr96,$and16,$and17,$iter14_iter,$and15,$and18,$and19,$cmp19,$cmp18,$iter14_idx,$iter14_nextval,$attr95,$attr94,$attr97,$40,$attr91,$38,$attr93,$attr92,$36,$37,$34,$35,$32,$33,$30,$31,i,$bool30,$bool31,$iter15_nextval,$iter15_type,$and14,$cmp20;
			whitespaceQueue = $p['list']([$p['tuple']([row, col])]);
			tileCoordinates = $p['list']([$p['tuple']([row, col])]);
			while ((($bool25=whitespaceQueue) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25['__nonzero__']=='function'?
							$bool25['__nonzero__']() :
							(typeof $bool25['__len__']=='function'?
								($bool25['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($27=(typeof ($25=whitespaceQueue)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $27['__array'][$28=0]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](0)), (typeof ($31=(typeof ($29=whitespaceQueue)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $31['__array'][$32=1]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](1))]), 2, null);
				row = $tupleassign3[0];
				col = $tupleassign3[1];
				(typeof ($35=(typeof ($33=self['board'])['__array'] != 'undefined'?
					((typeof $33['__array'][$34=row]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](row)))['__array'] != 'undefined'?
					((typeof $35['__array'][$36=col]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](col))['whitespaceClicked'] = true;
				$iter14_iter = $p['xrange'](3);
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					$iter15_iter = $p['xrange'](3);
					if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
						$iter15_type = 0;
					} else {
						$iter15_iter = $iter15_iter['__iter__']();
						$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter15_idx = 0;
					while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
						j = $iter15_nextval;
						try {
							tile = (typeof ($39=(typeof ($37=self['board'])['__array'] != 'undefined'?
								((typeof $37['__array'][$38=self['onlyNonnegative'](((row)-(1))+(i))]) != 'undefined'?$37['__array'][$38]:
									$37['__getitem__']($38)):
									$37['__getitem__'](self['onlyNonnegative'](((row)-(1))+(i)))))['__array'] != 'undefined'?
								((typeof $39['__array'][$40=self['onlyNonnegative'](((col)-(1))+(j))]) != 'undefined'?$39['__array'][$40]:
									$39['__getitem__']($40)):
									$39['__getitem__'](self['onlyNonnegative'](((col)-(1))+(j))));
							if ((($bool28=((($bool26=$and14=(($eq31=tile['number'])===($eq32=-(1))&&$eq31===null?true:
								($eq31===null?false:($eq32===null?false:
									((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
										((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
											$eq31==$eq32)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
								false :
								(typeof $bool26=='object'?
									(typeof $bool26['__nonzero__']=='function'?
										$bool26['__nonzero__']() :
										(typeof $bool26['__len__']=='function'?
											($bool26['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool27=$and15=(($eq33=tile['whitespaceClicked'])===($eq34=false)&&$eq33===null?true:
								($eq33===null?false:($eq34===null?false:
									((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
										((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
											$eq33==$eq34)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
								false :
								(typeof $bool27=='object'?
									(typeof $bool27['__nonzero__']=='function'?
										$bool27['__nonzero__']() :
										(typeof $bool27['__len__']=='function'?
											($bool27['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?(($eq35=tile['isFlagged'])===($eq36=false)&&$eq35===null?true:
								($eq35===null?false:($eq36===null?false:
									((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
										((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
											$eq35==$eq36))))):$and15):$and14)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
									false :
									(typeof $bool28=='object'?
										(typeof $bool28['__nonzero__']=='function'?
											$bool28['__nonzero__']() :
											(typeof $bool28['__len__']=='function'?
												($bool28['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								tile['whitespaceClicked'] = true;
								whitespaceQueue['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
								tileCoordinates['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
							}
							else if ((($bool31=((($bool29=$and17=(((($cmp17=1)===($cmp18=($compare7 = tile['number']))?0:
								(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
									($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
									$p['cmp']($cmp17, $cmp18))) < 1)&&((($cmp19=$compare7)===($cmp20=($compare8 = 8))?0:
								(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
									($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
									$p['cmp']($cmp19, $cmp20))) < 1))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
								false :
								(typeof $bool29=='object'?
									(typeof $bool29['__nonzero__']=='function'?
										$bool29['__nonzero__']() :
										(typeof $bool29['__len__']=='function'?
											($bool29['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool30=$and18=(($eq37=tile['isClicked'])===($eq38=false)&&$eq37===null?true:
								($eq37===null?false:($eq38===null?false:
									((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
										((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
											$eq37==$eq38)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
								false :
								(typeof $bool30=='object'?
									(typeof $bool30['__nonzero__']=='function'?
										$bool30['__nonzero__']() :
										(typeof $bool30['__len__']=='function'?
											($bool30['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?(($eq39=tile['isFlagged'])===($eq40=false)&&$eq39===null?true:
								($eq39===null?false:($eq40===null?false:
									((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
										((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
											$eq39==$eq40))))):$and18):$and17)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
									false :
									(typeof $bool31=='object'?
										(typeof $bool31['__nonzero__']=='function'?
											$bool31['__nonzero__']() :
											(typeof $bool31['__len__']=='function'?
												($bool31['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								tileCoordinates['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
							}
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
				}
				whitespaceQueue['pop'](0);
			}
			self['openTiles'](tileCoordinates);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['whitespaceClick'] = $method;
		$method = $pyjs__bind_method2('doubleClick', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $eq54,$cmp21,$cmp22,$cmp23,$cmp24,$eq51,$eq52,$eq53,$iter17_type,$eq58,$attr107,$49,$48,$43,$42,$41,$47,$46,$45,$attr109,$iter17_nextval,tile,tileCoordinates,$attr119,$attr118,$eq55,$attr111,$attr110,$attr113,$attr112,$attr115,$attr114,$attr117,$attr116,$eq57,$50,$eq50,$52,$53,$54,$55,$56,$iter16_idx,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$iter16_nextval,$bool41,$bool40,$51,$bool32,$bool33,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$eq56,j,$pyjs_try_err,i,$attr108,$iter17_idx,$44,$iter16_iter,$iter17_iter,$iter16_type,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$iter17_array,$iter16_array,$eq49,$eq48,$eq43,$eq42,$eq41,$eq47,$eq46,$eq45,$eq44,$attr133,$attr132,$attr131,$attr130,$attr134;
			tileCoordinates = $p['list']([$p['tuple']([row, col])]);
			(typeof ($43=(typeof ($41=self['board'])['__array'] != 'undefined'?
				((typeof $41['__array'][$42=row]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__'](row)))['__array'] != 'undefined'?
				((typeof $43['__array'][$44=col]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__'](col))['wasDoubleClicked'] = true;
			if ((($bool32=!(($eq41=(typeof ($47=(typeof ($45=self['board'])['__array'] != 'undefined'?
				((typeof $45['__array'][$46=row]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](row)))['__array'] != 'undefined'?
				((typeof $47['__array'][$48=col]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](col))['amtSurroundingFlags'])===($eq42=(typeof ($51=(typeof ($49=self['board'])['__array'] != 'undefined'?
				((typeof $49['__array'][$50=row]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](row)))['__array'] != 'undefined'?
				((typeof $51['__array'][$52=col]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](col))['number'])&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32['__nonzero__']=='function'?
							$bool32['__nonzero__']() :
							(typeof $bool32['__len__']=='function'?
								($bool32['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			$iter16_iter = $p['xrange'](3);
			if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter['__iter__']();
				$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				i = $iter16_nextval;
				$iter17_iter = $p['xrange'](3);
				if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter['__iter__']();
					$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
					j = $iter17_nextval;
					try {
						tile = (typeof ($55=(typeof ($53=self['board'])['__array'] != 'undefined'?
							((typeof $53['__array'][$54=self['onlyNonnegative'](((row)-(1))+(i))]) != 'undefined'?$53['__array'][$54]:
								$53['__getitem__']($54)):
								$53['__getitem__'](self['onlyNonnegative'](((row)-(1))+(i)))))['__array'] != 'undefined'?
							((typeof $55['__array'][$56=self['onlyNonnegative'](((col)-(1))+(j))]) != 'undefined'?$55['__array'][$56]:
								$55['__getitem__']($56)):
								$55['__getitem__'](self['onlyNonnegative'](((col)-(1))+(j))));
						if ((($bool34=((($bool33=$and20=(($eq43=tile['number'])===($eq44=-(1))&&$eq43===null?true:
							($eq43===null?false:($eq44===null?false:
								((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
									((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
										$eq43==$eq44)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
							false :
							(typeof $bool33=='object'?
								(typeof $bool33['__nonzero__']=='function'?
									$bool33['__nonzero__']() :
									(typeof $bool33['__len__']=='function'?
										($bool33['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?(($eq45=tile['isClicked'])===($eq46=false)&&$eq45===null?true:
							($eq45===null?false:($eq46===null?false:
								((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
									((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
										$eq45==$eq46))))):$and20)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
								false :
								(typeof $bool34=='object'?
									(typeof $bool34['__nonzero__']=='function'?
										$bool34['__nonzero__']() :
										(typeof $bool34['__len__']=='function'?
											($bool34['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['whitespaceClick'](((row)-(1))+(i), ((col)-(1))+(j));
						}
						else if ((($bool36=((($bool35=$and22=(((($cmp21=1)===($cmp22=($compare9 = tile['number']))?0:
							(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
								($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
								$p['cmp']($cmp21, $cmp22))) < 1)&&((($cmp23=$compare9)===($cmp24=($compare10 = 8))?0:
							(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
								($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
								$p['cmp']($cmp23, $cmp24))) < 1))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
							false :
							(typeof $bool35=='object'?
								(typeof $bool35['__nonzero__']=='function'?
									$bool35['__nonzero__']() :
									(typeof $bool35['__len__']=='function'?
										($bool35['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($eq47=$p['tuple']([i, j]))===($eq48=$p['tuple']([1, 1]))&&$eq47===null?true:
							($eq47===null?false:($eq48===null?false:
								((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
									((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
										$eq47==$eq48))))):$and22)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
								false :
								(typeof $bool36=='object'?
									(typeof $bool36['__nonzero__']=='function'?
										$bool36['__nonzero__']() :
										(typeof $bool36['__len__']=='function'?
											($bool36['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool37=(($eq49=tile['isClicked'])===($eq50=false)&&$eq49===null?true:
								($eq49===null?false:($eq50===null?false:
									((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
										((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
											$eq49==$eq50)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
									false :
									(typeof $bool37=='object'?
										(typeof $bool37['__nonzero__']=='function'?
											$bool37['__nonzero__']() :
											(typeof $bool37['__len__']=='function'?
												($bool37['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								tileCoordinates['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
							}
							if ((($bool39=((($bool38=$and24=(($eq51=self['powerDoubleclickEnabled'])===($eq52=true)&&$eq51===null?true:
								($eq51===null?false:($eq52===null?false:
									((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
										((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
											$eq51==$eq52)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
								false :
								(typeof $bool38=='object'?
									(typeof $bool38['__nonzero__']=='function'?
										$bool38['__nonzero__']() :
										(typeof $bool38['__len__']=='function'?
											($bool38['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?(($eq53=tile['wasDoubleClicked'])===($eq54=false)&&$eq53===null?true:
								($eq53===null?false:($eq54===null?false:
									((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
										((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
											$eq53==$eq54))))):$and24)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
									false :
									(typeof $bool39=='object'?
										(typeof $bool39['__nonzero__']=='function'?
											$bool39['__nonzero__']() :
											(typeof $bool39['__len__']=='function'?
												($bool39['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								tile['wasDoubleClicked'] = true;
								self['doubleClickQueue']['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
							}
						}
						else if ((($bool41=((($bool40=$and26=(($eq55=tile['number'])===($eq56=9)&&$eq55===null?true:
							($eq55===null?false:($eq56===null?false:
								((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55['__cmp__']=='function'?$eq55['__cmp__']($eq56) === 0:
									((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56['__cmp__']=='function'?$eq56['__cmp__']($eq55) === 0:
										$eq55==$eq56)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
							false :
							(typeof $bool40=='object'?
								(typeof $bool40['__nonzero__']=='function'?
									$bool40['__nonzero__']() :
									(typeof $bool40['__len__']=='function'?
										($bool40['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?(($eq57=tile['isFlagged'])===($eq58=false)&&$eq57===null?true:
							($eq57===null?false:($eq58===null?false:
								((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57['__cmp__']=='function'?$eq57['__cmp__']($eq58) === 0:
									((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58['__cmp__']=='function'?$eq58['__cmp__']($eq57) === 0:
										$eq57==$eq58))))):$and26)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
								false :
								(typeof $bool41=='object'?
									(typeof $bool41['__nonzero__']=='function'?
										$bool41['__nonzero__']() :
										(typeof $bool41['__len__']=='function'?
											($bool41['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['gameOver'](((row)-(1))+(i), ((col)-(1))+(j), 0);
							$m['pg']['display']['setup']((typeof gameEndedLoop == "undefined"?$m['gameEndedLoop']:gameEndedLoop));
							return null;
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			self['openTiles'](tileCoordinates);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['doubleClick'] = $method;
		$method = $pyjs__bind_method2('powerDoubleClick', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $bool47,$attr153,$66,$bool45,$and29,$and28,$cmp25,$cmp26,$cmp27,$cmp28,$eq59,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr149,$iter18_idx,$iter19_iter,$iter19_nextval,$pyjs_try_err,$68,tile,$64,$67,$iter18_nextval,$61,$60,$63,$62,$iter18_type,$bool46,$iter18_iter,$bool44,$bool43,$bool42,$attr148,$iter19_array,$65,$and30,$and31,$attr154,$iter19_idx,$attr151,$attr150,$iter18_array,$attr152,i,j,$eq61,$eq60,$eq62,$58,$59,$iter19_type,$attr137,$attr136,$attr135,$attr139,$attr138,$57;
			self['doubleClickQueue'] = $p['list']([]);
			$iter18_iter = $p['xrange'](3);
			if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
				$iter18_type = 0;
			} else {
				$iter18_iter = $iter18_iter['__iter__']();
				$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter18_idx = 0;
			while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
				i = $iter18_nextval;
				$iter19_iter = $p['xrange'](3);
				if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter['__iter__']();
					$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					j = $iter19_nextval;
					try {
						tile = (typeof ($59=(typeof ($57=self['board'])['__array'] != 'undefined'?
							((typeof $57['__array'][$58=self['onlyNonnegative'](((row)-(1))+(i))]) != 'undefined'?$57['__array'][$58]:
								$57['__getitem__']($58)):
								$57['__getitem__'](self['onlyNonnegative'](((row)-(1))+(i)))))['__array'] != 'undefined'?
							((typeof $59['__array'][$60=self['onlyNonnegative'](((col)-(1))+(j))]) != 'undefined'?$59['__array'][$60]:
								$59['__getitem__']($60)):
								$59['__getitem__'](self['onlyNonnegative'](((col)-(1))+(j))));
						if ((($bool45=((($bool42=$and28=(($eq59=tile['amtSurroundingFlags'])===($eq60=tile['number'])&&$eq59===null?true:
							($eq59===null?false:($eq60===null?false:
								((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59['__cmp__']=='function'?$eq59['__cmp__']($eq60) === 0:
									((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60['__cmp__']=='function'?$eq60['__cmp__']($eq59) === 0:
										$eq59==$eq60)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
							false :
							(typeof $bool42=='object'?
								(typeof $bool42['__nonzero__']=='function'?
									$bool42['__nonzero__']() :
									(typeof $bool42['__len__']=='function'?
										($bool42['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool43=$and29=((($cmp25=((row)-(1))+(i))===($cmp26=self['numRows'])?0:
							(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
								($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
								$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
							false :
							(typeof $bool43=='object'?
								(typeof $bool43['__nonzero__']=='function'?
									$bool43['__nonzero__']() :
									(typeof $bool43['__len__']=='function'?
										($bool43['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool44=$and30=((($cmp27=((col)-(1))+(j))===($cmp28=self['numCols'])?0:
							(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
								($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
								$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
							false :
							(typeof $bool44=='object'?
								(typeof $bool44['__nonzero__']=='function'?
									$bool44['__nonzero__']() :
									(typeof $bool44['__len__']=='function'?
										($bool44['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?tile['isClicked']:$and30):$and29):$and28)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
								false :
								(typeof $bool45=='object'?
									(typeof $bool45['__nonzero__']=='function'?
										$bool45['__nonzero__']() :
										(typeof $bool45['__len__']=='function'?
											($bool45['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['doubleClickQueue']['append']($p['tuple']([((row)-(1))+(i), ((col)-(1))+(j)]));
							tile['wasDoubleClicked'] = true;
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			while ((($bool46=self['doubleClickQueue']) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool47=(($eq61=self['started'])===($eq62=false)&&$eq61===null?true:
					($eq61===null?false:($eq62===null?false:
						((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61['__cmp__']=='function'?$eq61['__cmp__']($eq62) === 0:
							((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62['__cmp__']=='function'?$eq62['__cmp__']($eq61) === 0:
								$eq61==$eq62)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([(typeof ($63=(typeof ($61=self['doubleClickQueue'])['__array'] != 'undefined'?
					((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $63['__array'][$64=0]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](0)), (typeof ($67=(typeof ($65=self['doubleClickQueue'])['__array'] != 'undefined'?
					((typeof $65['__array'][$66=0]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $67['__array'][$68=1]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__'](1))]), 2, null);
				row = $tupleassign4[0];
				col = $tupleassign4[1];
				self['doubleClick'](row, col);
				self['doubleClickQueue']['pop'](0);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['powerDoubleClick'] = $method;
		$method = $pyjs__bind_method2('flaggedTileUpdate', function(row, col, flagPlaced) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				flagPlaced = arguments[3];
			}
			var $bool54,$bool55,$iter20_nextval,$eq66,$bool50,$bool51,$bool52,$bool53,$attr173,$attr176,$bool56,$attr172,$eq74,$and33,$attr171,$cmp36,$cmp29,$eq71,$and36,$iter20_array,$and37,$attr168,$attr169,$attr164,$attr165,$attr167,$attr160,$attr161,$attr162,$attr163,$eq70,$pyjs_try_err,$69,$and32,$eq72,tile,$71,$iter20_iter,$iter21_idx,$attr166,$iter21_nextval,$70,$bool49,$bool48,$attr175,$iter21_iter,$attr156,$bool57,$iter20_type,$and34,$and35,$cmp35,$cmp34,$cmp33,$cmp32,$cmp31,$cmp30,$attr155,$attr157,$eq69,$eq68,i,$eq64,$eq67,j,$attr159,$attr158,$eq63,$attr170,$iter21_type,$eq65,$iter20_idx,$iter21_array,$attr174,$eq73,$72;
			$iter20_iter = $p['xrange'](3);
			if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
				$iter20_type = 0;
			} else {
				$iter20_iter = $iter20_iter['__iter__']();
				$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter20_idx = 0;
			while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
				i = $iter20_nextval;
				$iter21_iter = $p['xrange'](3);
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					j = $iter21_nextval;
					if ((($bool48=(($eq63=self['started'])===($eq64=false)&&$eq63===null?true:
						($eq63===null?false:($eq64===null?false:
							((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63['__cmp__']=='function'?$eq63['__cmp__']($eq64) === 0:
								((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64['__cmp__']=='function'?$eq64['__cmp__']($eq63) === 0:
									$eq63==$eq64)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
							false :
							(typeof $bool48=='object'?
								(typeof $bool48['__nonzero__']=='function'?
									$bool48['__nonzero__']() :
									(typeof $bool48['__len__']=='function'?
										($bool48['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return null;
					}
					try {
						tile = (typeof ($71=(typeof ($69=self['board'])['__array'] != 'undefined'?
							((typeof $69['__array'][$70=self['onlyNonnegative'](((row)-(1))+(i))]) != 'undefined'?$69['__array'][$70]:
								$69['__getitem__']($70)):
								$69['__getitem__'](self['onlyNonnegative'](((row)-(1))+(i)))))['__array'] != 'undefined'?
							((typeof $71['__array'][$72=self['onlyNonnegative'](((col)-(1))+(j))]) != 'undefined'?$71['__array'][$72]:
								$71['__getitem__']($72)):
								$71['__getitem__'](self['onlyNonnegative'](((col)-(1))+(j))));
						if ((($bool49=(((($cmp29=1)===($cmp30=($compare11 = tile['number']))?0:
							(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
								($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
								$p['cmp']($cmp29, $cmp30))) < 1)&&((($cmp31=$compare11)===($cmp32=($compare12 = 8))?0:
							(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
								($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
								$p['cmp']($cmp31, $cmp32))) < 1))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
								false :
								(typeof $bool49=='object'?
									(typeof $bool49['__nonzero__']=='function'?
										$bool49['__nonzero__']() :
										(typeof $bool49['__len__']=='function'?
											($bool49['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							tile['amtSurroundingFlags'] += ((($bool50=flagPlaced) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
								false :
								(typeof $bool50=='object'?
									(typeof $bool50['__nonzero__']=='function'?
										$bool50['__nonzero__']() :
										(typeof $bool50['__len__']=='function'?
											($bool50['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )? (1) : (-(1)));
							tile['wasDoubleClicked'] = false;
						}
						if ((($bool54=((($bool51=$and32=(($eq65=self['autoTileOpeningEnabled'])===($eq66=true)&&$eq65===null?true:
							($eq65===null?false:($eq66===null?false:
								((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65['__cmp__']=='function'?$eq65['__cmp__']($eq66) === 0:
									((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66['__cmp__']=='function'?$eq66['__cmp__']($eq65) === 0:
										$eq65==$eq66)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51['__nonzero__']=='function'?
									$bool51['__nonzero__']() :
									(typeof $bool51['__len__']=='function'?
										($bool51['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool52=$and33=(($eq67=tile['amtSurroundingFlags'])===($eq68=tile['number'])&&$eq67===null?true:
							($eq67===null?false:($eq68===null?false:
								((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67['__cmp__']=='function'?$eq67['__cmp__']($eq68) === 0:
									((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68['__cmp__']=='function'?$eq68['__cmp__']($eq67) === 0:
										$eq67==$eq68)))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
							false :
							(typeof $bool52=='object'?
								(typeof $bool52['__nonzero__']=='function'?
									$bool52['__nonzero__']() :
									(typeof $bool52['__len__']=='function'?
										($bool52['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool53=$and34=((($cmp33=((row)-(1))+(i))===($cmp34=self['numRows'])?0:
							(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
								($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
								$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
							false :
							(typeof $bool53=='object'?
								(typeof $bool53['__nonzero__']=='function'?
									$bool53['__nonzero__']() :
									(typeof $bool53['__len__']=='function'?
										($bool53['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($cmp35=((col)-(1))+(j))===($cmp36=self['numCols'])?0:
							(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
								($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
								$p['cmp']($cmp35, $cmp36))) == -1):$and34):$and33):$and32)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
								false :
								(typeof $bool54=='object'?
									(typeof $bool54['__nonzero__']=='function'?
										$bool54['__nonzero__']() :
										(typeof $bool54['__len__']=='function'?
											($bool54['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool55=(($eq69=self['powerDoubleclickEnabled'])===($eq70=true)&&$eq69===null?true:
								($eq69===null?false:($eq70===null?false:
									((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69['__cmp__']=='function'?$eq69['__cmp__']($eq70) === 0:
										((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70['__cmp__']=='function'?$eq70['__cmp__']($eq69) === 0:
											$eq69==$eq70)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
									false :
									(typeof $bool55=='object'?
										(typeof $bool55['__nonzero__']=='function'?
											$bool55['__nonzero__']() :
											(typeof $bool55['__len__']=='function'?
												($bool55['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['powerDoubleClick'](((row)-(1))+(i), ((col)-(1))+(j));
							}
							else if ((($bool57=((($bool56=$and36=(($eq71=self['powerDoubleclickEnabled'])===($eq72=false)&&$eq71===null?true:
								($eq71===null?false:($eq72===null?false:
									((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71['__cmp__']=='function'?$eq71['__cmp__']($eq72) === 0:
										((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72['__cmp__']=='function'?$eq72['__cmp__']($eq71) === 0:
											$eq71==$eq72)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
								false :
								(typeof $bool56=='object'?
									(typeof $bool56['__nonzero__']=='function'?
										$bool56['__nonzero__']() :
										(typeof $bool56['__len__']=='function'?
											($bool56['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?(($eq73=tile['isClicked'])===($eq74=true)&&$eq73===null?true:
								($eq73===null?false:($eq74===null?false:
									((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73['__cmp__']=='function'?$eq73['__cmp__']($eq74) === 0:
										((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74['__cmp__']=='function'?$eq74['__cmp__']($eq73) === 0:
											$eq73==$eq74))))):$and36)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
									false :
									(typeof $bool57=='object'?
										(typeof $bool57['__nonzero__']=='function'?
											$bool57['__nonzero__']() :
											(typeof $bool57['__len__']=='function'?
												($bool57['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['powerDoubleClick'](((row)-(1))+(i), ((col)-(1))+(j));
							}
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['col'],['flagPlaced']]);
		$cls_definition['flaggedTileUpdate'] = $method;
		$method = $pyjs__bind_method2('openTiles', function(tileCoordinates) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tileCoordinates = arguments[1];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,font,row,$75,$eq81,$attr212,$attr213,$attr210,$attr202,$attr216,$attr214,$attr215,$iter22_array,$mod7,$mod8,$attr189,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$iter22_iter,$iter22_nextval,$eq87,$eq86,$eq85,$eq84,$eq83,$eq82,$74,$eq80,$attr177,$iter22_idx,$eq89,$eq88,col,color,$bool58,$bool59,txtRect,txt,$eq90,$eq91,$eq92,$eq93,$eq94,$eq95,$eq96,$bool61,$bool60,$bool63,$bool62,$bool65,$bool64,$bool67,$73,$bool69,$bool68,$76,$bool66,$attr179,$attr178,$iter22_type,$attr211,$eq78,$eq79,$eq76,$eq77,$eq75,tile,$or1,$attr188,$or2,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181;
			font = $m['pg']['font']['SysFont']('Lucida Grande', $p['float_int']((self['TILESIZE'])/(1.1)));
			$iter22_iter = tileCoordinates;
			if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
				$iter22_type = 0;
			} else {
				$iter22_iter = $iter22_iter['__iter__']();
				$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter22_idx = 0;
			while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
				var $tupleassign5 = $p['__ass_unpack']($iter22_nextval, 2, null);
				row = $tupleassign5[0];
				col = $tupleassign5[1];
				tile = (typeof ($75=(typeof ($73=self['board'])['__array'] != 'undefined'?
					((typeof $73['__array'][$74=row]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__'](row)))['__array'] != 'undefined'?
					((typeof $75['__array'][$76=col]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__'](col));
				if ((($bool58=(($eq75=tile['isClicked'])===($eq76=true)&&$eq75===null?true:
					($eq75===null?false:($eq76===null?false:
						((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75['__cmp__']=='function'?$eq75['__cmp__']($eq76) === 0:
							((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76['__cmp__']=='function'?$eq76['__cmp__']($eq75) === 0:
								$eq75==$eq76)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58['__nonzero__']=='function'?
								$bool58['__nonzero__']() :
								(typeof $bool58['__len__']=='function'?
									($bool58['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				tile['isClicked'] = true;
				self['numTilesRemaining'] -= 1;
				if ((($bool60=((($bool59=$or1=(($eq77=tile['number'])===($eq78=1)&&$eq77===null?true:
					($eq77===null?false:($eq78===null?false:
						((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77['__cmp__']=='function'?$eq77['__cmp__']($eq78) === 0:
							((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78['__cmp__']=='function'?$eq78['__cmp__']($eq77) === 0:
								$eq77==$eq78)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59['__nonzero__']=='function'?
							$bool59['__nonzero__']() :
							(typeof $bool59['__len__']=='function'?
								($bool59['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:(($eq79=tile['number'])===($eq80=-(1))&&$eq79===null?true:
					($eq79===null?false:($eq80===null?false:
						((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79['__cmp__']=='function'?$eq79['__cmp__']($eq80) === 0:
							((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80['__cmp__']=='function'?$eq80['__cmp__']($eq79) === 0:
								$eq79==$eq80))))))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60['__nonzero__']=='function'?
								$bool60['__nonzero__']() :
								(typeof $bool60['__len__']=='function'?
									($bool60['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([95, 104, 234]);
				}
				else if ((($bool61=(($eq81=tile['number'])===($eq82=2)&&$eq81===null?true:
					($eq81===null?false:($eq82===null?false:
						((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81['__cmp__']=='function'?$eq81['__cmp__']($eq82) === 0:
							((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82['__cmp__']=='function'?$eq82['__cmp__']($eq81) === 0:
								$eq81==$eq82)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61['__nonzero__']=='function'?
								$bool61['__nonzero__']() :
								(typeof $bool61['__len__']=='function'?
									($bool61['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([61, 166, 66]);
				}
				else if ((($bool62=(($eq83=tile['number'])===($eq84=3)&&$eq83===null?true:
					($eq83===null?false:($eq84===null?false:
						((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83['__cmp__']=='function'?$eq83['__cmp__']($eq84) === 0:
							((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84['__cmp__']=='function'?$eq84['__cmp__']($eq83) === 0:
								$eq83==$eq84)))))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([217, 72, 66]);
				}
				else if ((($bool63=(($eq85=tile['number'])===($eq86=4)&&$eq85===null?true:
					($eq85===null?false:($eq86===null?false:
						((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85['__cmp__']=='function'?$eq85['__cmp__']($eq86) === 0:
							((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86['__cmp__']=='function'?$eq86['__cmp__']($eq85) === 0:
								$eq85==$eq86)))))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63['__nonzero__']=='function'?
								$bool63['__nonzero__']() :
								(typeof $bool63['__len__']=='function'?
									($bool63['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([67, 72, 170]);
				}
				else if ((($bool64=(($eq87=tile['number'])===($eq88=5)&&$eq87===null?true:
					($eq87===null?false:($eq88===null?false:
						((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87['__cmp__']=='function'?$eq87['__cmp__']($eq88) === 0:
							((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88['__cmp__']=='function'?$eq88['__cmp__']($eq87) === 0:
								$eq87==$eq88)))))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
						false :
						(typeof $bool64=='object'?
							(typeof $bool64['__nonzero__']=='function'?
								$bool64['__nonzero__']() :
								(typeof $bool64['__len__']=='function'?
									($bool64['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([138, 0, 198]);
				}
				else if ((($bool65=(($eq89=tile['number'])===($eq90=6)&&$eq89===null?true:
					($eq89===null?false:($eq90===null?false:
						((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89['__cmp__']=='function'?$eq89['__cmp__']($eq90) === 0:
							((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90['__cmp__']=='function'?$eq90['__cmp__']($eq89) === 0:
								$eq89==$eq90)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([104, 73, 0]);
				}
				else if ((($bool66=(($eq91=tile['number'])===($eq92=7)&&$eq91===null?true:
					($eq91===null?false:($eq92===null?false:
						((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91['__cmp__']=='function'?$eq91['__cmp__']($eq92) === 0:
							((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92['__cmp__']=='function'?$eq92['__cmp__']($eq91) === 0:
								$eq91==$eq92)))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66['__nonzero__']=='function'?
								$bool66['__nonzero__']() :
								(typeof $bool66['__len__']=='function'?
									($bool66['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([50, 50, 50]);
				}
				else if ((($bool67=(($eq93=tile['number'])===($eq94=8)&&$eq93===null?true:
					($eq93===null?false:($eq94===null?false:
						((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93['__cmp__']=='function'?$eq93['__cmp__']($eq94) === 0:
							((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94['__cmp__']=='function'?$eq94['__cmp__']($eq93) === 0:
								$eq93==$eq94)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67['__nonzero__']=='function'?
								$bool67['__nonzero__']() :
								(typeof $bool67['__len__']=='function'?
									($bool67['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					color = $p['tuple']([0, 0, 0]);
				}
				txt = font['render'](((($bool68=(($eq95=tile['number'])===($eq96=-(1))&&$eq95===null?true:
					($eq95===null?false:($eq96===null?false:
						((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95['__cmp__']=='function'?$eq95['__cmp__']($eq96) === 0:
							((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96['__cmp__']=='function'?$eq96['__cmp__']($eq95) === 0:
								$eq95==$eq96)))))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68['__nonzero__']=='function'?
							$bool68['__nonzero__']() :
							(typeof $bool68['__len__']=='function'?
								($bool68['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ('') : ($p['str'](tile['number']))), true, color);
				txtRect = txt['get_rect']();
				txtRect['__setattr__']('center', $p['tuple']([$p['float_int']((self['TILESIZE'])*((col)+(0.5))), $p['float_int']((self['TILESIZE'])*((row)+(0.5)))]));
				$m['pg']['draw']['rect']($m['screen'], ((($bool69=(($mod7=(col)+(row))!=null && ($mod8=2)!=null && typeof $mod7=='string'?
					$p['sprintf']($mod7,$mod8):
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69['__nonzero__']=='function'?
							$bool69['__nonzero__']() :
							(typeof $bool69['__len__']=='function'?
								($bool69['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['tuple']([245, 245, 245])) : ($p['tuple']([251, 250, 251]))), $p['tuple']([(self['TILESIZE'])*(col), (self['TILESIZE'])*(row), self['TILESIZE'], self['TILESIZE']]));
				$m['screen']['blit'](txt, txtRect);
			}
			$m['pg']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self'],['tileCoordinates']]);
		$cls_definition['openTiles'] = $method;
		$method = $pyjs__bind_method2('gameOver', function(row, col, gameState) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				gameState = arguments[3];
			}
			var numMinesRemainingRect,newGameText,$cmp37,font,$bool83,$bool82,$bool81,$bool80,$iter24_iter,$attr292,$attr293,$attr290,$attr291,$and38,$and39,$cmp39,$cmp38,$attr221,$attr296,$attr297,$eq112,$eq113,$eq110,$eq111,$eq116,$attr294,$eq114,$eq115,$attr298,$attr295,$attr218,$attr219,$mod13,$attr217,$attr278,$or5,$iter23_type,$or4,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,$or6,numMinesRemainingText,$mod11,$cmp40,$attr285,$mod9,$attr222,$eq101,$eq100,$eq103,$eq102,$eq105,$eq104,$eq107,$eq106,$eq109,$eq108,$mod12,$attr289,$attr288,$attr284,$attr261,$attr269,$attr268,$attr263,$attr262,$attr260,$attr267,$attr266,$attr265,$80,$attr264,$77,$iter24_idx,$78,$79,$and45,$mod14,$and44,$attr258,$attr259,$attr256,$attr257,$attr254,$attr255,$attr252,$attr253,$attr250,$attr251,$attr279,$bool78,$eq97,$eq98,$eq99,$bool79,$and41,$and40,$and43,$and42,$attr241,$attr240,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr239,$iter23_array,$iter23_nextval,j,$iter24_array,$attr238,$attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$bool76,$bool77,$bool74,$bool75,$bool72,$bool73,$bool70,$bool71,$iter23_idx,$iter23_iter,$iter24_type,tile,$iter24_nextval,$attr227,$attr226,$attr225,$attr224,$attr223,$mod10,$or3,$attr220,$attr287,$attr229,$attr228,$attr286,$attr281,$attr280,$attr283,i,$attr282;
			self['started'] = false;
			numMinesRemainingText = $m['bottomBarFont']['render'](('   ')+($p['str'](self['numMinesRemaining'])), true, $p['tuple']([34, 34, 34]), $p['tuple']([200, 200, 210]));
			numMinesRemainingRect = numMinesRemainingText['get_rect']();
			numMinesRemainingRect['__setattr__']('right', (self['screenWidth'])-(9));
			numMinesRemainingRect['__setattr__']('top', (self['screenHeight'])-(23));
			$m['screen']['blit'](numMinesRemainingText, numMinesRemainingRect);
			$iter23_iter = $p['xrange'](self['numRows']);
			if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
				$iter23_type = 0;
			} else {
				$iter23_iter = $iter23_iter['__iter__']();
				$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter23_idx = 0;
			while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
				i = $iter23_nextval;
				$iter24_iter = $p['xrange'](self['numCols']);
				if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
					$iter24_type = 0;
				} else {
					$iter24_iter = $iter24_iter['__iter__']();
					$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter24_idx = 0;
				while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
					j = $iter24_nextval;
					tile = (typeof ($79=(typeof ($77=self['board'])['__array'] != 'undefined'?
						((typeof $77['__array'][$78=i]) != 'undefined'?$77['__array'][$78]:
							$77['__getitem__']($78)):
							$77['__getitem__'](i)))['__array'] != 'undefined'?
						((typeof $79['__array'][$80=j]) != 'undefined'?$79['__array'][$80]:
							$79['__getitem__']($80)):
							$79['__getitem__'](j));
					if ((($bool73=((($bool70=$and38=(($eq97=tile['number'])===($eq98=9)&&$eq97===null?true:
						($eq97===null?false:($eq98===null?false:
							((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97['__cmp__']=='function'?$eq97['__cmp__']($eq98) === 0:
								((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98['__cmp__']=='function'?$eq98['__cmp__']($eq97) === 0:
									$eq97==$eq98)))))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
						false :
						(typeof $bool70=='object'?
							(typeof $bool70['__nonzero__']=='function'?
								$bool70['__nonzero__']() :
								(typeof $bool70['__len__']=='function'?
									($bool70['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool71=$and39=(($eq99=tile['isClicked'])===($eq100=false)&&$eq99===null?true:
						($eq99===null?false:($eq100===null?false:
							((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99['__cmp__']=='function'?$eq99['__cmp__']($eq100) === 0:
								((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100['__cmp__']=='function'?$eq100['__cmp__']($eq99) === 0:
									$eq99==$eq100)))))) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71['__nonzero__']=='function'?
								$bool71['__nonzero__']() :
								(typeof $bool71['__len__']=='function'?
									($bool71['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool72=$and40=(($eq101=tile['isFlagged'])===($eq102=false)&&$eq101===null?true:
						($eq101===null?false:($eq102===null?false:
							((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101['__cmp__']=='function'?$eq101['__cmp__']($eq102) === 0:
								((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102['__cmp__']=='function'?$eq102['__cmp__']($eq101) === 0:
									$eq101==$eq102)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72['__nonzero__']=='function'?
								$bool72['__nonzero__']() :
								(typeof $bool72['__len__']=='function'?
									($bool72['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq103=$p['tuple']([i, j]))===($eq104=$p['tuple']([row, col]))&&$eq103===null?true:
						($eq103===null?false:($eq104===null?false:
							((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103['__cmp__']=='function'?$eq103['__cmp__']($eq104) === 0:
								((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104['__cmp__']=='function'?$eq104['__cmp__']($eq103) === 0:
									$eq103==$eq104))))):$and40):$and39):$and38)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
							false :
							(typeof $bool73=='object'?
								(typeof $bool73['__nonzero__']=='function'?
									$bool73['__nonzero__']() :
									(typeof $bool73['__len__']=='function'?
										($bool73['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['screen']['blit'](((($bool74=(($mod9=(i)+(j))!=null && ($mod10=2)!=null && typeof $mod9=='string'?
							$p['sprintf']($mod9,$mod10):
							(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9))) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
							false :
							(typeof $bool74=='object'?
								(typeof $bool74['__nonzero__']=='function'?
									$bool74['__nonzero__']() :
									(typeof $bool74['__len__']=='function'?
										($bool74['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (self['darkBlueMine']) : (self['lightBlueMine'])), $p['tuple']([(j)*(self['TILESIZE']), (i)*(self['TILESIZE'])]));
					}
					if ((($bool77=((($bool75=$and42=(($eq105=tile['number'])===($eq106=9)&&$eq105===null?true:
						($eq105===null?false:($eq106===null?false:
							((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105['__cmp__']=='function'?$eq105['__cmp__']($eq106) === 0:
								((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106['__cmp__']=='function'?$eq106['__cmp__']($eq105) === 0:
									$eq105==$eq106)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75['__nonzero__']=='function'?
								$bool75['__nonzero__']() :
								(typeof $bool75['__len__']=='function'?
									($bool75['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool76=$or3=(($eq107=tile['isFlagged'])===($eq108=true)&&$eq107===null?true:
						($eq107===null?false:($eq108===null?false:
							((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107['__cmp__']=='function'?$eq107['__cmp__']($eq108) === 0:
								((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108['__cmp__']=='function'?$eq108['__cmp__']($eq107) === 0:
									$eq107==$eq108)))))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
						false :
						(typeof $bool76=='object'?
							(typeof $bool76['__nonzero__']=='function'?
								$bool76['__nonzero__']() :
								(typeof $bool76['__len__']=='function'?
									($bool76['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:(($eq109=self['numTilesRemaining'])===($eq110=0)&&$eq109===null?true:
						($eq109===null?false:($eq110===null?false:
							((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109['__cmp__']=='function'?$eq109['__cmp__']($eq110) === 0:
								((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110['__cmp__']=='function'?$eq110['__cmp__']($eq109) === 0:
									$eq109==$eq110)))))):$and42)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
							false :
							(typeof $bool77=='object'?
								(typeof $bool77['__nonzero__']=='function'?
									$bool77['__nonzero__']() :
									(typeof $bool77['__len__']=='function'?
										($bool77['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['screen']['blit'](((($bool78=(($mod11=(i)+(j))!=null && ($mod12=2)!=null && typeof $mod11=='string'?
							$p['sprintf']($mod11,$mod12):
							(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
							false :
							(typeof $bool78=='object'?
								(typeof $bool78['__nonzero__']=='function'?
									$bool78['__nonzero__']() :
									(typeof $bool78['__len__']=='function'?
										($bool78['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (self['darkGreenFlag']) : (self['lightGreenFlag'])), $p['tuple']([(j)*(self['TILESIZE']), (i)*(self['TILESIZE'])]));
					}
					if ((($bool81=((($bool80=$and44=((($bool79=$or5=(($eq111=tile['number'])===($eq112=-(1))&&$eq111===null?true:
						($eq111===null?false:($eq112===null?false:
							((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111['__cmp__']=='function'?$eq111['__cmp__']($eq112) === 0:
								((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112['__cmp__']=='function'?$eq112['__cmp__']($eq111) === 0:
									$eq111==$eq112)))))) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79['__nonzero__']=='function'?
								$bool79['__nonzero__']() :
								(typeof $bool79['__len__']=='function'?
									($bool79['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:(((($cmp37=1)===($cmp38=($compare13 = tile['number']))?0:
						(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
							($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
							$p['cmp']($cmp37, $cmp38))) < 1)&&((($cmp39=$compare13)===($cmp40=($compare14 = 8))?0:
						(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
							($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
							$p['cmp']($cmp39, $cmp40))) < 1)))) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80['__nonzero__']=='function'?
								$bool80['__nonzero__']() :
								(typeof $bool80['__len__']=='function'?
									($bool80['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq113=tile['isFlagged'])===($eq114=true)&&$eq113===null?true:
						($eq113===null?false:($eq114===null?false:
							((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113['__cmp__']=='function'?$eq113['__cmp__']($eq114) === 0:
								((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114['__cmp__']=='function'?$eq114['__cmp__']($eq113) === 0:
									$eq113==$eq114))))):$and44)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
							false :
							(typeof $bool81=='object'?
								(typeof $bool81['__nonzero__']=='function'?
									$bool81['__nonzero__']() :
									(typeof $bool81['__len__']=='function'?
										($bool81['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['screen']['blit'](((($bool82=(($mod13=(i)+(j))!=null && ($mod14=2)!=null && typeof $mod13=='string'?
							$p['sprintf']($mod13,$mod14):
							(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13))) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
							false :
							(typeof $bool82=='object'?
								(typeof $bool82['__nonzero__']=='function'?
									$bool82['__nonzero__']() :
									(typeof $bool82['__len__']=='function'?
										($bool82['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (self['darkYellowFlag']) : (self['lightYellowFlag'])), $p['tuple']([(j)*(self['TILESIZE']), (i)*(self['TILESIZE'])]));
					}
				}
			}
			if ((($bool83=(($eq115=gameState)===($eq116=0)&&$eq115===null?true:
				($eq115===null?false:($eq116===null?false:
					((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115['__cmp__']=='function'?$eq115['__cmp__']($eq116) === 0:
						((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116['__cmp__']=='function'?$eq116['__cmp__']($eq115) === 0:
							$eq115==$eq116)))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
					false :
					(typeof $bool83=='object'?
						(typeof $bool83['__nonzero__']=='function'?
							$bool83['__nonzero__']() :
							(typeof $bool83['__len__']=='function'?
								($bool83['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['screen']['blit'](self['redMine'], $p['tuple']([(col)*(self['TILESIZE']), (row)*(self['TILESIZE'])]));
			}
			self['gameOverBoxWidth'] = 185;
			self['gameOverBoxHeight'] = 35;
			self['gameOverBoxLeft'] = ((self['screenWidth'])-(self['gameOverBoxWidth']))/(2);
			self['gameOverBoxTop'] = (self['screenHeight'])*(0.66);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([43, 43, 43]), $p['tuple']([self['gameOverBoxLeft'], self['gameOverBoxTop'], self['gameOverBoxWidth'], self['gameOverBoxHeight']]));
			font = $m['pg']['font']['SysFont']('Lucida Grande', 15);
			newGameText = font['render']('Click for a new game', true, $p['tuple']([255, 255, 255]));
			$m['screen']['blit'](newGameText, $p['tuple']([(self['gameOverBoxLeft'])+(16), (self['gameOverBoxTop'])+(8)]));
			$m['pg']['display']['flip']();
			self['resetTiles'](self['numRows'], self['numCols']);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col'],['gameState']]);
		$cls_definition['gameOver'] = $method;
		$method = $pyjs__bind_method2('newGame', function(numRows, numCols, numMines, tilesize) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				numRows = arguments[1];
				numCols = arguments[2];
				numMines = arguments[3];
				tilesize = arguments[4];
			}
			var $attr359,$attr358,$attr353,$attr352,$iter25_array,$attr350,$attr357,$attr356,$attr355,$attr354,$iter26_idx,numMinesRemainingRect,font,$bool87,$bool86,$bool85,$bool84,$attr351,$attr368,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr361,$attr299,$attr371,$mod15,$attr372,$iter25_nextval,difficultyRect,numMinesRemainingText,$iter26_array,colorSwitch,$iter26_iter,$attr304,$attr305,$attr306,$attr307,$attr300,$attr301,$attr302,$attr303,$attr308,$attr309,$attr317,$attr316,$attr315,$attr314,$attr313,$attr312,$attr311,$attr310,$attr319,$attr318,$attr370,difficultyText,j,$iter26_nextval,$attr369,$iter26_type,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$attr348,$attr349,$mod16,$attr340,$attr341,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$iter25_type,i,$iter25_iter,$attr339,$attr338,$iter25_idx,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
			$m['screen']['fill']($p['tuple']([255, 255, 255]));
			self['started'] = false;
			self['numRows'] = numRows;
			self['numCols'] = numCols;
			self['numMines'] = numMines;
			self['TILESIZE'] = tilesize;
			self['screenWidth'] = (numCols)*(self['TILESIZE']);
			self['screenHeight'] = ((numRows)*(self['TILESIZE']))+(25);
			self['numMinesRemaining'] = numMines;
			self['numTilesRemaining'] = ((numCols)*(numRows))-(numMines);
			self['mineLocations'] = $p['list']([]);
			self['redMine'] = $m['pg']['transform']['scale'](self['redMineSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['lightBlueMine'] = $m['pg']['transform']['scale'](self['lightBlueMineSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['darkBlueMine'] = $m['pg']['transform']['scale'](self['darkBlueMineSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['lightGreenFlag'] = $m['pg']['transform']['scale'](self['lightGreenFlagSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['darkGreenFlag'] = $m['pg']['transform']['scale'](self['darkGreenFlagSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['lightYellowFlag'] = $m['pg']['transform']['scale'](self['lightYellowFlagSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			self['darkYellowFlag'] = $m['pg']['transform']['scale'](self['darkYellowFlagSurf'], $p['tuple']([self['TILESIZE'], self['TILESIZE']]));
			colorSwitch = true;
			$iter25_iter = $p['xrange'](self['numRows']);
			if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
				$iter25_type = 0;
			} else {
				$iter25_iter = $iter25_iter['__iter__']();
				$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter25_idx = 0;
			while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
				i = $iter25_nextval;
				$iter26_iter = $p['xrange'](self['numCols']);
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					j = $iter26_nextval;
					$m['pg']['draw']['rect']($m['screen'], ((($bool84=colorSwitch) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
						false :
						(typeof $bool84=='object'?
							(typeof $bool84['__nonzero__']=='function'?
								$bool84['__nonzero__']() :
								(typeof $bool84['__len__']=='function'?
									($bool84['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? ($p['tuple']([104, 113, 255])) : ($p['tuple']([100, 108, 248]))), $p['tuple']([(self['TILESIZE'])*(j), (self['TILESIZE'])*(i), self['TILESIZE'], self['TILESIZE']]));
					colorSwitch = !(($bool85=colorSwitch) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
						false :
						(typeof $bool85=='object'?
							(typeof $bool85['__nonzero__']=='function'?
								$bool85['__nonzero__']() :
								(typeof $bool85['__len__']=='function'?
									($bool85['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
				}
				colorSwitch = ((($bool87=(($mod15=self['numCols'])!=null && ($mod16=2)!=null && typeof $mod15=='string'?
					$p['sprintf']($mod15,$mod16):
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15))) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87['__nonzero__']=='function'?
							$bool87['__nonzero__']() :
							(typeof $bool87['__len__']=='function'?
								($bool87['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (colorSwitch) : (!(($bool86=colorSwitch) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86['__nonzero__']=='function'?
							$bool86['__nonzero__']() :
							(typeof $bool86['__len__']=='function'?
								($bool86['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )));
			}
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([200, 200, 210]), $p['tuple']([0, (self['screenHeight'])-(25), self['screenWidth'], 25]));
			font = $m['pg']['font']['SysFont']('Lucida Grande', 13);
			difficultyText = font['render']('Change difficulty', true, $p['tuple']([20, 20, 20]), $p['tuple']([200, 200, 210]));
			difficultyRect = difficultyText['get_rect']();
			difficultyRect['__setattr__']('center', $p['tuple']([($p['float_int']((self['screenWidth'])/(2)))+(3), $p['float_int']((self['screenHeight'])-(13))]));
			$m['screen']['blit'](difficultyText, difficultyRect);
			difficultyRect['__setattr__']('width', 117);
			difficultyRect['__setattr__']('height', 17);
			difficultyRect['__setattr__']('left', (difficultyRect['__getattr__']('left'))-(5));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([110, 110, 170]), difficultyRect, 1);
			numMinesRemainingText = $m['bottomBarFont']['render'](('   ')+($p['str'](self['numMinesRemaining'])), true, $p['tuple']([34, 34, 34]), $p['tuple']([200, 200, 210]));
			numMinesRemainingRect = numMinesRemainingText['get_rect']();
			numMinesRemainingRect['__setattr__']('right', (self['screenWidth'])-(9));
			numMinesRemainingRect['__setattr__']('top', (self['screenHeight'])-(23));
			$m['screen']['blit'](numMinesRemainingText, numMinesRemainingRect);
			$m['pg']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self'],['numRows'],['numCols'],['numMines'],['tilesize']]);
		$cls_definition['newGame'] = $method;
		$method = $pyjs__bind_method2('resetTiles', function(numRows, numCols) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				numRows = arguments[1];
				numCols = arguments[2];
			}
			var $attr373,$bool88,$attr374,$iter28_idx,row,$iter27_nextval,$iter27_array,$eq120,$bool89,$iter27_iter,$eq118,$iter27_type,$84,$83,$82,$81,$iter28_iter,$iter28_type,$eq117,$iter28_array,$iter28_nextval,$eq119,$iter27_idx,col;
			numRows = ((($bool88=!(($eq117=numRows)===($eq118=25)&&$eq117===null?true:
				($eq117===null?false:($eq118===null?false:
					((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117['__cmp__']=='function'?$eq117['__cmp__']($eq118) === 0:
						((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118['__cmp__']=='function'?$eq118['__cmp__']($eq117) === 0:
							$eq117==$eq118)))))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
				false :
				(typeof $bool88=='object'?
					(typeof $bool88['__nonzero__']=='function'?
						$bool88['__nonzero__']() :
						(typeof $bool88['__len__']=='function'?
							($bool88['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ((numRows)+(1)) : (numRows));
			numCols = ((($bool89=!(($eq119=numCols)===($eq120=45)&&$eq119===null?true:
				($eq119===null?false:($eq120===null?false:
					((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119['__cmp__']=='function'?$eq119['__cmp__']($eq120) === 0:
						((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120['__cmp__']=='function'?$eq120['__cmp__']($eq119) === 0:
							$eq119==$eq120)))))) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
				false :
				(typeof $bool89=='object'?
					(typeof $bool89['__nonzero__']=='function'?
						$bool89['__nonzero__']() :
						(typeof $bool89['__len__']=='function'?
							($bool89['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ((numCols)+(1)) : (numCols));
			$iter27_iter = $p['xrange'](numRows);
			if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
				$iter27_type = 0;
			} else {
				$iter27_iter = $iter27_iter['__iter__']();
				$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter27_idx = 0;
			while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
				row = $iter27_nextval;
				$iter28_iter = $p['xrange'](numCols);
				if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter['__iter__']();
					$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					col = $iter28_nextval;
					(typeof ($83=(typeof ($81=self['board'])['__array'] != 'undefined'?
						((typeof $81['__array'][$82=row]) != 'undefined'?$81['__array'][$82]:
							$81['__getitem__']($82)):
							$81['__getitem__'](row)))['__array'] != 'undefined'?
						((typeof $83['__array'][$84=col]) != 'undefined'?$83['__array'][$84]:
							$83['__getitem__']($84)):
							$83['__getitem__'](col))['reset']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['numRows'],['numCols']]);
		$cls_definition['resetTiles'] = $method;
		$method = $pyjs__bind_method2('onlyNonnegative', function(num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				num = arguments[1];
			}
			var $cmp42,$bool90,$cmp41;
			if ((($bool90=((($cmp41=num)===($cmp42=0)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$p['cmp']($cmp41, $cmp42))) == -1)) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90['__nonzero__']=='function'?
							$bool90['__nonzero__']() :
							(typeof $bool90['__len__']=='function'?
								($bool90['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return 1000;
			}
			else {
				return num;
			}
			return null;
		}
	, 1, [null,null,['self'],['num']]);
		$cls_definition['onlyNonnegative'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Gameboard', $p['tuple']($bases), $data);
	})();
	$m['Menu'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('difficultyMenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var txtExpert,txtRectCustom,txtRectBeginner,txtRectHelp,txtCustom,txtRectExpert,txtIntermediate,difficultyColor,otherBoxColor,txtRectIntermediate,font,txtBeginner,txtHelp;
			$m['screen']['fill']($p['tuple']([255, 255, 255]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([199, 204, 216]), $p['tuple']([0, 0, 300, 350]));
			self['rowsBoxSelected'] = false;
			self['colsBoxSelected'] = false;
			self['minesBoxSelected'] = false;
			self['cancelBoxSelected'] = false;
			self['okBoxSelected'] = false;
			self['numRows'] = 0;
			self['numCols'] = 0;
			self['numMines'] = 0;
			self['tilesize'] = 28;
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([82, 108, 235]), $p['tuple']([50, 40, 200, 42]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([52, 78, 165]), $p['tuple']([50, 99, 200, 42]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([22, 48, 115]), $p['tuple']([50, 158, 200, 42]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([52, 78, 165]), $p['tuple']([100, 225, 100, 34]), 2);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([52, 78, 165]), $p['tuple']([110, 275, 80, 30]), 2);
			font = $m['pg']['font']['SysFont']('Lucida Grande', 20);
			difficultyColor = $p['tuple']([245, 245, 250]);
			otherBoxColor = $p['tuple']([34, 34, 34]);
			txtBeginner = font['render']('Beginner', true, difficultyColor);
			txtIntermediate = font['render']('Intermediate', true, difficultyColor);
			txtExpert = font['render']('Expert', true, difficultyColor);
			txtCustom = font['render']('Custom', true, otherBoxColor);
			txtHelp = font['render']('Help', true, otherBoxColor);
			txtRectBeginner = txtBeginner['get_rect']();
			txtRectIntermediate = txtIntermediate['get_rect']();
			txtRectExpert = txtExpert['get_rect']();
			txtRectCustom = txtCustom['get_rect']();
			txtRectHelp = txtHelp['get_rect']();
			txtRectBeginner['__setattr__']('center', $p['tuple']([150, 61]));
			txtRectIntermediate['__setattr__']('center', $p['tuple']([150, 120]));
			txtRectExpert['__setattr__']('center', $p['tuple']([150, 179]));
			txtRectCustom['__setattr__']('center', $p['tuple']([150, 242]));
			txtRectHelp['__setattr__']('center', $p['tuple']([150, 290]));
			$m['screen']['blit'](txtBeginner, txtRectBeginner);
			$m['screen']['blit'](txtIntermediate, txtRectIntermediate);
			$m['screen']['blit'](txtExpert, txtRectExpert);
			$m['screen']['blit'](txtCustom, txtRectCustom);
			$m['screen']['blit'](txtHelp, txtRectHelp);
			$m['pg']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['difficultyMenu'] = $method;
		$method = $pyjs__bind_method2('helpMenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var XButton,line9,line8,line7,line6,line4,line3,line2,line1,font,line5;
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([30, 30, 30]), $p['tuple']([35, 10, 230, 330]));
			font = $m['pg']['font']['SysFont']('Lucida Grande', 15);
			XButton = font['render']('[X]', true, $p['tuple']([255, 0, 0]));
			line1 = font['render']('Left-click to open a tile', true, $p['tuple']([255, 255, 255]));
			line2 = font['render']('Right-click to place a flag', true, $p['tuple']([255, 255, 255]));
			line3 = font['render']("Double-click's special ability:", true, $p['tuple']([255, 255, 255]));
			line4 = font['render']('- Opens all surrounding tiles', true, $p['tuple']([255, 255, 255]));
			line5 = font['render']('- BUT there must be the', true, $p['tuple']([255, 255, 255]));
			line6 = font['render']('   correct amount of flags', true, $p['tuple']([255, 255, 255]));
			line7 = font['render']('   surrounding the tile', true, $p['tuple']([255, 255, 255]));
			line8 = font['render']('- Works for both opened', true, $p['tuple']([255, 255, 255]));
			line9 = font['render']('   and unopened tiles', true, $p['tuple']([255, 255, 255]));
			$m['screen']['blit'](XButton, $p['tuple']([40, 13, 19, 19]));
			$m['screen']['blit'](line1, $p['tuple']([45, 45]));
			$m['screen']['blit'](line2, $p['tuple']([45, 95]));
			$m['screen']['blit'](line3, $p['tuple']([45, 145]));
			$m['screen']['blit'](line4, $p['tuple']([45, 165]));
			$m['screen']['blit'](line5, $p['tuple']([45, 185]));
			$m['screen']['blit'](line6, $p['tuple']([45, 205]));
			$m['screen']['blit'](line7, $p['tuple']([45, 225]));
			$m['screen']['blit'](line8, $p['tuple']([45, 245]));
			$m['screen']['blit'](line9, $p['tuple']([45, 265]));
			$m['pg']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['helpMenu'] = $method;
		$method = $pyjs__bind_method2('customMenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var okBox,$attr387,$attr375,$attr377,$attr376,$attr379,$attr378,$attr394,minesRect,$attr392,powerDoubleClick,cancelBoxRect,okBoxRect,$attr388,$attr389,$attr384,$attr385,rowRange,$attr380,$attr381,$attr382,$attr383,smallFont,colsRect,rowBox,minesText,rowsText,$attr393,cancelBox,rowsRect,mineBox,mineRange,colsText,$bool91,$bool92,$bool93,$bool94,$bool95,mediumFont,$attr396,$attr395,colBox,autoTileOpening,$pyjs_try_err,$attr391,$attr390,colRange,largeFont,$attr386;
			$m['screen']['fill']($p['tuple']([255, 255, 255]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([199, 204, 216]), $p['tuple']([0, 0, 300, 350]));
			smallFont = $m['pg']['font']['SysFont']('Lucida Grande', 9);
			mediumFont = $m['pg']['font']['SysFont']('Lucida Grande', 12);
			largeFont = $m['pg']['font']['SysFont']('Lucida Grande', 15);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([170, 45, 50, 25]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([170, 80, 50, 25]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([170, 115, 50, 25]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([205, 200, 15, 15]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([205, 224, 15, 15]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([45, 285, 95, 30]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 0, 0]), $p['tuple']([160, 285, 95, 30]), 1);
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([255, 255, 255]), $p['tuple']([171, 46, 48, 23]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([255, 255, 255]), $p['tuple']([171, 81, 48, 23]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([255, 255, 255]), $p['tuple']([171, 116, 48, 23]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([255, 255, 255]), $p['tuple']([206, 201, 13, 13]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([255, 255, 255]), $p['tuple']([206, 225, 13, 13]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([200, 200, 200]), $p['tuple']([46, 286, 93, 28]));
			$m['pg']['draw']['rect']($m['screen'], $p['tuple']([200, 200, 200]), $p['tuple']([161, 286, 93, 28]));
			if ((($bool91=$m['Game']['powerDoubleclickEnabled']) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
					false :
					(typeof $bool91=='object'?
						(typeof $bool91['__nonzero__']=='function'?
							$bool91['__nonzero__']() :
							(typeof $bool91['__len__']=='function'?
								($bool91['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 17, 255]), $p['tuple']([208, 203, 9, 9]));
			}
			if ((($bool92=$m['Game']['autoTileOpeningEnabled']) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92['__nonzero__']=='function'?
							$bool92['__nonzero__']() :
							(typeof $bool92['__len__']=='function'?
								($bool92['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['pg']['draw']['rect']($m['screen'], $p['tuple']([0, 17, 255]), $p['tuple']([208, 227, 9, 9]));
			}
			rowBox = largeFont['render']('Rows:', true, $p['tuple']([0, 0, 0]));
			rowRange = smallFont['render']('10 to 25', true, $p['tuple']([52, 52, 77]));
			colBox = largeFont['render']('Columns:', true, $p['tuple']([0, 0, 0]));
			colRange = smallFont['render']('10 to 45', true, $p['tuple']([52, 52, 77]));
			mineBox = largeFont['render']('Mines:', true, $p['tuple']([0, 0, 0]));
			mineRange = smallFont['render']('1 to rows * cols - 10', true, $p['tuple']([52, 52, 77]));
			powerDoubleClick = mediumFont['render']('Power double-click', true, $p['tuple']([0, 0, 0]));
			autoTileOpening = mediumFont['render']('Automatic tile opening', true, $p['tuple']([0, 0, 0]));
			cancelBox = largeFont['render']('Cancel', true, $p['tuple']([0, 0, 0]));
			okBox = largeFont['render']('OK', true, $p['tuple']([0, 0, 0]));
			self['dimError'] = smallFont['render']('dimensions not accepted', true, $p['tuple']([229, 0, 0]), $p['tuple']([199, 204, 216]));
			cancelBoxRect = cancelBox['get_rect']();
			okBoxRect = okBox['get_rect']();
			cancelBoxRect['__setattr__']('center', $p['tuple']([92, 300]));
			okBoxRect['__setattr__']('center', $p['tuple']([207, 300]));
			$m['screen']['blit'](rowBox, $p['tuple']([35, 43]));
			$m['screen']['blit'](rowRange, $p['tuple']([35, 59]));
			$m['screen']['blit'](colBox, $p['tuple']([35, 78]));
			$m['screen']['blit'](colRange, $p['tuple']([35, 94]));
			$m['screen']['blit'](mineBox, $p['tuple']([35, 113]));
			$m['screen']['blit'](mineRange, $p['tuple']([35, 129]));
			$m['screen']['blit'](powerDoubleClick, $p['tuple']([35, 200]));
			$m['screen']['blit'](autoTileOpening, $p['tuple']([35, 224]));
			$m['screen']['blit'](cancelBox, cancelBoxRect);
			$m['screen']['blit'](okBox, okBoxRect);
			try {
				self['rowsStr'] = ((($bool93=$m['Game']['customDifficultyInputted']) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
					false :
					(typeof $bool93=='object'?
						(typeof $bool93['__nonzero__']=='function'?
							$bool93['__nonzero__']() :
							(typeof $bool93['__len__']=='function'?
								($bool93['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['str']($m['Game']['numRows'])) : (''));
				self['colsStr'] = ((($bool94=$m['Game']['customDifficultyInputted']) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94['__nonzero__']=='function'?
							$bool94['__nonzero__']() :
							(typeof $bool94['__len__']=='function'?
								($bool94['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['str']($m['Game']['numCols'])) : (''));
				self['minesStr'] = ((($bool95=$m['Game']['customDifficultyInputted']) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95['__nonzero__']=='function'?
							$bool95['__nonzero__']() :
							(typeof $bool95['__len__']=='function'?
								($bool95['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['str']($m['Game']['numMines'])) : (''));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					var $tupleassign6 = $p['__ass_unpack']($p['tuple'](['', '', '']), 3, null);
					self['rowsStr'] = $tupleassign6[0];
					self['colsStr'] = $tupleassign6[1];
					self['minesStr'] = $tupleassign6[2];
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			rowsText = largeFont['render'](self['rowsStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
			colsText = largeFont['render'](self['colsStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
			minesText = largeFont['render'](self['minesStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
			rowsRect = $p['tuple']([199, 48, 18, 19]);
			colsRect = $p['tuple']([199, 83, 18, 19]);
			minesRect = minesText['get_rect']();
			minesRect['__setattr__']('right', 217);
			minesRect['__setattr__']('top', 118);
			$m['screen']['blit'](rowsText, rowsRect);
			$m['screen']['blit'](colsText, colsRect);
			$m['screen']['blit'](minesText, minesRect);
			$m['pg']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['customMenu'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Menu', $p['tuple']($bases), $data);
	})();
	$m['pg']['init']();
	$m['clock'] = null;
	$m['timer'] = null;
	$m['bottomBarFont'] = null;
	$m['screen'] = null;
	$m['Game'] = null;
	$m['menu'] = null;
	$m['run'] = function() {
		var $cmp64,$cmp65,row,$iter29_type,$cmp68,$cmp69,$eq132,$bool96,$bool97,$bool98,$bool99,x,$cmp48,$cmp49,$cmp43,$cmp46,$cmp47,$cmp44,$cmp45,$iter29_array,$cmp59,$cmp58,$iter29_nextval,$cmp51,$cmp50,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,$cmp56,$eq134,$eq130,$eq131,$and51,$eq121,$attr418,$attr419,$cmp66,$cmp67,$cmp60,$cmp61,$cmp62,$cmp63,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,$eq129,$eq128,$and49,$and48,$eq123,$eq122,$and47,$and46,$eq127,$eq126,$eq125,$eq124,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$attr399,$attr398,$attr397,$iter29_iter,ms,$iter29_idx,$and52,$bool110,$cmp70,$and50,$eq133,event,$attr421,$attr420,$attr423,$attr422,$attr425,$attr424,$attr427,$attr426,$attr428,$bool105,$bool104,$bool107,$bool106,$bool101,$bool100,$bool103,$bool102,$bool109,$bool108,col,y;
		ms = $m['clock']['tick_busy_loop'](30);
		$iter29_iter = $m['pg']['event']['get']();
		if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
			$iter29_type = 0;
		} else {
			$iter29_iter = $iter29_iter['__iter__']();
			$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter29_idx = 0;
		while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
			event = $iter29_nextval;
			if ((($bool96=(($eq121=event['type'])===($eq122=$m['pg']['MOUSEBUTTONUP'])&&$eq121===null?true:
				($eq121===null?false:($eq122===null?false:
					((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121['__cmp__']=='function'?$eq121['__cmp__']($eq122) === 0:
						((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122['__cmp__']=='function'?$eq122['__cmp__']($eq121) === 0:
							$eq121==$eq122)))))) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96['__nonzero__']=='function'?
							$bool96['__nonzero__']() :
							(typeof $bool96['__len__']=='function'?
								($bool96['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign7 = $p['__ass_unpack']($m['pg']['mouse']['get_pos'](), 2, null);
				x = $tupleassign7[0];
				y = $tupleassign7[1];
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([Math['floor'](y/$m['Game']['TILESIZE']), Math['floor'](x/$m['Game']['TILESIZE'])]), 2, null);
				row = $tupleassign8[0];
				col = $tupleassign8[1];
				$m['pg']['mouse']['get_pressed']();
				if ((($bool97=(($eq123=event['button'])===($eq124=1)&&$eq123===null?true:
					($eq123===null?false:($eq124===null?false:
						((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123['__cmp__']=='function'?$eq123['__cmp__']($eq124) === 0:
							((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124['__cmp__']=='function'?$eq124['__cmp__']($eq123) === 0:
								$eq123==$eq124)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97['__nonzero__']=='function'?
								$bool97['__nonzero__']() :
								(typeof $bool97['__len__']=='function'?
									($bool97['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool99=((($bool98=$and46=(((($cmp43=($p['float_int'](($m['Game']['screenWidth'])/(2)))-(56))===($cmp44=($compare15 = x))?0:
						(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
							($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
							$p['cmp']($cmp43, $cmp44))) == -1)&&((($cmp45=$compare15)===($cmp46=($compare16 = ($p['float_int'](($m['Game']['screenWidth'])/(2)))+(61)))?0:
						(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
							($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
							$p['cmp']($cmp45, $cmp46))) == -1))) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
						false :
						(typeof $bool98=='object'?
							(typeof $bool98['__nonzero__']=='function'?
								$bool98['__nonzero__']() :
								(typeof $bool98['__len__']=='function'?
									($bool98['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp47=($m['Game']['screenHeight'])-(21))===($cmp48=($compare17 = y))?0:
						(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
							($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
							$p['cmp']($cmp47, $cmp48))) == -1)&&((($cmp49=$compare17)===($cmp50=($compare18 = ($m['Game']['screenHeight'])-(4)))?0:
						(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
							($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
							$p['cmp']($cmp49, $cmp50))) == -1)):$and46)) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
							false :
							(typeof $bool99=='object'?
								(typeof $bool99['__nonzero__']=='function'?
									$bool99['__nonzero__']() :
									(typeof $bool99['__len__']=='function'?
										($bool99['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['menu']['difficultyMenu']();
						$m['pg']['display']['setup']((typeof mainMenuLoop == "undefined"?$m['mainMenuLoop']:mainMenuLoop));
						continue;
					}
					if ((($bool101=((($bool100=$and48=(((($cmp51=0)===($cmp52=($compare19 = y))?0:
						(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
							($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
							$p['cmp']($cmp51, $cmp52))) == -1)&&((($cmp53=$compare19)===($cmp54=($compare20 = ($m['Game']['screenHeight'])-(25)))?0:
						(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
							($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
							$p['cmp']($cmp53, $cmp54))) == -1))) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
						false :
						(typeof $bool100=='object'?
							(typeof $bool100['__nonzero__']=='function'?
								$bool100['__nonzero__']() :
								(typeof $bool100['__len__']=='function'?
									($bool100['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp55=0)===($cmp56=($compare21 = x))?0:
						(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
							($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
							$p['cmp']($cmp55, $cmp56))) == -1)&&((($cmp57=$compare21)===($cmp58=($compare22 = $m['Game']['screenWidth']))?0:
						(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
							($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
							$p['cmp']($cmp57, $cmp58))) == -1)):$and48)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
							false :
							(typeof $bool101=='object'?
								(typeof $bool101['__nonzero__']=='function'?
									$bool101['__nonzero__']() :
									(typeof $bool101['__len__']=='function'?
										($bool101['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool102=(($eq125=$m['Game']['started'])===($eq126=false)&&$eq125===null?true:
							($eq125===null?false:($eq126===null?false:
								((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125['__cmp__']=='function'?$eq125['__cmp__']($eq126) === 0:
									((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126['__cmp__']=='function'?$eq126['__cmp__']($eq125) === 0:
										$eq125==$eq126)))))) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
								false :
								(typeof $bool102=='object'?
									(typeof $bool102['__nonzero__']=='function'?
										$bool102['__nonzero__']() :
										(typeof $bool102['__len__']=='function'?
											($bool102['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$m['Game']['firstClick'](row, col);
							$m['Game']['started'] = true;
							continue;
						}
						$m['Game']['mouseClick'](row, col, 1);
						if ((($bool103=(($eq127=$m['timer'])===($eq128=0)&&$eq127===null?true:
							($eq127===null?false:($eq128===null?false:
								((typeof $eq127=='object'||typeof $eq127=='function')&&typeof $eq127['__cmp__']=='function'?$eq127['__cmp__']($eq128) === 0:
									((typeof $eq128=='object'||typeof $eq128=='function')&&typeof $eq128['__cmp__']=='function'?$eq128['__cmp__']($eq127) === 0:
										$eq127==$eq128)))))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
								false :
								(typeof $bool103=='object'?
									(typeof $bool103['__nonzero__']=='function'?
										$bool103['__nonzero__']() :
										(typeof $bool103['__len__']=='function'?
											($bool103['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$m['timer'] = 1;
						}
						else if ((($bool104=((($cmp59=$m['timer'])===($cmp60=250)?0:
							(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
								($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
								$p['cmp']($cmp59, $cmp60))) < 1)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
								false :
								(typeof $bool104=='object'?
									(typeof $bool104['__nonzero__']=='function'?
										$bool104['__nonzero__']() :
										(typeof $bool104['__len__']=='function'?
											($bool104['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$m['Game']['mouseClick'](row, col, 2);
							$m['timer'] = 0;
						}
					}
				}
				else if ((($bool107=((($bool105=$and50=(($eq129=event['button'])===($eq130=3)&&$eq129===null?true:
					($eq129===null?false:($eq130===null?false:
						((typeof $eq129=='object'||typeof $eq129=='function')&&typeof $eq129['__cmp__']=='function'?$eq129['__cmp__']($eq130) === 0:
							((typeof $eq130=='object'||typeof $eq130=='function')&&typeof $eq130['__cmp__']=='function'?$eq130['__cmp__']($eq129) === 0:
								$eq129==$eq130)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
					false :
					(typeof $bool105=='object'?
						(typeof $bool105['__nonzero__']=='function'?
							$bool105['__nonzero__']() :
							(typeof $bool105['__len__']=='function'?
								($bool105['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool106=$and51=(((($cmp61=0)===($cmp62=($compare23 = y))?0:
					(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
						($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
						$p['cmp']($cmp61, $cmp62))) == -1)&&((($cmp63=$compare23)===($cmp64=($compare24 = ($m['Game']['screenHeight'])-(25)))?0:
					(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
						($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
						$p['cmp']($cmp63, $cmp64))) == -1))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
					false :
					(typeof $bool106=='object'?
						(typeof $bool106['__nonzero__']=='function'?
							$bool106['__nonzero__']() :
							(typeof $bool106['__len__']=='function'?
								($bool106['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp65=0)===($cmp66=($compare25 = x))?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))) == -1)&&((($cmp67=$compare25)===($cmp68=($compare26 = $m['Game']['screenWidth']))?0:
					(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
						($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
						$p['cmp']($cmp67, $cmp68))) == -1)):$and51):$and50)) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
						false :
						(typeof $bool107=='object'?
							(typeof $bool107['__nonzero__']=='function'?
								$bool107['__nonzero__']() :
								(typeof $bool107['__len__']=='function'?
									($bool107['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['Game']['mouseClick'](row, col, 3);
				}
			}
		}
		if ((($bool108=!(($eq131=$m['timer'])===($eq132=0)&&$eq131===null?true:
			($eq131===null?false:($eq132===null?false:
				((typeof $eq131=='object'||typeof $eq131=='function')&&typeof $eq131['__cmp__']=='function'?$eq131['__cmp__']($eq132) === 0:
					((typeof $eq132=='object'||typeof $eq132=='function')&&typeof $eq132['__cmp__']=='function'?$eq132['__cmp__']($eq131) === 0:
						$eq131==$eq132)))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
				false :
				(typeof $bool108=='object'?
					(typeof $bool108['__nonzero__']=='function'?
						$bool108['__nonzero__']() :
						(typeof $bool108['__len__']=='function'?
							($bool108['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['timer'] += ms;
			if ((($bool109=((($cmp69=$m['timer'])===($cmp70=250)?0:
				(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
					($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
					$p['cmp']($cmp69, $cmp70))) == 1)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
					false :
					(typeof $bool109=='object'?
						(typeof $bool109['__nonzero__']=='function'?
							$bool109['__nonzero__']() :
							(typeof $bool109['__len__']=='function'?
								($bool109['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['timer'] = 0;
			}
		}
		$m['pg']['display']['flip']();
		if ((($bool110=(($eq133=$m['Game']['numTilesRemaining'])===($eq134=0)&&$eq133===null?true:
			($eq133===null?false:($eq134===null?false:
				((typeof $eq133=='object'||typeof $eq133=='function')&&typeof $eq133['__cmp__']=='function'?$eq133['__cmp__']($eq134) === 0:
					((typeof $eq134=='object'||typeof $eq134=='function')&&typeof $eq134['__cmp__']=='function'?$eq134['__cmp__']($eq133) === 0:
						$eq133==$eq134)))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
				false :
				(typeof $bool110=='object'?
					(typeof $bool110['__nonzero__']=='function'?
						$bool110['__nonzero__']() :
						(typeof $bool110['__len__']=='function'?
							($bool110['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['Game']['numMinesRemaining'] = 0;
			$m['Game']['gameOver'](0, 0, 1);
			$m['pg']['display']['setup']((typeof gameEndedLoop == "undefined"?$m['gameEndedLoop']:gameEndedLoop));
		}
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	$m['gameEndedLoop'] = function() {
		var $attr454,$attr447,$attr456,$attr457,$attr450,$attr451,$attr438,$attr439,$attr436,$attr437,$attr434,$attr435,$attr432,$attr433,$attr430,$attr431,$bool112,$bool113,$bool111,$iter30_array,$bool114,$bool115,$cmp77,$bool116,$cmp71,event,$cmp84,$cmp76,$iter30_nextval,$and55,$cmp85,$cmp74,$attr459,$cmp86,$attr461,$cmp79,$cmp82,$attr462,$cmp73,$cmp72,$iter30_type,$attr444,$attr443,$attr442,$attr441,$attr440,$attr429,$attr458,$cmp78,$attr449,$attr448,$iter30_idx,$cmp80,$attr446,$attr452,$cmp81,$cmp83,$eq138,$iter30_iter,$eq135,$eq136,$eq137,$and53,$attr460,$and56,$attr455,$cmp75,$attr445,$attr453,y,x,$and54;
		$iter30_iter = $m['pg']['event']['get']();
		if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
			$iter30_type = 0;
		} else {
			$iter30_iter = $iter30_iter['__iter__']();
			$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter30_idx = 0;
		while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
			event = $iter30_nextval;
			if ((($bool111=(($eq135=event['type'])===($eq136=$m['pg']['MOUSEBUTTONUP'])&&$eq135===null?true:
				($eq135===null?false:($eq136===null?false:
					((typeof $eq135=='object'||typeof $eq135=='function')&&typeof $eq135['__cmp__']=='function'?$eq135['__cmp__']($eq136) === 0:
						((typeof $eq136=='object'||typeof $eq136=='function')&&typeof $eq136['__cmp__']=='function'?$eq136['__cmp__']($eq135) === 0:
							$eq135==$eq136)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
					false :
					(typeof $bool111=='object'?
						(typeof $bool111['__nonzero__']=='function'?
							$bool111['__nonzero__']() :
							(typeof $bool111['__len__']=='function'?
								($bool111['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign9 = $p['__ass_unpack']($m['pg']['mouse']['get_pos'](), 2, null);
				x = $tupleassign9[0];
				y = $tupleassign9[1];
				$m['pg']['mouse']['get_pressed']();
				if ((($bool112=(($eq137=event['button'])===($eq138=1)&&$eq137===null?true:
					($eq137===null?false:($eq138===null?false:
						((typeof $eq137=='object'||typeof $eq137=='function')&&typeof $eq137['__cmp__']=='function'?$eq137['__cmp__']($eq138) === 0:
							((typeof $eq138=='object'||typeof $eq138=='function')&&typeof $eq138['__cmp__']=='function'?$eq138['__cmp__']($eq137) === 0:
								$eq137==$eq138)))))) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
						false :
						(typeof $bool112=='object'?
							(typeof $bool112['__nonzero__']=='function'?
								$bool112['__nonzero__']() :
								(typeof $bool112['__len__']=='function'?
									($bool112['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool114=((($bool113=$and53=(((($cmp71=$m['Game']['gameOverBoxLeft'])===($cmp72=($compare27 = x))?0:
						(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
							($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
							$p['cmp']($cmp71, $cmp72))) == -1)&&((($cmp73=$compare27)===($cmp74=($compare28 = ($m['Game']['gameOverBoxLeft'])+($m['Game']['gameOverBoxWidth'])))?0:
						(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
							($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
							$p['cmp']($cmp73, $cmp74))) == -1))) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
						false :
						(typeof $bool113=='object'?
							(typeof $bool113['__nonzero__']=='function'?
								$bool113['__nonzero__']() :
								(typeof $bool113['__len__']=='function'?
									($bool113['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp75=$m['Game']['gameOverBoxTop'])===($cmp76=($compare29 = y))?0:
						(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
							($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
							$p['cmp']($cmp75, $cmp76))) == -1)&&((($cmp77=$compare29)===($cmp78=($compare30 = ($m['Game']['gameOverBoxTop'])+($m['Game']['gameOverBoxHeight'])))?0:
						(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
							($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
							$p['cmp']($cmp77, $cmp78))) == -1)):$and53)) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
							false :
							(typeof $bool114=='object'?
								(typeof $bool114['__nonzero__']=='function'?
									$bool114['__nonzero__']() :
									(typeof $bool114['__len__']=='function'?
										($bool114['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['Game']['newGame']($m['Game']['numRows'], $m['Game']['numCols'], $m['Game']['numMines'], $m['Game']['TILESIZE']);
						$m['pg']['display']['setup']($m['run']);
					}
					else if ((($bool116=((($bool115=$and55=(((($cmp79=($p['float_int'](($m['Game']['screenWidth'])/(2)))-(56))===($cmp80=($compare31 = x))?0:
						(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
							($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
							$p['cmp']($cmp79, $cmp80))) == -1)&&((($cmp81=$compare31)===($cmp82=($compare32 = ($p['float_int'](($m['Game']['screenWidth'])/(2)))+(61)))?0:
						(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
							($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
							$p['cmp']($cmp81, $cmp82))) == -1))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
						false :
						(typeof $bool115=='object'?
							(typeof $bool115['__nonzero__']=='function'?
								$bool115['__nonzero__']() :
								(typeof $bool115['__len__']=='function'?
									($bool115['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp83=($m['Game']['screenHeight'])-(21))===($cmp84=($compare33 = y))?0:
						(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
							($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
							$p['cmp']($cmp83, $cmp84))) == -1)&&((($cmp85=$compare33)===($cmp86=($compare34 = ($m['Game']['screenHeight'])-(4)))?0:
						(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
							($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
							$p['cmp']($cmp85, $cmp86))) == -1)):$and55)) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
							false :
							(typeof $bool116=='object'?
								(typeof $bool116['__nonzero__']=='function'?
									$bool116['__nonzero__']() :
									(typeof $bool116['__len__']=='function'?
										($bool116['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['menu']['difficultyMenu']();
						$m['pg']['display']['setup']((typeof mainMenuLoop == "undefined"?$m['mainMenuLoop']:mainMenuLoop));
						continue;
					}
				}
			}
		}
		return null;
	};
	$m['gameEndedLoop']['__name__'] = 'gameEndedLoop';

	$m['gameEndedLoop']['__bind_type__'] = 0;
	$m['gameEndedLoop']['__args__'] = [null,null];
	$m['mainMenuLoop'] = function() {
		var $cmp108,$cmp109,$cmp106,$cmp107,$cmp104,$cmp105,$cmp102,$cmp103,$cmp100,$cmp101,$iter31_idx,x,$cmp99,event,$cmp114,$cmp95,$cmp94,$iter31_array,$eq139,$and58,$and59,$and57,$attr478,$attr479,$attr472,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$attr475,$iter31_nextval,$cmp122,$cmp123,$attr469,$attr468,$attr465,$attr464,$attr467,$attr466,$attr463,$bool129,$bool128,$bool127,$bool126,$bool125,$bool124,$bool123,$bool122,$bool121,$bool120,$and62,$cmp124,$cmp125,$cmp126,$cmp120,$cmp121,$cmp88,$cmp89,$cmp87,$and66,$and65,$and64,$and63,$bool117,$and61,$and60,$bool118,$bool119,$attr482,$attr481,$attr480,$eq141,$eq140,$eq142,$cmp111,$cmp110,$cmp113,$cmp112,$cmp115,$cmp98,$cmp117,$cmp116,$cmp119,$cmp118,$cmp97,$cmp96,$cmp91,$cmp90,$cmp93,$cmp92,$iter31_type,y,$iter31_iter;
		$iter31_iter = $m['pg']['event']['get']();
		if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
			$iter31_type = 0;
		} else {
			$iter31_iter = $iter31_iter['__iter__']();
			$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter31_idx = 0;
		while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
			event = $iter31_nextval;
			if ((($bool117=(($eq139=event['type'])===($eq140=$m['pg']['MOUSEBUTTONUP'])&&$eq139===null?true:
				($eq139===null?false:($eq140===null?false:
					((typeof $eq139=='object'||typeof $eq139=='function')&&typeof $eq139['__cmp__']=='function'?$eq139['__cmp__']($eq140) === 0:
						((typeof $eq140=='object'||typeof $eq140=='function')&&typeof $eq140['__cmp__']=='function'?$eq140['__cmp__']($eq139) === 0:
							$eq139==$eq140)))))) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
					false :
					(typeof $bool117=='object'?
						(typeof $bool117['__nonzero__']=='function'?
							$bool117['__nonzero__']() :
							(typeof $bool117['__len__']=='function'?
								($bool117['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign10 = $p['__ass_unpack']($m['pg']['mouse']['get_pos'](), 2, null);
				x = $tupleassign10[0];
				y = $tupleassign10[1];
				$m['pg']['mouse']['get_pressed']();
				if ((($bool118=(($eq141=event['button'])===($eq142=1)&&$eq141===null?true:
					($eq141===null?false:($eq142===null?false:
						((typeof $eq141=='object'||typeof $eq141=='function')&&typeof $eq141['__cmp__']=='function'?$eq141['__cmp__']($eq142) === 0:
							((typeof $eq142=='object'||typeof $eq142=='function')&&typeof $eq142['__cmp__']=='function'?$eq142['__cmp__']($eq141) === 0:
								$eq141==$eq142)))))) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
						false :
						(typeof $bool118=='object'?
							(typeof $bool118['__nonzero__']=='function'?
								$bool118['__nonzero__']() :
								(typeof $bool118['__len__']=='function'?
									($bool118['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool120=((($bool119=$and57=(((($cmp87=50)===($cmp88=($compare35 = x))?0:
						(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
							($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
							$p['cmp']($cmp87, $cmp88))) == -1)&&((($cmp89=$compare35)===($cmp90=($compare36 = 250))?0:
						(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
							($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
							$p['cmp']($cmp89, $cmp90))) == -1))) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
						false :
						(typeof $bool119=='object'?
							(typeof $bool119['__nonzero__']=='function'?
								$bool119['__nonzero__']() :
								(typeof $bool119['__len__']=='function'?
									($bool119['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp91=40)===($cmp92=($compare37 = y))?0:
						(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
							($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
							$p['cmp']($cmp91, $cmp92))) == -1)&&((($cmp93=$compare37)===($cmp94=($compare38 = 82))?0:
						(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
							($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
							$p['cmp']($cmp93, $cmp94))) == -1)):$and57)) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
							false :
							(typeof $bool120=='object'?
								(typeof $bool120['__nonzero__']=='function'?
									$bool120['__nonzero__']() :
									(typeof $bool120['__len__']=='function'?
										($bool120['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign11 = $p['__ass_unpack']($p['tuple']([10, 10, 15, 28]), 4, null);
						$m['menu']['numRows'] = $tupleassign11[0];
						$m['menu']['numCols'] = $tupleassign11[1];
						$m['menu']['numMines'] = $tupleassign11[2];
						$m['menu']['tilesize'] = $tupleassign11[3];
						var $tupleassign12 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['Game']['customDifficultyInputted'] = $tupleassign12[0];
						$m['Game']['powerDoubleclickEnabled'] = $tupleassign12[1];
						$m['Game']['autoTileOpeningEnabled'] = $tupleassign12[2];
					}
					else if ((($bool122=((($bool121=$and59=(((($cmp95=50)===($cmp96=($compare39 = x))?0:
						(typeof $cmp95==typeof $cmp96 && ((typeof $cmp95 == 'number')||(typeof $cmp95 == 'string')||(typeof $cmp95 == 'boolean'))?
							($cmp95 == $cmp96 ? 0 : ($cmp95 < $cmp96 ? -1 : 1)):
							$p['cmp']($cmp95, $cmp96))) == -1)&&((($cmp97=$compare39)===($cmp98=($compare40 = 250))?0:
						(typeof $cmp97==typeof $cmp98 && ((typeof $cmp97 == 'number')||(typeof $cmp97 == 'string')||(typeof $cmp97 == 'boolean'))?
							($cmp97 == $cmp98 ? 0 : ($cmp97 < $cmp98 ? -1 : 1)):
							$p['cmp']($cmp97, $cmp98))) == -1))) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
						false :
						(typeof $bool121=='object'?
							(typeof $bool121['__nonzero__']=='function'?
								$bool121['__nonzero__']() :
								(typeof $bool121['__len__']=='function'?
									($bool121['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp99=99)===($cmp100=($compare41 = y))?0:
						(typeof $cmp99==typeof $cmp100 && ((typeof $cmp99 == 'number')||(typeof $cmp99 == 'string')||(typeof $cmp99 == 'boolean'))?
							($cmp99 == $cmp100 ? 0 : ($cmp99 < $cmp100 ? -1 : 1)):
							$p['cmp']($cmp99, $cmp100))) == -1)&&((($cmp101=$compare41)===($cmp102=($compare42 = 141))?0:
						(typeof $cmp101==typeof $cmp102 && ((typeof $cmp101 == 'number')||(typeof $cmp101 == 'string')||(typeof $cmp101 == 'boolean'))?
							($cmp101 == $cmp102 ? 0 : ($cmp101 < $cmp102 ? -1 : 1)):
							$p['cmp']($cmp101, $cmp102))) == -1)):$and59)) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
							false :
							(typeof $bool122=='object'?
								(typeof $bool122['__nonzero__']=='function'?
									$bool122['__nonzero__']() :
									(typeof $bool122['__len__']=='function'?
										($bool122['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign13 = $p['__ass_unpack']($p['tuple']([15, 27, 80, 28]), 4, null);
						$m['menu']['numRows'] = $tupleassign13[0];
						$m['menu']['numCols'] = $tupleassign13[1];
						$m['menu']['numMines'] = $tupleassign13[2];
						$m['menu']['tilesize'] = $tupleassign13[3];
						var $tupleassign14 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['Game']['customDifficultyInputted'] = $tupleassign14[0];
						$m['Game']['powerDoubleclickEnabled'] = $tupleassign14[1];
						$m['Game']['autoTileOpeningEnabled'] = $tupleassign14[2];
					}
					else if ((($bool124=((($bool123=$and61=(((($cmp103=50)===($cmp104=($compare43 = x))?0:
						(typeof $cmp103==typeof $cmp104 && ((typeof $cmp103 == 'number')||(typeof $cmp103 == 'string')||(typeof $cmp103 == 'boolean'))?
							($cmp103 == $cmp104 ? 0 : ($cmp103 < $cmp104 ? -1 : 1)):
							$p['cmp']($cmp103, $cmp104))) == -1)&&((($cmp105=$compare43)===($cmp106=($compare44 = 250))?0:
						(typeof $cmp105==typeof $cmp106 && ((typeof $cmp105 == 'number')||(typeof $cmp105 == 'string')||(typeof $cmp105 == 'boolean'))?
							($cmp105 == $cmp106 ? 0 : ($cmp105 < $cmp106 ? -1 : 1)):
							$p['cmp']($cmp105, $cmp106))) == -1))) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
						false :
						(typeof $bool123=='object'?
							(typeof $bool123['__nonzero__']=='function'?
								$bool123['__nonzero__']() :
								(typeof $bool123['__len__']=='function'?
									($bool123['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp107=158)===($cmp108=($compare45 = y))?0:
						(typeof $cmp107==typeof $cmp108 && ((typeof $cmp107 == 'number')||(typeof $cmp107 == 'string')||(typeof $cmp107 == 'boolean'))?
							($cmp107 == $cmp108 ? 0 : ($cmp107 < $cmp108 ? -1 : 1)):
							$p['cmp']($cmp107, $cmp108))) == -1)&&((($cmp109=$compare45)===($cmp110=($compare46 = 200))?0:
						(typeof $cmp109==typeof $cmp110 && ((typeof $cmp109 == 'number')||(typeof $cmp109 == 'string')||(typeof $cmp109 == 'boolean'))?
							($cmp109 == $cmp110 ? 0 : ($cmp109 < $cmp110 ? -1 : 1)):
							$p['cmp']($cmp109, $cmp110))) == -1)):$and61)) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
							false :
							(typeof $bool124=='object'?
								(typeof $bool124['__nonzero__']=='function'?
									$bool124['__nonzero__']() :
									(typeof $bool124['__len__']=='function'?
										($bool124['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign15 = $p['__ass_unpack']($p['tuple']([25, 30, 160, 28]), 4, null);
						$m['menu']['numRows'] = $tupleassign15[0];
						$m['menu']['numCols'] = $tupleassign15[1];
						$m['menu']['numMines'] = $tupleassign15[2];
						$m['menu']['tilesize'] = $tupleassign15[3];
						var $tupleassign16 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['Game']['customDifficultyInputted'] = $tupleassign16[0];
						$m['Game']['powerDoubleclickEnabled'] = $tupleassign16[1];
						$m['Game']['autoTileOpeningEnabled'] = $tupleassign16[2];
					}
					else if ((($bool126=((($bool125=$and63=(((($cmp111=100)===($cmp112=($compare47 = x))?0:
						(typeof $cmp111==typeof $cmp112 && ((typeof $cmp111 == 'number')||(typeof $cmp111 == 'string')||(typeof $cmp111 == 'boolean'))?
							($cmp111 == $cmp112 ? 0 : ($cmp111 < $cmp112 ? -1 : 1)):
							$p['cmp']($cmp111, $cmp112))) == -1)&&((($cmp113=$compare47)===($cmp114=($compare48 = 200))?0:
						(typeof $cmp113==typeof $cmp114 && ((typeof $cmp113 == 'number')||(typeof $cmp113 == 'string')||(typeof $cmp113 == 'boolean'))?
							($cmp113 == $cmp114 ? 0 : ($cmp113 < $cmp114 ? -1 : 1)):
							$p['cmp']($cmp113, $cmp114))) == -1))) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
						false :
						(typeof $bool125=='object'?
							(typeof $bool125['__nonzero__']=='function'?
								$bool125['__nonzero__']() :
								(typeof $bool125['__len__']=='function'?
									($bool125['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp115=225)===($cmp116=($compare49 = y))?0:
						(typeof $cmp115==typeof $cmp116 && ((typeof $cmp115 == 'number')||(typeof $cmp115 == 'string')||(typeof $cmp115 == 'boolean'))?
							($cmp115 == $cmp116 ? 0 : ($cmp115 < $cmp116 ? -1 : 1)):
							$p['cmp']($cmp115, $cmp116))) == -1)&&((($cmp117=$compare49)===($cmp118=($compare50 = 259))?0:
						(typeof $cmp117==typeof $cmp118 && ((typeof $cmp117 == 'number')||(typeof $cmp117 == 'string')||(typeof $cmp117 == 'boolean'))?
							($cmp117 == $cmp118 ? 0 : ($cmp117 < $cmp118 ? -1 : 1)):
							$p['cmp']($cmp117, $cmp118))) == -1)):$and63)) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
							false :
							(typeof $bool126=='object'?
								(typeof $bool126['__nonzero__']=='function'?
									$bool126['__nonzero__']() :
									(typeof $bool126['__len__']=='function'?
										($bool126['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['menu']['customMenu']();
						$m['pg']['display']['setup']((typeof customMenuLoop == "undefined"?$m['customMenuLoop']:customMenuLoop));
						continue;
					}
					else if ((($bool128=((($bool127=$and65=(((($cmp119=110)===($cmp120=($compare51 = x))?0:
						(typeof $cmp119==typeof $cmp120 && ((typeof $cmp119 == 'number')||(typeof $cmp119 == 'string')||(typeof $cmp119 == 'boolean'))?
							($cmp119 == $cmp120 ? 0 : ($cmp119 < $cmp120 ? -1 : 1)):
							$p['cmp']($cmp119, $cmp120))) == -1)&&((($cmp121=$compare51)===($cmp122=($compare52 = 190))?0:
						(typeof $cmp121==typeof $cmp122 && ((typeof $cmp121 == 'number')||(typeof $cmp121 == 'string')||(typeof $cmp121 == 'boolean'))?
							($cmp121 == $cmp122 ? 0 : ($cmp121 < $cmp122 ? -1 : 1)):
							$p['cmp']($cmp121, $cmp122))) == -1))) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
						false :
						(typeof $bool127=='object'?
							(typeof $bool127['__nonzero__']=='function'?
								$bool127['__nonzero__']() :
								(typeof $bool127['__len__']=='function'?
									($bool127['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp123=275)===($cmp124=($compare53 = y))?0:
						(typeof $cmp123==typeof $cmp124 && ((typeof $cmp123 == 'number')||(typeof $cmp123 == 'string')||(typeof $cmp123 == 'boolean'))?
							($cmp123 == $cmp124 ? 0 : ($cmp123 < $cmp124 ? -1 : 1)):
							$p['cmp']($cmp123, $cmp124))) == -1)&&((($cmp125=$compare53)===($cmp126=($compare54 = 305))?0:
						(typeof $cmp125==typeof $cmp126 && ((typeof $cmp125 == 'number')||(typeof $cmp125 == 'string')||(typeof $cmp125 == 'boolean'))?
							($cmp125 == $cmp126 ? 0 : ($cmp125 < $cmp126 ? -1 : 1)):
							$p['cmp']($cmp125, $cmp126))) == -1)):$and65)) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
							false :
							(typeof $bool128=='object'?
								(typeof $bool128['__nonzero__']=='function'?
									$bool128['__nonzero__']() :
									(typeof $bool128['__len__']=='function'?
										($bool128['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['menu']['helpMenu']();
						$m['pg']['display']['setup']((typeof helpMenuLoop == "undefined"?$m['helpMenuLoop']:helpMenuLoop));
						continue;
					}
					else {
						continue;
					}
					if ((($bool129=$m['Game']['started']) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
							false :
							(typeof $bool129=='object'?
								(typeof $bool129['__nonzero__']=='function'?
									$bool129['__nonzero__']() :
									(typeof $bool129['__len__']=='function'?
										($bool129['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['Game']['resetTiles']($m['Game']['numRows'], $m['Game']['numCols']);
					}
					$m['Game']['newGame']($m['menu']['numRows'], $m['menu']['numCols'], $m['menu']['numMines'], $m['menu']['tilesize']);
					$m['pg']['display']['setup']($m['run']);
				}
			}
		}
		return null;
	};
	$m['mainMenuLoop']['__name__'] = 'mainMenuLoop';

	$m['mainMenuLoop']['__bind_type__'] = 0;
	$m['mainMenuLoop']['__args__'] = [null,null];
	$m['keyboardInput'] = function(string, typedChar, maximumDigits) {
		var $cmp127,$cmp128,$cmp129,$and67,$and68,$bool134,$bool135,$bool130,$bool131,$bool132,$cmp132,$attr483,$attr487,$attr486,$attr485,$attr484,$eq145,$eq144,$attr489,$attr488,$eq143,$bool133,$cmp134,$cmp133,$cmp131,$cmp130,$eq146,$attr490,$len2,$len3;
		if ((($bool130=(((($cmp127=$m['pg']['K_1'])===($cmp128=($compare55 = typedChar))?0:
			(typeof $cmp127==typeof $cmp128 && ((typeof $cmp127 == 'number')||(typeof $cmp127 == 'string')||(typeof $cmp127 == 'boolean'))?
				($cmp127 == $cmp128 ? 0 : ($cmp127 < $cmp128 ? -1 : 1)):
				$p['cmp']($cmp127, $cmp128))) < 1)&&((($cmp129=$compare55)===($cmp130=($compare56 = $m['pg']['K_9']))?0:
			(typeof $cmp129==typeof $cmp130 && ((typeof $cmp129 == 'number')||(typeof $cmp129 == 'string')||(typeof $cmp129 == 'boolean'))?
				($cmp129 == $cmp130 ? 0 : ($cmp129 < $cmp130 ? -1 : 1)):
				$p['cmp']($cmp129, $cmp130))) < 1))) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
				false :
				(typeof $bool130=='object'?
					(typeof $bool130['__nonzero__']=='function'?
						$bool130['__nonzero__']() :
						(typeof $bool130['__len__']=='function'?
							($bool130['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return ((($bool131=((($cmp131=(($len2=string) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2))))))===($cmp132=maximumDigits)?0:
				(typeof $cmp131==typeof $cmp132 && ((typeof $cmp131 == 'number')||(typeof $cmp131 == 'string')||(typeof $cmp131 == 'boolean'))?
					($cmp131 == $cmp132 ? 0 : ($cmp131 < $cmp132 ? -1 : 1)):
					$p['cmp']($cmp131, $cmp132))) == -1)) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
				false :
				(typeof $bool131=='object'?
					(typeof $bool131['__nonzero__']=='function'?
						$bool131['__nonzero__']() :
						(typeof $bool131['__len__']=='function'?
							($bool131['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ((string)+($p['str']((typedChar)-(48)))) : (string));
		}
		else if ((($bool133=((($bool132=$and67=(($eq143=typedChar)===($eq144=$m['pg']['K_0'])&&$eq143===null?true:
			($eq143===null?false:($eq144===null?false:
				((typeof $eq143=='object'||typeof $eq143=='function')&&typeof $eq143['__cmp__']=='function'?$eq143['__cmp__']($eq144) === 0:
					((typeof $eq144=='object'||typeof $eq144=='function')&&typeof $eq144['__cmp__']=='function'?$eq144['__cmp__']($eq143) === 0:
						$eq143==$eq144)))))) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
			false :
			(typeof $bool132=='object'?
				(typeof $bool132['__nonzero__']=='function'?
					$bool132['__nonzero__']() :
					(typeof $bool132['__len__']=='function'?
						($bool132['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?string:$and67)) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
				false :
				(typeof $bool133=='object'?
					(typeof $bool133['__nonzero__']=='function'?
						$bool133['__nonzero__']() :
						(typeof $bool133['__len__']=='function'?
							($bool133['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return ((($bool134=((($cmp133=(($len3=string) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))===($cmp134=maximumDigits)?0:
				(typeof $cmp133==typeof $cmp134 && ((typeof $cmp133 == 'number')||(typeof $cmp133 == 'string')||(typeof $cmp133 == 'boolean'))?
					($cmp133 == $cmp134 ? 0 : ($cmp133 < $cmp134 ? -1 : 1)):
					$p['cmp']($cmp133, $cmp134))) == -1)) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
				false :
				(typeof $bool134=='object'?
					(typeof $bool134['__nonzero__']=='function'?
						$bool134['__nonzero__']() :
						(typeof $bool134['__len__']=='function'?
							($bool134['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ((string)+('0')) : (string));
		}
		else if ((($bool135=(($eq145=typedChar)===($eq146=$m['pg']['K_BACKSPACE'])&&$eq145===null?true:
			($eq145===null?false:($eq146===null?false:
				((typeof $eq145=='object'||typeof $eq145=='function')&&typeof $eq145['__cmp__']=='function'?$eq145['__cmp__']($eq146) === 0:
					((typeof $eq146=='object'||typeof $eq146=='function')&&typeof $eq146['__cmp__']=='function'?$eq146['__cmp__']($eq145) === 0:
						$eq145==$eq146)))))) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
				false :
				(typeof $bool135=='object'?
					(typeof $bool135['__nonzero__']=='function'?
						$bool135['__nonzero__']() :
						(typeof $bool135['__len__']=='function'?
							($bool135['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return ('  ')+($p['__getslice'](string, 0, -(1)));
		}
		return null;
	};
	$m['keyboardInput']['__name__'] = 'keyboardInput';

	$m['keyboardInput']['__bind_type__'] = 0;
	$m['keyboardInput']['__args__'] = [null,null,['string'],['typedChar'],['maximumDigits']];
	$m['customMenuLoop'] = function() {
		var $attr547,$attr582,$attr583,$attr580,$attr581,$attr544,$attr584,$iter32_iter,$and80,$attr579,font,$bool170,$attr559,$bool172,$bool173,$bool174,$bool175,$cmp199,$cmp198,$cmp153,$attr539,$attr538,$attr537,$attr536,$attr535,$attr534,$attr533,$attr532,$attr531,$attr530,$cmp186,rowsText,$cmp178,$cmp187,$cmp173,$cmp172,$cmp171,$cmp170,$cmp177,$cmp176,$cmp175,$cmp174,$and82,$cmp185,$bool167,$attr553,$bool166,$bool163,$bool162,$cmp184,$bool160,$cmp182,$cmp183,$cmp180,$cmp181,$attr569,$bool169,$bool164,minesText,$cmp188,$cmp189,$attr502,$attr503,$attr500,$attr501,$attr506,$attr507,$attr504,$attr505,x,$attr508,$attr509,$cmp168,$cmp169,$attr562,$and73,$attr564,$attr565,$attr566,$attr567,$cmp160,$cmp161,$cmp162,$iter32_nextval,$cmp164,$cmp165,$cmp166,$cmp167,$attr578,event,$attr576,$bool156,$bool157,$bool154,$bool155,$bool152,$bool153,$bool150,$attr491,$bool168,$attr492,$bool158,$bool159,$attr515,$attr514,$attr517,$attr516,$attr511,$attr510,$attr513,$attr512,$attr494,$attr519,$attr518,$attr495,$attr573,$attr572,$attr571,$attr570,$attr577,$attr496,$attr575,$attr574,$attr497,$bool149,$bool148,$bool141,$bool140,$bool143,$bool142,$bool145,$eq154,$bool147,$bool146,$or11,$bool171,$attr546,$bool161,$iter32_idx,$attr545,$attr542,$attr543,$attr540,$attr541,$attr561,$attr548,$attr549,$attr563,$bool138,$bool139,$bool136,$bool137,$attr568,colsText,$cmp201,$bool144,$cmp155,$cmp154,$cmp157,$cmp156,$cmp151,$cmp150,$iter32_array,colsRect,$cmp197,$cmp159,$cmp158,$cmp137,$cmp136,$cmp135,$cmp163,rowsRect,$cmp152,$cmp194,$cmp139,$cmp138,$cmp191,$cmp190,$bool165,$attr560,$cmp193,$and78,$and79,$cmp192,$and70,$and71,$and72,$attr493,$and74,$and75,$and76,$and77,$cmp142,$cmp143,$cmp140,$cmp141,$cmp146,$cmp147,$cmp144,$cmp145,$attr498,$attr499,$cmp148,$cmp149,$eq152,$eq153,$eq150,$eq151,$cmp196,$cmp179,$or10,$and69,minesRect,$cmp200,$cmp195,$iter32_type,$attr558,$eq149,$eq148,$attr551,$attr550,$eq147,$attr552,$attr555,$attr554,$attr557,$attr556,$or7,$cmp202,$or9,$or8,$attr524,$or12,$bool151,$attr528,$attr529,$and81,y,$attr525,$attr526,$attr527,$attr520,$attr521,$attr522,$attr523;
		$iter32_iter = $m['pg']['event']['get']();
		if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
			$iter32_type = 0;
		} else {
			$iter32_iter = $iter32_iter['__iter__']();
			$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter32_idx = 0;
		while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
			event = $iter32_nextval;
			if ((($bool136=(($eq147=event['type'])===($eq148=$m['pg']['KEYDOWN'])&&$eq147===null?true:
				($eq147===null?false:($eq148===null?false:
					((typeof $eq147=='object'||typeof $eq147=='function')&&typeof $eq147['__cmp__']=='function'?$eq147['__cmp__']($eq148) === 0:
						((typeof $eq148=='object'||typeof $eq148=='function')&&typeof $eq148['__cmp__']=='function'?$eq148['__cmp__']($eq147) === 0:
							$eq147==$eq148)))))) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136['__nonzero__']=='function'?
							$bool136['__nonzero__']() :
							(typeof $bool136['__len__']=='function'?
								($bool136['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				font = $m['pg']['font']['SysFont']('Lucida Grande', 15);
				if ((($bool137=(($eq149=event['key'])===($eq150=$m['pg']['K_ESCAPE'])&&$eq149===null?true:
					($eq149===null?false:($eq150===null?false:
						((typeof $eq149=='object'||typeof $eq149=='function')&&typeof $eq149['__cmp__']=='function'?$eq149['__cmp__']($eq150) === 0:
							((typeof $eq150=='object'||typeof $eq150=='function')&&typeof $eq150['__cmp__']=='function'?$eq150['__cmp__']($eq149) === 0:
								$eq149==$eq150)))))) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
						false :
						(typeof $bool137=='object'?
							(typeof $bool137['__nonzero__']=='function'?
								$bool137['__nonzero__']() :
								(typeof $bool137['__len__']=='function'?
									($bool137['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					var $tupleassign17 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
					$m['menu']['rowsBoxSelected'] = $tupleassign17[0];
					$m['menu']['colsBoxSelected'] = $tupleassign17[1];
					$m['menu']['minesBoxSelected'] = $tupleassign17[2];
					$m['menu']['difficultyMenu']();
					$m['pg']['display']['setup']($m['mainMenuLoop']);
				}
				else if ((($bool138=$m['menu']['rowsBoxSelected']) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
						false :
						(typeof $bool138=='object'?
							(typeof $bool138['__nonzero__']=='function'?
								$bool138['__nonzero__']() :
								(typeof $bool138['__len__']=='function'?
									($bool138['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['menu']['rowsStr'] = $m['keyboardInput']($m['menu']['rowsStr']['lstrip'](), event['key'], 2);
					rowsText = font['render']($m['menu']['rowsStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
					rowsRect = rowsText['get_rect']();
					rowsRect['__setattr__']('right', 217);
					rowsRect['__setattr__']('top', 48);
					$m['screen']['blit'](rowsText, rowsRect);
					$m['pg']['display']['flip']();
				}
				else if ((($bool139=$m['menu']['colsBoxSelected']) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
						false :
						(typeof $bool139=='object'?
							(typeof $bool139['__nonzero__']=='function'?
								$bool139['__nonzero__']() :
								(typeof $bool139['__len__']=='function'?
									($bool139['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['menu']['colsStr'] = $m['keyboardInput']($m['menu']['colsStr']['lstrip'](), event['key'], 2);
					colsText = font['render']($m['menu']['colsStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
					colsRect = colsText['get_rect']();
					colsRect['__setattr__']('right', 217);
					colsRect['__setattr__']('top', 83);
					$m['screen']['blit'](colsText, colsRect);
					$m['pg']['display']['flip']();
				}
				else if ((($bool140=$m['menu']['minesBoxSelected']) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
						false :
						(typeof $bool140=='object'?
							(typeof $bool140['__nonzero__']=='function'?
								$bool140['__nonzero__']() :
								(typeof $bool140['__len__']=='function'?
									($bool140['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['menu']['minesStr'] = $m['keyboardInput']($m['menu']['minesStr']['lstrip'](), event['key'], 4);
					minesText = font['render']($m['menu']['minesStr'], true, $p['tuple']([0, 0, 0]), $p['tuple']([255, 255, 255]));
					minesRect = minesText['get_rect']();
					minesRect['__setattr__']('right', 217);
					minesRect['__setattr__']('top', 118);
					$m['screen']['blit'](minesText, minesRect);
					$m['pg']['display']['flip']();
				}
			}
			else if ((($bool141=(($eq151=event['type'])===($eq152=$m['pg']['MOUSEBUTTONUP'])&&$eq151===null?true:
				($eq151===null?false:($eq152===null?false:
					((typeof $eq151=='object'||typeof $eq151=='function')&&typeof $eq151['__cmp__']=='function'?$eq151['__cmp__']($eq152) === 0:
						((typeof $eq152=='object'||typeof $eq152=='function')&&typeof $eq152['__cmp__']=='function'?$eq152['__cmp__']($eq151) === 0:
							$eq151==$eq152)))))) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
					false :
					(typeof $bool141=='object'?
						(typeof $bool141['__nonzero__']=='function'?
							$bool141['__nonzero__']() :
							(typeof $bool141['__len__']=='function'?
								($bool141['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign18 = $p['__ass_unpack']($m['pg']['mouse']['get_pos'](), 2, null);
				x = $tupleassign18[0];
				y = $tupleassign18[1];
				$m['pg']['mouse']['get_pressed']();
				if ((($bool142=(($eq153=event['button'])===($eq154=1)&&$eq153===null?true:
					($eq153===null?false:($eq154===null?false:
						((typeof $eq153=='object'||typeof $eq153=='function')&&typeof $eq153['__cmp__']=='function'?$eq153['__cmp__']($eq154) === 0:
							((typeof $eq154=='object'||typeof $eq154=='function')&&typeof $eq154['__cmp__']=='function'?$eq154['__cmp__']($eq153) === 0:
								$eq153==$eq154)))))) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
						false :
						(typeof $bool142=='object'?
							(typeof $bool142['__nonzero__']=='function'?
								$bool142['__nonzero__']() :
								(typeof $bool142['__len__']=='function'?
									($bool142['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool144=((($bool143=$and69=(((($cmp135=170)===($cmp136=($compare57 = x))?0:
						(typeof $cmp135==typeof $cmp136 && ((typeof $cmp135 == 'number')||(typeof $cmp135 == 'string')||(typeof $cmp135 == 'boolean'))?
							($cmp135 == $cmp136 ? 0 : ($cmp135 < $cmp136 ? -1 : 1)):
							$p['cmp']($cmp135, $cmp136))) == -1)&&((($cmp137=$compare57)===($cmp138=($compare58 = 220))?0:
						(typeof $cmp137==typeof $cmp138 && ((typeof $cmp137 == 'number')||(typeof $cmp137 == 'string')||(typeof $cmp137 == 'boolean'))?
							($cmp137 == $cmp138 ? 0 : ($cmp137 < $cmp138 ? -1 : 1)):
							$p['cmp']($cmp137, $cmp138))) == -1))) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
						false :
						(typeof $bool143=='object'?
							(typeof $bool143['__nonzero__']=='function'?
								$bool143['__nonzero__']() :
								(typeof $bool143['__len__']=='function'?
									($bool143['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp139=45)===($cmp140=($compare59 = y))?0:
						(typeof $cmp139==typeof $cmp140 && ((typeof $cmp139 == 'number')||(typeof $cmp139 == 'string')||(typeof $cmp139 == 'boolean'))?
							($cmp139 == $cmp140 ? 0 : ($cmp139 < $cmp140 ? -1 : 1)):
							$p['cmp']($cmp139, $cmp140))) == -1)&&((($cmp141=$compare59)===($cmp142=($compare60 = 70))?0:
						(typeof $cmp141==typeof $cmp142 && ((typeof $cmp141 == 'number')||(typeof $cmp141 == 'string')||(typeof $cmp141 == 'boolean'))?
							($cmp141 == $cmp142 ? 0 : ($cmp141 < $cmp142 ? -1 : 1)):
							$p['cmp']($cmp141, $cmp142))) == -1)):$and69)) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
							false :
							(typeof $bool144=='object'?
								(typeof $bool144['__nonzero__']=='function'?
									$bool144['__nonzero__']() :
									(typeof $bool144['__len__']=='function'?
										($bool144['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign19 = $p['__ass_unpack']($p['tuple']([true, false, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign19[0];
						$m['menu']['colsBoxSelected'] = $tupleassign19[1];
						$m['menu']['minesBoxSelected'] = $tupleassign19[2];
					}
					else if ((($bool146=((($bool145=$and71=(((($cmp143=170)===($cmp144=($compare61 = x))?0:
						(typeof $cmp143==typeof $cmp144 && ((typeof $cmp143 == 'number')||(typeof $cmp143 == 'string')||(typeof $cmp143 == 'boolean'))?
							($cmp143 == $cmp144 ? 0 : ($cmp143 < $cmp144 ? -1 : 1)):
							$p['cmp']($cmp143, $cmp144))) == -1)&&((($cmp145=$compare61)===($cmp146=($compare62 = 220))?0:
						(typeof $cmp145==typeof $cmp146 && ((typeof $cmp145 == 'number')||(typeof $cmp145 == 'string')||(typeof $cmp145 == 'boolean'))?
							($cmp145 == $cmp146 ? 0 : ($cmp145 < $cmp146 ? -1 : 1)):
							$p['cmp']($cmp145, $cmp146))) == -1))) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
						false :
						(typeof $bool145=='object'?
							(typeof $bool145['__nonzero__']=='function'?
								$bool145['__nonzero__']() :
								(typeof $bool145['__len__']=='function'?
									($bool145['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp147=80)===($cmp148=($compare63 = y))?0:
						(typeof $cmp147==typeof $cmp148 && ((typeof $cmp147 == 'number')||(typeof $cmp147 == 'string')||(typeof $cmp147 == 'boolean'))?
							($cmp147 == $cmp148 ? 0 : ($cmp147 < $cmp148 ? -1 : 1)):
							$p['cmp']($cmp147, $cmp148))) == -1)&&((($cmp149=$compare63)===($cmp150=($compare64 = 105))?0:
						(typeof $cmp149==typeof $cmp150 && ((typeof $cmp149 == 'number')||(typeof $cmp149 == 'string')||(typeof $cmp149 == 'boolean'))?
							($cmp149 == $cmp150 ? 0 : ($cmp149 < $cmp150 ? -1 : 1)):
							$p['cmp']($cmp149, $cmp150))) == -1)):$and71)) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
							false :
							(typeof $bool146=='object'?
								(typeof $bool146['__nonzero__']=='function'?
									$bool146['__nonzero__']() :
									(typeof $bool146['__len__']=='function'?
										($bool146['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign20 = $p['__ass_unpack']($p['tuple']([false, true, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign20[0];
						$m['menu']['colsBoxSelected'] = $tupleassign20[1];
						$m['menu']['minesBoxSelected'] = $tupleassign20[2];
					}
					else if ((($bool148=((($bool147=$and73=(((($cmp151=170)===($cmp152=($compare65 = x))?0:
						(typeof $cmp151==typeof $cmp152 && ((typeof $cmp151 == 'number')||(typeof $cmp151 == 'string')||(typeof $cmp151 == 'boolean'))?
							($cmp151 == $cmp152 ? 0 : ($cmp151 < $cmp152 ? -1 : 1)):
							$p['cmp']($cmp151, $cmp152))) == -1)&&((($cmp153=$compare65)===($cmp154=($compare66 = 220))?0:
						(typeof $cmp153==typeof $cmp154 && ((typeof $cmp153 == 'number')||(typeof $cmp153 == 'string')||(typeof $cmp153 == 'boolean'))?
							($cmp153 == $cmp154 ? 0 : ($cmp153 < $cmp154 ? -1 : 1)):
							$p['cmp']($cmp153, $cmp154))) == -1))) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
						false :
						(typeof $bool147=='object'?
							(typeof $bool147['__nonzero__']=='function'?
								$bool147['__nonzero__']() :
								(typeof $bool147['__len__']=='function'?
									($bool147['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp155=115)===($cmp156=($compare67 = y))?0:
						(typeof $cmp155==typeof $cmp156 && ((typeof $cmp155 == 'number')||(typeof $cmp155 == 'string')||(typeof $cmp155 == 'boolean'))?
							($cmp155 == $cmp156 ? 0 : ($cmp155 < $cmp156 ? -1 : 1)):
							$p['cmp']($cmp155, $cmp156))) == -1)&&((($cmp157=$compare67)===($cmp158=($compare68 = 140))?0:
						(typeof $cmp157==typeof $cmp158 && ((typeof $cmp157 == 'number')||(typeof $cmp157 == 'string')||(typeof $cmp157 == 'boolean'))?
							($cmp157 == $cmp158 ? 0 : ($cmp157 < $cmp158 ? -1 : 1)):
							$p['cmp']($cmp157, $cmp158))) == -1)):$and73)) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
							false :
							(typeof $bool148=='object'?
								(typeof $bool148['__nonzero__']=='function'?
									$bool148['__nonzero__']() :
									(typeof $bool148['__len__']=='function'?
										($bool148['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign21 = $p['__ass_unpack']($p['tuple']([false, false, true]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign21[0];
						$m['menu']['colsBoxSelected'] = $tupleassign21[1];
						$m['menu']['minesBoxSelected'] = $tupleassign21[2];
					}
					else if ((($bool150=((($bool149=$and75=(((($cmp159=45)===($cmp160=($compare69 = x))?0:
						(typeof $cmp159==typeof $cmp160 && ((typeof $cmp159 == 'number')||(typeof $cmp159 == 'string')||(typeof $cmp159 == 'boolean'))?
							($cmp159 == $cmp160 ? 0 : ($cmp159 < $cmp160 ? -1 : 1)):
							$p['cmp']($cmp159, $cmp160))) == -1)&&((($cmp161=$compare69)===($cmp162=($compare70 = 140))?0:
						(typeof $cmp161==typeof $cmp162 && ((typeof $cmp161 == 'number')||(typeof $cmp161 == 'string')||(typeof $cmp161 == 'boolean'))?
							($cmp161 == $cmp162 ? 0 : ($cmp161 < $cmp162 ? -1 : 1)):
							$p['cmp']($cmp161, $cmp162))) == -1))) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
						false :
						(typeof $bool149=='object'?
							(typeof $bool149['__nonzero__']=='function'?
								$bool149['__nonzero__']() :
								(typeof $bool149['__len__']=='function'?
									($bool149['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp163=285)===($cmp164=($compare71 = y))?0:
						(typeof $cmp163==typeof $cmp164 && ((typeof $cmp163 == 'number')||(typeof $cmp163 == 'string')||(typeof $cmp163 == 'boolean'))?
							($cmp163 == $cmp164 ? 0 : ($cmp163 < $cmp164 ? -1 : 1)):
							$p['cmp']($cmp163, $cmp164))) == -1)&&((($cmp165=$compare71)===($cmp166=($compare72 = 315))?0:
						(typeof $cmp165==typeof $cmp166 && ((typeof $cmp165 == 'number')||(typeof $cmp165 == 'string')||(typeof $cmp165 == 'boolean'))?
							($cmp165 == $cmp166 ? 0 : ($cmp165 < $cmp166 ? -1 : 1)):
							$p['cmp']($cmp165, $cmp166))) == -1)):$and75)) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
							false :
							(typeof $bool150=='object'?
								(typeof $bool150['__nonzero__']=='function'?
									$bool150['__nonzero__']() :
									(typeof $bool150['__len__']=='function'?
										($bool150['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign22 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign22[0];
						$m['menu']['colsBoxSelected'] = $tupleassign22[1];
						$m['menu']['minesBoxSelected'] = $tupleassign22[2];
						$m['menu']['difficultyMenu']();
						$m['pg']['display']['setup']($m['mainMenuLoop']);
					}
					else if ((($bool152=((($bool151=$and77=(((($cmp167=160)===($cmp168=($compare73 = x))?0:
						(typeof $cmp167==typeof $cmp168 && ((typeof $cmp167 == 'number')||(typeof $cmp167 == 'string')||(typeof $cmp167 == 'boolean'))?
							($cmp167 == $cmp168 ? 0 : ($cmp167 < $cmp168 ? -1 : 1)):
							$p['cmp']($cmp167, $cmp168))) == -1)&&((($cmp169=$compare73)===($cmp170=($compare74 = 255))?0:
						(typeof $cmp169==typeof $cmp170 && ((typeof $cmp169 == 'number')||(typeof $cmp169 == 'string')||(typeof $cmp169 == 'boolean'))?
							($cmp169 == $cmp170 ? 0 : ($cmp169 < $cmp170 ? -1 : 1)):
							$p['cmp']($cmp169, $cmp170))) == -1))) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
						false :
						(typeof $bool151=='object'?
							(typeof $bool151['__nonzero__']=='function'?
								$bool151['__nonzero__']() :
								(typeof $bool151['__len__']=='function'?
									($bool151['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp171=285)===($cmp172=($compare75 = y))?0:
						(typeof $cmp171==typeof $cmp172 && ((typeof $cmp171 == 'number')||(typeof $cmp171 == 'string')||(typeof $cmp171 == 'boolean'))?
							($cmp171 == $cmp172 ? 0 : ($cmp171 < $cmp172 ? -1 : 1)):
							$p['cmp']($cmp171, $cmp172))) == -1)&&((($cmp173=$compare75)===($cmp174=($compare76 = 315))?0:
						(typeof $cmp173==typeof $cmp174 && ((typeof $cmp173 == 'number')||(typeof $cmp173 == 'string')||(typeof $cmp173 == 'boolean'))?
							($cmp173 == $cmp174 ? 0 : ($cmp173 < $cmp174 ? -1 : 1)):
							$p['cmp']($cmp173, $cmp174))) == -1)):$and77)) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
							false :
							(typeof $bool152=='object'?
								(typeof $bool152['__nonzero__']=='function'?
									$bool152['__nonzero__']() :
									(typeof $bool152['__len__']=='function'?
										($bool152['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign23 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign23[0];
						$m['menu']['colsBoxSelected'] = $tupleassign23[1];
						$m['menu']['minesBoxSelected'] = $tupleassign23[2];
						if ((($bool166=((($bool158=$or7=((($cmp175=$p['float_int'](((($bool153=$m['menu']['rowsStr']) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
							false :
							(typeof $bool153=='object'?
								(typeof $bool153['__nonzero__']=='function'?
									$bool153['__nonzero__']() :
									(typeof $bool153['__len__']=='function'?
										($bool153['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['rowsStr']) : ('0'))))===($cmp176=10)?0:
							(typeof $cmp175==typeof $cmp176 && ((typeof $cmp175 == 'number')||(typeof $cmp175 == 'string')||(typeof $cmp175 == 'boolean'))?
								($cmp175 == $cmp176 ? 0 : ($cmp175 < $cmp176 ? -1 : 1)):
								$p['cmp']($cmp175, $cmp176))) == -1)) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
							false :
							(typeof $bool158=='object'?
								(typeof $bool158['__nonzero__']=='function'?
									$bool158['__nonzero__']() :
									(typeof $bool158['__len__']=='function'?
										($bool158['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or7:((($bool159=$or8=((($cmp177=$p['float_int'](((($bool154=$m['menu']['rowsStr']) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
							false :
							(typeof $bool154=='object'?
								(typeof $bool154['__nonzero__']=='function'?
									$bool154['__nonzero__']() :
									(typeof $bool154['__len__']=='function'?
										($bool154['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['rowsStr']) : ('0'))))===($cmp178=25)?0:
							(typeof $cmp177==typeof $cmp178 && ((typeof $cmp177 == 'number')||(typeof $cmp177 == 'string')||(typeof $cmp177 == 'boolean'))?
								($cmp177 == $cmp178 ? 0 : ($cmp177 < $cmp178 ? -1 : 1)):
								$p['cmp']($cmp177, $cmp178))) == 1)) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
							false :
							(typeof $bool159=='object'?
								(typeof $bool159['__nonzero__']=='function'?
									$bool159['__nonzero__']() :
									(typeof $bool159['__len__']=='function'?
										($bool159['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or8:((($bool160=$or9=((($cmp179=$p['float_int'](((($bool155=$m['menu']['colsStr']) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
							false :
							(typeof $bool155=='object'?
								(typeof $bool155['__nonzero__']=='function'?
									$bool155['__nonzero__']() :
									(typeof $bool155['__len__']=='function'?
										($bool155['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['colsStr']) : ('0'))))===($cmp180=10)?0:
							(typeof $cmp179==typeof $cmp180 && ((typeof $cmp179 == 'number')||(typeof $cmp179 == 'string')||(typeof $cmp179 == 'boolean'))?
								($cmp179 == $cmp180 ? 0 : ($cmp179 < $cmp180 ? -1 : 1)):
								$p['cmp']($cmp179, $cmp180))) == -1)) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
							false :
							(typeof $bool160=='object'?
								(typeof $bool160['__nonzero__']=='function'?
									$bool160['__nonzero__']() :
									(typeof $bool160['__len__']=='function'?
										($bool160['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or9:((($bool161=$or10=((($cmp181=$p['float_int'](((($bool156=$m['menu']['colsStr']) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
							false :
							(typeof $bool156=='object'?
								(typeof $bool156['__nonzero__']=='function'?
									$bool156['__nonzero__']() :
									(typeof $bool156['__len__']=='function'?
										($bool156['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['colsStr']) : ('0'))))===($cmp182=45)?0:
							(typeof $cmp181==typeof $cmp182 && ((typeof $cmp181 == 'number')||(typeof $cmp181 == 'string')||(typeof $cmp181 == 'boolean'))?
								($cmp181 == $cmp182 ? 0 : ($cmp181 < $cmp182 ? -1 : 1)):
								$p['cmp']($cmp181, $cmp182))) == 1)) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
							false :
							(typeof $bool161=='object'?
								(typeof $bool161['__nonzero__']=='function'?
									$bool161['__nonzero__']() :
									(typeof $bool161['__len__']=='function'?
										($bool161['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or10:((($bool162=$or11=((($cmp183=$p['float_int'](((($bool157=$m['menu']['minesStr']) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
							false :
							(typeof $bool157=='object'?
								(typeof $bool157['__nonzero__']=='function'?
									$bool157['__nonzero__']() :
									(typeof $bool157['__len__']=='function'?
										($bool157['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['minesStr']) : ('0'))))===($cmp184=1)?0:
							(typeof $cmp183==typeof $cmp184 && ((typeof $cmp183 == 'number')||(typeof $cmp183 == 'string')||(typeof $cmp183 == 'boolean'))?
								($cmp183 == $cmp184 ? 0 : ($cmp183 < $cmp184 ? -1 : 1)):
								$p['cmp']($cmp183, $cmp184))) == -1)) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
							false :
							(typeof $bool162=='object'?
								(typeof $bool162['__nonzero__']=='function'?
									$bool162['__nonzero__']() :
									(typeof $bool162['__len__']=='function'?
										($bool162['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or11:((($cmp185=$p['float_int'](((($bool163=$m['menu']['minesStr']) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
							false :
							(typeof $bool163=='object'?
								(typeof $bool163['__nonzero__']=='function'?
									$bool163['__nonzero__']() :
									(typeof $bool163['__len__']=='function'?
										($bool163['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['minesStr']) : ('0'))))===($cmp186=(($p['float_int'](((($bool164=$m['menu']['rowsStr']) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
							false :
							(typeof $bool164=='object'?
								(typeof $bool164['__nonzero__']=='function'?
									$bool164['__nonzero__']() :
									(typeof $bool164['__len__']=='function'?
										($bool164['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['rowsStr']) : ('0'))))*($p['float_int'](((($bool165=$m['menu']['colsStr']) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
							false :
							(typeof $bool165=='object'?
								(typeof $bool165['__nonzero__']=='function'?
									$bool165['__nonzero__']() :
									(typeof $bool165['__len__']=='function'?
										($bool165['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($m['menu']['colsStr']) : ('0')))))-(10))?0:
							(typeof $cmp185==typeof $cmp186 && ((typeof $cmp185 == 'number')||(typeof $cmp185 == 'string')||(typeof $cmp185 == 'boolean'))?
								($cmp185 == $cmp186 ? 0 : ($cmp185 < $cmp186 ? -1 : 1)):
								$p['cmp']($cmp185, $cmp186))) == 1))))))) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
								false :
								(typeof $bool166=='object'?
									(typeof $bool166['__nonzero__']=='function'?
										$bool166['__nonzero__']() :
										(typeof $bool166['__len__']=='function'?
											($bool166['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$m['pg']['draw']['rect']($m['screen'], $p['tuple']([199, 204, 216]), $p['tuple']([157, 317, 120, 20]));
							$m['screen']['blit']($m['menu']['dimError'], $p['tuple']([160, 318]));
							$m['pg']['display']['flip']();
						}
						else {
							var $tupleassign24 = $p['__ass_unpack']($p['tuple']([$p['float_int']($m['menu']['rowsStr']), $p['float_int']($m['menu']['colsStr']), $p['float_int']($m['menu']['minesStr'])]), 3, null);
							$m['menu']['numRows'] = $tupleassign24[0];
							$m['menu']['numCols'] = $tupleassign24[1];
							$m['menu']['numMines'] = $tupleassign24[2];
							$m['Game']['customDifficultyInputted'] = true;
							if ((($bool167=$m['Game']['started']) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
									false :
									(typeof $bool167=='object'?
										(typeof $bool167['__nonzero__']=='function'?
											$bool167['__nonzero__']() :
											(typeof $bool167['__len__']=='function'?
												($bool167['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$m['Game']['resetTiles']($m['Game']['numRows'], $m['Game']['numCols']);
							}
							$m['Game']['newGame']($m['menu']['numRows'], $m['menu']['numCols'], $m['menu']['numMines'], $m['menu']['tilesize']);
							$m['pg']['display']['setup']($m['run']);
						}
					}
					else if ((($bool169=((($bool168=$and79=(((($cmp187=205)===($cmp188=($compare77 = x))?0:
						(typeof $cmp187==typeof $cmp188 && ((typeof $cmp187 == 'number')||(typeof $cmp187 == 'string')||(typeof $cmp187 == 'boolean'))?
							($cmp187 == $cmp188 ? 0 : ($cmp187 < $cmp188 ? -1 : 1)):
							$p['cmp']($cmp187, $cmp188))) == -1)&&((($cmp189=$compare77)===($cmp190=($compare78 = 220))?0:
						(typeof $cmp189==typeof $cmp190 && ((typeof $cmp189 == 'number')||(typeof $cmp189 == 'string')||(typeof $cmp189 == 'boolean'))?
							($cmp189 == $cmp190 ? 0 : ($cmp189 < $cmp190 ? -1 : 1)):
							$p['cmp']($cmp189, $cmp190))) == -1))) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
						false :
						(typeof $bool168=='object'?
							(typeof $bool168['__nonzero__']=='function'?
								$bool168['__nonzero__']() :
								(typeof $bool168['__len__']=='function'?
									($bool168['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp191=200)===($cmp192=($compare79 = y))?0:
						(typeof $cmp191==typeof $cmp192 && ((typeof $cmp191 == 'number')||(typeof $cmp191 == 'string')||(typeof $cmp191 == 'boolean'))?
							($cmp191 == $cmp192 ? 0 : ($cmp191 < $cmp192 ? -1 : 1)):
							$p['cmp']($cmp191, $cmp192))) == -1)&&((($cmp193=$compare79)===($cmp194=($compare80 = 215))?0:
						(typeof $cmp193==typeof $cmp194 && ((typeof $cmp193 == 'number')||(typeof $cmp193 == 'string')||(typeof $cmp193 == 'boolean'))?
							($cmp193 == $cmp194 ? 0 : ($cmp193 < $cmp194 ? -1 : 1)):
							$p['cmp']($cmp193, $cmp194))) == -1)):$and79)) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
							false :
							(typeof $bool169=='object'?
								(typeof $bool169['__nonzero__']=='function'?
									$bool169['__nonzero__']() :
									(typeof $bool169['__len__']=='function'?
										($bool169['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign25 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign25[0];
						$m['menu']['colsBoxSelected'] = $tupleassign25[1];
						$m['menu']['minesBoxSelected'] = $tupleassign25[2];
						$m['Game']['powerDoubleclickEnabled'] = ((($bool170=$m['Game']['powerDoubleclickEnabled']) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
							false :
							(typeof $bool170=='object'?
								(typeof $bool170['__nonzero__']=='function'?
									$bool170['__nonzero__']() :
									(typeof $bool170['__len__']=='function'?
										($bool170['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (false) : (true));
						$m['pg']['draw']['rect']($m['screen'], ((($bool171=$m['Game']['powerDoubleclickEnabled']) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
							false :
							(typeof $bool171=='object'?
								(typeof $bool171['__nonzero__']=='function'?
									$bool171['__nonzero__']() :
									(typeof $bool171['__len__']=='function'?
										($bool171['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($p['tuple']([0, 17, 255])) : ($p['tuple']([255, 255, 255]))), $p['tuple']([208, 203, 9, 9]));
						$m['pg']['display']['flip']();
					}
					else if ((($bool173=((($bool172=$and81=(((($cmp195=205)===($cmp196=($compare81 = x))?0:
						(typeof $cmp195==typeof $cmp196 && ((typeof $cmp195 == 'number')||(typeof $cmp195 == 'string')||(typeof $cmp195 == 'boolean'))?
							($cmp195 == $cmp196 ? 0 : ($cmp195 < $cmp196 ? -1 : 1)):
							$p['cmp']($cmp195, $cmp196))) == -1)&&((($cmp197=$compare81)===($cmp198=($compare82 = 220))?0:
						(typeof $cmp197==typeof $cmp198 && ((typeof $cmp197 == 'number')||(typeof $cmp197 == 'string')||(typeof $cmp197 == 'boolean'))?
							($cmp197 == $cmp198 ? 0 : ($cmp197 < $cmp198 ? -1 : 1)):
							$p['cmp']($cmp197, $cmp198))) == -1))) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
						false :
						(typeof $bool172=='object'?
							(typeof $bool172['__nonzero__']=='function'?
								$bool172['__nonzero__']() :
								(typeof $bool172['__len__']=='function'?
									($bool172['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp199=224)===($cmp200=($compare83 = y))?0:
						(typeof $cmp199==typeof $cmp200 && ((typeof $cmp199 == 'number')||(typeof $cmp199 == 'string')||(typeof $cmp199 == 'boolean'))?
							($cmp199 == $cmp200 ? 0 : ($cmp199 < $cmp200 ? -1 : 1)):
							$p['cmp']($cmp199, $cmp200))) == -1)&&((($cmp201=$compare83)===($cmp202=($compare84 = 239))?0:
						(typeof $cmp201==typeof $cmp202 && ((typeof $cmp201 == 'number')||(typeof $cmp201 == 'string')||(typeof $cmp201 == 'boolean'))?
							($cmp201 == $cmp202 ? 0 : ($cmp201 < $cmp202 ? -1 : 1)):
							$p['cmp']($cmp201, $cmp202))) == -1)):$and81)) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
							false :
							(typeof $bool173=='object'?
								(typeof $bool173['__nonzero__']=='function'?
									$bool173['__nonzero__']() :
									(typeof $bool173['__len__']=='function'?
										($bool173['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign26 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
						$m['menu']['rowsBoxSelected'] = $tupleassign26[0];
						$m['menu']['colsBoxSelected'] = $tupleassign26[1];
						$m['menu']['minesBoxSelected'] = $tupleassign26[2];
						$m['Game']['autoTileOpeningEnabled'] = ((($bool174=$m['Game']['autoTileOpeningEnabled']) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
							false :
							(typeof $bool174=='object'?
								(typeof $bool174['__nonzero__']=='function'?
									$bool174['__nonzero__']() :
									(typeof $bool174['__len__']=='function'?
										($bool174['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (false) : (true));
						$m['pg']['draw']['rect']($m['screen'], ((($bool175=$m['Game']['autoTileOpeningEnabled']) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
							false :
							(typeof $bool175=='object'?
								(typeof $bool175['__nonzero__']=='function'?
									$bool175['__nonzero__']() :
									(typeof $bool175['__len__']=='function'?
										($bool175['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? ($p['tuple']([0, 17, 255])) : ($p['tuple']([255, 255, 255]))), $p['tuple']([208, 227, 9, 9]));
						$m['pg']['display']['flip']();
					}
				}
			}
		}
		return null;
	};
	$m['customMenuLoop']['__name__'] = 'customMenuLoop';

	$m['customMenuLoop']['__bind_type__'] = 0;
	$m['customMenuLoop']['__args__'] = [null,null];
	$m['helpMenuLoop'] = function() {
		var $iter33_iter,$attr588,$attr589,$or18,$attr586,$attr587,$attr585,$bool184,$or15,event,$or14,$cmp205,$iter33_type,$eq162,$bool176,$bool177,$bool178,$cmp211,$or17,$cmp212,$cmp213,$cmp210,$iter33_idx,$cmp216,$or13,$cmp214,$cmp215,$and83,$and85,$and84,$and86,$iter33_nextval,$attr598,$attr595,$attr594,$attr597,$attr596,$attr591,$attr590,$attr593,$attr592,y,x,$or16,$cmp217,$iter33_array,$cmp218,$eq161,$bool185,$cmp203,$eq160,$bool181,$bool180,$bool183,$bool182,$bool179,$cmp204,$cmp207,$cmp206,$eq158,$eq159,$eq156,$eq157,$eq155,$cmp209,$cmp208;
		$iter33_iter = $m['pg']['event']['get']();
		if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
			$iter33_type = 0;
		} else {
			$iter33_iter = $iter33_iter['__iter__']();
			$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter33_idx = 0;
		while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
			event = $iter33_nextval;
			if ((($bool177=((($bool176=$and83=(($eq155=event['type'])===($eq156=$m['pg']['KEYDOWN'])&&$eq155===null?true:
				($eq155===null?false:($eq156===null?false:
					((typeof $eq155=='object'||typeof $eq155=='function')&&typeof $eq155['__cmp__']=='function'?$eq155['__cmp__']($eq156) === 0:
						((typeof $eq156=='object'||typeof $eq156=='function')&&typeof $eq156['__cmp__']=='function'?$eq156['__cmp__']($eq155) === 0:
							$eq155==$eq156)))))) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
				false :
				(typeof $bool176=='object'?
					(typeof $bool176['__nonzero__']=='function'?
						$bool176['__nonzero__']() :
						(typeof $bool176['__len__']=='function'?
							($bool176['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq157=event['key'])===($eq158=$m['pg']['K_ESCAPE'])&&$eq157===null?true:
				($eq157===null?false:($eq158===null?false:
					((typeof $eq157=='object'||typeof $eq157=='function')&&typeof $eq157['__cmp__']=='function'?$eq157['__cmp__']($eq158) === 0:
						((typeof $eq158=='object'||typeof $eq158=='function')&&typeof $eq158['__cmp__']=='function'?$eq158['__cmp__']($eq157) === 0:
							$eq157==$eq158))))):$and83)) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
					false :
					(typeof $bool177=='object'?
						(typeof $bool177['__nonzero__']=='function'?
							$bool177['__nonzero__']() :
							(typeof $bool177['__len__']=='function'?
								($bool177['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['menu']['difficultyMenu']();
				$m['pg']['display']['setup']($m['mainMenuLoop']);
			}
			else if ((($bool178=(($eq159=event['type'])===($eq160=$m['pg']['MOUSEBUTTONUP'])&&$eq159===null?true:
				($eq159===null?false:($eq160===null?false:
					((typeof $eq159=='object'||typeof $eq159=='function')&&typeof $eq159['__cmp__']=='function'?$eq159['__cmp__']($eq160) === 0:
						((typeof $eq160=='object'||typeof $eq160=='function')&&typeof $eq160['__cmp__']=='function'?$eq160['__cmp__']($eq159) === 0:
							$eq159==$eq160)))))) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
					false :
					(typeof $bool178=='object'?
						(typeof $bool178['__nonzero__']=='function'?
							$bool178['__nonzero__']() :
							(typeof $bool178['__len__']=='function'?
								($bool178['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign27 = $p['__ass_unpack']($m['pg']['mouse']['get_pos'](), 2, null);
				x = $tupleassign27[0];
				y = $tupleassign27[1];
				$m['pg']['mouse']['get_pressed']();
				if ((($bool179=(($eq161=event['button'])===($eq162=1)&&$eq161===null?true:
					($eq161===null?false:($eq162===null?false:
						((typeof $eq161=='object'||typeof $eq161=='function')&&typeof $eq161['__cmp__']=='function'?$eq161['__cmp__']($eq162) === 0:
							((typeof $eq162=='object'||typeof $eq162=='function')&&typeof $eq162['__cmp__']=='function'?$eq162['__cmp__']($eq161) === 0:
								$eq161==$eq162)))))) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
						false :
						(typeof $bool179=='object'?
							(typeof $bool179['__nonzero__']=='function'?
								$bool179['__nonzero__']() :
								(typeof $bool179['__len__']=='function'?
									($bool179['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool185=((($bool181=$or13=((($bool180=$and85=(((($cmp203=40)===($cmp204=($compare85 = x))?0:
						(typeof $cmp203==typeof $cmp204 && ((typeof $cmp203 == 'number')||(typeof $cmp203 == 'string')||(typeof $cmp203 == 'boolean'))?
							($cmp203 == $cmp204 ? 0 : ($cmp203 < $cmp204 ? -1 : 1)):
							$p['cmp']($cmp203, $cmp204))) == -1)&&((($cmp205=$compare85)===($cmp206=($compare86 = 59))?0:
						(typeof $cmp205==typeof $cmp206 && ((typeof $cmp205 == 'number')||(typeof $cmp205 == 'string')||(typeof $cmp205 == 'boolean'))?
							($cmp205 == $cmp206 ? 0 : ($cmp205 < $cmp206 ? -1 : 1)):
							$p['cmp']($cmp205, $cmp206))) == -1))) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
						false :
						(typeof $bool180=='object'?
							(typeof $bool180['__nonzero__']=='function'?
								$bool180['__nonzero__']() :
								(typeof $bool180['__len__']=='function'?
									($bool180['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(((($cmp207=13)===($cmp208=($compare87 = y))?0:
						(typeof $cmp207==typeof $cmp208 && ((typeof $cmp207 == 'number')||(typeof $cmp207 == 'string')||(typeof $cmp207 == 'boolean'))?
							($cmp207 == $cmp208 ? 0 : ($cmp207 < $cmp208 ? -1 : 1)):
							$p['cmp']($cmp207, $cmp208))) == -1)&&((($cmp209=$compare87)===($cmp210=($compare88 = 32))?0:
						(typeof $cmp209==typeof $cmp210 && ((typeof $cmp209 == 'number')||(typeof $cmp209 == 'string')||(typeof $cmp209 == 'boolean'))?
							($cmp209 == $cmp210 ? 0 : ($cmp209 < $cmp210 ? -1 : 1)):
							$p['cmp']($cmp209, $cmp210))) == -1)):$and85)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
						false :
						(typeof $bool181=='object'?
							(typeof $bool181['__nonzero__']=='function'?
								$bool181['__nonzero__']() :
								(typeof $bool181['__len__']=='function'?
									($bool181['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or13:((($bool182=$or15=((($cmp211=x)===($cmp212=35)?0:
						(typeof $cmp211==typeof $cmp212 && ((typeof $cmp211 == 'number')||(typeof $cmp211 == 'string')||(typeof $cmp211 == 'boolean'))?
							($cmp211 == $cmp212 ? 0 : ($cmp211 < $cmp212 ? -1 : 1)):
							$p['cmp']($cmp211, $cmp212))) == -1)) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
						false :
						(typeof $bool182=='object'?
							(typeof $bool182['__nonzero__']=='function'?
								$bool182['__nonzero__']() :
								(typeof $bool182['__len__']=='function'?
									($bool182['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or15:((($bool183=$or16=((($cmp213=x)===($cmp214=265)?0:
						(typeof $cmp213==typeof $cmp214 && ((typeof $cmp213 == 'number')||(typeof $cmp213 == 'string')||(typeof $cmp213 == 'boolean'))?
							($cmp213 == $cmp214 ? 0 : ($cmp213 < $cmp214 ? -1 : 1)):
							$p['cmp']($cmp213, $cmp214))) == 1)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
						false :
						(typeof $bool183=='object'?
							(typeof $bool183['__nonzero__']=='function'?
								$bool183['__nonzero__']() :
								(typeof $bool183['__len__']=='function'?
									($bool183['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or16:((($bool184=$or17=((($cmp215=y)===($cmp216=10)?0:
						(typeof $cmp215==typeof $cmp216 && ((typeof $cmp215 == 'number')||(typeof $cmp215 == 'string')||(typeof $cmp215 == 'boolean'))?
							($cmp215 == $cmp216 ? 0 : ($cmp215 < $cmp216 ? -1 : 1)):
							$p['cmp']($cmp215, $cmp216))) == -1)) === null || $bool184 === false || $bool184 === 0 || $bool184 === '' ?
						false :
						(typeof $bool184=='object'?
							(typeof $bool184['__nonzero__']=='function'?
								$bool184['__nonzero__']() :
								(typeof $bool184['__len__']=='function'?
									($bool184['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or17:((($cmp217=y)===($cmp218=340)?0:
						(typeof $cmp217==typeof $cmp218 && ((typeof $cmp217 == 'number')||(typeof $cmp217 == 'string')||(typeof $cmp217 == 'boolean'))?
							($cmp217 == $cmp218 ? 0 : ($cmp217 < $cmp218 ? -1 : 1)):
							$p['cmp']($cmp217, $cmp218))) == 1)))))) === null || $bool185 === false || $bool185 === 0 || $bool185 === '' ?
							false :
							(typeof $bool185=='object'?
								(typeof $bool185['__nonzero__']=='function'?
									$bool185['__nonzero__']() :
									(typeof $bool185['__len__']=='function'?
										($bool185['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['menu']['difficultyMenu']();
						$m['pg']['display']['setup']($m['mainMenuLoop']);
					}
				}
			}
		}
		return null;
	};
	$m['helpMenuLoop']['__name__'] = 'helpMenuLoop';

	$m['helpMenuLoop']['__bind_type__'] = 0;
	$m['helpMenuLoop']['__args__'] = [null,null];
	$m['main'] = function() {
		var loadImages;
		$m['screen'] = $m['pg']['display']['set_mode']($p['tuple']([1260, 725]));
		$m['screen']['fill']($p['tuple']([255, 255, 255]));
		$m['timer'] = 0;
		$m['bottomBarFont'] = $m['pg']['font']['SysFont']('Lucida Grande', 18);
		$m['clock'] = $m['pg']['time']['Clock']();
		$m['pg']['display']['set_caption']('Minesweeper');
		$m['Game'] = $m['Gameboard']();
		$m['menu'] = $m['Menu']();
		loadImages = $p['list'](['mine_red.png', 'mine_light_blue.png', 'mine_dark_blue.png', 'flag_light_green.png', 'flag_dark_green.png', 'flag_light_yellow.png', 'flag_dark_yellow.png']);
		$m['pg']['display']['setup']((typeof prerun == "undefined"?$m['prerun']:prerun), loadImages);
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['prerun'] = function() {
		var $attr599,$attr600;
		$m['Game']['loadImages']();
		$m['menu']['difficultyMenu']();
		$m['pg']['event']['set_blocked']($m['pg']['MOUSEMOTION']);
		$m['pg']['display']['setup']($m['mainMenuLoop']);
		return null;
	};
	$m['prerun']['__name__'] = 'prerun';

	$m['prerun']['__bind_type__'] = 0;
	$m['prerun']['__args__'] = [null,null];
	if ((($bool186=(($eq163=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq164='__main__')&&$eq163===null?true:
		($eq163===null?false:($eq164===null?false:
			((typeof $eq163=='object'||typeof $eq163=='function')&&typeof $eq163['__cmp__']=='function'?$eq163['__cmp__']($eq164) === 0:
				((typeof $eq164=='object'||typeof $eq164=='function')&&typeof $eq164['__cmp__']=='function'?$eq164['__cmp__']($eq163) === 0:
					$eq163==$eq164)))))) === null || $bool186 === false || $bool186 === 0 || $bool186 === '' ?
			false :
			(typeof $bool186=='object'?
				(typeof $bool186['__nonzero__']=='function'?
					$bool186['__nonzero__']() :
					(typeof $bool186['__len__']=='function'?
						($bool186['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['main']();
	}
	return this;
}; /* end minesweeper */


/* end module: minesweeper */


/*
PYJS_DEPS: ['pyjsdl', 'pyjsdl.locals', 'random.choice', 'random', 'os']
*/

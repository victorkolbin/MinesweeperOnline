/* start module: pyjamas.Canvas.GWTCanvasImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.Canvas', null, false);
	$m['BUTT'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', null, false);
	$m['DESTINATION_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas', null, false);
	$m['SOURCE_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
	$m['JSOStack'] = $p['___import___']('pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas', null, false);
	$m['PathElement'] = $p['___import___']('pyjamas.Canvas.PathElement', 'pyjamas.Canvas', null, false);
	$m['VMLContext'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas', null, false);
	$m['VMLStyle'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['addNamespace'] = function() {


    if (!$doc['namespaces']["v"]) {
        $doc['namespaces']['add']("v", "urn:schemas-microsoft-com:vml");
        $doc['createStyleSheet']()['cssText'] = "v\:*{behavior:url(#default#VML);}";
    }
    
	};
	$m['addNamespace']['__name__'] = 'addNamespace';

	$m['addNamespace']['__bind_type__'] = 0;
	$m['addNamespace']['__args__'] = [null,null];
	$m['GWTCanvasImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplIE6';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ns,$pyjs_try_err;
			try {
				ns = $doc['namespaces']['item']('v');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					$doc['namespaces']['add']('v', 'urn:schemas-microsoft-com:vml');
					$doc['createStyleSheet']()['cssText'] = 'v\\:*{behavior:url(#default#VML);}';
				}
			}
			self['pathStr'] = $m['JSOStack']();
			self['contextStack'] = $p['list']([]);
			self['currentX'] = 0;
			self['currentY'] = 0;
			self['parentElement'] = null;
			self['parentHeight'] = 0;
			self['parentWidth'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, anticlockwise) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				radius = arguments[3];
				startAngle = arguments[4];
				endAngle = arguments[5];
				anticlockwise = arguments[6];
			}

			self['pathStr']['append']($m['PathElement']['arc'](x, y, radius, startAngle, endAngle, anticlockwise, self));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['anticlockwise']]);
		$cls_definition['arc'] = $method;
		$method = $pyjs__bind_method2('beginPath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['beginPath'] = $method;
		$method = $pyjs__bind_method2('clear', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $attr1,$attr2;
			self['pathStr']['clear']();
			$m['DOM']['setInnerHTML'](self['parentElement'], '');
			return null;
		}
	, 1, [null,null,['self'],['width', 0],['height', 0]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('closePath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['pathStr']['append']($m['PathElement']['closePath']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closePath'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			self['context'] = $m['VMLContext']();
			self['matrix'] = self['context']['matrix'];
			return self['createParentElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('createParentElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr5,$attr7,$attr6;
			self['parentElement'] = $m['DOM']['createElement']('div');
			$m['DOM']['setStyleAttribute'](self['parentElement'], 'overflow', 'hidden');
			return self['parentElement'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['createParentElement'] = $method;
		$method = $pyjs__bind_method2('setFont', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['font']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cp1x = arguments[1];
				cp1y = arguments[2];
				cp2x = arguments[3];
				cp2y = arguments[4];
				x = arguments[5];
				y = arguments[6];
			}

			self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
		$cls_definition['cubicCurveTo'] = $method;
		$method = $pyjs__bind_method2('drawImage', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				img = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var sourceX,sourceY,$bool2,destY,$bool1,$bool6,$bool4,$bool5,dX,dY,sourceHeight,$attr9,$eq10,destWidth,sourceWidth,fullWidth,$attr32,$attr31,$attr30,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$39,$18,$19,$len2,$len3,$len1,fullHeight,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$29,$28,$21,$20,$22,$25,$24,$27,$26,vmlStr,destX,$eq8,$eq9,$or1,$or2,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$38,$bool3,$36,$37,$34,$35,$32,$33,$30,$31,$40,destHeight,$23;
			if ((($bool1=$p['isinstance'](img, $m['Widget'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				img = img['getElement']();
			}
			fullWidth = img['width'];
			fullHeight = img['height'];
			if ((($bool2=(($eq1=(($len1=args) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))))===($eq2=8)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sourceX = (typeof ($1=args)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](0));
				sourceY = (typeof ($3=args)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](1));
				sourceWidth = (typeof ($5=args)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=2]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](2));
				sourceHeight = (typeof ($7=args)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=3]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](3));
				destX = (typeof ($9=args)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=4]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](4));
				destY = (typeof ($11=args)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=5]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](5));
				destWidth = (typeof ($13=args)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=6]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](6));
				destHeight = (typeof ($15=args)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=7]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](7));
			}
			else if ((($bool3=(($eq3=(($len2=args) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2))))))===($eq4=4)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				sourceX = 0;
				sourceY = 0;
				sourceWidth = fullWidth;
				sourceHeight = fullHeight;
				destX = (typeof ($17=args)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](0));
				destY = (typeof ($19=args)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](1));
				destWidth = (typeof ($21=args)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=2]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](2));
				destHeight = (typeof ($23=args)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=3]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](3));
			}
			else if ((($bool4=(($eq5=(($len3=args) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))===($eq6=2)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				sourceX = 0;
				sourceY = 0;
				sourceWidth = fullWidth;
				sourceHeight = fullHeight;
				destX = (typeof ($25=args)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](0));
				destY = (typeof ($27=args)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](1));
				destWidth = fullWidth;
				destHeight = fullHeight;
			}
			vmlStr = $p['list']([]);
			vmlStr['append']('<v:group style="position:absolute;width:10;height:10;');
			dX = self['getCoordX'](self['matrix'], destX, destY);
			dY = self['getCoordY'](self['matrix'], destX, destY);
			if ((($bool6=((($bool5=$or1=!(($eq7=(typeof ($29=self['context']['matrix'])['__array'] != 'undefined'?
				((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](0)))===($eq8=1)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:!(($eq9=(typeof ($31=self['context']['matrix'])['__array'] != 'undefined'?
				((typeof $31['__array'][$32=1]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](1)))===($eq10=0)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10))))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6['__nonzero__']=='function'?
							$bool6['__nonzero__']() :
							(typeof $bool6['__len__']=='function'?
								($bool6['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				vmlStr['append']('padding-right:');
				vmlStr['append'](($p['str'](self['parentWidth']))+('px;'));
				vmlStr['append']('padding-bottom:');
				vmlStr['append'](($p['str'](self['parentHeight']))+('px;'));
				vmlStr['append']("filter:progid:DXImageTransform.Microsoft.Matrix(M11='");
				vmlStr['append'](('')+($p['str']((typeof ($33=self['matrix'])['__array'] != 'undefined'?
					((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](0)))));
				vmlStr['append']("',");
				vmlStr['append']("M12='");
				vmlStr['append'](('')+($p['str']((typeof ($35=self['matrix'])['__array'] != 'undefined'?
					((typeof $35['__array'][$36=1]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](1)))));
				vmlStr['append']("',");
				vmlStr['append']("M21='");
				vmlStr['append']($p['str']((typeof ($37=self['matrix'])['__array'] != 'undefined'?
					((typeof $37['__array'][$38=3]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](3))));
				vmlStr['append']("',");
				vmlStr['append']("M22='");
				vmlStr['append']($p['str']((typeof ($39=self['matrix'])['__array'] != 'undefined'?
					((typeof $39['__array'][$40=4]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__'](4))));
				vmlStr['append']("',");
				vmlStr['append']("Dx='");
				vmlStr['append']($p['str']($m['math']['floor']((dX)/(10))));
				vmlStr['append']("',");
				vmlStr['append']("Dy='");
				vmlStr['append']($p['str']($m['math']['floor']((dY)/(10))));
				vmlStr['append']("', SizingMethod='clip');");
			}
			else {
				vmlStr['append']('left:');
				vmlStr['append']($p['sprintf']('%dpx;', $p['float_int']((dX)/(10))));
				vmlStr['append']('top:');
				vmlStr['append']($p['sprintf']('%dpx', $p['float_int']((dY)/(10))));
			}
			vmlStr['append']('" coordsize="100,100" coordorigin="0,0"><v:image src="');
			vmlStr['append']($m['DOM']['getAttribute'](img, 'src'));
			vmlStr['append']('" style="');
			vmlStr['append']('width:');
			vmlStr['append']($p['str']($p['float_int']((destWidth)*(10))));
			vmlStr['append'](';height:');
			vmlStr['append']($p['str']($p['float_int']((destHeight)*(10))));
			vmlStr['append'](';" cropleft="');
			vmlStr['append']($p['str']((sourceX)/(fullWidth)));
			vmlStr['append']('" croptop="');
			vmlStr['append']($p['str']((sourceY)/(fullHeight)));
			vmlStr['append']('" cropright="');
			vmlStr['append']($p['str']((((fullWidth)-(sourceX))-(sourceWidth))/(fullWidth)));
			vmlStr['append']('" cropbottom="');
			vmlStr['append']($p['str']((((fullHeight)-(sourceY))-(sourceHeight))/(fullHeight)));
			vmlStr['append']('"/></v:group>');
			self['insert']('BeforeEnd', ''['join'](vmlStr));
			return null;
		}
	, 1, ['args',null,['self'],['img']]);
		$cls_definition['drawImage'] = $method;
		$method = $pyjs__bind_method2('appendGradient', function(style, shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
				shapeStr = arguments[2];
			}
			var maxX,maxY,dx,dy,$iter1_iter,$attr46,cs,colors,$attr45,$attr42,$attr43,$attr40,$attr41,$eq11,$eq12,$attr48,$attr49,$len6,colorStops,$len4,minX,minY,$48,$iter1_array,$43,$42,$41,$47,$46,$45,$44,$iter1_nextval,focusX,focusY,$attr33,$iter2_idx,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,$iter2_nextval,stopPosn,$iter1_type,$attr47,i,fillLength,$attr52,$attr44,$iter2_iter,$iter2_type,$attr51,length,$len5,$iter1_idx,$attr50,$iter2_array,$bool7;
			colorStops = style['gradient']['colorStops'];
			length = (($len4=colorStops) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4)))));
			shapeStr['append']('" color="');
			shapeStr['append']($p['str']((typeof ($41=colorStops)['__array'] != 'undefined'?
				((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__'](0))['color']));
			shapeStr['append']('" color2="');
			shapeStr['append']($p['str']((typeof ($43=colorStops)['__array'] != 'undefined'?
				((typeof $43['__array'][$44=(length)-(1)]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__']((length)-(1)))['color']));
			shapeStr['append']('" type="');
			shapeStr['append'](style['gradient']['type']);
			if ((($bool7=(($eq11=style['gradient']['type'])===($eq12='gradient')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				colors = '';
				$iter1_iter = $p['range'](1, (($len5=colorStops) === null?0:
					(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'?$len5['length']:
								$p['len']($len5))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					cs = (typeof ($45=colorStops)['__array'] != 'undefined'?
						((typeof $45['__array'][$46=i]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__'](i));
					stopPosn = cs['offset'];
					colors += $p['sprintf']('%d%%', $p['float_int']((stopPosn)*(100)));
					colors += ($p['str'](cs['color']))+(',');
				}
				shapeStr['append']('" colors="');
				shapeStr['append'](colors);
			}
			else {
				minX = self['pathStr']['getMinCoordX']();
				maxX = self['pathStr']['getMaxCoordX']();
				minY = self['pathStr']['getMinCoordY']();
				maxY = self['pathStr']['getMaxCoordY']();
				dx = (maxX)-(minX);
				dy = (maxY)-(minY);
				fillLength = $m['math']['sqrt'](((dx)*(dx))+((dy)*(dy)));
				focusX = 50;
				focusY = 50;
				colors = '';
				$iter2_iter = $p['range'](1, (($len6=colorStops) === null?0:
					(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'?$len6['length']:
								$p['len']($len6))))));
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					cs = (typeof ($47=colorStops)['__array'] != 'undefined'?
						((typeof $47['__array'][$48=i]) != 'undefined'?$47['__array'][$48]:
							$47['__getitem__']($48)):
							$47['__getitem__'](i));
					stopPosn = cs['offset'];
					colors += $p['sprintf']('%d%%', $p['float_int']((stopPosn)*(100)));
					colors += ($p['str'](cs['color']))+(',');
				}
				shapeStr['append']('" colors="');
				shapeStr['append'](colors);
				shapeStr['append']('" focusposition="');
				shapeStr['append']($p['str'](focusX));
				shapeStr['append']('%,');
				shapeStr['append']($p['str'](focusY));
				shapeStr['append']('%,');
			}
			shapeStr['append']('" angle="');
			shapeStr['append']($p['str'](style['gradient']['angle']));
			return null;
		}
	, 1, [null,null,['self'],['style'],['shapeStr']]);
		$cls_definition['appendGradient'] = $method;
		$method = $pyjs__bind_method2('appendStroke', function(shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				shapeStr = arguments[1];
			}
			var $eq13,$eq14,$attr68,$attr69,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$attr70,$bool8,$bool9,$attr59,$attr58,$cmp1,$cmp2,$attr53,$attr55,$attr54,$attr57,$attr56,$len7,$attr66;
			shapeStr['append']('<v:stroke opacity="');
			shapeStr['append']($p['str']((self['context']['globalAlpha'])*(self['context']['strokeStyle']['alpha'])));
			shapeStr['append']('"');
			if ((($bool8=(($eq13=self['context']['strokeStyle']['type'])===($eq14='Gradient')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=((($cmp1=(($len7=self['context']['strokeStyle']['gradient']['colorStops']) === null?0:
					(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'?$len7['length']:
								$p['len']($len7))))))===($cmp2=0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['appendGradient'](self['context']['strokeStyle'], shapeStr);
				}
			}
			else {
				shapeStr['append'](' color="');
				shapeStr['append']($p['str'](self['context']['strokeStyle']['color']));
			}
			shapeStr['append']('" miterlimit="');
			shapeStr['append']($p['str'](self['context']['miterLimit']));
			shapeStr['append']('" joinstyle="');
			shapeStr['append'](self['context']['lineJoin']);
			shapeStr['append']('" endcap="');
			shapeStr['append'](self['context']['lineCap']);
			shapeStr['append']('"></v:stroke>');
			return null;
		}
	, 1, [null,null,['self'],['shapeStr']]);
		$cls_definition['appendStroke'] = $method;
		$method = $pyjs__bind_method2('appendFill', function(shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				shapeStr = arguments[1];
			}
			var $attr82,$cmp4,$attr80,$attr81,$attr79,$cmp3,$attr78,$bool10,$attr76,$attr74,$attr73,$attr72,$attr71,$eq15,$attr77,$len8,$bool11,$attr75,$eq16;
			shapeStr['append']('<v:fill opacity="');
			shapeStr['append']($p['str']((self['context']['globalAlpha'])*(self['context']['fillStyle']['alpha'])));
			shapeStr['append']('"');
			if ((($bool10=(($eq15=self['context']['fillStyle']['type'])===($eq16='Gradient')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				if ((($bool11=((($cmp3=(($len8=self['context']['fillStyle']['gradient']['colorStops']) === null?0:
					(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'?$len8['length']:
								$p['len']($len8))))))===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['appendGradient'](self['context']['fillStyle'], shapeStr);
				}
			}
			else {
				shapeStr['append'](' color="');
				shapeStr['append']($p['str'](self['context']['fillStyle']['color']));
			}
			shapeStr['append']('"></v:fill>');
			return null;
		}
	, 1, [null,null,['self'],['shapeStr']]);
		$cls_definition['appendFill'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr83,$attr86,$attr84,$attr85,daStr,$eq18,shapeStr,$len9,$bool12,$eq17;
			if ((($bool12=(($eq17=(($len9=self['pathStr']) === null?0:
				(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
					(typeof $len9['__len__'] == 'function'?$len9['__len__']():
						(typeof $len9['length'] != 'undefined'?$len9['length']:
							$p['len']($len9))))))===($eq18=0)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12['__nonzero__']=='function'?
							$bool12['__nonzero__']() :
							(typeof $bool12['__len__']=='function'?
								($bool12['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			shapeStr = $p['list']([]);
			shapeStr['append']('<v:shape style="position:absolute;width:10;height:10;" coordsize="100,100');
			shapeStr['append']('" stroked="f" path="');
			shapeStr['append'](self['pathStr']['join']());
			shapeStr['append'](' e">');
			self['appendFill'](shapeStr);
			shapeStr['append']('</v:shape>');
			daStr = ''['join'](shapeStr);
			self['insert'](self['context']['globalCompositeOperation'], daStr);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('stroke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len10,$attr89,$attr91,$attr87,$eq20,$bool13,daStr,$eq19,shapeStr,$attr92,$attr88,$attr90;
			if ((($bool13=(($eq19=(($len10=self['pathStr']) === null?0:
				(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
					(typeof $len10['__len__'] == 'function'?$len10['__len__']():
						(typeof $len10['length'] != 'undefined'?$len10['length']:
							$p['len']($len10))))))===($eq20=0)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				return null;
			}
			shapeStr = $p['list']([]);
			shapeStr['append']('<v:shape style="position:absolute;');
			shapeStr['append']('width:10; height:10;');
			shapeStr['append']('" coordsize="100,100');
			shapeStr['append']('" filled="f');
			shapeStr['append']('" stroked="t');
			shapeStr['append']('" strokeweight="');
			shapeStr['append']($p['str'](self['context']['lineWidth']));
			shapeStr['append']('px" path="');
			shapeStr['append'](self['pathStr']['join']());
			shapeStr['append'](' e">');
			self['appendStroke'](shapeStr);
			shapeStr['append']('<v:shape>');
			daStr = ''['join'](shapeStr);
			self['insert'](self['context']['globalCompositeOperation'], daStr);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stroke'] = $method;
		$method = $pyjs__bind_method2('fillRect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}

			w += x;
			h += y;
			self['beginPath']();
			self['moveTo'](x, y);
			self['lineTo'](x, h);
			self['lineTo'](w, h);
			self['lineTo'](w, y);
			self['closePath']();
			self['fill']();
			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['fillRect'] = $method;
		$method = $pyjs__bind_method2('getContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr94,$attr93;
			return self['context'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContext'] = $method;
		$method = $pyjs__bind_method2('getCoordX', function(matrix, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $50,$49,$51,$52,$53,$54,coordX;
			coordX = $p['float_int']($m['math']['floor']($m['math']['floor'](((10)*(((((typeof ($49=matrix)['__array'] != 'undefined'?
				((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](0)))*(x))+(((typeof ($51=matrix)['__array'] != 'undefined'?
				((typeof $51['__array'][$52=1]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](1)))*(y)))+((typeof ($53=matrix)['__array'] != 'undefined'?
				((typeof $53['__array'][$54=2]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__'](2)))))-(4.5))));
			self['pathStr']['logCoordX']((coordX)/(10));
			return coordX;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
		$cls_definition['getCoordX'] = $method;
		$method = $pyjs__bind_method2('getCoordY', function(matrix, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $60,$58,$59,coordY,$55,$56,$57;
			coordY = $p['float_int']($m['math']['floor']($m['math']['floor'](((10)*(((((typeof ($55=matrix)['__array'] != 'undefined'?
				((typeof $55['__array'][$56=3]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](3)))*(x))+(((typeof ($57=matrix)['__array'] != 'undefined'?
				((typeof $57['__array'][$58=4]) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__'](4)))*(y)))+((typeof ($59=matrix)['__array'] != 'undefined'?
				((typeof $59['__array'][$60=5]) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__'](5)))))-(4.5))));
			self['pathStr']['logCoordY']((coordY)/(10));
			return coordY;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
		$cls_definition['getCoordY'] = $method;
		$method = $pyjs__bind_method2('getFillStyle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr95,$attr96;
			return self['context']['fillStyle'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFillStyle'] = $method;
		$method = $pyjs__bind_method2('getGlobalAlpha', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr97,$attr98;
			return self['context']['globalAlpha'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr99,$bool14,$eq21,$attr104,$eq22,$attr102,$attr103,$attr100,$attr101;
			if ((($bool14=(($eq21=self['context']['globalCompositeOperation'])===($eq22=$m['DESTINATION_OVER'])&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['GWTCanvasConsts']['DESTINATION_OVER'];
			}
			else {
				return $m['GWTCanvasConsts']['SOURCE_OVER'];
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('getLineCap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr110,$bool15,$attr106,$attr107,$eq23,$attr105,$eq24,$attr108,$attr109;
			if ((($bool15=(($eq23=self['context']['lineCap'])===($eq24=$m['BUTT'])&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				return $m['GWTCanvasConsts']['BUTT'];
			}
			return self['context']['lineCap'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineCap'] = $method;
		$method = $pyjs__bind_method2('getLineJoin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr111,$attr112;
			return self['context']['lineJoin'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineJoin'] = $method;
		$method = $pyjs__bind_method2('getLineWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr113,$attr114;
			return self['context']['lineWidth'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineWidth'] = $method;
		$method = $pyjs__bind_method2('getMiterLimit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr115,$attr116;
			return self['context']['miterLimit'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMiterLimit'] = $method;
		$method = $pyjs__bind_method2('getStrokeStyle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr118,$attr117;
			return self['context']['strokeStyle'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('lineTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['pathStr']['append']($m['PathElement']['lineTo'](x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['lineTo'] = $method;
		$method = $pyjs__bind_method2('moveTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['moveTo'] = $method;
		$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cpx = arguments[1];
				cpy = arguments[2];
				x = arguments[3];
				y = arguments[4];
			}
			var $attr119,$attr120,$attr128,cp2y,$attr129,$attr121,cp2x,cp1x,cp1y,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr130;
			cp1x = (self['currentX'])+(((2.0)/(3.0))*((cpx)-(self['currentX'])));
			cp1y = (self['currentY'])+(((2.0)/(3.0))*((cpy)-(self['currentY'])));
			cp2x = (cp1x)+(((x)-(self['currentX']))/(3.0));
			cp2y = (cp1y)+(((y)-(self['currentY']))/(3.0));
			self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
		$cls_definition['quadraticCurveTo'] = $method;
		$method = $pyjs__bind_method2('rect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}

			self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
			self['pathStr']['append']($m['PathElement']['lineTo']((x)+(w), y, self));
			self['pathStr']['append']($m['PathElement']['lineTo']((x)+(w), (y)+(h), self));
			self['pathStr']['append']($m['PathElement']['lineTo'](x, (y)+(h), self));
			self['pathStr']['append']($m['PathElement']['closePath']());
			self['currentX'] = x;
			self['currentY'] = (y)+(h);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('restoreContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$len11,$cmp6,$bool16,$attr133,$attr132,$attr131,$attr134;
			if ((($bool16=((($cmp5=(($len11=self['contextStack']) === null?0:
				(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
					(typeof $len11['__len__'] == 'function'?$len11['__len__']():
						(typeof $len11['length'] != 'undefined'?$len11['length']:
							$p['len']($len11))))))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['context'] = self['contextStack']['pop']();
				self['matrix'] = self['context']['matrix'];
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['restoreContext'] = $method;
		$method = $pyjs__bind_method2('rotate', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var $attr142,$attr143,$attr140,$attr141,$attr147,$attr144,$attr145,$attr149,m1,$68,m2,$65,$64,$67,$66,$61,$63,$62,$attr146,a,c,b,$attr150,s,$attr137,$attr136,$attr135,$attr139,$attr138,$attr148;
			s = $m['math']['sin'](-(angle));
			c = $m['math']['cos'](-(angle));
			a = (typeof ($61=self['matrix'])['__array'] != 'undefined'?
				((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
					$61['__getitem__']($62)):
					$61['__getitem__'](0));
			b = (typeof ($63=self['matrix'])['__array'] != 'undefined'?
				((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
					$63['__getitem__']($64)):
					$63['__getitem__'](1));
			m1 = (a)*(c);
			m2 = (b)*(s);
			self['matrix']['__setitem__'](0, (m1)-(m2));
			m1 = (a)*(s);
			m2 = (b)*(c);
			self['matrix']['__setitem__'](1, (m1)+(m2));
			a = (typeof ($65=self['matrix'])['__array'] != 'undefined'?
				((typeof $65['__array'][$66=3]) != 'undefined'?$65['__array'][$66]:
					$65['__getitem__']($66)):
					$65['__getitem__'](3));
			b = (typeof ($67=self['matrix'])['__array'] != 'undefined'?
				((typeof $67['__array'][$68=4]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__'](4));
			m1 = (a)*(c);
			m2 = (b)*(s);
			self['matrix']['__setitem__'](3, (m1)-(m2));
			m1 = (a)*(s);
			m2 = (b)*(c);
			self['matrix']['__setitem__'](4, (m1)+(m2));
			return null;
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('saveContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr155,$attr154,$attr156,$attr151,$attr153,$attr152;
			self['contextStack']['append'](self['context']);
			self['context'] = $m['VMLContext'](self['context']);
			self['matrix'] = self['context']['matrix'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['saveContext'] = $method;
		$method = $pyjs__bind_method2('scale', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $attr164,$attr160,$attr161,$attr162,$attr163,$69,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$70,$augsub1,$augsub2,$72,$73,$attr157,$71,$76,$74,$75,$attr159,$attr158;
			self['context']['arcScaleX'] *= x;
			self['context']['arcScaleY'] *= y;
			var $augsub1 = 0;
			var $augexpr1 = self['matrix'];
			$augexpr1['__setitem__']($augsub1, ((typeof ($69=$augexpr1)['__array'] != 'undefined'?
				((typeof $69['__array'][$70=$augsub1]) != 'undefined'?$69['__array'][$70]:
					$69['__getitem__']($70)):
					$69['__getitem__']($augsub1)))*(x));
			var $augsub2 = 1;
			var $augexpr2 = self['matrix'];
			$augexpr2['__setitem__']($augsub2, ((typeof ($71=$augexpr2)['__array'] != 'undefined'?
				((typeof $71['__array'][$72=$augsub2]) != 'undefined'?$71['__array'][$72]:
					$71['__getitem__']($72)):
					$71['__getitem__']($augsub2)))*(y));
			var $augsub3 = 3;
			var $augexpr3 = self['matrix'];
			$augexpr3['__setitem__']($augsub3, ((typeof ($73=$augexpr3)['__array'] != 'undefined'?
				((typeof $73['__array'][$74=$augsub3]) != 'undefined'?$73['__array'][$74]:
					$73['__getitem__']($74)):
					$73['__getitem__']($augsub3)))*(x));
			var $augsub4 = 4;
			var $augexpr4 = self['matrix'];
			$augexpr4['__setitem__']($augsub4, ((typeof ($75=$augexpr4)['__array'] != 'undefined'?
				((typeof $75['__array'][$76=$augsub4]) != 'undefined'?$75['__array'][$76]:
					$75['__getitem__']($76)):
					$75['__getitem__']($augsub4)))*(y));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				color = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
			return null;
		}
	, 1, [null,null,['self'],['element'],['color']]);
		$cls_definition['setBackgroundColor'] = $method;
		$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'width', $p['float_int'](height));
			self['clear'](0, 0);
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setCoordHeight'] = $method;
		$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'width', $p['float_int'](width));
			self['clear'](0, 0);
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setCoordWidth'] = $method;
		$method = $pyjs__bind_method2('setCurrentX', function(currentX) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				currentX = arguments[1];
			}

			self['currentX'] = currentX;
			return null;
		}
	, 1, [null,null,['self'],['currentX']]);
		$cls_definition['setCurrentX'] = $method;
		$method = $pyjs__bind_method2('setCurrentY', function(currentY) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				currentY = arguments[1];
			}

			self['currentY'] = currentY;
			return null;
		}
	, 1, [null,null,['self'],['currentY']]);
		$cls_definition['setCurrentY'] = $method;
		$method = $pyjs__bind_method2('setFillStyle', function(fillStyle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fillStyle = arguments[1];
			}
			var $bool18,$bool19,$cmp7,$79,end,$77,$84,guts,$83,$cmp8,$81,$bool17,$eq25,$bool20,$eq26,$len12,$78,$80,$82;
			self['context']['fillStyle'] = $m['VMLStyle']();
			if ((($bool17=$p['isinstance'](fillStyle, $m['CanvasGradientImplIE6'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['context']['fillStyle']['type'] = 'Gradient';
				self['context']['fillStyle']['gradient'] = fillStyle;
			}
			else {
				fillStyle = $p['str'](fillStyle)['strip']();
				if ((($bool18=fillStyle['startswith']('rgba(')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18['__nonzero__']=='function'?
								$bool18['__nonzero__']() :
								(typeof $bool18['__len__']=='function'?
									($bool18['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					end = fillStyle['find'](')', 12);
					if ((($bool19=((($cmp7=end)===($cmp8=-(1))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						guts = $p['__getslice'](fillStyle, 5, end)['$$split'](',');
						if ((($bool20=(($eq25=(($len12=guts) === null?0:
							(typeof $len12['__array'] != 'undefined' ? $len12['__array']['length']:
								(typeof $len12['__len__'] == 'function'?$len12['__len__']():
									(typeof $len12['length'] != 'undefined'?$len12['length']:
										$p['len']($len12))))))===($eq26=4)&&$eq25===null?true:
							($eq25===null?false:($eq26===null?false:
								((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
									((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
										$eq25==$eq26)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
							self['context']['fillStyle']['alpha'] = $p['float']((typeof ($77=guts)['__array'] != 'undefined'?
								((typeof $77['__array'][$78=3]) != 'undefined'?$77['__array'][$78]:
									$77['__getitem__']($78)):
									$77['__getitem__'](3)));
							self['context']['fillStyle']['color'] = (((((('rgb(')+((typeof ($79=guts)['__array'] != 'undefined'?
								((typeof $79['__array'][$80=0]) != 'undefined'?$79['__array'][$80]:
									$79['__getitem__']($80)):
									$79['__getitem__'](0))))+(','))+((typeof ($81=guts)['__array'] != 'undefined'?
								((typeof $81['__array'][$82=1]) != 'undefined'?$81['__array'][$82]:
									$81['__getitem__']($82)):
									$81['__getitem__'](1))))+(','))+((typeof ($83=guts)['__array'] != 'undefined'?
								((typeof $83['__array'][$84=2]) != 'undefined'?$83['__array'][$84]:
									$83['__getitem__']($84)):
									$83['__getitem__'](2))))+(')');
						}
					}
				}
				else {
					self['context']['fillStyle']['color'] = fillStyle;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['fillStyle']]);
		$cls_definition['setFillStyle'] = $method;
		$method = $pyjs__bind_method2('setStrokeStyle', function(strokeStyle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				strokeStyle = arguments[1];
			}
			var $len13,end,$eq27,$89,$88,$87,$86,guts,$cmp9,$90,$92,$91,$bool24,$bool21,$cmp10,$bool23,$bool22,$eq28,$85;
			self['context']['strokeStyle'] = $m['VMLStyle']();
			if ((($bool21=$p['isinstance'](strokeStyle, $m['CanvasGradientImplIE6'])) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21['__nonzero__']=='function'?
							$bool21['__nonzero__']() :
							(typeof $bool21['__len__']=='function'?
								($bool21['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['context']['strokeStyle']['type'] = 'Gradient';
				self['context']['strokeStyle']['gradient'] = strokeStyle;
			}
			else {
				strokeStyle = $p['str'](strokeStyle)['strip']();
				if ((($bool22=strokeStyle['startswith']('rgba(')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					end = strokeStyle['find'](')', 12);
					if ((($bool23=((($cmp9=end)===($cmp10=-(1))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23['__nonzero__']=='function'?
									$bool23['__nonzero__']() :
									(typeof $bool23['__len__']=='function'?
										($bool23['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						guts = $p['__getslice'](strokeStyle, 5, end)['$$split'](',');
						if ((($bool24=(($eq27=(($len13=guts) === null?0:
							(typeof $len13['__array'] != 'undefined' ? $len13['__array']['length']:
								(typeof $len13['__len__'] == 'function'?$len13['__len__']():
									(typeof $len13['length'] != 'undefined'?$len13['length']:
										$p['len']($len13))))))===($eq28=4)&&$eq27===null?true:
							($eq27===null?false:($eq28===null?false:
								((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
									((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
										$eq27==$eq28)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
								false :
								(typeof $bool24=='object'?
									(typeof $bool24['__nonzero__']=='function'?
										$bool24['__nonzero__']() :
										(typeof $bool24['__len__']=='function'?
											($bool24['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['context']['stokeStyle']['alpha'] = $p['float']((typeof ($85=guts)['__array'] != 'undefined'?
								((typeof $85['__array'][$86=3]) != 'undefined'?$85['__array'][$86]:
									$85['__getitem__']($86)):
									$85['__getitem__'](3)));
							self['context']['strokeStyle']['color'] = (((((('rgb(')+((typeof ($87=guts)['__array'] != 'undefined'?
								((typeof $87['__array'][$88=0]) != 'undefined'?$87['__array'][$88]:
									$87['__getitem__']($88)):
									$87['__getitem__'](0))))+(','))+((typeof ($89=guts)['__array'] != 'undefined'?
								((typeof $89['__array'][$90=1]) != 'undefined'?$89['__array'][$90]:
									$89['__getitem__']($90)):
									$89['__getitem__'](1))))+(','))+((typeof ($91=guts)['__array'] != 'undefined'?
								((typeof $91['__array'][$92=2]) != 'undefined'?$91['__array'][$92]:
									$91['__getitem__']($92)):
									$91['__getitem__'](2))))+(')');
						}
					}
				}
				else {
					self['context']['strokeStyle']['color'] = strokeStyle;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['strokeStyle']]);
		$cls_definition['setStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('setGlobalAlpha', function(globalAlpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				globalAlpha = arguments[1];
			}

			self['context']['globalAlpha'] = globalAlpha;
			return null;
		}
	, 1, [null,null,['self'],['globalAlpha']]);
		$cls_definition['setGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(gco) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gco = arguments[1];
			}
			var $bool26,$eq32,$attr168,$attr169,$attr165,$attr167,$attr172,$attr170,$bool25,$eq30,$eq31,$attr171,$eq29,$attr166;
			gco = gco['strip']();
			if ((($bool25=(($eq29=gco['lower'])===($eq30=$m['GWTCanvasConsts']['SOURCE_OVER'])&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['context']['globalCompositeOperation'] = $m['SOURCE_OVER'];
			}
			else if ((($bool26=(($eq31=gco['lower'])===($eq32=$m['GWTCanvasConsts']['DESTINATION_OVER'])&&$eq31===null?true:
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
						 true ) )) {
				self['context']['globalCompositeOperation'] = $m['DESTINATION_OVER'];
			}
			return null;
		}
	, 1, [null,null,['self'],['gco']]);
		$cls_definition['setGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineCap = arguments[1];
			}
			var $attr174,$attr173,$eq33,$bool27,$eq34,$attr176,$attr175;
			if ((($bool27=(($eq33=lineCap['strip']()['lower'])===($eq34=$m['GWTCanvasConsts']['BUTT'])&&$eq33===null?true:
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
						 true ) )) {
				self['context']['lineCap'] = $m['BUTT'];
			}
			else {
				self['context']['lineCap'] = lineCap;
			}
			return null;
		}
	, 1, [null,null,['self'],['lineCap']]);
		$cls_definition['setLineCap'] = $method;
		$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineJoin = arguments[1];
			}

			self['context']['lineJoin'] = lineJoin;
			return null;
		}
	, 1, [null,null,['self'],['lineJoin']]);
		$cls_definition['setLineJoin'] = $method;
		$method = $pyjs__bind_method2('setLineWidth', function(lineWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineWidth = arguments[1];
			}

			self['context']['lineWidth'] = lineWidth;
			return null;
		}
	, 1, [null,null,['self'],['lineWidth']]);
		$cls_definition['setLineWidth'] = $method;
		$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				miterLimit = arguments[1];
			}

			self['context']['miterLimit'] = miterLimit;
			return null;
		}
	, 1, [null,null,['self'],['miterLimit']]);
		$cls_definition['setMiterLimit'] = $method;
		$method = $pyjs__bind_method2('setParentElement', function(g) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				g = arguments[1];
			}

			self['parentElement'] = g;
			return null;
		}
	, 1, [null,null,['self'],['g']]);
		$cls_definition['setParentElement'] = $method;
		$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](elem, 'height', ($p['str'](height))+('px'));
			self['parentHeight'] = height;
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setPixelHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](elem, 'width', ($p['str'](width))+('px'));
			self['parentWidth'] = width;
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setPixelWidth'] = $method;
		$method = $pyjs__bind_method2('strokeRect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}

			w += x;
			h += y;
			self['beginPath']();
			self['moveTo'](x, y);
			self['lineTo'](x, h);
			self['lineTo'](w, h);
			self['lineTo'](w, y);
			self['closePath']();
			self['stroke']();
			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['strokeRect'] = $method;
		$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				m11 = arguments[1];
				m12 = arguments[2];
				m21 = arguments[3];
				m22 = arguments[4];
				dx = arguments[5];
				dy = arguments[6];
			}
			var $attr191,$attr190,$attr193,$attr192,$98,$99,$attr196,$94,$95,$96,$97,$93,$attr195,$attr194,$augexpr6,$augsub6,$augsub5,$101,$100,$103,$102,$augexpr5,$104,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,a,b,$attr179,$attr178,$attr177;
			a = (typeof ($93=self['matrix'])['__array'] != 'undefined'?
				((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
					$93['__getitem__']($94)):
					$93['__getitem__'](0));
			b = (typeof ($95=self['matrix'])['__array'] != 'undefined'?
				((typeof $95['__array'][$96=1]) != 'undefined'?$95['__array'][$96]:
					$95['__getitem__']($96)):
					$95['__getitem__'](1));
			self['matrix']['__setitem__'](0, ((a)*(m11))+((b)*(m12)));
			self['matrix']['__setitem__'](1, ((a)*(m21))+((b)*(m22)));
			var $augsub5 = 2;
			var $augexpr5 = self['matrix'];
			$augexpr5['__setitem__']($augsub5, ((typeof ($97=$augexpr5)['__array'] != 'undefined'?
				((typeof $97['__array'][$98=$augsub5]) != 'undefined'?$97['__array'][$98]:
					$97['__getitem__']($98)):
					$97['__getitem__']($augsub5)))+(((a)*(dx))+((b)*(dy))));
			a = (typeof ($99=self['matrix'])['__array'] != 'undefined'?
				((typeof $99['__array'][$100=3]) != 'undefined'?$99['__array'][$100]:
					$99['__getitem__']($100)):
					$99['__getitem__'](3));
			b = (typeof ($101=self['matrix'])['__array'] != 'undefined'?
				((typeof $101['__array'][$102=4]) != 'undefined'?$101['__array'][$102]:
					$101['__getitem__']($102)):
					$101['__getitem__'](4));
			self['matrix']['__setitem__'](3, ((a)*(m11))+((b)*(m12)));
			self['matrix']['__setitem__'](4, ((a)*(m21))+((b)*(m22)));
			var $augsub6 = 5;
			var $augexpr6 = self['matrix'];
			$augexpr6['__setitem__']($augsub6, ((typeof ($103=$augexpr6)['__array'] != 'undefined'?
				((typeof $103['__array'][$104=$augsub6]) != 'undefined'?$103['__array'][$104]:
					$103['__getitem__']($104)):
					$103['__getitem__']($augsub6)))+(((a)*(dx))+((b)*(dy))));
			return null;
		}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
		$cls_definition['transform'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $116,$114,$115,$112,$113,$attr197,$111,$attr199,$attr198,$augexpr7,$augsub8,$109,$attr208,$108,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$105,$107,$106,$augsub7,$augexpr8,$110;
			var $augsub7 = 2;
			var $augexpr7 = self['matrix'];
			$augexpr7['__setitem__']($augsub7, ((typeof ($105=$augexpr7)['__array'] != 'undefined'?
				((typeof $105['__array'][$106=$augsub7]) != 'undefined'?$105['__array'][$106]:
					$105['__getitem__']($106)):
					$105['__getitem__']($augsub7)))+((((typeof ($107=self['matrix'])['__array'] != 'undefined'?
				((typeof $107['__array'][$108=0]) != 'undefined'?$107['__array'][$108]:
					$107['__getitem__']($108)):
					$107['__getitem__'](0)))*(x))+(((typeof ($109=self['matrix'])['__array'] != 'undefined'?
				((typeof $109['__array'][$110=1]) != 'undefined'?$109['__array'][$110]:
					$109['__getitem__']($110)):
					$109['__getitem__'](1)))*(y))));
			var $augsub8 = 5;
			var $augexpr8 = self['matrix'];
			$augexpr8['__setitem__']($augsub8, ((typeof ($111=$augexpr8)['__array'] != 'undefined'?
				((typeof $111['__array'][$112=$augsub8]) != 'undefined'?$111['__array'][$112]:
					$111['__getitem__']($112)):
					$111['__getitem__']($augsub8)))+((((typeof ($113=self['matrix'])['__array'] != 'undefined'?
				((typeof $113['__array'][$114=3]) != 'undefined'?$113['__array'][$114]:
					$113['__getitem__']($114)):
					$113['__getitem__'](3)))*(x))+(((typeof ($115=self['matrix'])['__array'] != 'undefined'?
				((typeof $115['__array'][$116=4]) != 'undefined'?$115['__array'][$116]:
					$115['__getitem__']($116)):
					$115['__getitem__'](4)))*(y))));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('insert', function(gco, html) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gco = arguments[1];
				html = arguments[2];
			}

			self['parentElement']['insertAdjacentHTML'](gco, html);
			return null;
		}
	, 1, [null,null,['self'],['gco'],['html']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('buildStyleString', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $117,$118,$119,$123,$122,$121,$120,$126,$125,$124;
			return (((((((((typeof ($117=style)['__array'] != 'undefined'?
				((typeof $117['__array'][$118='style']) != 'undefined'?$117['__array'][$118]:
					$117['__getitem__']($118)):
					$117['__getitem__']('style')))+(' '))+((typeof ($119=style)['__array'] != 'undefined'?
				((typeof $119['__array'][$120='variant']) != 'undefined'?$119['__array'][$120]:
					$119['__getitem__']($120)):
					$119['__getitem__']('variant'))))+(' '))+((typeof ($121=style)['__array'] != 'undefined'?
				((typeof $121['__array'][$122='weight']) != 'undefined'?$121['__array'][$122]:
					$121['__getitem__']($122)):
					$121['__getitem__']('weight'))))+(' '))+($p['str']((typeof ($123=style)['__array'] != 'undefined'?
				((typeof $123['__array'][$124='size']) != 'undefined'?$123['__array'][$124]:
					$123['__getitem__']($124)):
					$123['__getitem__']('size')))))+('px '))+((typeof ($125=style)['__array'] != 'undefined'?
				((typeof $125['__array'][$126='family']) != 'undefined'?$125['__array'][$126]:
					$125['__getitem__']($126)):
					$125['__getitem__']('family')));
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['buildStyleString'] = $method;
		$method = $pyjs__bind_method2('encodeHtmlAttribute', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}
			var e;
			e = s['$$replace']('&', '&amp;');
			return e['$$replace']('"', '&quot;');
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['encodeHtmlAttribute'] = $method;
		$method = $pyjs__bind_method2('drawText_', function(text, x, y, maxWidth, stroke) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
				stroke = arguments[5];
			}
			var right,daStr,$130,$131,$132,$attr215,$134,$attr222,$133,DEFAULT_STYLE,$attr209,$bool28,skewM,$attr221,$attr220,lineStr,$129,$128,delta,$127,textAlign,skewOffset,$attr213,fontStyleString,offsetX,offsetY,$attr218,$attr219,dX,dY,$attr212,$attr210,$attr211,$attr216,$attr217,$attr214,left;
			delta = 1000;
			left = 0;
			right = delta;
			offsetX = 0;
			offsetY = 0;
			DEFAULT_STYLE = $p['dict']([['style', 'normal'], ['variant', 'normal'], ['weight', 'normal'], ['size', 10], ['family', 'sans-serif']]);
			fontStyleString = self['buildStyleString'](DEFAULT_STYLE);
			textAlign = 'left';
			dX = self['getCoordX'](self['matrix'], (x)+(offsetX), (y)+(offsetY));
			dY = self['getCoordY'](self['matrix'], (x)+(offsetX), (y)+(offsetY));
			lineStr = $p['list']([]);
			lineStr['append']('<v:line from="');
			lineStr['append']($p['str'](-(left)));
			lineStr['append'](' 0" to="');
			lineStr['append']($p['str'](right));
			lineStr['append'](' 0" ');
			lineStr['append'](' coordsize="100 100" coordorigin="0 0"');
			lineStr['append']('" style="position:absolute;width:1px;height:1px"');
			if ((($bool28=stroke) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				lineStr['append'](' filled="f" stroked="t">');
				self['appendStroke'](lineStr);
			}
			else {
				lineStr['append'](' filled="t" stroked="f">');
				self['appendFill'](lineStr);
			}
			skewM = ((((((($p['str']((typeof ($127=self['matrix'])['__array'] != 'undefined'?
				((typeof $127['__array'][$128=0]) != 'undefined'?$127['__array'][$128]:
					$127['__getitem__']($128)):
					$127['__getitem__'](0))))+(','))+($p['str']((typeof ($129=self['matrix'])['__array'] != 'undefined'?
				((typeof $129['__array'][$130=1]) != 'undefined'?$129['__array'][$130]:
					$129['__getitem__']($130)):
					$129['__getitem__'](1)))))+(','))+($p['str']((typeof ($131=self['matrix'])['__array'] != 'undefined'?
				((typeof $131['__array'][$132=3]) != 'undefined'?$131['__array'][$132]:
					$131['__getitem__']($132)):
					$131['__getitem__'](3)))))+(','))+($p['str']((typeof ($133=self['matrix'])['__array'] != 'undefined'?
				((typeof $133['__array'][$134=4]) != 'undefined'?$133['__array'][$134]:
					$133['__getitem__']($134)):
					$133['__getitem__'](4)))))+(',0,0');
			skewOffset = (($p['str']($m['math']['floor']((dX)/(10))))+(','))+($p['str']($m['math']['floor']((dY)/(10))));
			lineStr['append']('<v:skew on="t" matrix="');
			lineStr['append'](skewM);
			lineStr['append']('" ');
			lineStr['append'](' offset="');
			lineStr['append'](skewOffset);
			lineStr['append']('" origin="');
			lineStr['append']($p['str'](left));
			lineStr['append'](' 0" />');
			lineStr['append']('<v:path textpathok="true" />');
			lineStr['append']('<v:textpath on="true" string="');
			lineStr['append'](self['encodeHtmlAttribute'](text));
			lineStr['append']('" style="v-text-align:');
			lineStr['append'](textAlign);
			lineStr['append'](';font:');
			lineStr['append'](self['encodeHtmlAttribute'](fontStyleString));
			lineStr['append']('" /></v:line>');
			daStr = ''['join'](lineStr);
			self['insert'](self['context']['globalCompositeOperation'], daStr);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth'],['stroke']]);
		$cls_definition['drawText_'] = $method;
		$method = $pyjs__bind_method2('fillText', function(text, x, y, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

			self['drawText_'](text, x, y, maxWidth, false);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
		$cls_definition['fillText'] = $method;
		$method = $pyjs__bind_method2('strokeText', function(text, x, y, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

			self['drawText_'](text, x, y, maxWidth, true);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
		$cls_definition['strokeText'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GWTCanvasImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplIE6 */


/* end module: pyjamas.Canvas.GWTCanvasImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas.JSOStack', 'pyjamas.Canvas.PathElement', 'pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas.VMLContext', 'pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/

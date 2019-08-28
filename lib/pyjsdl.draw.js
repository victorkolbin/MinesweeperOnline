/* start module: pyjsdl.draw */
$pyjs['loaded_modules']['pyjsdl.draw'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.draw']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.draw'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.draw'];
	$m['__repr__'] = function() { return '<module: pyjsdl.draw>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.draw';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['draw'] = $pyjs['loaded_modules']['pyjsdl.draw'];


	$m['_pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Draw'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.draw';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rad_deg'] = (180.0)/($m['_pi']);
			self['_return_rect'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rect', function(surface, color, rect, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var $attr20,$attr21,$attr22,$attr23,$attr24,$bool8,$bool9,$attr1,$attr13,$bool7,$attr9,$attr8,$attr2,$eq2,$eq3,$attr3,$eq1,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool1,$bool6,$eq4,$bool4,$bool5,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr12,_rect,$attr19,$attr18;
			if ((($bool1=$p['hasattr'](rect, 'width')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			if ((($bool2=width) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				surface['setLineWidth'](width);
				if ((($bool3=!(($eq1=surface['_stroke_style'])===($eq2=color)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					surface['_stroke_style'] = color;
					if ((($bool4=$p['hasattr'](color, 'a')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
				}
				surface['strokeRect'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			}
			else {
				if ((($bool5=!(($eq3=surface['_fill_style'])===($eq4=color)&&$eq3===null?true:
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
					surface['_fill_style'] = color;
					if ((($bool6=$p['hasattr'](color, 'a')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
				}
				surface['fillRect'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			}
			if ((($bool8=!(($bool7=self['_return_rect']) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return null;
			}
			if ((($bool9=surface['_display']) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', 0]]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('circle', function(surface, color, position, radius, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				position = arguments[3];
				radius = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $bool11,$bool12,$bool13,$bool14,$bool15,$bool17,$attr25,$attr26,$attr27,$attr28,$attr29,$bool10,$eq8,$eq6,$eq7,$eq5,$attr32,$attr31,$attr30,$bool16,$8,$9,$6,$7,$4,$5,$2,$3,$1,$10,$11,$12;
			surface['beginPath']();
			surface['arc']((typeof ($1=position)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)), (typeof ($3=position)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)), radius, 0, (2)*($m['_pi']), false);
			if ((($bool10=width) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				surface['setLineWidth'](width);
				if ((($bool11=!(($eq5=surface['_stroke_style'])===($eq6=color)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					surface['_stroke_style'] = color;
					if ((($bool12=$p['hasattr'](color, 'a')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
				}
				surface['stroke']();
			}
			else {
				if ((($bool13=!(($eq7=surface['_fill_style'])===($eq8=color)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					surface['_fill_style'] = color;
					if ((($bool14=$p['hasattr'](color, 'a')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
				}
				surface['fill']();
			}
			if ((($bool16=!(($bool15=self['_return_rect']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15['__nonzero__']=='function'?
						$bool15['__nonzero__']() :
						(typeof $bool15['__len__']=='function'?
							($bool15['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				return null;
			}
			if ((($bool17=surface['_display']) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return surface['_display']['_surface_rect']['clip']($m['Rect'](((typeof ($5=position)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](0)))-(radius), ((typeof ($7=position)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](1)))-(radius), (2)*(radius), (2)*(radius)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](((typeof ($9=position)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](0)))-(radius), ((typeof ($11=position)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=1]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](1)))-(radius), (2)*(radius), (2)*(radius)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['position'],['radius'],['width', 0]]);
		$cls_definition['circle'] = $method;
		$method = $pyjs__bind_method2('ellipse', function(surface, color, rect, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var $bool18,$bool19,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$eq10,$eq11,$eq12,$attr48,$attr49,$bool24,$attr64,$attr60,$attr61,$attr62,$attr63,$bool25,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$attr59,$eq9,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,_rect,$attr58,$cmp1,$cmp2,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,radius;
			if ((($bool18=$p['hasattr'](rect, 'width')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surface['saveContext']();
			surface['translate']((_rect['x'])+($p['float_int']((_rect['width'])/(2))), (_rect['y'])+($p['float_int']((_rect['height'])/(2))));
			if ((($bool19=((((($cmp1=_rect['width'])===($cmp2=_rect['height'])?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				surface['scale']((_rect['width'])/((_rect['height'])*(1.0)), 1);
				radius = $p['float_int']((_rect['height'])/(2));
			}
			else {
				surface['scale'](1, (_rect['height'])/((_rect['width'])*(1.0)));
				radius = $p['float_int']((_rect['width'])/(2));
			}
			surface['beginPath']();
			surface['arc'](0, 0, radius, 0, (2)*($m['_pi']), false);
			if ((($bool20=width) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				surface['setLineWidth'](width);
				if ((($bool21=!(($eq9=surface['_stroke_style'])===($eq10=color)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					surface['_stroke_style'] = color;
					if ((($bool22=$p['hasattr'](color, 'a')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
				}
				surface['stroke']();
			}
			else {
				if ((($bool23=!(($eq11=surface['_fill_style'])===($eq12=color)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					surface['_fill_style'] = color;
					if ((($bool24=$p['hasattr'](color, 'a')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
				}
				surface['fill']();
			}
			surface['restoreContext']();
			if ((($bool26=!(($bool25=self['_return_rect']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25['__nonzero__']=='function'?
						$bool25['__nonzero__']() :
						(typeof $bool25['__len__']=='function'?
							($bool25['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				return null;
			}
			if ((($bool27=surface['_display']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', 0]]);
		$cls_definition['ellipse'] = $method;
		$method = $pyjs__bind_method2('arc', function(surface, color, rect, start_angle, stop_angle, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				start_angle = arguments[4];
				stop_angle = arguments[5];
				width = arguments[6];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][8][1];
			var $attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$attr108,$attr109,$eq21,$eq20,$eq22,$attr79,$attr78,$attr77,$attr110,$attr75,$attr112,$attr73,$attr114,$attr71,$attr70,$attr111,$attr76,$attr113,$attr74,$attr72,radius,$attr68,$attr69,$attr65,$attr66,$attr67,$bool29,$bool28,$bool43,$bool42,$bool41,$bool40,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$eq18,$eq19,$eq13,$eq14,$eq15,$eq16,$eq17,$attr94,_rect,$attr93,$attr95,$cmp4,$attr97,$attr96,$attr91,$attr90,$cmp3,$attr92,$attr99,$attr98;
			if ((($bool28=$p['hasattr'](rect, 'width')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			if ((($bool29=(($eq13=_rect['width'])===($eq14=_rect['height'])&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29['__nonzero__']=='function'?
							$bool29['__nonzero__']() :
							(typeof $bool29['__len__']=='function'?
								($bool29['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				surface['beginPath']();
				surface['arc']((_rect['x'])+($p['float_int']((_rect['width'])/(2))), (_rect['y'])+($p['float_int']((_rect['height'])/(2))), $p['float_int']((_rect['width'])/(2)), -(start_angle), -(stop_angle), true);
				if ((($bool30=width) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					surface['setLineWidth'](width);
					if ((($bool31=!(($eq15=surface['_stroke_style'])===($eq16=color)&&$eq15===null?true:
						($eq15===null?false:($eq16===null?false:
							((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
								((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
									$eq15==$eq16)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						surface['_stroke_style'] = color;
						if ((($bool32=$p['hasattr'](color, 'a')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
							surface['setStrokeStyle'](color);
						}
						else {
							surface['setStrokeStyle']($m['Color'](color));
						}
					}
					surface['stroke']();
				}
				else {
					surface['closePath']();
					if ((($bool33=!(($eq17=surface['_fill_style'])===($eq18=color)&&$eq17===null?true:
						($eq17===null?false:($eq18===null?false:
							((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
								((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
									$eq17==$eq18)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
							false :
							(typeof $bool33=='object'?
								(typeof $bool33['__nonzero__']=='function'?
									$bool33['__nonzero__']() :
									(typeof $bool33['__len__']=='function'?
										($bool33['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						surface['_fill_style'] = color;
						if ((($bool34=$p['hasattr'](color, 'a')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
							surface['setFillStyle'](color);
						}
						else {
							surface['setFillStyle']($m['Color'](color));
						}
					}
					surface['fill']();
				}
			}
			else {
				surface['saveContext']();
				surface['translate']((_rect['x'])+($p['float_int']((_rect['width'])/(2))), (_rect['y'])+($p['float_int']((_rect['height'])/(2))));
				if ((($bool35=((((($cmp3=_rect['width'])===($cmp4=_rect['height'])?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					surface['scale']((_rect['width'])/((_rect['height'])*(1.0)), 1);
					radius = $p['float_int']((_rect['height'])/(2));
				}
				else {
					surface['scale'](1, (_rect['height'])/((_rect['width'])*(1.0)));
					radius = $p['float_int']((_rect['width'])/(2));
				}
				surface['beginPath']();
				surface['arc'](0, 0, radius, -(start_angle), -(stop_angle), true);
				if ((($bool36=width) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					surface['setLineWidth'](width);
					if ((($bool37=!(($eq19=surface['_stroke_style'])===($eq20=color)&&$eq19===null?true:
						($eq19===null?false:($eq20===null?false:
							((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
								((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
									$eq19==$eq20)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						surface['_stroke_style'] = color;
						if ((($bool38=$p['hasattr'](color, 'a')) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
								false :
								(typeof $bool38=='object'?
									(typeof $bool38['__nonzero__']=='function'?
										$bool38['__nonzero__']() :
										(typeof $bool38['__len__']=='function'?
											($bool38['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							surface['setStrokeStyle'](color);
						}
						else {
							surface['setStrokeStyle']($m['Color'](color));
						}
					}
					surface['stroke']();
				}
				else {
					surface['closePath']();
					if ((($bool39=!(($eq21=surface['_fill_style'])===($eq22=color)&&$eq21===null?true:
						($eq21===null?false:($eq22===null?false:
							((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
								((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
									$eq21==$eq22)))))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
						surface['_fill_style'] = color;
						if ((($bool40=$p['hasattr'](color, 'a')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
								false :
								(typeof $bool40=='object'?
									(typeof $bool40['__nonzero__']=='function'?
										$bool40['__nonzero__']() :
										(typeof $bool40['__len__']=='function'?
											($bool40['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							surface['setFillStyle'](color);
						}
						else {
							surface['setFillStyle']($m['Color'](color));
						}
					}
					surface['fill']();
				}
				surface['restoreContext']();
			}
			if ((($bool42=!(($bool41=self['_return_rect']) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41['__nonzero__']=='function'?
						$bool41['__nonzero__']() :
						(typeof $bool41['__len__']=='function'?
							($bool41['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool43=surface['_display']) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43['__nonzero__']=='function'?
							$bool43['__nonzero__']() :
							(typeof $bool43['__len__']=='function'?
								($bool43['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['start_angle'],['stop_angle'],['width', 1]]);
		$cls_definition['arc'] = $method;
		$method = $pyjs__bind_method2('polygon', function(surface, color, pointlist, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				pointlist = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var $bool50,$bool51,point,$attr119,$iter1_iter,xpts,xmin,ymin,ymax,$attr121,$attr120,$attr122,$iter1_array,$bool47,$bool46,$bool45,$bool44,$iter1_nextval,$bool49,$bool48,$eq23,$eq25,$eq24,$eq26,ypts,$14,$attr118,$iter1_type,$13,$attr115,$attr117,$attr116,$iter1_idx,xmax;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', (typeof ($13=pointlist)['__array'] != 'undefined'?
				((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](0)), null, [{}]);
			$iter1_iter = $p['__getslice'](pointlist, 1, null);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				point = $iter1_nextval;
				$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
			}
			surface['closePath']();
			if ((($bool44=width) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44['__nonzero__']=='function'?
							$bool44['__nonzero__']() :
							(typeof $bool44['__len__']=='function'?
								($bool44['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				surface['setLineWidth'](width);
				if ((($bool45=!(($eq23=surface['_stroke_style'])===($eq24=color)&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					surface['_stroke_style'] = color;
					if ((($bool46=$p['hasattr'](color, 'a')) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
				}
				surface['stroke']();
			}
			else {
				if ((($bool47=!(($eq25=surface['_fill_style'])===($eq26=color)&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					surface['_fill_style'] = color;
					if ((($bool48=$p['hasattr'](color, 'a')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
				}
				surface['fill']();
			}
			if ((($bool50=!(($bool49=self['_return_rect']) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49['__nonzero__']=='function'?
						$bool49['__nonzero__']() :
						(typeof $bool49['__len__']=='function'?
							($bool49['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50['__nonzero__']=='function'?
							$bool50['__nonzero__']() :
							(typeof $bool50['__len__']=='function'?
								($bool50['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			xpts = function(){
				var $15,$16,$iter2_nextval,$iter2_type,pt,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
			$iter2_iter = pointlist;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				pt = $iter2_nextval;
				$collcomp1['append']((typeof ($15=pt)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](0)));
			}

	return $collcomp1;}();
			ypts = function(){
				var $iter3_idx,pt,$iter3_nextval,$iter3_array,$18,$collcomp2,$17,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
			$iter3_iter = pointlist;
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				pt = $iter3_nextval;
				$collcomp2['append']((typeof ($17=pt)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](1)));
			}

	return $collcomp2;}();
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign1[0];
			xmax = $tupleassign1[1];
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign2[0];
			ymax = $tupleassign2[1];
			if ((($bool51=surface['_display']) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51['__nonzero__']=='function'?
							$bool51['__nonzero__']() :
							(typeof $bool51['__len__']=='function'?
								($bool51['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['pointlist'],['width', 0]]);
		$cls_definition['polygon'] = $method;
		$method = $pyjs__bind_method2('line', function(surface, color, point1, point2, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				point1 = arguments[3];
				point2 = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $bool54,$bool55,$bool56,$bool52,$bool53,xmin,ymin,ymax,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,xpts,$eq27,ypts,$eq28,xmax;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', point1, null, [{}]);
			$pyjs_kwargs_call(surface, 'lineTo', point2, null, [{}]);
			surface['setLineWidth'](width);
			if ((($bool52=!(($eq27=surface['_stroke_style'])===($eq28=color)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				surface['_stroke_style'] = color;
				if ((($bool53=$p['hasattr'](color, 'a')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53['__nonzero__']=='function'?
								$bool53['__nonzero__']() :
								(typeof $bool53['__len__']=='function'?
									($bool53['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
			}
			surface['stroke']();
			if ((($bool55=!(($bool54=self['_return_rect']) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54['__nonzero__']=='function'?
						$bool54['__nonzero__']() :
						(typeof $bool54['__len__']=='function'?
							($bool54['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				return null;
			}
			xpts = function(){
				var pt,$iter4_nextval,$collcomp3,$19,$iter4_idx,$iter4_type,$20,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
			$iter4_iter = $p['tuple']([point1, point2]);
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				pt = $iter4_nextval;
				$collcomp3['append']((typeof ($19=pt)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](0)));
			}

	return $collcomp3;}();
			ypts = function(){
				var $iter5_nextval,$22,pt,$21,$iter5_idx,$collcomp4,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp4 = $p['list']();
			$iter5_iter = $p['tuple']([point1, point2]);
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				pt = $iter5_nextval;
				$collcomp4['append']((typeof ($21=pt)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=1]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](1)));
			}

	return $collcomp4;}();
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign3[0];
			xmax = $tupleassign3[1];
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign4[0];
			ymax = $tupleassign4[1];
			if ((($bool56=surface['_display']) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56['__nonzero__']=='function'?
							$bool56['__nonzero__']() :
							(typeof $bool56['__len__']=='function'?
								($bool56['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['width', 1]]);
		$cls_definition['line'] = $method;
		$method = $pyjs__bind_method2('lines', function(surface, color, closed, pointlist, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				closed = arguments[3];
				pointlist = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $bool57,point,$bool58,$bool59,ypts,$eq30,$bool62,xmin,$iter6_iter,ymin,$iter6_nextval,ymax,$24,$iter6_type,$attr129,$bool61,$bool60,xpts,$iter6_idx,$iter6_array,$eq29,$attr133,$attr132,$attr131,$attr130,xmax,$attr134,$23;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', (typeof ($23=pointlist)['__array'] != 'undefined'?
				((typeof $23['__array'][$24=0]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](0)), null, [{}]);
			$iter6_iter = $p['__getslice'](pointlist, 1, null);
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				point = $iter6_nextval;
				$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
			}
			if ((($bool57=closed) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
				surface['closePath']();
			}
			surface['setLineWidth'](width);
			if ((($bool58=!(($eq29=surface['_stroke_style'])===($eq30=color)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
				surface['_stroke_style'] = color;
				if ((($bool59=$p['hasattr'](color, 'a')) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59['__nonzero__']=='function'?
								$bool59['__nonzero__']() :
								(typeof $bool59['__len__']=='function'?
									($bool59['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
			}
			surface['stroke']();
			if ((($bool61=!(($bool60=self['_return_rect']) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60['__nonzero__']=='function'?
						$bool60['__nonzero__']() :
						(typeof $bool60['__len__']=='function'?
							($bool60['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
				return null;
			}
			xpts = function(){
				var pt,$iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$25,$26,$iter7_idx,$iter7_type;
	$collcomp5 = $p['list']();
			$iter7_iter = pointlist;
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				pt = $iter7_nextval;
				$collcomp5['append']((typeof ($25=pt)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](0)));
			}

	return $collcomp5;}();
			ypts = function(){
				var $28,$iter8_idx,pt,$collcomp6,$iter8_type,$iter8_array,$27,$iter8_iter,$iter8_nextval;
	$collcomp6 = $p['list']();
			$iter8_iter = pointlist;
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				pt = $iter8_nextval;
				$collcomp6['append']((typeof ($27=pt)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](1)));
			}

	return $collcomp6;}();
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign5[0];
			xmax = $tupleassign5[1];
			var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign6[0];
			ymax = $tupleassign6[1];
			if ((($bool62=surface['_display']) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, ((xmax)-(xmin))+(1), ((ymax)-(ymin))+(1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['width', 1]]);
		$cls_definition['lines'] = $method;
		$method = $pyjs__bind_method2('aaline', function(surface, color, point1, point2, blend) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				point1 = arguments[3];
				point2 = arguments[4];
				blend = arguments[5];
			}
			if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
			var rect;
			rect = self['line'](surface, color, point1, point2, blend);
			return rect;
		}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['blend', 1]]);
		$cls_definition['aaline'] = $method;
		$method = $pyjs__bind_method2('aalines', function(surface, color, closed, pointlist, blend) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				closed = arguments[3];
				pointlist = arguments[4];
				blend = arguments[5];
			}
			if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
			var rect;
			rect = self['lines'](surface, color, closed, pointlist, blend);
			return rect;
		}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['blend', 1]]);
		$cls_definition['aalines'] = $method;
		$method = $pyjs__bind_method2('set_return', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}

			self['_return_rect'] = setting;
			return null;
		}
	, 1, [null,null,['self'],['setting']]);
		$cls_definition['set_return'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Draw', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.draw */


/* end module: pyjsdl.draw */


/*
PYJS_DEPS: ['math.pi', 'math', 'pyjsdl.rect.Rect', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.surface.Surface', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color']
*/

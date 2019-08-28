/* start module: pyjsdl.surface */
$pyjs['loaded_modules']['pyjsdl.surface'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surface']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surface'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surface'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surface>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surface';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['surface'] = $pyjs['loaded_modules']['pyjsdl.surface'];


	$m['HTML5Canvas'] = $p['___import___']('pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Surface'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				size = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $attr8,$attr2,$attr1,$attr5,$attr4,$attr7,$attr6,$attr3,$4,$2,$3,$1;
			self['width'] = $p['float_int']((typeof ($1=size)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)));
			self['height'] = $p['float_int']((typeof ($3=size)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)));
			$m['HTML5Canvas']['__init__'](self, self['width'], self['height']);
			$m['HTML5Canvas']['resize'](self, self['width'], self['height']);
			self['_display'] = null;
			self['_super_surface'] = null;
			self['_offset'] = $p['tuple']([0, 0]);
			self['_colorkey'] = null;
			self['_stroke_style'] = null;
			self['_fill_style'] = null;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['size']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr14,$attr11,$attr10,$attr13,$attr12;
			return $p['sprintf']('%s(%d,%d)', $p['tuple']([self['__class__'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16,$attr17,$attr18;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_width', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_width'] = $method;
		$method = $pyjs__bind_method2('get_height', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_height'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $attr23,$attr24,$attr25,$attr26;
			self['width'] = $p['float_int'](width);
			self['height'] = $p['float_int'](height);
			$m['HTML5Canvas']['resize'](self, self['width'], self['height']);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					var attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			}
			if (typeof attr == 'undefined') {
				attr = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						attr = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter1_nextval,$iter1_idx,$iter1_iter,$6,$attr30,$iter1_array,key,$attr27,$attr28,$attr29,$5,rect,$iter1_type;
			rect = $m['Rect'](0, 0, self['width'], self['height']);
			$iter1_iter = attr;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				key = $iter1_nextval;
				rect['__setattr__'](key, (typeof ($5=attr)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=key]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](key)));
			}
			return rect;
		}
	, 1, [null,['attr'],['self']]);
		$cls_definition['get_rect'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var surface,$attr33,$attr32,$attr31,$attr36,$attr35,$attr34;
			surface = $m['Surface']($p['tuple']([self['width'], self['height']]));
			surface['drawImage'](self['canvas'], 0, 0);
			return surface;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('subsurface', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $bool4,$bool5,$attr71,surface,$attr72,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$attr70,$attr59,$attr48,$attr49,$attr68,$attr69,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,_rect,$eq2,$eq1,$bool2,$bool3,$bool1,$attr37,$bool7,$8,$9,$7,$attr39,$attr38,$14,$attr58,$10,$11,$12,$13,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,surf_rect,$bool6,$attr66;
			if ((($bool1=$p['tuple'](['t', 'f'])['__contains__'](rect)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool3=!(($bool2=self['_super_surface']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
				if ((($bool4=(($eq1=rect)===($eq2='t')&&$eq1===null?true:
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
					self['drawImage'](self['_super_surface']['canvas'], (typeof ($7=self['_offset'])['__array'] != 'undefined'?
						((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](0)), (typeof ($9=self['_offset'])['__array'] != 'undefined'?
						((typeof $9['__array'][$10=1]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](1)), self['width'], self['height'], 0, 0, self['width'], self['height']);
				}
				else {
					self['_super_surface']['drawImage'](self['canvas'], (typeof ($11=self['_offset'])['__array'] != 'undefined'?
						((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](0)), (typeof ($13=self['_offset'])['__array'] != 'undefined'?
						((typeof $13['__array'][$14=1]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](1)));
				}
				return null;
			}
			if ((($bool5=$p['hasattr'](rect, 'width')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surf_rect = self['get_rect']();
			if ((($bool7=!(($bool6=surf_rect['contains'](_rect)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				throw ($p['ValueError']('subsurface outside surface area'));
			}
			surface = self['getSubimage'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			surface['_super_surface'] = self;
			surface['_offset'] = $p['tuple']([_rect['x'], _rect['y']]);
			surface['_colorkey'] = self['_colorkey'];
			return surface;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['subsurface'] = $method;
		$method = $pyjs__bind_method2('getSubimage', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var $attr74,$attr73,surface;
			surface = $m['Surface']($p['tuple']([width, height]));
			surface['drawImage'](self['canvas'], x, y, width, height, 0, 0, width, height);
			return surface;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['getSubimage'] = $method;
		$method = $pyjs__bind_method2('blit', function(surface, position, area) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				position = arguments[2];
				area = arguments[3];
			}
			if (typeof area == 'undefined') area=arguments['callee']['__args__'][5][1];
			var surface_rect,$attr89,$bool10,$32,$33,$attr88,$35,changed_rect,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$21,$20,$22,$25,$24,$27,$26,$36,$38,$29,$attr93,$28,$bool8,$bool9,$attr92,rect,$15,$16,$17,$attr91,$attr90,$attr79,$attr78,$attr77,$attr76,$attr75,$attr85,$18,$19,$30,$31,$34,$attr94,$37,$23;
			if ((($bool9=!(($bool8=area) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8['__nonzero__']=='function'?
						$bool8['__nonzero__']() :
						(typeof $bool8['__len__']=='function'?
							($bool8['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				rect = $m['rectPool']['get']((typeof ($15=position)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](0)), (typeof ($17=position)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](1)), surface['width'], surface['height']);
				self['impl']['canvasContext']['drawImage'](surface['canvas'], rect['x'], rect['y']);
			}
			else {
				rect = $m['rectPool']['get']((typeof ($19=position)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](0)), (typeof ($21=position)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=1]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](1)), (typeof ($23=area)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=2]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](2)), (typeof ($25=area)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=3]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](3)));
				self['impl']['canvasContext']['drawImage'](surface['canvas'], (typeof ($27=area)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=0]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](0)), (typeof ($29=area)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=1]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](1)), (typeof ($31=area)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=2]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](2)), (typeof ($33=area)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=3]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](3)), rect['x'], rect['y'], (typeof ($35=area)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=2]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](2)), (typeof ($37=area)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=3]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](3)));
			}
			if ((($bool10=self['_display']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				surface_rect = self['_display']['_surface_rect'];
			}
			else {
				surface_rect = self['get_rect']();
			}
			changed_rect = surface_rect['clip'](rect);
			$m['rectPool']['append'](rect);
			return changed_rect;
		}
	, 1, [null,null,['self'],['surface'],['position'],['area', null]]);
		$cls_definition['blit'] = $method;
		$method = $pyjs__bind_method2('_blits', function(surfaces) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surfaces = arguments[1];
			}
			var $attr95,$attr97,$attr96,$iter2_type,$iter2_iter,$attr99,ctx,s,$attr98,$iter2_idx,$iter2_nextval,$attr102,$attr100,$attr101,$iter2_array;
			ctx = self['impl']['canvasContext'];
			$iter2_iter = surfaces;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				s = $iter2_nextval;
				ctx['drawImage'](s['image']['canvas'], s['rect']['x'], s['rect']['y']);
			}
			return null;
		}
	, 1, [null,null,['self'],['surfaces']]);
		$cls_definition['_blits'] = $method;
		$method = $pyjs__bind_method2('_blit_clear', function(surface, rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				rect_list = arguments[2];
			}
			var $attr115,$iter3_type,$attr120,$iter3_idx,$attr121,$attr122,$iter3_iter,$attr106,$attr107,$attr104,$attr105,$attr103,$attr108,$attr109,$iter3_array,$attr119,$attr118,$attr111,$attr110,$attr113,$attr112,ctx,$attr114,$attr117,$attr116,r,$iter3_nextval;
			ctx = self['impl']['canvasContext'];
			$iter3_iter = rect_list;
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				r = $iter3_nextval;
				ctx['drawImage'](surface['canvas'], r['x'], r['y'], r['width'], r['height'], r['x'], r['y'], r['width'], r['height']);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['rect_list']]);
		$cls_definition['_blit_clear'] = $method;
		$method = $pyjs__bind_method2('set_colorkey', function(color, flags) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				flags = arguments[2];
			}
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];
			var $bool11,$bool12,$attr130,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,b,g,$pyjs_try_err,$attr133,$attr132,$attr131,r,$attr136,$attr135,$attr134;
			if ((($bool11=self['_colorkey']) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				r = self['_colorkey']['r'];
				g = self['_colorkey']['g'];
				b = self['_colorkey']['b'];
				self['_colorkey'] = null;
			}
			if ((($bool12=color) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				try {
					color = $m['Color'](color);
					self['_colorkey'] = color;
					self['replace_color']($p['tuple']([color['r'], color['g'], color['b']]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['color'],['flags', null]]);
		$cls_definition['set_colorkey'] = $method;
		$method = $pyjs__bind_method2('get_colorkey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr142,$attr140,$attr141,$pyjs_try_err,$attr137,$attr139,$attr138;
			try {
				return $p['tuple']([self['_colorkey']['r'], self['_colorkey']['g'], self['_colorkey']['b'], 255]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_colorkey'] = $method;
		$method = $pyjs__bind_method2('_getPixel', function(imagedata, index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
			}

			return imagedata.data[index];;
		}
	, 1, [null,null,['self'],['imagedata'],['index']]);
		$cls_definition['_getPixel'] = $method;
		$method = $pyjs__bind_method2('_setPixel', function(imagedata, index, dat) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
				dat = arguments[3];
			}
			var data;
			data = $p['str'](dat);
imagedata.data[index]=data;
			return null;
		}
	, 1, [null,null,['self'],['imagedata'],['index'],['dat']]);
		$cls_definition['_setPixel'] = $method;
		$method = $pyjs__bind_method2('replace_color', function(color, new_color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				new_color = arguments[2];
			}
			if (typeof new_color == 'undefined') new_color=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$attr167,$iter5_array,$bool13,$bool14,$bool15,$bool16,$attr172,$iter5_iter,$attr173,$iter4_type,$39,$iter5_type,$attr163,$iter4_iter,$attr143,$attr146,$attr147,$attr144,$attr145,$attr164,$attr165,$attr149,$attr160,$attr161,$attr162,$iter5_idx,$40,$attr166,$attr174,$eq3,col2,$eq4,col1,color1,color2,$attr168,pixels,$attr169,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,i,$iter4_nextval,j,$attr159,$attr158,$attr171,$attr170,$iter4_idx,$len1,$iter4_array,$attr148;
			pixels = self['impl']['getImageData'](0, 0, self['width'], self['height']);
			if ((($bool13=$p['hasattr'](color, 'a')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				color1 = color;
			}
			else {
				color1 = $m['Color'](color);
			}
			if ((($bool14=new_color) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				if ((($bool15=$p['hasattr'](new_color, 'a')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					color2 = new_color;
				}
				else {
					color2 = $m['Color'](new_color);
				}
			}
			else {
				color2 = $m['Color'](color1['r'], color1['g'], color1['b'], 0);
			}
			col1 = $p['tuple']([color1['r'], color1['g'], color1['b'], color1['a']]);
			col2 = $p['tuple']([color2['r'], color2['g'], color2['b'], color2['a']]);
			$iter4_iter = $p['xrange'](0, (($len1=pixels['data']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))), 4);
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				if ((($bool16=(($eq3=$p['tuple']([self['_getPixel'](pixels, i), self['_getPixel'](pixels, (i)+(1)), self['_getPixel'](pixels, (i)+(2)), self['_getPixel'](pixels, (i)+(3))]))===($eq4=col1)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$iter5_iter = $p['range'](4);
					if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter['__iter__']();
						$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						j = $iter5_nextval;
						self['_setPixel'](pixels, (i)+(j), (typeof ($39=col2)['__array'] != 'undefined'?
							((typeof $39['__array'][$40=j]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](j)));
					}
				}
			}
			self['impl']['putImageData'](pixels, 0, 0, 0, 0, self['width'], self['height']);
			return null;
		}
	, 1, [null,null,['self'],['color'],['new_color', null]]);
		$cls_definition['replace_color'] = $method;
		$method = $pyjs__bind_method2('get_at', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}
			var $43,$42,$41,pixel,$44;
			pixel = self['impl']['getImageData']((typeof ($41=pos)['__array'] != 'undefined'?
				((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__'](0)), (typeof ($43=pos)['__array'] != 'undefined'?
				((typeof $43['__array'][$44=1]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__'](1)), 1, 1);
			return $p['tuple']([self['_getPixel'](pixel, 0), self['_getPixel'](pixel, 1), self['_getPixel'](pixel, 2), self['_getPixel'](pixel, 3)]);
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['get_at'] = $method;
		$method = $pyjs__bind_method2('set_at', function(pos, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				color = arguments[2];
			}
			var $bool18,$attr176,$attr175,$eq6,$eq5,$48,_color,$46,$bool17,$47,$45;
			if ((($bool17=!(($eq5=self['_fill_style'])===($eq6=color)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['_fill_style'] = color;
				if ((($bool18=$p['hasattr'](color, 'a')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					_color = color;
				}
				else {
					_color = $m['Color'](color);
				}
				self['setFillStyle'](_color);
			}
			self['fillRect']((typeof ($45=pos)['__array'] != 'undefined'?
				((typeof $45['__array'][$46=0]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](0)), (typeof ($47=pos)['__array'] != 'undefined'?
				((typeof $47['__array'][$48=1]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](1)), 1, 1);
			return null;
		}
	, 1, [null,null,['self'],['pos'],['color']]);
		$cls_definition['set_at'] = $method;
		$method = $pyjs__bind_method2('fill', function(color, rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				rect = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
			if (typeof rect == 'undefined') rect=arguments['callee']['__args__'][4][1];
			var $attr191,$bool19,surface_rect,$attr192,$attr195,$attr194,$attr197,$attr190,$attr198,$attr193,$attr196,$attr199,$attr189,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$attr202,$eq8,$or1,$attr188,$or2,$attr186,$attr187,$attr184,$attr185,$attr182,$eq7,$attr180,$attr181,_rect,$attr179,$attr178,$attr177,$attr201,$attr183,$attr200,$bool30;
			if ((($bool19=(color === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				$m['HTML5Canvas']['fill'](self);
				return null;
			}
			if ((($bool20=color) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				if ((($bool21=!(($eq7=self['_fill_style'])===($eq8=color)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					self['_fill_style'] = color;
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
						self['setFillStyle'](color);
					}
					else {
						self['setFillStyle']($m['Color'](color));
					}
				}
				if ((($bool24=!(($bool23=rect) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23['__nonzero__']=='function'?
							$bool23['__nonzero__']() :
							(typeof $bool23['__len__']=='function'?
								($bool23['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					_rect = $m['Rect'](0, 0, self['width'], self['height']);
				}
				else {
					if ((($bool25=self['_display']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						surface_rect = self['_display']['_surface_rect'];
					}
					else {
						surface_rect = self['get_rect']();
					}
					if ((($bool26=$p['hasattr'](rect, 'width')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						_rect = surface_rect['clip'](rect);
					}
					else {
						_rect = surface_rect['clip']($m['Rect'](rect));
					}
					if ((($bool30=((($bool28=$or1=!(($bool27=_rect['width']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:!(($bool29=_rect['height']) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						return _rect;
					}
				}
				self['fillRect'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			}
			else {
				_rect = $m['Rect'](0, 0, self['width'], self['height']);
				self['clear']();
			}
			return _rect;
		}
	, 1, [null,null,['self'],['color', null],['rect', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('get_parent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr204,$attr203;
			return self['_super_surface'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_parent'] = $method;
		$method = $pyjs__bind_method2('get_offset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr205,$attr206;
			return self['_offset'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_offset'] = $method;
		$method = $pyjs__bind_method2('toDataURL', function(datatype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				datatype = arguments[1];
			}
			if (typeof datatype == 'undefined') datatype=arguments['callee']['__args__'][3][1];
			var $bool32,$bool31;
			if ((($bool32=!(($bool31=datatype) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31['__nonzero__']=='function'?
						$bool31['__nonzero__']() :
						(typeof $bool31['__len__']=='function'?
							($bool31['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				return self['canvas']['toDataURL']();
			}
			else {
				return self['canvas']['toDataURL'](datatype);
			}
			return null;
		}
	, 1, [null,null,['self'],['datatype', null]]);
		$cls_definition['toDataURL'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda9,$lambda8;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['convert'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['convert_alpha'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['set_alpha'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['get_alpha'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['lock'] = $lambda5;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['unlock'] = $lambda6;
			var 			$lambda7 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = ['arg',null];
			self['mustlock'] = $lambda7;
			var 			$lambda8 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = ['arg',null];
			self['get_locked'] = $lambda8;
			var 			$lambda9 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([]);
			};
			$lambda9['__name__'] = '$lambda9';

			$lambda9['__bind_type__'] = 0;
			$lambda9['__args__'] = ['arg',null];
			self['get_locks'] = $lambda9;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($m['HTML5Canvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surface', $p['tuple']($bases), $data);
	})();
	$m['Surf'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(image) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}
			var $attr209,$attr208,$attr207,$attr210;
			self['canvas'] = image;
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([self['canvas']['width'], self['canvas']['height']]), 2, null);
			self['width'] = $tupleassign1[0];
			self['height'] = $tupleassign1[1];
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr212,$attr213,$attr211,$attr214;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_width', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr216,$attr215;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_width'] = $method;
		$method = $pyjs__bind_method2('get_height', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr218,$attr217;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_height'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda13,$lambda12,$lambda11,$lambda10,$lambda17,$lambda16,$lambda15,$lambda14,$lambda18;
			var 			$lambda10 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda10['__name__'] = '$lambda10';

			$lambda10['__bind_type__'] = 0;
			$lambda10['__args__'] = ['arg',null];
			self['convert'] = $lambda10;
			var 			$lambda11 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda11['__name__'] = '$lambda11';

			$lambda11['__bind_type__'] = 0;
			$lambda11['__args__'] = ['arg',null];
			self['convert_alpha'] = $lambda11;
			var 			$lambda12 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda12['__name__'] = '$lambda12';

			$lambda12['__bind_type__'] = 0;
			$lambda12['__args__'] = ['arg',null];
			self['set_alpha'] = $lambda12;
			var 			$lambda13 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda13['__name__'] = '$lambda13';

			$lambda13['__bind_type__'] = 0;
			$lambda13['__args__'] = ['arg',null];
			self['get_alpha'] = $lambda13;
			var 			$lambda14 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda14['__name__'] = '$lambda14';

			$lambda14['__bind_type__'] = 0;
			$lambda14['__args__'] = ['arg',null];
			self['lock'] = $lambda14;
			var 			$lambda15 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda15['__name__'] = '$lambda15';

			$lambda15['__bind_type__'] = 0;
			$lambda15['__args__'] = ['arg',null];
			self['unlock'] = $lambda15;
			var 			$lambda16 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda16['__name__'] = '$lambda16';

			$lambda16['__bind_type__'] = 0;
			$lambda16['__args__'] = ['arg',null];
			self['mustlock'] = $lambda16;
			var 			$lambda17 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda17['__name__'] = '$lambda17';

			$lambda17['__bind_type__'] = 0;
			$lambda17['__args__'] = ['arg',null];
			self['get_locked'] = $lambda17;
			var 			$lambda18 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([]);
			};
			$lambda18['__name__'] = '$lambda18';

			$lambda18['__bind_type__'] = 0;
			$lambda18['__args__'] = ['arg',null];
			self['get_locks'] = $lambda18;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surf', $p['tuple']($bases), $data);
	})();
	$m['IndexSizeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('IndexSizeError', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.surface */


/* end module: pyjsdl.surface */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', 'pyjsdl.pyjsobj', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.rect.rectPool', 'pyjsdl.color.Color', 'pyjsdl.color']
*/

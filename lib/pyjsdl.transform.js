/* start module: pyjsdl.transform */
$pyjs['loaded_modules']['pyjsdl.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.transform'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.transform'];
	$m['__repr__'] = function() { return '<module: pyjsdl.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.transform';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['transform'] = $pyjs['loaded_modules']['pyjsdl.transform'];


	$m['_pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
	$m['_fabs'] = $p['___import___']('math.fabs', 'pyjsdl', null, false);
	$m['_sin'] = $p['___import___']('math.sin', 'pyjsdl', null, false);
	$m['_cos'] = $p['___import___']('math.cos', 'pyjsdl', null, false);
	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Transform'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.transform';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['deg_rad'] = ($m['_pi'])/(180.0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rotate', function(surface, angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				angle = arguments[2];
			}
			var surf,cos_theta,height_f,width_i,$attr1,$attr2,height_i,$attr4,$bool2,width_f,sin_theta,$bool1,theta,$attr3;
			if ((($bool2=!(($bool1=angle) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1['__nonzero__']=='function'?
						$bool1['__nonzero__']() :
						(typeof $bool1['__len__']=='function'?
							($bool1['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return surface['copy']();
			}
			theta = (angle)*(self['deg_rad']);
			width_i = surface['get_width']();
			height_i = surface['get_height']();
			cos_theta = $m['_fabs']($m['_cos'](theta));
			sin_theta = $m['_fabs']($m['_sin'](theta));
			width_f = $p['float_int'](((width_i)*(cos_theta))+((height_i)*(sin_theta)));
			height_f = $p['float_int'](((width_i)*(sin_theta))+((height_i)*(cos_theta)));
			surf = $m['Surface']($p['tuple']([width_f, height_f]));
			surf['saveContext']();
			surf['translate']((width_f)/(2.0), (height_f)/(2.0));
			surf['rotate'](-(theta));
			surf['drawImage'](surface['canvas'], (-(width_i))/(2), (-(height_i))/(2));
			surf['restoreContext']();
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('rotozoom', function(surface, angle, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				angle = arguments[2];
				size = arguments[3];
			}
			var cos_theta,height,$mod4,$mod1,$mod3,$mod2,width,sin_theta,theta,surf,$attr8,$attr5,$attr7,$attr6,$bool3,$bool6,$bool4,$bool5,height_f,width_i,width_f,height_i;
			if ((($bool4=!(($bool3=angle) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				width = $p['float_int']((surface['get_width']())*(size));
				height = $p['float_int']((surface['get_height']())*(size));
				return self['scale'](surface, $p['tuple']([width, height]));
			}
			theta = (angle)*(self['deg_rad']);
			width_i = $p['float_int']((surface['get_width']())*(size));
			height_i = $p['float_int']((surface['get_height']())*(size));
			cos_theta = $m['_fabs']($m['_cos'](theta));
			sin_theta = $m['_fabs']($m['_sin'](theta));
			width_f = $p['float_int']($m['_ceil'](((width_i)*(cos_theta))+((height_i)*(sin_theta))));
			if ((($bool5=(($mod1=width_f)!=null && ($mod2=2)!=null && typeof $mod1=='string'?
				$p['sprintf']($mod1,$mod2):
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				width_f += 1;
			}
			height_f = $p['float_int']($m['_ceil'](((width_i)*(sin_theta))+((height_i)*(cos_theta))));
			if ((($bool6=(($mod3=height_f)!=null && ($mod4=2)!=null && typeof $mod3=='string'?
				$p['sprintf']($mod3,$mod4):
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				height_f += 1;
			}
			surf = $m['Surface']($p['tuple']([width_f, height_f]));
			surf['saveContext']();
			surf['translate']((width_f)/(2.0), (height_f)/(2.0));
			surf['rotate'](-(theta));
			surf['drawImage'](surface['canvas'], 0, 0, surface['get_width'](), surface['get_height'](), (-(width_i))/(2), (-(height_i))/(2), width_i, height_i);
			surf['restoreContext']();
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['angle'],['size']]);
		$cls_definition['rotozoom'] = $method;
		$method = $pyjs__bind_method2('scale', function(surface, size, dest) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				size = arguments[2];
				dest = arguments[3];
			}
			if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][5][1];
			var surf,$attr9,$4,$3,$bool7,$bool8,$1,$2,$attr10;
			if ((($bool8=!(($bool7=dest) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				surf = $m['Surface'](size);
			}
			else {
				surf = dest;
			}
			surf['drawImage'](surface['canvas'], 0, 0, surface['get_width'](), surface['get_height'](), 0, 0, (typeof ($1=size)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)), (typeof ($3=size)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)));
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['size'],['dest', null]]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('smoothscale', function(surface, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				size = arguments[2];
			}

			return self['scale'](surface, size);
		}
	, 1, [null,null,['self'],['surface'],['size']]);
		$cls_definition['smoothscale'] = $method;
		$method = $pyjs__bind_method2('scale2x', function(surface, dest) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				dest = arguments[2];
			}
			if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][4][1];

			return self['scale'](surface, $p['tuple']([(surface['get_width']())*(2), (surface['get_height']())*(2)]), dest);
		}
	, 1, [null,null,['self'],['surface'],['dest', null]]);
		$cls_definition['scale2x'] = $method;
		$method = $pyjs__bind_method2('flip', function(surface, xbool, ybool) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				xbool = arguments[2];
				ybool = arguments[3];
			}
			if (typeof xbool == 'undefined') xbool=arguments['callee']['__args__'][4][1];
			if (typeof ybool == 'undefined') ybool=arguments['callee']['__args__'][5][1];
			var surf,$bool10,$and1,$bool12,$and2,$bool11,$bool9,$attr11,$attr12;
			surf = $m['Surface']($p['tuple']([surface['get_width'](), surface['get_height']()]));
			surf['saveContext']();
			if ((($bool10=((($bool9=$and1=xbool) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?ybool:$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				surf['translate'](surface['get_width'](), surface['get_height']());
				surf['scale'](-(1), -(1));
			}
			else if ((($bool11=xbool) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				surf['translate'](surface['get_width'](), 0);
				surf['scale'](-(1), 1);
			}
			else if ((($bool12=ybool) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				surf['translate'](0, surface['get_height']());
				surf['scale'](1, -(1));
			}
			surf['drawImage'](surface['canvas'], 0, 0);
			surf['restoreContext']();
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['xbool', true],['ybool', false]]);
		$cls_definition['flip'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Transform', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.transform */


/* end module: pyjsdl.transform */


/*
PYJS_DEPS: ['math.pi', 'math', 'math.fabs', 'math.sin', 'math.cos', 'math.ceil', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface']
*/

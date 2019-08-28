/* start module: pyjsdl.image */
$pyjs['loaded_modules']['pyjsdl.image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.image'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.image'];
	$m['__repr__'] = function() { return '<module: pyjsdl.image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.image';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['image'] = $pyjs['loaded_modules']['pyjsdl.image'];


	$m['os'] = $p['___import___']('os', 'pyjsdl');
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Surf'] = $p['___import___']('pyjsdl.surface.Surf', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['pyjsdl'] = $p['___import___']('pyjsdl', 'pyjsdl');
	$m['__docformat__'] = 'restructuredtext';
	$m['Image'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.image';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['images'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('load', function(img_file, namehint) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img_file = arguments[1];
				namehint = arguments[2];
			}
			if (typeof namehint == 'undefined') namehint=arguments['callee']['__args__'][4][1];
			var surface,$bool2,$bool1,image;
			if ((($bool2=!(($bool1=namehint) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				image = self['get_image'](img_file);
			}
			else {
				image = self['get_image'](namehint);
			}
			surface = self['convert_image'](image);
			return surface;
		}
	, 1, [null,null,['self'],['img_file'],['namehint', null]]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('get_image', function(img_file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img_file = arguments[1];
			}
			var image,$iter1_iter,img,$pyjs_try_err,$iter1_array,$attr8,$iter1_nextval,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool3,$4,$2,$3,$1,$iter1_type,$iter1_idx;
			if ((($bool3=(self['images'] === null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['images'] = $p['dict']([]);
				$iter1_iter = $m['env']['canvas']['images'];
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					img = $iter1_nextval;
					self['images']['__setitem__']($m['os']['path']['normpath'](img), (typeof ($1=$m['env']['canvas']['images'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2=img]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](img)));
				}
			}
			img_file = $m['os']['path']['normpath'](img_file);
			try {
				image = (typeof ($3=self['images'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=img_file]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](img_file));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					throw ($m['pyjsdl']['error']($p['sprintf']('Failed to retrieve image file %s', img_file)));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return image;
		}
	, 1, [null,null,['self'],['img_file']]);
		$cls_definition['get_image'] = $method;
		$method = $pyjs__bind_method2('convert_image', function(image) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}
			var $attr9,surface,$attr10,$bool4,$attr14,$attr11,$attr13,$attr12;
			if ((($bool4=$m['env']['canvas']['_isCanvas']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				surface = $m['Surface']($p['tuple']([image['width'], image['height']]));
				surface['drawImage'](image, 0, 0);
			}
			else {
				surface = $m['Surf'](image);
			}
			return surface;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['convert_image'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Image', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.image */


/* end module: pyjsdl.image */


/*
PYJS_DEPS: ['os', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.surface.Surf', 'pyjsdl.env']
*/

/* start module: pyjsdl.key */
$pyjs['loaded_modules']['pyjsdl.key'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.key']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.key'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.key'];
	$m['__repr__'] = function() { return '<module: pyjsdl.key>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.key';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['key'] = $pyjs['loaded_modules']['pyjsdl.key'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Key'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.key';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$attr10,$attr3;
			self['keyPress'] = $m['pyjsdl']['event']['keyPress'];
			self['keyMod'] = $m['pyjsdl']['event']['keyMod'];
			self['alt'] = $m['Const']['K_ALT'];
			self['ctrl'] = $m['Const']['K_CTRL'];
			self['shift'] = $m['Const']['K_SHIFT'];
			self['_keys'] = $p['dict']([]);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('$$name', function(keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keycode = arguments[1];
			}
			var $iter1_iter,$attr20,$4,$attr11,$3,$iter1_array,$attr12,$iter1_nextval,$bool2,$bool3,$bool1,$attr19,$attr18,$bool4,$attr15,$attr14,$attr17,$attr16,$2,$attr13,$1,$iter1_type,keyname,$iter1_idx;
			if ((($bool2=!(($bool1=self['_keys']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$iter1_iter = $p['dir']($m['Const']);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					keyname = $iter1_nextval;
					if ((($bool3=keyname['startswith']('K_')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['_keys']['__setitem__']($p['getattr']($m['Const'], keyname), (typeof ($1=keyname['$$split']('_'))['__array'] != 'undefined'?
							((typeof $1['__array'][$2=-(1)]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__'](-(1)))['lower']());
					}
				}
				self['_keys']['__setitem__'](0, 'unknown key');
			}
			if ((($bool4=!self['_keys']['__contains__'](keycode)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				keycode = 0;
			}
			return (typeof ($3=self['_keys'])['__array'] != 'undefined'?
				((typeof $3['__array'][$4=keycode]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](keycode));
		}
	, 1, [null,null,['self'],['keycode']]);
		$cls_definition['$$name'] = $method;
		$method = $pyjs__bind_method2('get_mods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr35,$attr34,$19,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr41,$attr38,$21,$20,$22,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$8,$9,$6,$7,$attr39,$5,$14,$15,$16,$17,$10,$11,$12,$13,$18,$attr44,$attr42,$attr43;
			return ((typeof ($9=(typeof ($5=self['keyMod'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6=self['alt']]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](self['alt'])))['__array'] != 'undefined'?
				((typeof $9['__array'][$10=(typeof ($7=self['keyPress'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8=self['alt']]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](self['alt']))]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__']((typeof ($7=self['keyPress'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8=self['alt']]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](self['alt'])))))|((typeof ($15=(typeof ($11=self['keyMod'])['__array'] != 'undefined'?
				((typeof $11['__array'][$12=self['ctrl']]) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__'](self['ctrl'])))['__array'] != 'undefined'?
				((typeof $15['__array'][$16=(typeof ($13=self['keyPress'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=self['ctrl']]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](self['ctrl']))]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__']((typeof ($13=self['keyPress'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=self['ctrl']]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](self['ctrl'])))))|((typeof ($21=(typeof ($17=self['keyMod'])['__array'] != 'undefined'?
				((typeof $17['__array'][$18=self['shift']]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](self['shift'])))['__array'] != 'undefined'?
				((typeof $21['__array'][$22=(typeof ($19=self['keyPress'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=self['shift']]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](self['shift']))]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__']((typeof ($19=self['keyPress'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=self['shift']]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](self['shift'])))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_mods'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda5,$lambda4,$lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['get_focused'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_pressed'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['set_mods'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['set_repeat'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return true;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['get_repeat'] = $lambda5;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Key', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.key */


/* end module: pyjsdl.key */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.locals']
*/

/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];


	$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
	$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['id'] = function(obj) {
		var $attr1,$attr2;
		return obj['_identity'];
	};
	$m['id']['__name__'] = 'id';

	$m['id']['__bind_type__'] = 0;
	$m['id']['__args__'] = [null,null,['obj']];
	$m['Sprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool1,$attr3,$attr4;
			self['_identity'] = $m['Sprite']['_identity'];
			$m['Sprite']['_identity'] += 1;
			self['_groups'] = $p['dict']([]);
			if ((($bool1=groups) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs_kwargs_call(self, 'add', groups, null, [{}]);
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr5,$attr7,$attr6,$len1;
			return $p['sprintf']('%s(in %d groups)', $p['tuple']([self['__class__'], (($len1=self['_groups']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$bool2,$iter1_array,group,$iter1_idx;
			$iter1_iter = groups;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				group = $iter1_nextval;
				if ((($bool2=$p['hasattr'](group, '_sprites')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					group['add'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'add', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$bool3,$iter2_idx,group,$iter2_array;
			$iter2_iter = groups;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				group = $iter2_nextval;
				if ((($bool3=$p['hasattr'](group, '_sprites')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					group['remove'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'remove', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('kill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self['_groups']['values']();
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				group = $iter3_nextval;
				group['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['kill'] = $method;
		$method = $pyjs__bind_method2('alive', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10,$bool4;
			if ((($bool4=self['_groups']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['alive'] = $method;
		$method = $pyjs__bind_method2('groups', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_groups']['values']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['groups'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

 			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
	})();
	$m['DirtySprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
	})();
	$m['Group'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool5,$attr11,$attr12;
			self['_identity'] = $m['Group']['_identity'];
			$m['Group']['_identity'] += 1;
			self['_sprites'] = $p['dict']([]);
			if ((($bool5=sprites) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$pyjs_kwargs_call(self, 'add', sprites, null, [{}]);
			}
			self['_clear_active'] = false;
			self['_sprites_drawn'] = $p['dict']([]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len2,$attr15,$attr14,$attr16,$attr13;
			return $p['sprintf']('%s(%d sprites)', $p['tuple']([self['__class__'], (($len2=self['_sprites']) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sprites']['itervalues']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr17,$attr18;
			return self['_sprites']['__contains__']($m['id'](sprite));
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19,$len3;
			return (($len3=self['_sprites']) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sprites']['values']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newgroup;
			newgroup = self['__class__']();
			newgroup['_sprites'] = self['_sprites']['copy']();
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var sprite,$attr26,$iter4_nextval,spriteID,$iter4_idx,$attr21,$attr22,$attr23,$bool6,$bool7,$iter4_type,$iter4_array,$attr24,$iter4_iter,$attr25;
			$iter4_iter = sprites;
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				sprite = $iter4_nextval;
				if ((($bool6=$p['hasattr'](sprite, '_groups')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool7=!self['_sprites']['__contains__'](spriteID)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self['_sprites']['__setitem__'](spriteID, sprite);
						sprite['_groups']['__setitem__']($m['id'](self), self);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter5_nextval,sprite,$iter5_array,$attr27,spriteID,$attr29,$attr32,$attr31,$iter5_iter,$iter5_idx,$attr28,$iter5_type,$bool8,$bool9,$attr30;
			$iter5_iter = sprites;
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				sprite = $iter5_nextval;
				if ((($bool8=$p['hasattr'](sprite, '_groups')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool9=self['_sprites']['__contains__'](spriteID)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						self['_sprites']['__delitem__'](spriteID);
						sprite['_groups']['__delitem__']($m['id'](self));
					}
				}
				else {
					$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('has', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool12,sprite,$iter6_idx,$iter6_type,$bool11,$bool13,$attr33,$bool10,$iter6_array,$attr34,$iter6_iter,$iter6_nextval;
			$iter6_iter = sprites;
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				sprite = $iter6_nextval;
				if ((($bool10=$p['hasattr'](sprite, '_groups')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					if ((($bool11=!self['_sprites']['__contains__']($m['id'](sprite))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						return false;
					}
				}
				else {
					if ((($bool13=!(($bool12=$pyjs_kwargs_call(self, 'has', sprite, null, [{}])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						return false;
					}
				}
			}
			return true;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['has'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $attr41,$attr40,$attr38,sprite,$iter7_nextval,$iter7_iter,$iter7_array,$bool14,$attr37,$attr36,$attr35,$iter7_idx,$attr42,$attr39,$iter7_type,$2,$1;
			surface['_blits'](self['_sprites']['itervalues']());
			if ((($bool14=self['_clear_active']) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				$m['rectPool']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter7_iter = self['_sprites'];
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					sprite = $iter7_nextval;
					self['_sprites_drawn']['__setitem__'](sprite, $m['rectPool']['copy']((typeof ($1=self['_sprites'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2=sprite]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](sprite))['rect']));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('clear', function(surface, background) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				background = arguments[2];
			}
			var $iter8_idx,sprite,$iter8_array,$bool15,$3,$iter8_iter,$attr44,$iter8_nextval,$4,$iter8_type,$attr43;
			self['_clear_active'] = true;
			if ((($bool15=$p['hasattr'](background, 'width')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				surface['_blit_clear'](background, self['_sprites_drawn']['itervalues']());
			}
			else {
				$iter8_iter = self['_sprites_drawn'];
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					sprite = $iter8_nextval;
					background(surface, (typeof ($3=self['_sprites_drawn'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=sprite]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](sprite)));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['background']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sprite,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$attr46,$attr45,$iter9_array;
			$iter9_iter = self['_sprites']['itervalues']();
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				sprite = $iter9_nextval;
				sprite['_groups']['__delitem__']($m['id'](self));
			}
			self['_sprites']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter10_nextval,sprite,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
			$iter10_iter = self['_sprites']['values']();
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				sprite = $iter10_nextval;
				$pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Group', $p['tuple']($bases), $data);
	})();
	$m['GroupSingle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];
			var $bool16;
			if ((($bool16=sprite) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				$m['Group']['__init__'](self, sprite);
			}
			else {
				$m['Group']['__init__'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['sprite', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $bool18,$eq2,$eq1,$bool17,$attr47,$6,$5,$attr48;
			if ((($bool17=(($eq1=attr)===($eq2='sprite')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				if ((($bool18=self['_sprites']) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					return (typeof ($5=self['_sprites']['values']())['__array'] != 'undefined'?
						((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](0));
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('add', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr51,$attr50,$attr52,$attr49;
			self['empty']();
			self['_sprites']['__setitem__']($m['id'](sprite), sprite);
			sprite['_groups']['__setitem__']($m['id'](self), self);
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool19,$attr54,$8,$7,$attr53;
			if ((($bool19=self['_sprites']) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				$pyjs_kwargs_call((typeof ($7=self['_sprites']['values']())['__array'] != 'undefined'?
					((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](0)), 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
	})();
	$m['RenderUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
			self['changed_areas'] = $p['list']([]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $iter12_type,$attr74,$attr73,$9,$22,$19,$attr88,$attr71,$attr70,$attr79,$attr82,$attr83,$attr80,$attr81,$attr68,$attr69,$attr84,$attr85,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$attr90,$attr89,$iter12_nextval,$bool21,$bool20,$bool22,$iter11_idx,$14,sprite,$15,$iter11_iter,$attr78,$iter12_array,$attr91,$attr96,$attr95,$iter11_array,$18,$attr86,$iter11_nextval,$attr92,$attr87,$attr59,$attr58,$16,$17,$10,$11,$12,$13,$attr77,$attr76,$attr75,$iter11_type,$attr55,$attr72,$attr57,$attr56,$iter12_iter,$21,$20,$iter12_idx,$attr66;
			surface['_blits'](self['_sprites']['itervalues']());
			if ((($bool20=self['_clear_active']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				$iter11_iter = self['_sprites'];
				if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter['__iter__']();
					$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					sprite = $iter11_nextval;
					if ((($bool21=self['_sprites_drawn']['__contains__'](sprite)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						if ((($bool22=(typeof ($9=self['_sprites_drawn'])['__array'] != 'undefined'?
							((typeof $9['__array'][$10=sprite]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__'](sprite))['intersects']((typeof ($11=self['_sprites'])['__array'] != 'undefined'?
							((typeof $11['__array'][$12=sprite]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](sprite))['rect'])) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
							(typeof ($13=self['_sprites_drawn'])['__array'] != 'undefined'?
								((typeof $13['__array'][$14=sprite]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](sprite))['union_ip']((typeof ($15=self['_sprites'])['__array'] != 'undefined'?
								((typeof $15['__array'][$16=sprite]) != 'undefined'?$15['__array'][$16]:
									$15['__getitem__']($16)):
									$15['__getitem__'](sprite))['rect']);
						}
						else {
							self['changed_areas']['append']($m['rectPool']['copy']((typeof ($17=self['_sprites'])['__array'] != 'undefined'?
								((typeof $17['__array'][$18=sprite]) != 'undefined'?$17['__array'][$18]:
									$17['__getitem__']($18)):
									$17['__getitem__'](sprite))['rect']));
						}
					}
					else {
						self['changed_areas']['append']($m['rectPool']['copy']((typeof ($19=self['_sprites'])['__array'] != 'undefined'?
							((typeof $19['__array'][$20=sprite]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](sprite))['rect']));
					}
				}
				self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter12_iter = self['_sprites'];
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					sprite = $iter12_nextval;
					self['_sprites_drawn']['__setitem__'](sprite, $m['rectPool']['copy']((typeof ($21=self['_sprites'])['__array'] != 'undefined'?
						((typeof $21['__array'][$22=sprite]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](sprite))['rect']));
				}
			}
			else {
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				self['changed_areas']['extend'](function(){
					var $attr94,$iter13_nextval,sprite,$attr93,$iter13_iter,$collcomp1,$iter13_type,$iter13_idx,$iter13_array;
	$collcomp1 = $p['list']();
				$iter13_iter = self['_sprites']['itervalues']();
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					sprite = $iter13_nextval;
					$collcomp1['append']($m['rectPool']['copy'](sprite['rect']));
				}

	return $collcomp1;}());
			}
			return self['changed_areas'];
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
	})();
	$m['OrderedUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var index,$attr97,$iter14_type,sprite,spriteID,$attr100,$attr99,$attr98,$bool23,$attr104,$iter14_array,$attr103,$iter14_iter,$attr101,$attr102,$iter14_idx,$iter14_nextval;
			self['order'] = $p['dict']([]);
			self['place'] = $p['dict']([]);
			self['range'] = 1000;
			self['index'] = $p['iter']($p['xrange'](self['range']));
			self['sort'] = null;
			$iter14_iter = sprites;
			if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter['__iter__']();
				$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				sprite = $iter14_nextval;
				if ((($bool23=!self['_sprites']['__contains__'](sprite)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					spriteID = $m['id'](sprite);
					index = self['index']['next']();
					self['order']['__setitem__'](index, spriteID);
					self['place']['__setitem__'](spriteID, index);
				}
			}
			$pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr107,keys,$attr114,$attr106,$bool24,$attr105,order_sprite,$attr113,$attr108;
			if ((($bool24=self['sort']) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				order_sprite = $p['iter'](self['sort']);
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var key,$attr112,$iter15_iter,$attr111,$attr110,$23,$iter15_array,$25,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,$24,$26,$attr109;
	$collcomp2 = $p['list']();
				$iter15_iter = keys;
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					key = $iter15_nextval;
					$collcomp2['append']((typeof ($25=self['_sprites'])['__array'] != 'undefined'?
						((typeof $25['__array'][$26=(typeof ($23=self['order'])['__array'] != 'undefined'?
						((typeof $23['__array'][$24=key]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](key))]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']((typeof ($23=self['order'])['__array'] != 'undefined'?
						((typeof $23['__array'][$24=key]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](key)))));
				}

	return $collcomp2;}();
				order_sprite = $p['iter'](self['sort']);
			}
			return order_sprite;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr118,keys,$attr115,$attr117,$attr116,$bool25,$attr123,$attr124,order_sprite;
			if ((($bool25=self['sort']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				order_sprite = $p['__getslice'](self['sort'], 0, null);
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var $iter16_array,$attr119,$iter16_type,$28,$collcomp3,$27,$iter16_idx,$attr121,$attr122,$attr120,$30,key,$iter16_nextval,$29,$iter16_iter;
	$collcomp3 = $p['list']();
				$iter16_iter = keys;
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					key = $iter16_nextval;
					$collcomp3['append']((typeof ($29=self['_sprites'])['__array'] != 'undefined'?
						((typeof $29['__array'][$30=(typeof ($27=self['order'])['__array'] != 'undefined'?
						((typeof $27['__array'][$28=key]) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__'](key))]) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__']((typeof ($27=self['order'])['__array'] != 'undefined'?
						((typeof $27['__array'][$28=key]) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__'](key)))));
				}

	return $collcomp3;}();
				order_sprite = $p['__getslice'](self['sort'], 0, null);
			}
			return order_sprite;
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newgroup,$attr125,$attr126,$attr127,$attr128;
			newgroup = $m['RenderUpdates']['copy'](self);
			newgroup['order'] = self['order']['copy']();
			newgroup['place'] = self['place']['copy']();
			newgroup['range'] = self['range'];
			newgroup['index'] = $p['iter']($p['xrange'](($p['max'](self['order']['keys']()))+(1), self['range']));
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter18_type,spriteID,$iter17_type,$31,$attr142,index,$attr140,$iter17_iter,$attr146,$attr147,$attr144,$attr145,$len4,$bool27,$bool26,$attr129,$iter18_nextval,$bool28,$iter17_nextval,$iter18_iter,sprite,$attr143,keys,$iter17_array,$attr141,key,$iter18_idx,$attr138,$cmp1,$iter18_array,$cmp2,$34,$attr148,$32,$33,order,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$iter17_idx,$attr139,$len5;
			$iter17_iter = sprites;
			if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter['__iter__']();
				$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				sprite = $iter17_nextval;
				if ((($bool26=!self['_sprites']['__contains__'](sprite)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					index = self['_get_index']();
					if ((($bool27=(index !== null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						spriteID = $m['id'](sprite);
						self['order']['__setitem__'](index, spriteID);
						self['place']['__setitem__'](spriteID, index);
					}
					else {
						keys = self['order']['keys']();
						keys['sort']();
						if ((($bool28=((($cmp1=((($len4=keys) === null?0:
							(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
								(typeof $len4['__len__'] == 'function'?$len4['__len__']():
									(typeof $len4['length'] != 'undefined'?$len4['length']:
										$p['len']($len4))))))*(2))===($cmp2=self['range'])?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
							self['range'] = ((($len5=keys) === null?0:
								(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
									(typeof $len5['__len__'] == 'function'?$len5['__len__']():
										(typeof $len5['length'] != 'undefined'?$len5['length']:
											$p['len']($len5))))))*(2);
						}
						self['index'] = $p['iter']($p['xrange'](self['range']));
						order = self['order'];
						self['order'] = $p['dict']([]);
						self['place'] = $p['dict']([]);
						$iter18_iter = keys;
						if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
							$iter18_type = 0;
						} else {
							$iter18_iter = $iter18_iter['__iter__']();
							$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter18_idx = 0;
						while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
							key = $iter18_nextval;
							index = self['index']['next']();
							self['order']['__setitem__'](index, (typeof ($31=order)['__array'] != 'undefined'?
								((typeof $31['__array'][$32=key]) != 'undefined'?$31['__array'][$32]:
									$31['__getitem__']($32)):
									$31['__getitem__'](key)));
							self['place']['__setitem__']((typeof ($33=order)['__array'] != 'undefined'?
								((typeof $33['__array'][$34=key]) != 'undefined'?$33['__array'][$34]:
									$33['__getitem__']($34)):
									$33['__getitem__'](key)), index);
						}
						index = self['index']['next']();
						spriteID = $m['id'](sprite);
						self['order']['__setitem__'](index, spriteID);
						self['place']['__setitem__'](spriteID, index);
					}
				}
			}
			self['sort'] = null;
			$pyjs_kwargs_call($m['RenderUpdates'], 'add', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('_get_index', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return self['index']['next']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_index'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr155,$attr154,$iter19_idx,$attr151,sprite,$attr153,$attr152,$36,$attr149,spriteID,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$35,$bool29,$attr156,$attr150;
			$iter19_iter = sprites;
			if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
				$iter19_type = 0;
			} else {
				$iter19_iter = $iter19_iter['__iter__']();
				$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter19_idx = 0;
			while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
				sprite = $iter19_nextval;
				spriteID = $m['id'](sprite);
				if ((($bool29=self['place']['__contains__'](spriteID)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					self['order']['__delitem__']((typeof ($35=self['place'])['__array'] != 'undefined'?
						((typeof $35['__array'][$36=spriteID]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__'](spriteID)));
					self['place']['__delitem__'](spriteID);
				}
			}
			self['sort'] = null;
			$pyjs_kwargs_call($m['RenderUpdates'], 'remove', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr157,$attr158;
			self['order'] = $p['dict']([]);
			self['place'] = $p['dict']([]);
			self['index'] = $p['iter']($p['xrange'](self['range']));
			self['sort'] = null;
			$m['RenderUpdates']['empty'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr173,$iter22_idx,$iter22_type,$attr210,$iter22_array,$bool32,$attr168,$attr169,$attr167,$attr160,$attr161,$attr162,$attr200,$attr186,$49,$48,$attr209,$attr198,$43,$42,$41,$attr206,$47,$46,$45,$44,$iter21_idx,$attr185,sprite,$attr188,$attr189,keys,$attr187,$attr184,$iter21_nextval,$attr182,$attr183,$attr180,$attr181,$attr205,$iter21_iter,$attr201,$attr204,order_sprite,$attr202,$iter22_nextval,$53,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr159,$attr172,$attr171,$attr170,$iter21_type,$bool33,$bool30,$bool31,$attr203,$iter21_array,$50,$51,$52,$iter22_iter,$54;
			if ((($bool30=self['sort']) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				order_sprite = $p['iter'](self['sort']);
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var $iter20_iter,$iter20_nextval,$iter20_type,$38,$39,$attr164,$attr165,$attr166,$collcomp4,$attr163,$iter20_idx,key,$37,$40,$iter20_array;
	$collcomp4 = $p['list']();
				$iter20_iter = keys;
				if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter['__iter__']();
					$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					key = $iter20_nextval;
					$collcomp4['append']((typeof ($39=self['_sprites'])['__array'] != 'undefined'?
						((typeof $39['__array'][$40=(typeof ($37=self['order'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=key]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](key))]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__']((typeof ($37=self['order'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=key]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](key)))));
				}

	return $collcomp4;}();
				order_sprite = $p['iter'](self['sort']);
			}
			surface['_blits'](order_sprite);
			if ((($bool31=self['_clear_active']) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				$iter21_iter = self['_sprites'];
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					sprite = $iter21_nextval;
					if ((($bool32=self['_sprites_drawn']['__contains__'](sprite)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
						if ((($bool33=(typeof ($41=self['_sprites_drawn'])['__array'] != 'undefined'?
							((typeof $41['__array'][$42=sprite]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__'](sprite))['intersects']((typeof ($43=self['_sprites'])['__array'] != 'undefined'?
							((typeof $43['__array'][$44=sprite]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](sprite))['rect'])) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
							(typeof ($45=self['_sprites_drawn'])['__array'] != 'undefined'?
								((typeof $45['__array'][$46=sprite]) != 'undefined'?$45['__array'][$46]:
									$45['__getitem__']($46)):
									$45['__getitem__'](sprite))['union_ip']((typeof ($47=self['_sprites'])['__array'] != 'undefined'?
								((typeof $47['__array'][$48=sprite]) != 'undefined'?$47['__array'][$48]:
									$47['__getitem__']($48)):
									$47['__getitem__'](sprite))['rect']);
						}
						else {
							self['changed_areas']['append']($m['rectPool']['copy']((typeof ($49=self['_sprites'])['__array'] != 'undefined'?
								((typeof $49['__array'][$50=sprite]) != 'undefined'?$49['__array'][$50]:
									$49['__getitem__']($50)):
									$49['__getitem__'](sprite))['rect']));
						}
					}
					else {
						self['changed_areas']['append']($m['rectPool']['copy']((typeof ($51=self['_sprites'])['__array'] != 'undefined'?
							((typeof $51['__array'][$52=sprite]) != 'undefined'?$51['__array'][$52]:
								$51['__getitem__']($52)):
								$51['__getitem__'](sprite))['rect']));
					}
				}
				self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter22_iter = self['_sprites'];
				if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter['__iter__']();
					$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					sprite = $iter22_nextval;
					self['_sprites_drawn']['__setitem__'](sprite, $m['rectPool']['copy']((typeof ($53=self['_sprites'])['__array'] != 'undefined'?
						((typeof $53['__array'][$54=sprite]) != 'undefined'?$53['__array'][$54]:
							$53['__getitem__']($54)):
							$53['__getitem__'](sprite))['rect']));
				}
			}
			else {
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				self['changed_areas']['extend'](function(){
					var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,$attr208,$iter23_array,$attr207,sprite;
	$collcomp5 = $p['list']();
				$iter23_iter = self['_sprites']['itervalues']();
				if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
					$iter23_type = 0;
				} else {
					$iter23_iter = $iter23_iter['__iter__']();
					$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter23_idx = 0;
				while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
					sprite = $iter23_nextval;
					$collcomp5['append']($m['rectPool']['copy'](sprite['rect']));
				}

	return $collcomp5;}());
			}
			return self['changed_areas'];
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['RenderUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call(null, $m['OrderedUpdates'], sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['OrderedUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredDirty'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['LayeredUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
	})();
	$m['spritecollide'] = function(sprite, group, dokill, collided) {
		if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
		var $iter25_nextval,$iter25_array,$iter25_idx,$iter24_type,$iter24_iter,$iter24_nextval,$and1,$and2,collide,$iter25_type,$attr211,$iter24_idx,$iter25_iter,$iter24_array,$bool36,$bool37,$bool34,$bool35,$attr212,$bool38,$bool39,sprites;
		collide = $p['list']([]);
		$iter24_iter = group;
		if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
			$iter24_type = 0;
		} else {
			$iter24_iter = $iter24_iter['__iter__']();
			$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter24_idx = 0;
		while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
			sprites = $iter24_nextval;
			if ((($bool34=sprite['rect']['intersects'](sprites['rect'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				if ((($bool35=collided) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					if ((($bool37=!(($bool36=collided(sprite, sprites)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						continue;
					}
				}
				collide['append'](sprites);
			}
		}
		if ((($bool39=((($bool38=$and1=collide) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
			false :
			(typeof $bool38=='object'?
				(typeof $bool38['__nonzero__']=='function'?
					$bool38['__nonzero__']() :
					(typeof $bool38['__len__']=='function'?
						($bool38['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?dokill:$and1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
			$iter25_iter = collide;
			if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
				$iter25_type = 0;
			} else {
				$iter25_iter = $iter25_iter['__iter__']();
				$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter25_idx = 0;
			while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
				sprite = $iter25_nextval;
				sprite['kill']();
			}
		}
		return collide;
	};
	$m['spritecollide']['__name__'] = 'spritecollide';

	$m['spritecollide']['__bind_type__'] = 0;
	$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
	$m['collide_rect'] = function(sprite1, sprite2) {
		var $attr213,$attr214;
		return sprite1['rect']['intersects'](sprite2['rect']);
	};
	$m['collide_rect']['__name__'] = 'collide_rect';

	$m['collide_rect']['__bind_type__'] = 0;
	$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_rect_ratio'] = function(ratio) {
		var obj,$lambda1;
		obj = (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
		var 		$lambda1 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda1;
	};
	$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

	$m['collide_rect_ratio']['__bind_type__'] = 0;
	$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_rect_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$attr256,$attr257,$attr254,$attr255,$attr238,$attr239,$attr250,$attr251,$attr242,$attr245,$attr240,$attr244,$attr258,$attr247,$attr246,$attr219,$attr241,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr220,$attr249,$attr248,collide,$attr229,$attr228,$attr252,$attr243,r1,r2,$attr218,r,$attr253,y,x,$attr216,$attr217,$attr215;
			r = sprite1['rect'];
			x = ((r['width'])*(self['ratio']))-(r['width']);
			y = ((r['height'])*(self['ratio']))-(r['height']);
			r1 = $m['rectPool']['get']((r['x'])-($p['float_int']((x)*(0.5))), (r['y'])-($p['float_int']((y)*(0.5))), (r['width'])+($p['float_int'](x)), (r['height'])+($p['float_int'](y)));
			r = sprite2['rect'];
			x = ((r['width'])*(self['ratio']))-(r['width']);
			y = ((r['height'])*(self['ratio']))-(r['height']);
			r2 = $m['rectPool']['get']((r['x'])-($p['float_int']((x)*(0.5))), (r['y'])-($p['float_int']((y)*(0.5))), (r['width'])+($p['float_int'](x)), (r['height'])+($p['float_int'](y)));
			collide = r1['intersects'](r2);
			$m['rectPool']['extend']($p['tuple']([r1, r2]));
			return collide;
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_circle'] = function(sprite1, sprite2) {
		var radius1,$attr278,radius2,$attr259,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,sy2,sy1,$attr285,$attr284,$attr286,$attr281,$attr280,$attr283,$attr282,$attr269,$attr268,$bool41,$bool40,$attr263,$attr262,$attr261,$attr260,$attr267,$attr266,$attr265,$attr264,sx1,sx2,$cmp4,$cmp3,$attr279;
		if ((($bool40=$p['hasattr'](sprite1, 'radius')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
			radius1 = sprite1['radius'];
		}
		else {
			radius1 = (Math['pow']((Math['pow'](sprite1['rect']['width'],2))+(Math['pow'](sprite1['rect']['height'],2)),0.5))*(0.5);
		}
		if ((($bool41=$p['hasattr'](sprite2, 'radius')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
			radius2 = sprite2['radius'];
		}
		else {
			radius2 = (Math['pow']((Math['pow'](sprite2['rect']['width'],2))+(Math['pow'](sprite2['rect']['height'],2)),0.5))*(0.5);
		}
		sx1 = (sprite1['rect']['x'])+($p['float_int']((sprite1['rect']['width'])*(0.5)));
		sy1 = (sprite1['rect']['y'])+($p['float_int']((sprite1['rect']['height'])*(0.5)));
		sx2 = (sprite2['rect']['x'])+($p['float_int']((sprite2['rect']['width'])*(0.5)));
		sy2 = (sprite2['rect']['y'])+($p['float_int']((sprite2['rect']['height'])*(0.5)));
		return ((($cmp3=(Math['pow']((sx1)-(sx2),2))+(Math['pow']((sy1)-(sy2),2)))===($cmp4=(Math['pow'](radius1,2))+(Math['pow'](radius2,2)))?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == -1);
	};
	$m['collide_circle']['__name__'] = 'collide_circle';

	$m['collide_circle']['__bind_type__'] = 0;
	$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_circle_ratio'] = function(ratio) {
		var obj,$lambda2;
		obj = (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
		var 		$lambda2 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda2;
	};
	$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

	$m['collide_circle_ratio']['__bind_type__'] = 0;
	$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_circle_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var radius1,$attr316,$attr315,radius2,$attr313,$attr312,$attr311,$attr310,$attr319,$attr318,sy2,sy1,$attr314,$bool43,$attr301,$attr287,$cmp5,$attr289,$attr288,$attr322,$attr320,$attr321,$attr304,$attr305,$attr306,$attr307,$attr300,$bool42,$attr302,$attr303,$attr308,$attr309,sx1,sx2,$cmp6,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,$attr317;
			if ((($bool42=$p['hasattr'](sprite1, 'radius')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				radius1 = (sprite1['radius'])*(self['ratio']);
			}
			else {
				radius1 = ((Math['pow']((Math['pow'](sprite1['rect']['width'],2))+(Math['pow'](sprite1['rect']['height'],2)),0.5))*(0.5))*(self['ratio']);
			}
			if ((($bool43=$p['hasattr'](sprite2, 'radius')) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				radius2 = (sprite2['radius'])*(self['ratio']);
			}
			else {
				radius2 = ((Math['pow']((Math['pow'](sprite2['rect']['width'],2))+(Math['pow'](sprite2['rect']['height'],2)),0.5))*(0.5))*(self['ratio']);
			}
			sx1 = (sprite1['rect']['x'])+($p['float_int']((sprite1['rect']['width'])*(0.5)));
			sy1 = (sprite1['rect']['y'])+($p['float_int']((sprite1['rect']['height'])*(0.5)));
			sx2 = (sprite2['rect']['x'])+($p['float_int']((sprite2['rect']['width'])*(0.5)));
			sy2 = (sprite2['rect']['y'])+($p['float_int']((sprite2['rect']['height'])*(0.5)));
			return ((($cmp5=(Math['pow']((sx1)-(sx2),2))+(Math['pow']((sy1)-(sy2),2)))===($cmp6=(Math['pow'](radius1,2))+(Math['pow'](radius2,2)))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1);
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_mask'] = function(sprite1, sprite2) {
		var mask1,mask2,$attr328,$attr329,$attr323,$attr326,$attr327,$attr324,$attr325,$bool46,$bool45,$bool44,$attr338,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
		if ((($bool44=$p['hasattr'](sprite1, 'mask')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
			mask1 = sprite1['mask'];
		}
		else {
			mask1 = $m['mask']['from_surface'](sprite1['image']);
		}
		if ((($bool45=$p['hasattr'](sprite2, 'mask')) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
			mask2 = sprite2['mask'];
		}
		else {
			mask2 = $m['mask']['from_surface'](sprite2['image']);
		}
		if ((($bool46=mask1['overlap'](mask2, $p['tuple']([(sprite2['rect']['x'])-(sprite1['rect']['x']), (sprite2['rect']['y'])-(sprite1['rect']['y'])]))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
			return true;
		}
		else {
			return false;
		}
		return null;
	};
	$m['collide_mask']['__name__'] = 'collide_mask';

	$m['collide_mask']['__bind_type__'] = 0;
	$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
		var $bool50,$bool51,$iter29_type,$iter26_nextval,$iter28_idx,$iter26_idx,$iter26_array,$iter29_iter,$iter27_nextval,$iter30_nextval,$iter27_array,$iter26_type,$iter27_iter,sprite2,$iter27_type,sprite1,$bool47,$iter30_type,$attr340,collide,$bool49,$bool48,$iter29_nextval,$iter30_idx,$iter28_iter,$iter28_type,$iter26_iter,$iter28_array,$iter30_iter,$iter28_nextval,$58,$iter27_idx,$attr339,$iter29_array,$iter30_array,$iter29_idx,$55,$56,$57;
		collide = $p['dict']([]);
		$iter26_iter = group1;
		if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
			$iter26_type = 0;
		} else {
			$iter26_iter = $iter26_iter['__iter__']();
			$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter26_idx = 0;
		while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
			sprite1 = $iter26_nextval;
			$iter27_iter = group2;
			if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
				$iter27_type = 0;
			} else {
				$iter27_iter = $iter27_iter['__iter__']();
				$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter27_idx = 0;
			while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
				sprite2 = $iter27_nextval;
				if ((($bool47=sprite1['rect']['intersects'](sprite2['rect'])) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					if ((($bool48=!collide['__contains__'](sprite1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
						collide['__setitem__'](sprite1, $p['list']([]));
					}
					(typeof ($55=collide)['__array'] != 'undefined'?
						((typeof $55['__array'][$56=sprite1]) != 'undefined'?$55['__array'][$56]:
							$55['__getitem__']($56)):
							$55['__getitem__'](sprite1))['append'](sprite2);
				}
			}
		}
		if ((($bool49=collide) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
			if ((($bool50=dokill1) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				$iter28_iter = collide;
				if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter['__iter__']();
					$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					sprite1 = $iter28_nextval;
					sprite1['kill']();
				}
			}
			if ((($bool51=dokill2) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				$iter29_iter = collide;
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					sprite1 = $iter29_nextval;
					$iter30_iter = (typeof ($57=collide)['__array'] != 'undefined'?
						((typeof $57['__array'][$58=sprite1]) != 'undefined'?$57['__array'][$58]:
							$57['__getitem__']($58)):
							$57['__getitem__'](sprite1));
					if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
						$iter30_type = 0;
					} else {
						$iter30_iter = $iter30_iter['__iter__']();
						$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter30_idx = 0;
					while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
						sprite2 = $iter30_nextval;
						sprite2['kill']();
					}
				}
			}
		}
		return collide;
	};
	$m['groupcollide']['__name__'] = 'groupcollide';

	$m['groupcollide']['__bind_type__'] = 0;
	$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
	$m['spritecollideany'] = function(sprite, group) {
		var $iter31_array,$bool52,$attr341,$attr342,$iter31_nextval,$iter31_idx,$iter31_type,$iter31_iter,sprites;
		$iter31_iter = group;
		if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
			$iter31_type = 0;
		} else {
			$iter31_iter = $iter31_iter['__iter__']();
			$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter31_idx = 0;
		while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
			sprites = $iter31_nextval;
			if ((($bool52=sprite['rect']['intersects'](sprites['rect'])) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				return true;
			}
		}
		return false;
	};
	$m['spritecollideany']['__name__'] = 'spritecollideany';

	$m['spritecollideany']['__bind_type__'] = 0;
	$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['pyjsdl.rect.rectPool', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.mask']
*/

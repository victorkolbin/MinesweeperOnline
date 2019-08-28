/* start module: pyjsdl.mixer */
$pyjs['loaded_modules']['pyjsdl.mixer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mixer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mixer'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mixer'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mixer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mixer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mixer'] = $pyjs['loaded_modules']['pyjsdl.mixer'];


	$m['Audio'] = $p['___import___']('pyjsdl.pyjsobj.Audio', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Mixer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Sound']['_mixer'] = self;
			$m['Channel']['_mixer'] = self;
			self['Sound'] = (typeof Sound == "undefined"?$m['Sound']:Sound);
			self['Channel'] = (typeof Channel == "undefined"?$m['Channel']:Channel);
			self['_channel_max'] = 8;
			self['_channels'] = $p['dict']([]);
			self['_sounds'] = $p['dict']([]);
			self['_channel_reserved'] = $p['list']([]);
			self['_channel_paused'] = $p['list']([]);
			self['_channel_reserves'] = function(){
				var $iter1_nextval,$iter1_type,$attr1,$attr2,$collcomp1,$iter1_iter,$iter1_idx,id,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range']((self['_channel_max'])-(1), -(1), -(1));
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				id = $iter1_nextval;
				$collcomp1['append'](id);
			}

	return $collcomp1;}();
			self['_channel_pool'] = $p['list']([]);
			self['_lines'] = $p['dict']([]);
			self['_line_num'] = 0;
			self['_initialized'] = true;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $attr4,$bool2,$bool1,$attr3;
			if ((($bool2=!(($bool1=self['_initialized']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('pre_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self['init']();
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['pre_init'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['stop']();
			self['_initialized'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['quit'] = $method;
		$method = $pyjs__bind_method2('get_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr5,$attr7,$attr6,$bool3;
			if ((($bool3=self['_initialized']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return self['_initialized'];
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$iter2_nextval,$iter2_type,$iter2_iter,$attr10,$iter2_idx,$2,id,$iter2_array,$1;
			$iter2_iter = self['_channel_pool'];
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				id = $iter2_nextval;
				(typeof ($1=self['_channels'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=id]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](id))['stop']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$5,$3,$iter3_type,id,$6,$pyjs_try_err,$iter3_iter,$bool4,$iter3_array,$attr15,$attr14,$4,$attr16,$attr11,$iter3_nextval,$attr13,$attr12;
			$iter3_iter = self['_channel_pool'];
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				id = $iter3_nextval;
				try {
					if ((($bool4=(typeof ($3=self['_channels'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=id]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](id))['_active']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						self['_channel_paused']['append'](id);
						(typeof ($5=self['_channels'])['__array'] != 'undefined'?
							((typeof $5['__array'][$6=id]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__'](id))['pause']();
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $8,$iter4_nextval,$iter4_idx,$attr18,$iter4_type,$iter4_array,$7,$attr17,$iter4_iter,id;
			$iter4_iter = self['_channel_paused'];
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				id = $iter4_nextval;
				(typeof ($7=self['_channels'])['__array'] != 'undefined'?
					((typeof $7['__array'][$8=id]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](id))['unpause']();
			}
			self['channel_paused'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('set_num_channels', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $iter5_nextval,$iter6_type,$iter5_idx,$9,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$iter5_type,$iter6_iter,id,$iter6_nextval,$iter5_array,$iter6_idx,$attr29,$iter6_array,$attr30,$bool6,$bool5,$10,$cmp4,$cmp1,$cmp3,$cmp2,$iter5_iter,$attr19;
			if ((($bool5=((((($cmp1=count)===($cmp2=self['_channel_max'])?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$iter5_iter = $p['range'](self['_channel_max'], count);
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					id = $iter5_nextval;
					self['_channels']['__setitem__'](id, null);
				}
				self['_channel_max'] = count;
			}
			else if ((($bool6=((((($cmp3=count)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$iter6_iter = $p['range'](count, self['_channel_max']);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					id = $iter6_nextval;
					(typeof ($9=self['_channels'])['__array'] != 'undefined'?
						((typeof $9['__array'][$10=id]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](id))['stop']();
					self['_channels']['__delitem__'](id);
				}
				self['_channel_max'] = count;
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31;
			return self['_channel_max'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('set_reserved', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $attr34,$attr39,$iter8_iter,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,id,$12,$14,$attr38,$pyjs_try_err,$len2,$iter7_type,$cmp5,$iter8_idx,$iter7_iter,$iter8_type,$attr33,$attr37,$bool7,$attr35,$iter7_idx,$bool8,$bool9,$attr46,$cmp7,$cmp6,$11,$iter7_nextval,$13,i,$iter7_array,$iter8_array,$cmp8,$iter8_nextval,reserved_len,$len1,$attr36;
			if ((($bool7=((($cmp5=count)===($cmp6=self['_channel_max'])?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				count = self['_channel_max'];
			}
			reserved_len = (($len1=self['_channel_reserved']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
			if ((($bool8=reserved_len) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=((((($cmp7=reserved_len)===($cmp8=count)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					$iter7_iter = $p['range']((reserved_len)-(count));
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						id = self['_channel_reserved']['pop']();
						(typeof ($11=self['_channels'])['__array'] != 'undefined'?
							((typeof $11['__array'][$12=id]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](id))['_reserved'] = false;
						self['_channel_pool']['append'](id);
					}
					count = 0;
				}
				else {
					count -= (($len2=self['_channel_reserved']) === null?0:
						(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'?$len2['length']:
									$p['len']($len2)))));
				}
			}
			$iter8_iter = $p['range'](reserved_len, (count)+(reserved_len));
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				id = $iter8_nextval;
				try {
					(typeof ($13=self['_channels'])['__array'] != 'undefined'?
						((typeof $13['__array'][$14=id]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](id))['_reserved'] = true;
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						self['_channels']['__setitem__'](id, (typeof Channel == "undefined"?$m['Channel']:Channel)(id));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					self['_channel_pool']['remove'](id);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['_channel_reserved']['append'](id);
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_reserved'] = $method;
		$method = $pyjs__bind_method2('find_channel', function(force) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				force = arguments[1];
			}
			if (typeof force == 'undefined') force=arguments['callee']['__args__'][3][1];
			var $bool18,$bool19,$iter10_nextval,$attr55,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$19,$attr47,$iter10_array,duration,$iter10_iter,$attr56,id,$attr48,$attr49,$29,$28,$attr68,$attr69,$iter9_iter,$21,$20,$22,$iter9_nextval,$iter9_idx,$attr62,$attr63,$attr67,$attr66,$24,$attr70,$iter9_test,channel,$cmp9,$attr58,$and1,$and2,$iter10_idx,$25,$bool17,longest,$27,$30,$attr61,$23,$attr59,$15,$16,$17,$attr51,$attr50,$attr53,$attr52,$18,$attr54,$attr57,$iter9_type,$attr64,$attr60,$26,$attr65,$iter10_type,$iter9_array,$cmp10;
			if ((($bool10=self['_channel_reserves']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				channel = self['_channel_reserves']['pop']();
				if ((($bool11=self['_channels']['__contains__'](channel)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					return (typeof ($15=self['_channels'])['__array'] != 'undefined'?
						((typeof $15['__array'][$16=channel]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](channel));
				}
				else {
					channel = (typeof Channel == "undefined"?$m['Channel']:Channel)(channel);
					return channel;
				}
			}
			else {
				$iter9_iter = self['_channel_pool'];
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while ($iter9_test = typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					id = $iter9_nextval;
					if ((($bool13=!(($bool12=(typeof ($17=self['_channels'])['__array'] != 'undefined'?
						((typeof $17['__array'][$18=id]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](id))['_active']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						return (typeof ($19=self['_channels'])['__array'] != 'undefined'?
							((typeof $19['__array'][$20=id]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](id));
					}
				}
				if (!$iter9_test) {
					if ((($bool14=force) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						channel = null;
						longest = 0;
						$iter10_iter = self['_channel_pool'];
						if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
							$iter10_type = 0;
						} else {
							$iter10_iter = $iter10_iter['__iter__']();
							$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter10_idx = 0;
						while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
							id = $iter10_nextval;
							if ((($bool17=((($bool15=$and1=(typeof ($21=self['_channels'])['__array'] != 'undefined'?
								((typeof $21['__array'][$22=id]) != 'undefined'?$21['__array'][$22]:
									$21['__getitem__']($22)):
									$21['__getitem__'](id))['_sound']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
								false :
								(typeof $bool15=='object'?
									(typeof $bool15['__nonzero__']=='function'?
										$bool15['__nonzero__']() :
										(typeof $bool15['__len__']=='function'?
											($bool15['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!(($bool16=(typeof ($23=self['_channels'])['__array'] != 'undefined'?
								((typeof $23['__array'][$24=id]) != 'undefined'?$23['__array'][$24]:
									$23['__getitem__']($24)):
									$23['__getitem__'](id))['isPaused']()) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
								false :
								(typeof $bool16=='object'?
									(typeof $bool16['__nonzero__']=='function'?
										$bool16['__nonzero__']() :
										(typeof $bool16['__len__']=='function'?
											($bool16['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) ):$and1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
								duration = (typeof ($25=self['_channels'])['__array'] != 'undefined'?
									((typeof $25['__array'][$26=id]) != 'undefined'?$25['__array'][$26]:
										$25['__getitem__']($26)):
										$25['__getitem__'](id))['_sound']['_sound_object']['getCurrentTime']();
								if ((($bool18=((($cmp9=duration)===($cmp10=longest)?0:
									(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
										($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
										$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
									longest = duration;
									channel = (typeof ($27=self['_channels'])['__array'] != 'undefined'?
										((typeof $27['__array'][$28=id]) != 'undefined'?$27['__array'][$28]:
											$27['__getitem__']($28)):
											$27['__getitem__'](id));
								}
							}
							else {
								channel = (typeof ($29=self['_channels'])['__array'] != 'undefined'?
									((typeof $29['__array'][$30=id]) != 'undefined'?$29['__array'][$30]:
										$29['__getitem__']($30)):
										$29['__getitem__'](id));
								break;
							}
						}
						if ((($bool19=channel) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
							channel['stop']();
							return channel;
						}
						else {
							return null;
						}
					}
					else {
						return null;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['force', false]]);
		$cls_definition['find_channel'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr73,$attr74,$iter11_iter,$iter11_type,$32,$attr72,$attr71,$31,$pyjs_try_err,$bool20,$iter11_array,$iter11_nextval,$iter11_idx,id;
			$iter11_iter = self['_channel_pool'];
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				id = $iter11_nextval;
				try {
					if ((($bool20=(typeof ($31=self['_channels'])['__array'] != 'undefined'?
						((typeof $31['__array'][$32=id]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__'](id))['_active']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						return true;
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('_register_channel', function(channel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				channel = arguments[1];
			}
			var $attr88,id,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr89,$pyjs_try_err,$bool21,$bool22,$cmp11,$cmp12,$attr90,$attr79,$attr78,$attr77,$attr76,$34,$35,$33,$36,$attr75;
			id = channel['_id'];
			if ((($bool21=((($cmp11=id)===($cmp12=self['_channel_max'])?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				try {
					if ((($bool22=(typeof ($33=self['_channels'])['__array'] != 'undefined'?
						((typeof $33['__array'][$34=id]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](id))['_sound']) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						channel['_sound'] = (typeof ($35=self['_channels'])['__array'] != 'undefined'?
							((typeof $35['__array'][$36=id]) != 'undefined'?$35['__array'][$36]:
								$35['__getitem__']($36)):
								$35['__getitem__'](id))['_sound'];
						self['_channels']['__setitem__'](id, channel);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						self['_channels']['__setitem__'](id, channel);
						self['_channel_pool']['append'](id);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else {
				throw ($p['AttributeError']('Channel not available.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['channel']]);
		$cls_definition['_register_channel'] = $method;
		$method = $pyjs__bind_method2('_register_sound', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}
			var $attr94,$attr91,$attr93,$attr92;
			self['_sounds']['__setitem__'](sound['_id'], sound);
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['_register_sound'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['fadeout'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mixer', $p['tuple']($bases), $data);
	})();
	$m['Sound'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_id'] = 0;
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(sound_file, id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound_file = arguments[1];
				id = arguments[2];
			}
			if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
			var $attr95,$attr96,$bool24,$bool23;
			if ((($bool23=(id === null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				self['_id'] = $m['Sound']['_id'];
				$m['Sound']['_id'] += 1;
				self['_mixer']['_register_sound'](self);
			}
			else {
				self['_id'] = id;
			}
			if ((($bool24=$p['isinstance'](sound_file, $p['str'])) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				self['_sound_object'] = $m['Audio'](sound_file['$$replace']('\\', '/'));
			}
			else {
				self['_sound_object'] = sound_file;
			}
			self['_sound_objects'] = $p['list']([]);
			self['_channel'] = null;
			self['_ch'] = null;
			self['_volume'] = 1.0;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['sound_file'],['id', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('play', function(loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
				maxtime = arguments[2];
				fade_ms = arguments[3];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][3][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][4][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][5][1];
			var $attr106,$bool27,$bool25,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$bool29,$bool28,$attr108,$bool26,sound,$attr97,$attr99,$attr98,$bool30,$bool31;
			if ((($bool26=!(($bool25=self['_channel']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['_channel'] = self['_mixer']['find_channel']();
				if ((($bool27=self['_channel']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					self['_channel']['_set_sound'](self);
				}
				else {
					return null;
				}
			}
			if ((($bool28=self['_sound_object']['isPaused']()) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				self['_ch'] = self['_channel'];
			}
			else {
				self['_ch'] = self['_mixer']['find_channel']();
				if ((($bool29=self['_ch']) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					sound = $m['Sound'](self['_sound_object']['getSrc'](), self['_id']);
					self['_ch']['_set_sound'](sound);
				}
				else {
					return null;
				}
			}
			if ((($bool31=!(($bool30=loops) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30['__nonzero__']=='function'?
						$bool30['__nonzero__']() :
						(typeof $bool30['__len__']=='function'?
							($bool30['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				self['_ch']['_play']();
			}
			else {
				self['_ch']['_play_repeat'](loops);
			}
			return self['_ch'];
		}
	, 1, [null,null,['self'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool32,$attr110,$attr109;
			if ((($bool32=self['_channel']) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				self['_channel']['stop']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $cmp15,$bool34,$bool33,$attr111,$attr112,$cmp14,$cmp16,$cmp13;
			if ((($bool33=((($cmp13=volume)===($cmp14=0.0)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				volume = 0.0;
			}
			else if ((($bool34=((($cmp15=volume)===($cmp16=1.0)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				volume = 1.0;
			}
			self['_volume'] = volume;
			self['_sound_object']['setVolume'](self['_volume']);
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr113,$attr114;
			return self['_volume'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr119,$attr118,$38,$eq2,$attr115,$iter12_type,$eq1,$iter12_array,$pyjs_try_err,$attr117,$iter12_nextval,$iter12_iter,$attr120,$37,id,$attr116,$iter12_idx,channel,$bool35;
			channel = 0;
			$iter12_iter = self['_mixer']['_channel_pool'];
			if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter['__iter__']();
				$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				id = $iter12_nextval;
				try {
					if ((($bool35=(($eq1=(typeof ($37=self['_mixer']['_channels'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=id]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](id))['_sound']['_id'])===($eq2=self['_id'])&&$eq1===null?true:
						($eq1===null?false:($eq2===null?false:
							((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
								((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
									$eq1==$eq2)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
						channel += 1;
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return channel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_length', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sound_object']['getDuration']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_length'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda3,$lambda2;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['fadeout'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['get_buffer'] = $lambda3;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sound', $p['tuple']($bases), $data);
	})();
	$m['Channel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			self['_id'] = id;
			self['_sound'] = null;
			self['_active'] = false;
			self['_pause'] = false;
			self['_loops'] = 0;
			self['_volume'] = 1.0;
			self['_lvolume'] = 1.0;
			self['_rvolume'] = 1.0;
			self['_mixer']['_register_channel'](self);
			self['_time'] = $m['Time']();
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_set_sound', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}
			var $attr121,$bool36,$attr122;
			if ((($bool36=self['_sound']) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				self['_sound']['_channel'] = null;
			}
			self['_sound'] = sound;
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['_set_sound'] = $method;
		$method = $pyjs__bind_method2('_play', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_volume'] = 1.0;
			self['_lvolume'] = 1.0;
			self['_rvolume'] = 1.0;
			self['_active'] = true;
			self['_sound']['_sound_object']['play']();
			self['_time']['timeout']((self['_sound']['_sound_object']['getDuration']())*(1000), self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_play'] = $method;
		$method = $pyjs__bind_method2('_play_repeat', function(loops) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
			}
			var $bool37,$cmp17,$cmp18;
			if ((($bool37=((($cmp17=loops)===($cmp18=0)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				self['_loops'] = loops;
			}
			else {
				self['_loops'] = -(1);
			}
			self['_play']();
			return null;
		}
	, 1, [null,null,['self'],['loops']]);
		$cls_definition['_play_repeat'] = $method;
		$method = $pyjs__bind_method2('play', function(sound, loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
				loops = arguments[2];
				maxtime = arguments[3];
				fade_ms = arguments[4];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][4][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][5][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][6][1];
			var $bool40,$attr123,$attr124,$bool39,$bool38;
			if ((($bool38=self['_sound']) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				self['stop']();
			}
			self['_set_sound'](sound);
			if ((($bool40=!(($bool39=loops) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39['__nonzero__']=='function'?
						$bool39['__nonzero__']() :
						(typeof $bool39['__len__']=='function'?
							($bool39['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				self['_play']();
			}
			else {
				self['_play_repeat'](loops);
			}
			return null;
		}
	, 1, [null,null,['self'],['sound'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool43,$bool42,$bool41,$cmp20,$attr125,$attr126,$attr127,$attr128,$cmp19;
			if ((($bool42=!(($bool41=self['_loops']) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
				self['_active'] = false;
			}
			else {
				if ((($bool43=((($cmp19=self['_loops'])===($cmp20=0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					self['_loops'] -= 1;
				}
				self['_play']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr129,$attr130,$bool44;
			if ((($bool44=self['_sound']) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				self['_sound']['_sound_object']['pause']();
				self['_sound']['_sound_object']['setCurrentTime'](0);
				self['_pause'] = false;
				self['_loops'] = 0;
				self['_active'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool47,$bool46,$bool45,$attr133,$attr132,$attr131,$attr134;
			if ((($bool45=self['_sound']) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				if ((($bool47=!(($bool46=self['_pause']) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					self['_sound']['_sound_object']['pause']();
					self['_pause'] = true;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool49,$bool48,$attr137,$attr136,$attr135,$attr138;
			if ((($bool48=self['_sound']) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				if ((($bool49=self['_pause']) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					self['_sound']['_sound_object']['play']();
					self['_pause'] = false;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $attr142,$attr143,$attr140,$attr141,$bool50,$bool51,$bool52,$cmp21,$cmp22,$cmp23,$cmp24,$attr139,$attr144;
			if ((($bool50=((($cmp21=volume)===($cmp22=0.0)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				volume = 0.0;
			}
			else if ((($bool51=((($cmp23=volume)===($cmp24=1.0)?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				volume = 1.0;
			}
			self['_volume'] = volume;
			if ((($bool52=self['_sound']) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				self['_sound']['_sound_object']['setVolume']((self['_volume'])*(self['_sound']['_sound_object']['_volume']));
			}
			else {
				self['_volume'] = 1.0;
			}
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr146,$attr145;
			return self['_volume'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr148,$attr147;
			return self['_active'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('get_sound', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr149,$attr150;
			return self['_sound'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_sound'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda8;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['fadeout'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['queue'] = $lambda5;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['get_queue'] = $lambda6;
			var 			$lambda7 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = ['arg',null];
			self['set_endevent'] = $lambda7;
			var 			$lambda8 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = ['arg',null];
			self['get_endevent'] = $lambda8;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Channel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mixer */


/* end module: pyjsdl.mixer */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.Audio', 'pyjsdl', 'pyjsdl.pyjsobj', 'pyjsdl.time.Time', 'pyjsdl.time']
*/

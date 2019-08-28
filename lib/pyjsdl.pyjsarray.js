/* start module: pyjsdl.pyjsarray */
$pyjs['loaded_modules']['pyjsdl.pyjsarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsarray';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsarray'] = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];


	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['PyTypedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length, typedarray) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
				typedarray = arguments[4];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			if (typeof typedarray == 'undefined') typedarray=arguments['callee']['__args__'][6][1];
			var $and2,$bool10,$bool8,$attr1,$and1,$attr2,$attr4,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$bool9,$attr3;
			if ((($bool1=data) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool2=$p['isinstance'](data, $p['float_int'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					if ((($bool3=$m['pyjs_mode']['optimized']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['__data'] = new typedarray(data);
					}
					else {
						self['__data'] = new typedarray(data['valueOf']());
					}
				}
				else if ((($bool4=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					if ((($bool5=$m['pyjs_mode']['optimized']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						self['__data'] = new typedarray(data['getArray']());
					}
					else {
						data = function(){
							var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,dat,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = data;
						if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter['__iter__']();
							$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							dat = $iter1_nextval;
							$collcomp1['append'](dat['valueOf']());
						}

	return $collcomp1;}();
						self['__data'] = new typedarray(data['getArray']());
					}
				}
				else if ((($bool6=$p['isinstance'](data, $m['PyTypedArray'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['__data'] = new typedarray(data['__data']);
				}
				else {
					if ((($bool8=((($bool7=$and1=(offset === null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(length === null):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						self['__data'] = new typedarray(data);
					}
					else {
						if ((($bool9=(offset === null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							offset = 0;
						}
						if ((($bool10=(length === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
							self['__data'] = new typedarray(data, offset);
						}
						else {
							self['__data'] = new typedarray(data, offset, length);
						}
					}
				}
			}
			else {
				self['__data'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null],['typedarray', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__data']['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$cmp4,$cmp1,$cmp3,$cmp2,$bool11,$attr5,$attr7,$attr6,$4,$attr8,$3,$2,$bool12,$1;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool12=((($cmp3=index)===($cmp4=self['__data']['length'])?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = (typeof ($3=self)['__array'] != 'undefined'?
								((typeof $3['__array'][$4=index]) != 'undefined'?$3['__array'][$4]:
									$3['__getitem__']($4)):
									$3['__getitem__'](index));
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index += 1;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $p['float_int'](self['__data'][index]);;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $attr9,$bool13,$attr10;
			if ((($bool13=$m['pyjs_mode']['optimized']) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
self['__data'][index]=value;
			}
			else {
				value = value['valueOf']();
self['__data'][index]=value;
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return self['__data']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			var $bool14,$bool15,$bool16,$attr15,$attr14,$attr16,$attr13;
			if ((($bool14=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				if ((($bool15=$m['pyjs_mode']['optimized']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['__data']['set'](data['getArray'](), offset);
				}
				else {
					data = function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,dat,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = data;
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						dat = $iter2_nextval;
						$collcomp2['append'](dat['valueOf']());
					}

	return $collcomp2;}();
					self['__data']['set'](data['getArray'](), offset);
				}
			}
			else if ((($bool16=$p['isinstance'](data, $m['PyTypedArray'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self['__data']['set'](data['__data'], offset);
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var pytypedarray,$bool17,$attr18,$attr17,array;
			if ((($bool17=(end === null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				end = self['__data']['length'];
			}
			array = self['__data']['subarray'](begin, end);
			pytypedarray = self['__class__']();
			pytypedarray['__data'] = array;
			return pytypedarray;
		}
	, 1, [null,null,['self'],['begin'],['end', null]]);
		$cls_definition['subarray'] = $method;
		$method = $pyjs__bind_method2('getLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return self['__data']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLength'] = $method;
		$method = $pyjs__bind_method2('getByteLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return self['__data']['byteLength'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteLength'] = $method;
		$method = $pyjs__bind_method2('getBuffer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return self['__data']['buffer'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBuffer'] = $method;
		$method = $pyjs__bind_method2('getByteOffset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return self['__data']['byteOffset'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteOffset'] = $method;
		$method = $pyjs__bind_method2('getBytesPerElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr28,$attr27;
			return self['__data']['BYTES_PER_ELEMENT'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBytesPerElement'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr29,$attr30;
			return self['__data'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('setArray', function(array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
			}

			self['__data'] = array;
			return null;
		}
	, 1, [null,null,['self'],['array']]);
		$cls_definition['setArray'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyTypedArray', $p['tuple']($bases), $data);
	})();
	$m['PyUint8ClampedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool18,$pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool18=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint8ClampedArray', $p['tuple']($bases), $data);
	})();
	$m['PyUint8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool19,$pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8Array == "undefined"?$m['Uint8Array']:Uint8Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool19=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint8Array', $p['tuple']($bases), $data);
	})();
	$m['PyUint16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err,$bool20;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint16Array == "undefined"?$m['Uint16Array']:Uint16Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool20=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint16Array', $p['tuple']($bases), $data);
	})();
	$m['PyUint32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err,$bool21;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint32Array == "undefined"?$m['Uint32Array']:Uint32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool21=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint32Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err,$bool22;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int8Array == "undefined"?$m['Int8Array']:Int8Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool22=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt8Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err,$bool23;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int16Array == "undefined"?$m['Int16Array']:Int16Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool23=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt16Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool24,$pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int32Array == "undefined"?$m['Int32Array']:Int32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool24=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt32Array', $p['tuple']($bases), $data);
	})();
	$m['PyFloat32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool25,$pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float32Array == "undefined"?$m['Float32Array']:Float32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool25=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['__data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyFloat32Array', $p['tuple']($bases), $data);
	})();
	$m['PyFloat64Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err,$bool26;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float64Array == "undefined"?$m['Float64Array']:Float64Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool26=$p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['__data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyFloat64Array', $p['tuple']($bases), $data);
	})();
	$m['PyCanvasPixelArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];

			$m['PyTypedArray']['__init__'](self, data, offset, length);
			self['_superArray'] = null;
			self['_superIndex'] = $p['tuple']([0, 0]);
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr35,$attr34,$attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,index,$5,$bool27,$bool29,$bool28,$14,$16,$attr33,$attr32,$attr31,$attr37,$attr36,$8,$9,$6,$7,$attr39,$attr38,$cmp5,$15,$cmp7,$cmp6,$10,$11,$12,$13,$cmp8,$bool32,$bool30,$bool31;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool31=!(($bool30=self['_superArray']) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$m['PyTypedArray']['__iter__'](self);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = (typeof ($11=self['_superIndex'])['__array'] != 'undefined'?
								((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
									$11['__getitem__']($12)):
									$11['__getitem__'](0));
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool32=((($cmp7=index)===($cmp8=(typeof ($13=self['_superIndex'])['__array'] != 'undefined'?
								((typeof $13['__array'][$14=1]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](1)))?0:
								(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
									($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
									$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
									false :
									(typeof $bool32=='object'?
										(typeof $bool32['__nonzero__']=='function'?
											$bool32['__nonzero__']() :
											(typeof $bool32['__len__']=='function'?
												($bool32['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = (typeof ($15=self['_superArray'])['__array'] != 'undefined'?
										((typeof $15['__array'][$16=index]) != 'undefined'?$15['__array'][$16]:
											$15['__getitem__']($16)):
											$15['__getitem__'](index));
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $17,$attr47,$attr50,$18,$bool33,$bool34,$attr48,$attr49;
			if ((($bool34=!(($bool33=self['_superArray']) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33['__nonzero__']=='function'?
						$bool33['__nonzero__']() :
						(typeof $bool33['__len__']=='function'?
							($bool33['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				return $m['PyTypedArray']['__getitem__'](self, index);
			}
			else {
				return self['_superArray']['__getitem__']((index)+((typeof ($17=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](0))));
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $attr51,$20,$attr52,$attr54,$19,$bool36,$bool35,$attr53;
			if ((($bool36=!(($bool35=self['_superArray']) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
				false :
				(typeof $bool35=='object'?
					(typeof $bool35['__nonzero__']=='function'?
						$bool35['__nonzero__']() :
						(typeof $bool35['__len__']=='function'?
							($bool35['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				$m['PyTypedArray']['__setitem__'](self, index, value);
			}
			else {
				self['_superArray']['__setitem__']((index)+((typeof ($19=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](0))), value);
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			var index,$23,$iter3_idx,$iter3_array,$attr58,$21,$iter3_type,$attr55,$22,$attr57,$attr56,$len1,$bool37,$24,$bool38,$iter3_nextval,$iter3_iter;
			if ((($bool38=!(($bool37=self['_superArray']) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
				false :
				(typeof $bool37=='object'?
					(typeof $bool37['__nonzero__']=='function'?
						$bool37['__nonzero__']() :
						(typeof $bool37['__len__']=='function'?
							($bool37['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				$iter3_iter = $p['xrange']((($len1=data) === null?0:
					(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'?$len1['length']:
								$p['len']($len1))))));
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					index = $iter3_nextval;
					self['__setitem__']((index)+(offset), (typeof ($21=data)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=index]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](index)));
				}
			}
			else {
				self['_superArray']['set'](data, (offset)+((typeof ($23=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $23['__array'][$24=0]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](0))));
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var $attr59,$attr60,$attr61,$attr62,array,$bool39;
			if ((($bool39=(end === null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				end = self['__data']['length'];
			}
			array = self['__class__']();
			array['__data'] = self['__data'];
			array['_superArray'] = self;
			array['_superIndex'] = $p['tuple']([begin, end]);
			return array;
		}
	, 1, [null,null,['self'],['begin'],['end', null]]);
		$cls_definition['subarray'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyCanvasPixelArray', $p['tuple']($bases), $data);
	})();
	$m['Ndarray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__typedarray'] = $p['dict']([[0, $m['PyUint8ClampedArray']], [1, $m['PyUint8Array']], [2, $m['PyUint16Array']], [3, $m['PyUint32Array']], [4, $m['PyInt8Array']], [5, $m['PyInt16Array']], [6, $m['PyInt32Array']], [7, $m['PyFloat32Array']], [8, $m['PyFloat64Array']]]);
		$method = $pyjs__bind_method2('__init__', function(dim, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
				dtype = arguments[2];
			}
			if (typeof dtype == 'undefined') dtype=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$35,$31,$iter5_array,$33,$iter5_iter,$attr71,$iter4_type,$iter5_type,$26,$iter4_iter,size,$29,$28,$attr68,$attr69,$attr64,$attr65,$attr67,$25,$27,$attr63,$attr73,$iter5_idx,$bool42,$bool41,$bool40,indices,i,$iter4_nextval,$34,$attr74,$32,$attr72,$30,$attr70,$iter4_idx,$36,$len2,$len3,$iter4_array,$attr66;
			self['_dtype'] = dtype;
			if ((($bool40=$p['isinstance'](dim, $p['tuple'])) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				size = 1;
				$iter4_iter = dim;
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					size *= i;
				}
				self['__data'] = (typeof ($25=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
					((typeof $25['__array'][$26=dtype]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](dtype))(size);
				self['_shape'] = dim;
				indices = $p['list']([]);
				$iter5_iter = self['_shape'];
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					size /= i;
					indices['append'](size);
				}
				self['_indices'] = $p['tuple'](indices);
			}
			else if ((($bool41=$p['isinstance'](dim, $p['float_int'])) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
				self['__data'] = (typeof ($27=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28=dtype]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](dtype))(dim);
				self['_shape'] = $p['tuple']([dim]);
				self['_indices'] = $p['tuple']([(typeof ($29=self['_shape'])['__array'] != 'undefined'?
					((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](0))]);
			}
			else if ((($bool42=$p['isinstance'](dim, $p['list'])) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				self['__data'] = (typeof ($31=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
					((typeof $31['__array'][$32=dtype]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](dtype))(dim);
				self['_shape'] = $p['tuple']([(($len2=dim) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2)))))]);
				self['_indices'] = $p['tuple']([(typeof ($33=self['_shape'])['__array'] != 'undefined'?
					((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](0))]);
			}
			else {
				self['__data'] = dim;
				self['_shape'] = $p['tuple']([(($len3=dim) === null?0:
					(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'?$len3['length']:
								$p['len']($len3)))))]);
				self['_indices'] = $p['tuple']([(typeof ($35=self['_shape'])['__array'] != 'undefined'?
					((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](0))]);
			}
			return null;
		}
	, 1, [null,null,['self'],['dim'],['dtype', 8]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('shape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr76,$attr75;
			return self['_shape'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['shape'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('shape', function(dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
			}

			self['setshape'](dim);
			return null;
		}
	, 1, [null,null,['self'],['dim']]);
		$cls_definition['shape'] = $cls_definition['shape']['setter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var indexLn,$bool45,$attr104,array,$attr80,end,$attr87,$attr85,$attr89,$len4,$attr106,$attr105,$49,$48,$attr102,$attr103,$attr100,$attr101,subarray,$41,$47,begin,$bool44,$bool43,$attr93,$eq2,$eq3,$eq1,$eq4,$42,$attr86,$attr95,$attr94,$attr97,$attr96,$attr91,$attr90,$attr79,$attr78,$attr77,$attr92,$attr99,$attr98,shapeLn,$len5,$50,$51,$52,$53,$54,$attr88;
			if ((($bool43=$p['hasattr'](index, '__len__')) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([index['__len__'](), (($len4=self['_shape']) === null?0:
					(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'?$len4['length']:
								$p['len']($len4)))))]), 2, null);
				indexLn = $tupleassign1[0];
				shapeLn = $tupleassign1[1];
				if ((($bool44=(($eq1=indexLn)===($eq2=shapeLn)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					return (typeof ($41=self['__data'])['__array'] != 'undefined'?
						((typeof $41['__array'][$42=$p['sum'](function(){
						var $attr82,$attr81,$38,$iter6_idx,$39,$iter6_type,$37,$collcomp3,i,$iter6_array,$iter6_iter,$40,$iter6_nextval;
	$collcomp3 = $p['list']();
					$iter6_iter = $p['range'](indexLn);
					if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter['__iter__']();
						$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						$collcomp3['append'](((typeof ($37=index)['__array'] != 'undefined'?
							((typeof $37['__array'][$38=i]) != 'undefined'?$37['__array'][$38]:
								$37['__getitem__']($38)):
								$37['__getitem__'](i)))*((typeof ($39=self['_indices'])['__array'] != 'undefined'?
							((typeof $39['__array'][$40=i]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](i))));
					}

	return $collcomp3;}())]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__']($p['sum'](function(){
						var $attr82,$attr81,$38,$iter6_idx,$39,$iter6_type,$37,$collcomp3,i,$iter6_array,$iter6_iter,$40,$iter6_nextval;
	$collcomp3 = $p['list']();
					$iter6_iter = $p['range'](indexLn);
					if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter['__iter__']();
						$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						$collcomp3['append'](((typeof ($37=index)['__array'] != 'undefined'?
							((typeof $37['__array'][$38=i]) != 'undefined'?$37['__array'][$38]:
								$37['__getitem__']($38)):
								$37['__getitem__'](i)))*((typeof ($39=self['_indices'])['__array'] != 'undefined'?
							((typeof $39['__array'][$40=i]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](i))));
					}

	return $collcomp3;}())));
				}
				else {
					begin = $p['sum'](function(){
						var $attr83,$iter7_array,$attr84,$iter7_nextval,i,$iter7_iter,$collcomp4,$iter7_idx,$43,$iter7_type,$46,$45,$44;
	$collcomp4 = $p['list']();
					$iter7_iter = $p['range'](indexLn);
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						$collcomp4['append'](((typeof ($43=index)['__array'] != 'undefined'?
							((typeof $43['__array'][$44=i]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](i)))*((typeof ($45=self['_indices'])['__array'] != 'undefined'?
							((typeof $45['__array'][$46=i]) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__'](i))));
					}

	return $collcomp4;}());
					end = (begin)+((typeof ($47=self['_indices'])['__array'] != 'undefined'?
						((typeof $47['__array'][$48=(indexLn)-(1)]) != 'undefined'?$47['__array'][$48]:
							$47['__getitem__']($48)):
							$47['__getitem__']((indexLn)-(1))));
					subarray = self['__data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, self['_dtype']);
					array['_shape'] = $p['__getslice'](self['_shape'], indexLn, null);
					array['_indices'] = $p['__getslice'](self['_indices'], indexLn, null);
					return array;
				}
			}
			else {
				if ((($bool45=(($eq3=(($len5=self['_shape']) === null?0:
					(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'?$len5['length']:
								$p['len']($len5))))))===($eq4=1)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					return (typeof ($49=self['__data'])['__array'] != 'undefined'?
						((typeof $49['__array'][$50=index]) != 'undefined'?$49['__array'][$50]:
							$49['__getitem__']($50)):
							$49['__getitem__'](index));
				}
				else {
					begin = (index)*((typeof ($51=self['_indices'])['__array'] != 'undefined'?
						((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__'](0)));
					end = (begin)+((typeof ($53=self['_indices'])['__array'] != 'undefined'?
						((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
							$53['__getitem__']($54)):
							$53['__getitem__'](0)));
					subarray = self['__data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, self['_dtype']);
					array['_shape'] = $p['__getslice'](self['_shape'], 1, null);
					array['_indices'] = $p['__getslice'](self['_indices'], 1, null);
					return array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $bool54,$bool50,$bool51,$bool52,$bool53,indexLn,$eq8,$attr117,end,$attr121,$attr120,$attr107,$attr122,$attr123,$attr124,$68,$attr126,$attr127,$65,subarray,$67,$66,$63,$attr109,$72,begin,$69,$attr125,$eq6,$eq7,$bool49,$bool48,$attr128,$64,$eq5,unpack,$attr119,$attr118,$70,$71,$attr110,$attr115,$attr116,$len6,$len7,shapeLn,$attr108;
			unpack = function(obj, lst) {
				if (typeof lst == 'undefined') lst=arguments['callee']['__args__'][3][1];
				var $bool47,$bool46,$iter8_type,$iter8_array,element,$iter8_iter,$iter8_nextval,$iter8_idx;
				if ((($bool46=(lst === null)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					lst = $p['list']([]);
				}
				$iter8_iter = obj;
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					element = $iter8_nextval;
					if ((($bool47=$p['isinstance'](element, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
						unpack(element, lst);
					}
					else {
						lst['append'](element);
					}
				}
				return lst;
			};
			unpack['__name__'] = 'unpack';

			unpack['__bind_type__'] = 0;
			unpack['__args__'] = [null,null,['obj'],['lst', null]];
			if ((($bool48=$p['hasattr'](index, '__len__')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([index['__len__'](), (($len6=self['_shape']) === null?0:
					(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'?$len6['length']:
								$p['len']($len6)))))]), 2, null);
				indexLn = $tupleassign2[0];
				shapeLn = $tupleassign2[1];
				if ((($bool49=(($eq5=indexLn)===($eq6=shapeLn)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					self['__data']['__setitem__']($p['sum'](function(){
						var $iter9_iter,i,$collcomp5,$attr112,$iter9_nextval,$iter9_idx,$iter9_type,$58,$attr111,$57,$iter9_array,$56,$55;
	$collcomp5 = $p['list']();
					$iter9_iter = $p['range'](indexLn);
					if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter['__iter__']();
						$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						i = $iter9_nextval;
						$collcomp5['append'](((typeof ($55=index)['__array'] != 'undefined'?
							((typeof $55['__array'][$56=i]) != 'undefined'?$55['__array'][$56]:
								$55['__getitem__']($56)):
								$55['__getitem__'](i)))*((typeof ($57=self['_indices'])['__array'] != 'undefined'?
							((typeof $57['__array'][$58=i]) != 'undefined'?$57['__array'][$58]:
								$57['__getitem__']($58)):
								$57['__getitem__'](i))));
					}

	return $collcomp5;}()), value);
				}
				else {
					begin = $p['sum'](function(){
						var $iter10_nextval,i,$collcomp6,$iter10_idx,$attr114,$iter10_array,$59,$attr113,$iter10_type,$iter10_iter,$61,$60,$62;
	$collcomp6 = $p['list']();
					$iter10_iter = $p['range'](indexLn);
					if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter['__iter__']();
						$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						i = $iter10_nextval;
						$collcomp6['append'](((typeof ($59=index)['__array'] != 'undefined'?
							((typeof $59['__array'][$60=i]) != 'undefined'?$59['__array'][$60]:
								$59['__getitem__']($60)):
								$59['__getitem__'](i)))*((typeof ($61=self['_indices'])['__array'] != 'undefined'?
							((typeof $61['__array'][$62=i]) != 'undefined'?$61['__array'][$62]:
								$61['__getitem__']($62)):
								$61['__getitem__'](i))));
					}

	return $collcomp6;}());
					end = (begin)+((typeof ($63=self['_indices'])['__array'] != 'undefined'?
						((typeof $63['__array'][$64=(indexLn)-(1)]) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__']((indexLn)-(1))));
					subarray = self['__data']['subarray'](begin, end);
					if ((($bool50=$p['isinstance'](value, $m['Ndarray'])) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
						value = value['__data'];
					}
					else {
						if ((($bool51=$p['isinstance']((typeof ($65=value)['__array'] != 'undefined'?
							((typeof $65['__array'][$66=0]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			else {
				if ((($bool52=(($eq7=(($len7=self['_shape']) === null?0:
					(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'?$len7['length']:
								$p['len']($len7))))))===($eq8=1)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
					self['__data']['__setitem__'](index, value);
				}
				else {
					begin = (index)*((typeof ($67=self['_indices'])['__array'] != 'undefined'?
						((typeof $67['__array'][$68=0]) != 'undefined'?$67['__array'][$68]:
							$67['__getitem__']($68)):
							$67['__getitem__'](0)));
					end = (begin)+((typeof ($69=self['_indices'])['__array'] != 'undefined'?
						((typeof $69['__array'][$70=0]) != 'undefined'?$69['__array'][$70]:
							$69['__getitem__']($70)):
							$69['__getitem__'](0)));
					subarray = self['__data']['subarray'](begin, end);
					if ((($bool53=$p['isinstance'](value, $m['Ndarray'])) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
						value = value['__data'];
					}
					else {
						if ((($bool54=$p['isinstance']((typeof ($71=value)['__array'] != 'undefined'?
							((typeof $71['__array'][$72=0]) != 'undefined'?$71['__array'][$72]:
								$71['__getitem__']($72)):
								$71['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}
			var $attr130,subarray,$attr129;
			subarray = self['__data']['subarray'](lower, upper);
			return $m['Ndarray'](subarray, self['_dtype']);
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var subarray;
			subarray = self['__data']['subarray'](lower, upper);
			subarray['set'](data);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool55,$bool56,$bool57,$attr153,$attr159,$attr152,$bool58,$bool59,$88,$cmp20,$92,array,$attr142,index,$attr140,$attr141,end,$attr147,$attr144,$attr145,$attr164,$attr165,$attr149,$attr160,$attr161,$attr162,$attr163,$attr166,$91,$90,$86,subarray,$bool60,begin,$89,$attr143,$87,$attr151,$85,$84,$83,$82,$81,$80,$cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$attr146,$cmp19,$cmp18,$attr150,$attr155,$73,$attr157,$attr156,$76,$77,$74,$75,$78,$79,$cmp9,$attr158,$attr154,$attr133,$attr132,$attr131,$attr137,$attr136,$attr135,$attr134,$attr139,$attr138,$attr148,$len8,$len9;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool58=((($cmp15=(($len9=self['_shape']) === null?0:
						(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
							(typeof $len9['__len__'] == 'function'?$len9['__len__']():
								(typeof $len9['length'] != 'undefined'?$len9['length']:
									$p['len']($len9))))))===($cmp16=1)?0:
						(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
							($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
							$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
							false :
							(typeof $bool58=='object'?
								(typeof $bool58['__nonzero__']=='function'?
									$bool58['__nonzero__']() :
									(typeof $bool58['__len__']=='function'?
										($bool58['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool59=((($cmp17=index)===($cmp18=(typeof ($83=self['_shape'])['__array'] != 'undefined'?
								((typeof $83['__array'][$84=0]) != 'undefined'?$83['__array'][$84]:
									$83['__getitem__']($84)):
									$83['__getitem__'](0)))?0:
								(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
									($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
									$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
									false :
									(typeof $bool59=='object'?
										(typeof $bool59['__nonzero__']=='function'?
											$bool59['__nonzero__']() :
											(typeof $bool59['__len__']=='function'?
												($bool59['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									begin = (index)*((typeof ($85=self['_indices'])['__array'] != 'undefined'?
										((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
											$85['__getitem__']($86)):
											$85['__getitem__'](0)));
									end = (begin)+((typeof ($87=self['_indices'])['__array'] != 'undefined'?
										((typeof $87['__array'][$88=0]) != 'undefined'?$87['__array'][$88]:
											$87['__getitem__']($88)):
											$87['__getitem__'](0)));
									subarray = self['__data']['subarray'](begin, end);
									array = $m['Ndarray'](subarray, self['_dtype']);
									array['_shape'] = $p['__getslice'](self['_shape'], 1, null);
									array['_indices'] = $p['__getslice'](self['_indices'], 1, null);
									$yield_value = array;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool60=((($cmp19=index)===($cmp20=(typeof ($89=self['_shape'])['__array'] != 'undefined'?
								((typeof $89['__array'][$90=0]) != 'undefined'?$89['__array'][$90]:
									$89['__getitem__']($90)):
									$89['__getitem__'](0)))?0:
								(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
									($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
									$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
									false :
									(typeof $bool60=='object'?
										(typeof $bool60['__nonzero__']=='function'?
											$bool60['__nonzero__']() :
											(typeof $bool60['__len__']=='function'?
												($bool60['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = (typeof ($91=self['__data'])['__array'] != 'undefined'?
										((typeof $91['__array'][$92=index]) != 'undefined'?$91['__array'][$92]:
											$91['__getitem__']($92)):
											$91['__getitem__'](index));
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $98,$99,$95,$96,$97,$cmp21,$cmp22,tab,$eq11,$eq12,$eq13,$eq14,$attr169,$pyjs_try_err,array_str,$100,$bool63,$bool62,$bool65,$bool64,$bool66,count,$len11,$len12,$len13,i,$attr172,$attr171,$attr170,alst;
			array_str = function(array, width, strval) {
				var $len10,$bool61,$eq9,$94,alst,$attr167,$iter12_array,$93,$iter12_iter,a,$eq10,$attr168,$iter12_idx,$iter12_nextval,$iter12_type;
				alst = $p['list']([]);
				if ((($bool61=(($eq9=(($len10=array['_shape']) === null?0:
					(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'?$len10['length']:
								$p['len']($len10))))))===($eq10=1)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
					alst['append']('[');
					alst['extend'](function(){
						var val,$collcomp7,$iter11_iter,$iter11_type,$mod2,$mod1,$iter11_array,$iter11_nextval,$iter11_idx;
	$collcomp7 = $p['list']();
					$iter11_iter = array;
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						val = $iter11_nextval;
						$collcomp7['append']((($mod1=strval)!=null && ($mod2=$p['tuple']([width, val]))!=null && typeof $mod1=='string'?
							$p['sprintf']($mod1,$mod2):
							(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1)));
					}

	return $collcomp7;}());
					alst['__setitem__'](-(1), (typeof ($93=alst)['__array'] != 'undefined'?
						((typeof $93['__array'][$94=-(1)]) != 'undefined'?$93['__array'][$94]:
							$93['__getitem__']($94)):
							$93['__getitem__'](-(1)))['rstrip']());
					alst['append'](']');
				}
				else {
					alst['append']('[');
					$iter12_iter = array;
					if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter['__iter__']();
						$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						a = $iter12_nextval;
						alst['extend'](array_str(a, width, strval));
					}
					alst['append'](']');
				}
				return alst;
			};
			array_str['__name__'] = 'array_str';

			array_str['__bind_type__'] = 0;
			array_str['__args__'] = [null,null,['array'],['width'],['strval']];
			if ((($bool62=((($cmp21=self['_dtype'])===($cmp22=7)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				alst = array_str(self, (($len11=$p['str']($p['max'](function(){
					var $iter13_nextval,$iter13_iter,i,$collcomp8,$iter13_type,$iter13_idx,$iter13_array;
	$collcomp8 = $p['list']();
				$iter13_iter = self['__data'];
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					i = $iter13_nextval;
					$collcomp8['append'](i);
				}

	return $collcomp8;}()))) === null?0:
					(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'?$len11['length']:
								$p['len']($len11))))), '%*d ');
			}
			else {
				alst = array_str(self, ((($len12=$p['str']($p['max'](function(){
					var $iter14_array,$iter14_type,$collcomp9,i,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
				$iter14_iter = self['__data'];
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					$collcomp9['append'](i);
				}

	return $collcomp9;}()))) === null?0:
					(typeof $len12['__array'] != 'undefined' ? $len12['__array']['length']:
						(typeof $len12['__len__'] == 'function'?$len12['__len__']():
							(typeof $len12['length'] != 'undefined'?$len12['length']:
								$p['len']($len12))))))+(7), '%*f ');
			}
			tab = (($len13=self['_shape']) === null?0:
				(typeof $len13['__array'] != 'undefined' ? $len13['__array']['length']:
					(typeof $len13['__len__'] == 'function'?$len13['__len__']():
						(typeof $len13['length'] != 'undefined'?$len13['length']:
							$p['len']($len13)))));
			i = tab;
			while ((($bool63=true) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				try {
					i = alst['index']('[', i);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						break;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				count = 0;
				while ((($bool64=true) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
					if ((($bool65=(($eq11=(typeof ($95=alst)['__array'] != 'undefined'?
						((typeof $95['__array'][$96=(i)+(count)]) != 'undefined'?$95['__array'][$96]:
							$95['__getitem__']($96)):
							$95['__getitem__']((i)+(count))))===($eq12='[')&&$eq11===null?true:
						($eq11===null?false:($eq12===null?false:
							((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
								((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
									$eq11==$eq12)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
						count += 1;
						continue;
					}
					else {
						if ((($bool66=(($eq13=count)===($eq14=1)&&$eq13===null?true:
							($eq13===null?false:($eq14===null?false:
								((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
									((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
										$eq13==$eq14)))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
							alst['__setitem__'](i, (('\n')+(''['join'](function(){
								var $iter15_iter,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,x,$collcomp10;
	$collcomp10 = $p['list']();
							$iter15_iter = $p['range']((tab)-(count));
							if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
								$iter15_type = 0;
							} else {
								$iter15_iter = $iter15_iter['__iter__']();
								$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter15_idx = 0;
							while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
								x = $iter15_nextval;
								$collcomp10['append'](' ');
							}

	return $collcomp10;}())))+((typeof ($97=alst)['__array'] != 'undefined'?
								((typeof $97['__array'][$98=i]) != 'undefined'?$97['__array'][$98]:
									$97['__getitem__']($98)):
									$97['__getitem__'](i))));
						}
						else {
							alst['__setitem__'](i, (('\n\n')+(''['join'](function(){
								var $iter16_array,$iter16_type,$iter16_idx,$collcomp11,x,$iter16_nextval,$iter16_iter;
	$collcomp11 = $p['list']();
							$iter16_iter = $p['range']((tab)-(count));
							if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
								$iter16_type = 0;
							} else {
								$iter16_iter = $iter16_iter['__iter__']();
								$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter16_idx = 0;
							while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
								x = $iter16_nextval;
								$collcomp11['append'](' ');
							}

	return $collcomp11;}())))+((typeof ($99=alst)['__array'] != 'undefined'?
								((typeof $99['__array'][$100=i]) != 'undefined'?$99['__array'][$100]:
									$99['__getitem__']($100)):
									$99['__getitem__'](i))));
						}
						i += count;
						break;
					}
				}
			}
			return ''['join'](alst);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $101,$attr174,$attr173,$102;
			return (typeof ($101=self['_shape'])['__array'] != 'undefined'?
				((typeof $101['__array'][$102=0]) != 'undefined'?$101['__array'][$102]:
					$101['__getitem__']($102)):
					$101['__getitem__'](0));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$iter18_iter,$iter17_type,array,$eq15,$eq16,$iter17_iter,$attr188,$106,$bool69,$iter18_idx,$attr187,$attr204,$iter18_nextval,$attr201,$attr200,$attr203,$attr202,$iter17_nextval,$103,$107,$105,$104,$bool67,$attr189,$attr186,$bool68,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,$iter18_type,$iter17_array,ndarray,$len15,$108,$len14,$iter18_array,$attr179,$attr178,$attr177,$attr176,$attr175,$109,i,$110,$iter17_idx;
			array = (typeof ($103=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $103['__array'][$104=self['_dtype']]) != 'undefined'?$103['__array'][$104]:
					$103['__getitem__']($104)):
					$103['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool68=!(($bool67=$p['hasattr'](other, '__iter__')) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67['__nonzero__']=='function'?
						$bool67['__nonzero__']() :
						(typeof $bool67['__len__']=='function'?
							($bool67['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68['__nonzero__']=='function'?
							$bool68['__nonzero__']() :
							(typeof $bool68['__len__']=='function'?
								($bool68['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter17_iter = $p['xrange']((($len14=ndarray['__data']) === null?0:
					(typeof $len14['__array'] != 'undefined' ? $len14['__array']['length']:
						(typeof $len14['__len__'] == 'function'?$len14['__len__']():
							(typeof $len14['length'] != 'undefined'?$len14['length']:
								$p['len']($len14))))));
				if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter['__iter__']();
					$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
					i = $iter17_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($105=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $105['__array'][$106=i]) != 'undefined'?$105['__array'][$106]:
							$105['__getitem__']($106)):
							$105['__getitem__'](i)))+(other));
				}
			}
			else {
				if ((($bool69=(($eq15=ndarray['_shape'])===($eq16=other['_shape'])&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
						false :
						(typeof $bool69=='object'?
							(typeof $bool69['__nonzero__']=='function'?
								$bool69['__nonzero__']() :
								(typeof $bool69['__len__']=='function'?
									($bool69['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter18_iter = $p['xrange']((($len15=ndarray['__data']) === null?0:
						(typeof $len15['__array'] != 'undefined' ? $len15['__array']['length']:
							(typeof $len15['__len__'] == 'function'?$len15['__len__']():
								(typeof $len15['length'] != 'undefined'?$len15['length']:
									$p['len']($len15))))));
					if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
						$iter18_type = 0;
					} else {
						$iter18_iter = $iter18_iter['__iter__']();
						$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter18_idx = 0;
					while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
						i = $iter18_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($107=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $107['__array'][$108=i]) != 'undefined'?$107['__array'][$108]:
								$107['__getitem__']($108)):
								$107['__getitem__'](i)))+((typeof ($109=other['__data'])['__array'] != 'undefined'?
							((typeof $109['__array'][$110=i]) != 'undefined'?$109['__array'][$110]:
								$109['__getitem__']($110)):
								$109['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $116,$117,$114,$115,$112,$113,$attr232,$111,$bool72,$iter20_nextval,$bool70,$bool71,$eq18,$attr234,$iter20_iter,$attr230,array,$eq17,$iter20_idx,$attr231,$attr219,$attr233,$iter19_iter,$iter19_nextval,$attr209,$attr208,$attr205,$attr207,$attr206,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr220,$iter20_array,$attr229,$iter19_array,$iter20_type,$118,$attr228,ndarray,$iter19_idx,$len16,$len17,i,$attr218,$iter19_type,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215;
			array = (typeof ($111=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $111['__array'][$112=self['_dtype']]) != 'undefined'?$111['__array'][$112]:
					$111['__getitem__']($112)):
					$111['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool71=!(($bool70=$p['hasattr'](other, '__iter__')) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70['__nonzero__']=='function'?
						$bool70['__nonzero__']() :
						(typeof $bool70['__len__']=='function'?
							($bool70['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71['__nonzero__']=='function'?
							$bool71['__nonzero__']() :
							(typeof $bool71['__len__']=='function'?
								($bool71['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter19_iter = $p['xrange']((($len16=ndarray['__data']) === null?0:
					(typeof $len16['__array'] != 'undefined' ? $len16['__array']['length']:
						(typeof $len16['__len__'] == 'function'?$len16['__len__']():
							(typeof $len16['length'] != 'undefined'?$len16['length']:
								$p['len']($len16))))));
				if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter['__iter__']();
					$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					i = $iter19_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($113=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $113['__array'][$114=i]) != 'undefined'?$113['__array'][$114]:
							$113['__getitem__']($114)):
							$113['__getitem__'](i)))-(other));
				}
			}
			else {
				if ((($bool72=(($eq17=ndarray['_shape'])===($eq18=other['_shape'])&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72['__nonzero__']=='function'?
								$bool72['__nonzero__']() :
								(typeof $bool72['__len__']=='function'?
									($bool72['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter20_iter = $p['xrange']((($len17=ndarray['__data']) === null?0:
						(typeof $len17['__array'] != 'undefined' ? $len17['__array']['length']:
							(typeof $len17['__len__'] == 'function'?$len17['__len__']():
								(typeof $len17['length'] != 'undefined'?$len17['length']:
									$p['len']($len17))))));
					if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
						$iter20_type = 0;
					} else {
						$iter20_iter = $iter20_iter['__iter__']();
						$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter20_idx = 0;
					while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
						i = $iter20_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($115=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $115['__array'][$116=i]) != 'undefined'?$115['__array'][$116]:
								$115['__getitem__']($116)):
								$115['__getitem__'](i)))-((typeof ($117=other['__data'])['__array'] != 'undefined'?
							((typeof $117['__array'][$118=i]) != 'undefined'?$117['__array'][$118]:
								$117['__getitem__']($118)):
								$117['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr235,$attr236,$attr237,$iter22_array,$attr258,$attr259,$attr256,$attr257,$bool74,$attr255,$attr238,$bool73,$attr250,$119,$eq19,$iter22_type,array,$121,$attr264,$attr260,$attr251,$attr263,$125,$attr262,$attr254,$iter22_iter,$attr241,$attr240,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr261,$iter21_nextval,$iter22_nextval,$attr239,$eq20,$iter21_iter,$attr252,$123,$122,$iter21_idx,$120,$126,ndarray,$124,i,$len19,$bool75,$iter22_idx,$iter21_type,$len18,$attr253,$iter21_array;
			array = (typeof ($119=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $119['__array'][$120=self['_dtype']]) != 'undefined'?$119['__array'][$120]:
					$119['__getitem__']($120)):
					$119['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool74=!(($bool73=$p['hasattr'](other, '__iter__')) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73['__nonzero__']=='function'?
						$bool73['__nonzero__']() :
						(typeof $bool73['__len__']=='function'?
							($bool73['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74['__nonzero__']=='function'?
							$bool74['__nonzero__']() :
							(typeof $bool74['__len__']=='function'?
								($bool74['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter21_iter = $p['xrange']((($len18=ndarray['__data']) === null?0:
					(typeof $len18['__array'] != 'undefined' ? $len18['__array']['length']:
						(typeof $len18['__len__'] == 'function'?$len18['__len__']():
							(typeof $len18['length'] != 'undefined'?$len18['length']:
								$p['len']($len18))))));
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					i = $iter21_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($121=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $121['__array'][$122=i]) != 'undefined'?$121['__array'][$122]:
							$121['__getitem__']($122)):
							$121['__getitem__'](i)))*(other));
				}
			}
			else {
				if ((($bool75=(($eq19=ndarray['_shape'])===($eq20=other['_shape'])&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75['__nonzero__']=='function'?
								$bool75['__nonzero__']() :
								(typeof $bool75['__len__']=='function'?
									($bool75['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter22_iter = $p['xrange']((($len19=ndarray['__data']) === null?0:
						(typeof $len19['__array'] != 'undefined' ? $len19['__array']['length']:
							(typeof $len19['__len__'] == 'function'?$len19['__len__']():
								(typeof $len19['length'] != 'undefined'?$len19['length']:
									$p['len']($len19))))));
					if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
						$iter22_type = 0;
					} else {
						$iter22_iter = $iter22_iter['__iter__']();
						$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter22_idx = 0;
					while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
						i = $iter22_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($123=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $123['__array'][$124=i]) != 'undefined'?$123['__array'][$124]:
								$123['__getitem__']($124)):
								$123['__getitem__'](i)))*((typeof ($125=other['__data'])['__array'] != 'undefined'?
							((typeof $125['__array'][$126=i]) != 'undefined'?$125['__array'][$126]:
								$125['__getitem__']($126)):
								$125['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr278,$attr279,$iter23_type,$bool78,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,$iter23_idx,$130,$131,array,$133,$134,$132,$attr285,$attr284,$attr287,$attr286,$attr281,$len20,$attr283,$attr282,$iter23_iter,$iter24_array,$attr289,$attr288,$iter24_type,$bool76,$bool77,$iter24_iter,$iter24_nextval,$attr269,$attr268,$attr267,$attr266,$attr265,$eq21,$129,$128,$iter23_array,$len21,$127,ndarray,$attr280,$attr292,$attr293,$attr290,$attr291,$iter23_nextval,$attr294,$iter24_idx,i,$eq22;
			array = (typeof ($127=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $127['__array'][$128=self['_dtype']]) != 'undefined'?$127['__array'][$128]:
					$127['__getitem__']($128)):
					$127['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool77=!(($bool76=$p['hasattr'](other, '__iter__')) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
				false :
				(typeof $bool76=='object'?
					(typeof $bool76['__nonzero__']=='function'?
						$bool76['__nonzero__']() :
						(typeof $bool76['__len__']=='function'?
							($bool76['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
				$iter23_iter = $p['xrange']((($len20=ndarray['__data']) === null?0:
					(typeof $len20['__array'] != 'undefined' ? $len20['__array']['length']:
						(typeof $len20['__len__'] == 'function'?$len20['__len__']():
							(typeof $len20['length'] != 'undefined'?$len20['length']:
								$p['len']($len20))))));
				if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
					$iter23_type = 0;
				} else {
					$iter23_iter = $iter23_iter['__iter__']();
					$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter23_idx = 0;
				while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
					i = $iter23_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($129=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $129['__array'][$130=i]) != 'undefined'?$129['__array'][$130]:
							$129['__getitem__']($130)):
							$129['__getitem__'](i)))/(other));
				}
			}
			else {
				if ((($bool78=(($eq21=ndarray['_shape'])===($eq22=other['_shape'])&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
						false :
						(typeof $bool78=='object'?
							(typeof $bool78['__nonzero__']=='function'?
								$bool78['__nonzero__']() :
								(typeof $bool78['__len__']=='function'?
									($bool78['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter24_iter = $p['xrange']((($len21=ndarray['__data']) === null?0:
						(typeof $len21['__array'] != 'undefined' ? $len21['__array']['length']:
							(typeof $len21['__len__'] == 'function'?$len21['__len__']():
								(typeof $len21['length'] != 'undefined'?$len21['length']:
									$p['len']($len21))))));
					if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
						$iter24_type = 0;
					} else {
						$iter24_iter = $iter24_iter['__iter__']();
						$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter24_idx = 0;
					while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
						i = $iter24_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($131=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $131['__array'][$132=i]) != 'undefined'?$131['__array'][$132]:
								$131['__getitem__']($132)):
								$131['__getitem__'](i)))/((typeof ($133=other['__data'])['__array'] != 'undefined'?
							((typeof $133['__array'][$134=i]) != 'undefined'?$133['__array'][$134]:
								$133['__getitem__']($134)):
								$133['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('add', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr317,$attr316,$attr315,$attr314,$attr313,$attr312,$attr311,$iter25_nextval,$iter26_nextval,$iter25_array,$attr319,$attr318,$138,$iter26_idx,$iter26_array,array,$139,$135,$136,$137,$bool81,$bool80,$len23,$len22,$141,$bool79,$iter26_type,$attr322,$attr323,$attr320,$iter26_iter,$attr324,$attr304,$attr305,$attr306,$attr307,$attr300,$attr301,$attr302,$attr303,$attr308,$attr309,$eq23,$eq24,$iter25_type,$140,ndarray,$142,$attr321,$attr296,$attr297,$attr295,i,$attr298,$attr299,$iter25_iter,$iter25_idx,$attr310;
			array = (typeof ($135=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $135['__array'][$136=self['_dtype']]) != 'undefined'?$135['__array'][$136]:
					$135['__getitem__']($136)):
					$135['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool80=!(($bool79=$p['hasattr'](other, '__iter__')) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
				false :
				(typeof $bool79=='object'?
					(typeof $bool79['__nonzero__']=='function'?
						$bool79['__nonzero__']() :
						(typeof $bool79['__len__']=='function'?
							($bool79['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80['__nonzero__']=='function'?
							$bool80['__nonzero__']() :
							(typeof $bool80['__len__']=='function'?
								($bool80['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter25_iter = $p['xrange']((($len22=ndarray['__data']) === null?0:
					(typeof $len22['__array'] != 'undefined' ? $len22['__array']['length']:
						(typeof $len22['__len__'] == 'function'?$len22['__len__']():
							(typeof $len22['length'] != 'undefined'?$len22['length']:
								$p['len']($len22))))));
				if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
					$iter25_type = 0;
				} else {
					$iter25_iter = $iter25_iter['__iter__']();
					$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter25_idx = 0;
				while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
					i = $iter25_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($137=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $137['__array'][$138=i]) != 'undefined'?$137['__array'][$138]:
							$137['__getitem__']($138)):
							$137['__getitem__'](i)))+(other));
				}
			}
			else {
				if ((($bool81=(($eq23=ndarray['_shape'])===($eq24=other['_shape'])&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
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
					$iter26_iter = $p['xrange']((($len23=ndarray['__data']) === null?0:
						(typeof $len23['__array'] != 'undefined' ? $len23['__array']['length']:
							(typeof $len23['__len__'] == 'function'?$len23['__len__']():
								(typeof $len23['length'] != 'undefined'?$len23['length']:
									$p['len']($len23))))));
					if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
						$iter26_type = 0;
					} else {
						$iter26_iter = $iter26_iter['__iter__']();
						$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter26_idx = 0;
					while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
						i = $iter26_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($139=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $139['__array'][$140=i]) != 'undefined'?$139['__array'][$140]:
								$139['__getitem__']($140)):
								$139['__getitem__'](i)))+((typeof ($141=other['__data'])['__array'] != 'undefined'?
							((typeof $141['__array'][$142=i]) != 'undefined'?$141['__array'][$142]:
								$141['__getitem__']($142)):
								$141['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('sub', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr349,$attr353,$attr352,$attr351,$iter28_idx,$attr354,$150,$iter28_iter,array,$bool83,$bool82,$iter28_type,$bool84,$iter27_array,$attr328,$attr329,$iter27_iter,$143,$attr341,$attr326,$attr327,$iter27_type,$attr325,$attr348,$len25,$attr350,$iter27_nextval,$attr340,$len24,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$eq25,$148,$eq26,$145,$144,$147,$146,ndarray,$149,$iter28_array,i,$iter28_nextval,$iter27_idx,$attr339,$attr338,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
			array = (typeof ($143=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $143['__array'][$144=self['_dtype']]) != 'undefined'?$143['__array'][$144]:
					$143['__getitem__']($144)):
					$143['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool83=!(($bool82=$p['hasattr'](other, '__iter__')) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
				false :
				(typeof $bool82=='object'?
					(typeof $bool82['__nonzero__']=='function'?
						$bool82['__nonzero__']() :
						(typeof $bool82['__len__']=='function'?
							($bool82['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
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
				$iter27_iter = $p['xrange']((($len24=ndarray['__data']) === null?0:
					(typeof $len24['__array'] != 'undefined' ? $len24['__array']['length']:
						(typeof $len24['__len__'] == 'function'?$len24['__len__']():
							(typeof $len24['length'] != 'undefined'?$len24['length']:
								$p['len']($len24))))));
				if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter['__iter__']();
					$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					i = $iter27_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($145=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $145['__array'][$146=i]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__'](i)))-(other));
				}
			}
			else {
				if ((($bool84=(($eq25=ndarray['_shape'])===($eq26=other['_shape'])&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
						false :
						(typeof $bool84=='object'?
							(typeof $bool84['__nonzero__']=='function'?
								$bool84['__nonzero__']() :
								(typeof $bool84['__len__']=='function'?
									($bool84['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter28_iter = $p['xrange']((($len25=ndarray['__data']) === null?0:
						(typeof $len25['__array'] != 'undefined' ? $len25['__array']['length']:
							(typeof $len25['__len__'] == 'function'?$len25['__len__']():
								(typeof $len25['length'] != 'undefined'?$len25['length']:
									$p['len']($len25))))));
					if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
						$iter28_type = 0;
					} else {
						$iter28_iter = $iter28_iter['__iter__']();
						$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter28_idx = 0;
					while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
						i = $iter28_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($147=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $147['__array'][$148=i]) != 'undefined'?$147['__array'][$148]:
								$147['__getitem__']($148)):
								$147['__getitem__'](i)))-((typeof ($149=other['__data'])['__array'] != 'undefined'?
							((typeof $149['__array'][$150=i]) != 'undefined'?$149['__array'][$150]:
								$149['__getitem__']($150)):
								$149['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['sub'] = $method;
		$method = $pyjs__bind_method2('mul', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr371,$attr370,$attr359,$attr358,$attr375,$attr374,$attr373,$attr376,$attr379,$attr378,$attr357,$attr356,$attr355,$152,$153,$151,$iter30_array,$157,$154,$155,array,$158,$attr384,$len27,$len26,$attr372,$bool86,$bool85,$iter29_type,$attr380,$attr381,$attr382,$attr383,$iter29_array,$iter30_type,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr361,$iter29_nextval,$iter30_idx,$eq27,$eq28,ndarray,$iter30_nextval,i,$iter29_iter,$iter30_iter,$156,$iter29_idx,$attr377,$bool87;
			array = (typeof ($151=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $151['__array'][$152=self['_dtype']]) != 'undefined'?$151['__array'][$152]:
					$151['__getitem__']($152)):
					$151['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool86=!(($bool85=$p['hasattr'](other, '__iter__')) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85['__nonzero__']=='function'?
						$bool85['__nonzero__']() :
						(typeof $bool85['__len__']=='function'?
							($bool85['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86['__nonzero__']=='function'?
							$bool86['__nonzero__']() :
							(typeof $bool86['__len__']=='function'?
								($bool86['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter29_iter = $p['xrange']((($len26=ndarray['__data']) === null?0:
					(typeof $len26['__array'] != 'undefined' ? $len26['__array']['length']:
						(typeof $len26['__len__'] == 'function'?$len26['__len__']():
							(typeof $len26['length'] != 'undefined'?$len26['length']:
								$p['len']($len26))))));
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					i = $iter29_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($153=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $153['__array'][$154=i]) != 'undefined'?$153['__array'][$154]:
							$153['__getitem__']($154)):
							$153['__getitem__'](i)))*(other));
				}
			}
			else {
				if ((($bool87=(($eq27=ndarray['_shape'])===($eq28=other['_shape'])&&$eq27===null?true:
					($eq27===null?false:($eq28===null?false:
						((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
							((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
								$eq27==$eq28)))))) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87['__nonzero__']=='function'?
								$bool87['__nonzero__']() :
								(typeof $bool87['__len__']=='function'?
									($bool87['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter30_iter = $p['xrange']((($len27=ndarray['__data']) === null?0:
						(typeof $len27['__array'] != 'undefined' ? $len27['__array']['length']:
							(typeof $len27['__len__'] == 'function'?$len27['__len__']():
								(typeof $len27['length'] != 'undefined'?$len27['length']:
									$p['len']($len27))))));
					if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
						$iter30_type = 0;
					} else {
						$iter30_iter = $iter30_iter['__iter__']();
						$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter30_idx = 0;
					while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
						i = $iter30_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($155=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $155['__array'][$156=i]) != 'undefined'?$155['__array'][$156]:
								$155['__getitem__']($156)):
								$155['__getitem__'](i)))*((typeof ($157=other['__data'])['__array'] != 'undefined'?
							((typeof $157['__array'][$158=i]) != 'undefined'?$157['__array'][$158]:
								$157['__getitem__']($158)):
								$157['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['mul'] = $method;
		$method = $pyjs__bind_method2('div', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter32_idx,$bool88,$attr410,$attr411,$attr412,$iter32_nextval,$iter31_nextval,$162,$len28,$eq30,array,$159,$attr388,$attr389,$attr413,$attr385,$attr387,$len29,$iter31_idx,$iter32_type,$iter32_array,$iter32_iter,$attr409,$attr408,$iter31_array,$attr414,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$166,$165,$164,$163,$iter31_type,$161,$160,$eq29,$attr386,ndarray,$bool90,$attr399,$attr398,i,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$attr397,$bool89,$iter31_iter;
			array = (typeof ($159=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $159['__array'][$160=self['_dtype']]) != 'undefined'?$159['__array'][$160]:
					$159['__getitem__']($160)):
					$159['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool89=!(($bool88=$p['hasattr'](other, '__iter__')) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
				false :
				(typeof $bool88=='object'?
					(typeof $bool88['__nonzero__']=='function'?
						$bool88['__nonzero__']() :
						(typeof $bool88['__len__']=='function'?
							($bool88['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
					false :
					(typeof $bool89=='object'?
						(typeof $bool89['__nonzero__']=='function'?
							$bool89['__nonzero__']() :
							(typeof $bool89['__len__']=='function'?
								($bool89['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter31_iter = $p['xrange']((($len28=ndarray['__data']) === null?0:
					(typeof $len28['__array'] != 'undefined' ? $len28['__array']['length']:
						(typeof $len28['__len__'] == 'function'?$len28['__len__']():
							(typeof $len28['length'] != 'undefined'?$len28['length']:
								$p['len']($len28))))));
				if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
					$iter31_type = 0;
				} else {
					$iter31_iter = $iter31_iter['__iter__']();
					$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter31_idx = 0;
				while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
					i = $iter31_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($161=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $161['__array'][$162=i]) != 'undefined'?$161['__array'][$162]:
							$161['__getitem__']($162)):
							$161['__getitem__'](i)))/(other));
				}
			}
			else {
				if ((($bool90=(($eq29=ndarray['_shape'])===($eq30=other['_shape'])&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
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
					$iter32_iter = $p['xrange']((($len29=ndarray['__data']) === null?0:
						(typeof $len29['__array'] != 'undefined' ? $len29['__array']['length']:
							(typeof $len29['__len__'] == 'function'?$len29['__len__']():
								(typeof $len29['length'] != 'undefined'?$len29['length']:
									$p['len']($len29))))));
					if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
						$iter32_type = 0;
					} else {
						$iter32_iter = $iter32_iter['__iter__']();
						$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter32_idx = 0;
					while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
						i = $iter32_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($163=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $163['__array'][$164=i]) != 'undefined'?$163['__array'][$164]:
								$163['__getitem__']($164)):
								$163['__getitem__'](i)))/((typeof ($165=other['__data'])['__array'] != 'undefined'?
							((typeof $165['__array'][$166=i]) != 'undefined'?$165['__array'][$166]:
								$165['__getitem__']($166)):
								$165['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['div'] = $method;
		$method = $pyjs__bind_method2('iadd', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr418,$iter33_iter,$attr419,$attr432,$attr423,$attr416,$attr417,$eq32,$eq31,$170,$171,$172,$iter33_type,$attr426,$iter33_array,$attr421,$attr420,$iter33_nextval,$attr422,$attr425,$attr424,$attr427,$iter34_nextval,$attr429,$attr428,$attr415,$167,$attr430,$iter34_idx,$attr431,$iter33_idx,$169,$168,$bool91,$bool92,$bool93,$len30,$len31,i,$iter34_array,$iter34_iter,$iter34_type;
			if ((($bool92=!(($bool91=$p['hasattr'](other, '__iter__')) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
				false :
				(typeof $bool91=='object'?
					(typeof $bool91['__nonzero__']=='function'?
						$bool91['__nonzero__']() :
						(typeof $bool91['__len__']=='function'?
							($bool91['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
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
				$iter33_iter = $p['xrange']((($len30=self['__data']) === null?0:
					(typeof $len30['__array'] != 'undefined' ? $len30['__array']['length']:
						(typeof $len30['__len__'] == 'function'?$len30['__len__']():
							(typeof $len30['length'] != 'undefined'?$len30['length']:
								$p['len']($len30))))));
				if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter['__iter__']();
					$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					i = $iter33_nextval;
					self['__data']['__setitem__'](i, ((typeof ($167=self['__data'])['__array'] != 'undefined'?
						((typeof $167['__array'][$168=i]) != 'undefined'?$167['__array'][$168]:
							$167['__getitem__']($168)):
							$167['__getitem__'](i)))+(other));
				}
			}
			else {
				if ((($bool93=(($eq31=self['_shape'])===($eq32=other['_shape'])&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
						false :
						(typeof $bool93=='object'?
							(typeof $bool93['__nonzero__']=='function'?
								$bool93['__nonzero__']() :
								(typeof $bool93['__len__']=='function'?
									($bool93['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter34_iter = $p['xrange']((($len31=self['__data']) === null?0:
						(typeof $len31['__array'] != 'undefined' ? $len31['__array']['length']:
							(typeof $len31['__len__'] == 'function'?$len31['__len__']():
								(typeof $len31['length'] != 'undefined'?$len31['length']:
									$p['len']($len31))))));
					if (typeof ($iter34_array = $iter34_iter['__array']) != 'undefined') {
						$iter34_type = 0;
					} else {
						$iter34_iter = $iter34_iter['__iter__']();
						$iter34_type = typeof ($iter34_array = $iter34_iter['__array']) != 'undefined'? 0 : (typeof $iter34_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter34_idx = 0;
					while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
						i = $iter34_nextval;
						self['__data']['__setitem__'](i, ((typeof ($169=self['__data'])['__array'] != 'undefined'?
							((typeof $169['__array'][$170=i]) != 'undefined'?$169['__array'][$170]:
								$169['__getitem__']($170)):
								$169['__getitem__'](i)))+((typeof ($171=other['__data'])['__array'] != 'undefined'?
							((typeof $171['__array'][$172=i]) != 'undefined'?$171['__array'][$172]:
								$171['__getitem__']($172)):
								$171['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['iadd'] = $method;
		$method = $pyjs__bind_method2('isub', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr450,$attr438,$attr439,$attr436,$attr437,$attr434,$attr435,$attr433,$174,$eq33,$176,$177,$eq34,$173,$iter36_type,$178,$iter36_nextval,$iter36_iter,$iter36_idx,$attr447,$attr446,$attr445,$attr444,$attr443,$attr442,$attr441,$attr440,$iter35_nextval,$iter36_array,$attr449,$attr448,$iter35_idx,$iter35_array,$len32,$len33,$bool94,$bool95,$bool96,$175,i,$iter35_type,$iter35_iter;
			if ((($bool95=!(($bool94=$p['hasattr'](other, '__iter__')) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
				false :
				(typeof $bool94=='object'?
					(typeof $bool94['__nonzero__']=='function'?
						$bool94['__nonzero__']() :
						(typeof $bool94['__len__']=='function'?
							($bool94['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95['__nonzero__']=='function'?
							$bool95['__nonzero__']() :
							(typeof $bool95['__len__']=='function'?
								($bool95['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter35_iter = $p['xrange']((($len32=self['__data']) === null?0:
					(typeof $len32['__array'] != 'undefined' ? $len32['__array']['length']:
						(typeof $len32['__len__'] == 'function'?$len32['__len__']():
							(typeof $len32['length'] != 'undefined'?$len32['length']:
								$p['len']($len32))))));
				if (typeof ($iter35_array = $iter35_iter['__array']) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter['__iter__']();
					$iter35_type = typeof ($iter35_array = $iter35_iter['__array']) != 'undefined'? 0 : (typeof $iter35_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					i = $iter35_nextval;
					self['__data']['__setitem__'](i, ((typeof ($173=self['__data'])['__array'] != 'undefined'?
						((typeof $173['__array'][$174=i]) != 'undefined'?$173['__array'][$174]:
							$173['__getitem__']($174)):
							$173['__getitem__'](i)))-(other));
				}
			}
			else {
				if ((($bool96=(($eq33=self['_shape'])===($eq34=other['_shape'])&&$eq33===null?true:
					($eq33===null?false:($eq34===null?false:
						((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
							((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
								$eq33==$eq34)))))) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
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
					$iter36_iter = $p['xrange']((($len33=self['__data']) === null?0:
						(typeof $len33['__array'] != 'undefined' ? $len33['__array']['length']:
							(typeof $len33['__len__'] == 'function'?$len33['__len__']():
								(typeof $len33['length'] != 'undefined'?$len33['length']:
									$p['len']($len33))))));
					if (typeof ($iter36_array = $iter36_iter['__array']) != 'undefined') {
						$iter36_type = 0;
					} else {
						$iter36_iter = $iter36_iter['__iter__']();
						$iter36_type = typeof ($iter36_array = $iter36_iter['__array']) != 'undefined'? 0 : (typeof $iter36_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter36_idx = 0;
					while (typeof ($iter36_nextval=($iter36_type?($iter36_type > 0?$iter36_iter.next(true,false):$p['wrapped_next']($iter36_iter)):$iter36_array[$iter36_idx++])) != 'undefined') {
						i = $iter36_nextval;
						self['__data']['__setitem__'](i, ((typeof ($175=self['__data'])['__array'] != 'undefined'?
							((typeof $175['__array'][$176=i]) != 'undefined'?$175['__array'][$176]:
								$175['__getitem__']($176)):
								$175['__getitem__'](i)))-((typeof ($177=other['__data'])['__array'] != 'undefined'?
							((typeof $177['__array'][$178=i]) != 'undefined'?$177['__array'][$178]:
								$177['__getitem__']($178)):
								$177['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isub'] = $method;
		$method = $pyjs__bind_method2('imul', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr454,$attr455,$attr456,$attr457,$attr451,$attr452,$attr453,$attr458,$attr459,$iter37_iter,$eq36,$eq35,$iter38_type,$179,$iter37_idx,$iter38_iter,$iter37_array,$attr468,$181,$180,$183,$182,$attr461,$attr460,$attr463,$attr462,$iter38_idx,$iter38_nextval,$attr465,$attr464,$iter38_array,$attr467,$184,$len34,$len35,$bool97,$bool98,$bool99,$iter37_type,i,$attr466,$iter37_nextval;
			if ((($bool98=!(($bool97=$p['hasattr'](other, '__iter__')) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
				false :
				(typeof $bool97=='object'?
					(typeof $bool97['__nonzero__']=='function'?
						$bool97['__nonzero__']() :
						(typeof $bool97['__len__']=='function'?
							($bool97['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98['__nonzero__']=='function'?
							$bool98['__nonzero__']() :
							(typeof $bool98['__len__']=='function'?
								($bool98['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter37_iter = $p['xrange']((($len34=self['__data']) === null?0:
					(typeof $len34['__array'] != 'undefined' ? $len34['__array']['length']:
						(typeof $len34['__len__'] == 'function'?$len34['__len__']():
							(typeof $len34['length'] != 'undefined'?$len34['length']:
								$p['len']($len34))))));
				if (typeof ($iter37_array = $iter37_iter['__array']) != 'undefined') {
					$iter37_type = 0;
				} else {
					$iter37_iter = $iter37_iter['__iter__']();
					$iter37_type = typeof ($iter37_array = $iter37_iter['__array']) != 'undefined'? 0 : (typeof $iter37_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter37_idx = 0;
				while (typeof ($iter37_nextval=($iter37_type?($iter37_type > 0?$iter37_iter.next(true,false):$p['wrapped_next']($iter37_iter)):$iter37_array[$iter37_idx++])) != 'undefined') {
					i = $iter37_nextval;
					self['__data']['__setitem__'](i, ((typeof ($179=self['__data'])['__array'] != 'undefined'?
						((typeof $179['__array'][$180=i]) != 'undefined'?$179['__array'][$180]:
							$179['__getitem__']($180)):
							$179['__getitem__'](i)))*(other));
				}
			}
			else {
				if ((($bool99=(($eq35=self['_shape'])===($eq36=other['_shape'])&&$eq35===null?true:
					($eq35===null?false:($eq36===null?false:
						((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
							((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
								$eq35==$eq36)))))) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
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
					$iter38_iter = $p['xrange']((($len35=self['__data']) === null?0:
						(typeof $len35['__array'] != 'undefined' ? $len35['__array']['length']:
							(typeof $len35['__len__'] == 'function'?$len35['__len__']():
								(typeof $len35['length'] != 'undefined'?$len35['length']:
									$p['len']($len35))))));
					if (typeof ($iter38_array = $iter38_iter['__array']) != 'undefined') {
						$iter38_type = 0;
					} else {
						$iter38_iter = $iter38_iter['__iter__']();
						$iter38_type = typeof ($iter38_array = $iter38_iter['__array']) != 'undefined'? 0 : (typeof $iter38_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter38_idx = 0;
					while (typeof ($iter38_nextval=($iter38_type?($iter38_type > 0?$iter38_iter.next(true,false):$p['wrapped_next']($iter38_iter)):$iter38_array[$iter38_idx++])) != 'undefined') {
						i = $iter38_nextval;
						self['__data']['__setitem__'](i, ((typeof ($181=self['__data'])['__array'] != 'undefined'?
							((typeof $181['__array'][$182=i]) != 'undefined'?$181['__array'][$182]:
								$181['__getitem__']($182)):
								$181['__getitem__'](i)))*((typeof ($183=other['__data'])['__array'] != 'undefined'?
							((typeof $183['__array'][$184=i]) != 'undefined'?$183['__array'][$184]:
								$183['__getitem__']($184)):
								$183['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['imul'] = $method;
		$method = $pyjs__bind_method2('idiv', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $189,$eq37,$eq38,$attr480,$iter39_idx,$188,$iter39_type,$attr483,$attr482,$attr481,$attr469,$iter40_array,$attr485,$attr484,$iter39_nextval,$185,$187,$186,$iter39_array,$bool101,$bool100,$bool102,$attr486,$iter40_idx,$iter40_type,$len36,$len37,i,$iter40_nextval,$iter40_iter,$attr478,$attr479,$190,$iter39_iter,$attr472,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$attr475;
			if ((($bool101=!(($bool100=$p['hasattr'](other, '__iter__')) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
				false :
				(typeof $bool100=='object'?
					(typeof $bool100['__nonzero__']=='function'?
						$bool100['__nonzero__']() :
						(typeof $bool100['__len__']=='function'?
							($bool100['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
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
				$iter39_iter = $p['xrange']((($len36=self['__data']) === null?0:
					(typeof $len36['__array'] != 'undefined' ? $len36['__array']['length']:
						(typeof $len36['__len__'] == 'function'?$len36['__len__']():
							(typeof $len36['length'] != 'undefined'?$len36['length']:
								$p['len']($len36))))));
				if (typeof ($iter39_array = $iter39_iter['__array']) != 'undefined') {
					$iter39_type = 0;
				} else {
					$iter39_iter = $iter39_iter['__iter__']();
					$iter39_type = typeof ($iter39_array = $iter39_iter['__array']) != 'undefined'? 0 : (typeof $iter39_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter39_idx = 0;
				while (typeof ($iter39_nextval=($iter39_type?($iter39_type > 0?$iter39_iter.next(true,false):$p['wrapped_next']($iter39_iter)):$iter39_array[$iter39_idx++])) != 'undefined') {
					i = $iter39_nextval;
					self['__data']['__setitem__'](i, ((typeof ($185=self['__data'])['__array'] != 'undefined'?
						((typeof $185['__array'][$186=i]) != 'undefined'?$185['__array'][$186]:
							$185['__getitem__']($186)):
							$185['__getitem__'](i)))/(other));
				}
			}
			else {
				if ((($bool102=(($eq37=self['_shape'])===($eq38=other['_shape'])&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
								$eq37==$eq38)))))) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
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
					$iter40_iter = $p['xrange']((($len37=self['__data']) === null?0:
						(typeof $len37['__array'] != 'undefined' ? $len37['__array']['length']:
							(typeof $len37['__len__'] == 'function'?$len37['__len__']():
								(typeof $len37['length'] != 'undefined'?$len37['length']:
									$p['len']($len37))))));
					if (typeof ($iter40_array = $iter40_iter['__array']) != 'undefined') {
						$iter40_type = 0;
					} else {
						$iter40_iter = $iter40_iter['__iter__']();
						$iter40_type = typeof ($iter40_array = $iter40_iter['__array']) != 'undefined'? 0 : (typeof $iter40_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter40_idx = 0;
					while (typeof ($iter40_nextval=($iter40_type?($iter40_type > 0?$iter40_iter.next(true,false):$p['wrapped_next']($iter40_iter)):$iter40_array[$iter40_idx++])) != 'undefined') {
						i = $iter40_nextval;
						self['__data']['__setitem__'](i, ((typeof ($187=self['__data'])['__array'] != 'undefined'?
							((typeof $187['__array'][$188=i]) != 'undefined'?$187['__array'][$188]:
								$187['__getitem__']($188)):
								$187['__getitem__'](i)))/((typeof ($189=other['__data'])['__array'] != 'undefined'?
							((typeof $189['__array'][$190=i]) != 'undefined'?$189['__array'][$190]:
								$189['__getitem__']($190)):
								$189['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['idiv'] = $method;
		$method = $pyjs__bind_method2('bitwise_and', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter41_idx,$iter42_type,$iter42_array,$iter41_type,$iter41_nextval,$iter41_iter,array,$eq39,$attr502,$iter42_idx,$attr511,$attr503,$198,$attr500,$attr515,$attr514,$attr487,$attr510,$attr513,$iter42_iter,$attr506,$attr489,$attr488,$attr507,$attr501,$iter41_array,$attr504,$196,$attr505,$attr512,$bool105,$bool104,$attr516,$bool103,$197,$attr508,ndarray,$195,$iter42_nextval,i,$eq40,$len38,$len39,$attr490,$attr491,$attr492,$attr493,$attr494,$attr495,$attr496,$attr497,$attr498,$attr499,$194,$attr509,$192,$193,$191;
			array = (typeof ($191=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $191['__array'][$192=self['_dtype']]) != 'undefined'?$191['__array'][$192]:
					$191['__getitem__']($192)):
					$191['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool104=!(($bool103=$p['hasattr'](other, '__iter__')) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
				false :
				(typeof $bool103=='object'?
					(typeof $bool103['__nonzero__']=='function'?
						$bool103['__nonzero__']() :
						(typeof $bool103['__len__']=='function'?
							($bool103['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
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
				$iter41_iter = $p['xrange']((($len38=ndarray['__data']) === null?0:
					(typeof $len38['__array'] != 'undefined' ? $len38['__array']['length']:
						(typeof $len38['__len__'] == 'function'?$len38['__len__']():
							(typeof $len38['length'] != 'undefined'?$len38['length']:
								$p['len']($len38))))));
				if (typeof ($iter41_array = $iter41_iter['__array']) != 'undefined') {
					$iter41_type = 0;
				} else {
					$iter41_iter = $iter41_iter['__iter__']();
					$iter41_type = typeof ($iter41_array = $iter41_iter['__array']) != 'undefined'? 0 : (typeof $iter41_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter41_idx = 0;
				while (typeof ($iter41_nextval=($iter41_type?($iter41_type > 0?$iter41_iter.next(true,false):$p['wrapped_next']($iter41_iter)):$iter41_array[$iter41_idx++])) != 'undefined') {
					i = $iter41_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($193=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $193['__array'][$194=i]) != 'undefined'?$193['__array'][$194]:
							$193['__getitem__']($194)):
							$193['__getitem__'](i)))&(other));
				}
			}
			else {
				if ((($bool105=(($eq39=ndarray['_shape'])===($eq40=other['_shape'])&&$eq39===null?true:
					($eq39===null?false:($eq40===null?false:
						((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
							((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
								$eq39==$eq40)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
						false :
						(typeof $bool105=='object'?
							(typeof $bool105['__nonzero__']=='function'?
								$bool105['__nonzero__']() :
								(typeof $bool105['__len__']=='function'?
									($bool105['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter42_iter = $p['xrange']((($len39=ndarray['__data']) === null?0:
						(typeof $len39['__array'] != 'undefined' ? $len39['__array']['length']:
							(typeof $len39['__len__'] == 'function'?$len39['__len__']():
								(typeof $len39['length'] != 'undefined'?$len39['length']:
									$p['len']($len39))))));
					if (typeof ($iter42_array = $iter42_iter['__array']) != 'undefined') {
						$iter42_type = 0;
					} else {
						$iter42_iter = $iter42_iter['__iter__']();
						$iter42_type = typeof ($iter42_array = $iter42_iter['__array']) != 'undefined'? 0 : (typeof $iter42_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter42_idx = 0;
					while (typeof ($iter42_nextval=($iter42_type?($iter42_type > 0?$iter42_iter.next(true,false):$p['wrapped_next']($iter42_iter)):$iter42_array[$iter42_idx++])) != 'undefined') {
						i = $iter42_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($195=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $195['__array'][$196=i]) != 'undefined'?$195['__array'][$196]:
								$195['__getitem__']($196)):
								$195['__getitem__'](i)))&((typeof ($197=other['__data'])['__array'] != 'undefined'?
							((typeof $197['__array'][$198=i]) != 'undefined'?$197['__array'][$198]:
								$197['__getitem__']($198)):
								$197['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_and'] = $method;
		$method = $pyjs__bind_method2('bitwise_or', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter43_type,$iter44_type,$iter43_iter,$attr545,$attr542,$attr543,$attr540,$attr541,$iter44_array,$attr544,$len41,$len40,array,$iter43_array,$iter44_iter,$attr546,$attr517,$attr539,$attr538,$attr537,$attr536,$attr535,$attr534,$attr519,$attr518,$attr531,$attr530,$iter44_idx,$202,$203,$200,$201,$206,$204,$205,$iter44_nextval,$bool107,$bool106,$bool108,ndarray,$attr527,i,$attr533,$eq41,$eq42,$attr532,$iter43_idx,$attr528,$attr529,$199,$attr524,$attr525,$attr526,$iter43_nextval,$attr520,$attr521,$attr522,$attr523;
			array = (typeof ($199=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $199['__array'][$200=self['_dtype']]) != 'undefined'?$199['__array'][$200]:
					$199['__getitem__']($200)):
					$199['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool107=!(($bool106=$p['hasattr'](other, '__iter__')) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
				false :
				(typeof $bool106=='object'?
					(typeof $bool106['__nonzero__']=='function'?
						$bool106['__nonzero__']() :
						(typeof $bool106['__len__']=='function'?
							($bool106['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
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
				$iter43_iter = $p['xrange']((($len40=ndarray['__data']) === null?0:
					(typeof $len40['__array'] != 'undefined' ? $len40['__array']['length']:
						(typeof $len40['__len__'] == 'function'?$len40['__len__']():
							(typeof $len40['length'] != 'undefined'?$len40['length']:
								$p['len']($len40))))));
				if (typeof ($iter43_array = $iter43_iter['__array']) != 'undefined') {
					$iter43_type = 0;
				} else {
					$iter43_iter = $iter43_iter['__iter__']();
					$iter43_type = typeof ($iter43_array = $iter43_iter['__array']) != 'undefined'? 0 : (typeof $iter43_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter43_idx = 0;
				while (typeof ($iter43_nextval=($iter43_type?($iter43_type > 0?$iter43_iter.next(true,false):$p['wrapped_next']($iter43_iter)):$iter43_array[$iter43_idx++])) != 'undefined') {
					i = $iter43_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($201=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $201['__array'][$202=i]) != 'undefined'?$201['__array'][$202]:
							$201['__getitem__']($202)):
							$201['__getitem__'](i)))|(other));
				}
			}
			else {
				if ((($bool108=(($eq41=ndarray['_shape'])===($eq42=other['_shape'])&&$eq41===null?true:
					($eq41===null?false:($eq42===null?false:
						((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
							((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
								$eq41==$eq42)))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
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
					$iter44_iter = $p['xrange']((($len41=ndarray['__data']) === null?0:
						(typeof $len41['__array'] != 'undefined' ? $len41['__array']['length']:
							(typeof $len41['__len__'] == 'function'?$len41['__len__']():
								(typeof $len41['length'] != 'undefined'?$len41['length']:
									$p['len']($len41))))));
					if (typeof ($iter44_array = $iter44_iter['__array']) != 'undefined') {
						$iter44_type = 0;
					} else {
						$iter44_iter = $iter44_iter['__iter__']();
						$iter44_type = typeof ($iter44_array = $iter44_iter['__array']) != 'undefined'? 0 : (typeof $iter44_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter44_idx = 0;
					while (typeof ($iter44_nextval=($iter44_type?($iter44_type > 0?$iter44_iter.next(true,false):$p['wrapped_next']($iter44_iter)):$iter44_array[$iter44_idx++])) != 'undefined') {
						i = $iter44_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($203=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $203['__array'][$204=i]) != 'undefined'?$203['__array'][$204]:
								$203['__getitem__']($204)):
								$203['__getitem__'](i)))|((typeof ($205=other['__data'])['__array'] != 'undefined'?
							((typeof $205['__array'][$206=i]) != 'undefined'?$205['__array'][$206]:
								$205['__getitem__']($206)):
								$205['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_or'] = $method;
		$method = $pyjs__bind_method2('bitwise_xor', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr560,$attr547,$attr562,$attr563,$attr564,$attr565,$attr566,$attr561,$attr568,$attr569,$attr571,$attr548,$attr549,$len43,$len42,$bool110,$bool111,$iter46_idx,$iter45_idx,array,$attr575,$214,$attr567,$attr559,$attr558,$attr551,$attr550,$attr553,$attr552,$attr555,$attr554,$attr557,$attr556,$attr573,$attr572,$208,$209,$attr576,$attr570,$attr574,$207,$iter45_nextval,$iter45_type,$iter45_array,$bool109,ndarray,$iter46_array,$iter45_iter,i,$iter46_iter,$iter46_nextval,$eq44,$eq43,$211,$210,$213,$212,$iter46_type;
			array = (typeof ($207=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $207['__array'][$208=self['_dtype']]) != 'undefined'?$207['__array'][$208]:
					$207['__getitem__']($208)):
					$207['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			if ((($bool110=!(($bool109=$p['hasattr'](other, '__iter__')) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
				false :
				(typeof $bool109=='object'?
					(typeof $bool109['__nonzero__']=='function'?
						$bool109['__nonzero__']() :
						(typeof $bool109['__len__']=='function'?
							($bool109['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
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
				$iter45_iter = $p['xrange']((($len42=ndarray['__data']) === null?0:
					(typeof $len42['__array'] != 'undefined' ? $len42['__array']['length']:
						(typeof $len42['__len__'] == 'function'?$len42['__len__']():
							(typeof $len42['length'] != 'undefined'?$len42['length']:
								$p['len']($len42))))));
				if (typeof ($iter45_array = $iter45_iter['__array']) != 'undefined') {
					$iter45_type = 0;
				} else {
					$iter45_iter = $iter45_iter['__iter__']();
					$iter45_type = typeof ($iter45_array = $iter45_iter['__array']) != 'undefined'? 0 : (typeof $iter45_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter45_idx = 0;
				while (typeof ($iter45_nextval=($iter45_type?($iter45_type > 0?$iter45_iter.next(true,false):$p['wrapped_next']($iter45_iter)):$iter45_array[$iter45_idx++])) != 'undefined') {
					i = $iter45_nextval;
					ndarray['__data']['__setitem__'](i, ((typeof ($209=ndarray['__data'])['__array'] != 'undefined'?
						((typeof $209['__array'][$210=i]) != 'undefined'?$209['__array'][$210]:
							$209['__getitem__']($210)):
							$209['__getitem__'](i)))^(other));
				}
			}
			else {
				if ((($bool111=(($eq43=ndarray['_shape'])===($eq44=other['_shape'])&&$eq43===null?true:
					($eq43===null?false:($eq44===null?false:
						((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
							((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
								$eq43==$eq44)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
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
					$iter46_iter = $p['xrange']((($len43=ndarray['__data']) === null?0:
						(typeof $len43['__array'] != 'undefined' ? $len43['__array']['length']:
							(typeof $len43['__len__'] == 'function'?$len43['__len__']():
								(typeof $len43['length'] != 'undefined'?$len43['length']:
									$p['len']($len43))))));
					if (typeof ($iter46_array = $iter46_iter['__array']) != 'undefined') {
						$iter46_type = 0;
					} else {
						$iter46_iter = $iter46_iter['__iter__']();
						$iter46_type = typeof ($iter46_array = $iter46_iter['__array']) != 'undefined'? 0 : (typeof $iter46_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter46_idx = 0;
					while (typeof ($iter46_nextval=($iter46_type?($iter46_type > 0?$iter46_iter.next(true,false):$p['wrapped_next']($iter46_iter)):$iter46_array[$iter46_idx++])) != 'undefined') {
						i = $iter46_nextval;
						ndarray['__data']['__setitem__'](i, ((typeof ($211=ndarray['__data'])['__array'] != 'undefined'?
							((typeof $211['__array'][$212=i]) != 'undefined'?$211['__array'][$212]:
								$211['__getitem__']($212)):
								$211['__getitem__'](i)))^((typeof ($213=other['__data'])['__array'] != 'undefined'?
							((typeof $213['__array'][$214=i]) != 'undefined'?$213['__array'][$214]:
								$213['__getitem__']($214)):
								$213['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_xor'] = $method;
		$method = $pyjs__bind_method2('bitwise_iand', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr588,$attr589,$len45,$attr582,$attr583,$attr580,$attr581,$attr586,$attr587,$attr584,$attr585,$bool112,$bool113,$bool114,$len44,$iter47_iter,$iter48_nextval,$iter48_iter,$iter47_type,$attr594,$iter47_array,$attr577,$220,$attr579,$attr578,$attr591,$attr590,$attr593,$attr592,$iter48_idx,$iter47_idx,i,$eq46,$eq45,$iter48_array,$215,$217,$216,$iter47_nextval,$218,$219,$iter48_type;
			if ((($bool113=!(($bool112=$p['hasattr'](other, '__iter__')) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
				false :
				(typeof $bool112=='object'?
					(typeof $bool112['__nonzero__']=='function'?
						$bool112['__nonzero__']() :
						(typeof $bool112['__len__']=='function'?
							($bool112['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113['__nonzero__']=='function'?
							$bool113['__nonzero__']() :
							(typeof $bool113['__len__']=='function'?
								($bool113['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter47_iter = $p['xrange']((($len44=self['__data']) === null?0:
					(typeof $len44['__array'] != 'undefined' ? $len44['__array']['length']:
						(typeof $len44['__len__'] == 'function'?$len44['__len__']():
							(typeof $len44['length'] != 'undefined'?$len44['length']:
								$p['len']($len44))))));
				if (typeof ($iter47_array = $iter47_iter['__array']) != 'undefined') {
					$iter47_type = 0;
				} else {
					$iter47_iter = $iter47_iter['__iter__']();
					$iter47_type = typeof ($iter47_array = $iter47_iter['__array']) != 'undefined'? 0 : (typeof $iter47_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter47_idx = 0;
				while (typeof ($iter47_nextval=($iter47_type?($iter47_type > 0?$iter47_iter.next(true,false):$p['wrapped_next']($iter47_iter)):$iter47_array[$iter47_idx++])) != 'undefined') {
					i = $iter47_nextval;
					self['__data']['__setitem__'](i, ((typeof ($215=self['__data'])['__array'] != 'undefined'?
						((typeof $215['__array'][$216=i]) != 'undefined'?$215['__array'][$216]:
							$215['__getitem__']($216)):
							$215['__getitem__'](i)))&(other));
				}
			}
			else {
				if ((($bool114=(($eq45=self['_shape'])===($eq46=other['_shape'])&&$eq45===null?true:
					($eq45===null?false:($eq46===null?false:
						((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
							((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
								$eq45==$eq46)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
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
					$iter48_iter = $p['xrange']((($len45=self['__data']) === null?0:
						(typeof $len45['__array'] != 'undefined' ? $len45['__array']['length']:
							(typeof $len45['__len__'] == 'function'?$len45['__len__']():
								(typeof $len45['length'] != 'undefined'?$len45['length']:
									$p['len']($len45))))));
					if (typeof ($iter48_array = $iter48_iter['__array']) != 'undefined') {
						$iter48_type = 0;
					} else {
						$iter48_iter = $iter48_iter['__iter__']();
						$iter48_type = typeof ($iter48_array = $iter48_iter['__array']) != 'undefined'? 0 : (typeof $iter48_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter48_idx = 0;
					while (typeof ($iter48_nextval=($iter48_type?($iter48_type > 0?$iter48_iter.next(true,false):$p['wrapped_next']($iter48_iter)):$iter48_array[$iter48_idx++])) != 'undefined') {
						i = $iter48_nextval;
						self['__data']['__setitem__'](i, ((typeof ($217=self['__data'])['__array'] != 'undefined'?
							((typeof $217['__array'][$218=i]) != 'undefined'?$217['__array'][$218]:
								$217['__getitem__']($218)):
								$217['__getitem__'](i)))&((typeof ($219=other['__data'])['__array'] != 'undefined'?
							((typeof $219['__array'][$220=i]) != 'undefined'?$219['__array'][$220]:
								$219['__getitem__']($220)):
								$219['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_iand'] = $method;
		$method = $pyjs__bind_method2('bitwise_ior', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $226,$iter50_type,$iter49_array,$bool116,$len46,$bool115,$attr612,$iter50_idx,$iter49_type,$len47,$iter49_iter,$224,$iter50_nextval,$iter49_idx,$iter49_nextval,$attr606,$attr599,$attr598,$attr610,$attr611,$attr595,$225,$attr597,$attr596,$221,$222,$223,$iter50_array,$iter50_iter,$eq48,i,$eq47,$attr604,$attr609,$attr608,$attr601,$attr600,$attr603,$attr602,$attr605,$attr607,$bool117;
			if ((($bool116=!(($bool115=$p['hasattr'](other, '__iter__')) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115['__nonzero__']=='function'?
						$bool115['__nonzero__']() :
						(typeof $bool115['__len__']=='function'?
							($bool115['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
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
				$iter49_iter = $p['xrange']((($len46=self['__data']) === null?0:
					(typeof $len46['__array'] != 'undefined' ? $len46['__array']['length']:
						(typeof $len46['__len__'] == 'function'?$len46['__len__']():
							(typeof $len46['length'] != 'undefined'?$len46['length']:
								$p['len']($len46))))));
				if (typeof ($iter49_array = $iter49_iter['__array']) != 'undefined') {
					$iter49_type = 0;
				} else {
					$iter49_iter = $iter49_iter['__iter__']();
					$iter49_type = typeof ($iter49_array = $iter49_iter['__array']) != 'undefined'? 0 : (typeof $iter49_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter49_idx = 0;
				while (typeof ($iter49_nextval=($iter49_type?($iter49_type > 0?$iter49_iter.next(true,false):$p['wrapped_next']($iter49_iter)):$iter49_array[$iter49_idx++])) != 'undefined') {
					i = $iter49_nextval;
					self['__data']['__setitem__'](i, ((typeof ($221=self['__data'])['__array'] != 'undefined'?
						((typeof $221['__array'][$222=i]) != 'undefined'?$221['__array'][$222]:
							$221['__getitem__']($222)):
							$221['__getitem__'](i)))|(other));
				}
			}
			else {
				if ((($bool117=(($eq47=self['_shape'])===($eq48=other['_shape'])&&$eq47===null?true:
					($eq47===null?false:($eq48===null?false:
						((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
							((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
								$eq47==$eq48)))))) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
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
					$iter50_iter = $p['xrange']((($len47=self['__data']) === null?0:
						(typeof $len47['__array'] != 'undefined' ? $len47['__array']['length']:
							(typeof $len47['__len__'] == 'function'?$len47['__len__']():
								(typeof $len47['length'] != 'undefined'?$len47['length']:
									$p['len']($len47))))));
					if (typeof ($iter50_array = $iter50_iter['__array']) != 'undefined') {
						$iter50_type = 0;
					} else {
						$iter50_iter = $iter50_iter['__iter__']();
						$iter50_type = typeof ($iter50_array = $iter50_iter['__array']) != 'undefined'? 0 : (typeof $iter50_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter50_idx = 0;
					while (typeof ($iter50_nextval=($iter50_type?($iter50_type > 0?$iter50_iter.next(true,false):$p['wrapped_next']($iter50_iter)):$iter50_array[$iter50_idx++])) != 'undefined') {
						i = $iter50_nextval;
						self['__data']['__setitem__'](i, ((typeof ($223=self['__data'])['__array'] != 'undefined'?
							((typeof $223['__array'][$224=i]) != 'undefined'?$223['__array'][$224]:
								$223['__getitem__']($224)):
								$223['__getitem__'](i)))|((typeof ($225=other['__data'])['__array'] != 'undefined'?
							((typeof $225['__array'][$226=i]) != 'undefined'?$225['__array'][$226]:
								$225['__getitem__']($226)):
								$225['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_ior'] = $method;
		$method = $pyjs__bind_method2('bitwise_ixor', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr623,$attr622,$attr621,$attr620,$attr627,$attr626,$attr625,$attr624,$attr629,$attr628,$232,$231,$230,$iter52_nextval,$eq50,$iter52_array,$bool118,$len48,$len49,$229,$iter51_array,$iter52_iter,$iter51_iter,$iter51_nextval,$attr630,$attr616,$attr617,$attr614,$attr615,$228,$attr613,$227,$attr618,$attr619,$iter52_type,$iter51_idx,$iter52_idx,$bool120,$eq49,i,$bool119,$iter51_type;
			if ((($bool119=!(($bool118=$p['hasattr'](other, '__iter__')) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
				false :
				(typeof $bool118=='object'?
					(typeof $bool118['__nonzero__']=='function'?
						$bool118['__nonzero__']() :
						(typeof $bool118['__len__']=='function'?
							($bool118['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
					false :
					(typeof $bool119=='object'?
						(typeof $bool119['__nonzero__']=='function'?
							$bool119['__nonzero__']() :
							(typeof $bool119['__len__']=='function'?
								($bool119['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter51_iter = $p['xrange']((($len48=self['__data']) === null?0:
					(typeof $len48['__array'] != 'undefined' ? $len48['__array']['length']:
						(typeof $len48['__len__'] == 'function'?$len48['__len__']():
							(typeof $len48['length'] != 'undefined'?$len48['length']:
								$p['len']($len48))))));
				if (typeof ($iter51_array = $iter51_iter['__array']) != 'undefined') {
					$iter51_type = 0;
				} else {
					$iter51_iter = $iter51_iter['__iter__']();
					$iter51_type = typeof ($iter51_array = $iter51_iter['__array']) != 'undefined'? 0 : (typeof $iter51_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter51_idx = 0;
				while (typeof ($iter51_nextval=($iter51_type?($iter51_type > 0?$iter51_iter.next(true,false):$p['wrapped_next']($iter51_iter)):$iter51_array[$iter51_idx++])) != 'undefined') {
					i = $iter51_nextval;
					self['__data']['__setitem__'](i, ((typeof ($227=self['__data'])['__array'] != 'undefined'?
						((typeof $227['__array'][$228=i]) != 'undefined'?$227['__array'][$228]:
							$227['__getitem__']($228)):
							$227['__getitem__'](i)))^(other));
				}
			}
			else {
				if ((($bool120=(($eq49=self['_shape'])===($eq50=other['_shape'])&&$eq49===null?true:
					($eq49===null?false:($eq50===null?false:
						((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
							((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
								$eq49==$eq50)))))) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
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
					$iter52_iter = $p['xrange']((($len49=self['__data']) === null?0:
						(typeof $len49['__array'] != 'undefined' ? $len49['__array']['length']:
							(typeof $len49['__len__'] == 'function'?$len49['__len__']():
								(typeof $len49['length'] != 'undefined'?$len49['length']:
									$p['len']($len49))))));
					if (typeof ($iter52_array = $iter52_iter['__array']) != 'undefined') {
						$iter52_type = 0;
					} else {
						$iter52_iter = $iter52_iter['__iter__']();
						$iter52_type = typeof ($iter52_array = $iter52_iter['__array']) != 'undefined'? 0 : (typeof $iter52_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter52_idx = 0;
					while (typeof ($iter52_nextval=($iter52_type?($iter52_type > 0?$iter52_iter.next(true,false):$p['wrapped_next']($iter52_iter)):$iter52_array[$iter52_idx++])) != 'undefined') {
						i = $iter52_nextval;
						self['__data']['__setitem__'](i, ((typeof ($229=self['__data'])['__array'] != 'undefined'?
							((typeof $229['__array'][$230=i]) != 'undefined'?$229['__array'][$230]:
								$229['__getitem__']($230)):
								$229['__getitem__'](i)))^((typeof ($231=other['__data'])['__array'] != 'undefined'?
							((typeof $231['__array'][$232=i]) != 'undefined'?$231['__array'][$232]:
								$231['__getitem__']($232)):
								$231['__getitem__'](i))));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_ixor'] = $method;
		$method = $pyjs__bind_method2('bitwise_not', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter53_idx,$iter53_type,$236,$235,$234,$233,array,$iter53_array,$iter53_nextval,$attr631,$attr632,$attr633,$attr634,$attr635,$attr636,$attr637,$attr638,$attr639,$len50,ndarray,i,$iter53_iter,$attr645,$attr644,$attr647,$attr646,$attr641,$attr640,$attr643,$attr642,$attr648;
			array = (typeof ($233=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $233['__array'][$234=self['_dtype']]) != 'undefined'?$233['__array'][$234]:
					$233['__getitem__']($234)):
					$233['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			$iter53_iter = $p['xrange']((($len50=ndarray['__data']) === null?0:
				(typeof $len50['__array'] != 'undefined' ? $len50['__array']['length']:
					(typeof $len50['__len__'] == 'function'?$len50['__len__']():
						(typeof $len50['length'] != 'undefined'?$len50['length']:
							$p['len']($len50))))));
			if (typeof ($iter53_array = $iter53_iter['__array']) != 'undefined') {
				$iter53_type = 0;
			} else {
				$iter53_iter = $iter53_iter['__iter__']();
				$iter53_type = typeof ($iter53_array = $iter53_iter['__array']) != 'undefined'? 0 : (typeof $iter53_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter53_idx = 0;
			while (typeof ($iter53_nextval=($iter53_type?($iter53_type > 0?$iter53_iter.next(true,false):$p['wrapped_next']($iter53_iter)):$iter53_array[$iter53_idx++])) != 'undefined') {
				i = $iter53_nextval;
				ndarray['__data']['__setitem__'](i, ~((typeof ($235=self['__data'])['__array'] != 'undefined'?
					((typeof $235['__array'][$236=i]) != 'undefined'?$235['__array'][$236]:
						$235['__getitem__']($236)):
						$235['__getitem__'](i))));
			}
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['bitwise_not'] = $method;
		$method = $pyjs__bind_method2('setshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter56_array,$239,$238,$237,$eq51,$eq52,size,$iter54_idx,$iter55_iter,$iter55_nextval,$iter54_nextval,$240,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,$bool122,$bool121,$iter55_idx,$iter54_array,array_size,i,$iter55_type,indices;
			if ((($bool121=$p['isinstance']((typeof ($237=dim)['__array'] != 'undefined'?
				((typeof $237['__array'][$238=0]) != 'undefined'?$237['__array'][$238]:
					$237['__getitem__']($238)):
					$237['__getitem__'](0)), $p['tuple'])) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
					false :
					(typeof $bool121=='object'?
						(typeof $bool121['__nonzero__']=='function'?
							$bool121['__nonzero__']() :
							(typeof $bool121['__len__']=='function'?
								($bool121['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				dim = (typeof ($239=dim)['__array'] != 'undefined'?
					((typeof $239['__array'][$240=0]) != 'undefined'?$239['__array'][$240]:
						$239['__getitem__']($240)):
						$239['__getitem__'](0));
			}
			size = 1;
			$iter54_iter = dim;
			if (typeof ($iter54_array = $iter54_iter['__array']) != 'undefined') {
				$iter54_type = 0;
			} else {
				$iter54_iter = $iter54_iter['__iter__']();
				$iter54_type = typeof ($iter54_array = $iter54_iter['__array']) != 'undefined'? 0 : (typeof $iter54_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter54_idx = 0;
			while (typeof ($iter54_nextval=($iter54_type?($iter54_type > 0?$iter54_iter.next(true,false):$p['wrapped_next']($iter54_iter)):$iter54_array[$iter54_idx++])) != 'undefined') {
				i = $iter54_nextval;
				size *= i;
			}
			array_size = 1;
			$iter55_iter = self['_shape'];
			if (typeof ($iter55_array = $iter55_iter['__array']) != 'undefined') {
				$iter55_type = 0;
			} else {
				$iter55_iter = $iter55_iter['__iter__']();
				$iter55_type = typeof ($iter55_array = $iter55_iter['__array']) != 'undefined'? 0 : (typeof $iter55_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter55_idx = 0;
			while (typeof ($iter55_nextval=($iter55_type?($iter55_type > 0?$iter55_iter.next(true,false):$p['wrapped_next']($iter55_iter)):$iter55_array[$iter55_idx++])) != 'undefined') {
				i = $iter55_nextval;
				array_size *= i;
			}
			if ((($bool122=!(($eq51=size)===($eq52=array_size)&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
							$eq51==$eq52)))))) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
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
				throw ($p['TypeError']('array size cannot change'));
			}
			self['_shape'] = dim;
			indices = $p['list']([]);
			$iter56_iter = self['_shape'];
			if (typeof ($iter56_array = $iter56_iter['__array']) != 'undefined') {
				$iter56_type = 0;
			} else {
				$iter56_iter = $iter56_iter['__iter__']();
				$iter56_type = typeof ($iter56_array = $iter56_iter['__array']) != 'undefined'? 0 : (typeof $iter56_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter56_idx = 0;
			while (typeof ($iter56_nextval=($iter56_type?($iter56_type > 0?$iter56_iter.next(true,false):$p['wrapped_next']($iter56_iter)):$iter56_array[$iter56_idx++])) != 'undefined') {
				i = $iter56_nextval;
				size /= i;
				indices['append'](size);
			}
			self['_indices'] = $p['tuple'](indices);
			return null;
		}
	, 1, ['dim',null,['self']]);
		$cls_definition['setshape'] = $method;
		$method = $pyjs__bind_method2('getshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr649,$attr650;
			return self['_shape'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getshape'] = $method;
		$method = $pyjs__bind_method2('reshape', function(dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
			}
			var $eq54,$eq53,array,$iter57_idx,size,$iter59_iter,$iter57_iter,subarray,$iter58_array,$iter58_type,$iter59_array,$iter58_iter,$bool123,$iter58_idx,$iter58_nextval,$iter57_type,array_size,i,$iter59_idx,$iter57_array,$iter59_nextval,$iter59_type,indices,$iter57_nextval;
			size = 1;
			$iter57_iter = dim;
			if (typeof ($iter57_array = $iter57_iter['__array']) != 'undefined') {
				$iter57_type = 0;
			} else {
				$iter57_iter = $iter57_iter['__iter__']();
				$iter57_type = typeof ($iter57_array = $iter57_iter['__array']) != 'undefined'? 0 : (typeof $iter57_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter57_idx = 0;
			while (typeof ($iter57_nextval=($iter57_type?($iter57_type > 0?$iter57_iter.next(true,false):$p['wrapped_next']($iter57_iter)):$iter57_array[$iter57_idx++])) != 'undefined') {
				i = $iter57_nextval;
				size *= i;
			}
			array_size = 1;
			$iter58_iter = self['_shape'];
			if (typeof ($iter58_array = $iter58_iter['__array']) != 'undefined') {
				$iter58_type = 0;
			} else {
				$iter58_iter = $iter58_iter['__iter__']();
				$iter58_type = typeof ($iter58_array = $iter58_iter['__array']) != 'undefined'? 0 : (typeof $iter58_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter58_idx = 0;
			while (typeof ($iter58_nextval=($iter58_type?($iter58_type > 0?$iter58_iter.next(true,false):$p['wrapped_next']($iter58_iter)):$iter58_array[$iter58_idx++])) != 'undefined') {
				i = $iter58_nextval;
				array_size *= i;
			}
			if ((($bool123=!(($eq53=size)===($eq54=array_size)&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
					false :
					(typeof $bool123=='object'?
						(typeof $bool123['__nonzero__']=='function'?
							$bool123['__nonzero__']() :
							(typeof $bool123['__len__']=='function'?
								($bool123['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('array size cannot change'));
			}
			subarray = self['__data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = dim;
			indices = $p['list']([]);
			$iter59_iter = array['_shape'];
			if (typeof ($iter59_array = $iter59_iter['__array']) != 'undefined') {
				$iter59_type = 0;
			} else {
				$iter59_iter = $iter59_iter['__iter__']();
				$iter59_type = typeof ($iter59_array = $iter59_iter['__array']) != 'undefined'? 0 : (typeof $iter59_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter59_idx = 0;
			while (typeof ($iter59_nextval=($iter59_type?($iter59_type > 0?$iter59_iter.next(true,false):$p['wrapped_next']($iter59_iter)):$iter59_array[$iter59_idx++])) != 'undefined') {
				i = $iter59_nextval;
				size /= i;
				indices['append'](size);
			}
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['dim']]);
		$cls_definition['reshape'] = $method;
		$method = $pyjs__bind_method2('set', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter68_array,$iter67_array,$eq55,$eq56,$iter68_idx,$iter67_iter,$bool130,$bool125,index,dataLn,$iter66_iter,$iter65_array,$bool131,$attr652,$attr653,$iter68_type,$attr651,$attr656,$attr657,$attr654,$attr655,$iter65_type,$244,$attr659,$242,$243,$241,$iter65_nextval,$attr662,$len51,$bool129,$bool128,$bool127,$bool126,$iter65_iter,$bool124,$attr658,$iter67_type,$attr664,$iter67_idx,$iter65_idx,$iter68_iter,$iter68_nextval,$iter66_array,$iter66_nextval,$iter67_nextval,$attr666,$attr665,$attr660,$attr663,$iter66_type,$attr661,$iter66_idx;
			if ((($bool124=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
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
				if ((($bool125=$m['pyjs_mode']['optimized']) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
						false :
						(typeof $bool125=='object'?
							(typeof $bool125['__nonzero__']=='function'?
								$bool125['__nonzero__']() :
								(typeof $bool125['__len__']=='function'?
									($bool125['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool126=$p['isinstance']((typeof ($241=data)['__array'] != 'undefined'?
						((typeof $241['__array'][$242=0]) != 'undefined'?$241['__array'][$242]:
							$241['__getitem__']($242)):
							$241['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]))) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
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
						data = function(){
							var $iter61_array,$iter61_type,$iter60_iter,$iter60_array,value,$iter60_idx,dat,$collcomp12,$iter60_nextval,$iter60_type,$iter61_iter,$iter61_idx,$iter61_nextval;
	$collcomp12 = $p['list']();
						$iter60_iter = data;
						if (typeof ($iter60_array = $iter60_iter['__array']) != 'undefined') {
							$iter60_type = 0;
						} else {
							$iter60_iter = $iter60_iter['__iter__']();
							$iter60_type = typeof ($iter60_array = $iter60_iter['__array']) != 'undefined'? 0 : (typeof $iter60_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter60_idx = 0;
						while (typeof ($iter60_nextval=($iter60_type?($iter60_type > 0?$iter60_iter.next(true,false):$p['wrapped_next']($iter60_iter)):$iter60_array[$iter60_idx++])) != 'undefined') {
							dat = $iter60_nextval;
							$iter61_iter = dat;
							if (typeof ($iter61_array = $iter61_iter['__array']) != 'undefined') {
								$iter61_type = 0;
							} else {
								$iter61_iter = $iter61_iter['__iter__']();
								$iter61_type = typeof ($iter61_array = $iter61_iter['__array']) != 'undefined'? 0 : (typeof $iter61_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter61_idx = 0;
							while (typeof ($iter61_nextval=($iter61_type?($iter61_type > 0?$iter61_iter.next(true,false):$p['wrapped_next']($iter61_iter)):$iter61_array[$iter61_idx++])) != 'undefined') {
								value = $iter61_nextval;
								$collcomp12['append'](value);
							}
						}

	return $collcomp12;}();
					}
				}
				else {
					if ((($bool128=!(($bool127=$p['isinstance']((typeof ($243=data)['__array'] != 'undefined'?
						((typeof $243['__array'][$244=0]) != 'undefined'?$243['__array'][$244]:
							$243['__getitem__']($244)):
							$243['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]))) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
						false :
						(typeof $bool127=='object'?
							(typeof $bool127['__nonzero__']=='function'?
								$bool127['__nonzero__']() :
								(typeof $bool127['__len__']=='function'?
									($bool127['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
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
						data = function(){
							var $iter62_nextval,$iter62_iter,dat,$iter62_array,$collcomp13,$iter62_idx,$iter62_type;
	$collcomp13 = $p['list']();
						$iter62_iter = data;
						if (typeof ($iter62_array = $iter62_iter['__array']) != 'undefined') {
							$iter62_type = 0;
						} else {
							$iter62_iter = $iter62_iter['__iter__']();
							$iter62_type = typeof ($iter62_array = $iter62_iter['__array']) != 'undefined'? 0 : (typeof $iter62_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter62_idx = 0;
						while (typeof ($iter62_nextval=($iter62_type?($iter62_type > 0?$iter62_iter.next(true,false):$p['wrapped_next']($iter62_iter)):$iter62_array[$iter62_idx++])) != 'undefined') {
							dat = $iter62_nextval;
							$collcomp13['append'](dat['valueOf']());
						}

	return $collcomp13;}();
					}
					else {
						data = function(){
							var $iter63_array,dat,$iter63_type,$iter64_iter,$iter64_type,value,$iter63_idx,$collcomp14,$iter64_array,$iter63_nextval,$iter64_nextval,$iter64_idx,$iter63_iter;
	$collcomp14 = $p['list']();
						$iter63_iter = data;
						if (typeof ($iter63_array = $iter63_iter['__array']) != 'undefined') {
							$iter63_type = 0;
						} else {
							$iter63_iter = $iter63_iter['__iter__']();
							$iter63_type = typeof ($iter63_array = $iter63_iter['__array']) != 'undefined'? 0 : (typeof $iter63_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter63_idx = 0;
						while (typeof ($iter63_nextval=($iter63_type?($iter63_type > 0?$iter63_iter.next(true,false):$p['wrapped_next']($iter63_iter)):$iter63_array[$iter63_idx++])) != 'undefined') {
							dat = $iter63_nextval;
							$iter64_iter = dat;
							if (typeof ($iter64_array = $iter64_iter['__array']) != 'undefined') {
								$iter64_type = 0;
							} else {
								$iter64_iter = $iter64_iter['__iter__']();
								$iter64_type = typeof ($iter64_array = $iter64_iter['__array']) != 'undefined'? 0 : (typeof $iter64_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter64_idx = 0;
							while (typeof ($iter64_nextval=($iter64_type?($iter64_type > 0?$iter64_iter.next(true,false):$p['wrapped_next']($iter64_iter)):$iter64_array[$iter64_idx++])) != 'undefined') {
								value = $iter64_nextval;
								$collcomp14['append'](value['valueOf']());
							}
						}

	return $collcomp14;}();
					}
				}
				dataLn = (($len51=data) === null?0:
					(typeof $len51['__array'] != 'undefined' ? $len51['__array']['length']:
						(typeof $len51['__len__'] == 'function'?$len51['__len__']():
							(typeof $len51['length'] != 'undefined'?$len51['length']:
								$p['len']($len51)))));
				data = data['getArray']();
			}
			else if ((($bool129=$p['isinstance'](data, $p['tuple']([$m['Ndarray'], $m['PyTypedArray']]))) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
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
				data = data['getArray']();
				dataLn = data['length'];
			}
			else {
				if ((($bool130=$m['pyjs_mode']['optimized']) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
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
					$iter65_iter = $p['xrange'](self['__data']['__data']['length']);
					if (typeof ($iter65_array = $iter65_iter['__array']) != 'undefined') {
						$iter65_type = 0;
					} else {
						$iter65_iter = $iter65_iter['__iter__']();
						$iter65_type = typeof ($iter65_array = $iter65_iter['__array']) != 'undefined'? 0 : (typeof $iter65_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter65_idx = 0;
					while (typeof ($iter65_nextval=($iter65_type?($iter65_type > 0?$iter65_iter.next(true,false):$p['wrapped_next']($iter65_iter)):$iter65_array[$iter65_idx++])) != 'undefined') {
						index = $iter65_nextval;
self['__data']['__data'][index]=data;
					}
				}
				else {
					data = data['valueOf']();
					$iter66_iter = $p['xrange'](self['__data']['__data']['length']);
					if (typeof ($iter66_array = $iter66_iter['__array']) != 'undefined') {
						$iter66_type = 0;
					} else {
						$iter66_iter = $iter66_iter['__iter__']();
						$iter66_type = typeof ($iter66_array = $iter66_iter['__array']) != 'undefined'? 0 : (typeof $iter66_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter66_idx = 0;
					while (typeof ($iter66_nextval=($iter66_type?($iter66_type > 0?$iter66_iter.next(true,false):$p['wrapped_next']($iter66_iter)):$iter66_array[$iter66_idx++])) != 'undefined') {
						index = $iter66_nextval;
self['__data']['__data'][index]=data;
					}
				}
				return null;
			}
			if ((($bool131=(($eq55=dataLn)===($eq56=self['__data']['__data']['length'])&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55['__cmp__']=='function'?$eq55['__cmp__']($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56['__cmp__']=='function'?$eq56['__cmp__']($eq55) === 0:
							$eq55==$eq56)))))) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
					false :
					(typeof $bool131=='object'?
						(typeof $bool131['__nonzero__']=='function'?
							$bool131['__nonzero__']() :
							(typeof $bool131['__len__']=='function'?
								($bool131['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter67_iter = $p['xrange'](self['__data']['__data']['length']);
				if (typeof ($iter67_array = $iter67_iter['__array']) != 'undefined') {
					$iter67_type = 0;
				} else {
					$iter67_iter = $iter67_iter['__iter__']();
					$iter67_type = typeof ($iter67_array = $iter67_iter['__array']) != 'undefined'? 0 : (typeof $iter67_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter67_idx = 0;
				while (typeof ($iter67_nextval=($iter67_type?($iter67_type > 0?$iter67_iter.next(true,false):$p['wrapped_next']($iter67_iter)):$iter67_array[$iter67_idx++])) != 'undefined') {
					index = $iter67_nextval;
self['__data']['__data'][index]=data[index];
				}
			}
			else {
				$iter68_iter = $p['xrange'](self['__data']['__data']['length']);
				if (typeof ($iter68_array = $iter68_iter['__array']) != 'undefined') {
					$iter68_type = 0;
				} else {
					$iter68_iter = $iter68_iter['__iter__']();
					$iter68_type = typeof ($iter68_array = $iter68_iter['__array']) != 'undefined'? 0 : (typeof $iter68_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter68_idx = 0;
				while (typeof ($iter68_nextval=($iter68_type?($iter68_type > 0?$iter68_iter.next(true,false):$p['wrapped_next']($iter68_iter)):$iter68_array[$iter68_idx++])) != 'undefined') {
					index = $iter68_nextval;
self['__data']['__data'][index]=data[index%dataLn];
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $iter70_array,index,$iter70_type,$iter69_idx,$iter70_iter,$iter69_nextval,$iter69_type,$iter70_idx,$attr672,$bool132,$attr669,$attr668,$attr667,$iter70_nextval,$iter69_array,$attr670,$attr671,$iter69_iter;
			if ((($bool132=$m['pyjs_mode']['optimized']) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
					false :
					(typeof $bool132=='object'?
						(typeof $bool132['__nonzero__']=='function'?
							$bool132['__nonzero__']() :
							(typeof $bool132['__len__']=='function'?
								($bool132['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter69_iter = $p['xrange'](self['__data']['__data']['length']);
				if (typeof ($iter69_array = $iter69_iter['__array']) != 'undefined') {
					$iter69_type = 0;
				} else {
					$iter69_iter = $iter69_iter['__iter__']();
					$iter69_type = typeof ($iter69_array = $iter69_iter['__array']) != 'undefined'? 0 : (typeof $iter69_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter69_idx = 0;
				while (typeof ($iter69_nextval=($iter69_type?($iter69_type > 0?$iter69_iter.next(true,false):$p['wrapped_next']($iter69_iter)):$iter69_array[$iter69_idx++])) != 'undefined') {
					index = $iter69_nextval;
self['__data']['__data'][index]=value;
				}
			}
			else {
				value = value['valueOf']();
				$iter70_iter = $p['xrange'](self['__data']['__data']['length']);
				if (typeof ($iter70_array = $iter70_iter['__array']) != 'undefined') {
					$iter70_type = 0;
				} else {
					$iter70_iter = $iter70_iter['__iter__']();
					$iter70_type = typeof ($iter70_array = $iter70_iter['__array']) != 'undefined'? 0 : (typeof $iter70_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter70_idx = 0;
				while (typeof ($iter70_nextval=($iter70_type?($iter70_type > 0?$iter70_iter.next(true,false):$p['wrapped_next']($iter70_iter)):$iter70_array[$iter70_idx++])) != 'undefined') {
					index = $iter70_nextval;
self['__data']['__data'][index]=value;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr684,$attr677,$attr680,$attr681,$246,$attr683,$attr682,$attr678,$attr679,$attr674,$attr675,$attr676,$245,array,ndarray,$attr673;
			array = (typeof ($245=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $245['__array'][$246=self['_dtype']]) != 'undefined'?$245['__array'][$246]:
					$245['__getitem__']($246)):
					$245['__getitem__'](self['_dtype']))(self['__data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('astype', function(dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dtype = arguments[1];
			}
			var $attr687,$attr689,$attr685,$attr690,$248,$attr686,$attr688,$247,array,$attr692,ndarray,$attr691;
			array = (typeof ($247=$m['Ndarray']['__typedarray'])['__array'] != 'undefined'?
				((typeof $247['__array'][$248=dtype]) != 'undefined'?$247['__array'][$248]:
					$247['__getitem__']($248)):
					$247['__getitem__'](dtype))(self['__data']);
			ndarray = $m['Ndarray'](array, dtype);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			return ndarray;
		}
	, 1, [null,null,['self'],['dtype']]);
		$cls_definition['astype'] = $method;
		$method = $pyjs__bind_method2('view', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr693,$attr696,subarray,$attr694,$attr695,array;
			subarray = self['__data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = self['_shape'];
			array['_indices'] = self['_indices'];
			return array;
		}
	, 1, [null,null,['self']]);
		$cls_definition['view'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				axis1 = arguments[1];
				axis2 = arguments[2];
			}
			var $attr700,$attr701,$attr702,$attr703,$attr704,shape,array,$249,$251,$attr698,$attr699,$attr697,indices,$250,$253,$252,$255,$254,$256;
			array = $m['Ndarray'](self['__data'], self['_dtype']);
			shape = $p['list'](self['_shape']);
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($249=shape)['__array'] != 'undefined'?
				((typeof $249['__array'][$250=axis2]) != 'undefined'?$249['__array'][$250]:
					$249['__getitem__']($250)):
					$249['__getitem__'](axis2)), (typeof ($251=shape)['__array'] != 'undefined'?
				((typeof $251['__array'][$252=axis1]) != 'undefined'?$251['__array'][$252]:
					$251['__getitem__']($252)):
					$251['__getitem__'](axis1))]), 2, null);
			shape['__setitem__'](axis1, $tupleassign3[0]);
			shape['__setitem__'](axis2, $tupleassign3[1]);
			array['_shape'] = $p['tuple'](shape);
			indices = $p['list'](self['_indices']);
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([(typeof ($253=indices)['__array'] != 'undefined'?
				((typeof $253['__array'][$254=axis2]) != 'undefined'?$253['__array'][$254]:
					$253['__getitem__']($254)):
					$253['__getitem__'](axis2)), (typeof ($255=indices)['__array'] != 'undefined'?
				((typeof $255['__array'][$256=axis1]) != 'undefined'?$255['__array'][$256]:
					$255['__getitem__']($256)):
					$255['__getitem__'](axis1))]), 2, null);
			indices['__setitem__'](axis1, $tupleassign4[0]);
			indices['__setitem__'](axis2, $tupleassign4[1]);
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__data']['getArray']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Ndarray', $p['tuple']($bases), $data);
	})();
	$m['NP'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('zeros', function(size, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				dtype = arguments[2];
			}
			var $eq57,$eq58,$bool133;
			if ((($bool133=(($eq57=dtype)===($eq58='i')&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57['__cmp__']=='function'?$eq57['__cmp__']($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58['__cmp__']=='function'?$eq58['__cmp__']($eq57) === 0:
							$eq57==$eq58)))))) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
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
				dtype = 3;
			}
			return $m['Ndarray'](size, dtype);
		}
	, 1, [null,null,['self'],['size'],['dtype']]);
		$cls_definition['zeros'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(array, axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				axis1 = arguments[2];
				axis2 = arguments[3];
			}

			return array['swapaxes'](axis1, axis2);
		}
	, 1, [null,null,['self'],['array'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('append', function(array, values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				values = arguments[2];
			}
			var $attr705,$attr706,$attr707,$attr708,$len54,$258,newarray,$len52,$len53,$bool134,$257;
			if ((($bool134=$p['isinstance']((typeof ($257=values)['__array'] != 'undefined'?
				((typeof $257['__array'][$258=0]) != 'undefined'?$257['__array'][$258]:
					$257['__getitem__']($258)):
					$257['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]))) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
					false :
					(typeof $bool134=='object'?
						(typeof $bool134['__nonzero__']=='function'?
							$bool134['__nonzero__']() :
							(typeof $bool134['__len__']=='function'?
								($bool134['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				values = function(){
					var $iter71_nextval,$iter72_array,$iter71_iter,$iter72_type,value,dat,$iter71_array,$collcomp15,$iter72_iter,$iter71_idx,$iter71_type,$iter72_idx,$iter72_nextval;
	$collcomp15 = $p['list']();
				$iter71_iter = values;
				if (typeof ($iter71_array = $iter71_iter['__array']) != 'undefined') {
					$iter71_type = 0;
				} else {
					$iter71_iter = $iter71_iter['__iter__']();
					$iter71_type = typeof ($iter71_array = $iter71_iter['__array']) != 'undefined'? 0 : (typeof $iter71_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter71_idx = 0;
				while (typeof ($iter71_nextval=($iter71_type?($iter71_type > 0?$iter71_iter.next(true,false):$p['wrapped_next']($iter71_iter)):$iter71_array[$iter71_idx++])) != 'undefined') {
					dat = $iter71_nextval;
					$iter72_iter = dat;
					if (typeof ($iter72_array = $iter72_iter['__array']) != 'undefined') {
						$iter72_type = 0;
					} else {
						$iter72_iter = $iter72_iter['__iter__']();
						$iter72_type = typeof ($iter72_array = $iter72_iter['__array']) != 'undefined'? 0 : (typeof $iter72_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter72_idx = 0;
					while (typeof ($iter72_nextval=($iter72_type?($iter72_type > 0?$iter72_iter.next(true,false):$p['wrapped_next']($iter72_iter)):$iter72_array[$iter72_idx++])) != 'undefined') {
						value = $iter72_nextval;
						$collcomp15['append'](value);
					}
				}

	return $collcomp15;}();
			}
			newarray = $m['Ndarray'](((($len52=array) === null?0:
				(typeof $len52['__array'] != 'undefined' ? $len52['__array']['length']:
					(typeof $len52['__len__'] == 'function'?$len52['__len__']():
						(typeof $len52['length'] != 'undefined'?$len52['length']:
							$p['len']($len52))))))+((($len53=values) === null?0:
				(typeof $len53['__array'] != 'undefined' ? $len53['__array']['length']:
					(typeof $len53['__len__'] == 'function'?$len53['__len__']():
						(typeof $len53['length'] != 'undefined'?$len53['length']:
							$p['len']($len53)))))), array['_dtype']);
			newarray['__data']['set'](array['__data']);
			newarray['__data']['set'](values, (($len54=array) === null?0:
				(typeof $len54['__array'] != 'undefined' ? $len54['__array']['length']:
					(typeof $len54['__len__'] == 'function'?$len54['__len__']():
						(typeof $len54['length'] != 'undefined'?$len54['length']:
							$p['len']($len54))))));
			return newarray;
		}
	, 1, [null,null,['self'],['array'],['values']]);
		$cls_definition['append'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NP', $p['tuple']($bases), $data);
	})();
	$m['np'] = $m['NP']();
	$m['PyImageData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $attr713,$attr712,$attr711,$attr710,$attr714,$attr709,$bool135,$bool136;
			self['__imagedata'] = imagedata;
			if ((($bool136=!(($bool135=$p['isUndefined']((typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray))) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
				false :
				(typeof $bool135=='object'?
					(typeof $bool135['__nonzero__']=='function'?
						$bool135['__nonzero__']() :
						(typeof $bool135['__len__']=='function'?
							($bool135['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
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
				self['data'] = $m['PyUint8ClampedArray']();
			}
			else {
				self['data'] = $m['PyCanvasPixelArray']();
			}
			self['data']['__data'] = imagedata['data'];
			self['width'] = imagedata['width'];
			self['height'] = imagedata['height'];
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr716,$attr715;
			return self['__imagedata'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageData', $p['tuple']($bases), $data);
	})();
	$m['PyImageMatrix'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $attr726,$attr724,$attr725,$attr717,$attr720,$attr721,$attr718,$attr722,$bool137,$attr719,$attr723;
			self['__imagedata'] = $m['PyImageData'](imagedata);
			if ((($bool137=$p['isinstance'](self['__imagedata']['data'], $m['PyUint8ClampedArray'])) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
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
				$m['Ndarray']['__init__'](self, self['__imagedata']['data'], 0);
			}
			else {
				$m['Ndarray']['__init__'](self, self['__imagedata']['data'], 1);
			}
			self['setshape'](self['__imagedata']['height'], self['__imagedata']['width'], 4);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr727,$attr728;
			return self['__imagedata']['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr730,$attr729;
			return self['__imagedata']['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getPixel', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $261,$260,$attr738,$262,$263,$264,$265,$266,$267,$268,$269,$attr733,$attr732,$attr735,$attr734,$attr737,$attr736,$attr739,$attr731,i,$259,$272,$271,$270,$attr740;
			i = (((typeof ($259=index)['__array'] != 'undefined'?
				((typeof $259['__array'][$260=0]) != 'undefined'?$259['__array'][$260]:
					$259['__getitem__']($260)):
					$259['__getitem__'](0)))*((typeof ($261=self['_indices'])['__array'] != 'undefined'?
				((typeof $261['__array'][$262=0]) != 'undefined'?$261['__array'][$262]:
					$261['__getitem__']($262)):
					$261['__getitem__'](0))))+(((typeof ($263=index)['__array'] != 'undefined'?
				((typeof $263['__array'][$264=1]) != 'undefined'?$263['__array'][$264]:
					$263['__getitem__']($264)):
					$263['__getitem__'](1)))*(4));
			return $p['tuple']([(typeof ($265=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $265['__array'][$266=i]) != 'undefined'?$265['__array'][$266]:
					$265['__getitem__']($266)):
					$265['__getitem__'](i)), (typeof ($267=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $267['__array'][$268=(i)+(1)]) != 'undefined'?$267['__array'][$268]:
					$267['__getitem__']($268)):
					$267['__getitem__']((i)+(1))), (typeof ($269=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $269['__array'][$270=(i)+(2)]) != 'undefined'?$269['__array'][$270]:
					$269['__getitem__']($270)):
					$269['__getitem__']((i)+(2))), (typeof ($271=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $271['__array'][$272=(i)+(3)]) != 'undefined'?$271['__array'][$272]:
					$271['__getitem__']($272)):
					$271['__getitem__']((i)+(3)))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixel'] = $method;
		$method = $pyjs__bind_method2('setPixel', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $attr750,$attr748,$attr749,$282,$283,$280,$281,$286,$284,$285,$attr746,$attr747,i,$273,$277,$276,$275,$274,$attr744,$attr745,$279,$278,$attr741,$attr742,$attr743;
			i = (((typeof ($273=index)['__array'] != 'undefined'?
				((typeof $273['__array'][$274=0]) != 'undefined'?$273['__array'][$274]:
					$273['__getitem__']($274)):
					$273['__getitem__'](0)))*((typeof ($275=self['_indices'])['__array'] != 'undefined'?
				((typeof $275['__array'][$276=0]) != 'undefined'?$275['__array'][$276]:
					$275['__getitem__']($276)):
					$275['__getitem__'](0))))+(((typeof ($277=index)['__array'] != 'undefined'?
				((typeof $277['__array'][$278=1]) != 'undefined'?$277['__array'][$278]:
					$277['__getitem__']($278)):
					$277['__getitem__'](1)))*(4));
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([(typeof ($279=value)['__array'] != 'undefined'?
				((typeof $279['__array'][$280=0]) != 'undefined'?$279['__array'][$280]:
					$279['__getitem__']($280)):
					$279['__getitem__'](0)), (typeof ($281=value)['__array'] != 'undefined'?
				((typeof $281['__array'][$282=1]) != 'undefined'?$281['__array'][$282]:
					$281['__getitem__']($282)):
					$281['__getitem__'](1)), (typeof ($283=value)['__array'] != 'undefined'?
				((typeof $283['__array'][$284=2]) != 'undefined'?$283['__array'][$284]:
					$283['__getitem__']($284)):
					$283['__getitem__'](2)), (typeof ($285=value)['__array'] != 'undefined'?
				((typeof $285['__array'][$286=3]) != 'undefined'?$285['__array'][$286]:
					$285['__getitem__']($286)):
					$285['__getitem__'](3))]), 4, null);
			self['__imagedata']['data']['__setitem__'](i, $tupleassign5[0]);
			self['__imagedata']['data']['__setitem__']((i)+(1), $tupleassign5[1]);
			self['__imagedata']['data']['__setitem__']((i)+(2), $tupleassign5[2]);
			self['__imagedata']['data']['__setitem__']((i)+(3), $tupleassign5[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixel'] = $method;
		$method = $pyjs__bind_method2('getPixelRGB', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $298,$295,$294,$297,$296,$291,$290,$293,$292,$attr758,$attr757,$attr756,$attr755,$attr754,$attr753,$attr752,$attr751,$287,$288,$289,i;
			i = (((typeof ($287=index)['__array'] != 'undefined'?
				((typeof $287['__array'][$288=0]) != 'undefined'?$287['__array'][$288]:
					$287['__getitem__']($288)):
					$287['__getitem__'](0)))*((typeof ($289=self['_indices'])['__array'] != 'undefined'?
				((typeof $289['__array'][$290=0]) != 'undefined'?$289['__array'][$290]:
					$289['__getitem__']($290)):
					$289['__getitem__'](0))))+(((typeof ($291=index)['__array'] != 'undefined'?
				((typeof $291['__array'][$292=1]) != 'undefined'?$291['__array'][$292]:
					$291['__getitem__']($292)):
					$291['__getitem__'](1)))*(4));
			return $p['tuple']([(typeof ($293=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $293['__array'][$294=i]) != 'undefined'?$293['__array'][$294]:
					$293['__getitem__']($294)):
					$293['__getitem__'](i)), (typeof ($295=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $295['__array'][$296=(i)+(1)]) != 'undefined'?$295['__array'][$296]:
					$295['__getitem__']($296)):
					$295['__getitem__']((i)+(1))), (typeof ($297=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $297['__array'][$298=(i)+(2)]) != 'undefined'?$297['__array'][$298]:
					$297['__getitem__']($298)):
					$297['__getitem__']((i)+(2)))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelRGB'] = $method;
		$method = $pyjs__bind_method2('setPixelRGB', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $299,$303,$302,$301,$300,$307,$306,$305,$304,$309,$308,$310,$attr759,i,$attr762,$attr763,$attr760,$attr761,$attr766,$attr764,$attr765;
			i = (((typeof ($299=index)['__array'] != 'undefined'?
				((typeof $299['__array'][$300=0]) != 'undefined'?$299['__array'][$300]:
					$299['__getitem__']($300)):
					$299['__getitem__'](0)))*((typeof ($301=self['_indices'])['__array'] != 'undefined'?
				((typeof $301['__array'][$302=0]) != 'undefined'?$301['__array'][$302]:
					$301['__getitem__']($302)):
					$301['__getitem__'](0))))+(((typeof ($303=index)['__array'] != 'undefined'?
				((typeof $303['__array'][$304=1]) != 'undefined'?$303['__array'][$304]:
					$303['__getitem__']($304)):
					$303['__getitem__'](1)))*(4));
			var $tupleassign6 = $p['__ass_unpack']($p['tuple']([(typeof ($305=value)['__array'] != 'undefined'?
				((typeof $305['__array'][$306=0]) != 'undefined'?$305['__array'][$306]:
					$305['__getitem__']($306)):
					$305['__getitem__'](0)), (typeof ($307=value)['__array'] != 'undefined'?
				((typeof $307['__array'][$308=1]) != 'undefined'?$307['__array'][$308]:
					$307['__getitem__']($308)):
					$307['__getitem__'](1)), (typeof ($309=value)['__array'] != 'undefined'?
				((typeof $309['__array'][$310=2]) != 'undefined'?$309['__array'][$310]:
					$309['__getitem__']($310)):
					$309['__getitem__'](2))]), 3, null);
			self['__imagedata']['data']['__setitem__'](i, $tupleassign6[0]);
			self['__imagedata']['data']['__setitem__']((i)+(1), $tupleassign6[1]);
			self['__imagedata']['data']['__setitem__']((i)+(2), $tupleassign6[2]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelRGB'] = $method;
		$method = $pyjs__bind_method2('getPixelAlpha', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr770,i,$311,$312,$313,$314,$attr767,$316,$317,$318,$attr768,$attr769,$315;
			i = (((typeof ($311=index)['__array'] != 'undefined'?
				((typeof $311['__array'][$312=0]) != 'undefined'?$311['__array'][$312]:
					$311['__getitem__']($312)):
					$311['__getitem__'](0)))*((typeof ($313=self['_indices'])['__array'] != 'undefined'?
				((typeof $313['__array'][$314=0]) != 'undefined'?$313['__array'][$314]:
					$313['__getitem__']($314)):
					$313['__getitem__'](0))))+(((typeof ($315=index)['__array'] != 'undefined'?
				((typeof $315['__array'][$316=1]) != 'undefined'?$315['__array'][$316]:
					$315['__getitem__']($316)):
					$315['__getitem__'](1)))*(4));
			return (typeof ($317=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $317['__array'][$318=(i)+(3)]) != 'undefined'?$317['__array'][$318]:
					$317['__getitem__']($318)):
					$317['__getitem__']((i)+(3)));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('setPixelAlpha', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var i,$attr772,$attr774,$attr771,$attr773,$319,$321,$320,$323,$322,$324;
			i = (((typeof ($319=index)['__array'] != 'undefined'?
				((typeof $319['__array'][$320=0]) != 'undefined'?$319['__array'][$320]:
					$319['__getitem__']($320)):
					$319['__getitem__'](0)))*((typeof ($321=self['_indices'])['__array'] != 'undefined'?
				((typeof $321['__array'][$322=0]) != 'undefined'?$321['__array'][$322]:
					$321['__getitem__']($322)):
					$321['__getitem__'](0))))+(((typeof ($323=index)['__array'] != 'undefined'?
				((typeof $323['__array'][$324=1]) != 'undefined'?$323['__array'][$324]:
					$323['__getitem__']($324)):
					$323['__getitem__'](1)))*(4));
			self['__imagedata']['data']['__setitem__']((i)+(3), value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('getPixelInteger', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr775,$attr780,$attr781,$attr782,$attr783,$attr784,$329,$328,$attr777,$attr776,$attr779,$attr778,$327,$326,i,$325,$338,$336,$337,$334,$335,$332,$333,$330,$331;
			i = (((typeof ($325=index)['__array'] != 'undefined'?
				((typeof $325['__array'][$326=0]) != 'undefined'?$325['__array'][$326]:
					$325['__getitem__']($326)):
					$325['__getitem__'](0)))*((typeof ($327=self['_indices'])['__array'] != 'undefined'?
				((typeof $327['__array'][$328=0]) != 'undefined'?$327['__array'][$328]:
					$327['__getitem__']($328)):
					$327['__getitem__'](0))))+(((typeof ($329=index)['__array'] != 'undefined'?
				((typeof $329['__array'][$330=1]) != 'undefined'?$329['__array'][$330]:
					$329['__getitem__']($330)):
					$329['__getitem__'](1)))*(4));
			return (((typeof ($331=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $331['__array'][$332=i]) != 'undefined'?$331['__array'][$332]:
					$331['__getitem__']($332)):
					$331['__getitem__'](i)))<<(16))|(((typeof ($333=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $333['__array'][$334=(i)+(1)]) != 'undefined'?$333['__array'][$334]:
					$333['__getitem__']($334)):
					$333['__getitem__']((i)+(1))))<<(8))|((typeof ($335=self['__imagedata']['data'])['__array'] != 'undefined'?
				((typeof $335['__array'][$336=(i)+(2)]) != 'undefined'?$335['__array'][$336]:
					$335['__getitem__']($336)):
					$335['__getitem__']((i)+(2))))|(((typeof ($337=self['imagedata']['data'])['__array'] != 'undefined'?
				((typeof $337['__array'][$338=(i)+(3)]) != 'undefined'?$337['__array'][$338]:
					$337['__getitem__']($338)):
					$337['__getitem__']((i)+(3))))<<(24));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelInteger'] = $method;
		$method = $pyjs__bind_method2('setPixelInteger', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var i,$344,$343,$342,$340,$attr788,$attr789,$attr794,$341,$339,$attr793,$attr792,$attr791,$attr790,$attr785,$attr786,$attr787;
			i = (((typeof ($339=index)['__array'] != 'undefined'?
				((typeof $339['__array'][$340=0]) != 'undefined'?$339['__array'][$340]:
					$339['__getitem__']($340)):
					$339['__getitem__'](0)))*((typeof ($341=self['_indices'])['__array'] != 'undefined'?
				((typeof $341['__array'][$342=0]) != 'undefined'?$341['__array'][$342]:
					$341['__getitem__']($342)):
					$341['__getitem__'](0))))+(((typeof ($343=index)['__array'] != 'undefined'?
				((typeof $343['__array'][$344=1]) != 'undefined'?$343['__array'][$344]:
					$343['__getitem__']($344)):
					$343['__getitem__'](1)))*(4));
			var $tupleassign7 = $p['__ass_unpack']($p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), ((value)>>(24))&(255)]), 4, null);
			self['__imagedata']['data']['__setitem__'](i, $tupleassign7[0]);
			self['__imagedata']['data']['__setitem__']((i)+(1), $tupleassign7[1]);
			self['__imagedata']['data']['__setitem__']((i)+(2), $tupleassign7[2]);
			self['__imagedata']['data']['__setitem__']((i)+(3), $tupleassign7[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelInteger'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageMatrix', $p['tuple']($bases), $data);
	})();
	$m['BitSet'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 8;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint8Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			var $attr807,$attr806,$attr805,$attr804,$bool138,$bool139,$attr801,$attr809,$attr808,$346,$345,$attr814,$attr810,$attr811,$attr812,$attr813,$bool140,$attr796,$attr795,$attr803,$attr802;
			if ((($bool139=!(($bool138=self['__class__']['__bitmask']) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
				false :
				(typeof $bool138=='object'?
					(typeof $bool138['__nonzero__']=='function'?
						$bool138['__nonzero__']() :
						(typeof $bool138['__len__']=='function'?
							($bool138['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
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
				self['__class__']['__bitmask'] = $p['dict'](function(){
					var $iter73_iter,i,$iter73_array,$iter73_idx,$collcomp16,$attr799,$attr798,$attr800,$iter73_nextval,$iter73_type,$attr797;
	$collcomp16 = $p['list']();
				$iter73_iter = $p['range']((self['__class__']['__bit'])-(1), -(1), -(1));
				if (typeof ($iter73_array = $iter73_iter['__array']) != 'undefined') {
					$iter73_type = 0;
				} else {
					$iter73_iter = $iter73_iter['__iter__']();
					$iter73_type = typeof ($iter73_array = $iter73_iter['__array']) != 'undefined'? 0 : (typeof $iter73_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter73_idx = 0;
				while (typeof ($iter73_nextval=($iter73_type?($iter73_type > 0?$iter73_iter.next(true,false):$p['wrapped_next']($iter73_iter)):$iter73_array[$iter73_idx++])) != 'undefined') {
					i = $iter73_nextval;
					$collcomp16['append']($p['tuple']([((self['__class__']['__bit'])-(i))-(1), (1)<<(i)]));
				}

	return $collcomp16;}());
				self['__class__']['__bitmask']['__setitem__']((self['__class__']['__bit'])-(1), $p['float_int']((typeof ($345=self['__class__']['__bitmask'])['__array'] != 'undefined'?
					((typeof $345['__array'][$346=(self['__class__']['__bit'])-(1)]) != 'undefined'?$345['__array'][$346]:
						$345['__getitem__']($346)):
						$345['__getitem__']((self['__class__']['__bit'])-(1)))));
			}
			if ((($bool140=width) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
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
				self['__width'] = $p['abs'](width);
			}
			else {
				self['__width'] = self['__bit'];
			}
			self['__data'] = self['__typedarray']($m['_ceil']((self['__width'])/((self['__bit'])*(1.0))));
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr815,$attr816;
			return $p['sprintf']('%s', self['__class__']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$attr818,$iter74_array,$iter74_nextval,$iter74_iter,$attr817,$bool141,$iter74_idx,$iter74_type,setBit;
			setBit = $p['list']([]);
			$iter74_iter = $p['xrange'](self['__width']);
			if (typeof ($iter74_array = $iter74_iter['__array']) != 'undefined') {
				$iter74_type = 0;
			} else {
				$iter74_iter = $iter74_iter['__iter__']();
				$iter74_type = typeof ($iter74_array = $iter74_iter['__array']) != 'undefined'? 0 : (typeof $iter74_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter74_idx = 0;
			while (typeof ($iter74_nextval=($iter74_type?($iter74_type > 0?$iter74_iter.next(true,false):$p['wrapped_next']($iter74_iter)):$iter74_array[$iter74_idx++])) != 'undefined') {
				index = $iter74_nextval;
				if ((($bool141=self['get'](index)) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
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
					setBit['append']($p['str'](index));
				}
			}
			return (('{')+(', '['join'](setBit)))+('}');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['get'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

			self['set'](index, value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$iter75_nextval,$iter75_iter,$attr820,$iter75_type,$iter75_idx,$attr819,$bool142,$iter75_array;
			$iter75_iter = $p['xrange']((self['__width'])-(1), -(1), -(1));
			if (typeof ($iter75_array = $iter75_iter['__array']) != 'undefined') {
				$iter75_type = 0;
			} else {
				$iter75_iter = $iter75_iter['__iter__']();
				$iter75_type = typeof ($iter75_array = $iter75_iter['__array']) != 'undefined'? 0 : (typeof $iter75_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter75_idx = 0;
			while (typeof ($iter75_nextval=($iter75_type?($iter75_type > 0?$iter75_iter.next(true,false):$p['wrapped_next']($iter75_iter)):$iter75_array[$iter75_idx++])) != 'undefined') {
				index = $iter75_nextval;
				if ((($bool142=self['get'](index)) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
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
					break;
				}
			}
			return (index)+(1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$attr824,$attr821,$attr823,$attr822,$cmp23,$cmp24,$cmp25,$cmp26,$bool143,$bool144;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool144=((($cmp25=index)===($cmp26=self['__width'])?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
							false :
							(typeof $bool144=='object'?
								(typeof $bool144['__nonzero__']=='function'?
									$bool144['__nonzero__']() :
									(typeof $bool144['__len__']=='function'?
										($bool144['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = self['get'](index);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index += 1;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('get', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var ix,$iter76_nextval,$attr829,$attr828,$attr825,$attr844,$attr827,$attr826,$350,$351,$352,$353,$attr843,$mod4,$mod6,$mod3,$cmp27,$cmp28,$cmp29,$iter76_iter,$attr840,$attr841,$attr845,size,$bool150,$bool151,$attr842,$cmp33,$attr846,$attr832,$cmp31,$bool146,$attr838,$attr839,$349,$348,$347,$attr833,$attr830,$attr831,$attr836,$attr837,$attr834,$attr835,$bool149,$bool148,bitset,$cmp34,$bool145,$cmp32,$bool147,$cmp30,$mod5,i,$354,$iter76_array,$iter76_type,$iter76_idx;
			if ((($bool145=((($cmp27=index)===($cmp28=(self['__width'])-(1))?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
					false :
					(typeof $bool145=='object'?
						(typeof $bool145['__nonzero__']=='function'?
							$bool145['__nonzero__']() :
							(typeof $bool145['__len__']=='function'?
								($bool145['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool147=!(($bool146=toIndex) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
					false :
					(typeof $bool146=='object'?
						(typeof $bool146['__nonzero__']=='function'?
							$bool146['__nonzero__']() :
							(typeof $bool146['__len__']=='function'?
								($bool146['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
						false :
						(typeof $bool147=='object'?
							(typeof $bool147['__nonzero__']=='function'?
								$bool147['__nonzero__']() :
								(typeof $bool147['__len__']=='function'?
									($bool147['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return false;
				}
				else {
					size = (toIndex)-(index);
					if ((($bool148=((($cmp29=size)===($cmp30=0)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
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
						return self['__class__'](size);
					}
					else {
						return null;
					}
				}
			}
			if ((($bool149=(toIndex === null)) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
					false :
					(typeof $bool149=='object'?
						(typeof $bool149['__nonzero__']=='function'?
							$bool149['__nonzero__']() :
							(typeof $bool149['__len__']=='function'?
								($bool149['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['bool'](((typeof ($347=self['__data'])['__array'] != 'undefined'?
					((typeof $347['__array'][$348=$p['float_int']((index)/(self['__bit']))]) != 'undefined'?$347['__array'][$348]:
						$347['__getitem__']($348)):
						$347['__getitem__']($p['float_int']((index)/(self['__bit'])))))&((typeof ($349=self['__bitmask'])['__array'] != 'undefined'?
					((typeof $349['__array'][$350=(($mod3=index)!=null && ($mod4=self['__bit'])!=null && typeof $mod3=='string'?
					$p['sprintf']($mod3,$mod4):
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))]) != 'undefined'?$349['__array'][$350]:
						$349['__getitem__']($350)):
						$349['__getitem__']((($mod3=index)!=null && ($mod4=self['__bit'])!=null && typeof $mod3=='string'?
					$p['sprintf']($mod3,$mod4):
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))))));
			}
			else {
				size = (toIndex)-(index);
				if ((($bool150=((($cmp31=size)===($cmp32=0)?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) == 1)) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
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
					bitset = self['__class__'](size);
					ix = 0;
					if ((($bool151=((($cmp33=toIndex)===($cmp34=self['__width'])?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
							false :
							(typeof $bool151=='object'?
								(typeof $bool151['__nonzero__']=='function'?
									$bool151['__nonzero__']() :
									(typeof $bool151['__len__']=='function'?
										($bool151['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						toIndex = self['__width'];
					}
					$iter76_iter = $p['xrange'](index, toIndex);
					if (typeof ($iter76_array = $iter76_iter['__array']) != 'undefined') {
						$iter76_type = 0;
					} else {
						$iter76_iter = $iter76_iter['__iter__']();
						$iter76_type = typeof ($iter76_array = $iter76_iter['__array']) != 'undefined'? 0 : (typeof $iter76_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter76_idx = 0;
					while (typeof ($iter76_nextval=($iter76_type?($iter76_type > 0?$iter76_iter.next(true,false):$p['wrapped_next']($iter76_iter)):$iter76_array[$iter76_idx++])) != 'undefined') {
						i = $iter76_nextval;
						bitset['set'](ix, $p['bool'](((typeof ($351=self['__data'])['__array'] != 'undefined'?
							((typeof $351['__array'][$352=$p['float_int']((i)/(self['__bit']))]) != 'undefined'?$351['__array'][$352]:
								$351['__getitem__']($352)):
								$351['__getitem__']($p['float_int']((i)/(self['__bit'])))))&((typeof ($353=self['__bitmask'])['__array'] != 'undefined'?
							((typeof $353['__array'][$354=(($mod5=i)!=null && ($mod6=self['__bit'])!=null && typeof $mod5=='string'?
							$p['sprintf']($mod5,$mod6):
							(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))]) != 'undefined'?$353['__array'][$354]:
								$353['__getitem__']($354)):
								$353['__getitem__']((($mod5=i)!=null && ($mod6=self['__bit'])!=null && typeof $mod5=='string'?
							$p['sprintf']($mod5,$mod6):
							(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5)))))));
						ix += 1;
					}
					return bitset;
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('set', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var $358,$359,$355,$356,$357,$attr861,$attr860,$mod7,$attr848,$attr865,$attr864,$attr867,$cmp36,$attr869,$attr868,$attr847,$mod8,$bool154,$bool152,$bool153,$mod9,$attr872,$attr852,$360,$362,$361,$attr871,$attr870,$mod10,$attr866,$attr858,$attr859,$attr850,$attr851,$cmp35,$attr853,$attr854,$attr855,$attr856,$attr857,$attr849,$attr862,$attr863;
			if ((($bool152=((($cmp35=index)===($cmp36=(self['__width'])-(1))?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$p['cmp']($cmp35, $cmp36))) == 1)) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
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
				if ((($bool153=value) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
						false :
						(typeof $bool153=='object'?
							(typeof $bool153['__nonzero__']=='function'?
								$bool153['__nonzero__']() :
								(typeof $bool153['__len__']=='function'?
									($bool153['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['resize']((index)+(1));
				}
				else {
					return null;
				}
			}
			if ((($bool154=value) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
					false :
					(typeof $bool154=='object'?
						(typeof $bool154['__nonzero__']=='function'?
							$bool154['__nonzero__']() :
							(typeof $bool154['__len__']=='function'?
								($bool154['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['__data']['__setitem__']($p['float_int']((index)/(self['__bit'])), ((typeof ($355=self['__data'])['__array'] != 'undefined'?
					((typeof $355['__array'][$356=$p['float_int']((index)/(self['__bit']))]) != 'undefined'?$355['__array'][$356]:
						$355['__getitem__']($356)):
						$355['__getitem__']($p['float_int']((index)/(self['__bit'])))))|((typeof ($357=self['__bitmask'])['__array'] != 'undefined'?
					((typeof $357['__array'][$358=(($mod7=index)!=null && ($mod8=self['__bit'])!=null && typeof $mod7=='string'?
					$p['sprintf']($mod7,$mod8):
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7))]) != 'undefined'?$357['__array'][$358]:
						$357['__getitem__']($358)):
						$357['__getitem__']((($mod7=index)!=null && ($mod8=self['__bit'])!=null && typeof $mod7=='string'?
					$p['sprintf']($mod7,$mod8):
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7))))));
			}
			else {
				self['__data']['__setitem__']($p['float_int']((index)/(self['__bit'])), ((typeof ($359=self['__data'])['__array'] != 'undefined'?
					((typeof $359['__array'][$360=$p['float_int']((index)/(self['__bit']))]) != 'undefined'?$359['__array'][$360]:
						$359['__getitem__']($360)):
						$359['__getitem__']($p['float_int']((index)/(self['__bit'])))))&(~((typeof ($361=self['__bitmask'])['__array'] != 'undefined'?
					((typeof $361['__array'][$362=(($mod9=index)!=null && ($mod10=self['__bit'])!=null && typeof $mod9=='string'?
					$p['sprintf']($mod9,$mod10):
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9))]) != 'undefined'?$361['__array'][$362]:
						$361['__getitem__']($362)):
						$361['__getitem__']((($mod9=index)!=null && ($mod10=self['__bit'])!=null && typeof $mod9=='string'?
					$p['sprintf']($mod9,$mod10):
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9)))))));
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value', 1]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $bool156,$bool155,$iter78_iter,$bool157,i,$iter77_iter,$and3,$and4,$iter78_type,$iter78_nextval,$iter78_array,$iter77_type,$iter78_idx,$iter77_array,$attr874,$iter77_nextval,$iter77_idx,$attr873;
			if ((($bool156=((($bool155=$and3=(index === null)) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
				false :
				(typeof $bool155=='object'?
					(typeof $bool155['__nonzero__']=='function'?
						$bool155['__nonzero__']() :
						(typeof $bool155['__len__']=='function'?
							($bool155['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(toIndex === null):$and3)) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
					false :
					(typeof $bool156=='object'?
						(typeof $bool156['__nonzero__']=='function'?
							$bool156['__nonzero__']() :
							(typeof $bool156['__len__']=='function'?
								($bool156['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter77_iter = $p['xrange'](0, self['__width']);
				if (typeof ($iter77_array = $iter77_iter['__array']) != 'undefined') {
					$iter77_type = 0;
				} else {
					$iter77_iter = $iter77_iter['__iter__']();
					$iter77_type = typeof ($iter77_array = $iter77_iter['__array']) != 'undefined'? 0 : (typeof $iter77_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter77_idx = 0;
				while (typeof ($iter77_nextval=($iter77_type?($iter77_type > 0?$iter77_iter.next(true,false):$p['wrapped_next']($iter77_iter)):$iter77_array[$iter77_idx++])) != 'undefined') {
					i = $iter77_nextval;
					self['set'](i, 1);
				}
			}
			else {
				if ((($bool157=(toIndex === null)) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
						false :
						(typeof $bool157=='object'?
							(typeof $bool157['__nonzero__']=='function'?
								$bool157['__nonzero__']() :
								(typeof $bool157['__len__']=='function'?
									($bool157['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set'](index, 1);
				}
				else {
					$iter78_iter = $p['xrange'](index, toIndex);
					if (typeof ($iter78_array = $iter78_iter['__array']) != 'undefined') {
						$iter78_type = 0;
					} else {
						$iter78_iter = $iter78_iter['__iter__']();
						$iter78_type = typeof ($iter78_array = $iter78_iter['__array']) != 'undefined'? 0 : (typeof $iter78_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter78_idx = 0;
					while (typeof ($iter78_nextval=($iter78_type?($iter78_type > 0?$iter78_iter.next(true,false):$p['wrapped_next']($iter78_iter)):$iter78_array[$iter78_idx++])) != 'undefined') {
						i = $iter78_nextval;
						self['set'](i, 1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter81_array,$iter79_idx,$iter81_nextval,$iter80_idx,$eq59,$bool158,$bool159,$iter81_idx,$iter79_nextval,$iter80_type,$iter81_iter,$iter79_type,$iter80_iter,$iter81_type,$iter79_array,$and5,$and6,dat,$len55,$len56,$attr878,$attr879,$attr876,$attr877,$attr875,$iter80_nextval,$bool160,$bool161,i,$iter79_iter,$eq61,$eq60,$eq62,$iter80_array,$attr884,$attr883,$attr882,$attr881,$attr880;
			if ((($bool158=(index === null)) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
					false :
					(typeof $bool158=='object'?
						(typeof $bool158['__nonzero__']=='function'?
							$bool158['__nonzero__']() :
							(typeof $bool158['__len__']=='function'?
								($bool158['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter79_iter = $p['xrange']((($len55=self['__data']) === null?0:
					(typeof $len55['__array'] != 'undefined' ? $len55['__array']['length']:
						(typeof $len55['__len__'] == 'function'?$len55['__len__']():
							(typeof $len55['length'] != 'undefined'?$len55['length']:
								$p['len']($len55))))));
				if (typeof ($iter79_array = $iter79_iter['__array']) != 'undefined') {
					$iter79_type = 0;
				} else {
					$iter79_iter = $iter79_iter['__iter__']();
					$iter79_type = typeof ($iter79_array = $iter79_iter['__array']) != 'undefined'? 0 : (typeof $iter79_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter79_idx = 0;
				while (typeof ($iter79_nextval=($iter79_type?($iter79_type > 0?$iter79_iter.next(true,false):$p['wrapped_next']($iter79_iter)):$iter79_array[$iter79_idx++])) != 'undefined') {
					i = $iter79_nextval;
					self['__data']['__setitem__'](i, 0);
				}
			}
			else {
				if ((($bool159=(toIndex === null)) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
						false :
						(typeof $bool159=='object'?
							(typeof $bool159['__nonzero__']=='function'?
								$bool159['__nonzero__']() :
								(typeof $bool159['__len__']=='function'?
									($bool159['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set'](index, 0);
				}
				else {
					if ((($bool161=((($bool160=$and5=(($eq59=index)===($eq60=0)&&$eq59===null?true:
						($eq59===null?false:($eq60===null?false:
							((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59['__cmp__']=='function'?$eq59['__cmp__']($eq60) === 0:
								((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60['__cmp__']=='function'?$eq60['__cmp__']($eq59) === 0:
									$eq59==$eq60)))))) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
						false :
						(typeof $bool160=='object'?
							(typeof $bool160['__nonzero__']=='function'?
								$bool160['__nonzero__']() :
								(typeof $bool160['__len__']=='function'?
									($bool160['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq61=toIndex)===($eq62=self['__width'])&&$eq61===null?true:
						($eq61===null?false:($eq62===null?false:
							((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61['__cmp__']=='function'?$eq61['__cmp__']($eq62) === 0:
								((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62['__cmp__']=='function'?$eq62['__cmp__']($eq61) === 0:
									$eq61==$eq62))))):$and5)) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
							false :
							(typeof $bool161=='object'?
								(typeof $bool161['__nonzero__']=='function'?
									$bool161['__nonzero__']() :
									(typeof $bool161['__len__']=='function'?
										($bool161['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$iter80_iter = $p['xrange']((($len56=self['__data']) === null?0:
							(typeof $len56['__array'] != 'undefined' ? $len56['__array']['length']:
								(typeof $len56['__len__'] == 'function'?$len56['__len__']():
									(typeof $len56['length'] != 'undefined'?$len56['length']:
										$p['len']($len56))))));
						if (typeof ($iter80_array = $iter80_iter['__array']) != 'undefined') {
							$iter80_type = 0;
						} else {
							$iter80_iter = $iter80_iter['__iter__']();
							$iter80_type = typeof ($iter80_array = $iter80_iter['__array']) != 'undefined'? 0 : (typeof $iter80_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter80_idx = 0;
						while (typeof ($iter80_nextval=($iter80_type?($iter80_type > 0?$iter80_iter.next(true,false):$p['wrapped_next']($iter80_iter)):$iter80_array[$iter80_idx++])) != 'undefined') {
							dat = $iter80_nextval;
							self['__data']['__setitem__'](dat, 0);
						}
					}
					else {
						$iter81_iter = $p['xrange'](index, toIndex);
						if (typeof ($iter81_array = $iter81_iter['__array']) != 'undefined') {
							$iter81_type = 0;
						} else {
							$iter81_iter = $iter81_iter['__iter__']();
							$iter81_type = typeof ($iter81_array = $iter81_iter['__array']) != 'undefined'? 0 : (typeof $iter81_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter81_idx = 0;
						while (typeof ($iter81_nextval=($iter81_type?($iter81_type > 0?$iter81_iter.next(true,false):$p['wrapped_next']($iter81_iter)):$iter81_array[$iter81_idx++])) != 'undefined') {
							i = $iter81_nextval;
							self['set'](i, 0);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('flip', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter82_array,$iter83_iter,$iter82_idx,$iter82_nextval,$iter82_type,$364,$363,$attr894,$attr895,$attr896,$attr890,$attr891,$attr892,$attr893,$and8,$iter82_iter,$iter83_array,$and7,dat,$len57,$cmp38,$cmp37,$bool167,$bool163,$bool162,$iter83_type,$bool166,$bool165,$bool164,$eq65,$eq64,$eq66,$eq63,i,$attr889,$attr888,$attr887,$attr886,$attr885,$iter83_idx,$iter83_nextval;
			if ((($bool162=(toIndex === null)) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
					false :
					(typeof $bool162=='object'?
						(typeof $bool162['__nonzero__']=='function'?
							$bool162['__nonzero__']() :
							(typeof $bool162['__len__']=='function'?
								($bool162['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['set'](index, !(($bool163=self['get'](index)) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
					false :
					(typeof $bool163=='object'?
						(typeof $bool163['__nonzero__']=='function'?
							$bool163['__nonzero__']() :
							(typeof $bool163['__len__']=='function'?
								($bool163['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			else {
				if ((($bool164=((($cmp37=toIndex)===($cmp38=self['__width'])?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == 1)) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
						false :
						(typeof $bool164=='object'?
							(typeof $bool164['__nonzero__']=='function'?
								$bool164['__nonzero__']() :
								(typeof $bool164['__len__']=='function'?
									($bool164['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['resize'](toIndex);
					toIndex = self['__width'];
				}
				if ((($bool166=((($bool165=$and7=(($eq63=index)===($eq64=0)&&$eq63===null?true:
					($eq63===null?false:($eq64===null?false:
						((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63['__cmp__']=='function'?$eq63['__cmp__']($eq64) === 0:
							((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64['__cmp__']=='function'?$eq64['__cmp__']($eq63) === 0:
								$eq63==$eq64)))))) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
					false :
					(typeof $bool165=='object'?
						(typeof $bool165['__nonzero__']=='function'?
							$bool165['__nonzero__']() :
							(typeof $bool165['__len__']=='function'?
								($bool165['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq65=toIndex)===($eq66=self['__width'])&&$eq65===null?true:
					($eq65===null?false:($eq66===null?false:
						((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65['__cmp__']=='function'?$eq65['__cmp__']($eq66) === 0:
							((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66['__cmp__']=='function'?$eq66['__cmp__']($eq65) === 0:
								$eq65==$eq66))))):$and7)) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
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
					$iter82_iter = $p['xrange']((($len57=self['__data']) === null?0:
						(typeof $len57['__array'] != 'undefined' ? $len57['__array']['length']:
							(typeof $len57['__len__'] == 'function'?$len57['__len__']():
								(typeof $len57['length'] != 'undefined'?$len57['length']:
									$p['len']($len57))))));
					if (typeof ($iter82_array = $iter82_iter['__array']) != 'undefined') {
						$iter82_type = 0;
					} else {
						$iter82_iter = $iter82_iter['__iter__']();
						$iter82_type = typeof ($iter82_array = $iter82_iter['__array']) != 'undefined'? 0 : (typeof $iter82_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter82_idx = 0;
					while (typeof ($iter82_nextval=($iter82_type?($iter82_type > 0?$iter82_iter.next(true,false):$p['wrapped_next']($iter82_iter)):$iter82_array[$iter82_idx++])) != 'undefined') {
						dat = $iter82_nextval;
						self['__data']['__setitem__'](dat, ~((typeof ($363=self['__data'])['__array'] != 'undefined'?
							((typeof $363['__array'][$364=dat]) != 'undefined'?$363['__array'][$364]:
								$363['__getitem__']($364)):
								$363['__getitem__'](dat))));
					}
				}
				else {
					$iter83_iter = $p['xrange'](index, toIndex);
					if (typeof ($iter83_array = $iter83_iter['__array']) != 'undefined') {
						$iter83_type = 0;
					} else {
						$iter83_iter = $iter83_iter['__iter__']();
						$iter83_type = typeof ($iter83_array = $iter83_iter['__array']) != 'undefined'? 0 : (typeof $iter83_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter83_idx = 0;
					while (typeof ($iter83_nextval=($iter83_type?($iter83_type > 0?$iter83_iter.next(true,false):$p['wrapped_next']($iter83_iter)):$iter83_array[$iter83_idx++])) != 'undefined') {
						i = $iter83_nextval;
						self['set'](i, !(($bool167=self['get'](i)) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
							false :
							(typeof $bool167=='object'?
								(typeof $bool167['__nonzero__']=='function'?
									$bool167['__nonzero__']() :
									(typeof $bool167['__len__']=='function'?
										($bool167['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('cardinality', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var count,$iter84_nextval,$iter84_iter,$bool168,$iter84_array,$attr898,$iter84_idx,bit,$attr897,$iter84_type;
			count = 0;
			$iter84_iter = $p['xrange'](self['__width']);
			if (typeof ($iter84_array = $iter84_iter['__array']) != 'undefined') {
				$iter84_type = 0;
			} else {
				$iter84_iter = $iter84_iter['__iter__']();
				$iter84_type = typeof ($iter84_array = $iter84_iter['__array']) != 'undefined'? 0 : (typeof $iter84_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter84_idx = 0;
			while (typeof ($iter84_nextval=($iter84_type?($iter84_type > 0?$iter84_iter.next(true,false):$p['wrapped_next']($iter84_iter)):$iter84_array[$iter84_idx++])) != 'undefined') {
				bit = $iter84_nextval;
				if ((($bool168=self['get'](bit)) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
						false :
						(typeof $bool168=='object'?
							(typeof $bool168['__nonzero__']=='function'?
								$bool168['__nonzero__']() :
								(typeof $bool168['__len__']=='function'?
									($bool168['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					count += 1;
				}
			}
			return count;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cardinality'] = $method;
		$method = $pyjs__bind_method2('intersects', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var dat,$attr902,$attr903,$bool169,$len58,$365,$iter85_array,$iter85_nextval,$iter85_iter,$368,$367,$366,$attr904,$attr901,$iter85_idx,$iter85_type,$attr900,$attr899;
			$iter85_iter = $p['xrange']((($len58=bitset['__data']) === null?0:
				(typeof $len58['__array'] != 'undefined' ? $len58['__array']['length']:
					(typeof $len58['__len__'] == 'function'?$len58['__len__']():
						(typeof $len58['length'] != 'undefined'?$len58['length']:
							$p['len']($len58))))));
			if (typeof ($iter85_array = $iter85_iter['__array']) != 'undefined') {
				$iter85_type = 0;
			} else {
				$iter85_iter = $iter85_iter['__iter__']();
				$iter85_type = typeof ($iter85_array = $iter85_iter['__array']) != 'undefined'? 0 : (typeof $iter85_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter85_idx = 0;
			while (typeof ($iter85_nextval=($iter85_type?($iter85_type > 0?$iter85_iter.next(true,false):$p['wrapped_next']($iter85_iter)):$iter85_array[$iter85_idx++])) != 'undefined') {
				dat = $iter85_nextval;
				if ((($bool169=((typeof ($365=bitset['__data'])['__array'] != 'undefined'?
					((typeof $365['__array'][$366=dat]) != 'undefined'?$365['__array'][$366]:
						$365['__getitem__']($366)):
						$365['__getitem__'](dat)))&((typeof ($367=self['__data'])['__array'] != 'undefined'?
					((typeof $367['__array'][$368=dat]) != 'undefined'?$367['__array'][$368]:
						$367['__getitem__']($368)):
						$367['__getitem__'](dat)))) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
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
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('andSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $372,$370,$371,$attr908,$attr909,$attr906,$attr907,$attr905,$len60,$369,$iter86_type,$attr911,$attr910,$attr913,$attr912,$iter86_idx,data,$len59,dat,$iter86_iter,$iter86_array,$iter86_nextval,$attr914;
			data = $p['min']((($len59=self['__data']) === null?0:
				(typeof $len59['__array'] != 'undefined' ? $len59['__array']['length']:
					(typeof $len59['__len__'] == 'function'?$len59['__len__']():
						(typeof $len59['length'] != 'undefined'?$len59['length']:
							$p['len']($len59))))), (($len60=bitset['__data']) === null?0:
				(typeof $len60['__array'] != 'undefined' ? $len60['__array']['length']:
					(typeof $len60['__len__'] == 'function'?$len60['__len__']():
						(typeof $len60['length'] != 'undefined'?$len60['length']:
							$p['len']($len60))))));
			$iter86_iter = $p['xrange'](data);
			if (typeof ($iter86_array = $iter86_iter['__array']) != 'undefined') {
				$iter86_type = 0;
			} else {
				$iter86_iter = $iter86_iter['__iter__']();
				$iter86_type = typeof ($iter86_array = $iter86_iter['__array']) != 'undefined'? 0 : (typeof $iter86_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter86_idx = 0;
			while (typeof ($iter86_nextval=($iter86_type?($iter86_type > 0?$iter86_iter.next(true,false):$p['wrapped_next']($iter86_iter)):$iter86_array[$iter86_idx++])) != 'undefined') {
				dat = $iter86_nextval;
				self['__data']['__setitem__'](dat, ((typeof ($369=self['__data'])['__array'] != 'undefined'?
					((typeof $369['__array'][$370=dat]) != 'undefined'?$369['__array'][$370]:
						$369['__getitem__']($370)):
						$369['__getitem__'](dat)))&((typeof ($371=bitset['__data'])['__array'] != 'undefined'?
					((typeof $371['__array'][$372=dat]) != 'undefined'?$371['__array'][$372]:
						$371['__getitem__']($372)):
						$371['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['andSet'] = $method;
		$method = $pyjs__bind_method2('orSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $373,$376,$374,$375,$iter87_type,$attr920,$attr921,$attr922,$attr923,$attr924,$iter87_nextval,$len61,$len62,$iter87_iter,$iter87_idx,dat,$attr915,$iter87_array,$attr917,$attr916,$attr919,$attr918,data;
			data = $p['min']((($len61=self['__data']) === null?0:
				(typeof $len61['__array'] != 'undefined' ? $len61['__array']['length']:
					(typeof $len61['__len__'] == 'function'?$len61['__len__']():
						(typeof $len61['length'] != 'undefined'?$len61['length']:
							$p['len']($len61))))), (($len62=bitset['__data']) === null?0:
				(typeof $len62['__array'] != 'undefined' ? $len62['__array']['length']:
					(typeof $len62['__len__'] == 'function'?$len62['__len__']():
						(typeof $len62['length'] != 'undefined'?$len62['length']:
							$p['len']($len62))))));
			$iter87_iter = $p['xrange'](data);
			if (typeof ($iter87_array = $iter87_iter['__array']) != 'undefined') {
				$iter87_type = 0;
			} else {
				$iter87_iter = $iter87_iter['__iter__']();
				$iter87_type = typeof ($iter87_array = $iter87_iter['__array']) != 'undefined'? 0 : (typeof $iter87_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter87_idx = 0;
			while (typeof ($iter87_nextval=($iter87_type?($iter87_type > 0?$iter87_iter.next(true,false):$p['wrapped_next']($iter87_iter)):$iter87_array[$iter87_idx++])) != 'undefined') {
				dat = $iter87_nextval;
				self['__data']['__setitem__'](dat, ((typeof ($373=self['__data'])['__array'] != 'undefined'?
					((typeof $373['__array'][$374=dat]) != 'undefined'?$373['__array'][$374]:
						$373['__getitem__']($374)):
						$373['__getitem__'](dat)))|((typeof ($375=bitset['__data'])['__array'] != 'undefined'?
					((typeof $375['__array'][$376=dat]) != 'undefined'?$375['__array'][$376]:
						$375['__getitem__']($376)):
						$375['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['orSet'] = $method;
		$method = $pyjs__bind_method2('xorSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $378,$379,$iter88_iter,$377,$attr928,$attr929,$attr925,$attr926,$attr927,$iter88_idx,$380,$len63,$len64,dat,$attr933,$iter88_nextval,$attr932,$attr931,$attr930,data,$attr934,$iter88_type,$iter88_array;
			data = $p['min']((($len63=self['__data']) === null?0:
				(typeof $len63['__array'] != 'undefined' ? $len63['__array']['length']:
					(typeof $len63['__len__'] == 'function'?$len63['__len__']():
						(typeof $len63['length'] != 'undefined'?$len63['length']:
							$p['len']($len63))))), (($len64=bitset['__data']) === null?0:
				(typeof $len64['__array'] != 'undefined' ? $len64['__array']['length']:
					(typeof $len64['__len__'] == 'function'?$len64['__len__']():
						(typeof $len64['length'] != 'undefined'?$len64['length']:
							$p['len']($len64))))));
			$iter88_iter = $p['xrange'](data);
			if (typeof ($iter88_array = $iter88_iter['__array']) != 'undefined') {
				$iter88_type = 0;
			} else {
				$iter88_iter = $iter88_iter['__iter__']();
				$iter88_type = typeof ($iter88_array = $iter88_iter['__array']) != 'undefined'? 0 : (typeof $iter88_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter88_idx = 0;
			while (typeof ($iter88_nextval=($iter88_type?($iter88_type > 0?$iter88_iter.next(true,false):$p['wrapped_next']($iter88_iter)):$iter88_array[$iter88_idx++])) != 'undefined') {
				dat = $iter88_nextval;
				self['__data']['__setitem__'](dat, ((typeof ($377=self['__data'])['__array'] != 'undefined'?
					((typeof $377['__array'][$378=dat]) != 'undefined'?$377['__array'][$378]:
						$377['__getitem__']($378)):
						$377['__getitem__'](dat)))^((typeof ($379=bitset['__data'])['__array'] != 'undefined'?
					((typeof $379['__array'][$380=dat]) != 'undefined'?$379['__array'][$380]:
						$379['__getitem__']($380)):
						$379['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['xorSet'] = $method;
		$method = $pyjs__bind_method2('resize', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr948,$attr949,$attr942,$attr943,$attr940,$attr941,$attr946,$attr947,$attr944,$attr945,$cmp47,$attr965,$cmp48,$attr960,$attr961,$attr962,$attr963,$cmp42,$cmp43,array,$cmp41,$cmp46,$cmp40,$cmp44,$cmp45,$bool170,$bool171,$bool172,$bool173,$bool174,$len65,$len67,$len66,$attr959,$attr958,$len68,$attr955,$attr954,$attr957,$attr956,$attr951,$attr950,$attr953,$attr952,$attr939,$attr938,$cmp39,$attr937,$attr936,$attr935,$attr964,$attr966;
			if ((($bool170=((($cmp39=width)===($cmp40=self['__width'])?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
					false :
					(typeof $bool170=='object'?
						(typeof $bool170['__nonzero__']=='function'?
							$bool170['__nonzero__']() :
							(typeof $bool170['__len__']=='function'?
								($bool170['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['__width'] = width;
				if ((($bool171=((($cmp41=self['__width'])===($cmp42=((($len65=self['__data']) === null?0:
					(typeof $len65['__array'] != 'undefined' ? $len65['__array']['length']:
						(typeof $len65['__len__'] == 'function'?$len65['__len__']():
							(typeof $len65['length'] != 'undefined'?$len65['length']:
								$p['len']($len65))))))*(self['__bit']))?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == 1)) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
						false :
						(typeof $bool171=='object'?
							(typeof $bool171['__nonzero__']=='function'?
								$bool171['__nonzero__']() :
								(typeof $bool171['__len__']=='function'?
									($bool171['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					array = self['__typedarray']($m['_ceil']((self['__width'])/((self['__bit'])*(1.0))));
					array['set'](self['__data']);
					self['__data'] = array;
				}
			}
			else if ((($bool172=((($cmp43=width)===($cmp44=self['__width'])?0:
				(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
					($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
					$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
					false :
					(typeof $bool172=='object'?
						(typeof $bool172['__nonzero__']=='function'?
							$bool172['__nonzero__']() :
							(typeof $bool172['__len__']=='function'?
								($bool172['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool173=((($cmp45=width)===($cmp46=(($len66=self) === null?0:
					(typeof $len66['__array'] != 'undefined' ? $len66['__array']['length']:
						(typeof $len66['__len__'] == 'function'?$len66['__len__']():
							(typeof $len66['length'] != 'undefined'?$len66['length']:
								$p['len']($len66))))))?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
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
					width = (($len67=self) === null?0:
						(typeof $len67['__array'] != 'undefined' ? $len67['__array']['length']:
							(typeof $len67['__len__'] == 'function'?$len67['__len__']():
								(typeof $len67['length'] != 'undefined'?$len67['length']:
									$p['len']($len67)))));
				}
				self['__width'] = width;
				if ((($bool174=((($cmp47=self['__width'])===($cmp48=(((($len68=self['__data']) === null?0:
					(typeof $len68['__array'] != 'undefined' ? $len68['__array']['length']:
						(typeof $len68['__len__'] == 'function'?$len68['__len__']():
							(typeof $len68['length'] != 'undefined'?$len68['length']:
								$p['len']($len68))))))*(self['__bit']))-(self['__bit']))?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) < 1)) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
						false :
						(typeof $bool174=='object'?
							(typeof $bool174['__nonzero__']=='function'?
								$bool174['__nonzero__']() :
								(typeof $bool174['__len__']=='function'?
									($bool174['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					array = self['__typedarray']($m['_ceil']((self['__width'])/((self['__bit'])*(1.0))));
					array['set'](self['__data']['subarray'](0, $m['_ceil']((self['__width'])/((self['__bit'])*(1.0)))));
					self['__data'] = array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len69,$attr967,$attr970,$attr968,$attr969;
			return ((($len69=self['__data']) === null?0:
				(typeof $len69['__array'] != 'undefined' ? $len69['__array']['length']:
					(typeof $len69['__len__'] == 'function'?$len69['__len__']():
						(typeof $len69['length'] != 'undefined'?$len69['length']:
							$p['len']($len69))))))*(self['__bit']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('isEmpty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter89_iter,$bool175,$iter89_type,$iter89_nextval,$iter89_array,data,$iter89_idx;
			$iter89_iter = self['__data'];
			if (typeof ($iter89_array = $iter89_iter['__array']) != 'undefined') {
				$iter89_type = 0;
			} else {
				$iter89_iter = $iter89_iter['__iter__']();
				$iter89_type = typeof ($iter89_array = $iter89_iter['__array']) != 'undefined'? 0 : (typeof $iter89_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter89_idx = 0;
			while (typeof ($iter89_nextval=($iter89_type?($iter89_type > 0?$iter89_iter.next(true,false):$p['wrapped_next']($iter89_iter)):$iter89_array[$iter89_idx++])) != 'undefined') {
				data = $iter89_nextval;
				if ((($bool175=data) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
						false :
						(typeof $bool175=='object'?
							(typeof $bool175['__nonzero__']=='function'?
								$bool175['__nonzero__']() :
								(typeof $bool175['__len__']=='function'?
									($bool175['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmpty'] = $method;
		$method = $pyjs__bind_method2('clone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_bitset,$attr974,$attr973,$attr972,$attr971,data;
			new_bitset = self['__class__'](1);
			data = self['__typedarray'](self['__data']);
			new_bitset['__data'] = data;
			new_bitset['__width'] = self['__width'];
			return new_bitset;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
	})();
	$m['BitSet16'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 16;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint16Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
	})();
	$m['BitSet32'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 32;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint32Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
	})();
	$m['Pyjs_Mode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			var $tupleassign8 = $p['__ass_unpack'](self['_setmode'](), 2, null);
			self['strict'] = $tupleassign8[0];
			self['optimized'] = $tupleassign8[1];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $bool176,$eq67,$eq68;
			if ((($bool176=(($eq67=attr)===($eq68='__strict_mode')&&$eq67===null?true:
				($eq67===null?false:($eq68===null?false:
					((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67['__cmp__']=='function'?$eq67['__cmp__']($eq68) === 0:
						((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68['__cmp__']=='function'?$eq68['__cmp__']($eq67) === 0:
							$eq67==$eq68)))))) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
					false :
					(typeof $bool176=='object'?
						(typeof $bool176['__nonzero__']=='function'?
							$bool176['__nonzero__']() :
							(typeof $bool176['__len__']=='function'?
								($bool176['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('_setmode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq69,$bool177,$eq70,$attr976,$attr975;
			if ((($bool177=(($eq69=self['__strict_mode'])===($eq70=true)&&$eq69===null?true:
				($eq69===null?false:($eq70===null?false:
					((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69['__cmp__']=='function'?$eq69['__cmp__']($eq70) === 0:
						((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70['__cmp__']=='function'?$eq70['__cmp__']($eq69) === 0:
							$eq69==$eq70)))))) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
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
				return $p['tuple']([true, false]);
			}
			else {
				return $p['tuple']([false, true]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_setmode'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
	})();
	$m['pyjs_mode'] = $m['Pyjs_Mode']();
	return this;
}; /* end pyjsdl.pyjsarray */


/* end module: pyjsdl.pyjsarray */


/*
PYJS_DEPS: ['math.ceil', 'math']
*/

/* start module: random */
$pyjs['loaded_modules']['random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['random']['__was_initialized__']) return $pyjs['loaded_modules']['random'];
	var $m = $pyjs['loaded_modules']['random'];
	$m['__repr__'] = function() { return '<module: random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'random';
	$m['__name__'] = __mod_name__;
	var $eq35,$bool77,$attr1,$attr2,$eq36;

	$m['_log'] = $p['___import___']('math.log', null, null, false);
	$m['_exp'] = $p['___import___']('math.exp', null, null, false);
	$m['_pi'] = $p['___import___']('math.pi', null, null, false);
	$m['_e'] = $p['___import___']('math.e', null, null, false);
	$m['_ceil'] = $p['___import___']('math.ceil', null, null, false);
	$m['_sqrt'] = $p['___import___']('math.sqrt', null, null, false);
	$m['_acos'] = $p['___import___']('math.acos', null, null, false);
	$m['_cos'] = $p['___import___']('math.cos', null, null, false);
	$m['_sin'] = $p['___import___']('math.sin', null, null, false);
	$m['_urandom'] = $p['___import___']('os.urandom', null, null, false);
	$m['_hexlify'] = $p['___import___']('binascii.hexlify', null, null, false);
	$m['NV_MAGICCONST'] = ((4)*($m['_exp'](-(0.5))))/($m['_sqrt'](2.0));
	$m['TWOPI'] = (2.0)*($m['_pi']);
	$m['LOG4'] = $m['_log'](4.0);
	$m['SG_MAGICCONST'] = (1.0)+($m['_log'](4.5));
	$m['BPF'] = 53;
	$m['RECIP_BPF'] = Math['pow'](2,-($m['BPF']));
	$m['_random'] = $p['___import___']('_random', null);
	$m['Random'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'random';
		$cls_definition['VERSION'] = 3;
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];

			self['seed'](x);
			self['gauss_next'] = null;
			return null;
		}
	, 1, [null,null,['self'],['x', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('seed', function(a) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
			}
			if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
			var $bool1,$pyjs_try_err,time;
			if ((($bool1=(a === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				try {
					a = $p['float_int']($m['_hexlify']($m['_urandom'](16)), 16);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						time = $p['___import___']('time', null);
						a = $p['float_int']((time['time']())*(256));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			$p['$$super']($m['Random'], self)['seed'](a);
			self['gauss_next'] = null;
			return null;
		}
	, 1, [null,null,['self'],['a', null]]);
		$cls_definition['seed'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr6,$attr5,$attr3,$attr4;
			return $p['tuple']([self['VERSION'], $p['$$super']($m['Random'], self)['getstate'](), self['gauss_next']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			var version,$iter1_iter,$mod1,$mod2,internalstate,$pyjs_try_err,$iter1_array,$attr8,$iter1_nextval,$eq2,$eq3,$eq1,$eq4,$bool2,$bool3,$attr7,$2,$1,e,$iter1_type,$iter1_idx,x;
			version = (typeof ($1=state)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0));
			if ((($bool2=(($eq1=version)===($eq2=3)&&$eq1===null?true:
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
				var $tupleassign1 = $p['__ass_unpack'](state, 3, null);
				version = $tupleassign1[0];
				internalstate = $tupleassign1[1];
				self['gauss_next'] = $tupleassign1[2];
				$p['$$super']($m['Random'], self)['setstate'](internalstate);
			}
			else if ((($bool3=(($eq3=version)===($eq4=2)&&$eq3===null?true:
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
				var $tupleassign2 = $p['__ass_unpack'](state, 3, null);
				version = $tupleassign2[0];
				internalstate = $tupleassign2[1];
				self['gauss_next'] = $tupleassign2[2];
				try {
					internalstate = $p['tuple'](function(){
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
							$iter1_iter = internalstate;
							if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
								$iter1_type = 0;
							} else {
								$iter1_iter = $iter1_iter['__iter__']();
								$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter1_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									x = $iter1_nextval;
									$yield_value = (($mod1=$p['float_int'](x))!=null && ($mod2=Math['pow'](2,32))!=null && typeof $mod1=='string'?
										$p['sprintf']($mod1,$mod2):
										(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1));
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
					}()
);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;

						var $pyjs__raise_expr1 = $p['TypeError'];
						var $pyjs__raise_expr2 = e;
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$p['$$super']($m['Random'], self)['setstate'](internalstate);
			}
			else {
				throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, self['VERSION']]))));
			}
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		$method = $pyjs__bind_method2('__getstate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getstate']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__getstate__'] = $method;
		$method = $pyjs__bind_method2('__setstate__', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			self['setstate'](state);
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['__setstate__'] = $method;
		$method = $pyjs__bind_method2('__reduce__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return $p['tuple']([self['__class__'], $p['tuple']([]), self['getstate']()]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reduce__'] = $method;
		$method = $pyjs__bind_method2('randrange', function(start, stop, step, fint, $$default, maxwidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				stop = arguments[2];
				step = arguments[3];
				fint = arguments[4];
				$$default = arguments[5];
				maxwidth = arguments[6];
			}
			if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][4][1];
			if (typeof step == 'undefined') step=arguments['callee']['__args__'][5][1];
			if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][6][1];
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][7][1];
			if (typeof maxwidth == 'undefined') maxwidth=arguments['callee']['__args__'][8][1];
			var istep,$cmp12,$bool10,$bool11,$bool12,$bool13,$bool14,$bool16,$bool17,$eq10,$eq11,$eq12,$eq13,$eq14,istart,width,istop,$and1,$eq8,$eq9,$and2,$eq6,$eq7,$eq5,$cmp15,$cmp14,$cmp16,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$$default,$cmp9,$cmp8,n,$cmp13,$bool15,$cmp11,$cmp10;
			istart = fint(start);
			if ((($bool4=!(($eq5=istart)===($eq6=start)&&$eq5===null?true:
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'non-integer arg 1 for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ((($bool5=(stop === $$default)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				if ((($bool6=((($cmp1=istart)===($cmp2=0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					if ((($bool7=((((($cmp3=istart)===($cmp4=maxwidth)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						return self['_randbelow'](istart);
					}
					return fint((self['random']())*(istart));
				}

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'empty range for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			istop = fint(stop);
			if ((($bool8=!(($eq7=istop)===($eq8=stop)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'non-integer stop for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			width = (istop)-(istart);
			if ((($bool10=((($bool9=$and1=(($eq9=step)===($eq10=1)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp5=width)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				if ((($bool11=((((($cmp7=width)===($cmp8=maxwidth)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					return fint((istart)+(self['_randbelow'](width)));
				}
				return fint((istart)+(fint((self['random']())*(width))));
			}
			if ((($bool12=(($eq11=step)===($eq12=1)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = $p['sprintf']('empty range for randrange() (%d,%d, %d)', $p['tuple']([istart, istop, width]));
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			istep = fint(step);
			if ((($bool13=!(($eq13=istep)===($eq14=step)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'non-integer step for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ((($bool14=((($cmp9=istep)===($cmp10=0)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				n = Math['floor'](((width)+(istep))-(1)/istep);
			}
			else if ((($bool15=((($cmp11=istep)===($cmp12=0)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				n = Math['floor'](((width)+(istep))+(1)/istep);
			}
			else {

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'zero step for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ((($bool16=((($cmp13=n)===($cmp14=0)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'empty range for randrange()';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ((($bool17=((((($cmp15=n)===($cmp16=maxwidth)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return (istart)+((istep)*(self['_randbelow'](n)));
			}
			return (istart)+((istep)*(fint((self['random']())*(n))));
		}
	, 1, [null,null,['self'],['start'],['stop', null],['step', 1],['fint', $p['float_int']],['$$default', null],['maxwidth', (1)<<($m['BPF'])]]);
		$cls_definition['randrange'] = $method;
		$method = $pyjs__bind_method2('randint', function(a, b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
			}

			return self['randrange'](a, (b)+(1));
		}
	, 1, [null,null,['self'],['a'],['b']]);
		$cls_definition['randint'] = $method;
		$method = $pyjs__bind_method2('_randbelow', function(n, _log, fint, _maxwidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
				_log = arguments[2];
				fint = arguments[3];
				_maxwidth = arguments[4];
			}
			if (typeof _log == 'undefined') _log=arguments['callee']['__args__'][4][1];
			if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
			if (typeof _maxwidth == 'undefined') _maxwidth=arguments['callee']['__args__'][6][1];
			var $bool18,$bool19,$cmp17,r,$pyjs_try_err,$cmp18,$attr11,k,getrandbits,$attr12;
			try {
				getrandbits = self['getrandbits'];
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err['__name__'] == 'TryElse') {
					if ((($bool18=true) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						k = fint((1.00001)+(_log((n)-(1), 2.0)));
						r = getrandbits(k);
						while ((($bool19=((((($cmp17=r)===($cmp18=n)?0:
							(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
								($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
								$p['cmp']($cmp17, $cmp18))))|1) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
							r = getrandbits(k);
						}
						return $p['float_int'](r);
					}
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return fint((self['random']())*(n));
		}
	, 1, [null,null,['self'],['n'],['_log', $m['_log']],['fint', $p['float_int']],['_maxwidth', (1)<<($m['BPF'])]]);
		$cls_definition['_randbelow'] = $method;
		$method = $pyjs__bind_method2('choice', function(seq) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				seq = arguments[1];
			}
			var $4,$3,$len1;
			return (typeof ($3=seq)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=$p['float_int']((self['random']())*((($len1=seq) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))))))]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__']($p['float_int']((self['random']())*((($len1=seq) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))))))));
		}
	, 1, [null,null,['self'],['seq']]);
		$cls_definition['choice'] = $method;
		$method = $pyjs__bind_method2('shuffle', function(x, random, fint) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				random = arguments[2];
				fint = arguments[3];
			}
			if (typeof random == 'undefined') random=arguments['callee']['__args__'][4][1];
			if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
			var $iter2_array,$iter2_nextval,$iter2_type,$iter2_iter,i,$7,j,$iter2_idx,$len2,$bool20,$8,$attr14,$6,$5,$attr13;
			if ((($bool20=(random === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				random = self['random'];
			}
			$iter2_iter = $p['reversed']($p['xrange'](1, (($len2=x) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))))));
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				j = fint((random())*((i)+(1)));
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($5=x)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=j]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](j)), (typeof ($7=x)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](i))]), 2, null);
				x['__setitem__'](i, $tupleassign3[0]);
				x['__setitem__'](j, $tupleassign3[1]);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['random', null],['fint', $p['float_int']]]);
		$cls_definition['shuffle'] = $method;
		$method = $pyjs__bind_method2('sample', function(population, k) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				population = arguments[1];
				k = arguments[2];
			}
			var $iter4_type,$iter3_array,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,result,$cmp26,setsize,$iter3_idx,_int,$iter4_iter,selected,selected_add,$bool25,$bool24,$bool27,$bool26,$bool21,$iter3_iter,$bool23,$bool22,__random,$or1,$or2,$9,$attr18,$iter3_type,$attr15,$attr17,$attr16,$cmp19,pool,$14,$10,$11,$12,$13,i,$iter4_nextval,j,$pyjs_try_err,n,$iter4_idx,$len3,$iter4_array,$iter3_nextval,$cmp25;
			n = (($len3=population) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3)))));
			if ((($bool22=!(($bool21=(((($cmp19=0)===($cmp20=($compare1 = k))?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) < 1)&&((($cmp21=$compare1)===($cmp22=($compare2 = n))?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) < 1))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21['__nonzero__']=='function'?
						$bool21['__nonzero__']() :
						(typeof $bool21['__len__']=='function'?
							($bool21['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'sample larger than population';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			__random = self['random'];
			_int = $p['float_int'];
			result = ($p['list']([null]))*(k);
			setsize = 21;
			if ((($bool23=((($cmp23=k)===($cmp24=5)?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				setsize += Math['pow'](4,$m['_ceil']($m['_log']((k)*(3), 4)));
			}
			if ((($bool25=((($bool24=$or1=((($cmp25=n)===($cmp26=setsize)?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) < 1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24['__nonzero__']=='function'?
						$bool24['__nonzero__']() :
						(typeof $bool24['__len__']=='function'?
							($bool24['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['hasattr'](population, 'keys'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				pool = $p['list'](population);
				$iter3_iter = $p['xrange'](k);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					j = _int((__random())*((n)-(i)));
					result['__setitem__'](i, (typeof ($9=pool)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=j]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](j)));
					pool['__setitem__'](j, (typeof ($11=pool)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=((n)-(i))-(1)]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](((n)-(i))-(1))));
				}
			}
			else {
				try {
					selected = $p['set']();
					selected_add = selected['add'];
					$iter4_iter = $p['xrange'](k);
					if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter['__iter__']();
						$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						i = $iter4_nextval;
						j = _int((__random())*(n));
						while ((($bool26=selected['__contains__'](j)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
							j = _int((__random())*(n));
						}
						selected_add(j);
						result['__setitem__'](i, (typeof ($13=population)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=j]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](j)));
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError']))) {
						if ((($bool27=$p['isinstance'](population, $p['list'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
						return self['sample']($p['tuple'](population), k);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['population'],['k']]);
		$cls_definition['sample'] = $method;
		$method = $pyjs__bind_method2('uniform', function(a, b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
			}

			return (a)+(((b)-(a))*(self['random']()));
		}
	, 1, [null,null,['self'],['a'],['b']]);
		$cls_definition['uniform'] = $method;
		$method = $pyjs__bind_method2('triangular', function(low, high, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				low = arguments[1];
				high = arguments[2];
				mode = arguments[3];
			}
			if (typeof low == 'undefined') low=arguments['callee']['__args__'][3][1];
			if (typeof high == 'undefined') high=arguments['callee']['__args__'][4][1];
			if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][5][1];
			var c,u,$cmp27,$cmp28,$bool29,$bool28;
			u = self['random']();
			c = ((($bool28=(mode === null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28['__nonzero__']=='function'?
						$bool28['__nonzero__']() :
						(typeof $bool28['__len__']=='function'?
							($bool28['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (0.5) : (((mode)-(low))/((high)-(low))));
			if ((($bool29=((($cmp27=u)===($cmp28=c)?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				u = (1.0)-(u);
				c = (1.0)-(c);
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([high, low]), 2, null);
				low = $tupleassign4[0];
				high = $tupleassign4[1];
			}
			return (low)+(((high)-(low))*(Math['pow']((u)*(c),0.5)));
		}
	, 1, [null,null,['self'],['low', 0.0],['high', 1.0],['mode', null]]);
		$cls_definition['triangular'] = $method;
		$method = $pyjs__bind_method2('normalvariate', function(mu, sigma) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mu = arguments[1];
				sigma = arguments[2];
			}
			var $attr20,__random,u1,u2,$bool30,$bool31,$attr19,zz,$cmp29,z,$cmp30;
			__random = self['random'];
			while ((($bool30=1) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				u1 = __random();
				u2 = (1.0)-(__random());
				z = (($m['NV_MAGICCONST'])*((u1)-(0.5)))/(u2);
				zz = ((z)*(z))/(4.0);
				if ((($bool31=((($cmp29=zz)===($cmp30=-($m['_log'](u2)))?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) < 1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					break;
				}
			}
			return (mu)+((z)*(sigma));
		}
	, 1, [null,null,['self'],['mu'],['sigma']]);
		$cls_definition['normalvariate'] = $method;
		$method = $pyjs__bind_method2('lognormvariate', function(mu, sigma) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mu = arguments[1];
				sigma = arguments[2];
			}

			return $m['_exp'](self['normalvariate'](mu, sigma));
		}
	, 1, [null,null,['self'],['mu'],['sigma']]);
		$cls_definition['lognormvariate'] = $method;
		$method = $pyjs__bind_method2('expovariate', function(lambd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lambd = arguments[1];
			}
			var __random,$bool32,$attr21,$attr22,u,$cmp32,$cmp31;
			__random = self['random'];
			u = __random();
			while ((($bool32=((($cmp31=u)===($cmp32=1e-07)?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) < 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				u = __random();
			}
			return (-($m['_log'](u)))/(lambd);
		}
	, 1, [null,null,['self'],['lambd']]);
		$cls_definition['expovariate'] = $method;
		$method = $pyjs__bind_method2('vonmisesvariate', function(mu, kappa) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mu = arguments[1];
				kappa = arguments[2];
			}
			var $mod6,$mod5,$mod4,$attr23,$attr24,$mod3,$cmp40,u1,u3,u2,theta,$or4,__random,$or3,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,a,c,b,f,$bool33,r,$bool36,$bool37,$bool34,$bool35,z;
			__random = self['random'];
			if ((($bool33=((($cmp33=kappa)===($cmp34=1e-06)?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$p['cmp']($cmp33, $cmp34))) < 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				return ($m['TWOPI'])*(__random());
			}
			a = (1.0)+($m['_sqrt']((1.0)+(((4.0)*(kappa))*(kappa))));
			b = ((a)-($m['_sqrt']((2.0)*(a))))/((2.0)*(kappa));
			r = ((1.0)+((b)*(b)))/((2.0)*(b));
			while ((($bool34=1) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				u1 = __random();
				z = $m['_cos'](($m['_pi'])*(u1));
				f = ((1.0)+((r)*(z)))/((r)+(z));
				c = (kappa)*((r)-(f));
				u2 = __random();
				if ((($bool36=((($bool35=$or3=((($cmp35=u2)===($cmp36=(c)*((2.0)-(c)))?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($cmp37=u2)===($cmp38=(c)*($m['_exp']((1.0)-(c))))?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) < 1))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					break;
				}
			}
			u3 = __random();
			if ((($bool37=((($cmp39=u3)===($cmp40=0.5)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				theta = ((($mod3=mu)!=null && ($mod4=$m['TWOPI'])!=null && typeof $mod3=='string'?
					$p['sprintf']($mod3,$mod4):
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3)))+($m['_acos'](f));
			}
			else {
				theta = ((($mod5=mu)!=null && ($mod6=$m['TWOPI'])!=null && typeof $mod5=='string'?
					$p['sprintf']($mod5,$mod6):
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5)))-($m['_acos'](f));
			}
			return theta;
		}
	, 1, [null,null,['self'],['mu'],['kappa']]);
		$cls_definition['vonmisesvariate'] = $method;
		$method = $pyjs__bind_method2('gammavariate', function(alpha, beta) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
				beta = arguments[2];
			}
			var $cmp64,$bool47,$eq15,$cmp61,$cmp62,$cmp63,$bool45,$cmp48,__random,$bool51,$attr25,$attr26,$cmp50,$cmp42,$cmp43,$cmp41,$cmp46,$cmp47,$cmp44,$cmp45,ainv,$bool52,u1,bbb,u2,$bool44,r,$eq16,$cmp60,$or5,$bool46,$or7,$or6,$bool43,$bool42,$bool41,$bool40,$or8,$bool49,$bool48,$cmp59,$cmp58,b,$cmp51,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,$cmp56,z,p,$cmp49,u,$bool50,v,x,$bool38,$bool39,ccc;
			if ((($bool39=((($bool38=$or5=((($cmp41=alpha)===($cmp42=0.0)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$p['cmp']($cmp41, $cmp42))) < 1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38['__nonzero__']=='function'?
						$bool38['__nonzero__']() :
						(typeof $bool38['__len__']=='function'?
							($bool38['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($cmp43=beta)===($cmp44=0.0)?0:
				(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
					($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
					$p['cmp']($cmp43, $cmp44))) < 1))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'gammavariate: alpha and beta must be > 0.0';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			__random = self['random'];
			if ((($bool40=((($cmp45=alpha)===($cmp46=1.0)?0:
				(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
					($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
					$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				ainv = $m['_sqrt'](((2.0)*(alpha))-(1.0));
				bbb = (alpha)-($m['LOG4']);
				ccc = (alpha)+(ainv);
				while ((($bool41=1) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					u1 = __random();
					if ((($bool43=!(($bool42=(((($cmp47=1e-07)===($cmp48=($compare3 = u1))?0:
						(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
							($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
							$p['cmp']($cmp47, $cmp48))) == -1)&&((($cmp49=$compare3)===($cmp50=($compare4 = 0.9999999))?0:
						(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
							($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
							$p['cmp']($cmp49, $cmp50))) == -1))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42['__nonzero__']=='function'?
								$bool42['__nonzero__']() :
								(typeof $bool42['__len__']=='function'?
									($bool42['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
						continue;
					}
					u2 = (1.0)-(__random());
					v = ($m['_log']((u1)/((1.0)-(u1))))/(ainv);
					x = (alpha)*($m['_exp'](v));
					z = ((u1)*(u1))*(u2);
					r = ((bbb)+((ccc)*(v)))-(x);
					if ((($bool45=((($bool44=$or7=((((($cmp51=((r)+($m['SG_MAGICCONST']))-((4.5)*(z)))===($cmp52=0.0)?0:
						(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
							($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
							$p['cmp']($cmp51, $cmp52))))|1) == 1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:((((($cmp53=r)===($cmp54=$m['_log'](z))?0:
						(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
							($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
							$p['cmp']($cmp53, $cmp54))))|1) == 1))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
						return (x)*(beta);
					}
				}
			}
			else if ((($bool46=(($eq15=alpha)===($eq16=1.0)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				u = __random();
				while ((($bool47=((($cmp55=u)===($cmp56=1e-07)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) < 1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					u = __random();
				}
				return (-($m['_log'](u)))*(beta);
			}
			else {
				while ((($bool48=1) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					u = __random();
					b = (($m['_e'])+(alpha))/($m['_e']);
					p = (b)*(u);
					if ((($bool49=((($cmp57=p)===($cmp58=1.0)?0:
						(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
							($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
							$p['cmp']($cmp57, $cmp58))) < 1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
						x = Math['pow'](p,(1.0)/(alpha));
					}
					else {
						x = -($m['_log'](((b)-(p))/(alpha)));
					}
					u1 = __random();
					if ((($bool50=((($cmp59=p)===($cmp60=1.0)?0:
						(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
							($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
							$p['cmp']($cmp59, $cmp60))) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
						if ((($bool51=((($cmp61=u1)===($cmp62=Math['pow'](x,(alpha)-(1.0)))?0:
							(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
								($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
								$p['cmp']($cmp61, $cmp62))) < 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
							break;
						}
					}
					else if ((($bool52=((($cmp63=u1)===($cmp64=$m['_exp'](-(x)))?0:
						(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
							($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
							$p['cmp']($cmp63, $cmp64))) < 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
						break;
					}
				}
				return (x)*(beta);
			}
			return null;
		}
	, 1, [null,null,['self'],['alpha'],['beta']]);
		$cls_definition['gammavariate'] = $method;
		$method = $pyjs__bind_method2('gauss', function(mu, sigma) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mu = arguments[1];
				sigma = arguments[2];
			}
			var __random,$bool53,x2pi,$attr30,$attr27,$attr28,$attr29,z,g2rad;
			__random = self['random'];
			z = self['gauss_next'];
			self['gauss_next'] = null;
			if ((($bool53=(z === null)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				x2pi = (__random())*($m['TWOPI']);
				g2rad = $m['_sqrt']((-(2.0))*($m['_log']((1.0)-(__random()))));
				z = ($m['_cos'](x2pi))*(g2rad);
				self['gauss_next'] = ($m['_sin'](x2pi))*(g2rad);
			}
			return (mu)+((z)*(sigma));
		}
	, 1, [null,null,['self'],['mu'],['sigma']]);
		$cls_definition['gauss'] = $method;
		$method = $pyjs__bind_method2('betavariate', function(alpha, beta) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
				beta = arguments[2];
			}
			var $bool54,$eq18,y,$eq17;
			y = self['gammavariate'](alpha, 1.0);
			if ((($bool54=(($eq17=y)===($eq18=0)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				return 0.0;
			}
			else {
				return (y)/((y)+(self['gammavariate'](beta, 1.0)));
			}
			return null;
		}
	, 1, [null,null,['self'],['alpha'],['beta']]);
		$cls_definition['betavariate'] = $method;
		$method = $pyjs__bind_method2('paretovariate', function(alpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
			}
			var u;
			u = (1.0)-(self['random']());
			return (1.0)/($p['pow'](u, (1.0)/(alpha)));
		}
	, 1, [null,null,['self'],['alpha']]);
		$cls_definition['paretovariate'] = $method;
		$method = $pyjs__bind_method2('weibullvariate', function(alpha, beta) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
				beta = arguments[2];
			}
			var u;
			u = (1.0)-(self['random']());
			return (alpha)*($p['pow'](-($m['_log'](u)), (1.0)/(beta)));
		}
	, 1, [null,null,['self'],['alpha'],['beta']]);
		$cls_definition['weibullvariate'] = $method;
		var $bases = new Array($m['_random']['Random']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Random', $p['tuple']($bases), $data);
	})();
	$m['WichmannHill'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'random';
		$cls_definition['VERSION'] = 1;
		$method = $pyjs__bind_method2('seed', function(a) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
			}
			if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
			var $bool55,$bool56,$bool57,$pyjs_try_err,time,y,x,z;
			if ((($bool55=(a === null)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				try {
					a = $p['float_int']($m['_hexlify']($m['_urandom'](16)), 16);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						time = $p['___import___']('time', null);
						a = $p['float_int']((time['time']())*(256));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			if ((($bool57=!(($bool56=$p['isinstance'](a, $p['tuple']([$p['float_int'], $p['float_int']]))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56['__nonzero__']=='function'?
						$bool56['__nonzero__']() :
						(typeof $bool56['__len__']=='function'?
							($bool56['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
				a = $p['hash'](a);
			}
			var $tupleassign5 = $p['__ass_unpack']($p['divmod'](a, 30268), 2, null);
			a = $tupleassign5[0];
			x = $tupleassign5[1];
			var $tupleassign6 = $p['__ass_unpack']($p['divmod'](a, 30306), 2, null);
			a = $tupleassign6[0];
			y = $tupleassign6[1];
			var $tupleassign7 = $p['__ass_unpack']($p['divmod'](a, 30322), 2, null);
			a = $tupleassign7[0];
			z = $tupleassign7[1];
			self['_seed'] = $p['tuple']([($p['float_int'](x))+(1), ($p['float_int'](y))+(1), ($p['float_int'](z))+(1)]);
			self['gauss_next'] = null;
			return null;
		}
	, 1, [null,null,['self'],['a', null]]);
		$cls_definition['seed'] = $method;
		$method = $pyjs__bind_method2('random', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod14,$mod11,$mod10,$mod13,$mod12,$mod7,$attr32,$attr31,y,x,z,$mod9,$mod8;
			var $tupleassign8 = $p['__ass_unpack'](self['_seed'], 3, null);
			x = $tupleassign8[0];
			y = $tupleassign8[1];
			z = $tupleassign8[2];
			x = (($mod7=(171)*(x))!=null && ($mod8=30269)!=null && typeof $mod7=='string'?
				$p['sprintf']($mod7,$mod8):
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7));
			y = (($mod9=(172)*(y))!=null && ($mod10=30307)!=null && typeof $mod9=='string'?
				$p['sprintf']($mod9,$mod10):
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9));
			z = (($mod11=(170)*(z))!=null && ($mod12=30323)!=null && typeof $mod11=='string'?
				$p['sprintf']($mod11,$mod12):
				(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11));
			self['_seed'] = $p['tuple']([x, y, z]);
			return (($mod13=(((x)/(30269.0))+((y)/(30307.0)))+((z)/(30323.0)))!=null && ($mod14=1.0)!=null && typeof $mod13=='string'?
				$p['sprintf']($mod13,$mod14):
				(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13));
		}
	, 1, [null,null,['self']]);
		$cls_definition['random'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr37,$attr36,$attr35,$attr34,$attr38;
			return $p['tuple']([self['VERSION'], self['_seed'], self['gauss_next']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			var $15,$16,$eq20,$bool58,$eq19,version,$attr40,$attr39;
			version = (typeof ($15=state)['__array'] != 'undefined'?
				((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](0));
			if ((($bool58=(($eq19=version)===($eq20=1)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
				var $tupleassign9 = $p['__ass_unpack'](state, 3, null);
				version = $tupleassign9[0];
				self['_seed'] = $tupleassign9[1];
				self['gauss_next'] = $tupleassign9[2];
			}
			else {
				throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, self['VERSION']]))));
			}
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		$method = $pyjs__bind_method2('jumpahead', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var $mod15,$cmp65,$cmp66,$mod16,$mod20,$bool60,$mod19,$bool59,$mod17,$attr42,$attr41,y,x,$mod18,z;
			if ((($bool60=!(($bool59=((((($cmp65=n)===($cmp66=0)?0:
				(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
					($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
					$p['cmp']($cmp65, $cmp66))))|1) == 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
				false :
				(typeof $bool59=='object'?
					(typeof $bool59['__nonzero__']=='function'?
						$bool59['__nonzero__']() :
						(typeof $bool59['__len__']=='function'?
							($bool59['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
				throw ($p['ValueError']('n must be >= 0'));
			}
			var $tupleassign10 = $p['__ass_unpack'](self['_seed'], 3, null);
			x = $tupleassign10[0];
			y = $tupleassign10[1];
			z = $tupleassign10[2];
			x = (($mod15=$p['float_int']((x)*($p['pow'](171, n, 30269))))!=null && ($mod16=30269)!=null && typeof $mod15=='string'?
				$p['sprintf']($mod15,$mod16):
				(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15));
			y = (($mod17=$p['float_int']((y)*($p['pow'](172, n, 30307))))!=null && ($mod18=30307)!=null && typeof $mod17=='string'?
				$p['sprintf']($mod17,$mod18):
				(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17));
			z = (($mod19=$p['float_int']((z)*($p['pow'](170, n, 30323))))!=null && ($mod20=30323)!=null && typeof $mod19=='string'?
				$p['sprintf']($mod19,$mod20):
				(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19));
			self['_seed'] = $p['tuple']([x, y, z]);
			return null;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['jumpahead'] = $method;
		$method = $pyjs__bind_method2('__whseed', function(x, y, z) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				z = arguments[3];
			}
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];
			if (typeof y == 'undefined') y=arguments['callee']['__args__'][4][1];
			if (typeof z == 'undefined') z=arguments['callee']['__args__'][5][1];
			var $cmp73,$cmp67,$cmp68,$cmp69,$bool70,$eq32,$eq30,$cmp70,$bool65,$or9,$cmp76,$bool67,$bool66,$or12,$bool68,$or10,$bool61,$cmp72,$cmp71,$bool62,$cmp77,$bool64,$cmp75,$cmp74,$bool69,$and4,$and3,$bool63,$and5,$eq21,$eq23,$eq22,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,$or14,$eq31,$or11,t,$or13,time,$cmp78;
			if ((($bool62=!(($bool61=((($eq21=$p['type'](x))===($eq22=($compare5 = $p['type'](y)))&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))&&(($eq23=$compare5)===($eq24=($compare6 = $p['type'](z)))&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))&&(($eq25=$compare6)===($eq26=($compare7 = $p['float_int']))&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26))))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61['__nonzero__']=='function'?
						$bool61['__nonzero__']() :
						(typeof $bool61['__len__']=='function'?
							($bool61['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				throw ($p['TypeError']('seeds must be integers'));
			}
			if ((($bool66=!(($bool65=((($bool63=$and3=(((($cmp67=0)===($cmp68=($compare8 = x))?0:
				(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
					($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
					$p['cmp']($cmp67, $cmp68))) < 1)&&((($cmp69=$compare8)===($cmp70=($compare9 = 256))?0:
				(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
					($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
					$p['cmp']($cmp69, $cmp70))) == -1))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63['__nonzero__']=='function'?
						$bool63['__nonzero__']() :
						(typeof $bool63['__len__']=='function'?
							($bool63['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool64=$and4=(((($cmp71=0)===($cmp72=($compare10 = y))?0:
				(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
					($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
					$p['cmp']($cmp71, $cmp72))) < 1)&&((($cmp73=$compare10)===($cmp74=($compare11 = 256))?0:
				(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
					($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
					$p['cmp']($cmp73, $cmp74))) == -1))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64['__nonzero__']=='function'?
						$bool64['__nonzero__']() :
						(typeof $bool64['__len__']=='function'?
							($bool64['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(((($cmp75=0)===($cmp76=($compare12 = z))?0:
				(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
					($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
					$p['cmp']($cmp75, $cmp76))) < 1)&&((($cmp77=$compare12)===($cmp78=($compare13 = 256))?0:
				(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
					($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
					$p['cmp']($cmp77, $cmp78))) == -1)):$and4):$and3)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65['__nonzero__']=='function'?
						$bool65['__nonzero__']() :
						(typeof $bool65['__len__']=='function'?
							($bool65['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
				throw ($p['ValueError']('seeds must be in range(0, 256)'));
			}
			if ((($bool67=((($eq27=0)===($eq28=($compare14 = x))&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))&&(($eq29=$compare14)===($eq30=($compare15 = y))&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))&&(($eq31=$compare15)===($eq32=($compare16 = z))&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32))))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
				time = $p['___import___']('time', null);
				t = $p['float_int']((time['time']())*(256));
				t = $p['float_int'](((t)&(16777215))^((t)>>(24)));
				var $tupleassign11 = $p['__ass_unpack']($p['divmod'](t, 256), 2, null);
				t = $tupleassign11[0];
				x = $tupleassign11[1];
				var $tupleassign12 = $p['__ass_unpack']($p['divmod'](t, 256), 2, null);
				t = $tupleassign12[0];
				y = $tupleassign12[1];
				var $tupleassign13 = $p['__ass_unpack']($p['divmod'](t, 256), 2, null);
				t = $tupleassign13[0];
				z = $tupleassign13[1];
			}
			self['_seed'] = $p['tuple']([((($bool68=$or9=x) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
				false :
				(typeof $bool68=='object'?
					(typeof $bool68['__nonzero__']=='function'?
						$bool68['__nonzero__']() :
						(typeof $bool68['__len__']=='function'?
							($bool68['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:1), ((($bool69=$or11=y) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
				false :
				(typeof $bool69=='object'?
					(typeof $bool69['__nonzero__']=='function'?
						$bool69['__nonzero__']() :
						(typeof $bool69['__len__']=='function'?
							($bool69['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or11:1), ((($bool70=$or13=z) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70['__nonzero__']=='function'?
						$bool70['__nonzero__']() :
						(typeof $bool70['__len__']=='function'?
							($bool70['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or13:1)]);
			self['gauss_next'] = null;
			return null;
		}
	, 1, [null,null,['self'],['x', 0],['y', 0],['z', 0]]);
		$cls_definition['__whseed'] = $method;
		$method = $pyjs__bind_method2('whseed', function(a) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
			}
			if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
			var $mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$or20,$bool72,$bool73,$bool74,$bool71,$or15,$or17,$or16,y,x,z,$or19,$or18;
			if ((($bool71=(a === null)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
				self['__whseed']();
				return null;
			}
			a = $p['hash'](a);
			var $tupleassign14 = $p['__ass_unpack']($p['divmod'](a, 256), 2, null);
			a = $tupleassign14[0];
			x = $tupleassign14[1];
			var $tupleassign15 = $p['__ass_unpack']($p['divmod'](a, 256), 2, null);
			a = $tupleassign15[0];
			y = $tupleassign15[1];
			var $tupleassign16 = $p['__ass_unpack']($p['divmod'](a, 256), 2, null);
			a = $tupleassign16[0];
			z = $tupleassign16[1];
			x = ((($bool72=$or15=(($mod21=(x)+(a))!=null && ($mod22=256)!=null && typeof $mod21=='string'?
				$p['sprintf']($mod21,$mod22):
				(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
				false :
				(typeof $bool72=='object'?
					(typeof $bool72['__nonzero__']=='function'?
						$bool72['__nonzero__']() :
						(typeof $bool72['__len__']=='function'?
							($bool72['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or15:1);
			y = ((($bool73=$or17=(($mod23=(y)+(a))!=null && ($mod24=256)!=null && typeof $mod23=='string'?
				$p['sprintf']($mod23,$mod24):
				(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73['__nonzero__']=='function'?
						$bool73['__nonzero__']() :
						(typeof $bool73['__len__']=='function'?
							($bool73['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or17:1);
			z = ((($bool74=$or19=(($mod25=(z)+(a))!=null && ($mod26=256)!=null && typeof $mod25=='string'?
				$p['sprintf']($mod25,$mod26):
				(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25))) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
				false :
				(typeof $bool74=='object'?
					(typeof $bool74['__nonzero__']=='function'?
						$bool74['__nonzero__']() :
						(typeof $bool74['__len__']=='function'?
							($bool74['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:1);
			self['__whseed'](x, y, z);
			return null;
		}
	, 1, [null,null,['self'],['a', null]]);
		$cls_definition['whseed'] = $method;
		var $bases = new Array($m['Random']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('WichmannHill', $p['tuple']($bases), $data);
	})();
	$m['SystemRandom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'random';
		$method = $pyjs__bind_method2('random', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (($p['float_int']($m['_hexlify']($m['_urandom'](7)), 16))>>(3))*($m['RECIP_BPF']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['random'] = $method;
		$method = $pyjs__bind_method2('getrandbits', function(k) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var $bool76,$bool75,bytes,$cmp80,$eq33,$eq34,x,$cmp79;
			if ((($bool75=((($cmp79=k)===($cmp80=0)?0:
				(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
					($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
					$p['cmp']($cmp79, $cmp80))) < 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
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
				throw ($p['ValueError']('number of bits must be greater than zero'));
			}
			if ((($bool76=!(($eq33=k)===($eq34=$p['float_int'](k))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76['__nonzero__']=='function'?
							$bool76['__nonzero__']() :
							(typeof $bool76['__len__']=='function'?
								($bool76['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('number of bits should be an integer'));
			}
			bytes = Math['floor']((k)+(7)/8);
			x = $p['float_int']($m['_hexlify']($m['_urandom'](bytes)), 16);
			return (x)>>(((bytes)*(8))-(k));
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['getrandbits'] = $method;
		$method = $pyjs__bind_method2('_stub', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					var kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwds == 'undefined') {
				kwds = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwds = self;
						self = arguments[1];
					}
				} else {
				}
			}

			return null;
		}
	, 1, ['args',['kwds'],['self']]);
		$cls_definition['_stub'] = $method;
		$cls_definition['$assign1'] = $p['staticmethod']($cls_definition['_stub']);
		$cls_definition['seed'] = $cls_definition['$assign1'];
		$cls_definition['jumpahead'] = $cls_definition['$assign1'];
		$method = $pyjs__bind_method2('_notimplemented', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					var kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwds == 'undefined') {
				kwds = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwds = self;
						self = arguments[1];
					}
				} else {
				}
			}

			throw ($p['NotImplementedError']('System entropy source does not have state.'));
			return null;
		}
	, 1, ['args',['kwds'],['self']]);
		$cls_definition['_notimplemented'] = $method;
		$cls_definition['$assign2'] = $p['staticmethod']($cls_definition['_notimplemented']);
		$cls_definition['getstate'] = $cls_definition['$assign2'];
		$cls_definition['setstate'] = $cls_definition['$assign2'];
		var $bases = new Array($m['Random']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SystemRandom', $p['tuple']($bases), $data);
	})();
	$m['_test_generator'] = function(n, func, args) {
		var $iter5_nextval,x,t1,$iter5_idx,largest,i,$iter5_array,avg,t0,smallest,sqsum,time,$iter5_type,total,$iter5_iter,stddev;
		time = $p['___import___']('time', null);
		total = 0.0;
		sqsum = 0.0;
		smallest = 10000000000.0;
		largest = -(10000000000.0);
		t0 = time['time']();
		$iter5_iter = $p['range'](n);
		if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter['__iter__']();
			$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			x = $pyjs_kwargs_call(null, func, args, null, [{}]);
			total += x;
			sqsum = (sqsum)+((x)*(x));
			smallest = $p['min'](x, smallest);
			largest = $p['max'](x, largest);
		}
		t1 = time['time']();
		avg = (total)/(n);
		stddev = $m['_sqrt'](((sqsum)/(n))-((avg)*(avg)));
		return null;
	};
	$m['_test_generator']['__name__'] = '_test_generator';

	$m['_test_generator']['__bind_type__'] = 0;
	$m['_test_generator']['__args__'] = [null,null,['n'],['func'],['args']];
	$m['_test'] = function(N) {
		if (typeof N == 'undefined') N=arguments['callee']['__args__'][2][1];

		$m['_test_generator'](N, (typeof random == "undefined"?$m['random']:random), $p['tuple']([]));
		$m['_test_generator'](N, (typeof normalvariate == "undefined"?$m['normalvariate']:normalvariate), $p['tuple']([0.0, 1.0]));
		$m['_test_generator'](N, (typeof lognormvariate == "undefined"?$m['lognormvariate']:lognormvariate), $p['tuple']([0.0, 1.0]));
		$m['_test_generator'](N, (typeof vonmisesvariate == "undefined"?$m['vonmisesvariate']:vonmisesvariate), $p['tuple']([0.0, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.01, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 2.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.5, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.9, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([1.0, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([2.0, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([20.0, 1.0]));
		$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([200.0, 1.0]));
		$m['_test_generator'](N, (typeof gauss == "undefined"?$m['gauss']:gauss), $p['tuple']([0.0, 1.0]));
		$m['_test_generator'](N, (typeof betavariate == "undefined"?$m['betavariate']:betavariate), $p['tuple']([3.0, 3.0]));
		$m['_test_generator'](N, (typeof triangular == "undefined"?$m['triangular']:triangular), $p['tuple']([0.0, 1.0, (1.0)/(3.0)]));
		return null;
	};
	$m['_test']['__name__'] = '_test';

	$m['_test']['__bind_type__'] = 0;
	$m['_test']['__args__'] = [null,null,['N', 2000]];
	$m['_inst'] = $m['Random']();
	$m['seed'] = $p['getattr']($m['_inst'], 'seed');
	$m['random'] = $p['getattr']($m['_inst'], 'random');
	$m['uniform'] = $p['getattr']($m['_inst'], 'uniform');
	$m['triangular'] = $p['getattr']($m['_inst'], 'triangular');
	$m['randint'] = $p['getattr']($m['_inst'], 'randint');
	$m['choice'] = $p['getattr']($m['_inst'], 'choice');
	$m['randrange'] = $p['getattr']($m['_inst'], 'randrange');
	$m['sample'] = $p['getattr']($m['_inst'], 'sample');
	$m['shuffle'] = $p['getattr']($m['_inst'], 'shuffle');
	$m['normalvariate'] = $p['getattr']($m['_inst'], 'normalvariate');
	$m['lognormvariate'] = $p['getattr']($m['_inst'], 'lognormvariate');
	$m['expovariate'] = $p['getattr']($m['_inst'], 'expovariate');
	$m['vonmisesvariate'] = $p['getattr']($m['_inst'], 'vonmisesvariate');
	$m['gammavariate'] = $p['getattr']($m['_inst'], 'gammavariate');
	$m['gauss'] = $p['getattr']($m['_inst'], 'gauss');
	$m['betavariate'] = $p['getattr']($m['_inst'], 'betavariate');
	$m['paretovariate'] = $p['getattr']($m['_inst'], 'paretovariate');
	$m['weibullvariate'] = $p['getattr']($m['_inst'], 'weibullvariate');
	$m['getstate'] = $p['getattr']($m['_inst'], 'getstate');
	$m['setstate'] = $p['getattr']($m['_inst'], 'setstate');
	$m['jumpahead'] = $p['getattr']($m['_inst'], 'jumpahead');
	$m['getrandbits'] = $p['getattr']($m['_inst'], 'getrandbits');
	if ((($bool77=(($eq35=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq36='__main__')&&$eq35===null?true:
		($eq35===null?false:($eq36===null?false:
			((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
				((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
					$eq35==$eq36)))))) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
		$m['_test']();
	}
	return this;
}; /* end random */


/* end module: random */


/*
PYJS_DEPS: ['math.log', 'math', 'math.exp', 'math.pi', 'math.e', 'math.ceil', 'math.sqrt', 'math.acos', 'math.cos', 'math.sin', 'os.urandom', 'os', 'binascii.hexlify', 'binascii', '_random', 'time']
*/

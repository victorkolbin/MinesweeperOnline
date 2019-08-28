/* start module: pyjsdl.font */
$pyjs['loaded_modules']['pyjsdl.font'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.font']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.font'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.font'];
	$m['__repr__'] = function() { return '<module: pyjsdl.font>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.font';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['font'] = $pyjs['loaded_modules']['pyjsdl.font'];


	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['HTML5Canvas'] = $p['___import___']('pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['_initialized'] = false;
	$m['_surf'] = null;
	$m['init'] = function() {
		var $bool1,$pyjs_try_err;
		if ((($bool1=$m['_initialized']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return null;
		}
		try {
			$m['_surf'] = $m['HTML5Canvas'](1, 1);
			$m['_surf']['measureText']('x');
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$m['_surf'] = null;
			}
		}
		$m['_initialized'] = true;
		return null;
	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['init']();
	$m['quit'] = function() {

		$m['_surf'] = null;
		$m['_initialized'] = false;
		return null;
	};
	$m['quit']['__name__'] = 'quit';

	$m['quit']['__bind_type__'] = 0;
	$m['quit']['__args__'] = [null,null];
	$m['get_init'] = function() {

		return $m['_initialized'];
	};
	$m['get_init']['__name__'] = 'get_init';

	$m['get_init']['__bind_type__'] = 0;
	$m['get_init']['__args__'] = [null,null];
	$m['get_default_font'] = function() {
		var $attr1,$attr2,$2,$1;
		return (typeof ($1=$m['Font']['_font'])['__array'] != 'undefined'?
			((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__'](0));
	};
	$m['get_default_font']['__name__'] = 'get_default_font';

	$m['get_default_font']['__bind_type__'] = 0;
	$m['get_default_font']['__args__'] = [null,null];
	$m['get_fonts'] = function() {
		var $attr3,$attr4;
		return $m['Font']['_font'];
	};
	$m['get_fonts']['__name__'] = 'get_fonts';

	$m['get_fonts']['__bind_type__'] = 0;
	$m['get_fonts']['__args__'] = [null,null];
	$m['match_font'] = function(name) {
		var $8,$iter3_type,$7,font,$iter3_idx,$iter2_iter,$attr13,$iter3_nextval,$3,$iter3_iter,$attr9,$attr8,$iter2_type,$bool5,$attr5,$attr7,$attr6,$bool2,$bool3,$iter2_idx,$bool6,$bool4,$iter3_array,$6,$attr14,$4,$5,$attr11,$attr10,fn,$attr12,c,$iter2_nextval,f,i,fallback,$iter2_array;
		fallback = false;
		font = function(){
			var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,fn,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = name['$$split'](',');
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			fn = $iter1_nextval;
			$collcomp1['append'](fn['strip']()['lower']());
		}

	return $collcomp1;}();
		$iter2_iter = $p['enumerate'](font);
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
			i = $tupleassign1[0];
			fn = $tupleassign1[1];
			if ((($bool2=$m['Font']['_font']['__contains__'](fn)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				fallback = true;
				continue;
			}
			else {
				f = ''['join'](function(){
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
						$iter3_iter = fn;
						if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
							$iter3_type = 0;
						} else {
							$iter3_iter = $iter3_iter['__iter__']();
							$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter3_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								c = $iter3_nextval;
								$generator_state[3] = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool3=c['isalnum']()) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
										false :
										(typeof $bool3=='object'?
											(typeof $bool3['__nonzero__']=='function'?
												$bool3['__nonzero__']() :
												(typeof $bool3['__len__']=='function'?
													($bool3['__len__']()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )))) {
									$generator_state[2]=1;
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = c;
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
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=0;
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
				if ((($bool4=$m['Font']['_font_alt']['__contains__'](f)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					font['__setitem__'](i, (typeof ($5=$m['Font']['_font'])['__array'] != 'undefined'?
						((typeof $5['__array'][$6=(typeof ($3=$m['Font']['_font_alt'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=f]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](f))]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']((typeof ($3=$m['Font']['_font_alt'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=f]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](f)))));
					fallback = true;
				}
			}
		}
		if ((($bool6=!(($bool5=fallback) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
			false :
			(typeof $bool5=='object'?
				(typeof $bool5['__nonzero__']=='function'?
					$bool5['__nonzero__']() :
					(typeof $bool5['__len__']=='function'?
						($bool5['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			font['append']((typeof ($7=$m['Font']['_font'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](0)));
		}
		font = ','['join'](font);
		return font;
	};
	$m['match_font']['__name__'] = 'match_font';

	$m['match_font']['__bind_type__'] = 0;
	$m['match_font']['__args__'] = [null,null,['name']];
	$m['Font'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.font';
		$cls_definition['_font'] = $p['list'](['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']);
		$cls_definition['_font_alt'] = $p['dict']([['arial', 0], ['bitstreamverasans', 1], ['bitstreamveraserif', 2], ['bookantiqua', 3], ['comicsansms', 4], ['couriernew', 5], ['courier', 6], ['dejavusans', 7], ['dejavusansmono', 8], ['dejavuserif', 9], ['freesans', 10], ['garamond', 11], ['georgia', 12], ['helvetica', 13], ['impact', 14], ['liberationsans', 15], ['liberationserif', 16], ['lucidaconsole', 17], ['lucidaserif', 18], ['nimbusmonol', 19], ['nimbusromanno9l', 20], ['nimbussansl', 21], ['palatino', 22], ['timesnewroman', 23], ['times', 24], ['tahoma', 25], ['verdana', 26], ['cursive', 27], ['monospace', 28], ['sansserif', 29], ['serif', 30]]);
		$cls_definition['_font_family'] = $p['list']([$p['list'](['arial', 'helvetica', 'liberation sans', 'nimbus sans l', 'freesans', 'tahoma', 'sans-serif']), $p['list'](['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif']), $p['list'](['impact', 'sans-serif']), $p['list'](['comic sans ms', 'cursive', 'sans-serif']), $p['list'](['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace']), $p['list'](['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['garamond', 'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif'])]);
		$method = $pyjs__bind_method2('__init__', function(name, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				size = arguments[2];
			}
			var $iter5_nextval,$bool18,$iter7_array,ff,$bool19,$bool10,$iter5_idx,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$attr20,$attr21,$attr22,$iter5_iter,$attr24,$attr25,$iter8_nextval,$attr27,$attr28,$iter5_type,$iter6_iter,font,$iter8_array,load_custom_font,$attr16,$attr26,$20,$attr17,$iter6_type,$iter8_iter,$iter5_array,$attr29,$iter6_nextval,$iter7_nextval,$bool20,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$16,$iter6_array,$attr30,$bool11,$bool7,$iter7_idx,$9,$attr15,$bool8,$bool9,fn,$11,$14,$15,c,$17,$10,$12,f,i,$13,$18,$19,$attr23,$iter7_type,$attr19,fallback,$attr18;
			if ((($bool8=!(($bool7=name) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				font = $p['list']([(typeof ($9=$m['Font']['_font'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](0))]);
			}
			else {
				font = function(){
					var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,fn;
	$collcomp2 = $p['list']();
				$iter4_iter = name['$$split'](',');
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					fn = $iter4_nextval;
					$collcomp2['append'](fn['strip']()['lower']());
				}

	return $collcomp2;}();
			}
			load_custom_font = false;
			fallback = null;
			$iter5_iter = $p['enumerate'](font);
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter5_nextval, 2, null);
				i = $tupleassign2[0];
				fn = $tupleassign2[1];
				if ((($bool9=fn['__contains__']('.')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					fn = (typeof ($11=fn['$$split']('.'))['__array'] != 'undefined'?
						((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](0));
					font['__setitem__'](i, fn);
					load_custom_font = true;
				}
				if ((($bool10=$m['Font']['_font']['__contains__'](fn)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					if ((($bool12=!(($bool11=fallback) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11['__nonzero__']=='function'?
								$bool11['__nonzero__']() :
								(typeof $bool11['__len__']=='function'?
									($bool11['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						fallback = fn;
					}
				}
				else {
					f = ''['join'](function(){
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
							$iter6_iter = fn;
							if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
								$iter6_type = 0;
							} else {
								$iter6_iter = $iter6_iter['__iter__']();
								$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter6_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter6_nextval;
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool13=c['isalnum']()) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
											false :
											(typeof $bool13=='object'?
												(typeof $bool13['__nonzero__']=='function'?
													$bool13['__nonzero__']() :
													(typeof $bool13['__len__']=='function'?
														($bool13['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = c;
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
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
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
					if ((($bool14=$m['Font']['_font_alt']['__contains__'](f)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						font['__setitem__'](i, (typeof ($15=$m['Font']['_font'])['__array'] != 'undefined'?
							((typeof $15['__array'][$16=(typeof ($13=$m['Font']['_font_alt'])['__array'] != 'undefined'?
							((typeof $13['__array'][$14=f]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](f))]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__']((typeof ($13=$m['Font']['_font_alt'])['__array'] != 'undefined'?
							((typeof $13['__array'][$14=f]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](f)))));
						if ((($bool16=!(($bool15=fallback) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
							fallback = (typeof ($17=font)['__array'] != 'undefined'?
								((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
									$17['__getitem__']($18)):
									$17['__getitem__'](i));
						}
					}
				}
			}
			if ((($bool17=fallback) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				$iter7_iter = $m['Font']['_font_family'];
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					ff = $iter7_nextval;
					if ((($bool18=ff['__contains__'](fallback)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						font['extend'](function(){
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
								$iter8_iter = ff;
								if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
									$iter8_type = 0;
								} else {
									$iter8_iter = $iter8_iter['__iter__']();
									$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
								}
								$iter8_idx = 0;
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
										f = $iter8_nextval;
										$generator_state[3] = 0;
										$generator_state[1]=1;
									}
									if ($generator_state[1] == 1) {
										if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool19=!font['__contains__'](f)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
												false :
												(typeof $bool19=='object'?
													(typeof $bool19['__nonzero__']=='function'?
														$bool19['__nonzero__']() :
														(typeof $bool19['__len__']=='function'?
															($bool19['__len__']()>0 ?
																true :
																false) :
															true ) ) :
													 true ) )))) {
											$generator_state[2]=1;
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = f;
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
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
										$generator_state[2]=0;
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
						break;
					}
				}
			}
			else {
				font['extend']((typeof ($19=$m['Font']['_font_family'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](0)));
			}
			self['fontname'] = ','['join'](font);
			self['fontsize'] = size;
			self['bold'] = '';
			self['italic'] = '';
			self['fontstyle'] = ((self['bold'])+(' '))+(self['italic']);
			self['underline'] = false;
			self['char_size'] = null;
			if ((($bool20=load_custom_font) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self['render']('x');
			}
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['name'],['size']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr34;
			return $p['sprintf']('%s(%r)', $p['tuple']([self['__class__'], self['__dict__']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('render', function(text, antialias, color, background, surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				antialias = arguments[2];
				color = arguments[3];
				background = arguments[4];
				surface = arguments[5];
			}
			if (typeof antialias == 'undefined') antialias=arguments['callee']['__args__'][4][1];
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][5][1];
			if (typeof background == 'undefined') background=arguments['callee']['__args__'][6][1];
			if (typeof surface == 'undefined') surface=arguments['callee']['__args__'][7][1];
			var $attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$attr48,$bool24,$bool21,$bool23,$bool22,surf,$attr37,$attr36,$attr35,$attr39,$attr38,h,w;
			if ((($bool22=!(($bool21=surface) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				var $tupleassign3 = $p['__ass_unpack'](self['size'](text), 2, null);
				w = $tupleassign3[0];
				h = $tupleassign3[1];
				surf = $m['Surface']($p['tuple']([w, h]));
			}
			else {
				surf = surface;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([surface['width'], surface['height']]), 2, null);
				w = $tupleassign4[0];
				h = $tupleassign4[1];
			}
			if ((($bool23=background) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				surf['setFillStyle']($m['Color'](background));
				surf['fillRect'](0, 0, w, h);
			}
			surf['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([self['fontstyle'], self['fontsize'], self['fontname']])));
			surf['setFillStyle']($m['Color'](color));
			surf['setTextAlign']('center');
			surf['setTextBaseline']('middle');
			surf['fillText'](text, (w)/(2), (h)/(2));
			if ((($bool24=self['underline']) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				surf['setLineWidth']((self['fontsize'])/(20));
				surf['setStrokeStyle']($m['Color'](color));
				surf['beginPath']();
				surf['moveTo'](0, (h)*(0.85));
				surf['lineTo'](w, (h)*(0.85));
				surf['stroke']();
			}
			return surf;
		}
	, 1, [null,null,['self'],['text'],['antialias', true],['color', $p['tuple']([0, 0, 0])],['background', null],['surface', null]]);
		$cls_definition['render'] = $method;
		$method = $pyjs__bind_method2('size', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $cmp1,$cmp2,$attr51,$attr52,$attr55,$attr54,$attr56,$bool25,$bool26,$attr50,y,x,$attr53,$attr49;
			if ((($bool25=$m['_surf']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				$m['_surf']['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([self['fontstyle'], self['fontsize'], self['fontname']])));
				x = $m['_surf']['measureText'](text);
			}
			else {
				x = self['_size_estimate'](text);
			}
			if ((($bool26=((($cmp1=x)===($cmp2=1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				x = 1;
			}
			y = $p['float_int']((self['fontsize'])*(1.2));
			return $p['tuple']([x, y]);
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('_size_estimate', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
			var $attr67,$attr61,$$char,$iter9_nextval,$25,size,$attr68,$iter9_iter,$21,$attr65,$22,$attr60,$iter9_idx,$attr62,$attr63,$bool27,$pyjs_try_err,$attr66,$24,$iter9_type,$23,$attr59,$attr58,$attr57,$bool28,$attr64,$26,x,$iter9_array;
			if ((($bool28=!(($bool27=self['char_size']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						 true ) )) {
				self['char_size'] = self['_get_char_size']();
			}
			self['fontname'] = ','['join']((typeof ($21=$m['Font']['_font_family'])['__array'] != 'undefined'?
				((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](0)));
			self['fontstyle'] = '';
			size = $p['list']([]);
			$iter9_iter = text;
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				$$char = $iter9_nextval;
				try {
					size['append'](((typeof ($23=self['char_size'])['__array'] != 'undefined'?
						((typeof $23['__array'][$24=$$char]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__']($$char)))*(self['fontsize']));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						size['append'](((typeof ($25=self['char_size'])['__array'] != 'undefined'?
							((typeof $25['__array'][$26='x']) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__']('x')))*(self['fontsize']));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			x = $m['_ceil']($p['sum'](size));
			return x;
		}
	, 1, [null,null,['self'],['text', null]]);
		$cls_definition['_size_estimate'] = $method;
		$method = $pyjs__bind_method2('set_underline', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];

			self['underline'] = setting;
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_underline'] = $method;
		$method = $pyjs__bind_method2('get_underline', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr69,$attr70;
			return self['underline'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_underline'] = $method;
		$method = $pyjs__bind_method2('set_bold', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
			var $28,$attr74,$attr73,$attr72,$attr71,$27;
			self['bold'] = (typeof ($27=$p['dict']([[true, 'bold'], [false, '']]))['__array'] != 'undefined'?
				((typeof $27['__array'][$28=setting]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](setting));
			self['fontstyle'] = ((self['bold'])+(' '))+(self['italic']);
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_bold'] = $method;
		$method = $pyjs__bind_method2('get_bold', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr76,$bool29,$attr75;
			if ((($bool29=self['bold']) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_bold'] = $method;
		$method = $pyjs__bind_method2('set_italic', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
			var $29,$attr80,$attr79,$attr78,$attr77,$30;
			self['italic'] = (typeof ($29=$p['dict']([[true, 'italic'], [false, '']]))['__array'] != 'undefined'?
				((typeof $29['__array'][$30=setting]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](setting));
			self['fontstyle'] = ((self['bold'])+(' '))+(self['italic']);
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_italic'] = $method;
		$method = $pyjs__bind_method2('get_italic', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr82,$attr81,$bool30;
			if ((($bool30=self['italic']) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_italic'] = $method;
		$method = $pyjs__bind_method2('get_linesize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr83,$attr84;
			return $p['float_int']((self['fontsize'])*(1.2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_linesize'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda4,$lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['list']([]);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['metrics'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_height'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['get_ascent'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['get_descent'] = $lambda4;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		$method = $pyjs__bind_method2('_get_char_size', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}
			if (typeof font == 'undefined') font=arguments['callee']['__args__'][3][1];
			var char_size,$$char,$iter10_nextval,$iter10_array,$bool32,$bool31,fontsize,$iter10_type,$iter10_iter,$iter10_idx;
			if ((($bool32=!(($bool31=font) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				return $p['dict']([['a', 0.6], ['b', 0.6], ['c', 0.5], ['d', 0.6], ['e', 0.6], ['f', 0.3], ['g', 0.6], ['h', 0.6], ['i', 0.2], ['j', 0.2], ['k', 0.5], ['l', 0.2], ['m', 0.8], ['n', 0.6], ['o', 0.6], ['p', 0.6], ['q', 0.6], ['r', 0.3], ['s', 0.5], ['t', 0.3], ['u', 0.6], ['v', 0.5], ['w', 0.7], ['x', 0.5], ['y', 0.5], ['z', 0.5], ['A', 0.7], ['B', 0.7], ['C', 0.7], ['D', 0.7], ['E', 0.7], ['F', 0.6], ['G', 0.8], ['H', 0.7], ['I', 0.3], ['J', 0.5], ['K', 0.7], ['L', 0.6], ['M', 0.8], ['N', 0.7], ['O', 0.8], ['P', 0.7], ['Q', 0.8], ['R', 0.7], ['S', 0.7], ['T', 0.6], ['U', 0.7], ['V', 0.7], ['W', 0.9], ['X', 0.7], ['Y', 0.7], ['Z', 0.6], ['0', 0.6], ['1', 0.6], ['2', 0.6], ['3', 0.6], ['4', 0.6], ['5', 0.6], ['6', 0.6], ['7', 0.6], ['8', 0.6], ['9', 0.6], ['.', 0.3], [',', 0.3], [':', 0.3], [';', 0.3], ['?', 0.6], ['~', 0.6], ['!', 0.3], ['@', 1], ['#', 0.6], ['$', 0.6], ['%', 0.9], ['^', 0.5], ['&', 0.7], ['=', 0.6], ['+', 0.6], ['-', 0.3], ['*', 0.4], ['/', 0.3], ['\\', 0.3], ['_', 0.6], ['<', 0.6], ['>', 0.6], ['(', 0.3], [')', 0.3], ['{', 0.3], ['}', 0.3], ['[', 0.3], [']', 0.3], ["'", 0.2], ['"', 0.4], [' ', 0.3]]);
			}
			else {
				fontsize = 10;
				$m['_surf']['setFont']($p['sprintf']('%dpx %s', $p['tuple']([fontsize, font])));
				char_size = $p['dict']([]);
				$iter10_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\'" ';
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					$$char = $iter10_nextval;
					char_size['__setitem__']($$char, $p['float'](($m['_surf']['measureText']($$char))/(fontsize)));
				}
				return char_size;
			}
			return null;
		}
	, 1, [null,null,['self'],['font', null]]);
		$cls_definition['_get_char_size'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Font', $p['tuple']($bases), $data);
	})();
	$m['SysFont'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.font';
		$method = $pyjs__bind_method2('__init__', function(name, size, bold, italic) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				size = arguments[2];
				bold = arguments[3];
				italic = arguments[4];
			}
			if (typeof bold == 'undefined') bold=arguments['callee']['__args__'][5][1];
			if (typeof italic == 'undefined') italic=arguments['callee']['__args__'][6][1];
			var $attr86,$attr85,$attr87,$32,$33,$31,$attr88,$34;
			$m['Font']['__init__'](self, name, size);
			self['bold'] = (typeof ($31=$p['dict']([[true, 'bold'], [false, '']]))['__array'] != 'undefined'?
				((typeof $31['__array'][$32=bold]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](bold));
			self['italic'] = (typeof ($33=$p['dict']([[true, 'italic'], [false, '']]))['__array'] != 'undefined'?
				((typeof $33['__array'][$34=bold]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](bold));
			self['fontstyle'] = ((self['bold'])+(' '))+(self['italic']);
			return null;
		}
	, 1, [null,null,['self'],['name'],['size'],['bold', false],['italic', false]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Font']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SysFont', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.font */


/* end module: pyjsdl.font */


/*
PYJS_DEPS: ['math.ceil', 'math', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl.pyjsobj']
*/

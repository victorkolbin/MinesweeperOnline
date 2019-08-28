/* start module: pyjsdl.util */
$pyjs['loaded_modules']['pyjsdl.util'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.util']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.util'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.util'];
	$m['__repr__'] = function() { return '<module: pyjsdl.util>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.util';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['util'] = $pyjs['loaded_modules']['pyjsdl.util'];


	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['Timer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.util';
		$method = $pyjs__bind_method2('__init__', function(log, log_length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				log = arguments[1];
				log_length = arguments[2];
			}
			if (typeof log == 'undefined') log=arguments['callee']['__args__'][3][1];
			if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];

			self['time'] = $m['Time']();
			self['time_i'] = self['get_time']();
			self['dtime'] = $p['list']([]);
			self['number'] = 0;
			self['log'] = null;
			self['log_list'] = null;
			self['log_num'] = 0;
			self['log_scroll'] = true;
			self['set_log'](log, log_length);
			return null;
		}
	, 1, [null,null,['self'],['log', 'console'],['log_length', 5]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['time']['time']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('set_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['time_i'] = self['get_time']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['set_time'] = $method;
		$method = $pyjs__bind_method2('lap_time', function(time_i, time_f, number, print_result) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time_i = arguments[1];
				time_f = arguments[2];
				number = arguments[3];
				print_result = arguments[4];
			}
			if (typeof time_i == 'undefined') time_i=arguments['callee']['__args__'][3][1];
			if (typeof time_f == 'undefined') time_f=arguments['callee']['__args__'][4][1];
			if (typeof number == 'undefined') number=arguments['callee']['__args__'][5][1];
			if (typeof print_result == 'undefined') print_result=arguments['callee']['__args__'][6][1];
			var $eq2,$attr3,$attr9,$attr8,$attr2,$attr1,t_ave,$eq1,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool1,$bool4,$bool5,$attr11,$attr10,$attr12,$cmp1,$cmp2,entry;
			if ((($bool1=(time_i === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				time_i = self['time_i'];
			}
			if ((($bool2=(time_f === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				time_f = self['get_time']();
			}
			self['dtime']['append']((time_f)-(time_i));
			self['number'] += 1;
			if ((($bool3=((((($cmp1=self['number'])===($cmp2=number)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				t_ave = ($p['sum'](self['dtime']))/(number);
				self['dtime'] = $p['list']([]);
				self['number'] = 0;
				if ((($bool4=print_result) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					if ((($bool5=(($eq1=self['log_type'])===($eq2='console')&&$eq1===null?true:
						($eq1===null?false:($eq2===null?false:
							((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
								((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
									$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						self['log_num'] += 1;
						entry = $p['sprintf']('Time %d: %s', $p['tuple']([self['log_num'], t_ave]));
					}
					else {
						self['log_num'] += 1;
						entry = $p['sprintf']('Time %d: %s', $p['tuple']([self['log_num'], t_ave]));
						self['print_log'](entry);
					}
				}
				return t_ave;
			}
			return null;
		}
	, 1, [null,null,['self'],['time_i', null],['time_f', null],['number', 100],['print_result', true]]);
		$cls_definition['lap_time'] = $method;
		$method = $pyjs__bind_method2('set_log', function(log, log_length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				log = arguments[1];
				log_length = arguments[2];
			}
			if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];
			var $attr16,$lambda3,$lambda1,$lambda2,$eq3,$eq4,$bool10,$bool6,$bool7,$attr18,$attr15,$attr14,$bool8,$bool9,$attr17,$attr13,size;
			if ((($bool6=$p['tuple'](['console', 'textarea'])['__contains__'](log)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['log_type'] = log;
				if ((($bool7=(($eq3=log)===($eq4='textarea')&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					if ((($bool9=!(($bool8=self['log']) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						size = $p['tuple']([($m['env']['canvas']['surface']['width'])-(5), 102]);
						self['log'] = $m['env']['canvas']['surface']['_display']['Textarea'](size);
						self['log']['setReadonly'](true);
						self['log']['addMouseListener'](self);
						var 						$lambda1 = function(sender, x, y) {

							return null;
						};
						$lambda1['__name__'] = '$lambda1';

						$lambda1['__bind_type__'] = 0;
						$lambda1['__args__'] = [null,null,['sender'],['x'],['y']];
						self['onMouseUp'] = $lambda1;
						var 						$lambda2 = function(sender, x, y) {

							return null;
						};
						$lambda2['__name__'] = '$lambda2';

						$lambda2['__bind_type__'] = 0;
						$lambda2['__args__'] = [null,null,['sender'],['x'],['y']];
						self['onMouseMove'] = $lambda2;
						var 						$lambda3 = function(sender) {

							return null;
						};
						$lambda3['__name__'] = '$lambda3';

						$lambda3['__bind_type__'] = 0;
						$lambda3['__args__'] = [null,null,['sender']];
						self['onMouseEnter'] = $lambda3;
						self['log_list'] = function(){
							var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = $p['range'](log_length);
						if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter['__iter__']();
							$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							i = $iter1_nextval;
							$collcomp1['append']('');
						}

	return $collcomp1;}();
					}
					self['log']['toggle'](true);
				}
				else {
					if ((($bool10=self['log']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						self['log']['toggle'](false);
						self['log_list'] = $p['list']([]);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['log'],['log_length', 5]]);
		$cls_definition['set_log'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['log_scroll'] = false;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['log_scroll'] = true;
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('print_log', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $len1,$eq6,$eq5,$attr20,$attr21,$attr22,$attr23,$attr19,$bool11,$attr24,$bool12;
			if ((($bool11=(($eq5=self['log_type'])===($eq6='console')&&$eq5===null?true:
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
			}
			else {
				self['log_list']['pop'](0);
				self['log_list']['append']((text)+('\n'));
				text = ''['join'](self['log_list']);
				self['log']['setText'](text);
				if ((($bool12=self['log_scroll']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['log']['setCursorPos']((($len1=text) === null?0:
						(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'?$len1['length']:
									$p['len']($len1))))));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['print_log'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Timer', $p['tuple']($bases), $data);
	})();
	$m['Pyjs_Mode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.util';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			var $tupleassign1 = $p['__ass_unpack'](self['_setmode'](), 2, null);
			self['strict'] = $tupleassign1[0];
			self['optimized'] = $tupleassign1[1];
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
			var $eq8,$bool13,$eq7;
			if ((($bool13=(($eq7=attr)===($eq8='__strict_mode')&&$eq7===null?true:
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
			var $eq9,$bool14,$attr25,$attr26,$eq10;
			if ((($bool14=(($eq9=self['__strict_mode'])===($eq10=true)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
	$m['env']['pyjs_mode'] = $m['Pyjs_Mode']();
	$m['$$call'] = function(obj, func, args) {
		if (typeof args == 'undefined') args=arguments['callee']['__args__'][4][1];

		return func.apply(obj, args['getArray']());;
	};
	$m['$$call']['__name__'] = 'call';

	$m['$$call']['__bind_type__'] = 0;
	$m['$$call']['__args__'] = [null,null,['obj'],['func'],['args', $p['tuple']([])]];
	return this;
}; /* end pyjsdl.util */


/* end module: pyjsdl.util */


/*
PYJS_DEPS: ['pyjsdl.time.Time', 'pyjsdl', 'pyjsdl.time', 'pyjsdl.env']
*/

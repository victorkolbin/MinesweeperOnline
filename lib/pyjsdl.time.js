/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Clock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self['_time'] = self['time']();
			self['_time_init'] = self['_time'];
			self['_time_diff'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](10);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$collcomp1['append'](33);
			}

	return $collcomp1;}();
			self['_pos'] = 0;
			self['_framerate'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr4,$attr6,$2,$attr3,$1;
			return (typeof ($1=self['_time_diff'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=self['_pos']]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](self['_pos']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('tick', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var $attr20,$attr21,$attr22,$attr23,$attr24,$4,$3,$attr9,$attr8,$eq2,$eq1,$attr7,$bool2,$bool3,$bool1,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12;
			if ((($bool1=self['_pos']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_pos'] -= 1;
			}
			else {
				self['_pos'] = 9;
				if ((($bool2=!(($eq1=self['_framerate'])===($eq2=framerate)&&$eq1===null?true:
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
					if ((($bool3=framerate) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['_framerate'] = framerate;
						$m['env']['canvas']['_framerate'] = (1000)/(framerate);
					}
					else {
						$m['env']['canvas']['_framerate'] = 0;
					}
				}
			}
			self['_time'] = self['time']();
			self['_time_diff']['__setitem__'](self['_pos'], (self['_time'])-(self['_time_init']));
			self['_time_init'] = self['_time'];
			return (typeof ($3=self['_time_diff'])['__array'] != 'undefined'?
				((typeof $3['__array'][$4=self['_pos']]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](self['_pos']));
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick'] = $method;
		$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];

			return self['tick'](framerate);
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick_busy_loop'] = $method;
		$method = $pyjs__bind_method2('get_fps', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return (1000)/(($p['sum'](self['_time_diff']))/(10));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_fps'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Clock', $p['tuple']($bases), $data);
	})();
	$m['Time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1;
			self['_time_init'] = self['time']();
			var 			$lambda1 = function() {

				return self['wait']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			self['run'] = $lambda1;
			self['framerate'] = null;
			self['Clock'] = $m['Clock'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_ticks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr28,$attr27;
			return (self['time']())-(self['_time_init']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_ticks'] = $method;
		$method = $pyjs__bind_method2('delay', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $cmp1,$cmp2,start,$bool4;
			start = self['time']();
			while ((($bool4=((($cmp1=(self['time']())-(start))===($cmp2=time)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			}
			return (self['time']())-(start);
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['delay'] = $method;
		$method = $pyjs__bind_method2('wait', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			var $attr35,$attr33,$attr32,$attr31,$attr30,$bool6,$bool7,$attr34,$bool5,$attr29,$attr36;
			if ((($bool5=time) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				if ((($bool6=(self['framerate'] === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['framerate'] = $m['env']['canvas']['_framerate'];
					$m['env']['canvas']['_framerate'] = (time)*(10);
					self['timeout'](time, self);
				}
			}
			else {
				if ((($bool7=(self['framerate'] !== null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$m['env']['canvas']['_framerate'] = self['framerate'];
					self['framerate'] = null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['time', 0]]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(eventid, time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventid = arguments[1];
				time = arguments[2];
			}
			var $5,$attr41,$attr37,$attr40,$6,$attr42,$bool8,$attr38,$attr39;
			if ((($bool8=!$m['_EventTimer']['timers']['__contains__'](eventid)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$m['_EventTimer']['timers']['__setitem__'](eventid, (typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer)(eventid));
			}
			(typeof ($5=$m['_EventTimer']['timers'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6=eventid]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](eventid))['set_timer'](time);
			return null;
		}
	, 1, [null,null,['self'],['eventid'],['time']]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$method = $pyjs__bind_method2('timeout', function(time, obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
				obj = arguments[2];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			if (typeof obj == 'undefined') obj=arguments['callee']['__args__'][4][1];
			var run,$lambda2;
			var 			$lambda2 = function() {

				return obj['run']();
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			run = $lambda2;
$wnd['setTimeout'](function() {run();}, time);
		}
	, 1, [null,null,['self'],['time', null],['obj', null]]);
		$cls_definition['timeout'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Time', $p['tuple']($bases), $data);
	})();
	$m['_EventTimer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$cls_definition['timers'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function(eventid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventid = arguments[1];
			}

			self['event'] = $m['pyjsdl']['event']['Event'](eventid);
			self['timer'] = null;
			self['time'] = 0;
			self['repeat'] = true;
			return null;
		}
	, 1, [null,null,['self'],['eventid']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $bool10,$attr44,$attr43,$bool9;
			if ((($bool9=self['timer']) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self['repeat'] = false;
				self['clearTimeout']();
			}
			if ((($bool10=time) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				self['time'] = time;
				self['repeat'] = true;
				self['setTimeout']();
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('setTimeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var timer;
			timer = $wnd['setTimeout'](function() {self['run']();}, self['time']);;
			self['timer'] = timer;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setTimeout'] = $method;
		$method = $pyjs__bind_method2('clearTimeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

$wnd['clearTimeout'](self['timer']);
			self['timer'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearTimeout'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool11,$attr46,$attr47,$attr45,$attr48;
			$m['pyjsdl']['event']['post'](self['event']);
			if ((($bool11=self['repeat']) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['setTimeout']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_EventTimer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.env']
*/

/* start module: pyjamas.EventController */
$pyjs['loaded_modules']['pyjamas.EventController'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.EventController']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.EventController'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.EventController'];
	$m['__repr__'] = function() { return '<module: pyjamas.EventController>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.EventController';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['EventController'] = $pyjs['loaded_modules']['pyjamas.EventController'];


	$m['EventGenerator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.EventController';
		$method = $pyjs__bind_method2('_get_add_listener_func_name', function(ev) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			return (('add')+(ev))+('Listener');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_add_listener_func_name'] = $method;
		$method = $pyjs__bind_method2('_get_remove_listener_func_name', function(ev) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			return (('remove')+(ev))+('Listener');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_remove_listener_func_name'] = $method;
		$method = $pyjs__bind_method2('_get_dispatch_func_name', function(ev) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			return (('dispatch')+(ev))+('Event');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_dispatch_func_name'] = $method;
		$method = $pyjs__bind_method2('addListenedEvent', function(ev) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var attr_rem,el,$attr1,$attr2,$attr5,$attr4,attr_dsp,$attr3,attr_add,$attr6;
			el = $m['EventListener'](ev);
			attr_add = self['_get_add_listener_func_name'](ev);
			$p['setattr'](self, attr_add, el['add_listener']);
			attr_rem = self['_get_remove_listener_func_name'](ev);
			$p['setattr'](self, attr_rem, el['rem_listener']);
			attr_dsp = self['_get_dispatch_func_name'](ev);
			$p['setattr'](self, attr_dsp, el['dispatch']);
			return null;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['addListenedEvent'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EventGenerator', $p['tuple']($bases), $data);
	})();
	$m['EventListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.EventController';
		$method = $pyjs__bind_method2('__init__', function(ev) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['ev'] = ev;
			self['listeners'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_listener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['add_listener'] = $method;
		$method = $pyjs__bind_method2('rem_listener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['rem_listener'] = $method;
		$method = $pyjs__bind_method2('dispatch', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr8,$iter1_nextval,$iter1_type,$attr7,$iter1_iter,listener,$bool1,$iter1_array,ev,$iter1_idx;
			ev = ('on')+(self['ev']);
			$iter1_iter = self['listeners'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				if ((($bool1=$p['hasattr'](listener, ev)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs_kwargs_call(null, $p['getattr'](listener, ev), args, null, [{}]);
				}
				else {
					$pyjs_kwargs_call(null, listener, args, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['dispatch'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EventListener', $p['tuple']($bases), $data);
	})();
	$m['Handler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.EventController';
		$method = $pyjs__bind_method2('__init__', function(parent, event_type) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				parent = arguments[1];
				event_type = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof event_type != 'undefined') {
					if (event_type !== null && typeof event_type['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = event_type;
						event_type = arguments[3];
					}
				} else 				if (typeof parent != 'undefined') {
					if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parent;
						parent = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			var $attr9,listener,add_listener_fnname,del_listener_fnname,$bool2,on_event_name,$attr14,$attr11,$attr10,$attr13,$attr12;
			if ((($bool2=(parent === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				parent = self;
			}
			self['parent'] = parent;
			self['event_type'] = event_type;
			self['listeners'] = $p['dict']([]);
			self['callback_fnname'] = $p['sprintf']('on%s', event_type);
			self['extra_args'] = args;
			self['extra_kwargs'] = kwargs;
			add_listener_fnname = $p['sprintf']('add%sListener', event_type);
			del_listener_fnname = $p['sprintf']('remove%sListener', event_type);
			listener = $p['sprintf']('_%sListeners', event_type);
			on_event_name = $p['sprintf']('on%sEvent', event_type);
			$p['setattr'](parent, listener, self);
			$p['setattr'](parent, add_listener_fnname, self['addListener']);
			$p['setattr'](parent, del_listener_fnname, self['removeListener']);
			$p['setattr'](parent, on_event_name, self['onEvent']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parent'],['event_type']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				listener = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or4,$or1,$or3,$or2,$bool3,$attr20,$attr19,$attr18,$bool4,$attr15,$attr17,$attr16;
			args = ((($bool3=$or1=args) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['tuple']([]));
			kwargs = ((($bool4=$or3=kwargs) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:$p['dict']([]));
			args = (self['extra_args'])+(args);
			kwargs['update'](self['extra_kwargs']);
			self['listeners']['__setitem__'](listener, $p['tuple']([args, kwargs]));
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['listener']]);
		$cls_definition['addListener'] = $method;
		$method = $pyjs__bind_method2('removeListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['pop'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeListener'] = $method;
		$method = $pyjs__bind_method2('onEvent', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				sender = arguments[1];
				var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var $iter2_nextval,$iter2_type,$iter2_iter,args,$attr22,listener,$attr21,$iter2_idx,fn,kwargs,$iter2_array;
			$iter2_iter = self['listeners']['items']();
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
				listener = $tupleassign1[0];
				args = $tupleassign1[1];
				fn = $p['getattr'](listener, self['callback_fnname'], listener);
				var $tupleassign2 = $p['__ass_unpack'](args, 2, null);
				args = $tupleassign2[0];
				kwargs = $tupleassign2[1];
				args = (($p['tuple']([sender]))+(args))+(eventargs);
				$pyjs_kwargs_call(null, fn, args, kwargs, [{}]);
			}
			return null;
		}
	, 1, ['eventargs',null,['self'],['sender']]);
		$cls_definition['onEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Handler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.EventController */


/* end module: pyjamas.EventController */



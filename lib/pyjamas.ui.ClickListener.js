/* start module: pyjamas.ui.ClickListener */
$pyjs['loaded_modules']['pyjamas.ui.ClickListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ClickListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ClickListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['ClickListener'] = $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['ClickHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.ClickListener';
		$method = $pyjs__bind_method2('__init__', function(preventDefault) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				preventDefault = arguments[1];
			}
			if (typeof preventDefault == 'undefined') preventDefault=arguments['callee']['__args__'][3][1];
			var $attr2,$attr1,$attr4,$attr3;
			self['_clickListeners'] = $p['list']([]);
			self['_doubleclickListeners'] = $p['list']([]);
			self['_clickPreventDefault'] = preventDefault;
			self['sinkEvents']($m['Event']['ONCLICK']);
			self['sinkEvents']($m['Event']['ONDBLCLICK']);
			return null;
		}
	, 1, [null,null,['self'],['preventDefault', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

 			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onDoubleClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

 			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onDoubleClick'] = $method;
		$method = $pyjs__bind_method2('addDoubleClickListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_doubleclickListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addDoubleClickListener'] = $method;
		$method = $pyjs__bind_method2('addClickListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}
			var $bool1,stylename,$2,$1;
			stylename = self['getStyleName']();
			if ((($bool1=stylename) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['addStyleName']($p['sprintf']('%s-clickable', (typeof ($1=stylename['$$split']())['__array'] != 'undefined'?
					((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](0))));
			}
			self['_clickListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addClickListener'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter1_iter,$iter2_type,$iter2_iter,$iter1_array,type,$attr8,$iter1_nextval,$eq2,$eq3,$eq1,$attr5,$attr7,$attr6,listener,$bool3,$iter2_idx,$bool6,$eq4,$bool4,$bool5,$bool2,$iter2_nextval,$iter1_type,$iter1_idx,$iter2_array,$bool7;
			type = $m['DOM']['eventGetType'](event);
			if ((($bool2=(($eq1=type)===($eq2='click')&&$eq1===null?true:
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
				if ((($bool3=self['_clickPreventDefault']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['DOM']['eventPreventDefault'](event);
				}
				$iter1_iter = self['_clickListeners'];
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					if ((($bool4=$p['hasattr'](listener, 'onClick')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						listener['onClick'](self);
					}
					else {
						listener(self);
					}
				}
			}
			else if ((($bool5=(($eq3=type)===($eq4='dblclick')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				if ((($bool6=self['_clickPreventDefault']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$m['DOM']['eventPreventDefault'](event);
				}
				$iter2_iter = self['_doubleclickListeners'];
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					if ((($bool7=$p['hasattr'](listener, 'onDoubleClick')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						listener['onDoubleClick'](self);
					}
					else {
						listener(self);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('removeClickListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_clickListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeClickListener'] = $method;
		$method = $pyjs__bind_method2('removeDoubleClickListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_doubleclickListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeDoubleClickListener'] = $method;
		$method = $pyjs__bind_method2('clearClickListener', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			$p['__setslice'](self['_clickListeners'], 0, null, $p['list']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearClickListener'] = $method;
		$method = $pyjs__bind_method2('clearDoubleClickListener', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['__setslice'](self['_doubleclickListeners']['remove']((typeof listener == "undefined"?$m['listener']:listener)), 0, null, $p['list']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearDoubleClickListener'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ClickHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.ClickListener */


/* end module: pyjamas.ui.ClickListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/

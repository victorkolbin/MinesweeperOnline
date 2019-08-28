/* start module: pyjamas.ui.Image */
$pyjs['loaded_modules']['pyjamas.ui.Image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Image'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Image'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Image';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Image'] = $pyjs['loaded_modules']['pyjamas.ui.Image'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$m['prefetchImages'] = $p['dict']([]);
	$m['Image'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Image';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['url', 'Url', 'Url', null])]);
		$method = $pyjs__bind_method2('__init__', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				url = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof url != 'undefined') {
					if (url !== null && typeof url['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = url;
						url = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof url == 'undefined') url=arguments['callee']['__args__'][3][1];
			var $or1,$or2,$attr2,$attr1,$attr4,$bool2,$bool3,$bool1,$bool4,$attr3;
			if ((($bool2=!(($bool1=kwargs['has_key']('StyleName')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				kwargs['__setitem__']('StyleName', 'gwt-Image');
			}
			if ((($bool3=url) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				kwargs['__setitem__']('Url', url);
			}
			self['setElement'](((($bool4=$or1=kwargs['pop']('Element', null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createImg']()));
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			self['sinkEvents'](($m['Event']['ONLOAD'])|($m['Event']['ONERROR']));
			self['loadListeners'] = $p['list']([]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['url', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $attr5,$attr6;
			return ($m['Widget']['_getProps']())+(self['_props']);
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addLoadListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addLoadListener'] = $method;
		$method = $pyjs__bind_method2('removeLoadListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeLoadListener'] = $method;
		$method = $pyjs__bind_method2('getUrl', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'src');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUrl'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$eq2,$eq3,$eq1,$eq4,$iter1_iter,listener,$iter2_idx,$bool6,$iter1_array,$bool5,$iter2_type,type,$iter2_array,$iter1_idx;
			$m['Widget']['onBrowserEvent'](self, event);
			type = $m['DOM']['eventGetType'](event);
			if ((($bool5=(($eq1=type)===($eq2='load')&&$eq1===null?true:
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
				$iter1_iter = self['loadListeners'];
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					listener['onImageLoad'](self);
				}
			}
			else if ((($bool6=(($eq3=type)===($eq4='error')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$iter2_iter = self['loadListeners'];
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					listener['onImageError'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('prefetch', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var img;
			img = $m['DOM']['createImg']();
			$m['DOM']['setElemAttribute'](img, 'src', url);
			$m['prefetchImages']['__setitem__'](url, img);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['prefetch'] = $method;
		$method = $pyjs__bind_method2('setUrl', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			$m['DOM']['setElemAttribute'](self['getElement'](), 'src', url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setUrl'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Image', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Image', 'Image', $m['Image']);
	return this;
}; /* end pyjamas.ui.Image */


/* end module: pyjamas.ui.Image */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/

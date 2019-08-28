/* start module: pyjamas.ui.TextBoxBase */
$pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextBoxBase']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextBoxBase>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBoxBase';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['TextBoxBase'] = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
	$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['TextBoxBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.TextBoxBase';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_JUSTIFY'] = 'justify';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['align', 'Text Alignment', 'TextAlign', null])]);
		$method = $pyjs__bind_method2('__init__', function(element) {
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
				element = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['currentEvent'] = null;
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			$m['ChangeHandler']['__init__'](self);
			$m['InputHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $attr1,$attr2;
			return ($m['FocusWidget']['_getProps']())+(self['_props']);
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('cancelKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr4,$attr6,$bool1,$attr3;
			if ((($bool1=(self['currentEvent'] !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['DOM']['eventPreventDefault'](self['currentEvent']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancelKey'] = $method;
		$method = $pyjs__bind_method2('getCursorPos', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$pyjs_try_err,$attr7,element;
			element = self['getElement']();
			try {
				return element['selectionStart'];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCursorPos'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getSelectedText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var start,length,text;
			start = self['getCursorPos']();
			length = self['getSelectionLength']();
			text = self['getText']();
			return $p['__getslice'](text, start, (start)+(length));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedText'] = $method;
		$method = $pyjs__bind_method2('getSelectionLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,element,$pyjs_try_err,$attr11,$attr10,$attr12;
			element = self['getElement']();
			try {
				return (element['selectionEnd'])-(element['selectionStart']);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectionLength'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool2;
			if ((($bool2=focused) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['getElement']()['focus']();
			}
			else {
				self['getElement']()['blur']();
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('selectAll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2,$bool3,length,$len1;
			length = (($len1=self['getText']()) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
			if ((($bool3=((($cmp1=length)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['setSelectionRange'](0, length);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$method = $pyjs__bind_method2('setCursorPos', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}

			self['setSelectionRange'](pos, 0);
			return null;
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['setCursorPos'] = $method;
		$method = $pyjs__bind_method2('setKey', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $bool4,$attr15,$attr14,$attr16,$attr13;
			if ((($bool4=(self['currentEvent'] !== null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$m['DOM']['eventSetKeyCode'](self['currentEvent'], key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setKey'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setSelectionRange', function(pos, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				length = arguments[2];
			}
			var $cmp5,$cmp4,$cmp7,$cmp6,$or1,$cmp3,$or2,$cmp8,$bool6,$bool7,$bool5,$len2,element,$len3;
			if ((($bool5=((($cmp3=length)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				console['error'](('Length must be a positive integer. Length: ')+(length));
			}
			if ((($bool7=((($bool6=$or1=((($cmp5=pos)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($cmp7=(length)+(pos))===($cmp8=(($len2=self['getText']()) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2))))))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				console['error']((($p['sprintf']('From Index: %d ', pos))+($p['sprintf']('  To Index: %d ', (pos)+(length))))+($p['sprintf']('  Text Length: %d ', (($len3=self['getText']()) === null?0:
					(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'?$len3['length']:
								$p['len']($len3))))))));
			}
			element = self['getElement']();
			element['setSelectionRange'](pos, (pos)+(length));
			return null;
		}
	, 1, [null,null,['self'],['pos'],['length']]);
		$cls_definition['setSelectionRange'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'value', text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('setTextAlignment', function(align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setTextAlignment'] = $method;
		$method = $pyjs__bind_method2('getTextAlignment', function(align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			return $m['DOM']['getStyleAttribute'](self['getElement'](), 'textAlign');
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['getTextAlignment'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['ChangeHandler'],$m['InputHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoxBase', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.TextBoxBase */


/* end module: pyjamas.ui.TextBoxBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.Event']
*/

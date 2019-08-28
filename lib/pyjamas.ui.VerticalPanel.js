/* start module: pyjamas.ui.VerticalPanel */
$pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.VerticalPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.VerticalPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['VerticalPanel'] = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.VerticalPanel';
		$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
			var $attr2,$eq2,$eq1,tr,$attr4,$bool2,$attr1,$bool1,td,$attr3;
			if ((($bool1=(($eq1=widget['getParent']())===($eq2=self)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			if ((($bool2=(beforeIndex === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				beforeIndex = container;
				container = self['getBody']();
			}
			widget['removeFromParent']();
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['insertChild'](container, tr, beforeIndex);
			$m['DOM']['appendChild'](tr, td);
			$m['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, self['horzAlign']);
			self['setCellVerticalAlignment'](widget, self['vertAlign']);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq3,tr,$eq4,$bool3,$bool4,td;
			if ((($bool3=$p['isinstance'](widget, $p['float_int'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				widget = self['getWidget'](widget);
			}
			if ((($bool4=!(($eq3=widget['getParent']())===($eq4=self)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return false;
			}
			td = $m['DOM']['getParent'](widget['getElement']());
			tr = $m['DOM']['getParent'](td);
			$m['DOM']['removeChild'](self['getBody'](), tr);
			$m['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
	return this;
}; /* end pyjamas.ui.VerticalPanel */


/* end module: pyjamas.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/

/* start module: pyjamas.Canvas.VMLContext */
$pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.VMLContext']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.VMLContext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.VMLContext';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['VMLContext'] = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];


	$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasImplIEConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas', null, false);
	$m['VMLStyle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['type'] = 'Color';
			self['alpha'] = 1;
			self['color'] = '#000';
			self['gradient'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VMLStyle', $p['tuple']($bases), $data);
	})();
	$m['VMLContext'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
		$method = $pyjs__bind_method2('__init__', function(ctx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ctx = arguments[1];
			}
			if (typeof ctx == 'undefined') ctx=arguments['callee']['__args__'][3][1];
			var $iter1_iter,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$2,$iter1_array,$attr12,$attr9,$attr8,$iter1_nextval,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool1,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$1,$iter1_type,i,$iter1_idx;
			if ((($bool1=(ctx === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['matrix'] = $p['list']([1, 0, 0, 0, 1, 0, 0, 0, 1]);
				self['arcScaleX'] = 1;
				self['arcScaleY'] = 1;
				self['globalAlpha'] = 1;
				self['miterLimit'] = 10;
				self['lineWidth'] = 1;
				self['lineCap'] = $m['GWTCanvasImplIEConsts']['BUTT'];
				self['lineJoin'] = $m['GWTCanvasConsts']['MITER'];
				self['strokeStyle'] = $m['VMLStyle']();
				self['fillStyle'] = $m['VMLStyle']();
				self['globalCompositeOperation'] = $m['GWTCanvasImplIEConsts']['SOURCE_OVER'];
				return null;
			}
			self['matrix'] = $p['list']([]);
			$iter1_iter = $p['range'](9);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['matrix']['append']((typeof ($1=ctx['matrix'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i)));
			}
			self['arcScaleX'] = ctx['arcScaleX'];
			self['arcScaleY'] = ctx['arcScaleY'];
			self['globalAlpha'] = ctx['globalAlpha'];
			self['miterLimit'] = ctx['miterLimit'];
			self['lineWidth'] = ctx['lineWidth'];
			self['lineCap'] = ctx['lineCap'];
			self['lineJoin'] = ctx['lineJoin'];
			self['strokeStyle'] = ctx['strokeStyle'];
			self['fillStyle'] = ctx['fillStyle'];
			self['globalCompositeOperation'] = ctx['globalCompositeOperation'];
			return null;
		}
	, 1, [null,null,['self'],['ctx', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VMLContext', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.VMLContext */


/* end module: pyjamas.Canvas.VMLContext */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasConsts', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts']
*/

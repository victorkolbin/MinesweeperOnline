/* start module: pyjamas.Canvas.LinearGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.LinearGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.LinearGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['LinearGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplIE6'];


	$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['LinearGradientImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.LinearGradientImplIE6';
		$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
			}

			$m['CanvasGradientImplIE6']['__init__'](self, x0, y0, x1, y1);
			self['type'] = 'gradient';
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('cloneGradient', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var cStops,$iter1_iter,$2,$iter1_array,$1,$attr9,$attr8,$iter1_nextval,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$iter1_type,i,$iter1_idx,$len1,newGrad;
			newGrad = $m['LinearGradientImplIE6'](self['startX'], self['startY'], self['endX'], self['endY']);
			newGrad['startX'] = self['startX'];
			newGrad['startY'] = self['startY'];
			newGrad['endX'] = self['endX'];
			newGrad['endY'] = self['endY'];
			cStops = self['colorStops'];
			$iter1_iter = $p['range']((($len1=cStops) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))));
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				newGrad['colorStops']['append']((typeof ($1=cStops)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i))['cloneColorStop']());
			}
			return newGrad;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneGradient'] = $method;
		var $bases = new Array($m['CanvasGradientImplIE6']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LinearGradientImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.LinearGradientImplIE6 */


/* end module: pyjamas.Canvas.LinearGradientImplIE6 */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/

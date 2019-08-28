/* start module: pyjamas.Canvas.CanvasGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.CanvasGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['CanvasGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['ColorStop'] = $p['___import___']('pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas.Canvas', null, false);
	$m['CanvasGradientImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.CanvasGradientImplIE6';
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
			var $attr16,$eq2,$attr9,$attr8,$attr2,$attr1,$attr3,$eq1,$attr5,$attr4,$attr7,$attr6,$bool1,$attr15,$attr14,$attr11,$attr10,$attr13,$attr12;
			self['startX'] = x0;
			self['startY'] = y0;
			self['endX'] = x1;
			self['endY'] = y1;
			self['startRad'] = 0;
			self['endRad'] = 0;
			self['dx'] = (x1)-(x0);
			self['dy'] = (y1)-(y0);
			self['length'] = $m['math']['sqrt'](((self['dx'])*(self['dx']))+((self['dy'])*(self['dy'])));
			if ((($bool1=(($eq1=self['dy'])===($eq2=0)&&$eq1===null?true:
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
				self['angle'] = 90;
			}
			else {
				self['angle'] = ($p['float_int']((($m['math']['atan']((self['dx'])/(self['dy'])))*(180))/($m['math']['pi'])))+(180);
			}
			self['colorStops'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				color = arguments[2];
			}
			var $iter1_iter,$attr20,$attr21,$attr22,cs,$iter1_array,$iter1_nextval,$bool2,$attr19,$attr18,$attr17,$2,$1,$cmp1,$iter1_type,newColorStop,i,$cmp2,$iter1_idx,$len1;
			newColorStop = $m['ColorStop'](offset, color);
			$iter1_iter = $p['range']((($len1=self['colorStops']) === null?0:
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
				cs = (typeof ($1=self['colorStops'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i));
				if ((($bool2=((($cmp1=offset)===($cmp2=cs['offset'])?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['colorStops']['append'](i, newColorStop);
					return null;
				}
			}
			self['colorStops']['append'](newColorStop);
			return null;
		}
	, 1, [null,null,['self'],['offset'],['color']]);
		$cls_definition['addColorStop'] = $method;
		$method = $pyjs__bind_method2('cloneGradient', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneGradient'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasGradientImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplIE6 */


/* end module: pyjamas.Canvas.CanvasGradientImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.ColorStop']
*/

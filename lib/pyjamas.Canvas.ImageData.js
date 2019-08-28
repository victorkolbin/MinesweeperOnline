/* start module: pyjamas.Canvas.ImageData */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageData'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageData']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageData>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageData';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageData'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];


	$m['ImageData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.ImageData';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $attr1,$attr2,$attr5,$attr4,$attr6,$attr3;
			self['width'] = imagedata['width'];
			self['height'] = imagedata['height'];
			self['data'] = imagedata['data'];
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return self['data'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getData'] = $method;
		$method = $pyjs__bind_method2('setData', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			self['data'] = data;
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['setData'] = $method;
		$method = $pyjs__bind_method2('getPixel', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $attr15,$attr14,offset,$attr16,$attr13;
			offset = (((y)*(self['width']))+(x))*(4);
			return $p['__getslice'](self['data'], offset, (offset)+(4));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['getPixel'] = $method;
		$method = $pyjs__bind_method2('setPixel', function(x, y, rgba) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				rgba = arguments[3];
			}
			var $attr20,$attr19,$attr18,offset,$attr17;
			offset = (((y)*(self['width']))+(x))*(4);
			$p['__setslice'](self['data'], offset, (offset)+(4), rgba);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['rgba']]);
		$cls_definition['setPixel'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageData', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.ImageData */


/* end module: pyjamas.Canvas.ImageData */



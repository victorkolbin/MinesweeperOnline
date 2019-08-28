/* start module: pyjamas.Canvas.JSOStack */
$pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.JSOStack']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.JSOStack>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.JSOStack';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['JSOStack'] = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];


	$m['JSOStack'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.JSOStack';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['scratch'] = $p['list']([]);
			self['_minX'] = null;
			self['_minY'] = null;
			self['_maxX'] = null;
			self['_maxY'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getMaxCoordX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return self['_maxX'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxCoordX'] = $method;
		$method = $pyjs__bind_method2('getMaxCoordY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return self['_maxY'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxCoordY'] = $method;
		$method = $pyjs__bind_method2('getMinCoordX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return self['_minX'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMinCoordX'] = $method;
		$method = $pyjs__bind_method2('getMinCoordY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return self['_minY'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMinCoordY'] = $method;
		$method = $pyjs__bind_method2('join', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return ''['join'](self['scratch']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['join'] = $method;
		$method = $pyjs__bind_method2('logCoordX', function(coordX) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				coordX = arguments[1];
			}
			var $cmp4,$attr16,$cmp1,$cmp3,$cmp2,$bool2,$bool3,$bool1,$attr15,$attr14,$attr11,$attr13,$attr12;
			if ((($bool1=(self['_minX'] === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_minX'] = coordX;
				self['_maxX'] = coordX;
			}
			else {
				if ((($bool2=((($cmp1=self['_minX'])===($cmp2=coordX)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['_minX'] = coordX;
				}
				else {
					if ((($bool3=((($cmp3=self['_maxX'])===($cmp4=coordX)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['_maxX'] = coordX;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['coordX']]);
		$cls_definition['logCoordX'] = $method;
		$method = $pyjs__bind_method2('logCoordY', function(coordY) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				coordY = arguments[1];
			}
			var $cmp5,$cmp7,$cmp6,$cmp8,$attr20,$attr21,$attr22,$attr19,$attr18,$bool4,$bool5,$bool6,$attr17;
			if ((($bool4=(self['_minY'] === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['_minY'] = coordY;
				self['_maxY'] = coordY;
			}
			else {
				if ((($bool5=((($cmp5=self['_minY'])===($cmp6=coordY)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['_minY'] = coordY;
				}
				else {
					if ((($bool6=((($cmp7=self['_maxY'])===($cmp8=coordY)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self['_maxY'] = coordY;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['coordY']]);
		$cls_definition['logCoordY'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['scratch']['pop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('append', function(pathStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathStr = arguments[1];
			}

			self['scratch']['append'](pathStr);
			return null;
		}
	, 1, [null,null,['self'],['pathStr']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24,$len1;
			return (($len1=self['scratch']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JSOStack', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.JSOStack */


/* end module: pyjamas.Canvas.JSOStack */



/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];


	$m['base64'] = $p['___import___']('base64', 'pyjsdl');
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
	$m['Window'] = $p['___import___']('pyjsdl.pyjsobj.Window', 'pyjsdl', null, false);
	$m['RootPanel'] = $p['___import___']('pyjsdl.pyjsobj.RootPanel', 'pyjsdl', null, false);
	$m['FocusPanel'] = $p['___import___']('pyjsdl.pyjsobj.FocusPanel', 'pyjsdl', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl', null, false);
	$m['loadImages'] = $p['___import___']('pyjsdl.pyjsobj.loadImages', 'pyjsdl', null, false);
	$m['TextBox'] = $p['___import___']('pyjsdl.pyjsobj.TextBox', 'pyjsdl', null, false);
	$m['TextArea'] = $p['___import___']('pyjsdl.pyjsobj.TextArea', 'pyjsdl', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl', null, false);
	$m['eventGetMouseWheelVelocityY'] = $p['___import___']('pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjsdl.pyjsobj.Event', 'pyjsdl', null, false);
	$m['requestAnimationFrameInit'] = $p['___import___']('pyjsdl.pyjsobj.requestAnimationFrameInit', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['_canvas'] = null;
	$m['_ctx'] = null;
	$m['_img'] = null;
	$m['_wnd'] = null;
	$m['Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, buffered) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				buffered = arguments[2];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$pyjs_try_err,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool1,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12;
			$m['Surface']['__init__'](self, size);
			$m['MouseWheelHandler']['__init__'](self, true);
			if ((($bool1=$p['isinstance'](buffered, $p['bool'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_bufferedimage'] = buffered;
			}
			else {
				self['_bufferedimage'] = true;
			}
			try {
				if ((($bool2=self['impl']['canvasContext']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['_isCanvas'] = true;
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					self['_isCanvas'] = false;
					self['_bufferedimage'] = false;
				}
			}
			if ((($bool3=self['_bufferedimage']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['surface'] = $m['Surface'](size);
			}
			else {
				self['surface'] = self;
			}
			self['images'] = $p['dict']([]);
			self['image_list'] = $p['list']([]);
			self['callback'] = null;
			self['time'] = $m['Time']();
			self['event'] = $m['pyjsdl']['event'];
			self['addMouseListener'](self);
			self['addMouseWheelListener'](self);
			self['addKeyboardListener'](self);
			self['sinkEvents'](($m['Event']['ONMOUSEDOWN'])|($m['Event']['ONMOUSEUP'])|($m['Event']['ONMOUSEMOVE'])|($m['Event']['ONMOUSEOUT'])|($m['Event']['ONMOUSEWHEEL'])|($m['Event']['ONKEYDOWN'])|($m['Event']['ONKEYPRESS'])|($m['Event']['ONKEYUP']));
			self['modKey'] = $m['pyjsdl']['event']['modKey'];
			self['specialKey'] = $m['pyjsdl']['event']['specialKey'];
			self['event']['_initiate_touch_listener'](self);
			self['_touch_callback'] = self['event']['touchlistener']['callback'];
			self['_repaint'] = false;
			self['_rect_list'] = $p['list']([]);
			self['_rect_len'] = 0;
			self['_rect_num'] = 0;
			self['_framerate'] = 0;
			self['_frametime'] = 0;
			self['_canvas_init']();
			self['initialized'] = false;
			return null;
		}
	, 1, [null,null,['self'],['size'],['buffered']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_canvas_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,$attr30,$attr29;
			$m['_canvas'] = self;
			$m['_ctx'] = self['impl']['canvasContext'];
			$m['_img'] = self['surface']['canvas'];
			$m['_wnd'] = $m['requestAnimationFrameInit']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_canvas_init'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr33,$attr36,$attr35,$attr34,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			self['event']['mouseMove']['__setitem__']('x', $tupleassign1[0]);
			self['event']['mouseMove']['__setitem__']('y', $tupleassign1[1]);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr37,$attr40,$attr39,$attr38,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			self['event']['mousePress']['__setitem__'](event['button'], true);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr44,$attr42,$attr43,$attr41,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			self['event']['mousePress']['__setitem__'](event['button'], false);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_iter,$attr46,$attr47,$attr45,$attr48,$attr49,$attr60,$attr61,$attr62,$iter1_array,$1,$iter1_nextval,$bool4,$2,keycode,$iter1_type,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$iter1_idx;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
			self['event']['mousePress']['__setitem__'](0, $tupleassign2[0]);
			self['event']['mousePress']['__setitem__'](1, $tupleassign2[1]);
			self['event']['mousePress']['__setitem__'](2, $tupleassign2[2]);
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([-(1), -(1)]), 2, null);
			self['event']['mouseMove']['__setitem__']('x', $tupleassign3[0]);
			self['event']['mouseMove']['__setitem__']('y', $tupleassign3[1]);
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
			self['event']['mouseMoveRel']['__setitem__']('x', $tupleassign4[0]);
			self['event']['mouseMoveRel']['__setitem__']('y', $tupleassign4[1]);
			$iter1_iter = self['modKey'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				keycode = $iter1_nextval;
				if ((($bool4=(typeof ($1=self['event']['keyPress'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=keycode]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](keycode))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['event']['keyPress']['__setitem__'](keycode, false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $attr67,$attr68,$attr64,$attr65,$eq1,$attr63,$eq2,$bool6,$bool5,$attr70,event,$attr66,$attr69;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool5=(($eq1=event['type'])===($eq2='mousewheel')&&$eq1===null?true:
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
				if ((($bool6=$p['hasattr'](event, 'wheelDeltaX')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['onMouseWheel'] = self['_onMouseWheel'];
					self['_onMouseWheel'](sender, velocity);
				}
				else {
					self['onMouseWheel'] = self['_onMouseWheelY'];
					$m['DOM']['eventGetMouseWheelVelocityY'] = $m['eventGetMouseWheelVelocityY'];
					self['_onMouseWheelY'](sender, $m['eventGetMouseWheelVelocityY'](event));
				}
			}
			else {
				self['onMouseWheel'] = self['_onMouseScroll'];
				self['_onMouseScroll'](sender, velocity);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('_onMouseWheel', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $bool10,event,$5,$iter2_iter,$4,events,$iter2_type,$iter2_idx,$bool7,$6,$bool8,$bool9,$3,$cmp4,$iter2_nextval,$cmp1,$cmp3,$cmp2,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,evt,button,$iter2_array;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool8=!(($bool7=event['wheelDeltaX']) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool9=((($cmp1=velocity)===($cmp2=0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					button = 4;
					events = (velocity)/(-(3));
				}
				else {
					button = 5;
					events = (velocity)/(3);
				}
			}
			else {
				if ((($bool10=((($cmp3=velocity)===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					button = 6;
					events = (velocity)/(-(3));
				}
				else {
					button = 7;
					events = (velocity)/(3);
				}
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([(typeof ($3=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $3['__array'][$4='x']) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__']('x')), (typeof ($5=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6='y']) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__']('y'))]);
			$iter2_iter = $p['range'](events);
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				evt = $iter2_nextval;
				self['event']['_updateQueue'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('_onMouseWheelY', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $bool11,$iter3_type,event,$attr80,$iter3_idx,$iter3_array,$iter3_iter,events,$8,$9,$7,$cmp5,$cmp6,$10,$attr79,$attr78,$attr77,button,evt,$iter3_nextval;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool11=((($cmp5=velocity)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				button = 4;
				events = (velocity)/(-(3));
			}
			else {
				button = 5;
				events = (velocity)/(3);
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([(typeof ($7=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8='x']) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__']('x')), (typeof ($9=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $9['__array'][$10='y']) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__']('y'))]);
			$iter3_iter = $p['range'](events);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				evt = $iter3_nextval;
				self['event']['_updateQueue'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseWheelY'] = $method;
		$method = $pyjs__bind_method2('_onMouseScroll', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $bool12,$bool13,$bool14,$bool15,event,$attr82,$attr83,$attr81,$attr84,$or1,$or2,$cmp14,$cmp11,$cmp10,$cmp13,$cmp12,$11,$14,$cmp7,$12,$13,button,$cmp9,$cmp8;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool13=((($bool12=$or1=((($cmp7=velocity)===($cmp8=1)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12['__nonzero__']=='function'?
						$bool12['__nonzero__']() :
						(typeof $bool12['__len__']=='function'?
							($bool12['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($cmp9=velocity)===($cmp10=-(1))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == -1))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool14=((($cmp11=velocity)===($cmp12=0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					button = 4;
				}
				else {
					button = 5;
				}
			}
			else {
				if ((($bool15=((($cmp13=velocity)===($cmp14=0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					button = 6;
				}
				else {
					button = 7;
				}
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([(typeof ($11=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $11['__array'][$12='x']) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__']('x')), (typeof ($13=self['event']['mouseMove'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14='y']) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__']('y'))]);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseScroll'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $attr86,$attr85,$attr89,$bool16,event,$attr90,$attr88,$bool17,$attr87;
			if ((($bool16=self['modKey']['__contains__'](keycode)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				event = $m['DOM']['eventGetCurrentEvent']();
				self['event']['keyPress']['__setitem__'](keycode, true);
				self['event']['_updateQueue'](event);
				$m['DOM']['eventPreventDefault'](event);
			}
			else if ((($bool17=self['specialKey']['__contains__'](keycode)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				event = $m['DOM']['eventGetCurrentEvent']();
				self['event']['_updateQueue'](event);
				$m['DOM']['eventPreventDefault'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $bool18,$attr94,$attr91,$attr93,$attr92,$and1,$attr96,$and2,$attr95,$bool19,event,$bool20;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool20=!(($bool19=((($bool18=$and1=event['keyCode']) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18['__nonzero__']=='function'?
						$bool18['__nonzero__']() :
						(typeof $bool18['__len__']=='function'?
							($bool18['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['specialKey']['__contains__'](event['keyCode']):$and1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19['__nonzero__']=='function'?
						$bool19['__nonzero__']() :
						(typeof $bool19['__len__']=='function'?
							($bool19['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['event']['_updateQueue'](event);
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $attr97,$attr99,$attr98,$bool21,$attr100,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool21=self['modKey']['__contains__'](keycode)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21['__nonzero__']=='function'?
							$bool21['__nonzero__']() :
							(typeof $bool21['__len__']=='function'?
								($bool21['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['event']['keyPress']['__setitem__'](keycode, false);
			}
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onTouchInitiate', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter4_nextval,$iter4_idx,callback,$iter4_type,$bool22,$iter4_array,$iter4_iter;
			self['event']['touchlistener']['activate']();
			$iter4_iter = self['_touch_callback'];
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				callback = $iter4_nextval;
				if ((($bool22=$p['hasattr'](callback, 'onTouchInitiate')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					callback['onTouchInitiate'](event);
				}
			}
			self['onTouchStart'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchInitiate'] = $method;
		$method = $pyjs__bind_method2('onTouchStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter5_nextval,$iter5_array,callback,$iter5_iter,$iter5_idx,$iter5_type;
			$iter5_iter = self['_touch_callback'];
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				callback = $iter5_nextval;
				callback['onTouchStart'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchStart'] = $method;
		$method = $pyjs__bind_method2('onTouchEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter6_idx,$iter6_type,callback,$iter6_array,$iter6_iter,$iter6_nextval;
			$iter6_iter = self['_touch_callback'];
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				callback = $iter6_nextval;
				callback['onTouchEnd'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchEnd'] = $method;
		$method = $pyjs__bind_method2('onTouchMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,callback,$iter7_idx,$iter7_type;
			$iter7_iter = self['_touch_callback'];
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				callback = $iter7_nextval;
				callback['onTouchMove'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchMove'] = $method;
		$method = $pyjs__bind_method2('onTouchCancel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,callback,$iter8_nextval,$iter8_type;
			$iter8_iter = self['_touch_callback'];
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				callback = $iter8_nextval;
				callback['onTouchCancel'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchCancel'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $attr102,$bool23,$attr101;
			$m['Surface']['resize'](self, width, height);
			if ((($bool23=self['_bufferedimage']) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23['__nonzero__']=='function'?
							$bool23['__nonzero__']() :
							(typeof $bool23['__len__']=='function'?
								($bool23['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['surface']['resize'](width, height);
			}
			self['surface']['_display']['_surface_rect'] = self['surface']['get_rect']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}
			var $bool25,$bool24;
			if ((($bool25=!(($bool24=$p['hasattr'](cb, 'run')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24['__nonzero__']=='function'?
						$bool24['__nonzero__']() :
						(typeof $bool24['__len__']=='function'?
							($bool24['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25['__nonzero__']=='function'?
							$bool25['__nonzero__']() :
							(typeof $bool25['__len__']=='function'?
								($bool25['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['callback'] = (typeof Callback == "undefined"?$m['Callback']:Callback)(cb);
			}
			else {
				self['callback'] = cb;
			}
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('load_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var ext,image,image_list,$24,$iter9_iter,$21,$20,$22,$iter9_nextval,$iter9_idx,$bool27,$bool26,$bool29,$bool28,data,$23,$15,$16,$17,name,$18,$19,$iter9_type,$bool30,$iter9_array;
			if ((($bool26=images) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26['__nonzero__']=='function'?
							$bool26['__nonzero__']() :
							(typeof $bool26['__len__']=='function'?
								($bool26['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				image_list = $p['list']([]);
				$iter9_iter = images;
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					image = $iter9_nextval;
					if ((($bool27=$p['isinstance'](image, $p['str'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27['__nonzero__']=='function'?
									$bool27['__nonzero__']() :
									(typeof $bool27['__len__']=='function'?
										($bool27['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						image_list['append'](image);
						self['image_list']['append'](image);
					}
					else {
						name = (typeof ($15=image)['__array'] != 'undefined'?
							((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__'](0));
						if ((($bool28=$p['isinstance']((typeof ($17=image)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](1)), $p['str'])) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
								false :
								(typeof $bool28=='object'?
									(typeof $bool28['__nonzero__']=='function'?
										$bool28['__nonzero__']() :
										(typeof $bool28['__len__']=='function'?
											($bool28['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							data = (typeof ($19=image)['__array'] != 'undefined'?
								((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
									$19['__getitem__']($20)):
									$19['__getitem__'](1));
						}
						else {
							data = $m['base64']['b64encode']((typeof ($21=image)['__array'] != 'undefined'?
								((typeof $21['__array'][$22=1]) != 'undefined'?$21['__array'][$22]:
									$21['__getitem__']($22)):
									$21['__getitem__'](1))['getvalue']());
						}
						if ((($bool30=!(($bool29=data['startswith']('data:')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
							false :
							(typeof $bool29=='object'?
								(typeof $bool29['__nonzero__']=='function'?
									$bool29['__nonzero__']() :
									(typeof $bool29['__len__']=='function'?
										($bool29['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
								false :
								(typeof $bool30=='object'?
									(typeof $bool30['__nonzero__']=='function'?
										$bool30['__nonzero__']() :
										(typeof $bool30['__len__']=='function'?
											($bool30['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							ext = (typeof ($23=name['strip']()['$$split']('.'))['__array'] != 'undefined'?
								((typeof $23['__array'][$24=-(1)]) != 'undefined'?$23['__array'][$24]:
									$23['__getitem__']($24)):
									$23['__getitem__'](-(1)));
							data = $p['sprintf']('data:%s;base64,%s', $p['tuple']([ext, data]));
						}
						image_list['append'](data);
						self['image_list']['append'](name);
					}
				}
				$m['loadImages'](image_list, self);
			}
			else {
				self['start']();
			}
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['load_images'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $iter10_nextval,i,$25,$iter10_array,$26,$attr106,$iter10_type,$attr104,$attr105,$attr103,image,$iter10_iter,$iter10_idx;
			$iter10_iter = $p['enumerate'](self['image_list']);
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				var $tupleassign5 = $p['__ass_unpack']($iter10_nextval, 2, null);
				i = $tupleassign5[0];
				image = $tupleassign5[1];
				self['images']['__setitem__'](image, (typeof ($25=images)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=i]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](i))['getElement']());
			}
			self['start']();
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('start', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool32,$attr107,$bool31,$attr108;
			if ((($bool32=!(($bool31=self['initialized']) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31['__nonzero__']=='function'?
						$bool31['__nonzero__']() :
						(typeof $bool31['__len__']=='function'?
							($bool31['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32['__nonzero__']=='function'?
							$bool32['__nonzero__']() :
							(typeof $bool32['__len__']=='function'?
								($bool32['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['initialized'] = true;
				$m['_wnd']['requestAnimationFrame']((typeof run == "undefined"?$m['run']:run));
				self['time']['timeout'](0, self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function(ts) {

				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['ts']];
			$m['run'] = $lambda1;
			var 			$lambda2 = function() {

				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			self['run'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('_get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr119,$28,$attr118,$attr111,$attr110,$attr112,$attr115,$attr114,$27,$attr116,$cmp15,$bool33,$cmp16,$attr117,$attr120,$30,$29,$attr113,$attr109;
			if ((($bool33=((($cmp15=self['_rect_num'])===($cmp16=self['_rect_len'])?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33['__nonzero__']=='function'?
							$bool33['__nonzero__']() :
							(typeof $bool33['__len__']=='function'?
								($bool33['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof ($27=self['_rect_list'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28=self['_rect_num']]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](self['_rect_num']));
			}
			else {
				self['_rect_list']['append']($m['Rect'](0, 0, 0, 0));
				self['_rect_len'] += 1;
				return (typeof ($29=self['_rect_list'])['__array'] != 'undefined'?
					((typeof $29['__array'][$30=self['_rect_num']]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](self['_rect_num']));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_rect'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr121,$attr122,$bool34,$bool35;
			if ((($bool35=!(($bool34=self['_repaint']) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34['__nonzero__']=='function'?
						$bool34['__nonzero__']() :
						(typeof $bool34['__len__']=='function'?
							($bool34['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['callback']['run']();
				self['_repaint'] = true;
			}
			self['time']['timeout'](0, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array($m['Surface'],$m['MouseWheelHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
	})();
	$m['run'] = function(timestamp) {
		var $attr139,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr148,$attr149,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$attr137,$attr136,$cmp17,$cmp18,rect,$attr150,$32,$31,$attr133,$attr132,$attr131,$attr130,$bool36,$bool37,$attr135,$attr134,$bool38,$attr138;
		$m['_wnd']['requestAnimationFrame']($m['run']);
		if ((($bool36=$m['_canvas']['_repaint']) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36['__nonzero__']=='function'?
						$bool36['__nonzero__']() :
						(typeof $bool36['__len__']=='function'?
							($bool36['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool37=((((($cmp17=(timestamp)-($m['_canvas']['_frametime']))===($cmp18=$m['_canvas']['_framerate'])?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))))|1) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['_canvas']['_frametime'] = timestamp;
				while ((($bool38=$m['_canvas']['_rect_num']) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rect = (typeof ($31=$m['_canvas']['_rect_list'])['__array'] != 'undefined'?
						((typeof $31['__array'][$32=($m['_canvas']['_rect_num'])-(1)]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__'](($m['_canvas']['_rect_num'])-(1)));
					$m['_ctx']['drawImage']($m['_img'], rect['x'], rect['y'], rect['width'], rect['height'], rect['x'], rect['y'], rect['width'], rect['height']);
					$m['_canvas']['_rect_num'] -= 1;
				}
				$m['_canvas']['_repaint'] = false;
			}
		}
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null,['timestamp']];
	$m['Callback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$cls_definition['__slots__'] = $p['list'](['run']);
		$method = $pyjs__bind_method2('__init__', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			self['run'] = cb;
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Callback', $p['tuple']($bases), $data);
	})();
	$m['Display'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_initialized'] = false;
			self['init']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool39,$attr151,$bool40,$attr152;
			if ((($bool40=!(($bool39=self['_initialized']) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39['__nonzero__']=='function'?
						$bool39['__nonzero__']() :
						(typeof $bool39['__len__']=='function'?
							($bool39['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40['__nonzero__']=='function'?
							$bool40['__nonzero__']() :
							(typeof $bool40['__len__']=='function'?
								($bool40['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['id'] = '';
				self['icon'] = null;
				self['_image_list'] = $p['list']([]);
				self['_nonimplemented_methods']();
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
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
				size = arguments[1];
				buffered = arguments[2];
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
				if (typeof buffered != 'undefined') {
					if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = buffered;
						buffered = arguments[3];
					}
				} else 				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
			var $lambda4,$lambda3,$attr164,$attr160,$attr161,$attr162,$attr163,$bool42,$bool41,panel,$attr155,$attr154,$attr157,$attr156,$attr153,$attr159,$attr158;
			self['canvas'] = $m['Canvas'](size, buffered);
			$m['env']['canvas'] = self['canvas'];
			self['frame'] = $m['Window']['getDocumentRoot']();
			$m['env']['frame'] = self['frame'];
			panel = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':self['canvas']}]);
			$m['RootPanel']()['add'](panel);
			self['panel'] = panel;
			self['vpanel'] = null;
			self['textbox'] = null;
			self['textarea'] = null;
			self['Textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox);
			self['Textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea);
			self['surface'] = self['canvas']['surface'];
			self['surface']['_display'] = self;
			self['_surface_rect'] = self['surface']['get_rect']();
			if ((($bool42=!(($bool41=self['canvas']['_bufferedimage']) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41['__nonzero__']=='function'?
						$bool41['__nonzero__']() :
						(typeof $bool41['__len__']=='function'?
							($bool41['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var 				$lambda3 = function() {

					return null;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = [null,null];
				self['flip'] = $lambda3;
				var 				$lambda4 = function() {
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					return null;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['update'] = $lambda4;
			}
			return self['surface'];
		}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
		$cls_definition['set_mode'] = $method;
		$method = $pyjs__bind_method2('setup', function(callback, images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
				images = arguments[2];
			}
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
			var $bool44,$bool43,$attr169,$attr165,$attr167,image_list,$attr170,$attr168,$attr166;
			self['canvas']['set_callback'](callback);
			image_list = $p['list']([]);
			if ((($bool43=self['_image_list']) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43['__nonzero__']=='function'?
							$bool43['__nonzero__']() :
							(typeof $bool43['__len__']=='function'?
								($bool43['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				image_list['extend'](self['_image_list']);
				$p['__setslice'](self['_image_list'], 0, null, $p['list']([]));
			}
			if ((($bool44=images) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44['__nonzero__']=='function'?
							$bool44['__nonzero__']() :
							(typeof $bool44['__len__']=='function'?
								($bool44['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				image_list['extend'](images);
			}
			self['canvas']['load_images'](image_list);
			return null;
		}
	, 1, [null,null,['self'],['callback'],['images', null]]);
		$cls_definition['setup'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}
			var $bool45,$attr172,$attr171;
			if ((($bool45=self['canvas']['initialized']) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['canvas']['set_callback'](callback);
			}
			else {
				self['setup'](callback);
			}
			return null;
		}
	, 1, [null,null,['self'],['callback']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('setup_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $bool46;
			if ((($bool46=$p['isinstance'](images, $p['str'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				images = $p['list']([images]);
			}
			self['_image_list']['extend'](images);
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['setup_images'] = $method;
		$method = $pyjs__bind_method2('textbox_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool47,$attr174,$attr173,$bool48;
			if ((($bool48=!(($bool47=self['textbox']) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47['__nonzero__']=='function'?
						$bool47['__nonzero__']() :
						(typeof $bool47['__len__']=='function'?
							($bool47['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox)();
				self['textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea)();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['textbox_init'] = $method;
		$method = $pyjs__bind_method2('is_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr176,$attr175;
			return self['canvas']['_isCanvas'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_canvas'] = $method;
		$method = $pyjs__bind_method2('get_surface', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr177,$attr178;
			return self['surface'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_surface'] = $method;
		$method = $pyjs__bind_method2('get_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr180,$attr179;
			return self['canvas'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_canvas'] = $method;
		$method = $pyjs__bind_method2('get_panel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr182,$attr181;
			return self['panel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_panel'] = $method;
		$method = $pyjs__bind_method2('get_vpanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool50,$attr188,$attr186,$attr187,$attr184,$attr185,$attr183,$bool49;
			if ((($bool50=!(($bool49=self['vpanel']) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49['__nonzero__']=='function'?
						$bool49['__nonzero__']() :
						(typeof $bool49['__len__']=='function'?
							($bool49['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50['__nonzero__']=='function'?
							$bool50['__nonzero__']() :
							(typeof $bool50['__len__']=='function'?
								($bool50['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['vpanel'] = $m['VerticalPanel']();
				$m['RootPanel']()['add'](self['vpanel']);
			}
			return self['vpanel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_vpanel'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteLeft']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteTop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getScrollLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr190,$attr189;
			return self['frame']['scrollLeft'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollLeft'] = $method;
		$method = $pyjs__bind_method2('getScrollTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr191,$attr192;
			return self['frame']['scrollTop'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollTop'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_initialized'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['quit'] = $method;
		$method = $pyjs__bind_method2('get_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr193,$attr194;
			return self['_initialized'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('get_active', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool51;
			if ((($bool51=$p['hasattr'](self, 'canvas')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51['__nonzero__']=='function'?
							$bool51['__nonzero__']() :
							(typeof $bool51['__len__']=='function'?
								($bool51['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_active'] = $method;
		$method = $pyjs__bind_method2('set_caption', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $pyjs_try_err,$attr195,$attr196;
			self['id'] = text;
			try {
				self['canvas']['setID'](self['id']);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['set_caption'] = $method;
		$method = $pyjs__bind_method2('get_caption', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr198,$pyjs_try_err,$attr197;
			try {
				return self['canvas']['getID']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					return self['id'];
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_caption'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda5;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['set_icon'] = $lambda5;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		$method = $pyjs__bind_method2('flip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr199,$attr200;
			self['canvas']['impl']['canvasContext']['drawImage'](self['surface']['canvas'], 0, 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('update', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];
			var $bool52,$bool53,$attr204,$attr201,$attr203,$attr202;
			if ((($bool52=$p['hasattr'](rect_list, 'append')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				(typeof _update == "undefined"?$m['_update']:_update)(self['canvas'], rect_list);
			}
			else if ((($bool53=rect_list) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53['__nonzero__']=='function'?
							$bool53['__nonzero__']() :
							(typeof $bool53['__len__']=='function'?
								($bool53['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				(typeof _update == "undefined"?$m['_update']:_update)(self['canvas'], $p['list']([rect_list]));
			}
			else {
				self['flip']();
			}
			return null;
		}
	, 1, [null,null,['self'],['rect_list', null]]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Display', $p['tuple']($bases), $data);
	})();
	$m['_update'] = function(canvas, rect_list) {
		var $bool54,$bool55,$bool56,$bool57,$bool58,$bool59,$35,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$attr209,$attr208,$attr205,$42,$attr207,$attr206,$44,repaint_rect,$iter11_iter,$and3,$and4,$and5,$and6,$43,$iter11_array,$iter11_nextval,$cmp19,$41,rect,$iter11_idx,$38,$39,$36,$37,$34,$iter11_type,$33,$40,$attr212,$attr213,$attr210,$attr211,$attr216,$attr214,$attr215;
		$iter11_iter = rect_list;
		if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
			$iter11_type = 0;
		} else {
			$iter11_iter = $iter11_iter['__iter__']();
			$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter11_idx = 0;
		while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
			rect = $iter11_nextval;
			if ((($bool54=$p['hasattr'](rect, 'width')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54['__nonzero__']=='function'?
							$bool54['__nonzero__']() :
							(typeof $bool54['__len__']=='function'?
								($bool54['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool56=((($bool55=$and3=((($cmp19=rect['width'])===($cmp20=0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55['__nonzero__']=='function'?
							$bool55['__nonzero__']() :
							(typeof $bool55['__len__']=='function'?
								($bool55['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp21=rect['height'])===($cmp22=0)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == 1):$and3)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56['__nonzero__']=='function'?
								$bool56['__nonzero__']() :
								(typeof $bool56['__len__']=='function'?
									($bool56['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = rect['x'];
					repaint_rect['y'] = rect['y'];
					repaint_rect['width'] = rect['width'];
					repaint_rect['height'] = rect['height'];
					canvas['_rect_num'] += 1;
				}
			}
			else if ((($bool57=rect) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57['__nonzero__']=='function'?
							$bool57['__nonzero__']() :
							(typeof $bool57['__len__']=='function'?
								($bool57['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool59=((($bool58=$and5=((($cmp23=(typeof ($33=rect)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=2]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](2)))===($cmp24=0)?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58['__nonzero__']=='function'?
							$bool58['__nonzero__']() :
							(typeof $bool58['__len__']=='function'?
								($bool58['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp25=(typeof ($35=rect)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=3]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](3)))===($cmp26=0)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == 1):$and5)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59['__nonzero__']=='function'?
								$bool59['__nonzero__']() :
								(typeof $bool59['__len__']=='function'?
									($bool59['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = (typeof ($37=rect)['__array'] != 'undefined'?
						((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](0));
					repaint_rect['y'] = (typeof ($39=rect)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](1));
					repaint_rect['width'] = (typeof ($41=rect)['__array'] != 'undefined'?
						((typeof $41['__array'][$42=2]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](2));
					repaint_rect['height'] = (typeof ($43=rect)['__array'] != 'undefined'?
						((typeof $43['__array'][$44=3]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__'](3));
					canvas['_rect_num'] += 1;
				}
			}
		}
		return null;
	};
	$m['_update']['__name__'] = '_update';

	$m['_update']['__bind_type__'] = 0;
	$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
	$m['Textbox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $bool61,$bool60,$bool62,$attr223,$attr222,$attr221,$attr220,$attr219,$pyjs_try_err,$46,$attr218,$48,$attr224,$47,$attr217,$45;
			$m['TextBox']['__init__'](self);
			if ((($bool61=!(($bool60=size) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60['__nonzero__']=='function'?
						$bool60['__nonzero__']() :
						(typeof $bool60['__len__']=='function'?
							($bool60['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61['__nonzero__']=='function'?
							$bool61['__nonzero__']() :
							(typeof $bool61['__len__']=='function'?
								($bool61['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([($m['env']['canvas']['surface']['width'])-(5), 20]), 2, null);
				self['width'] = $tupleassign6[0];
				self['height'] = $tupleassign6[1];
			}
			else {
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['float_int']((typeof ($45=size)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__'](0))), $p['float_int']((typeof ($47=size)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=1]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](1)))]), 2, null);
				self['width'] = $tupleassign7[0];
				self['height'] = $tupleassign7[1];
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			self['setVisible'](false);
			if ((($bool62=panel) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62['__nonzero__']=='function'?
							$bool62['__nonzero__']() :
							(typeof $bool62['__len__']=='function'?
								($bool62['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$m['env']['canvas']['surface']['_display']['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($m['env']['canvas']['surface']['_display']['vpanel']);
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $attr227,$or4,$bool63,$bool65,$bool64,$or3,$attr226,$bool67,$bool66,$attr225,$attr229,$attr230,$attr228;
			if ((($bool65=!(($bool64=((($bool63=$or3=width) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63['__nonzero__']=='function'?
						$bool63['__nonzero__']() :
						(typeof $bool63['__len__']=='function'?
							($bool63['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:height)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64['__nonzero__']=='function'?
						$bool64['__nonzero__']() :
						(typeof $bool64['__len__']=='function'?
							($bool64['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65['__nonzero__']=='function'?
							$bool65['__nonzero__']() :
							(typeof $bool65['__len__']=='function'?
								($bool65['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([($m['env']['canvas']['surface']['width'])-(5), 20]), 2, null);
				self['width'] = $tupleassign8[0];
				self['height'] = $tupleassign8[1];
			}
			else {
				if ((($bool66=width) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66['__nonzero__']=='function'?
								$bool66['__nonzero__']() :
								(typeof $bool66['__len__']=='function'?
									($bool66['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['width'] = $p['float_int'](width);
				}
				if ((($bool67=height) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67['__nonzero__']=='function'?
								$bool67['__nonzero__']() :
								(typeof $bool67['__len__']=='function'?
									($bool67['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];
			var $bool69,$bool68;
			if ((($bool68=visible) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68['__nonzero__']=='function'?
							$bool68['__nonzero__']() :
							(typeof $bool68['__len__']=='function'?
								($bool68['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!(($bool69=self['getVisible']()) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69['__nonzero__']=='function'?
							$bool69['__nonzero__']() :
							(typeof $bool69['__len__']=='function'?
								($bool69['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
	})();
	$m['Textarea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $attr234,$attr235,$attr236,$attr237,$attr231,$attr232,$attr233,$bool72,$attr238,$attr239,$bool70,$bool71,$49,$pyjs_try_err,$50,$51,$52,$attr240;
			$m['TextArea']['__init__'](self);
			if ((($bool71=!(($bool70=size) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70['__nonzero__']=='function'?
						$bool70['__nonzero__']() :
						(typeof $bool70['__len__']=='function'?
							($bool70['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71['__nonzero__']=='function'?
							$bool71['__nonzero__']() :
							(typeof $bool71['__len__']=='function'?
								($bool71['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([($m['env']['canvas']['surface']['width'])-(5), ($p['float_int'](($m['env']['canvas']['surface']['height'])/(5)))-(5)]), 2, null);
				self['width'] = $tupleassign9[0];
				self['height'] = $tupleassign9[1];
			}
			else {
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['float_int']((typeof ($49=size)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](0))), $p['float_int']((typeof ($51=size)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=1]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](1)))]), 2, null);
				self['width'] = $tupleassign10[0];
				self['height'] = $tupleassign10[1];
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			self['setStyleAttribute']($p['dict']([['resize', 'vertical']]));
			self['setVisible'](false);
			if ((($bool72=panel) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72['__nonzero__']=='function'?
							$bool72['__nonzero__']() :
							(typeof $bool72['__len__']=='function'?
								($bool72['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$m['env']['canvas']['surface']['_display']['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($m['env']['canvas']['surface']['_display']['vpanel']);
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $or5,$attr241,$attr243,$or6,$attr245,$attr244,$attr247,$attr246,$bool76,$bool77,$bool75,$bool73,$attr242,$attr248,$bool74;
			if ((($bool75=!(($bool74=((($bool73=$or5=width) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73['__nonzero__']=='function'?
						$bool73['__nonzero__']() :
						(typeof $bool73['__len__']=='function'?
							($bool73['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:height)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
				false :
				(typeof $bool74=='object'?
					(typeof $bool74['__nonzero__']=='function'?
						$bool74['__nonzero__']() :
						(typeof $bool74['__len__']=='function'?
							($bool74['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75['__nonzero__']=='function'?
							$bool75['__nonzero__']() :
							(typeof $bool75['__len__']=='function'?
								($bool75['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([($m['env']['canvas']['surface']['width'])-(5), ($p['float_int'](($m['env']['canvas']['surface']['height'])/(5)))-(5)]), 2, null);
				self['width'] = $tupleassign11[0];
				self['height'] = $tupleassign11[1];
			}
			else {
				if ((($bool76=width) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
						false :
						(typeof $bool76=='object'?
							(typeof $bool76['__nonzero__']=='function'?
								$bool76['__nonzero__']() :
								(typeof $bool76['__len__']=='function'?
									($bool76['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['width'] = $p['float_int'](width);
				}
				if ((($bool77=height) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
						false :
						(typeof $bool77=='object'?
							(typeof $bool77['__nonzero__']=='function'?
								$bool77['__nonzero__']() :
								(typeof $bool77['__len__']=='function'?
									($bool77['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];
			var $bool78,$bool79;
			if ((($bool78=visible) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78['__nonzero__']=='function'?
							$bool78['__nonzero__']() :
							(typeof $bool78['__len__']=='function'?
								($bool78['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!(($bool79=self['getVisible']()) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
					false :
					(typeof $bool79=='object'?
						(typeof $bool79['__nonzero__']=='function'?
							$bool79['__nonzero__']() :
							(typeof $bool79['__len__']=='function'?
								($bool79['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextArea']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['base64', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.env', 'pyjsdl.event', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.pyjsobj.Window', 'pyjsdl.pyjsobj.RootPanel', 'pyjsdl.pyjsobj.FocusPanel', 'pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl.pyjsobj.loadImages', 'pyjsdl.pyjsobj.TextBox', 'pyjsdl.pyjsobj.TextArea', 'pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl.pyjsobj.Event', 'pyjsdl.pyjsobj.requestAnimationFrameInit']
*/

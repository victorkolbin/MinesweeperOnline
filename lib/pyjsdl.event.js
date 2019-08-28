/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];


	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Event'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,$attr54,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr39,$attr48,$attr49,$attr38,$attr45,$attr65,$attr60,$attr61,$attr62,$attr63,$attr9,$attr8,$attr42,$attr58,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr33,$attr32,$attr31,$attr30,$attr19,$attr18,$attr35,$attr34,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$attr59,$attr46,$attr43,$attr47,$attr51,$attr50,$attr53,$attr52,$attr55,$attr44,$attr57,$attr56,$attr64,$bool1,$attr37,$attr66,$attr36;
			self['eventQueue'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](256);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$collcomp1['append'](null);
			}

	return $collcomp1;}();
			self['eventNum'] = 0;
			self['eventQueueTmp'] = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
			$iter2_iter = $p['range'](256);
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				$collcomp2['append'](null);
			}

	return $collcomp2;}();
			self['eventNumTmp'] = 0;
			self['queueLock'] = false;
			self['queueAccess'] = false;
			self['queue'] = $p['list']([]);
			self['queueNil'] = $p['list']([]);
			self['queueTmp'] = $p['list']([]);
			self['mousePress'] = $p['dict']([[0, false], [1, false], [2, false]]);
			self['mouseMove'] = $p['dict']([['x', -(1)], ['y', -(1)]]);
			self['mouseMoveRel'] = $p['dict']([['x', null], ['y', null]]);
			self['keyPress'] = $p['dict']([[$m['Const']['K_ALT'], false], [$m['Const']['K_CTRL'], false], [$m['Const']['K_SHIFT'], false]]);
			self['keyMod'] = $p['dict']([[$m['Const']['K_ALT'], $p['dict']([[true, $m['Const']['KMOD_ALT']], [false, 0]])], [$m['Const']['K_CTRL'], $p['dict']([[true, $m['Const']['KMOD_CTRL']], [false, 0]])], [$m['Const']['K_SHIFT'], $p['dict']([[true, $m['Const']['KMOD_SHIFT']], [false, 0]])]]);
			self['eventName'] = $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
			self['eventType'] = $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']);
			self['events'] = $p['set'](self['eventType']);
			self['eventTypes'] = $p['dict']([[$m['Const']['MOUSEMOTION'], $p['list'](['mousemove'])], [$m['Const']['MOUSEBUTTONDOWN'], $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$m['Const']['MOUSEBUTTONUP'], $p['list'](['mouseup'])], [$m['Const']['KEYDOWN'], $p['list'](['keydown', 'keypress'])], [$m['Const']['KEYUP'], $p['list'](['keyup'])]]);
			if ((($bool1=$m['env']['pyjs_mode']['optimized']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['modKey'] = $p['set']($p['list']([$m['Const']['K_ALT'], $m['Const']['K_CTRL'], $m['Const']['K_SHIFT']]));
				self['specialKey'] = $p['set']($p['list']([$m['Const']['K_UP'], $m['Const']['K_DOWN'], $m['Const']['K_LEFT'], $m['Const']['K_RIGHT'], $m['Const']['K_HOME'], $m['Const']['K_END'], $m['Const']['K_PAGEDOWN'], $m['Const']['K_PAGEUP'], $m['Const']['K_BACKSPACE'], $m['Const']['K_DELETE'], $m['Const']['K_INSERT'], $m['Const']['K_RETURN'], $m['Const']['K_TAB'], $m['Const']['K_ESCAPE']]));
			}
			else {
				self['modKey'] = $p['set'](function(){
					var $iter3_idx,$attr68,$attr69,$iter3_nextval,$iter3_type,$collcomp3,$attr72,$attr71,$attr70,$attr67,$iter3_iter,$iter3_array,keycode;
	$collcomp3 = $p['list']();
				$iter3_iter = $p['tuple']([$m['Const']['K_ALT'], $m['Const']['K_CTRL'], $m['Const']['K_SHIFT']]);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					keycode = $iter3_nextval;
					$collcomp3['append'](keycode['valueOf']());
				}

	return $collcomp3;}());
				self['specialKey'] = $p['set'](function(){
					var $attr93,$collcomp4,$iter4_type,$iter4_iter,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,$attr100,$attr99,$attr92,keycode,$attr95,$attr94,$attr97,$attr96,$attr91,$attr90,$attr79,$attr78,$attr77,$iter4_nextval,$attr75,$attr74,$attr73,$attr98,$iter4_idx,$attr76,$iter4_array;
	$collcomp4 = $p['list']();
				$iter4_iter = $p['tuple']([$m['Const']['K_UP'], $m['Const']['K_DOWN'], $m['Const']['K_LEFT'], $m['Const']['K_RIGHT'], $m['Const']['K_HOME'], $m['Const']['K_END'], $m['Const']['K_PAGEDOWN'], $m['Const']['K_PAGEUP'], $m['Const']['K_BACKSPACE'], $m['Const']['K_DELETE'], $m['Const']['K_INSERT'], $m['Const']['K_RETURN'], $m['Const']['K_TAB'], $m['Const']['K_ESCAPE']]);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					keycode = $iter4_nextval;
					$collcomp4['append'](keycode['valueOf']());
				}

	return $collcomp4;}());
			}
			self['touchlistener'] = null;
			self['Event'] = (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_lock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_lock'] = $method;
		$method = $pyjs__bind_method2('_unlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_unlock'] = $method;
		$method = $pyjs__bind_method2('_updateQueue', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr106,$attr107,$bool5,$bool2,$bool3,$attr104,$attr105,$attr102,$attr103,$bool4,$attr101,$attr108;
			if ((($bool2=!self['events']['__contains__'](event['type'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return null;
			}
			self['queueAccess'] = true;
			if ((($bool4=!(($bool3=self['queueLock']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=self['eventNumTmp']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['_appendMerge']();
				}
				self['_append'](event);
			}
			else {
				self['_appendTmp'](event);
			}
			self['queueAccess'] = false;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_updateQueue'] = $method;
		$method = $pyjs__bind_method2('_append', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $cmp1,$cmp2,$attr111,$attr110,$attr112,$attr114,$bool6,$attr113,$attr109;
			if ((($bool6=((($cmp1=self['eventNum'])===($cmp2=255)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['eventQueue']['__setitem__'](self['eventNum'], event);
				self['eventNum'] += 1;
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_append'] = $method;
		$method = $pyjs__bind_method2('_appendTmp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr119,$cmp4,$cmp3,$attr118,$attr115,$attr117,$attr116,$attr120,$bool7;
			if ((($bool7=((($cmp3=self['eventNumTmp'])===($cmp4=255)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self['eventQueueTmp']['__setitem__'](self['eventNumTmp'], event);
				self['eventNumTmp'] += 1;
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_appendTmp'] = $method;
		$method = $pyjs__bind_method2('_appendMerge', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,i,$iter5_idx,$attr123,$attr121,$attr122,$iter5_iter,$attr124,$attr125,$attr126,$iter5_array,$iter5_type,$2,$1;
			$iter5_iter = $p['range'](self['eventNumTmp']);
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				self['_append']((typeof ($1=self['eventQueueTmp'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i)));
				self['eventQueueTmp']['__setitem__'](i, null);
			}
			self['eventNumTmp'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_appendMerge'] = $method;
		$method = $pyjs__bind_method2('pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$cmp6,$attr127,$attr128,$bool8;
			if ((($bool8=((($cmp5=self['eventNum'])===($cmp6=250)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self['_lock']();
				self['_pump']();
				self['_unlock']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pump'] = $method;
		$method = $pyjs__bind_method2('_pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr133,i,$iter6_idx,$iter6_type,$4,$iter6_array,queue,$attr132,$attr131,$attr130,$attr136,$attr135,$attr134,$attr129,$iter6_iter,$3,$iter6_nextval;
			queue = $p['__getslice'](self['eventQueue'], 50, self['eventNum']);
			self['eventNum'] -= 50;
			$iter6_iter = $p['range'](self['eventNum']);
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				self['eventQueue']['__setitem__'](i, (typeof ($3=queue)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](i)));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_pump'] = $method;
		$method = $pyjs__bind_method2('get', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$bool18,$attr167,$bool10,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$attr173,$cmp8,$attr140,$cmp7,$attr168,$attr169,$attr164,$attr165,$attr149,$attr160,$attr161,$attr162,$attr163,$attr172,$bool11,$iter11_idx,$15,$14,$attr166,$attr174,$iter11_iter,$iter12_array,$16,$9,$12,$iter11_array,$10,$iter11_nextval,$bool9,$11,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,i,$iter12_type,$iter11_type,$attr159,$attr158,$attr171,$attr170,$iter12_iter,$13,$attr137,$len1,$attr139,$attr138,$iter12_idx,$iter12_nextval;
			if ((($bool10=!(($bool9=self['eventNum']) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return self['queueNil'];
			}
			self['_lock']();
			if ((($bool12=!(($bool11=eventType) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11['__nonzero__']=='function'?
						$bool11['__nonzero__']() :
						(typeof $bool11['__len__']=='function'?
							($bool11['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12['__nonzero__']=='function'?
							$bool12['__nonzero__']() :
							(typeof $bool12['__len__']=='function'?
								($bool12['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['queue'] = function(){
					var $attr142,$attr143,$attr141,$attr144,$iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,event;
	$collcomp5 = $p['list']();
				$iter7_iter = $p['__getslice'](self['eventQueue'], 0, self['eventNum']);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					event = $iter7_nextval;
					$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
				}

	return $collcomp5;}();
				self['eventNum'] = 0;
			}
			else {
				if ((($bool14=!(($bool13=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					evtType = function(){
						var $iter8_idx,$attr145,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$attr146,$6,et,$5;
	$collcomp6 = $p['list']();
					$iter8_iter = (typeof ($5=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $5['__array'][$6=eventType]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](eventType));
					if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter['__iter__']();
						$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						et = $iter8_nextval;
						$collcomp6['append'](et);
					}

	return $collcomp6;}();
				}
				else {
					evtType = function(){
						var $iter10_nextval,$attr147,$iter9_iter,$collcomp7,$iter10_idx,$attr148,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,t,$8,$7,$iter10_type,et,$iter10_iter,$iter9_array;
	$collcomp7 = $p['list']();
					$iter9_iter = eventType;
					if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter['__iter__']();
						$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						t = $iter9_nextval;
						$iter10_iter = (typeof ($7=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $7['__array'][$8=t]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__'](t));
						if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
							$iter10_type = 0;
						} else {
							$iter10_iter = $iter10_iter['__iter__']();
							$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter10_idx = 0;
						while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
							et = $iter10_nextval;
							$collcomp7['append'](et);
						}
					}

	return $collcomp7;}();
				}
				self['queue'] = $p['list']([]);
				$iter11_iter = $p['range'](self['eventNum']);
				if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter['__iter__']();
					$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					if ((($bool15=!evtType['__contains__']((typeof ($9=self['eventQueue'])['__array'] != 'undefined'?
						((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](i))['type'])) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						self['queueTmp']['append']((typeof ($11=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](i)));
					}
					else {
						self['queue']['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)((typeof ($13=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](i))));
					}
				}
				if ((($bool17=!(($bool16=self['queueTmp']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					self['eventNum'] = 0;
				}
				else {
					self['eventNum'] = (($len1=self['queueTmp']) === null?0:
						(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'?$len1['length']:
									$p['len']($len1)))));
					$iter12_iter = $p['range'](self['eventNum']);
					if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter['__iter__']();
						$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						i = $iter12_nextval;
						self['eventQueue']['__setitem__'](i, (typeof ($15=self['queueTmp'])['__array'] != 'undefined'?
							((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__'](i)));
					}
					$p['__setslice'](self['queueTmp'], 0, null, $p['list']([]));
				}
				if ((($bool18=((($cmp7=self['eventNum'])===($cmp8=250)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18['__nonzero__']=='function'?
								$bool18['__nonzero__']() :
								(typeof $bool18['__len__']=='function'?
									($bool18['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_pump']();
				}
			}
			self['_unlock']();
			return self['queue'];
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('poll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$attr179,$attr178,$attr177,$attr176,$cmp9,$attr180,$cmp10,evt,$attr175,$bool20;
			self['_lock']();
			if ((($bool19=self['eventNum']) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop'](0));
				self['eventNum'] -= 1;
				self['eventQueue']['append'](null);
				if ((($bool20=((($cmp9=self['eventNum'])===($cmp10=250)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					self['_pump']();
				}
			}
			else {
				evt = self['Event']($m['Const']['NOEVENT']);
			}
			self['_unlock']();
			return evt;
		}
	, 1, [null,null,['self']]);
		$cls_definition['poll'] = $method;
		$method = $pyjs__bind_method2('wait', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp12,$attr182,$attr183,$attr181,$bool21,$bool23,$bool22,$cmp11,evt,$attr184;
			while ((($bool21=true) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				if ((($bool22=self['eventNum']) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					self['_lock']();
					evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop'](0));
					self['eventNum'] -= 1;
					self['eventQueue']['append'](null);
					if ((($bool23=((($cmp11=self['eventNum'])===($cmp12=250)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
						self['_pump']();
					}
					self['_unlock']();
					return evt;
				}
				else {
					self['_unlock']();
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('peek', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$attr197,$iter17_type,et,$iter17_iter,$bool25,$bool24,$bool27,$bool26,$attr198,$bool29,$bool28,$iter17_nextval,$attr186,$attr185,$iter17_array,$cmp13,$cmp14,$bool30,$iter17_idx,evt;
			if ((($bool25=!(($bool24=self['eventNum']) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return false;
			}
			else if ((($bool26=(eventType === null)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				return true;
			}
			if ((($bool28=!(($bool27=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27['__nonzero__']=='function'?
						$bool27['__nonzero__']() :
						(typeof $bool27['__len__']=='function'?
							($bool27['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				evtType = function(){
					var $17,$iter13_nextval,$attr188,$iter13_iter,$attr187,$collcomp8,$18,$iter13_type,$iter13_idx,et,$iter13_array;
	$collcomp8 = $p['list']();
				$iter13_iter = (typeof ($17=self['eventTypes'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18=eventType]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](eventType));
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					et = $iter13_nextval;
					$collcomp8['append'](et);
				}

	return $collcomp8;}();
			}
			else {
				evtType = function(){
					var $attr190,$iter14_array,$iter14_type,$iter15_iter,$collcomp9,$attr189,et,$20,$iter15_array,$19,$iter15_idx,t,$iter14_iter,$iter15_type,$iter15_nextval,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
				$iter14_iter = eventType;
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					t = $iter14_nextval;
					$iter15_iter = (typeof ($19=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $19['__array'][$20=t]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](t));
					if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
						$iter15_type = 0;
					} else {
						$iter15_iter = $iter15_iter['__iter__']();
						$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter15_idx = 0;
					while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
						et = $iter15_nextval;
						$collcomp9['append'](et);
					}
				}

	return $collcomp9;}();
			}
			self['_lock']();
			evt = function(){
				var $iter16_array,$attr191,$attr193,$attr192,$attr195,$attr194,$iter16_type,$attr196,$iter16_idx,$collcomp10,$iter16_nextval,$iter16_iter,event;
	$collcomp10 = $p['list']();
			$iter16_iter = $p['__getslice'](self['eventQueue'], 0, self['eventNum']);
			if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter['__iter__']();
				$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				event = $iter16_nextval;
				$collcomp10['append'](event['type']);
			}

	return $collcomp10;}();
			if ((($bool29=((($cmp13=self['eventNum'])===($cmp14=250)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29['__nonzero__']=='function'?
							$bool29['__nonzero__']() :
							(typeof $bool29['__len__']=='function'?
								($bool29['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_pump']();
			}
			self['_unlock']();
			$iter17_iter = evtType;
			if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter['__iter__']();
				$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				et = $iter17_nextval;
				if ((($bool30=evt['__contains__'](et)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['peek'] = $method;
		$method = $pyjs__bind_method2('clear', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$iter22_array,$attr199,$attr225,$iter22_type,$attr222,$29,$bool32,$attr220,$25,$27,$26,$attr219,$attr209,$attr208,$attr205,$len2,$attr207,$attr206,$attr200,$iter22_iter,$attr226,$iter21_idx,$attr224,$attr223,$bool34,$attr221,$28,$iter21_nextval,$iter22_nextval,$cmp15,$iter21_iter,$cmp16,$bool38,$bool39,i,$iter22_idx,$30,$iter21_type,$bool33,$attr218,$bool31,$bool36,$bool37,$iter21_array,$bool35,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215;
			if ((($bool32=!(($bool31=self['eventNum']) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				return null;
			}
			self['_lock']();
			if ((($bool33=(eventType === null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				self['eventNum'] = 0;
			}
			else {
				if ((($bool35=!(($bool34=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					evtType = function(){
						var $iter18_type,$iter18_iter,$iter18_array,$21,$22,$iter18_idx,$collcomp11,et,$iter18_nextval,$attr201,$attr202;
	$collcomp11 = $p['list']();
					$iter18_iter = (typeof ($21=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $21['__array'][$22=eventType]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](eventType));
					if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
						$iter18_type = 0;
					} else {
						$iter18_iter = $iter18_iter['__iter__']();
						$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter18_idx = 0;
					while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
						et = $iter18_nextval;
						$collcomp11['append'](et);
					}

	return $collcomp11;}();
				}
				else {
					evtType = function(){
						var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$23,$24,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$collcomp12,$iter20_type,$attr204,et,$iter20_array,$attr203,t;
	$collcomp12 = $p['list']();
					$iter19_iter = eventType;
					if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter['__iter__']();
						$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						t = $iter19_nextval;
						$iter20_iter = (typeof ($23=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $23['__array'][$24=t]) != 'undefined'?$23['__array'][$24]:
								$23['__getitem__']($24)):
								$23['__getitem__'](t));
						if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
							$iter20_type = 0;
						} else {
							$iter20_iter = $iter20_iter['__iter__']();
							$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter20_idx = 0;
						while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
							et = $iter20_nextval;
							$collcomp12['append'](et);
						}
					}

	return $collcomp12;}();
				}
				$iter21_iter = $p['range'](self['eventNum']);
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					i = $iter21_nextval;
					if ((($bool36=!evtType['__contains__']((typeof ($25=self['eventQueue'])['__array'] != 'undefined'?
						((typeof $25['__array'][$26=i]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__'](i))['type'])) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						self['queueTmp']['append']((typeof ($27=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $27['__array'][$28=i]) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__'](i)));
					}
				}
				if ((($bool38=!(($bool37=self['queueTmp']) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					self['eventNum'] = 0;
				}
				else {
					self['eventNum'] = (($len2=self['queueTmp']) === null?0:
						(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'?$len2['length']:
									$p['len']($len2)))));
					$iter22_iter = $p['range'](self['eventNum']);
					if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
						$iter22_type = 0;
					} else {
						$iter22_iter = $iter22_iter['__iter__']();
						$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter22_idx = 0;
					while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
						i = $iter22_nextval;
						self['eventQueue']['__setitem__'](i, (typeof ($29=self['queueTmp'])['__array'] != 'undefined'?
							((typeof $29['__array'][$30=i]) != 'undefined'?$29['__array'][$30]:
								$29['__getitem__']($30)):
								$29['__getitem__'](i)));
					}
					$p['__setslice'](self['queueTmp'], 0, null, $p['list']([]));
				}
				if ((($bool39=((($cmp15=self['eventNum'])===($cmp16=250)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_pump']();
				}
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('event_name', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var $attr227,evtType,$attr230,$attr231,$attr232,$bool40,$36,$35,$32,$33,$attr229,$31,$attr228,$34;
			evtType = (typeof ($33=(typeof ($31=self['eventTypes'])['__array'] != 'undefined'?
				((typeof $31['__array'][$32=eventType]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](eventType)))['__array'] != 'undefined'?
				((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](0));
			if ((($bool40=self['eventName']['__contains__'](evtType)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				return (typeof ($35=self['eventName'])['__array'] != 'undefined'?
					((typeof $35['__array'][$36=evtType]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](evtType));
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['event_name'] = $method;
		$method = $pyjs__bind_method2('set_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$iter27_nextval,$attr237,$bool43,$bool42,$bool41,$iter26_idx,$iter26_nextval,$attr238,$iter27_array,$iter26_type,$bool44,$iter27_iter,$iter27_idx,et,$iter26_array,$iter26_iter,event,$iter27_type;
			if ((($bool41=(eventType !== null)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41['__nonzero__']=='function'?
							$bool41['__nonzero__']() :
							(typeof $bool41['__len__']=='function'?
								($bool41['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool43=!(($bool42=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					evtType = function(){
						var $attr234,$iter23_type,$iter23_nextval,$38,$attr233,$iter23_iter,$37,$iter23_idx,$iter23_array,et,$collcomp13;
	$collcomp13 = $p['list']();
					$iter23_iter = (typeof ($37=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=eventType]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](eventType));
					if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
						$iter23_type = 0;
					} else {
						$iter23_iter = $iter23_iter['__iter__']();
						$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter23_idx = 0;
					while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
						et = $iter23_nextval;
						$collcomp13['append'](et);
					}

	return $collcomp13;}();
				}
				else {
					evtType = function(){
						var $attr235,$attr236,$collcomp14,$iter24_idx,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,t,$iter25_idx,$39,et,$40,$iter25_type,$iter24_iter,$iter24_nextval;
	$collcomp14 = $p['list']();
					$iter24_iter = eventType;
					if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
						$iter24_type = 0;
					} else {
						$iter24_iter = $iter24_iter['__iter__']();
						$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter24_idx = 0;
					while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
						t = $iter24_nextval;
						$iter25_iter = (typeof ($39=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $39['__array'][$40=t]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](t));
						if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
							$iter25_type = 0;
						} else {
							$iter25_iter = $iter25_iter['__iter__']();
							$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter25_idx = 0;
						while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
							et = $iter25_nextval;
							$collcomp14['append'](et);
						}
					}

	return $collcomp14;}();
				}
				$iter26_iter = evtType;
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					et = $iter26_nextval;
					if ((($bool44=self['events']['__contains__'](et)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
						self['events']['remove'](et);
					}
				}
			}
			else {
				$iter27_iter = self['eventType'];
				if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter['__iter__']();
					$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					event = $iter27_nextval;
					self['events']['add'](event);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_blocked'] = $method;
		$method = $pyjs__bind_method2('set_allowed', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var $bool47,evtType,$bool45,$iter31_array,$bool46,$iter31_nextval,$iter31_idx,$iter31_type,et,$iter31_iter;
			if ((($bool45=(eventType !== null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				if ((($bool47=!(($bool46=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					evtType = function(){
						var $attr240,$iter28_array,$iter28_nextval,$iter28_idx,$attr239,$collcomp15,$42,et,$iter28_iter,$41,$iter28_type;
	$collcomp15 = $p['list']();
					$iter28_iter = (typeof ($41=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $41['__array'][$42=eventType]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](eventType));
					if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
						$iter28_type = 0;
					} else {
						$iter28_iter = $iter28_iter['__iter__']();
						$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter28_idx = 0;
					while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
						et = $iter28_nextval;
						$collcomp15['append'](et);
					}

	return $collcomp15;}();
				}
				else {
					evtType = function(){
						var $attr241,$iter30_type,$attr242,$iter30_nextval,$iter29_type,$iter29_iter,$collcomp16,$iter29_nextval,$iter30_array,t,et,$43,$iter30_idx,$iter29_idx,$iter30_iter,$iter29_array,$44;
	$collcomp16 = $p['list']();
					$iter29_iter = eventType;
					if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
						$iter29_type = 0;
					} else {
						$iter29_iter = $iter29_iter['__iter__']();
						$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter29_idx = 0;
					while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
						t = $iter29_nextval;
						$iter30_iter = (typeof ($43=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $43['__array'][$44=t]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](t));
						if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
							$iter30_type = 0;
						} else {
							$iter30_iter = $iter30_iter['__iter__']();
							$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter30_idx = 0;
						while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
							et = $iter30_nextval;
							$collcomp16['append'](et);
						}
					}

	return $collcomp16;}();
				}
				$iter31_iter = evtType;
				if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
					$iter31_type = 0;
				} else {
					$iter31_iter = $iter31_iter['__iter__']();
					$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter31_idx = 0;
				while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
					et = $iter31_nextval;
					self['events']['add'](et);
				}
			}
			else {
				self['events']['clear']();
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_allowed'] = $method;
		$method = $pyjs__bind_method2('get_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$attr245,$attr246,$bool48,$48,$47;
			evtType = (typeof ($47=function(){
				var $iter32_type,$iter32_idx,$attr244,$iter32_nextval,$attr243,$collcomp17,$iter32_iter,$iter32_array,et,$46,$45;
	$collcomp17 = $p['list']();
			$iter32_iter = (typeof ($45=self['eventTypes'])['__array'] != 'undefined'?
				((typeof $45['__array'][$46=eventType]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](eventType));
			if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
				$iter32_type = 0;
			} else {
				$iter32_iter = $iter32_iter['__iter__']();
				$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter32_idx = 0;
			while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
				et = $iter32_nextval;
				$collcomp17['append'](et);
			}

	return $collcomp17;}())['__array'] != 'undefined'?
				((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](0));
			if ((($bool48=!self['events']['__contains__'](evtType)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['get_blocked'] = $method;
		$method = $pyjs__bind_method2('post', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr247,$attr249,$attr248,$attr255,$attr252,$attr253,$attr250,$attr251,$attr256,$bool49,$attr254;
			self['_lock']();
			self['_append'](event);
			if ((($bool49=!self['events']['__contains__'](event['type'])) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['eventTypes']['__setitem__'](event['type'], $p['list']([event['type']]));
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['post'] = $method;
		$method = $pyjs__bind_method2('_initiate_touch_listener', function(canvas) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvas = arguments[1];
			}

			self['touchlistener'] = (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas);
			return null;
		}
	, 1, [null,null,['self'],['canvas']]);
		$cls_definition['_initiate_touch_listener'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['set_grab'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_grab'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Event', $p['tuple']($bases), $data);
	})();
	$m['UserEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'attr']);
		$method = $pyjs__bind_method2('__init__', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				eventType = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof eventType != 'undefined') {
					if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = eventType;
						eventType = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $bool50,attr,$49,$50;
			if ((($bool50=args) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				attr = (typeof ($49=args)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](0));
			}
			else {
				attr = kwargs;
			}
			$p['object']['__setattr__'](self, 'type', eventType);
			$p['object']['__setattr__'](self, 'attr', attr);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr258,$attr259,$attr257,$attr260,$attr262,$attr261;
			return $p['sprintf']('%s(%s-UserEvent %r)', $p['tuple']([self['__class__'], self['type'], self['attr']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $bool51,$attr263,$attr266,$attr265,$attr264,$51,$52;
			if ((($bool51=self['attr']['__contains__'](attr)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				return (typeof ($51=self['attr'])['__array'] != 'undefined'?
					((typeof $51['__array'][$52=attr]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](attr));
			}
			else {
				throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				value = arguments[2];
			}

			throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
			return null;
		}
	, 1, [null,null,['self'],['attr'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
	})();
	$m['JEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['_mouse_pos'] = $p['tuple']([0, 0]);
		$cls_definition['_types'] = $p['dict']([['mousemove', $m['Const']['MOUSEMOTION']], ['mousedown', $m['Const']['MOUSEBUTTONDOWN']], ['mouseup', $m['Const']['MOUSEBUTTONUP']], ['wheel', $m['Const']['MOUSEBUTTONDOWN']], ['mousewheel', $m['Const']['MOUSEBUTTONDOWN']], ['DOMMouseScroll', $m['Const']['MOUSEBUTTONDOWN']], ['keydown', $m['Const']['KEYDOWN']], ['keypress', $m['Const']['KEYDOWN']], ['keyup', $m['Const']['KEYUP']]]);
		$cls_definition['_charCode'] = $p['dict']([[33, $m['Const']['K_EXCLAIM']], [34, $m['Const']['K_QUOTEDBL']], [35, $m['Const']['K_HASH']], [36, $m['Const']['K_DOLLAR']], [38, $m['Const']['K_AMPERSAND']], [39, $m['Const']['K_QUOTE']], [40, $m['Const']['K_LEFTPAREN']], [41, $m['Const']['K_RIGHTPAREN']], [42, $m['Const']['K_ASTERISK']], [43, $m['Const']['K_PLUS']], [44, $m['Const']['K_COMMA']], [45, $m['Const']['K_MINUS']], [46, $m['Const']['K_PERIOD']], [97, $m['Const']['K_a']], [98, $m['Const']['K_b']], [99, $m['Const']['K_c']], [100, $m['Const']['K_d']], [101, $m['Const']['K_e']], [102, $m['Const']['K_f']], [103, $m['Const']['K_g']], [104, $m['Const']['K_h']], [105, $m['Const']['K_i']], [106, $m['Const']['K_j']], [107, $m['Const']['K_k']], [108, $m['Const']['K_l']], [109, $m['Const']['K_m']], [110, $m['Const']['K_n']], [111, $m['Const']['K_o']], [112, $m['Const']['K_p']], [113, $m['Const']['K_q']], [114, $m['Const']['K_r']], [115, $m['Const']['K_s']], [116, $m['Const']['K_t']], [117, $m['Const']['K_u']], [118, $m['Const']['K_v']], [119, $m['Const']['K_w']], [120, $m['Const']['K_x']], [121, $m['Const']['K_y']], [122, $m['Const']['K_z']]]);
		$method = $pyjs__bind_method2('__init__', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr418,code,$bool55,$iter33_type,$attr447,$attr446,$attr445,$attr444,$attr443,$attr442,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr363,$attr448,$58,$59,$53,$54,$55,$56,$57,$attr371,$attr370,$attr373,$attr372,$attr375,$attr374,$attr377,$attr376,$attr379,$attr378,$attr429,$69,$68,$eq3,$65,$64,$67,$66,$61,$60,$63,$62,$iter33_nextval,$86,$85,$84,$83,$82,$81,$80,$72,$73,$70,$71,$76,$77,$74,$75,$78,$79,$bool54,$attr419,$bool56,$bool57,$bool52,$bool53,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr380,$attr381,$attr382,$attr383,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$iter33_array,attr,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$iter33_iter,$attr438,$attr439,$attr436,$attr437,$attr434,$attr435,$attr432,$attr433,$attr430,$attr431,$attr441,$attr440,$iter33_idx,$attr421,$attr420,$attr423,$attr422,$attr425,$attr424,$attr427,$attr426,$eq2,$attr428,$eq1,$eq4,$bool58;
			self['event'] = event;
			if ((($bool52=$p['tuple'](['mousedown', 'mouseup'])['__contains__'](event['type'])) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				self['type'] = (typeof ($53=self['__class__']['_types'])['__array'] != 'undefined'?
					((typeof $53['__array'][$54=event['type']]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](event['type']));
				self['button'] = (event['button'])+(1);
				self['pos'] = $p['tuple']([((typeof ($55=event['pos'])['__array'] != 'undefined'?
					((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](0)))+($m['env']['frame']['scrollLeft']), ((typeof ($57=event['pos'])['__array'] != 'undefined'?
					((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](1)))+($m['env']['frame']['scrollTop'])]);
			}
			else if ((($bool53=(($eq1=event['type'])===($eq2='mousemove')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				self['type'] = (typeof ($59=self['__class__']['_types'])['__array'] != 'undefined'?
					((typeof $59['__array'][$60=event['type']]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](event['type']));
				self['button'] = (event['button'])+(1);
				self['pos'] = $p['tuple']([((typeof ($61=event['pos'])['__array'] != 'undefined'?
					((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](0)))+($m['env']['frame']['scrollLeft']), ((typeof ($63=event['pos'])['__array'] != 'undefined'?
					((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](1)))+($m['env']['frame']['scrollTop'])]);
				self['rel'] = $p['tuple']([((typeof ($65=self['pos'])['__array'] != 'undefined'?
					((typeof $65['__array'][$66=0]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__'](0)))-((typeof ($67=self['__class__']['_mouse_pos'])['__array'] != 'undefined'?
					((typeof $67['__array'][$68=0]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__'](0))), ((typeof ($69=self['pos'])['__array'] != 'undefined'?
					((typeof $69['__array'][$70=1]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](1)))-((typeof ($71=self['__class__']['_mouse_pos'])['__array'] != 'undefined'?
					((typeof $71['__array'][$72=1]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__'](1)))]);
				self['__class__']['_mouse_pos'] = self['pos'];
			}
			else if ((($bool54=$p['tuple'](['wheel', 'mousewheel', 'DOMMouseScroll'])['__contains__'](event['type'])) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				self['type'] = (typeof ($73=self['__class__']['_types'])['__array'] != 'undefined'?
					((typeof $73['__array'][$74=event['type']]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__'](event['type']));
				self['button'] = event['btn'];
				self['pos'] = $p['tuple']([((typeof ($75=event['pos'])['__array'] != 'undefined'?
					((typeof $75['__array'][$76=0]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__'](0)))+($m['env']['frame']['scrollLeft']), ((typeof ($77=event['pos'])['__array'] != 'undefined'?
					((typeof $77['__array'][$78=1]) != 'undefined'?$77['__array'][$78]:
						$77['__getitem__']($78)):
						$77['__getitem__'](1)))+($m['env']['frame']['scrollTop'])]);
			}
			else if ((($bool55=$p['tuple'](['keydown', 'keyup'])['__contains__'](event['type'])) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55['__nonzero__']=='function'?
							$bool55['__nonzero__']() :
							(typeof $bool55['__len__']=='function'?
								($bool55['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['type'] = (typeof ($79=self['__class__']['_types'])['__array'] != 'undefined'?
					((typeof $79['__array'][$80=event['type']]) != 'undefined'?$79['__array'][$80]:
						$79['__getitem__']($80)):
						$79['__getitem__'](event['type']));
				self['key'] = event['keyCode'];
			}
			else if ((($bool56=(($eq3=event['type'])===($eq4='keypress')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
				self['type'] = (typeof ($81=self['__class__']['_types'])['__array'] != 'undefined'?
					((typeof $81['__array'][$82=event['type']]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](event['type']));
				if ((($bool57=event['keyCode']) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
					code = event['keyCode'];
				}
				else {
					code = event['which'];
				}
				if ((($bool58=self['__class__']['_charCode']['__contains__'](code)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58['__nonzero__']=='function'?
								$bool58['__nonzero__']() :
								(typeof $bool58['__len__']=='function'?
									($bool58['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['key'] = (typeof ($83=self['__class__']['_charCode'])['__array'] != 'undefined'?
						((typeof $83['__array'][$84=code]) != 'undefined'?$83['__array'][$84]:
							$83['__getitem__']($84)):
							$83['__getitem__'](code));
				}
				else {
					self['key'] = code;
				}
			}
			else {
				self['type'] = event['type'];
				$iter33_iter = event['attr'];
				if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter['__iter__']();
					$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					attr = $iter33_nextval;
					$p['object']['__setattr__'](self, attr, (typeof ($85=event['attr'])['__array'] != 'undefined'?
						((typeof $85['__array'][$86=attr]) != 'undefined'?$85['__array'][$86]:
							$85['__getitem__']($86)):
							$85['__getitem__'](attr)));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr450,$attr451,$attr452,$bool59,$attr449;
			if ((($bool59=$p['hasattr'](self['event'], 'toString')) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
				return $p['sprintf']('%s(%s)', $p['tuple']([self['__class__'], self['event']['toString']()]));
			}
			else {
				return self['event']['__repr__']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('getEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr454,$attr453;
			return self['event'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
	})();
	$m['TouchListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$method = $pyjs__bind_method2('__init__', function(canvas) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvas = arguments[1];
			}

			$m['_canvas'] = canvas;
			self['element'] = canvas['getElement']();
			self['element']['addEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
			self['active'] = false;
			self['callback'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['canvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('activate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['element']['removeEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
			self['element']['addEventListener']('touchstart', (typeof _touch_start == "undefined"?$m['_touch_start']:_touch_start));
			self['element']['addEventListener']('touchend', (typeof _touch_end == "undefined"?$m['_touch_end']:_touch_end));
			self['element']['addEventListener']('touchmove', (typeof _touch_move == "undefined"?$m['_touch_move']:_touch_move));
			self['element']['addEventListener']('touchcancel', (typeof _touch_cancel == "undefined"?$m['_touch_cancel']:_touch_cancel));
			self['active'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activate'] = $method;
		$method = $pyjs__bind_method2('add_callback', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}

			self['callback']['append'](callback);
			return null;
		}
	, 1, [null,null,['self'],['callback']]);
		$cls_definition['add_callback'] = $method;
		$method = $pyjs__bind_method2('is_active', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr455,$attr456;
			return self['active'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_active'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TouchListener', $p['tuple']($bases), $data);
	})();
	$m['_canvas'] = null;
	$m['_touch_detect'] = function(event) {

		$m['_canvas']['onTouchInitiate'](event);
		return null;
	};
	$m['_touch_detect']['__name__'] = '_touch_detect';

	$m['_touch_detect']['__bind_type__'] = 0;
	$m['_touch_detect']['__args__'] = [null,null,['event']];
	$m['_touch_start'] = function(event) {

		$m['_canvas']['onTouchStart'](event);
		return null;
	};
	$m['_touch_start']['__name__'] = '_touch_start';

	$m['_touch_start']['__bind_type__'] = 0;
	$m['_touch_start']['__args__'] = [null,null,['event']];
	$m['_touch_end'] = function(event) {

		$m['_canvas']['onTouchEnd'](event);
		return null;
	};
	$m['_touch_end']['__name__'] = '_touch_end';

	$m['_touch_end']['__bind_type__'] = 0;
	$m['_touch_end']['__args__'] = [null,null,['event']];
	$m['_touch_move'] = function(event) {

		$m['_canvas']['onTouchMove'](event);
		return null;
	};
	$m['_touch_move']['__name__'] = '_touch_move';

	$m['_touch_move']['__bind_type__'] = 0;
	$m['_touch_move']['__args__'] = [null,null,['event']];
	$m['_touch_cancel'] = function(event) {

		$m['_canvas']['onTouchCancel'](event);
		return null;
	};
	$m['_touch_cancel']['__name__'] = '_touch_cancel';

	$m['_touch_cancel']['__bind_type__'] = 0;
	$m['_touch_cancel']['__args__'] = [null,null,['event']];
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.locals']
*/

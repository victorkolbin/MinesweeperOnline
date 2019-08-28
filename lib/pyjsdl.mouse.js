/* start module: pyjsdl.mouse */
$pyjs['loaded_modules']['pyjsdl.mouse'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mouse']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mouse'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mouse'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mouse>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mouse';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mouse'] = $pyjs['loaded_modules']['pyjsdl.mouse'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
	$m['cursors'] = $p['___import___']('pyjsdl.cursors', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Mouse'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mouse';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,$attr5,$attr4,$attr6,$attr3;
			self['mousePress'] = $m['pyjsdl']['event']['mousePress'];
			self['mouseMove'] = $m['pyjsdl']['event']['mouseMove'];
			self['mouseMoveRel'] = $m['pyjsdl']['event']['mouseMoveRel'];
			self['_cursorVisible'] = true;
			self['_cursor'] = 'default';
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_pressed', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$5,$attr11,$attr7,$3,$6,$4,$attr12,$2,$attr10,$1;
			return $p['tuple']([(typeof ($1=self['mousePress'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)), (typeof ($3=self['mousePress'])['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)), (typeof ($5=self['mousePress'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6=2]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](2))]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_pressed'] = $method;
		$method = $pyjs__bind_method2('get_pos', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr14,$eq2,$eq1,$bool1,$attr19,$attr18,$8,$9,$attr15,$7,$attr17,$attr16,$attr13,$14,$15,$16,$10,$11,$12,$13;
			if ((($bool1=!(($eq1=(typeof ($7=self['mouseMove'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8='x']) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__']('x')))===($eq2=-(1))&&$eq1===null?true:
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
				return $p['tuple']([((typeof ($9=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10='x']) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']('x')))+($m['env']['frame']['scrollLeft']), ((typeof ($11=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $11['__array'][$12='y']) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']('y')))+($m['env']['frame']['scrollTop'])]);
			}
			else {
				return $p['tuple']([(typeof ($13=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14='x']) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']('x')), (typeof ($15=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $15['__array'][$16='y']) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']('y'))]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_pos'] = $method;
		$method = $pyjs__bind_method2('get_rel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $32,$attr41,$33,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr27,$attr28,$attr29,$attr48,$attr49,$29,$28,$21,$20,$22,$25,$24,$27,$26,$pyjs_try_err,rel,$eq3,$eq4,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,$bool2,$17,$attr51,$attr50,$34,$attr52,$18,$19,$30,$31,$23;
			try {
				rel = $p['tuple']([((typeof ($17=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18='x']) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']('x')))-((typeof ($19=self['mouseMoveRel'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20='x']) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']('x'))), ((typeof ($21=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $21['__array'][$22='y']) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']('y')))-((typeof ($23=self['mouseMoveRel'])['__array'] != 'undefined'?
					((typeof $23['__array'][$24='y']) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']('y')))]);
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(typeof ($25=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $25['__array'][$26='x']) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']('x')), (typeof ($27=self['mouseMove'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28='y']) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']('y'))]), 2, null);
				self['mouseMoveRel']['__setitem__']('x', $tupleassign1[0]);
				self['mouseMoveRel']['__setitem__']('y', $tupleassign1[1]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					rel = $p['tuple']([0, 0]);
					if ((($bool2=!(($eq3=(typeof ($29=self['mouseMove'])['__array'] != 'undefined'?
						((typeof $29['__array'][$30='x']) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__']('x')))===($eq4=-(1))&&$eq3===null?true:
						($eq3===null?false:($eq4===null?false:
							((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
								((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
									$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($31=self['mouseMove'])['__array'] != 'undefined'?
							((typeof $31['__array'][$32='x']) != 'undefined'?$31['__array'][$32]:
								$31['__getitem__']($32)):
								$31['__getitem__']('x')), (typeof ($33=self['mouseMove'])['__array'] != 'undefined'?
							((typeof $33['__array'][$34='y']) != 'undefined'?$33['__array'][$34]:
								$33['__getitem__']($34)):
								$33['__getitem__']('y'))]), 2, null);
						self['mouseMoveRel']['__setitem__']('x', $tupleassign2[0]);
						self['mouseMoveRel']['__setitem__']('y', $tupleassign2[1]);
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return rel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_rel'] = $method;
		$method = $pyjs__bind_method2('set_visible', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			var $bool3,$attr55,$attr54,$attr56,visible_pre,$attr53;
			visible_pre = self['_cursorVisible'];
			if ((($bool3=visible) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', self['_cursor']);
				self['_cursorVisible'] = true;
			}
			else {
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', 'none');
				self['_cursorVisible'] = false;
			}
			return visible_pre;
		}
	, 1, [null,null,['self'],['visible']]);
		$cls_definition['set_visible'] = $method;
		$method = $pyjs__bind_method2('set_cursor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool10,$62,surface,$eq10,size,$58,$59,$attr60,hotspot,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,$eq8,$eq9,args,$eq6,$eq7,$eq5,$bool6,$bool7,$bool4,$bool5,$64,$bool8,$bool9,data,$52,$attr59,$attr58,$38,$39,$36,$37,$35,mask,$attr57,$60,url,$61,$63,$len1,$50,$51,fallback,$53,$54,$55,$56,$57;
			args = (($len1=cursor) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
			if ((($bool4=(($eq5=args)===($eq6=1)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['_cursor'] = (typeof ($35=cursor)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](0));
			}
			else if ((($bool5=$p['tuple']([2, 3])['__contains__'](args)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				if ((($bool6=$p['isinstance']((typeof ($37=cursor)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](0)), $p['str'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					url = (typeof ($39=cursor)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](0));
				}
				else {
					url = (typeof ($41=cursor)['__array'] != 'undefined'?
						((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](0))['toDataURL']();
				}
				hotspot = (typeof ($43=cursor)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=1]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__'](1));
				if ((($bool7=(($eq7=args)===($eq8=2)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					fallback = 'default';
				}
				else {
					fallback = (typeof ($45=cursor)['__array'] != 'undefined'?
						((typeof $45['__array'][$46=2]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__'](2));
				}
				self['_cursor'] = $p['sprintf']('url("%s") %d %d, %s', $p['tuple']([url, (typeof ($47=hotspot)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](0)), (typeof ($49=hotspot)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=1]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](1)), fallback]));
			}
			else if ((($bool8=$p['tuple']([4, 5])['__contains__'](args)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				size = (typeof ($51=cursor)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](0));
				hotspot = (typeof ($53=cursor)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=1]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](1));
				data = (typeof ($55=cursor)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=2]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](2));
				mask = (typeof ($57=cursor)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=3]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](3));
				if ((($bool9=(($eq9=args)===($eq10=4)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					fallback = 'default';
				}
				else {
					fallback = (typeof ($59=cursor)['__array'] != 'undefined'?
						((typeof $59['__array'][$60=4]) != 'undefined'?$59['__array'][$60]:
							$59['__getitem__']($60)):
							$59['__getitem__'](4));
				}
				surface = $m['cursors']['create_cursor'](size, data, mask);
				url = surface['toDataURL']();
				self['_cursor'] = $p['sprintf']('url("%s") %d %d, %s', $p['tuple']([url, (typeof ($61=hotspot)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](0)), (typeof ($63=hotspot)['__array'] != 'undefined'?
					((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](1)), fallback]));
			}
			else {
				self['_cursor'] = 'default';
			}
			if ((($bool10=self['_cursorVisible']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', self['_cursor']);
			}
			return null;
		}
	, 1, ['cursor',null,['self']]);
		$cls_definition['set_cursor'] = $method;
		$method = $pyjs__bind_method2('get_cursor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr61,$attr62;
			return self['_cursor'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_cursor'] = $method;
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
			self['set_pos'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return true;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_focused'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mouse', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mouse */


/* end module: pyjsdl.mouse */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.cursors', 'pyjsdl.env']
*/

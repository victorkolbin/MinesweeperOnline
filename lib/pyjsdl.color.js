/* start module: pyjsdl.color */
$pyjs['loaded_modules']['pyjsdl.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.color'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.color'];
	$m['__repr__'] = function() { return '<module: pyjsdl.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.color';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['color'] = $pyjs['loaded_modules']['pyjsdl.color'];


	$m['_Color'] = $p['___import___']('pyjsdl.pyjsobj.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Color'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.color';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var color = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var color = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool4,$bool5,ln,$and1,$eq2,$eq3,$and2,$eq1,$eq6,$eq4,$eq5,$bool2,$bool3,$bool1,$bool6,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$11,$12,$13,$len2,_color,$len1;
			ln = (($len1=color) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
			if ((($bool1=(($eq1=ln)===($eq2=1)&&$eq1===null?true:
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
				_color = (typeof ($1=color)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](0));
				if ((($bool2=$p['hasattr'](_color, '__len__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					ln = (($len2=_color) === null?0:
						(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'?$len2['length']:
									$p['len']($len2)))));
				}
			}
			else {
				_color = color;
			}
			if ((($bool3=(($eq3=ln)===($eq4=4)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(typeof ($3=_color)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](0)), (typeof ($5=_color)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=1]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](1)), (typeof ($7=_color)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=2]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](2)), (typeof ($9=_color)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=3]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](3))]), 4, null);
				self['r'] = $tupleassign1[0];
				self['g'] = $tupleassign1[1];
				self['b'] = $tupleassign1[2];
				self['a'] = $tupleassign1[3];
			}
			else if ((($bool4=(($eq5=ln)===($eq6=3)&&$eq5===null?true:
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
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($11=_color)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](0)), (typeof ($13=_color)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=1]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](1)), (typeof ($15=_color)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=2]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](2)), 255]), 4, null);
				self['r'] = $tupleassign2[0];
				self['g'] = $tupleassign2[1];
				self['b'] = $tupleassign2[2];
				self['a'] = $tupleassign2[3];
			}
			else {
				if ((($bool6=((($bool5=$and1=$p['hasattr'](_color, 'startswith')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?_color['startswith']('#'):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					_color = ('0x')+($p['__getslice'](_color, 1, null));
				}
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([((_color)>>(16))&(255), ((_color)>>(8))&(255), (_color)&(255), ((_color)>>(24))&(255)]), 4, null);
				self['r'] = $tupleassign3[0];
				self['g'] = $tupleassign3[1];
				self['b'] = $tupleassign3[2];
				self['a'] = $tupleassign3[3];
			}
			return null;
		}
	, 1, ['color',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$attr3;
			return $p['sprintf']('(%d,%d,%d,%d)', $p['tuple']([self['r'], self['g'], self['b'], self['a']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr15,$attr14,$attr16,$attr11,$attr10,$attr13,$attr12;
			return $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([self['r'], self['g'], self['b'], (self['a'])/(255.0)]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $17,$18,$attr20,$attr21,$attr22,$attr23,$attr19,$attr18,$attr24,$attr17;
			return (typeof ($17=$p['dict']([[0, self['r']], [1, self['g']], [2, self['b']], [3, self['a']]]))['__array'] != 'undefined'?
				((typeof $17['__array'][$18=index]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](index));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				val = arguments[2];
			}
			var $19,$20;
			self['__setattr__']((typeof ($19=$p['dict']([[0, 'r'], [1, 'g'], [2, 'b'], [3, 'a']]))['__array'] != 'undefined'?
				((typeof $19['__array'][$20=index]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](index)), val);
			return null;
		}
	, 1, [null,null,['self'],['index'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29;
			return $p['iter']($p['list']([self['r'], self['g'], self['b'], self['a']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 4;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$and8,$and9,$and3,$and4,$and5,$and6,$and7,$eq21,$eq20,$eq23,$eq22,$eq25,$bool7,$eq27,$eq26,$eq29,$eq28,$bool8,$bool9,$eq18,$eq19,$eq30,$attr60,$attr61,$attr62,$eq16,$eq17,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$attr48,$attr49,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,$len3,$29,$28,$21,$22,$25,$24,$27,$26,$eq8,$eq9,$eq7,$and12,$and13,$and10,$and11,$34,$32,$33,$30,$31,$23,$eq24;
			if ((($bool7=$p['hasattr'](other, 'a')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return ((($bool8=$and3=(($eq7=self['r'])===($eq8=other['r'])&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool9=$and4=(($eq9=self['g'])===($eq10=other['g'])&&$eq9===null?true:
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
						 true ) )?((($bool10=$and5=(($eq11=self['b'])===($eq12=other['b'])&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq13=self['a'])===($eq14=other['a'])&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
								$eq13==$eq14))))):$and5):$and4):$and3);
			}
			else {
				if ((($bool11=(($eq15=(($len3=other) === null?0:
					(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'?$len3['length']:
								$p['len']($len3))))))===($eq16=4)&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					return ((($bool12=$and7=(($eq17=self['a'])===($eq18=(typeof ($21=other)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=3]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](3)))&&$eq17===null?true:
						($eq17===null?false:($eq18===null?false:
							((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
								((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
									$eq17==$eq18)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool13=$and8=(($eq19=self['r'])===($eq20=(typeof ($23=other)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=0]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](0)))&&$eq19===null?true:
						($eq19===null?false:($eq20===null?false:
							((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
								((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
									$eq19==$eq20)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool14=$and9=(($eq21=self['g'])===($eq22=(typeof ($25=other)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=1]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__'](1)))&&$eq21===null?true:
						($eq21===null?false:($eq22===null?false:
							((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
								((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
									$eq21==$eq22)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq23=self['b'])===($eq24=(typeof ($27=other)['__array'] != 'undefined'?
						((typeof $27['__array'][$28=2]) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__'](2)))&&$eq23===null?true:
						($eq23===null?false:($eq24===null?false:
							((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
								((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
									$eq23==$eq24))))):$and9):$and8):$and7);
				}
				else {
					return ((($bool15=$and11=(($eq25=self['r'])===($eq26=(typeof ($29=other)['__array'] != 'undefined'?
						((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__'](0)))&&$eq25===null?true:
						($eq25===null?false:($eq26===null?false:
							((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
								((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
									$eq25==$eq26)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool16=$and12=(($eq27=self['g'])===($eq28=(typeof ($31=other)['__array'] != 'undefined'?
						((typeof $31['__array'][$32=1]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__'](1)))&&$eq27===null?true:
						($eq27===null?false:($eq28===null?false:
							((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
								((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
									$eq27==$eq28)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq29=self['b'])===($eq30=(typeof ($33=other)['__array'] != 'undefined'?
						((typeof $33['__array'][$34=2]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](2)))&&$eq29===null?true:
						($eq29===null?false:($eq30===null?false:
							((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
								((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
									$eq29==$eq30))))):$and12):$and11);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		$method = $pyjs__bind_method2('__ne__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool18,$bool19,$bool17,$eq54,$eq50,$eq51,$eq52,$eq53,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,$48,$43,$42,$41,$40,$47,$46,$45,$44,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$eq32,$eq33,$eq31,$eq36,$eq37,$eq34,$eq35,$eq38,$eq39,$attr68,$attr69,$attr64,$attr65,$attr66,$attr67,$attr63,$bool25,$bool24,$bool26,$bool21,$bool20,$bool23,$bool22,$attr92,$eq43,$len4,$or11,$or10,$eq42,$35,$or5,$or4,$or7,$or6,$or1,$or3,$or2,$or9,$or8,$eq49,$eq48,$attr91,$attr90,$38,$39,$36,$37,$eq41,$eq40,$eq47,$eq46,$eq45,$eq44;
			if ((($bool17=$p['hasattr'](other, 'a')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return ((($bool18=$or1=!(($eq31=self['r'])===($eq32=other['r'])&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18['__nonzero__']=='function'?
							$bool18['__nonzero__']() :
							(typeof $bool18['__len__']=='function'?
								($bool18['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool19=$or2=!(($eq33=self['g'])===($eq34=other['g'])&&$eq33===null?true:
					($eq33===null?false:($eq34===null?false:
						((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
							((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
								$eq33==$eq34)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:((($bool20=$or3=!(($eq35=self['b'])===($eq36=other['b'])&&$eq35===null?true:
					($eq35===null?false:($eq36===null?false:
						((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
							((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
								$eq35==$eq36)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:!(($eq37=self['a'])===($eq38=other['a'])&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
								$eq37==$eq38))))))));
			}
			else {
				if ((($bool21=(($eq39=(($len4=other) === null?0:
					(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'?$len4['length']:
								$p['len']($len4))))))===($eq40=4)&&$eq39===null?true:
					($eq39===null?false:($eq40===null?false:
						((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
							((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
								$eq39==$eq40)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					return ((($bool22=$or5=!(($eq41=self['a'])===($eq42=(typeof ($35=other)['__array'] != 'undefined'?
						((typeof $35['__array'][$36=3]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__'](3)))&&$eq41===null?true:
						($eq41===null?false:($eq42===null?false:
							((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
								((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
									$eq41==$eq42)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:((($bool23=$or6=!(($eq43=self['r'])===($eq44=(typeof ($37=other)['__array'] != 'undefined'?
						((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](0)))&&$eq43===null?true:
						($eq43===null?false:($eq44===null?false:
							((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
								((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
									$eq43==$eq44)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or6:((($bool24=$or7=!(($eq45=self['g'])===($eq46=(typeof ($39=other)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](1)))&&$eq45===null?true:
						($eq45===null?false:($eq46===null?false:
							((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
								((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
									$eq45==$eq46)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:!(($eq47=self['b'])===($eq48=(typeof ($41=other)['__array'] != 'undefined'?
						((typeof $41['__array'][$42=2]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](2)))&&$eq47===null?true:
						($eq47===null?false:($eq48===null?false:
							((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
								((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
									$eq47==$eq48))))))));
				}
				else {
					return ((($bool25=$or9=!(($eq49=self['r'])===($eq50=(typeof ($43=other)['__array'] != 'undefined'?
						((typeof $43['__array'][$44=0]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__'](0)))&&$eq49===null?true:
						($eq49===null?false:($eq50===null?false:
							((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
								((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
									$eq49==$eq50)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or9:((($bool26=$or10=!(($eq51=self['g'])===($eq52=(typeof ($45=other)['__array'] != 'undefined'?
						((typeof $45['__array'][$46=1]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__'](1)))&&$eq51===null?true:
						($eq51===null?false:($eq52===null?false:
							((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
								((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
									$eq51==$eq52)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or10:!(($eq53=self['b'])===($eq54=(typeof ($47=other)['__array'] != 'undefined'?
						((typeof $47['__array'][$48=2]) != 'undefined'?$47['__array'][$48]:
							$47['__getitem__']($48)):
							$47['__getitem__'](2)))&&$eq53===null?true:
						($eq53===null?false:($eq54===null?false:
							((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
								((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
									$eq53==$eq54)))))));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		var $bases = new Array($m['_Color']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Color', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.color */


/* end module: pyjsdl.color */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.Color', 'pyjsdl', 'pyjsdl.pyjsobj']
*/

/* start module: struct */
$pyjs['loaded_modules']['struct'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['struct']['__was_initialized__']) return $pyjs['loaded_modules']['struct'];
	var $m = $pyjs['loaded_modules']['struct'];
	$m['__repr__'] = function() { return '<module: struct>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'struct';
	$m['__name__'] = __mod_name__;
	var $attr3,$attr1,$attr2,$attr4;

	$m['math'] = $p['___import___']('math', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['StructError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'struct';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StructError', $p['tuple']($bases), $data);
	})();
	$m['error'] = $m['StructError'];
	$m['unpack_int'] = function(data, index, size, le) {
		var $iter2_type,$iter2_iter,$eq2,$eq1,bytes,number,$iter2_nextval,$iter2_idx,$bool1,b,$iter2_array;
		bytes = function(){
			var b,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = $p['__getslice'](data, index, (index)+(size));
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			b = $iter1_nextval;
			$collcomp1['append']($p['ord'](b));
		}

	return $collcomp1;}();
		if ((($bool1=(($eq1=le)===($eq2='little')&&$eq1===null?true:
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
			bytes['reverse']();
		}
		number = 0;
		$iter2_iter = bytes;
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			b = $iter2_nextval;
			number = ((number)<<(8))|(b);
		}
		return $p['float_int'](number);
	};
	$m['unpack_int']['__name__'] = 'unpack_int';

	$m['unpack_int']['__bind_type__'] = 0;
	$m['unpack_int']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_signed_int'] = function(data, index, size, le) {
		var $cmp1,$cmp2,max,number,$bool2;
		number = $m['unpack_int'](data, index, size, le);
		max = Math['pow'](2,(size)*(8));
		if ((($bool2=((($cmp1=number)===($cmp2=(Math['pow'](2,((size)*(8))-(1)))-(1))?0:
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
			number = $p['float_int']((-(1))*((max)-(number)));
		}
		return number;
	};
	$m['unpack_signed_int']['__name__'] = 'unpack_signed_int';

	$m['unpack_signed_int']['__bind_type__'] = 0;
	$m['unpack_signed_int']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_float'] = function(data, index, size, le) {
		var $8,number,sign,bias,$iter4_type,$eq10,$iter4_iter,$2,revbytes,prec,$eq8,$eq9,mantissa,$eq3,$eq6,$eq7,$eq4,$eq5,$bool3,$bool6,$bool7,$bool4,$bool5,$6,$7,$4,$5,$3,$1,b,e,$iter4_nextval,bytes,$iter4_idx,exp,$len1,$iter4_array;
		bytes = function(){
			var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,b,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
		$iter3_iter = $p['__getslice'](data, index, (index)+(size));
		if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter['__iter__']();
			$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			b = $iter3_nextval;
			$collcomp2['append']($p['ord'](b));
		}

	return $collcomp2;}();
		if ((($bool3=!(($eq3=(($len1=bytes) === null?0:
			(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
				(typeof $len1['__len__'] == 'function'?$len1['__len__']():
					(typeof $len1['length'] != 'undefined'?$len1['length']:
						$p['len']($len1))))))===($eq4=size)&&$eq3===null?true:
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'Not enough data to unpack';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool4=(($eq5=$p['max'](bytes))===($eq6=0)&&$eq5===null?true:
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
			return 0.0;
		}
		if ((($bool5=(($eq7=le)===($eq8='big')&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			bytes['reverse']();
		}
		if ((($bool6=(($eq9=size)===($eq10=4)&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		mantissa = $p['float_int'](((typeof ($1=bytes)['__array'] != 'undefined'?
			((typeof $1['__array'][$2=(size)-(2)]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__']((size)-(2))))&((Math['pow'](2,(15)-(exp)))-(1)));
		revbytes = bytes;
		revbytes['reverse']();
		$iter4_iter = $p['__getslice'](revbytes, 3, null);
		if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter['__iter__']();
			$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			b = $iter4_nextval;
			mantissa = ((mantissa)<<(8))|(b);
		}
		mantissa = (1)+(((1.0)*(mantissa))/(Math['pow'](2,prec)));
		mantissa /= 2;
		e = (((typeof ($3=bytes)['__array'] != 'undefined'?
			((typeof $3['__array'][$4=-(1)]) != 'undefined'?$3['__array'][$4]:
				$3['__getitem__']($4)):
				$3['__getitem__'](-(1))))&(127))<<((exp)-(7));
		e += (((typeof ($5=bytes)['__array'] != 'undefined'?
			((typeof $5['__array'][$6=(size)-(2)]) != 'undefined'?$5['__array'][$6]:
				$5['__getitem__']($6)):
				$5['__getitem__']((size)-(2))))>>((15)-(exp)))&((Math['pow'](2,(exp)-(7)))-(1));
		e -= bias;
		e += 1;
		sign = ((typeof ($7=bytes)['__array'] != 'undefined'?
			((typeof $7['__array'][$8=-(1)]) != 'undefined'?$7['__array'][$8]:
				$7['__getitem__']($8)):
				$7['__getitem__'](-(1))))&(128);
		number = $m['math']['ldexp'](mantissa, e);
		if ((($bool7=sign) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			number *= -(1);
		}
		return number;
	};
	$m['unpack_float']['__name__'] = 'unpack_float';

	$m['unpack_float']['__bind_type__'] = 0;
	$m['unpack_float']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_char'] = function(data, index, size, le) {

		return $p['__getslice'](data, index, (index)+(size));
	};
	$m['unpack_char']['__name__'] = 'unpack_char';

	$m['unpack_char']['__bind_type__'] = 0;
	$m['unpack_char']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
	$m['pack_int'] = function(number, size, le) {
		var $iter5_nextval,$iter5_idx,$iter5_array,res,$eq11,i,$iter5_iter,$iter5_type,x,$eq12,$bool8;
		x = number;
		res = $p['list']([]);
		$iter5_iter = $p['range'](size);
		if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter['__iter__']();
			$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			res['append']($p['chr']((x)&(255)));
			x >>= 8;
		}
		if ((($bool8=(($eq11=le)===($eq12='big')&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			res['reverse']();
		}
		return ''['join'](res);
	};
	$m['pack_int']['__name__'] = 'pack_int';

	$m['pack_int']['__bind_type__'] = 0;
	$m['pack_int']['__args__'] = [null,null,['number'],['size'],['le']];
	$m['pack_signed_int'] = function(number, size, le) {
		var $cmp5,$cmp4,$or1,$cmp3,$or2,$bool10,$bool11,$bool12,$cmp6,$bool9;
		if ((($bool10=!(($bool9=$p['isinstance'](number, $p['tuple']([$p['float_int'], $p['float_int']]))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool12=((($bool11=$or1=((($cmp3=number)===($cmp4=(Math['pow'](2,((8)*(size))-(1)))-(1))?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11['__nonzero__']=='function'?
					$bool11['__nonzero__']() :
					(typeof $bool11['__len__']=='function'?
						($bool11['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($cmp5=number)===($cmp6=(-(1))*(Math['pow'](2,((8)*(size))-(1))))?0:
			(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
				($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
				$p['cmp']($cmp5, $cmp6))) == -1))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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

			var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m['OverflowError']:OverflowError);
			var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return $m['pack_int'](number, size, le);
	};
	$m['pack_signed_int']['__name__'] = 'pack_signed_int';

	$m['pack_signed_int']['__bind_type__'] = 0;
	$m['pack_signed_int']['__args__'] = [null,null,['number'],['size'],['le']];
	$m['pack_unsigned_int'] = function(number, size, le) {
		var $cmp7,$cmp9,$bool13,$bool14,$bool16,$cmp8,$bool15,$cmp10;
		if ((($bool14=!(($bool13=$p['isinstance'](number, $p['tuple']([$p['float_int'], $p['float_int']]))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool15=((($cmp7=number)===($cmp8=0)?0:
			(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
				($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
				$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = "can't convert negative long to unsigned";
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool16=((($cmp9=number)===($cmp10=(Math['pow'](2,(8)*(size)))-(1))?0:
			(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
				($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
				$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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

			var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m['OverflowError']:OverflowError);
			var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return $m['pack_int'](number, size, le);
	};
	$m['pack_unsigned_int']['__name__'] = 'pack_unsigned_int';

	$m['pack_unsigned_int']['__bind_type__'] = 0;
	$m['pack_unsigned_int']['__args__'] = [null,null,['number'],['size'],['le']];
	$m['pack_char'] = function($$char, size, le) {
		var $$char;
		return $p['str']($$char);
	};
	$m['pack_char']['__name__'] = 'pack_char';

	$m['pack_char']['__bind_type__'] = 0;
	$m['pack_char']['__args__'] = [null,null,['$$char'],['size'],['le']];
	$m['sane_float'] = function(man, e) {

		return true;
	};
	$m['sane_float']['__name__'] = 'sane_float';

	$m['sane_float']['__bind_type__'] = 0;
	$m['sane_float']['__args__'] = [null,null,['man'],['e']];
	$m['pack_float'] = function(number, size, le) {
		var $bool18,$bool19,$iter6_type,$bool17,$eq18,bias,$iter6_iter,$eq13,$eq14,$eq15,$eq16,res,prec,$bool24,$bool21,$bool20,$bool23,$bool22,$iter6_nextval,$eq17,$iter6_idx,mantissa,$and1,$and2,$cmp15,$cmp14,$iter6_array,$cmp16,$cmp11,$cmp13,$cmp12,sign,man,e,i,exp;
		if ((($bool17=((($cmp11=number)===($cmp12=0)?0:
			(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
				($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
				$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			sign = 1;
			number *= -(1);
		}
		else if ((($bool18=(($eq13=number)===($eq14=0.0)&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
			return ''['ljust'](size, '\x00');
		}
		else {
			sign = 0;
		}
		if ((($bool19=(($eq15=size)===($eq16=4)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		var $tupleassign1 = $p['__ass_unpack']($m['math']['frexp'](number), 2, null);
		man = $tupleassign1[0];
		e = $tupleassign1[1];
		if ((($bool21=((($bool20=$and1=((($cmp13=0.5)===($cmp14=man)?0:
			(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
				($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
				$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
			false :
			(typeof $bool20=='object'?
				(typeof $bool20['__nonzero__']=='function'?
					$bool20['__nonzero__']() :
					(typeof $bool20['__len__']=='function'?
						($bool20['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($cmp15=man)===($cmp16=1.0)?0:
			(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
				($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
				$p['cmp']($cmp15, $cmp16))) == -1):$and1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
			man *= 2;
			e -= 1;
		}
		if ((($bool22=$m['sane_float'](man, e)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
			man -= 1;
			e += bias;
			mantissa = $p['float_int'](((Math['pow'](2,prec))*(man))+(0.5));
			res = $p['list']([]);
			if ((($bool23=(mantissa)>>(prec)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				mantissa = 0;
				e += 1;
			}
			$iter6_iter = $p['range']((size)-(2));
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				res['extend']($p['list']([(mantissa)&(255)]));
				mantissa >>= 8;
			}
			res['extend']($p['list']([((mantissa)&((Math['pow'](2,(15)-(exp)))-(1)))|(((e)&((Math['pow'](2,(exp)-(7)))-(1)))<<((15)-(exp)))]));
			res['extend']($p['list']([((sign)<<(7))|((e)>>((exp)-(7)))]));
			if ((($bool24=(($eq17=le)===($eq18='big')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				res['reverse']();
			}
			return ''['join'](function(){
				var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type;
	$collcomp3 = $p['list']();
			$iter7_iter = res;
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				x = $iter7_nextval;
				$collcomp3['append']($p['chr'](x));
			}

	return $collcomp3;}());
		}
		return null;
	};
	$m['pack_float']['__name__'] = 'pack_float';

	$m['pack_float']['__bind_type__'] = 0;
	$m['pack_float']['__args__'] = [null,null,['number'],['size'],['le']];
	$m['big_endian_format'] = $p['dict']([['x', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['b', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['B', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['c', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_char']], ['unpack', $m['unpack_char']]])], ['s', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['p', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['h', $p['dict']([['size', 2], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['H', $p['dict']([['size', 2], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['i', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['I', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['l', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['L', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['q', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['Q', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['f', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])], ['d', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])]]);
	$m['$$default'] = $m['big_endian_format'];
	$m['formatmode'] = $p['dict']([['<', $p['tuple']([$m['$$default'], 'little'])], ['>', $p['tuple']([$m['$$default'], 'big'])], ['!', $p['tuple']([$m['$$default'], 'big'])], ['=', $p['tuple']([$m['$$default'], $m['sys']['byteorder']])], ['@', $p['tuple']([$m['$$default'], $m['sys']['byteorder']])]]);
	$m['getmode'] = function(fmt) {
		var $14,index,$10,$11,$12,$13,$pyjs_try_err,endianness,$9,formatdef;
		try {
			var $tupleassign2 = $p['__ass_unpack']((typeof ($11=$m['formatmode'])['__array'] != 'undefined'?
				((typeof $11['__array'][$12=(typeof ($9=fmt)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](0))]) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__']((typeof ($9=fmt)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](0)))), 2, null);
			formatdef = $tupleassign2[0];
			endianness = $tupleassign2[1];
			index = 1;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
				var $tupleassign3 = $p['__ass_unpack']((typeof ($13=$m['formatmode'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14='@']) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']('@')), 2, null);
				formatdef = $tupleassign3[0];
				endianness = $tupleassign3[1];
				index = 0;
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return $p['tuple']([formatdef, endianness, index]);
	};
	$m['getmode']['__name__'] = 'getmode';

	$m['getmode']['__bind_type__'] = 0;
	$m['getmode']['__args__'] = [null,null,['fmt']];
	$m['getNum'] = function(fmt, i) {
		var $15,$16,$17,cur,$cmp20,$eq20,$18,$and3,$and4,$bool27,$bool25,$eq19,$cmp17,num,$bool26,$cmp19,$cmp18;
		num = null;
		cur = (typeof ($15=fmt)['__array'] != 'undefined'?
			((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
				$15['__getitem__']($16)):
				$15['__getitem__'](i));
		while ((($bool26=((($bool25=$and3=((($cmp17='0')===($cmp18=cur)?0:
			(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
				($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
				$p['cmp']($cmp17, $cmp18))) < 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
			false :
			(typeof $bool25=='object'?
				(typeof $bool25['__nonzero__']=='function'?
					$bool25['__nonzero__']() :
					(typeof $bool25['__len__']=='function'?
						($bool25['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($cmp19=cur)===($cmp20='9')?0:
			(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
				($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
				$p['cmp']($cmp19, $cmp20))) < 1):$and3)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
			if ((($bool27=(($eq19=num)===($eq20=null)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				num = $p['float_int'](cur);
			}
			else {
				num = ((10)*(num))+($p['float_int'](cur));
			}
			i += 1;
			cur = (typeof ($17=fmt)['__array'] != 'undefined'?
				((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](i));
		}
		return $p['tuple']([num, i]);
	};
	$m['getNum']['__name__'] = 'getNum';

	$m['getNum']['__bind_type__'] = 0;
	$m['getNum']['__args__'] = [null,null,['fmt'],['i']];
	$m['calcsize'] = function(fmt) {
		var $cmp21,$cmp22,num,result,cur,$21,$20,$22,$25,$24,$26,$pyjs_try_err,endianness,$bool29,$bool28,format,$eq21,$eq22,formatdef,i,$19,$len2,$23;
		var $tupleassign4 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
		formatdef = $tupleassign4[0];
		endianness = $tupleassign4[1];
		i = $tupleassign4[2];
		num = 0;
		result = 0;
		while ((($bool28=((($cmp21=i)===($cmp22=(($len2=fmt) === null?0:
			(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
				(typeof $len2['__len__'] == 'function'?$len2['__len__']():
					(typeof $len2['length'] != 'undefined'?$len2['length']:
						$p['len']($len2))))))?0:
			(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
				($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
				$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
			var $tupleassign5 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
			num = $tupleassign5[0];
			i = $tupleassign5[1];
			cur = (typeof ($19=fmt)['__array'] != 'undefined'?
				((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](i));
			try {
				format = (typeof ($21=formatdef)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=cur]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			if ((($bool29=!(($eq21=num)===($eq22=null)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				result += (num)*((typeof ($23=format)['__array'] != 'undefined'?
					((typeof $23['__array'][$24='size']) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']('size')));
			}
			else {
				result += (typeof ($25=format)['__array'] != 'undefined'?
					((typeof $25['__array'][$26='size']) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']('size'));
			}
			num = 0;
			i += 1;
		}
		return result;
	};
	$m['calcsize']['__name__'] = 'calcsize';

	$m['calcsize']['__bind_type__'] = 0;
	$m['calcsize']['__args__'] = [null,null,['fmt']];
	$m['pack'] = function(fmt) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

		var $48,$iter8_array,$len6,$cmp27,$len5,$iter8_iter,$eq30,num,$cmp24,result,$cmp26,$39,$cmp28,$cmp29,$iter8_nextval,$len7,$29,$28,cur,$44,$bool33,$cmp30,$bool40,$len4,$27,$49,$pyjs_try_err,$eq31,$36,endianness,$43,$42,$41,$40,$47,$46,$45,$bool37,$iter8_idx,format,$iter8_type,padding,$$var,$eq23,$len9,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,$52,formatdef,$eq32,$bool39,$38,$bool31,i,$37,$34,$35,$32,$33,$30,$31,$bool32,n_args,$bool30,$cmp23,$bool36,$len3,$bool34,$bool35,$50,$51,$bool38,num_s,$len8,$cmp25;
		var $tupleassign6 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
		formatdef = $tupleassign6[0];
		endianness = $tupleassign6[1];
		i = $tupleassign6[2];
		args = $p['list'](args);
		n_args = (($len3=args) === null?0:
			(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
				(typeof $len3['__len__'] == 'function'?$len3['__len__']():
					(typeof $len3['length'] != 'undefined'?$len3['length']:
						$p['len']($len3)))));
		result = $p['list']([]);
		while ((($bool30=((($cmp23=i)===($cmp24=(($len4=fmt) === null?0:
			(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
				(typeof $len4['__len__'] == 'function'?$len4['__len__']():
					(typeof $len4['length'] != 'undefined'?$len4['length']:
						$p['len']($len4))))))?0:
			(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
				($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
				$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
			var $tupleassign7 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
			num = $tupleassign7[0];
			i = $tupleassign7[1];
			cur = (typeof ($27=fmt)['__array'] != 'undefined'?
				((typeof $27['__array'][$28=i]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](i));
			try {
				format = (typeof ($29=formatdef)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=cur]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			if ((($bool31=(($eq23=num)===($eq24=null)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31['__nonzero__']=='function'?
							$bool31['__nonzero__']() :
							(typeof $bool31['__len__']=='function'?
								($bool31['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				num_s = 0;
				num = 1;
			}
			else {
				num_s = num;
			}
			if ((($bool32=(($eq25=cur)===($eq26='x')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				result['extend']($p['list']([''['ljust'](num, '\x00')]));
			}
			else if ((($bool33=(($eq27=cur)===($eq28='s')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				if ((($bool34=$p['isinstance']((typeof ($31=args)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](0)), $p['str'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					padding = (num)-((($len5=(typeof ($33=args)['__array'] != 'undefined'?
						((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](0))) === null?0:
						(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
							(typeof $len5['__len__'] == 'function'?$len5['__len__']():
								(typeof $len5['length'] != 'undefined'?$len5['length']:
									$p['len']($len5))))));
					result['extend']($p['list']([($p['__getslice']((typeof ($35=args)['__array'] != 'undefined'?
						((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__'](0)), 0, num))+(''['ljust'](padding, '\x00'))]));
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'arg for string format not a string';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else if ((($bool35=(($eq29=cur)===($eq30='p')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				if ((($bool36=$p['isinstance']((typeof ($37=args)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](0)), $p['str'])) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					padding = ((num)-((($len6=(typeof ($39=args)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](0))) === null?0:
						(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
							(typeof $len6['__len__'] == 'function'?$len6['__len__']():
								(typeof $len6['length'] != 'undefined'?$len6['length']:
									$p['len']($len6)))))))-(1);
					if ((($bool37=((($cmp25=padding)===($cmp26=0)?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						result['extend']($p['list']([(($p['chr']((($len7=(typeof ($41=args)['__array'] != 'undefined'?
							((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__'](0))) === null?0:
							(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
								(typeof $len7['__len__'] == 'function'?$len7['__len__']():
									(typeof $len7['length'] != 'undefined'?$len7['length']:
										$p['len']($len7)))))))+($p['__getslice']((typeof ($43=args)['__array'] != 'undefined'?
							((typeof $43['__array'][$44=0]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](0)), 0, (num)-(1))))+(''['ljust'](padding, '\x00'))]));
					}
					else {
						if ((($bool38=((($cmp27=num)===($cmp28=255)?0:
							(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
								($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
								$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
							result['extend']($p['list']([($p['chr']((num)-(1)))+($p['__getslice']((typeof ($45=args)['__array'] != 'undefined'?
								((typeof $45['__array'][$46=0]) != 'undefined'?$45['__array'][$46]:
									$45['__getitem__']($46)):
									$45['__getitem__'](0)), 0, (num)-(1)))]));
						}
						else {
							result['extend']($p['list']([($p['chr'](255))+($p['__getslice']((typeof ($47=args)['__array'] != 'undefined'?
								((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
									$47['__getitem__']($48)):
									$47['__getitem__'](0)), 0, (num)-(1)))]));
						}
					}
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'arg for string format not a string';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else {
				if ((($bool39=((($cmp29=(($len8=args) === null?0:
					(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'?$len8['length']:
								$p['len']($len8))))))===($cmp30=num)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'insufficient arguments to pack';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$iter8_iter = $p['__getslice'](args, 0, num);
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					$$var = $iter8_nextval;
					result['extend']($p['list']([(typeof ($49=format)['__array'] != 'undefined'?
						((typeof $49['__array'][$50='pack']) != 'undefined'?$49['__array'][$50]:
							$49['__getitem__']($50)):
							$49['__getitem__']('pack'))($$var, (typeof ($51=format)['__array'] != 'undefined'?
						((typeof $51['__array'][$52='size']) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__']('size')), endianness)]));
				}
				args = $p['__getslice'](args, num, null);
			}
			num = null;
			i += 1;
		}
		if ((($bool40=!(($eq31=(($len9=args) === null?0:
			(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
				(typeof $len9['__len__'] == 'function'?$len9['__len__']():
					(typeof $len9['length'] != 'undefined'?$len9['length']:
						$p['len']($len9))))))===($eq32=0)&&$eq31===null?true:
			($eq31===null?false:($eq32===null?false:
				((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
					((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
						$eq31==$eq32)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'too many arguments for pack format';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return ''['join'](result);
	};
	$m['pack']['__name__'] = 'pack';

	$m['pack']['__bind_type__'] = 0;
	$m['pack']['__args__'] = ['args',null,['fmt']];
	$m['unpack'] = function(fmt, data) {
		var $eq40,$eq33,num,$eq36,result,$eq34,$eq35,$eq38,$eq39,$iter9_array,cur,$iter9_iter,$cmp33,$iter9_nextval,$iter9_idx,$pyjs_try_err,endianness,$64,$61,$iter9_type,$63,$62,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,format,$bool48,$57,$60,$cmp34,$cmp32,$cmp31,formatdef,$len10,$len11,i,j,n,$58,$59,length,$53,$54,$55,$56,$eq37;
		var $tupleassign8 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
		formatdef = $tupleassign8[0];
		endianness = $tupleassign8[1];
		i = $tupleassign8[2];
		j = 0;
		num = 0;
		result = $p['list']([]);
		length = $m['calcsize'](fmt);
		if ((($bool41=!(($eq33=length)===($eq34=(($len10=data) === null?0:
			(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
				(typeof $len10['__len__'] == 'function'?$len10['__len__']():
					(typeof $len10['length'] != 'undefined'?$len10['length']:
						$p['len']($len10))))))&&$eq33===null?true:
			($eq33===null?false:($eq34===null?false:
				((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
					((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
						$eq33==$eq34)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'unpack str size does not match format';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		while ((($bool42=((($cmp31=i)===($cmp32=(($len11=fmt) === null?0:
			(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
				(typeof $len11['__len__'] == 'function'?$len11['__len__']():
					(typeof $len11['length'] != 'undefined'?$len11['length']:
						$p['len']($len11))))))?0:
			(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
				($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
				$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
			var $tupleassign9 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
			num = $tupleassign9[0];
			i = $tupleassign9[1];
			cur = (typeof ($53=fmt)['__array'] != 'undefined'?
				((typeof $53['__array'][$54=i]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__'](i));
			i += 1;
			try {
				format = (typeof ($55=formatdef)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=cur]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			if ((($bool44=!(($bool43=num) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43['__nonzero__']=='function'?
						$bool43['__nonzero__']() :
						(typeof $bool43['__len__']=='function'?
							($bool43['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				num = 1;
			}
			if ((($bool45=(($eq35=cur)===($eq36='x')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				j += num;
			}
			else if ((($bool46=(($eq37=cur)===($eq38='s')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				result['append']($p['__getslice'](data, j, (j)+(num)));
				j += num;
			}
			else if ((($bool47=(($eq39=cur)===($eq40='p')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				n = $p['ord']((typeof ($57=data)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=j]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](j)));
				if ((($bool48=((((($cmp33=n)===($cmp34=num)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))))|1) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					n = (num)-(1);
				}
				result['append']($p['__getslice'](data, (j)+(1), ((j)+(n))+(1)));
				j += num;
			}
			else {
				$iter9_iter = $p['range'](num);
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					n = $iter9_nextval;
					result['extend']($p['list']([(typeof ($59=format)['__array'] != 'undefined'?
						((typeof $59['__array'][$60='unpack']) != 'undefined'?$59['__array'][$60]:
							$59['__getitem__']($60)):
							$59['__getitem__']('unpack'))(data, j, (typeof ($61=format)['__array'] != 'undefined'?
						((typeof $61['__array'][$62='size']) != 'undefined'?$61['__array'][$62]:
							$61['__getitem__']($62)):
							$61['__getitem__']('size')), endianness)]));
					j += (typeof ($63=format)['__array'] != 'undefined'?
						((typeof $63['__array'][$64='size']) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__']('size'));
				}
			}
		}
		return $p['tuple'](result);
	};
	$m['unpack']['__name__'] = 'unpack';

	$m['unpack']['__bind_type__'] = 0;
	$m['unpack']['__args__'] = [null,null,['fmt'],['data']];
	$m['pack_into'] = function(fmt, buf, offset) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']));


		throw ($p['NotImplementedError']('pack_into'));
		return null;
	};
	$m['pack_into']['__name__'] = 'pack_into';

	$m['pack_into']['__bind_type__'] = 0;
	$m['pack_into']['__args__'] = ['args',null,['fmt'],['buf'],['offset']];
	$m['unpack_from'] = function(fmt, buf, offset) {
		if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];

		throw ($p['NotImplementedError']('unpack_from'));
		return null;
	};
	$m['unpack_from']['__name__'] = 'unpack_from';

	$m['unpack_from']['__bind_type__'] = 0;
	$m['unpack_from']['__args__'] = [null,null,['fmt'],['buf'],['offset', 0]];
	return this;
}; /* end struct */


/* end module: struct */


/*
PYJS_DEPS: ['math', 'sys']
*/

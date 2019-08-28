/* start module: base64 */
$pyjs['loaded_modules']['base64'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['base64']['__was_initialized__']) return $pyjs['loaded_modules']['base64'];
	var $m = $pyjs['loaded_modules']['base64'];
	$m['__repr__'] = function() { return '<module: base64>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'base64';
	$m['__name__'] = __mod_name__;
	var $eq30,$bool26,$eq29;

	$m['struct'] = $p['___import___']('struct', null);
	$m['binascii'] = $p['___import___']('binascii', null);
	$m['__all__'] = $p['list'](['encode', 'decode', 'encodestring', 'decodestring', 'b64encode', 'b64decode', 'b32encode', 'b32decode', 'b16encode', 'b16decode', 'standard_b64encode', 'standard_b64decode', 'urlsafe_b64encode', 'urlsafe_b64decode']);
	$m['_translation'] = function(){
		var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
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
		$m['_x'] = $iter1_nextval;
		$collcomp1['append']($p['chr']($m['_x']));
	}

	return $collcomp1;}();
	$m['EMPTYSTRING'] = '';
	$m['_translate'] = function(s, altchars) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,k,$iter3_type,$iter2_idx,$iter3_idx,t,v,translation,$1,$2,$iter3_nextval,$iter2_array,$iter3_iter;
		translation = $p['__getslice']($m['_translation'], 0, null);
		$iter2_iter = altchars['items']();
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
			k = $tupleassign1[0];
			v = $tupleassign1[1];
			translation['__setitem__']($p['ord'](k), v);
		}
		t = '';
		$iter3_iter = s;
		if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter['__iter__']();
			$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			c = $iter3_nextval;
			t += (typeof ($1=translation)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=$p['ord'](c)]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__']($p['ord'](c)));
		}
		return t;
	};
	$m['_translate']['__name__'] = '_translate';

	$m['_translate']['__bind_type__'] = 0;
	$m['_translate']['__args__'] = [null,null,['s'],['altchars']];
	$m['b64encode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments['callee']['__args__'][3][1];
		var $6,$bool1,encoded,$4,$5,$3;
		encoded = $p['__getslice']($m['binascii']['b2a_base64'](s), 0, -(1));
		if ((($bool1=(altchars !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return $m['_translate'](encoded, $p['dict']([['+', (typeof ($3=altchars)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](0))], ['/', (typeof ($5=altchars)['__array'] != 'undefined'?
				((typeof $5['__array'][$6=1]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](1))]]));
		}
		return encoded;
	};
	$m['b64encode']['__name__'] = 'b64encode';

	$m['b64encode']['__bind_type__'] = 0;
	$m['b64encode']['__args__'] = [null,null,['s'],['altchars', null]];
	$m['b64decode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments['callee']['__args__'][3][1];
		var $10,$attr1,$attr3,$attr2,$attr4,$bool2,msg,$pyjs_try_err,$8,$9,$7;
		if ((($bool2=(altchars !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			s = $m['_translate'](s, $p['dict']([[(typeof ($7=altchars)['__array'] != 'undefined'?
				((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](0)), '+'], [(typeof ($9=altchars)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=1]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](1)), '/']]));
		}
		try {
			return $m['binascii']['a2b_base64'](s);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $m['binascii']['Error']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['binascii']['Error'])) {
				msg = $pyjs_try_err;
				throw ($p['TypeError'](msg));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['b64decode']['__name__'] = 'b64decode';

	$m['b64decode']['__bind_type__'] = 0;
	$m['b64decode']['__args__'] = [null,null,['s'],['altchars', null]];
	$m['standard_b64encode'] = function(s) {

		return $m['b64encode'](s);
	};
	$m['standard_b64encode']['__name__'] = 'standard_b64encode';

	$m['standard_b64encode']['__bind_type__'] = 0;
	$m['standard_b64encode']['__args__'] = [null,null,['s']];
	$m['standard_b64decode'] = function(s) {

		return $m['b64decode'](s);
	};
	$m['standard_b64decode']['__name__'] = 'standard_b64decode';

	$m['standard_b64decode']['__bind_type__'] = 0;
	$m['standard_b64decode']['__args__'] = [null,null,['s']];
	$m['urlsafe_b64encode'] = function(s) {

		return $m['b64encode'](s, '-_');
	};
	$m['urlsafe_b64encode']['__name__'] = 'urlsafe_b64encode';

	$m['urlsafe_b64encode']['__bind_type__'] = 0;
	$m['urlsafe_b64encode']['__args__'] = [null,null,['s']];
	$m['urlsafe_b64decode'] = function(s) {

		return $m['b64decode'](s, '-_');
	};
	$m['urlsafe_b64decode']['__name__'] = 'urlsafe_b64decode';

	$m['urlsafe_b64decode']['__bind_type__'] = 0;
	$m['urlsafe_b64decode']['__args__'] = [null,null,['s']];
	$m['_b32alphabet'] = $p['dict']([[0, 'A'], [9, 'J'], [18, 'S'], [27, '3'], [1, 'B'], [10, 'K'], [19, 'T'], [28, '4'], [2, 'C'], [11, 'L'], [20, 'U'], [29, '5'], [3, 'D'], [12, 'M'], [21, 'V'], [30, '6'], [4, 'E'], [13, 'N'], [22, 'W'], [31, '7'], [5, 'F'], [14, 'O'], [23, 'X'], [6, 'G'], [15, 'P'], [24, 'Y'], [7, 'H'], [16, 'Q'], [25, 'Z'], [8, 'I'], [17, 'R'], [26, '2']]);
	$m['_b32tab'] = $m['_b32alphabet']['items']();
	$m['_b32tab']['sort']();
	$m['_b32tab'] = function(){
		var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
	$iter4_iter = $m['_b32tab'];
	if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
		$iter4_type = 0;
	} else {
		$iter4_iter = $iter4_iter['__iter__']();
		$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
	}
	$iter4_idx = 0;
	while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
		var $tupleassign2 = $p['__ass_unpack']($iter4_nextval, 2, null);
		$m['k'] = $tupleassign2[0];
		$m['v'] = $tupleassign2[1];
		$collcomp2['append']($m['v']);
	}

	return $collcomp2;}();
	$m['_b32rev'] = $p['dict'](function(){
		var $iter5_nextval,$iter5_idx,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
	$iter5_iter = $m['_b32alphabet']['items']();
	if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
		$iter5_type = 0;
	} else {
		$iter5_iter = $iter5_iter['__iter__']();
		$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
	}
	$iter5_idx = 0;
	while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
		var $tupleassign3 = $p['__ass_unpack']($iter5_nextval, 2, null);
		$m['k'] = $tupleassign3[0];
		$m['v'] = $tupleassign3[1];
		$collcomp3['append']($p['tuple']([$m['v'], $m['k']]));
	}

	return $collcomp3;}());
	$m['b32encode'] = function(s) {
		var $iter6_type,c2,$iter6_iter,$iter6_nextval,$21,$20,$23,$22,$25,$24,encoded,$26,parts,quanta,$eq8,$iter6_idx,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool3,$iter6_array,$bool6,$bool7,$bool4,$bool5,c3,leftover,c1,$14,$15,$16,$17,$11,$12,$13,i,$18,$19,$len1;
		parts = $p['list']([]);
		var $tupleassign4 = $p['__ass_unpack']($p['divmod']((($len1=s) === null?0:
			(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
				(typeof $len1['__len__'] == 'function'?$len1['__len__']():
					(typeof $len1['length'] != 'undefined'?$len1['length']:
						$p['len']($len1))))), 5), 2, null);
		quanta = $tupleassign4[0];
		leftover = $tupleassign4[1];
		if ((($bool3=leftover) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			s += ''['ljust']((5)-(leftover), '\x00');
			quanta += 1;
		}
		$iter6_iter = $p['range'](quanta);
		if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
			$iter6_type = 0;
		} else {
			$iter6_iter = $iter6_iter['__iter__']();
			$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter6_idx = 0;
		while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
			i = $iter6_nextval;
			var $tupleassign5 = $p['__ass_unpack']($m['struct']['unpack']('!HHB', $p['__getslice'](s, (i)*(5), ((i)+(1))*(5))), 3, null);
			c1 = $tupleassign5[0];
			c2 = $tupleassign5[1];
			c3 = $tupleassign5[2];
			c2 += ((c1)&(1))<<(16);
			c3 += ((c2)&(3))<<(8);
			parts['extend']($p['list']([(typeof ($11=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $11['__array'][$12=(c1)>>(11)]) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__']((c1)>>(11))), (typeof ($13=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=((c1)>>(6))&(31)]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](((c1)>>(6))&(31))), (typeof ($15=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $15['__array'][$16=((c1)>>(1))&(31)]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](((c1)>>(1))&(31))), (typeof ($17=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $17['__array'][$18=(c2)>>(12)]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__']((c2)>>(12))), (typeof ($19=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=((c2)>>(7))&(31)]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](((c2)>>(7))&(31))), (typeof ($21=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $21['__array'][$22=((c2)>>(2))&(31)]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](((c2)>>(2))&(31))), (typeof ($23=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $23['__array'][$24=(c3)>>(5)]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__']((c3)>>(5))), (typeof ($25=$m['_b32tab'])['__array'] != 'undefined'?
				((typeof $25['__array'][$26=(c3)&(31)]) != 'undefined'?$25['__array'][$26]:
					$25['__getitem__']($26)):
					$25['__getitem__']((c3)&(31)))]));
		}
		encoded = $m['EMPTYSTRING']['join'](parts);
		if ((($bool4=(($eq1=leftover)===($eq2=1)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			return ($p['__getslice'](encoded, 0, -(6)))+('======');
		}
		else if ((($bool5=(($eq3=leftover)===($eq4=2)&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
						$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			return ($p['__getslice'](encoded, 0, -(4)))+('====');
		}
		else if ((($bool6=(($eq5=leftover)===($eq6=3)&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			return ($p['__getslice'](encoded, 0, -(3)))+('===');
		}
		else if ((($bool7=(($eq7=leftover)===($eq8=4)&&$eq7===null?true:
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
			return ($p['__getslice'](encoded, 0, -(1)))+('=');
		}
		return encoded;
	};
	$m['b32encode']['__name__'] = 'b32encode';

	$m['b32encode']['__bind_type__'] = 0;
	$m['b32encode']['__args__'] = [null,null,['s']];
	$m['b32decode'] = function(s, casefold, map01) {
		if (typeof casefold == 'undefined') casefold=arguments['callee']['__args__'][3][1];
		if (typeof map01 == 'undefined') map01=arguments['callee']['__args__'][4][1];
		var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$eq18,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,$28,val,$27,parts,quanta,$iter7_type,$eq9,$iter7_iter,$iter7_idx,leftover,$bool8,$bool9,acc,c,$cmp1,padchars,$iter7_nextval,$cmp2,shift,$iter7_array,$len4,$len2,$len3,last;
		var $tupleassign6 = $p['__ass_unpack']($p['divmod']((($len2=s) === null?0:
			(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
				(typeof $len2['__len__'] == 'function'?$len2['__len__']():
					(typeof $len2['length'] != 'undefined'?$len2['length']:
						$p['len']($len2))))), 8), 2, null);
		quanta = $tupleassign6[0];
		leftover = $tupleassign6[1];
		if ((($bool8=leftover) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			throw ($p['TypeError']('Incorrect padding'));
		}
		if ((($bool9=map01) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			s = $m['_translate'](s, $p['dict']([['0', 'O'], ['1', map01]]));
		}
		if ((($bool10=casefold) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			s = s['upper']();
		}
		padchars = 0;
		padchars = (($len3=s) === null?0:
			(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
				(typeof $len3['__len__'] == 'function'?$len3['__len__']():
					(typeof $len3['length'] != 'undefined'?$len3['length']:
						$p['len']($len3)))));
		s = s['rstrip']('=');
		padchars -= (($len4=s) === null?0:
			(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
				(typeof $len4['__len__'] == 'function'?$len4['__len__']():
					(typeof $len4['length'] != 'undefined'?$len4['length']:
						$p['len']($len4)))));
		parts = $p['list']([]);
		acc = 0;
		shift = 35;
		$iter7_iter = s;
		if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
			$iter7_type = 0;
		} else {
			$iter7_iter = $iter7_iter['__iter__']();
			$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter7_idx = 0;
		while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
			c = $iter7_nextval;
			val = $m['_b32rev']['get'](c);
			if ((($bool11=(val === null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				throw ($p['TypeError']('Non-base32 digit found'));
			}
			acc += ((typeof ($27=$m['_b32rev'])['__array'] != 'undefined'?
				((typeof $27['__array'][$28=c]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](c)))*(Math['pow'](2,shift));
			shift -= 5;
			if ((($bool12=((($cmp1=shift)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				parts['append']($m['binascii']['unhexlify']($p['sprintf']('%010x', acc)));
				acc = 0;
				shift = 35;
			}
		}
		last = $m['binascii']['unhexlify']($p['sprintf']('%010x', acc));
		if ((($bool13=(($eq9=padchars)===($eq10=0)&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
			last = '';
		}
		else if ((($bool14=(($eq11=padchars)===($eq12=1)&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			last = $p['__getslice'](last, 0, -(1));
		}
		else if ((($bool15=(($eq13=padchars)===($eq14=3)&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
			last = $p['__getslice'](last, 0, -(2));
		}
		else if ((($bool16=(($eq15=padchars)===($eq16=4)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
			last = $p['__getslice'](last, 0, -(3));
		}
		else if ((($bool17=(($eq17=padchars)===($eq18=6)&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			last = $p['__getslice'](last, 0, -(4));
		}
		else {
			throw ($p['TypeError']('Incorrect padding'));
		}
		parts['append'](last);
		return $m['EMPTYSTRING']['join'](parts);
	};
	$m['b32decode']['__name__'] = 'b32decode';

	$m['b32decode']['__bind_type__'] = 0;
	$m['b32decode']['__args__'] = [null,null,['s'],['casefold', false],['map01', null]];
	$m['b16encode'] = function(s) {

		return $m['binascii']['hexlify'](s)['upper']();
	};
	$m['b16encode']['__name__'] = 'b16encode';

	$m['b16encode']['__bind_type__'] = 0;
	$m['b16encode']['__args__'] = [null,null,['s']];
	$m['b16decode'] = function(s, casefold) {
		if (typeof casefold == 'undefined') casefold=arguments['callee']['__args__'][3][1];
		var $bool18,$bool19,r;
		if ((($bool18=casefold) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
			s = s['upper']();
		}
		r = RegExp('[^0-9A-F]');
		if ((($bool19=r['test'](s)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			throw ($p['TypeError']('Non-base16 digit found'));
		}
		return $m['binascii']['unhexlify'](s);
	};
	$m['b16decode']['__name__'] = 'b16decode';

	$m['b16decode']['__bind_type__'] = 0;
	$m['b16decode']['__args__'] = [null,null,['s'],['casefold', false]];
	$m['MAXLINESIZE'] = 76;
	$m['MAXBINSIZE'] = (Math['floor']($m['MAXLINESIZE']/4))*(3);
	$m['encode'] = function(input, output) {

		throw ($p['NotImplementedError']('encode: no file operations possible'));
		return null;
	};
	$m['encode']['__name__'] = 'encode';

	$m['encode']['__bind_type__'] = 0;
	$m['encode']['__args__'] = [null,null,['input'],['output']];
	$m['decode'] = function(input, output) {

		throw ($p['NotImplementedError']('decode: no file operations possible'));
		return null;
	};
	$m['decode']['__name__'] = 'decode';

	$m['decode']['__bind_type__'] = 0;
	$m['decode']['__args__'] = [null,null,['input'],['output']];
	$m['encodestring'] = function(s) {
		var $iter8_idx,i,$iter8_type,$iter8_array,pieces,$iter8_iter,$len5,$iter8_nextval,chunk;
		pieces = $p['list']([]);
		$iter8_iter = $p['range'](0, (($len5=s) === null?0:
			(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
				(typeof $len5['__len__'] == 'function'?$len5['__len__']():
					(typeof $len5['length'] != 'undefined'?$len5['length']:
						$p['len']($len5))))), $m['MAXBINSIZE']);
		if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
			$iter8_type = 0;
		} else {
			$iter8_iter = $iter8_iter['__iter__']();
			$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter8_idx = 0;
		while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
			i = $iter8_nextval;
			chunk = $p['__getslice'](s, i, (i)+($m['MAXBINSIZE']));
			pieces['append']($m['binascii']['b2a_base64'](chunk));
		}
		return ''['join'](pieces);
	};
	$m['encodestring']['__name__'] = 'encodestring';

	$m['encodestring']['__bind_type__'] = 0;
	$m['encodestring']['__args__'] = [null,null,['s']];
	$m['decodestring'] = function(s) {

		return $m['binascii']['a2b_base64'](s);
	};
	$m['decodestring']['__name__'] = 'decodestring';

	$m['decodestring']['__bind_type__'] = 0;
	$m['decodestring']['__args__'] = [null,null,['s']];
	$m['test'] = function() {
		var $eq27,$eq19,$30,$attr14,$29,$iter9_iter,$iter9_nextval,$iter9_idx,$bool25,$bool24,$pyjs_try_err,$bool21,$bool20,$bool23,$bool22,msg,getopt,$iter9_type,$attr9,$attr8,$and1,$and2,args,$attr5,$attr7,$attr6,sys,$eq20,$eq23,$eq22,$eq25,$eq24,func,$eq26,$attr15,$eq28,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,a,$eq21,$32,o,$31,$iter9_array,opts,$attr18;
		sys = $p['___import___']('sys', null);
		getopt = $p['___import___']('getopt', null);
		try {
			var $tupleassign7 = $p['__ass_unpack'](getopt['getopt']($p['__getslice'](sys['argv'], 1, null), 'deut'), 2, null);
			opts = $tupleassign7[0];
			args = $tupleassign7[1];
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == getopt['error']['__name__'])||$p['_isinstance']($pyjs_try_err,getopt['error'])) {
				msg = $pyjs_try_err;
				sys['stdout'] = sys['stderr'];
				sys['exit'](2);
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		func = $m['encode'];
		$iter9_iter = opts;
		if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
			$iter9_type = 0;
		} else {
			$iter9_iter = $iter9_iter['__iter__']();
			$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter9_idx = 0;
		while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
			var $tupleassign8 = $p['__ass_unpack']($iter9_nextval, 2, null);
			o = $tupleassign8[0];
			a = $tupleassign8[1];
			if ((($bool20=(($eq19=o)===($eq20='-e')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				func = $m['encode'];
			}
			if ((($bool21=(($eq21=o)===($eq22='-d')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				func = $m['decode'];
			}
			if ((($bool22=(($eq23=o)===($eq24='-u')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				func = $m['decode'];
			}
			if ((($bool23=(($eq25=o)===($eq26='-t')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				(typeof test1 == "undefined"?$m['test1']:test1)();
				return null;
			}
		}
		if ((($bool25=((($bool24=$and1=args) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
			false :
			(typeof $bool24=='object'?
				(typeof $bool24['__nonzero__']=='function'?
					$bool24['__nonzero__']() :
					(typeof $bool24['__len__']=='function'?
						($bool24['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq27=(typeof ($29=args)['__array'] != 'undefined'?
			((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
				$29['__getitem__']($30)):
				$29['__getitem__'](0)))===($eq28='-')&&$eq27===null?true:
			($eq27===null?false:($eq28===null?false:
				((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
					((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
						$eq27==$eq28))))):$and1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
			func($p['open']((typeof ($31=args)['__array'] != 'undefined'?
				((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](0)), 'rb'), sys['stdout']);
		}
		else {
			func(sys['stdin'], sys['stdout']);
		}
		return null;
	};
	$m['test']['__name__'] = 'test';

	$m['test']['__bind_type__'] = 0;
	$m['test']['__args__'] = [null,null];
	$m['test1'] = function() {
		var s2,s1,s0;
		s0 = 'Aladdin:open sesame';
		s1 = $m['encodestring'](s0);
		s2 = $m['decodestring'](s1);
		return null;
	};
	$m['test1']['__name__'] = 'test1';

	$m['test1']['__bind_type__'] = 0;
	$m['test1']['__args__'] = [null,null];
	if ((($bool26=(($eq29=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq30='__main__')&&$eq29===null?true:
		($eq29===null?false:($eq30===null?false:
			((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
				((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
					$eq29==$eq30)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
		$m['test']();
	}
	return this;
}; /* end base64 */


/* end module: base64 */


/*
PYJS_DEPS: ['struct', 'binascii', 'sys', 'getopt']
*/

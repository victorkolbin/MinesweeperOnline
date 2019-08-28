/* start module: binascii */
$pyjs['loaded_modules']['binascii'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['binascii']['__was_initialized__']) return $pyjs['loaded_modules']['binascii'];
	var $m = $pyjs['loaded_modules']['binascii'];
	$m['__repr__'] = function() { return '<module: binascii>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'binascii';
	$m['__name__'] = __mod_name__;


	$m['Error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Error', $p['tuple']($bases), $data);
	})();
	$m['Done'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Done', $p['tuple']($bases), $data);
	})();
	$m['Incomplete'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Incomplete', $p['tuple']($bases), $data);
	})();
	$m['a2b_uu'] = function(s) {
		var trailingdata,quadruplets_gen,$cmp1,$cmp2,$pyjs_try_err,$len1,length,$bool2,$bool1,$mod1,result,$bool4,$mod2,$len2,$bool5,$2,$1;
		if ((($bool2=!(($bool1=s) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1['__nonzero__']=='function'?
					$bool1['__nonzero__']() :
					(typeof $bool1['__len__']=='function'?
						($bool1['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return '';
		}
		length = (($mod1=($p['ord']((typeof ($1=s)['__array'] != 'undefined'?
			((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__'](0))))-(32))!=null && ($mod2=64)!=null && typeof $mod1=='string'?
			$p['sprintf']($mod1,$mod2):
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1));
		quadruplets_gen = function(s) {
			var $14,$15,$16,$17,$10,$8,$12,$13,$18,$bool3,$pyjs_try_err,iterlist,$9,$6,$7,$4,$5,$3,$11;
			iterlist = $p['list']([]);
			while ((($bool3=s) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				try {
					iterlist['append']($p['tuple']([$p['ord']((typeof ($3=s)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](0))), $p['ord']((typeof ($5=s)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=1]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](1))), $p['ord']((typeof ($7=s)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=2]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](2))), $p['ord']((typeof ($9=s)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=3]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](3)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s += '   ';
						iterlist['append']($p['tuple']([$p['ord']((typeof ($11=s)['__array'] != 'undefined'?
							((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](0))), $p['ord']((typeof ($13=s)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=1]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](1))), $p['ord']((typeof ($15=s)['__array'] != 'undefined'?
							((typeof $15['__array'][$16=2]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__'](2))), $p['ord']((typeof ($17=s)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=3]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](3)))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 4, null);
			}
			return iterlist;
		};
		quadruplets_gen['__name__'] = 'quadruplets_gen';

		quadruplets_gen['__bind_type__'] = 0;
		quadruplets_gen['__args__'] = [null,null,['s']];
		try {
			result = function(){
				var A,C,B,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,D,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = quadruplets_gen($p['__getslice'](s, 1, null)['rstrip']());
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 4, null);
				A = $tupleassign1[0];
				B = $tupleassign1[1];
				C = $tupleassign1[2];
				D = $tupleassign1[3];
				$collcomp1['append'](''['join']($p['list']([$p['chr']((((A)-(32))<<(2))|((((B)-(32))>>(4))&(3))), $p['chr'](((((B)-(32))&(15))<<(4))|((((C)-(32))>>(2))&(15))), $p['chr'](((((C)-(32))&(3))<<(6))|(((D)-(32))&(63)))])));
			}

	return $collcomp1;}();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				throw ($m['Error']('Illegal char'));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		result = ''['join'](result);
		trailingdata = $p['__getslice'](result, length, null);
		if ((($bool4=trailingdata['strip']('\x00')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			throw ($m['Error']('Trailing garbage'));
		}
		result = $p['__getslice'](result, 0, length);
		if ((($bool5=((($cmp1=(($len1=result) === null?0:
			(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
				(typeof $len1['__len__'] == 'function'?$len1['__len__']():
					(typeof $len1['length'] != 'undefined'?$len1['length']:
						$p['len']($len1))))))===($cmp2=length)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			result += ((length)-((($len2=result) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))))))*('\x00');
		}
		return result;
	};
	$m['a2b_uu']['__name__'] = 'a2b_uu';

	$m['a2b_uu']['__bind_type__'] = 0;
	$m['a2b_uu']['__args__'] = [null,null,['s']];
	$m['b2a_uu'] = function(s) {
		var $cmp4,$cmp3,length,$bool6,$len3,triples_gen,result;
		length = (($len3=s) === null?0:
			(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
				(typeof $len3['__len__'] == 'function'?$len3['__len__']():
					(typeof $len3['length'] != 'undefined'?$len3['length']:
						$p['len']($len3)))));
		if ((($bool6=((($cmp3=length)===($cmp4=45)?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			throw ($m['Error']('At most 45 bytes at once'));
		}
		triples_gen = function(s) {
			var $29,$28,$21,$20,$23,$22,$25,$19,$27,$24,$pyjs_try_err,$bool7,iterlist,$30,$26;
			iterlist = $p['list']([]);
			while ((($bool7=s) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				try {
					iterlist['append']($p['tuple']([$p['ord']((typeof ($19=s)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](0))), $p['ord']((typeof ($21=s)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=1]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](1))), $p['ord']((typeof ($23=s)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=2]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](2)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s += '\x00\x00';
						iterlist['append']($p['tuple']([$p['ord']((typeof ($25=s)['__array'] != 'undefined'?
							((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__'](0))), $p['ord']((typeof ($27=s)['__array'] != 'undefined'?
							((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__'](1))), $p['ord']((typeof ($29=s)['__array'] != 'undefined'?
							((typeof $29['__array'][$30=2]) != 'undefined'?$29['__array'][$30]:
								$29['__getitem__']($30)):
								$29['__getitem__'](2)))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		result = function(){
			var A,C,$iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,B,$iter2_array;
	$collcomp2 = $p['list']();
		$iter2_iter = triples_gen(s);
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 3, null);
			A = $tupleassign2[0];
			B = $tupleassign2[1];
			C = $tupleassign2[2];
			$collcomp2['append'](''['join']($p['list']([$p['chr']((32)+(((A)>>(2))&(63))), $p['chr']((32)+((((A)<<(4))|(((B)>>(4))&(15)))&(63))), $p['chr']((32)+((((B)<<(2))|(((C)>>(6))&(3)))&(63))), $p['chr']((32)+((C)&(63)))])));
		}

	return $collcomp2;}();
		return (($p['chr'](($p['ord'](' '))+((length)&(63))))+(''['join'](result)))+('\n');
	};
	$m['b2a_uu']['__name__'] = 'b2a_uu';

	$m['b2a_uu']['__bind_type__'] = 0;
	$m['b2a_uu']['__args__'] = [null,null,['s']];
	$m['table_a2b_base64'] = $p['dict']([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5], ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11], ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17], ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23], ['Y', 24], ['Z', 25], ['a', 26], ['b', 27], ['c', 28], ['d', 29], ['e', 30], ['f', 31], ['g', 32], ['h', 33], ['i', 34], ['j', 35], ['k', 36], ['l', 37], ['m', 38], ['n', 39], ['o', 40], ['p', 41], ['q', 42], ['r', 43], ['s', 44], ['t', 45], ['u', 46], ['v', 47], ['w', 48], ['x', 49], ['y', 50], ['z', 51], ['0', 52], ['1', 53], ['2', 54], ['3', 55], ['4', 56], ['5', 57], ['6', 58], ['7', 59], ['8', 60], ['9', 61], ['+', 62], ['/', 63], ['=', 0]]);
	$m['a2b_base64'] = function(s) {
		var $eq9,$bool18,$bool19,$bool12,leftchar,$bool14,$bool15,$bool16,$bool17,$or6,$iter4_type,$eq11,$eq10,$or1,$eq12,$eq13,$iter4_iter,res,$33,$bool21,$bool20,$bool23,$and1,$bool22,$eq7,quad_pos,next_c,$or5,$or4,$eq8,$bool13,next_valid_char,$or3,$or2,$eq2,$eq3,$and2,$eq1,$eq6,$cmp7,$eq4,$eq5,$cmp11,$cmp10,$cmp12,$bool8,$bool9,c,$eq14,i,$iter4_nextval,$34,$cmp9,$cmp8,$iter4_idx,leftbits,$iter4_array;
		if ((($bool9=!(($bool8=$p['isinstance'](s, $p['str'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
			false :
			(typeof $bool8=='object'?
				(typeof $bool8['__nonzero__']=='function'?
					$bool8['__nonzero__']() :
					(typeof $bool8['__len__']=='function'?
						($bool8['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			throw ($p['TypeError']($p['sprintf']('expected string or unicode, got %r', $p['tuple']([s]))));
		}
		s = s['rstrip']();
		next_valid_char = function(s, pos) {
			var $cmp5,c,$iter3_idx,i,$bool11,$iter3_nextval,$iter3_type,$32,$31,$bool10,$cmp6,$iter3_iter,$iter3_array,$len4;
			$iter3_iter = $p['range']((pos)+(1), (($len4=s) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4))))));
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				c = (typeof ($31=s)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=i]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](i));
				if ((($bool10=((($cmp5=c)===($cmp6='\x7f')?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					if ((($bool11=$m['table_a2b_base64']['has_key'](c)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						return c;
					}
				}
			}
			return null;
		};
		next_valid_char['__name__'] = 'next_valid_char';

		next_valid_char['__bind_type__'] = 0;
		next_valid_char['__args__'] = [null,null,['s'],['pos']];
		quad_pos = 0;
		leftbits = 0;
		leftchar = 0;
		res = $p['list']([]);
		$iter4_iter = $p['enumerate'](s);
		if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter['__iter__']();
			$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			var $tupleassign3 = $p['__ass_unpack']($iter4_nextval, 2, null);
			i = $tupleassign3[0];
			c = $tupleassign3[1];
			if ((($bool15=((($bool12=$or1=((($cmp7=c)===($cmp8='\x7f')?0:
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
					 true ) )?$or1:((($bool13=$or2=(($eq1=c)===($eq2='\n')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13['__nonzero__']=='function'?
						$bool13['__nonzero__']() :
						(typeof $bool13['__len__']=='function'?
							($bool13['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or2:((($bool14=$or3=(($eq3=c)===($eq4='\r')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14['__nonzero__']=='function'?
						$bool14['__nonzero__']() :
						(typeof $bool14['__len__']=='function'?
							($bool14['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:(($eq5=c)===($eq6=' ')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6))))))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				continue;
			}
			if ((($bool16=(($eq7=c)===($eq8='=')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool19=((($bool17=$or5=((($cmp9=quad_pos)===($cmp10=2)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:((($bool18=$and1=(($eq9=quad_pos)===($eq10=2)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18['__nonzero__']=='function'?
							$bool18['__nonzero__']() :
							(typeof $bool18['__len__']=='function'?
								($bool18['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($eq11=next_valid_char(s, i))===($eq12='=')&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
								$eq11==$eq12))))):$and1))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					continue;
				}
				else {
					leftbits = 0;
					break;
				}
			}
			if ((($bool21=!(($bool20=$m['table_a2b_base64']['has_key'](c)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20['__nonzero__']=='function'?
						$bool20['__nonzero__']() :
						(typeof $bool20['__len__']=='function'?
							($bool20['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				continue;
			}
			next_c = (typeof ($33=$m['table_a2b_base64'])['__array'] != 'undefined'?
				((typeof $33['__array'][$34=c]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](c));
			quad_pos = ((quad_pos)+(1))&(3);
			leftchar = ((leftchar)<<(6))|(next_c);
			leftbits += 6;
			if ((($bool22=((((($cmp11=leftbits)===($cmp12=8)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				leftbits -= 8;
				res['append'](((leftchar)>>(leftbits))&(255));
				leftchar &= ((1)<<(leftbits))-(1);
			}
		}
		if ((($bool23=!(($eq13=leftbits)===($eq14=0)&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
			throw ($m['Error']('Incorrect padding'));
		}
		return ''['join'](function(){
			var $iter5_nextval,i,$iter5_idx,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
		$iter5_iter = res;
		if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter['__iter__']();
			$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			$collcomp3['append']($p['chr'](i));
		}

	return $collcomp3;}());
	};
	$m['a2b_base64']['__name__'] = 'a2b_base64';

	$m['a2b_base64']['__bind_type__'] = 0;
	$m['a2b_base64']['__args__'] = [null,null,['s']];
	$m['table_b2a_base64'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	$m['b2a_base64'] = function(s) {
		var $eq18,$mod4,result,$mod3,$eq15,$eq16,$eq17,$bool25,snippet,$bool26,$69,$68,$65,$64,$67,$66,$61,$$final,$63,$62,final_length,a,$70,b,$60,$58,$59,length,$len5,triples_gen,$55,$56,$57;
		length = (($len5=s) === null?0:
			(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
				(typeof $len5['__len__'] == 'function'?$len5['__len__']():
					(typeof $len5['length'] != 'undefined'?$len5['length']:
						$p['len']($len5)))));
		final_length = (($mod3=length)!=null && ($mod4=3)!=null && typeof $mod3=='string'?
			$p['sprintf']($mod3,$mod4):
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3));
		triples_gen = function(s) {
			var $38,$39,$36,$37,$35,$bool24,$pyjs_try_err,iterlist,$43,$42,$41,$40,$46,$45,$44;
			iterlist = $p['list']([]);
			while ((($bool24=s) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				try {
					iterlist['append']($p['tuple']([$p['ord']((typeof ($35=s)['__array'] != 'undefined'?
						((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__'](0))), $p['ord']((typeof ($37=s)['__array'] != 'undefined'?
						((typeof $37['__array'][$38=1]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](1))), $p['ord']((typeof ($39=s)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=2]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](2)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s += '\x00\x00';
						iterlist['append']($p['tuple']([$p['ord']((typeof ($41=s)['__array'] != 'undefined'?
							((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__'](0))), $p['ord']((typeof ($43=s)['__array'] != 'undefined'?
							((typeof $43['__array'][$44=1]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](1))), $p['ord']((typeof ($45=s)['__array'] != 'undefined'?
							((typeof $45['__array'][$46=2]) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__'](2)))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		a = triples_gen($p['__getslice'](s, 0, (length)-(final_length)));
		result = function(){
			var A,C,B,$iter6_idx,$iter6_type,$54,$collcomp4,$49,$iter6_array,$48,$50,$51,$iter6_iter,$53,$47,$52,$iter6_nextval;
	$collcomp4 = $p['list']();
		$iter6_iter = a;
		if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
			$iter6_type = 0;
		} else {
			$iter6_iter = $iter6_iter['__iter__']();
			$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter6_idx = 0;
		while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
			var $tupleassign4 = $p['__ass_unpack']($iter6_nextval, 3, null);
			A = $tupleassign4[0];
			B = $tupleassign4[1];
			C = $tupleassign4[2];
			$collcomp4['append'](''['join']($p['list']([(typeof ($47=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $47['__array'][$48=((A)>>(2))&(63)]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](((A)>>(2))&(63))), (typeof ($49=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $49['__array'][$50=(((A)<<(4))|(((B)>>(4))&(15)))&(63)]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__']((((A)<<(4))|(((B)>>(4))&(15)))&(63))), (typeof ($51=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $51['__array'][$52=(((B)<<(2))|(((C)>>(6))&(3)))&(63)]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__']((((B)<<(2))|(((C)>>(6))&(3)))&(63))), (typeof ($53=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $53['__array'][$54=(C)&(63)]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__']((C)&(63)))])));
		}

	return $collcomp4;}();
		$$final = $p['__getslice'](s, (length)-(final_length), null);
		if ((($bool25=(($eq15=final_length)===($eq16=0)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
			snippet = '';
		}
		else if ((($bool26=(($eq17=final_length)===($eq18=1)&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
			a = $p['ord']((typeof ($55=$$final)['__array'] != 'undefined'?
				((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](0)));
			snippet = (((typeof ($57=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $57['__array'][$58=((a)>>(2))&(63)]) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__'](((a)>>(2))&(63))))+((typeof ($59=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $59['__array'][$60=((a)<<(4))&(63)]) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__'](((a)<<(4))&(63)))))+('==');
		}
		else {
			a = $p['ord']((typeof ($61=$$final)['__array'] != 'undefined'?
				((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
					$61['__getitem__']($62)):
					$61['__getitem__'](0)));
			b = $p['ord']((typeof ($63=$$final)['__array'] != 'undefined'?
				((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
					$63['__getitem__']($64)):
					$63['__getitem__'](1)));
			snippet = ((((typeof ($65=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $65['__array'][$66=((a)>>(2))&(63)]) != 'undefined'?$65['__array'][$66]:
					$65['__getitem__']($66)):
					$65['__getitem__'](((a)>>(2))&(63))))+((typeof ($67=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $67['__array'][$68=(((a)<<(4))|(((b)>>(4))&(15)))&(63)]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__']((((a)<<(4))|(((b)>>(4))&(15)))&(63)))))+((typeof ($69=$m['table_b2a_base64'])['__array'] != 'undefined'?
				((typeof $69['__array'][$70=((b)<<(2))&(63)]) != 'undefined'?$69['__array'][$70]:
					$69['__getitem__']($70)):
					$69['__getitem__'](((b)<<(2))&(63)))))+('=');
		}
		return ((''['join'](result))+(snippet))+('\n');
	};
	$m['b2a_base64']['__name__'] = 'b2a_base64';

	$m['b2a_base64']['__bind_type__'] = 0;
	$m['b2a_base64']['__args__'] = [null,null,['s']];
	$m['a2b_qp'] = function(s, header) {
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][3][1];
		var $79,$eq27,inp,$and5,$cmp20,$eq30,ch,$eq19,$82,$bool32,$bool33,$88,$and6,$bool30,$bool27,$bool31,$eq31,$90,$86,$bool29,$bool28,$bool40,$and8,$or7,$84,$89,$73,$87,$83,odata,$and3,$and4,$or8,$81,$80,$cmp15,$eq20,$eq23,$eq22,$eq25,$eq24,$cmp13,$eq26,$eq29,$eq28,$eq32,$and7,$cmp19,$cmp18,$72,$eq21,$71,$76,$77,$74,$cmp14,$85,$78,$75,$cmp17,$len6,$len7,$cmp16,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$len8,$len9;
		inp = 0;
		odata = $p['list']([]);
		while ((($bool27=((($cmp13=inp)===($cmp14=(($len6=s) === null?0:
			(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
				(typeof $len6['__len__'] == 'function'?$len6['__len__']():
					(typeof $len6['length'] != 'undefined'?$len6['length']:
						$p['len']($len6))))))?0:
			(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
				($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
				$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
			if ((($bool28=(($eq19=(typeof ($71=s)['__array'] != 'undefined'?
				((typeof $71['__array'][$72=inp]) != 'undefined'?$71['__array'][$72]:
					$71['__getitem__']($72)):
					$71['__getitem__'](inp)))===($eq20='=')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				inp += 1;
				if ((($bool29=((((($cmp15=inp)===($cmp16=(($len7=s) === null?0:
					(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'?$len7['length']:
								$p['len']($len7))))))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					break;
				}
				if ((($bool31=((($bool30=$or7=(($eq21=(typeof ($73=s)['__array'] != 'undefined'?
					((typeof $73['__array'][$74=inp]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__'](inp)))===($eq22='\n')&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30['__nonzero__']=='function'?
							$bool30['__nonzero__']() :
							(typeof $bool30['__len__']=='function'?
								($bool30['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:(($eq23=(typeof ($75=s)['__array'] != 'undefined'?
					((typeof $75['__array'][$76=inp]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__'](inp)))===($eq24='\r')&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
								$eq23==$eq24))))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					if ((($bool32=!(($eq25=(typeof ($77=s)['__array'] != 'undefined'?
						((typeof $77['__array'][$78=inp]) != 'undefined'?$77['__array'][$78]:
							$77['__getitem__']($78)):
							$77['__getitem__'](inp)))===($eq26='\n')&&$eq25===null?true:
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
						while ((($bool34=((($bool33=$and3=((($cmp17=inp)===($cmp18=(($len8=s) === null?0:
							(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
								(typeof $len8['__len__'] == 'function'?$len8['__len__']():
									(typeof $len8['length'] != 'undefined'?$len8['length']:
										$p['len']($len8))))))?0:
							(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
								($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
								$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
							false :
							(typeof $bool33=='object'?
								(typeof $bool33['__nonzero__']=='function'?
									$bool33['__nonzero__']() :
									(typeof $bool33['__len__']=='function'?
										($bool33['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($eq27=(typeof ($79=s)['__array'] != 'undefined'?
							((typeof $79['__array'][$80=inp]) != 'undefined'?$79['__array'][$80]:
								$79['__getitem__']($80)):
								$79['__getitem__'](inp)))===($eq28='\n')&&$eq27===null?true:
							($eq27===null?false:($eq28===null?false:
								((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
									((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
										$eq27==$eq28))))):$and3)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
							inp += 1;
						}
					}
					if ((($bool35=((($cmp19=inp)===($cmp20=(($len9=s) === null?0:
						(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
							(typeof $len9['__len__'] == 'function'?$len9['__len__']():
								(typeof $len9['length'] != 'undefined'?$len9['length']:
									$p['len']($len9))))))?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
						inp += 1;
					}
				}
				else if ((($bool36=(($eq29=(typeof ($81=s)['__array'] != 'undefined'?
					((typeof $81['__array'][$82=inp]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](inp)))===($eq30='=')&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					odata['append']('=');
					inp += 1;
				}
				else if ((($bool38=((($bool37=$and5=(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__']((typeof ($83=s)['__array'] != 'undefined'?
					((typeof $83['__array'][$84=inp]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__'](inp)))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__']((typeof ($85=s)['__array'] != 'undefined'?
					((typeof $85['__array'][$86=(inp)+(1)]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__']((inp)+(1)))):$and5)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					ch = $p['chr']($p['float_int']($p['__getslice'](s, inp, (inp)+(2)), 16));
					inp += 2;
					odata['append'](ch);
				}
				else {
					odata['append']('=');
				}
			}
			else if ((($bool40=((($bool39=$and7=header) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39['__nonzero__']=='function'?
						$bool39['__nonzero__']() :
						(typeof $bool39['__len__']=='function'?
							($bool39['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq31=(typeof ($87=s)['__array'] != 'undefined'?
				((typeof $87['__array'][$88=inp]) != 'undefined'?$87['__array'][$88]:
					$87['__getitem__']($88)):
					$87['__getitem__'](inp)))===($eq32='_')&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32))))):$and7)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				odata['append'](' ');
				inp += 1;
			}
			else {
				odata['append']((typeof ($89=s)['__array'] != 'undefined'?
					((typeof $89['__array'][$90=inp]) != 'undefined'?$89['__array'][$90]:
						$89['__getitem__']($90)):
						$89['__getitem__'](inp)));
				inp += 1;
			}
		}
		return ''['join'](odata);
	};
	$m['a2b_qp']['__name__'] = 'a2b_qp';

	$m['a2b_qp']['__bind_type__'] = 0;
	$m['a2b_qp']['__args__'] = [null,null,['s'],['header', false]];
	$m['b2a_qp'] = function(data, quotetabs, istext, header) {
		if (typeof quotetabs == 'undefined') quotetabs=arguments['callee']['__args__'][3][1];
		if (typeof istext == 'undefined') istext=arguments['callee']['__args__'][4][1];
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][5][1];
		var $eq54,$eq55,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$eq53,$cmp28,$bool50,$eq58,$eq59,$99,lf,$bool82,$bool81,$bool80,$bool84,$cmp33,$and31,$or28,$and32,$or24,$or25,$or26,$and33,$or20,$or21,$or22,$or23,$and9,$105,$bool59,$and38,$and39,$cmp38,$and34,$cmp36,$cmp35,$cmp34,$and30,$cmp32,$cmp31,$cmp30,$cmp21,$eq56,$eq57,$and35,$eq50,$eq51,$eq52,$cmp27,$eq33,$and29,$and28,$eq36,$eq37,$eq34,$eq35,$and23,$and22,$eq38,$eq39,$and27,$and26,$and25,$and24,$and36,$and37,linelen,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,$bool49,$bool48,crlf,$len10,$len11,$len12,$len13,$len14,$len15,$eq81,$eq80,$bool54,$bool55,$bool56,$bool57,$98,$bool51,$bool52,$bool53,$94,$95,$96,$97,$bool58,$91,$92,$93,$bool83,$bool61,$bool60,$bool63,$bool62,$bool65,$bool64,$bool67,$bool66,$bool69,$bool68,odata,c,$eq82,$or27,$eq69,$eq68,$eq65,$eq64,$eq67,$eq66,$eq61,$eq60,$eq63,$eq62,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,$bool78,$bool79,$bool76,$bool77,$bool74,$bool75,inp,$bool73,$bool70,$bool71,ch,$and21,$and20,$eq78,$eq79,$eq76,$eq77,$eq74,$eq75,$eq72,$eq73,$eq70,$eq71,$101,$100,$103,$102,MAXLINESIZE,$104,$107,$106,$108,$or9,$and12,$and13,$and10,$and11,$and16,$and17,$and14,$and15,$and18,$and19,$eq49,$eq48,$eq43,$eq42,$eq41,$eq40,$eq47,$eq46,$eq45,$eq44,$cmp37,$cmp29,$bool72;
		MAXLINESIZE = 76;
		lf = data['find']('\n');
		crlf = ((($bool41=$and9=((($cmp21=lf)===($cmp22=0)?0:
			(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
				($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
				$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
			false :
			(typeof $bool41=='object'?
				(typeof $bool41['__nonzero__']=='function'?
					$bool41['__nonzero__']() :
					(typeof $bool41['__len__']=='function'?
						($bool41['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($eq33=(typeof ($91=data)['__array'] != 'undefined'?
			((typeof $91['__array'][$92=(lf)-(1)]) != 'undefined'?$91['__array'][$92]:
				$91['__getitem__']($92)):
				$91['__getitem__']((lf)-(1))))===($eq34='\r')&&$eq33===null?true:
			($eq33===null?false:($eq34===null?false:
				((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
					((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
						$eq33==$eq34))))):$and9);
		inp = 0;
		linelen = 0;
		odata = $p['list']([]);
		while ((($bool42=((($cmp23=inp)===($cmp24=(($len10=data) === null?0:
			(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
				(typeof $len10['__len__'] == 'function'?$len10['__len__']():
					(typeof $len10['length'] != 'undefined'?$len10['length']:
						$p['len']($len10))))))?0:
			(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
				($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
				$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
			c = (typeof ($93=data)['__array'] != 'undefined'?
				((typeof $93['__array'][$94=inp]) != 'undefined'?$93['__array'][$94]:
					$93['__getitem__']($94)):
					$93['__getitem__'](inp));
			if ((($bool66=((($bool53=$or16=((($cmp25=c)===($cmp26='~')?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
				false :
				(typeof $bool53=='object'?
					(typeof $bool53['__nonzero__']=='function'?
						$bool53['__nonzero__']() :
						(typeof $bool53['__len__']=='function'?
							($bool53['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or16:((($bool54=$or17=(($eq35=c)===($eq36='=')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54['__nonzero__']=='function'?
						$bool54['__nonzero__']() :
						(typeof $bool54['__len__']=='function'?
							($bool54['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or17:((($bool55=$or18=((($bool43=$and11=header) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43['__nonzero__']=='function'?
						$bool43['__nonzero__']() :
						(typeof $bool43['__len__']=='function'?
							($bool43['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq37=c)===($eq38='_')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
							$eq37==$eq38))))):$and11)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
				false :
				(typeof $bool55=='object'?
					(typeof $bool55['__nonzero__']=='function'?
						$bool55['__nonzero__']() :
						(typeof $bool55['__len__']=='function'?
							($bool55['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or18:((($bool56=$or19=((($bool44=$and13=(($eq39=c)===($eq40='.')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
				false :
				(typeof $bool44=='object'?
					(typeof $bool44['__nonzero__']=='function'?
						$bool44['__nonzero__']() :
						(typeof $bool44['__len__']=='function'?
							($bool44['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool45=$and14=(($eq41=linelen)===($eq42=0)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
				false :
				(typeof $bool45=='object'?
					(typeof $bool45['__nonzero__']=='function'?
						$bool45['__nonzero__']() :
						(typeof $bool45['__len__']=='function'?
							($bool45['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool46=$or9=(($eq43=inp)===($eq44=(($len11=data) === null?0:
				(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
					(typeof $len11['__len__'] == 'function'?$len11['__len__']():
						(typeof $len11['length'] != 'undefined'?$len11['length']:
							$p['len']($len11))))))&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
				false :
				(typeof $bool46=='object'?
					(typeof $bool46['__nonzero__']=='function'?
						$bool46['__nonzero__']() :
						(typeof $bool46['__len__']=='function'?
							($bool46['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:((($bool47=$or10=(($eq45=(typeof ($95=data)['__array'] != 'undefined'?
				((typeof $95['__array'][$96=(inp)+(1)]) != 'undefined'?$95['__array'][$96]:
					$95['__getitem__']($96)):
					$95['__getitem__']((inp)+(1))))===($eq46='\n')&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47['__nonzero__']=='function'?
						$bool47['__nonzero__']() :
						(typeof $bool47['__len__']=='function'?
							($bool47['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or10:(($eq47=(typeof ($97=data)['__array'] != 'undefined'?
				((typeof $97['__array'][$98=(inp)+(1)]) != 'undefined'?$97['__array'][$98]:
					$97['__getitem__']($98)):
					$97['__getitem__']((inp)+(1))))===($eq48='\r')&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
							$eq47==$eq48))))))):$and14):$and13)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56['__nonzero__']=='function'?
						$bool56['__nonzero__']() :
						(typeof $bool56['__len__']=='function'?
							($bool56['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:((($bool57=$or20=((($bool49=$and16=!(($bool48=istext) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
				false :
				(typeof $bool48=='object'?
					(typeof $bool48['__nonzero__']=='function'?
						$bool48['__nonzero__']() :
						(typeof $bool48['__len__']=='function'?
							($bool48['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49['__nonzero__']=='function'?
						$bool49['__nonzero__']() :
						(typeof $bool49['__len__']=='function'?
							($bool49['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool50=$or12=(($eq49=c)===($eq50='\r')&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
				false :
				(typeof $bool50=='object'?
					(typeof $bool50['__nonzero__']=='function'?
						$bool50['__nonzero__']() :
						(typeof $bool50['__len__']=='function'?
							($bool50['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or12:(($eq51=c)===($eq52='\n')&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
							$eq51==$eq52)))))):$and16)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57['__nonzero__']=='function'?
						$bool57['__nonzero__']() :
						(typeof $bool57['__len__']=='function'?
							($bool57['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or20:((($bool58=$or21=((($bool52=$and18=((($bool51=$or14=(($eq53=c)===($eq54='\t')&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
				false :
				(typeof $bool51=='object'?
					(typeof $bool51['__nonzero__']=='function'?
						$bool51['__nonzero__']() :
						(typeof $bool51['__len__']=='function'?
							($bool51['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or14:(($eq55=c)===($eq56=' ')&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55['__cmp__']=='function'?$eq55['__cmp__']($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56['__cmp__']=='function'?$eq56['__cmp__']($eq55) === 0:
							$eq55==$eq56))))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
				false :
				(typeof $bool52=='object'?
					(typeof $bool52['__nonzero__']=='function'?
						$bool52['__nonzero__']() :
						(typeof $bool52['__len__']=='function'?
							($bool52['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq57=(inp)+(1))===($eq58=(($len12=data) === null?0:
				(typeof $len12['__array'] != 'undefined' ? $len12['__array']['length']:
					(typeof $len12['__len__'] == 'function'?$len12['__len__']():
						(typeof $len12['length'] != 'undefined'?$len12['length']:
							$p['len']($len12))))))&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57['__cmp__']=='function'?$eq57['__cmp__']($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58['__cmp__']=='function'?$eq58['__cmp__']($eq57) === 0:
							$eq57==$eq58))))):$and18)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
				false :
				(typeof $bool58=='object'?
					(typeof $bool58['__nonzero__']=='function'?
						$bool58['__nonzero__']() :
						(typeof $bool58['__len__']=='function'?
							($bool58['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or21:((($bool59=$and20=((($cmp27=c)===($cmp28=' ')?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) < 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
				false :
				(typeof $bool59=='object'?
					(typeof $bool59['__nonzero__']=='function'?
						$bool59['__nonzero__']() :
						(typeof $bool59['__len__']=='function'?
							($bool59['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool60=$and21=!(($eq59=c)===($eq60='\r')&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59['__cmp__']=='function'?$eq59['__cmp__']($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60['__cmp__']=='function'?$eq60['__cmp__']($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60['__nonzero__']=='function'?
						$bool60['__nonzero__']() :
						(typeof $bool60['__len__']=='function'?
							($bool60['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool61=$and22=!(($eq61=c)===($eq62='\n')&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61['__cmp__']=='function'?$eq61['__cmp__']($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62['__cmp__']=='function'?$eq62['__cmp__']($eq61) === 0:
							$eq61==$eq62)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61['__nonzero__']=='function'?
						$bool61['__nonzero__']() :
						(typeof $bool61['__len__']=='function'?
							($bool61['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool62=$or23=quotetabs) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
				false :
				(typeof $bool62=='object'?
					(typeof $bool62['__nonzero__']=='function'?
						$bool62['__nonzero__']() :
						(typeof $bool62['__len__']=='function'?
							($bool62['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or23:((($bool64=$and24=!(($bool63=quotetabs) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63['__nonzero__']=='function'?
						$bool63['__nonzero__']() :
						(typeof $bool63['__len__']=='function'?
							($bool63['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64['__nonzero__']=='function'?
						$bool64['__nonzero__']() :
						(typeof $bool64['__len__']=='function'?
							($bool64['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool65=$and26=!(($eq63=c)===($eq64='\t')&&$eq63===null?true:
				($eq63===null?false:($eq64===null?false:
					((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63['__cmp__']=='function'?$eq63['__cmp__']($eq64) === 0:
						((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64['__cmp__']=='function'?$eq64['__cmp__']($eq63) === 0:
							$eq63==$eq64)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65['__nonzero__']=='function'?
						$bool65['__nonzero__']() :
						(typeof $bool65['__len__']=='function'?
							($bool65['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($eq65=c)===($eq66=' ')&&$eq65===null?true:
				($eq65===null?false:($eq66===null?false:
					((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65['__cmp__']=='function'?$eq65['__cmp__']($eq66) === 0:
						((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66['__cmp__']=='function'?$eq66['__cmp__']($eq65) === 0:
							$eq65==$eq66))))):$and26):$and24)):$and22):$and21):$and20)))))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
				linelen += 3;
				if ((($bool67=((((($cmp29=linelen)===($cmp30=MAXLINESIZE)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))))|1) == 1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
					odata['append']('=');
					if ((($bool68=crlf) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
						odata['append']('\r');
					}
					odata['append']('\n');
					linelen = 3;
				}
				odata['append'](('=')+((typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)($p['ord'](c))));
				inp += 1;
			}
			else {
				if ((($bool73=((($bool69=$and28=istext) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69['__nonzero__']=='function'?
							$bool69['__nonzero__']() :
							(typeof $bool69['__len__']=='function'?
								($bool69['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool70=$or25=(($eq67=c)===($eq68='\n')&&$eq67===null?true:
					($eq67===null?false:($eq68===null?false:
						((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67['__cmp__']=='function'?$eq67['__cmp__']($eq68) === 0:
							((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68['__cmp__']=='function'?$eq68['__cmp__']($eq67) === 0:
								$eq67==$eq68)))))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70['__nonzero__']=='function'?
							$bool70['__nonzero__']() :
							(typeof $bool70['__len__']=='function'?
								($bool70['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or25:((($bool71=$and30=((($cmp31=(inp)+(1))===($cmp32=(($len13=data) === null?0:
					(typeof $len13['__array'] != 'undefined' ? $len13['__array']['length']:
						(typeof $len13['__len__'] == 'function'?$len13['__len__']():
							(typeof $len13['length'] != 'undefined'?$len13['length']:
								$p['len']($len13))))))?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71['__nonzero__']=='function'?
							$bool71['__nonzero__']() :
							(typeof $bool71['__len__']=='function'?
								($bool71['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool72=$and31=(($eq69=c)===($eq70='\r')&&$eq69===null?true:
					($eq69===null?false:($eq70===null?false:
						((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69['__cmp__']=='function'?$eq69['__cmp__']($eq70) === 0:
							((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70['__cmp__']=='function'?$eq70['__cmp__']($eq69) === 0:
								$eq69==$eq70)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72['__nonzero__']=='function'?
							$bool72['__nonzero__']() :
							(typeof $bool72['__len__']=='function'?
								($bool72['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq71=(typeof ($99=data)['__array'] != 'undefined'?
					((typeof $99['__array'][$100=(inp)+(1)]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__']((inp)+(1))))===($eq72='\n')&&$eq71===null?true:
					($eq71===null?false:($eq72===null?false:
						((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71['__cmp__']=='function'?$eq71['__cmp__']($eq72) === 0:
							((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72['__cmp__']=='function'?$eq72['__cmp__']($eq71) === 0:
								$eq71==$eq72))))):$and31):$and30)):$and28)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
						false :
						(typeof $bool73=='object'?
							(typeof $bool73['__nonzero__']=='function'?
								$bool73['__nonzero__']() :
								(typeof $bool73['__len__']=='function'?
									($bool73['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					linelen = 0;
					if ((($bool76=((($bool74=$and33=((($cmp33=(($len14=odata) === null?0:
						(typeof $len14['__array'] != 'undefined' ? $len14['__array']['length']:
							(typeof $len14['__len__'] == 'function'?$len14['__len__']():
								(typeof $len14['length'] != 'undefined'?$len14['length']:
									$p['len']($len14))))))===($cmp34=0)?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
						false :
						(typeof $bool74=='object'?
							(typeof $bool74['__nonzero__']=='function'?
								$bool74['__nonzero__']() :
								(typeof $bool74['__len__']=='function'?
									($bool74['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool75=$or27=(($eq73=(typeof ($101=odata)['__array'] != 'undefined'?
						((typeof $101['__array'][$102=-(1)]) != 'undefined'?$101['__array'][$102]:
							$101['__getitem__']($102)):
							$101['__getitem__'](-(1))))===($eq74=' ')&&$eq73===null?true:
						($eq73===null?false:($eq74===null?false:
							((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73['__cmp__']=='function'?$eq73['__cmp__']($eq74) === 0:
								((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74['__cmp__']=='function'?$eq74['__cmp__']($eq73) === 0:
									$eq73==$eq74)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75['__nonzero__']=='function'?
								$bool75['__nonzero__']() :
								(typeof $bool75['__len__']=='function'?
									($bool75['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or27:(($eq75=(typeof ($103=odata)['__array'] != 'undefined'?
						((typeof $103['__array'][$104=-(1)]) != 'undefined'?$103['__array'][$104]:
							$103['__getitem__']($104)):
							$103['__getitem__'](-(1))))===($eq76='\t')&&$eq75===null?true:
						($eq75===null?false:($eq76===null?false:
							((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75['__cmp__']=='function'?$eq75['__cmp__']($eq76) === 0:
								((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76['__cmp__']=='function'?$eq76['__cmp__']($eq75) === 0:
									$eq75==$eq76)))))):$and33)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
						ch = $p['ord']((typeof ($105=odata)['__array'] != 'undefined'?
							((typeof $105['__array'][$106=-(1)]) != 'undefined'?$105['__array'][$106]:
								$105['__getitem__']($106)):
								$105['__getitem__'](-(1))));
						odata['__setitem__'](-(1), '=');
						odata['append']((typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)(ch));
					}
					if ((($bool77=crlf) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
						odata['append']('\r');
					}
					odata['append']('\n');
					if ((($bool78=(($eq77=c)===($eq78='\r')&&$eq77===null?true:
						($eq77===null?false:($eq78===null?false:
							((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77['__cmp__']=='function'?$eq77['__cmp__']($eq78) === 0:
								((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78['__cmp__']=='function'?$eq78['__cmp__']($eq77) === 0:
									$eq77==$eq78)))))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
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
						inp += 2;
					}
					else {
						inp += 1;
					}
				}
				else {
					if ((($bool81=((($bool79=$and35=((($cmp35=(inp)+(1))===($cmp36=(($len15=data) === null?0:
						(typeof $len15['__array'] != 'undefined' ? $len15['__array']['length']:
							(typeof $len15['__len__'] == 'function'?$len15['__len__']():
								(typeof $len15['length'] != 'undefined'?$len15['length']:
									$p['len']($len15))))))?0:
						(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
							($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
							$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79['__nonzero__']=='function'?
								$bool79['__nonzero__']() :
								(typeof $bool79['__len__']=='function'?
									($bool79['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool80=$and36=!(($eq79=(typeof ($107=data)['__array'] != 'undefined'?
						((typeof $107['__array'][$108=(inp)+(1)]) != 'undefined'?$107['__array'][$108]:
							$107['__getitem__']($108)):
							$107['__getitem__']((inp)+(1))))===($eq80='\n')&&$eq79===null?true:
						($eq79===null?false:($eq80===null?false:
							((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79['__cmp__']=='function'?$eq79['__cmp__']($eq80) === 0:
								((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80['__cmp__']=='function'?$eq80['__cmp__']($eq79) === 0:
									$eq79==$eq80)))))) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80['__nonzero__']=='function'?
								$bool80['__nonzero__']() :
								(typeof $bool80['__len__']=='function'?
									($bool80['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((((($cmp37=(linelen)+(1))===($cmp38=MAXLINESIZE)?0:
						(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
							($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
							$p['cmp']($cmp37, $cmp38))))|1) == 1):$and36):$and35)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
							false :
							(typeof $bool81=='object'?
								(typeof $bool81['__nonzero__']=='function'?
									$bool81['__nonzero__']() :
									(typeof $bool81['__len__']=='function'?
										($bool81['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						odata['append']('=');
						if ((($bool82=crlf) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
								false :
								(typeof $bool82=='object'?
									(typeof $bool82['__nonzero__']=='function'?
										$bool82['__nonzero__']() :
										(typeof $bool82['__len__']=='function'?
											($bool82['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							odata['append']('\r');
						}
						odata['append']('\n');
						linelen = 0;
					}
					linelen += 1;
					if ((($bool84=((($bool83=$and38=header) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83['__nonzero__']=='function'?
								$bool83['__nonzero__']() :
								(typeof $bool83['__len__']=='function'?
									($bool83['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq81=c)===($eq82=' ')&&$eq81===null?true:
						($eq81===null?false:($eq82===null?false:
							((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81['__cmp__']=='function'?$eq81['__cmp__']($eq82) === 0:
								((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82['__cmp__']=='function'?$eq82['__cmp__']($eq81) === 0:
									$eq81==$eq82))))):$and38)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
							false :
							(typeof $bool84=='object'?
								(typeof $bool84['__nonzero__']=='function'?
									$bool84['__nonzero__']() :
									(typeof $bool84['__len__']=='function'?
										($bool84['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c = '_';
					}
					odata['append'](c);
					inp += 1;
				}
			}
		}
		return ''['join'](odata);
	};
	$m['b2a_qp']['__name__'] = 'b2a_qp';

	$m['b2a_qp']['__bind_type__'] = 0;
	$m['b2a_qp']['__args__'] = [null,null,['data'],['quotetabs', false],['istext', true],['header', false]];
	$m['hex_numbers'] = '0123456789ABCDEF';
	$m['hex'] = function(n) {
		var arr,$eq84,$eq83,$bool86,$bool85,$109,$iter7_iter,hex_gen,nibble,$iter7_type,$cmp39,$iter7_idx,$110,$cmp40,sign,$iter7_nextval,$iter7_array;
		if ((($bool85=(($eq83=n)===($eq84=0)&&$eq83===null?true:
			($eq83===null?false:($eq84===null?false:
				((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83['__cmp__']=='function'?$eq83['__cmp__']($eq84) === 0:
					((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84['__cmp__']=='function'?$eq84['__cmp__']($eq83) === 0:
						$eq83==$eq84)))))) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85['__nonzero__']=='function'?
						$bool85['__nonzero__']() :
						(typeof $bool85['__len__']=='function'?
							($bool85['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return '0';
		}
		if ((($bool86=((($cmp39=n)===($cmp40=0)?0:
			(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
				($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
				$p['cmp']($cmp39, $cmp40))) == -1)) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
				false :
				(typeof $bool86=='object'?
					(typeof $bool86['__nonzero__']=='function'?
						$bool86['__nonzero__']() :
						(typeof $bool86['__len__']=='function'?
							($bool86['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			n = -(n);
			sign = '-';
		}
		else {
			sign = '';
		}
		arr = $p['list']([]);
		hex_gen = function(n) {
			var $mod5,$mod6,$bool87,iterlist;
			iterlist = $p['list']([]);
			while ((($bool87=n) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87['__nonzero__']=='function'?
							$bool87['__nonzero__']() :
							(typeof $bool87['__len__']=='function'?
								($bool87['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				iterlist['append']((($mod5=n)!=null && ($mod6=16)!=null && typeof $mod5=='string'?
					$p['sprintf']($mod5,$mod6):
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5)));
				n = (n)/(16);
			}
			return iterlist;
		};
		hex_gen['__name__'] = 'hex_gen';

		hex_gen['__bind_type__'] = 0;
		hex_gen['__args__'] = [null,null,['n']];
		$iter7_iter = hex_gen(n);
		if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
			$iter7_type = 0;
		} else {
			$iter7_iter = $iter7_iter['__iter__']();
			$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter7_idx = 0;
		while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
			nibble = $iter7_nextval;
			arr = ($p['list']([(typeof ($109=$m['hex_numbers'])['__array'] != 'undefined'?
				((typeof $109['__array'][$110=nibble]) != 'undefined'?$109['__array'][$110]:
					$109['__getitem__']($110)):
					$109['__getitem__'](nibble))]))+(arr);
		}
		return (sign)+(''['join'](arr));
	};
	$m['hex']['__name__'] = 'hex';

	$m['hex']['__bind_type__'] = 0;
	$m['hex']['__args__'] = [null,null,['n']];
	$m['two_hex_digits'] = function(n) {
		var $114,$112,$113,$111,$mod7,$mod8;
		return ((typeof ($111=$m['hex_numbers'])['__array'] != 'undefined'?
			((typeof $111['__array'][$112=(n)/(16)]) != 'undefined'?$111['__array'][$112]:
				$111['__getitem__']($112)):
				$111['__getitem__']((n)/(16))))+((typeof ($113=$m['hex_numbers'])['__array'] != 'undefined'?
			((typeof $113['__array'][$114=(($mod7=n)!=null && ($mod8=16)!=null && typeof $mod7=='string'?
			$p['sprintf']($mod7,$mod8):
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7))]) != 'undefined'?$113['__array'][$114]:
				$113['__getitem__']($114)):
				$113['__getitem__']((($mod7=n)!=null && ($mod8=16)!=null && typeof $mod7=='string'?
			$p['sprintf']($mod7,$mod8):
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7)))));
	};
	$m['two_hex_digits']['__name__'] = 'two_hex_digits';

	$m['two_hex_digits']['__bind_type__'] = 0;
	$m['two_hex_digits']['__args__'] = [null,null,['n']];
	$m['strhex_to_int'] = function(s) {
		var c,$iter8_idx,i,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;
		i = 0;
		$iter8_iter = s;
		if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
			$iter8_type = 0;
		} else {
			$iter8_iter = $iter8_iter['__iter__']();
			$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter8_idx = 0;
		while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
			c = $iter8_nextval;
			i = ((i)*(16))+($m['hex_numbers']['index'](c));
		}
		return i;
	};
	$m['strhex_to_int']['__name__'] = 'strhex_to_int';

	$m['strhex_to_int']['__bind_type__'] = 0;
	$m['strhex_to_int']['__args__'] = [null,null,['s']];
	$m['hqx_encoding'] = '!"#$%&\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr';
	$m['DONE'] = 127;
	$m['SKIP'] = 126;
	$m['FAIL'] = 125;
	$m['table_a2b_hqx'] = $p['list']([$m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, $m['FAIL'], $m['FAIL'], 13, 14, 15, 16, 17, 18, 19, $m['FAIL'], 20, 21, $m['DONE'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, $m['FAIL'], 37, 38, 39, 40, 41, 42, 43, $m['FAIL'], 44, 45, 46, 47, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 48, 49, 50, 51, 52, 53, 54, $m['FAIL'], 55, 56, 57, 58, 59, 60, $m['FAIL'], $m['FAIL'], 61, 62, 63, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL']]);
	$m['a2b_hqx'] = function(s) {
		var $117,$iter10_nextval,$118,quadruples_gen,$138,$139,$140,done,result,$130,$131,$iter10_iter,$133,$134,$121,$136,$137,$eq93,$eq94,$eq95,$eq96,$eq97,$eq98,$iter10_idx,$135,snippet,$pyjs_try_err,iterlist,$129,$128,$123,$122,$120,$119,$127,$126,$125,$124,$bool92,$bool93,$bool94,$len17,$iter10_array,length,$iter10_type,$132;
		result = $p['list']([]);
		quadruples_gen = function(s) {
			var $116,$115,$eq90,$eq91,$eq92,$iter9_iter,res,$bool89,$bool88,$iter9_nextval,$iter9_idx,iterlist,$iter9_type,$eq87,$bool91,$eq85,$bool90,$eq86,c,$len16,$eq89,$eq88,t,$iter9_array;
			t = $p['list']([]);
			iterlist = $p['list']([]);
			$iter9_iter = s;
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				c = $iter9_nextval;
				res = (typeof ($115=$m['table_a2b_hqx'])['__array'] != 'undefined'?
					((typeof $115['__array'][$116=$p['ord'](c)]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__']($p['ord'](c)));
				if ((($bool88=(($eq85=res)===($eq86=$m['SKIP'])&&$eq85===null?true:
					($eq85===null?false:($eq86===null?false:
						((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85['__cmp__']=='function'?$eq85['__cmp__']($eq86) === 0:
							((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86['__cmp__']=='function'?$eq86['__cmp__']($eq85) === 0:
								$eq85==$eq86)))))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
						false :
						(typeof $bool88=='object'?
							(typeof $bool88['__nonzero__']=='function'?
								$bool88['__nonzero__']() :
								(typeof $bool88['__len__']=='function'?
									($bool88['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				else if ((($bool89=(($eq87=res)===($eq88=$m['FAIL'])&&$eq87===null?true:
					($eq87===null?false:($eq88===null?false:
						((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87['__cmp__']=='function'?$eq87['__cmp__']($eq88) === 0:
							((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88['__cmp__']=='function'?$eq88['__cmp__']($eq87) === 0:
								$eq87==$eq88)))))) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89['__nonzero__']=='function'?
								$bool89['__nonzero__']() :
								(typeof $bool89['__len__']=='function'?
									($bool89['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($m['Error']('Illegal character'));
				}
				else if ((($bool90=(($eq89=res)===($eq90=$m['DONE'])&&$eq89===null?true:
					($eq89===null?false:($eq90===null?false:
						((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89['__cmp__']=='function'?$eq89['__cmp__']($eq90) === 0:
							((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90['__cmp__']=='function'?$eq90['__cmp__']($eq89) === 0:
								$eq89==$eq90)))))) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
						false :
						(typeof $bool90=='object'?
							(typeof $bool90['__nonzero__']=='function'?
								$bool90['__nonzero__']() :
								(typeof $bool90['__len__']=='function'?
									($bool90['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					iterlist['append'](t);
					return $p['tuple']([iterlist, true]);
				}
				else {
					t['append'](res);
				}
				if ((($bool91=(($eq91=(($len16=t) === null?0:
					(typeof $len16['__array'] != 'undefined' ? $len16['__array']['length']:
						(typeof $len16['__len__'] == 'function'?$len16['__len__']():
							(typeof $len16['length'] != 'undefined'?$len16['length']:
								$p['len']($len16))))))===($eq92=4)&&$eq91===null?true:
					($eq91===null?false:($eq92===null?false:
						((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91['__cmp__']=='function'?$eq91['__cmp__']($eq92) === 0:
							((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92['__cmp__']=='function'?$eq92['__cmp__']($eq91) === 0:
								$eq91==$eq92)))))) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91['__nonzero__']=='function'?
								$bool91['__nonzero__']() :
								(typeof $bool91['__len__']=='function'?
									($bool91['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					iterlist['append'](t);
					t = $p['list']([]);
				}
			}
			iterlist['append'](t);
			return $p['tuple']([iterlist, false]);
		};
		quadruples_gen['__name__'] = 'quadruples_gen';

		quadruples_gen['__bind_type__'] = 0;
		quadruples_gen['__args__'] = [null,null,['s']];
		done = 0;
		try {
			var $tupleassign5 = $p['__ass_unpack'](quadruples_gen(s), 2, null);
			iterlist = $tupleassign5[0];
			done = $tupleassign5[1];
			$iter10_iter = iterlist;
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				snippet = $iter10_nextval;
				length = (($len17=snippet) === null?0:
					(typeof $len17['__array'] != 'undefined' ? $len17['__array']['length']:
						(typeof $len17['__len__'] == 'function'?$len17['__len__']():
							(typeof $len17['length'] != 'undefined'?$len17['length']:
								$p['len']($len17)))));
				if ((($bool92=(($eq93=length)===($eq94=4)&&$eq93===null?true:
					($eq93===null?false:($eq94===null?false:
						((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93['__cmp__']=='function'?$eq93['__cmp__']($eq94) === 0:
							((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94['__cmp__']=='function'?$eq94['__cmp__']($eq93) === 0:
								$eq93==$eq94)))))) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
						false :
						(typeof $bool92=='object'?
							(typeof $bool92['__nonzero__']=='function'?
								$bool92['__nonzero__']() :
								(typeof $bool92['__len__']=='function'?
									($bool92['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result['append']($p['chr'](((((typeof ($117=snippet)['__array'] != 'undefined'?
						((typeof $117['__array'][$118=0]) != 'undefined'?$117['__array'][$118]:
							$117['__getitem__']($118)):
							$117['__getitem__'](0)))&(63))<<(2))|(((typeof ($119=snippet)['__array'] != 'undefined'?
						((typeof $119['__array'][$120=1]) != 'undefined'?$119['__array'][$120]:
							$119['__getitem__']($120)):
							$119['__getitem__'](1)))>>(4))));
					result['append']($p['chr'](((((typeof ($121=snippet)['__array'] != 'undefined'?
						((typeof $121['__array'][$122=1]) != 'undefined'?$121['__array'][$122]:
							$121['__getitem__']($122)):
							$121['__getitem__'](1)))&(15))<<(4))|(((typeof ($123=snippet)['__array'] != 'undefined'?
						((typeof $123['__array'][$124=2]) != 'undefined'?$123['__array'][$124]:
							$123['__getitem__']($124)):
							$123['__getitem__'](2)))>>(2))));
					result['append']($p['chr'](((((typeof ($125=snippet)['__array'] != 'undefined'?
						((typeof $125['__array'][$126=2]) != 'undefined'?$125['__array'][$126]:
							$125['__getitem__']($126)):
							$125['__getitem__'](2)))&(3))<<(6))|((typeof ($127=snippet)['__array'] != 'undefined'?
						((typeof $127['__array'][$128=3]) != 'undefined'?$127['__array'][$128]:
							$127['__getitem__']($128)):
							$127['__getitem__'](3)))));
				}
				else if ((($bool93=(($eq95=length)===($eq96=3)&&$eq95===null?true:
					($eq95===null?false:($eq96===null?false:
						((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95['__cmp__']=='function'?$eq95['__cmp__']($eq96) === 0:
							((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96['__cmp__']=='function'?$eq96['__cmp__']($eq95) === 0:
								$eq95==$eq96)))))) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
						false :
						(typeof $bool93=='object'?
							(typeof $bool93['__nonzero__']=='function'?
								$bool93['__nonzero__']() :
								(typeof $bool93['__len__']=='function'?
									($bool93['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result['append']($p['chr'](((((typeof ($129=snippet)['__array'] != 'undefined'?
						((typeof $129['__array'][$130=0]) != 'undefined'?$129['__array'][$130]:
							$129['__getitem__']($130)):
							$129['__getitem__'](0)))&(63))<<(2))|(((typeof ($131=snippet)['__array'] != 'undefined'?
						((typeof $131['__array'][$132=1]) != 'undefined'?$131['__array'][$132]:
							$131['__getitem__']($132)):
							$131['__getitem__'](1)))>>(4))));
					result['append']($p['chr'](((((typeof ($133=snippet)['__array'] != 'undefined'?
						((typeof $133['__array'][$134=1]) != 'undefined'?$133['__array'][$134]:
							$133['__getitem__']($134)):
							$133['__getitem__'](1)))&(15))<<(4))|(((typeof ($135=snippet)['__array'] != 'undefined'?
						((typeof $135['__array'][$136=2]) != 'undefined'?$135['__array'][$136]:
							$135['__getitem__']($136)):
							$135['__getitem__'](2)))>>(2))));
				}
				else if ((($bool94=(($eq97=length)===($eq98=2)&&$eq97===null?true:
					($eq97===null?false:($eq98===null?false:
						((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97['__cmp__']=='function'?$eq97['__cmp__']($eq98) === 0:
							((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98['__cmp__']=='function'?$eq98['__cmp__']($eq97) === 0:
								$eq97==$eq98)))))) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94['__nonzero__']=='function'?
								$bool94['__nonzero__']() :
								(typeof $bool94['__len__']=='function'?
									($bool94['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result['append']($p['chr'](((((typeof ($137=snippet)['__array'] != 'undefined'?
						((typeof $137['__array'][$138=0]) != 'undefined'?$137['__array'][$138]:
							$137['__getitem__']($138)):
							$137['__getitem__'](0)))&(63))<<(2))|(((typeof ($139=snippet)['__array'] != 'undefined'?
						((typeof $139['__array'][$140=1]) != 'undefined'?$139['__array'][$140]:
							$139['__getitem__']($140)):
							$139['__getitem__'](1)))>>(4))));
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $m['Done']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Done'])) {
				done = 1;
			} else if (($pyjs_try_err_name == $m['Error']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Error'])) {
				throw ($pyjs['__last_exception__']?
					$pyjs['__last_exception__']['error']:
					$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return $p['tuple']([''['join'](result), done]);
	};
	$m['a2b_hqx']['__name__'] = 'a2b_hqx';

	$m['a2b_hqx']['__bind_type__'] = 0;
	$m['a2b_hqx']['__args__'] = [null,null,['s']];
	$m['b2a_hqx'] = function(s) {
		var $172,$189,$173,$iter11_array,$186,$174,$153,$176,$177,$156,result,$154,$155,$158,$159,$178,$179,$eq101,$eq100,$eq103,$eq102,$eq104,$eq99,snippet,$188,$191,$181,$180,$183,$iter11_idx,$185,$184,$187,$175,$iter11_iter,$171,$167,$166,$165,$164,$163,$162,$161,$160,$iter11_nextval,$169,$168,$182,$bool96,$bool97,$len18,$iter11_type,$bool98,length,$170,$194,triples_gen,$192,$193,$190,$157;
		result = $p['list']([]);
		triples_gen = function(s) {
			var $bool95,$151,$150,$152,$pyjs_try_err,$149,$148,iterlist,$145,$144,$147,$146,$141,$143,$142;
			iterlist = $p['list']([]);
			while ((($bool95=s) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95['__nonzero__']=='function'?
							$bool95['__nonzero__']() :
							(typeof $bool95['__len__']=='function'?
								($bool95['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				try {
					iterlist['append']($p['tuple']([$p['ord']((typeof ($141=s)['__array'] != 'undefined'?
						((typeof $141['__array'][$142=0]) != 'undefined'?$141['__array'][$142]:
							$141['__getitem__']($142)):
							$141['__getitem__'](0))), $p['ord']((typeof ($143=s)['__array'] != 'undefined'?
						((typeof $143['__array'][$144=1]) != 'undefined'?$143['__array'][$144]:
							$143['__getitem__']($144)):
							$143['__getitem__'](1))), $p['ord']((typeof ($145=s)['__array'] != 'undefined'?
						((typeof $145['__array'][$146=2]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__'](2)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						try {
							iterlist['append']($p['tuple']([$p['ord']((typeof ($147=s)['__array'] != 'undefined'?
								((typeof $147['__array'][$148=0]) != 'undefined'?$147['__array'][$148]:
									$147['__getitem__']($148)):
									$147['__getitem__'](0))), $p['ord']((typeof ($149=s)['__array'] != 'undefined'?
								((typeof $149['__array'][$150=1]) != 'undefined'?$149['__array'][$150]:
									$149['__getitem__']($150)):
									$149['__getitem__'](1)))]));
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
								iterlist['append']($p['tuple']([$p['ord']((typeof ($151=s)['__array'] != 'undefined'?
									((typeof $151['__array'][$152=0]) != 'undefined'?$151['__array'][$152]:
										$151['__getitem__']($152)):
										$151['__getitem__'](0)))]));
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		$iter11_iter = triples_gen(s);
		if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
			$iter11_type = 0;
		} else {
			$iter11_iter = $iter11_iter['__iter__']();
			$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter11_idx = 0;
		while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
			snippet = $iter11_nextval;
			length = (($len18=snippet) === null?0:
				(typeof $len18['__array'] != 'undefined' ? $len18['__array']['length']:
					(typeof $len18['__len__'] == 'function'?$len18['__len__']():
						(typeof $len18['length'] != 'undefined'?$len18['length']:
							$p['len']($len18)))));
			if ((($bool96=(($eq99=length)===($eq100=3)&&$eq99===null?true:
				($eq99===null?false:($eq100===null?false:
					((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99['__cmp__']=='function'?$eq99['__cmp__']($eq100) === 0:
						((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100['__cmp__']=='function'?$eq100['__cmp__']($eq99) === 0:
							$eq99==$eq100)))))) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96['__nonzero__']=='function'?
							$bool96['__nonzero__']() :
							(typeof $bool96['__len__']=='function'?
								($bool96['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result['append']((typeof ($155=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $155['__array'][$156=(((typeof ($153=snippet)['__array'] != 'undefined'?
					((typeof $153['__array'][$154=0]) != 'undefined'?$153['__array'][$154]:
						$153['__getitem__']($154)):
						$153['__getitem__'](0)))&(252))>>(2)]) != 'undefined'?$155['__array'][$156]:
						$155['__getitem__']($156)):
						$155['__getitem__']((((typeof ($153=snippet)['__array'] != 'undefined'?
					((typeof $153['__array'][$154=0]) != 'undefined'?$153['__array'][$154]:
						$153['__getitem__']($154)):
						$153['__getitem__'](0)))&(252))>>(2))));
				result['append']((typeof ($161=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $161['__array'][$162=((((typeof ($157=snippet)['__array'] != 'undefined'?
					((typeof $157['__array'][$158=0]) != 'undefined'?$157['__array'][$158]:
						$157['__getitem__']($158)):
						$157['__getitem__'](0)))&(3))<<(4))|((((typeof ($159=snippet)['__array'] != 'undefined'?
					((typeof $159['__array'][$160=1]) != 'undefined'?$159['__array'][$160]:
						$159['__getitem__']($160)):
						$159['__getitem__'](1)))&(240))>>(4))]) != 'undefined'?$161['__array'][$162]:
						$161['__getitem__']($162)):
						$161['__getitem__'](((((typeof ($157=snippet)['__array'] != 'undefined'?
					((typeof $157['__array'][$158=0]) != 'undefined'?$157['__array'][$158]:
						$157['__getitem__']($158)):
						$157['__getitem__'](0)))&(3))<<(4))|((((typeof ($159=snippet)['__array'] != 'undefined'?
					((typeof $159['__array'][$160=1]) != 'undefined'?$159['__array'][$160]:
						$159['__getitem__']($160)):
						$159['__getitem__'](1)))&(240))>>(4)))));
				result['append']((typeof ($167=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $167['__array'][$168=((((typeof ($163=snippet)['__array'] != 'undefined'?
					((typeof $163['__array'][$164=1]) != 'undefined'?$163['__array'][$164]:
						$163['__getitem__']($164)):
						$163['__getitem__'](1)))&(15))<<(2))|((((typeof ($165=snippet)['__array'] != 'undefined'?
					((typeof $165['__array'][$166=2]) != 'undefined'?$165['__array'][$166]:
						$165['__getitem__']($166)):
						$165['__getitem__'](2)))&(192))>>(6))]) != 'undefined'?$167['__array'][$168]:
						$167['__getitem__']($168)):
						$167['__getitem__'](((((typeof ($163=snippet)['__array'] != 'undefined'?
					((typeof $163['__array'][$164=1]) != 'undefined'?$163['__array'][$164]:
						$163['__getitem__']($164)):
						$163['__getitem__'](1)))&(15))<<(2))|((((typeof ($165=snippet)['__array'] != 'undefined'?
					((typeof $165['__array'][$166=2]) != 'undefined'?$165['__array'][$166]:
						$165['__getitem__']($166)):
						$165['__getitem__'](2)))&(192))>>(6)))));
				result['append']((typeof ($171=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $171['__array'][$172=((typeof ($169=snippet)['__array'] != 'undefined'?
					((typeof $169['__array'][$170=2]) != 'undefined'?$169['__array'][$170]:
						$169['__getitem__']($170)):
						$169['__getitem__'](2)))&(63)]) != 'undefined'?$171['__array'][$172]:
						$171['__getitem__']($172)):
						$171['__getitem__'](((typeof ($169=snippet)['__array'] != 'undefined'?
					((typeof $169['__array'][$170=2]) != 'undefined'?$169['__array'][$170]:
						$169['__getitem__']($170)):
						$169['__getitem__'](2)))&(63))));
			}
			else if ((($bool97=(($eq101=length)===($eq102=2)&&$eq101===null?true:
				($eq101===null?false:($eq102===null?false:
					((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101['__cmp__']=='function'?$eq101['__cmp__']($eq102) === 0:
						((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102['__cmp__']=='function'?$eq102['__cmp__']($eq101) === 0:
							$eq101==$eq102)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
					false :
					(typeof $bool97=='object'?
						(typeof $bool97['__nonzero__']=='function'?
							$bool97['__nonzero__']() :
							(typeof $bool97['__len__']=='function'?
								($bool97['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result['append']((typeof ($175=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $175['__array'][$176=(((typeof ($173=snippet)['__array'] != 'undefined'?
					((typeof $173['__array'][$174=0]) != 'undefined'?$173['__array'][$174]:
						$173['__getitem__']($174)):
						$173['__getitem__'](0)))&(252))>>(2)]) != 'undefined'?$175['__array'][$176]:
						$175['__getitem__']($176)):
						$175['__getitem__']((((typeof ($173=snippet)['__array'] != 'undefined'?
					((typeof $173['__array'][$174=0]) != 'undefined'?$173['__array'][$174]:
						$173['__getitem__']($174)):
						$173['__getitem__'](0)))&(252))>>(2))));
				result['append']((typeof ($181=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $181['__array'][$182=((((typeof ($177=snippet)['__array'] != 'undefined'?
					((typeof $177['__array'][$178=0]) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__'](0)))&(3))<<(4))|((((typeof ($179=snippet)['__array'] != 'undefined'?
					((typeof $179['__array'][$180=1]) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__'](1)))&(240))>>(4))]) != 'undefined'?$181['__array'][$182]:
						$181['__getitem__']($182)):
						$181['__getitem__'](((((typeof ($177=snippet)['__array'] != 'undefined'?
					((typeof $177['__array'][$178=0]) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__'](0)))&(3))<<(4))|((((typeof ($179=snippet)['__array'] != 'undefined'?
					((typeof $179['__array'][$180=1]) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__'](1)))&(240))>>(4)))));
				result['append']((typeof ($185=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $185['__array'][$186=(((typeof ($183=snippet)['__array'] != 'undefined'?
					((typeof $183['__array'][$184=1]) != 'undefined'?$183['__array'][$184]:
						$183['__getitem__']($184)):
						$183['__getitem__'](1)))&(15))<<(2)]) != 'undefined'?$185['__array'][$186]:
						$185['__getitem__']($186)):
						$185['__getitem__']((((typeof ($183=snippet)['__array'] != 'undefined'?
					((typeof $183['__array'][$184=1]) != 'undefined'?$183['__array'][$184]:
						$183['__getitem__']($184)):
						$183['__getitem__'](1)))&(15))<<(2))));
			}
			else if ((($bool98=(($eq103=length)===($eq104=1)&&$eq103===null?true:
				($eq103===null?false:($eq104===null?false:
					((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103['__cmp__']=='function'?$eq103['__cmp__']($eq104) === 0:
						((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104['__cmp__']=='function'?$eq104['__cmp__']($eq103) === 0:
							$eq103==$eq104)))))) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98['__nonzero__']=='function'?
							$bool98['__nonzero__']() :
							(typeof $bool98['__len__']=='function'?
								($bool98['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result['append']((typeof ($189=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $189['__array'][$190=(((typeof ($187=snippet)['__array'] != 'undefined'?
					((typeof $187['__array'][$188=0]) != 'undefined'?$187['__array'][$188]:
						$187['__getitem__']($188)):
						$187['__getitem__'](0)))&(252))>>(2)]) != 'undefined'?$189['__array'][$190]:
						$189['__getitem__']($190)):
						$189['__getitem__']((((typeof ($187=snippet)['__array'] != 'undefined'?
					((typeof $187['__array'][$188=0]) != 'undefined'?$187['__array'][$188]:
						$187['__getitem__']($188)):
						$187['__getitem__'](0)))&(252))>>(2))));
				result['append']((typeof ($193=$m['hqx_encoding'])['__array'] != 'undefined'?
					((typeof $193['__array'][$194=(((typeof ($191=snippet)['__array'] != 'undefined'?
					((typeof $191['__array'][$192=0]) != 'undefined'?$191['__array'][$192]:
						$191['__getitem__']($192)):
						$191['__getitem__'](0)))&(3))<<(4)]) != 'undefined'?$193['__array'][$194]:
						$193['__getitem__']($194)):
						$193['__getitem__']((((typeof ($191=snippet)['__array'] != 'undefined'?
					((typeof $191['__array'][$192=0]) != 'undefined'?$191['__array'][$192]:
						$191['__getitem__']($192)):
						$191['__getitem__'](0)))&(3))<<(4))));
			}
		}
		return ''['join'](result);
	};
	$m['b2a_hqx']['__name__'] = 'b2a_hqx';

	$m['b2a_hqx']['__bind_type__'] = 0;
	$m['b2a_hqx']['__args__'] = [null,null,['s']];
	$m['crctab_hqx'] = $p['list']([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);
	$m['crc_hqx'] = function(s, crc) {
		var c,$iter12_type,$iter12_array,$iter12_iter,$196,$195,$iter12_idx,$iter12_nextval;
		$iter12_iter = s;
		if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
			$iter12_type = 0;
		} else {
			$iter12_iter = $iter12_iter['__iter__']();
			$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter12_idx = 0;
		while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
			c = $iter12_nextval;
			crc = (((crc)<<(8))&(65280))^((typeof ($195=$m['crctab_hqx'])['__array'] != 'undefined'?
				((typeof $195['__array'][$196=(((crc)>>(8))&(255))^($p['ord'](c))]) != 'undefined'?$195['__array'][$196]:
					$195['__getitem__']($196)):
					$195['__getitem__']((((crc)>>(8))&(255))^($p['ord'](c)))));
		}
		return crc;
	};
	$m['crc_hqx']['__name__'] = 'crc_hqx';

	$m['crc_hqx']['__bind_type__'] = 0;
	$m['crc_hqx']['__args__'] = [null,null,['s'],['crc']];
	$m['rlecode_hqx'] = function(s) {
		var $iter13_idx,$cmp42,$cmp43,$cmp41,$cmp44,$eq105,$eq107,$eq106,$eq109,$eq108,$and41,$and40,prev,$iter13_array,$eq112,$200,$eq110,$bool105,$bool104,$bool107,$bool106,$bool101,$bool100,$bool103,$bool102,$eq116,$bool108,count,$eq113,c,$eq111,$iter13_nextval,$eq114,$iter13_iter,$bool99,$eq115,$iter13_type,$198,$199,$197,result;
		if ((($bool100=!(($bool99=s) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
			false :
			(typeof $bool99=='object'?
				(typeof $bool99['__nonzero__']=='function'?
					$bool99['__nonzero__']() :
					(typeof $bool99['__len__']=='function'?
						($bool99['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
				false :
				(typeof $bool100=='object'?
					(typeof $bool100['__nonzero__']=='function'?
						$bool100['__nonzero__']() :
						(typeof $bool100['__len__']=='function'?
							($bool100['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return '';
		}
		result = $p['list']([]);
		prev = (typeof ($197=s)['__array'] != 'undefined'?
			((typeof $197['__array'][$198=0]) != 'undefined'?$197['__array'][$198]:
				$197['__getitem__']($198)):
				$197['__getitem__'](0));
		count = 1;
		if ((($bool101=(($eq105=(typeof ($199=s)['__array'] != 'undefined'?
			((typeof $199['__array'][$200=-(1)]) != 'undefined'?$199['__array'][$200]:
				$199['__getitem__']($200)):
				$199['__getitem__'](-(1))))===($eq106='!')&&$eq105===null?true:
			($eq105===null?false:($eq106===null?false:
				((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105['__cmp__']=='function'?$eq105['__cmp__']($eq106) === 0:
					((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106['__cmp__']=='function'?$eq106['__cmp__']($eq105) === 0:
						$eq105==$eq106)))))) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
				false :
				(typeof $bool101=='object'?
					(typeof $bool101['__nonzero__']=='function'?
						$bool101['__nonzero__']() :
						(typeof $bool101['__len__']=='function'?
							($bool101['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			s = ($p['__getslice'](s, 1, null))+('?');
		}
		else {
			s = ($p['__getslice'](s, 1, null))+('!');
		}
		$iter13_iter = s;
		if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
			$iter13_type = 0;
		} else {
			$iter13_iter = $iter13_iter['__iter__']();
			$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter13_idx = 0;
		while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
			c = $iter13_nextval;
			if ((($bool103=((($bool102=$and40=(($eq107=c)===($eq108=prev)&&$eq107===null?true:
				($eq107===null?false:($eq108===null?false:
					((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107['__cmp__']=='function'?$eq107['__cmp__']($eq108) === 0:
						((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108['__cmp__']=='function'?$eq108['__cmp__']($eq107) === 0:
							$eq107==$eq108)))))) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
				false :
				(typeof $bool102=='object'?
					(typeof $bool102['__nonzero__']=='function'?
						$bool102['__nonzero__']() :
						(typeof $bool102['__len__']=='function'?
							($bool102['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp41=count)===($cmp42=255)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$p['cmp']($cmp41, $cmp42))) == -1):$and40)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
					false :
					(typeof $bool103=='object'?
						(typeof $bool103['__nonzero__']=='function'?
							$bool103['__nonzero__']() :
							(typeof $bool103['__len__']=='function'?
								($bool103['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				count += 1;
			}
			else {
				if ((($bool104=(($eq109=count)===($eq110=1)&&$eq109===null?true:
					($eq109===null?false:($eq110===null?false:
						((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109['__cmp__']=='function'?$eq109['__cmp__']($eq110) === 0:
							((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110['__cmp__']=='function'?$eq110['__cmp__']($eq109) === 0:
								$eq109==$eq110)))))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
						false :
						(typeof $bool104=='object'?
							(typeof $bool104['__nonzero__']=='function'?
								$bool104['__nonzero__']() :
								(typeof $bool104['__len__']=='function'?
									($bool104['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool105=!(($eq111=prev)===($eq112='\x90')&&$eq111===null?true:
						($eq111===null?false:($eq112===null?false:
							((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111['__cmp__']=='function'?$eq111['__cmp__']($eq112) === 0:
								((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112['__cmp__']=='function'?$eq112['__cmp__']($eq111) === 0:
									$eq111==$eq112)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105['__nonzero__']=='function'?
									$bool105['__nonzero__']() :
									(typeof $bool105['__len__']=='function'?
										($bool105['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result['append'](prev);
					}
					else {
						result['extend']($p['list'](['\x90', '\x00']));
					}
				}
				else if ((($bool106=((($cmp43=count)===($cmp44=4)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
						false :
						(typeof $bool106=='object'?
							(typeof $bool106['__nonzero__']=='function'?
								$bool106['__nonzero__']() :
								(typeof $bool106['__len__']=='function'?
									($bool106['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool107=!(($eq113=prev)===($eq114='\x90')&&$eq113===null?true:
						($eq113===null?false:($eq114===null?false:
							((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113['__cmp__']=='function'?$eq113['__cmp__']($eq114) === 0:
								((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114['__cmp__']=='function'?$eq114['__cmp__']($eq113) === 0:
									$eq113==$eq114)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
							false :
							(typeof $bool107=='object'?
								(typeof $bool107['__nonzero__']=='function'?
									$bool107['__nonzero__']() :
									(typeof $bool107['__len__']=='function'?
										($bool107['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result['extend'](($p['list']([prev]))*(count));
					}
					else {
						result['extend'](($p['list'](['\x90', '\x00']))*(count));
					}
				}
				else {
					if ((($bool108=!(($eq115=prev)===($eq116='\x90')&&$eq115===null?true:
						($eq115===null?false:($eq116===null?false:
							((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115['__cmp__']=='function'?$eq115['__cmp__']($eq116) === 0:
								((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116['__cmp__']=='function'?$eq116['__cmp__']($eq115) === 0:
									$eq115==$eq116)))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
							false :
							(typeof $bool108=='object'?
								(typeof $bool108['__nonzero__']=='function'?
									$bool108['__nonzero__']() :
									(typeof $bool108['__len__']=='function'?
										($bool108['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result['extend']($p['list']([prev, '\x90', $p['chr'](count)]));
					}
					else {
						result['extend']($p['list'](['\x90', '\x00', '\x90', $p['chr'](count)]));
					}
				}
				count = 1;
				prev = c;
			}
		}
		return ''['join'](result);
	};
	$m['rlecode_hqx']['__name__'] = 'rlecode_hqx';

	$m['rlecode_hqx']['__bind_type__'] = 0;
	$m['rlecode_hqx']['__args__'] = [null,null,['s']];
	$m['rledecode_hqx'] = function(s) {
		var count,$iter14_array,$iter14_type,$208,$202,$203,$201,$206,$207,$204,$205,snippet,$cmp45,result,$iter14_iter,$bool109,prev,$cmp46,$iter14_idx,$iter14_nextval;
		s = s['$$split']('\x90');
		result = $p['list']([(typeof ($201=s)['__array'] != 'undefined'?
			((typeof $201['__array'][$202=0]) != 'undefined'?$201['__array'][$202]:
				$201['__getitem__']($202)):
				$201['__getitem__'](0))]);
		prev = (typeof ($203=s)['__array'] != 'undefined'?
			((typeof $203['__array'][$204=0]) != 'undefined'?$203['__array'][$204]:
				$203['__getitem__']($204)):
				$203['__getitem__'](0));
		$iter14_iter = $p['__getslice'](s, 1, null);
		if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
			$iter14_type = 0;
		} else {
			$iter14_iter = $iter14_iter['__iter__']();
			$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter14_idx = 0;
		while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
			snippet = $iter14_nextval;
			count = $p['ord']((typeof ($205=snippet)['__array'] != 'undefined'?
				((typeof $205['__array'][$206=0]) != 'undefined'?$205['__array'][$206]:
					$205['__getitem__']($206)):
					$205['__getitem__'](0)));
			if ((($bool109=((($cmp45=count)===($cmp46=0)?0:
				(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
					($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
					$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
					false :
					(typeof $bool109=='object'?
						(typeof $bool109['__nonzero__']=='function'?
							$bool109['__nonzero__']() :
							(typeof $bool109['__len__']=='function'?
								($bool109['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result['append'](((typeof ($207=prev)['__array'] != 'undefined'?
					((typeof $207['__array'][$208=-(1)]) != 'undefined'?$207['__array'][$208]:
						$207['__getitem__']($208)):
						$207['__getitem__'](-(1))))*((count)-(1)));
				prev = snippet;
			}
			else {
				result['append']('\x90');
				prev = '\x90';
			}
			result['append']($p['__getslice'](snippet, 1, null));
		}
		return ''['join'](result);
	};
	$m['rledecode_hqx']['__name__'] = 'rledecode_hqx';

	$m['rledecode_hqx']['__bind_type__'] = 0;
	$m['rledecode_hqx']['__args__'] = [null,null,['s']];
	$m['crc_32_tab'] = $p['list']([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
	$m['crc32'] = function(s, crc) {
		if (typeof crc == 'undefined') crc=arguments['callee']['__args__'][3][1];
		var c,$209,$iter15_iter,$mod10,$iter15_array,$cmp48,$iter15_idx,result,$iter15_nextval,$iter15_type,$mod9,$cmp47,$bool110,$210;
		result = 0;
		crc = (~($p['float_int'](crc)))&(4294967295);
		$iter15_iter = s;
		if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
			$iter15_type = 0;
		} else {
			$iter15_iter = $iter15_iter['__iter__']();
			$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter15_idx = 0;
		while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
			c = $iter15_nextval;
			crc = ((typeof ($209=$m['crc_32_tab'])['__array'] != 'undefined'?
				((typeof $209['__array'][$210=((crc)^($p['float_int']($p['ord'](c))))&(255)]) != 'undefined'?$209['__array'][$210]:
					$209['__getitem__']($210)):
					$209['__getitem__'](((crc)^($p['float_int']($p['ord'](c))))&(255))))^((crc)>>(8));
			result = (crc)^(4294967295);
		}
		if ((($bool110=((($cmp47=result)===($cmp48=Math['pow'](2,31))?0:
			(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
				($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
				$p['cmp']($cmp47, $cmp48))) == 1)) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
				false :
				(typeof $bool110=='object'?
					(typeof $bool110['__nonzero__']=='function'?
						$bool110['__nonzero__']() :
						(typeof $bool110['__len__']=='function'?
							($bool110['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = ((($mod9=(result)+(Math['pow'](2,31)))!=null && ($mod10=Math['pow'](2,32))!=null && typeof $mod9=='string'?
				$p['sprintf']($mod9,$mod10):
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9)))-(Math['pow'](2,31));
		}
		return result;
	};
	$m['crc32']['__name__'] = 'crc32';

	$m['crc32']['__bind_type__'] = 0;
	$m['crc32']['__args__'] = [null,null,['s'],['crc', 0]];
	$m['b2a_hex'] = function(s) {
		var $iter16_array,$$char,c,$bool112,$iter16_type,$iter16_idx,$cmp49,result,$cmp50,$cmp51,$iter16_nextval,$cmp52,$iter16_iter,$bool111;
		result = $p['list']([]);
		$iter16_iter = s;
		if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
			$iter16_type = 0;
		} else {
			$iter16_iter = $iter16_iter['__iter__']();
			$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter16_idx = 0;
		while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
			$$char = $iter16_nextval;
			c = (($p['ord']($$char))>>(4))&(15);
			if ((($bool111=((($cmp49=c)===($cmp50=9)?0:
				(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
					($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
					$p['cmp']($cmp49, $cmp50))) == 1)) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
					false :
					(typeof $bool111=='object'?
						(typeof $bool111['__nonzero__']=='function'?
							$bool111['__nonzero__']() :
							(typeof $bool111['__len__']=='function'?
								($bool111['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = ((c)+($p['ord']('a')))-(10);
			}
			else {
				c = (c)+($p['ord']('0'));
			}
			result['append']($p['chr'](c));
			c = ($p['ord']($$char))&(15);
			if ((($bool112=((($cmp51=c)===($cmp52=9)?0:
				(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
					($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
					$p['cmp']($cmp51, $cmp52))) == 1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112['__nonzero__']=='function'?
							$bool112['__nonzero__']() :
							(typeof $bool112['__len__']=='function'?
								($bool112['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = ((c)+($p['ord']('a')))-(10);
			}
			else {
				c = (c)+($p['ord']('0'));
			}
			result['append']($p['chr'](c));
		}
		return ''['join'](result);
	};
	$m['b2a_hex']['__name__'] = 'b2a_hex';

	$m['b2a_hex']['__bind_type__'] = 0;
	$m['b2a_hex']['__args__'] = [null,null,['s']];
	$m['hexlify'] = $m['b2a_hex'];
	$m['table_hex'] = $p['list']([-(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -(1), -(1), -(1), -(1), -(1), -(1), -(1), 10, 11, 12, 13, 14, 15, -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), 10, 11, 12, 13, 14, 15, -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1)]);
	$m['a2b_hex'] = function(t) {
		var $iter17_nextval,a,$or29,$iter17_iter,$cmp55,$bool115,pairs_gen,$iter17_array,b,$bool116,$iter17_idx,$iter17_type,$cmp53,$cmp56,$or30,$cmp54,result;
		result = $p['list']([]);
		pairs_gen = function(s) {
			var iterlist,$214,$bool114,$len19,$217,$215,$bool113,$216,$211,$pyjs_try_err,$213,$212,$218;
			iterlist = $p['list']([]);
			while ((($bool113=s) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113['__nonzero__']=='function'?
							$bool113['__nonzero__']() :
							(typeof $bool113['__len__']=='function'?
								($bool113['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				try {
					iterlist['append']($p['tuple']([(typeof ($213=$m['table_hex'])['__array'] != 'undefined'?
						((typeof $213['__array'][$214=$p['ord']((typeof ($211=s)['__array'] != 'undefined'?
						((typeof $211['__array'][$212=0]) != 'undefined'?$211['__array'][$212]:
							$211['__getitem__']($212)):
							$211['__getitem__'](0)))]) != 'undefined'?$213['__array'][$214]:
							$213['__getitem__']($214)):
							$213['__getitem__']($p['ord']((typeof ($211=s)['__array'] != 'undefined'?
						((typeof $211['__array'][$212=0]) != 'undefined'?$211['__array'][$212]:
							$211['__getitem__']($212)):
							$211['__getitem__'](0))))), (typeof ($217=$m['table_hex'])['__array'] != 'undefined'?
						((typeof $217['__array'][$218=$p['ord']((typeof ($215=s)['__array'] != 'undefined'?
						((typeof $215['__array'][$216=1]) != 'undefined'?$215['__array'][$216]:
							$215['__getitem__']($216)):
							$215['__getitem__'](1)))]) != 'undefined'?$217['__array'][$218]:
							$217['__getitem__']($218)):
							$217['__getitem__']($p['ord']((typeof ($215=s)['__array'] != 'undefined'?
						((typeof $215['__array'][$216=1]) != 'undefined'?$215['__array'][$216]:
							$215['__getitem__']($216)):
							$215['__getitem__'](1)))))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						if ((($bool114=(($len19=s) === null?0:
							(typeof $len19['__array'] != 'undefined' ? $len19['__array']['length']:
								(typeof $len19['__len__'] == 'function'?$len19['__len__']():
									(typeof $len19['length'] != 'undefined'?$len19['length']:
										$p['len']($len19)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
								false :
								(typeof $bool114=='object'?
									(typeof $bool114['__nonzero__']=='function'?
										$bool114['__nonzero__']() :
										(typeof $bool114['__len__']=='function'?
											($bool114['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($p['TypeError']('Odd-length string'));
						}
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 2, null);
			}
			return iterlist;
		};
		pairs_gen['__name__'] = 'pairs_gen';

		pairs_gen['__bind_type__'] = 0;
		pairs_gen['__args__'] = [null,null,['s']];
		$iter17_iter = pairs_gen(t);
		if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
			$iter17_type = 0;
		} else {
			$iter17_iter = $iter17_iter['__iter__']();
			$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter17_idx = 0;
		while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
			var $tupleassign6 = $p['__ass_unpack']($iter17_nextval, 2, null);
			a = $tupleassign6[0];
			b = $tupleassign6[1];
			if ((($bool116=((($bool115=$or29=((($cmp53=a)===($cmp54=0)?0:
				(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
					($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
					$p['cmp']($cmp53, $cmp54))) == -1)) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115['__nonzero__']=='function'?
						$bool115['__nonzero__']() :
						(typeof $bool115['__len__']=='function'?
							($bool115['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or29:((($cmp55=b)===($cmp56=0)?0:
				(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
					($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
					$p['cmp']($cmp55, $cmp56))) == -1))) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116['__nonzero__']=='function'?
							$bool116['__nonzero__']() :
							(typeof $bool116['__len__']=='function'?
								($bool116['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('Non-hexadecimal digit found'));
			}
			result['append']($p['chr'](((a)<<(4))+(b)));
		}
		return ''['join'](result);
	};
	$m['a2b_hex']['__name__'] = 'a2b_hex';

	$m['a2b_hex']['__bind_type__'] = 0;
	$m['a2b_hex']['__args__'] = [null,null,['t']];
	$m['unhexlify'] = $m['a2b_hex'];
	return this;
}; /* end binascii */


/* end module: binascii */



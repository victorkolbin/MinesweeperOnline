/* start module: pyjsdl.cursors */
$pyjs['loaded_modules']['pyjsdl.cursors'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.cursors']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.cursors'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.cursors'];
	$m['__repr__'] = function() { return '<module: pyjsdl.cursors>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.cursors';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['cursors'] = $pyjs['loaded_modules']['pyjsdl.cursors'];


	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
	$m['$assign1'] = $p['tuple']([]);
	$m['arrow'] = $m['$assign1'];
	$m['diamond'] = $m['$assign1'];
	$m['broken_x'] = $m['$assign1'];
	$m['tri_left'] = $m['$assign1'];
	$m['tri_right'] = $m['$assign1'];
	$m['compile'] = function(strings, black, white, xor) {
		if (typeof black == 'undefined') black=arguments['callee']['__args__'][3][1];
		if (typeof white == 'undefined') white=arguments['callee']['__args__'][4][1];
		if (typeof xor == 'undefined') xor=arguments['callee']['__args__'][5][1];
		var rang,$iter1_iter,blank,$iter2_type,$iter2_iter,$2,$iter1_array,dbit,$eq1,$iter1_nextval,string,$eq2,$eq3,$len1,db,c,$eq4,$bool2,$bool3,$iter2_idx,$bool1,$bool4,$6,$4,$5,data,$3,$1,mbit,$iter2_nextval,$iter1_type,mb,i,j,mask,s,$iter1_idx,$assign2,$iter2_array;
		data = $p['list']([]);
		mask = $p['list']([]);
		dbit = $p['dict']([[black, 1], [white, 0], [xor, 1]]);
		mbit = $p['dict']([[black, 1], [white, 1], [xor, 0]]);
		string = ''['join'](strings);
		rang = $p['range'](8);
		blank = '        ';
		$iter1_iter = $p['range'](0, (($len1=string) === null?0:
			(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
				(typeof $len1['__len__'] == 'function'?$len1['__len__']():
					(typeof $len1['length'] != 'undefined'?$len1['length']:
						$p['len']($len1))))), 8);
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			i = $iter1_nextval;
			s = $p['__getslice'](string, i, (i)+(8));
			$assign2 = 0;
			db = $assign2;
			mb = $assign2;
			if ((($bool1=!(($eq1=s)===($eq2=blank)&&$eq1===null?true:
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
				$iter2_iter = rang;
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					j = $iter2_nextval;
					c = (typeof ($1=s)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=j]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](j));
					if ((($bool2=(($eq3=c)===($eq4=' ')&&$eq3===null?true:
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
						continue;
					}
					if ((($bool3=(typeof ($3=dbit)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=c]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](c))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						db |= (1)<<((7)-(j));
					}
					if ((($bool4=(typeof ($5=mbit)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=c]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](c))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						mb |= (1)<<((7)-(j));
					}
				}
			}
			data['append']($p['float_int'](db));
			mask['append']($p['float_int'](mb));
		}
		return $p['tuple']([$p['tuple'](data), $p['tuple'](mask)]);
	};
	$m['compile']['__name__'] = 'compile';

	$m['compile']['__bind_type__'] = 0;
	$m['compile']['__args__'] = [null,null,['strings'],['black', 'X'],['white', '.'],['xor', 'o']];
	$m['create_cursor'] = function(size, data, mask) {
		var rang,$iter3_type,surface,$iter4_type,$iter4_iter,$cmp1,$iter3_idx,$iter3_nextval,black,$iter3_iter,white,$or1,$or2,$attr1,$attr2,$iter4_array,$9,$bool6,$bool7,$8,$iter3_array,$7,$bool8,$bool9,$14,$15,$16,$10,$11,$12,$13,i,$iter4_nextval,j,$iter4_idx,$len2,$assign3,$cmp2,y,x,$bool5;
		surface = $m['Surface'](size, $m['Const']['SRCALPHA']);
		black = $m['Color'](0, 0, 0, 255);
		white = $m['Color'](255, 255, 255, 255);
		$assign3 = 0;
		x = $assign3;
		y = $assign3;
		rang = $p['range'](8);
		$iter3_iter = $p['range']((($len2=data) === null?0:
			(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
				(typeof $len2['__len__'] == 'function'?$len2['__len__']():
					(typeof $len2['length'] != 'undefined'?$len2['length']:
						$p['len']($len2))))));
		if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter['__iter__']();
			$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			i = $iter3_nextval;
			if ((($bool6=((($bool5=$or1=(typeof ($7=data)['__array'] != 'undefined'?
				((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](i))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(typeof ($9=mask)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](i)))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$iter4_iter = rang;
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					j = $iter4_nextval;
					if ((($bool7=((typeof ($11=data)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](i)))&((1)<<((7)-(j)))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						surface['setFillStyle'](black);
						surface['fillRect']((x)+(j), y, 1, 1);
					}
					else if ((($bool8=((typeof ($13=mask)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](i)))&((1)<<((7)-(j)))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						surface['setFillStyle'](white);
						surface['fillRect']((x)+(j), y, 1, 1);
					}
				}
			}
			x += 8;
			if ((($bool9=((((($cmp1=x)===($cmp2=(typeof ($15=size)['__array'] != 'undefined'?
				((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](0)))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				x = 0;
				y += 1;
			}
		}
		return surface;
	};
	$m['create_cursor']['__name__'] = 'create_cursor';

	$m['create_cursor']['__bind_type__'] = 0;
	$m['create_cursor']['__args__'] = [null,null,['size'],['data'],['mask']];
	return this;
}; /* end pyjsdl.cursors */


/* end module: pyjsdl.cursors */


/*
PYJS_DEPS: ['pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.locals']
*/

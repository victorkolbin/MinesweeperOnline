/* start module: pyjsdl.mask */
$pyjs['loaded_modules']['pyjsdl.mask'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mask']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mask'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mask'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mask>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mask';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mask'] = $pyjs['loaded_modules']['pyjsdl.mask'];


	$m['BitSet'] = $p['___import___']('pyjsdl.pyjsarray.BitSet', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['from_surface'] = function(surface, threshold) {
		if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][3][1];
		var height,$iter2_type,$iter2_iter,$attr10,width,$iter1_array,xpix,$attr9,$attr8,$iter1_nextval,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$iter2_idx,$bool1,$attr14,$iter1_iter,$attr11,pixels,$attr13,$attr12,$iter2_nextval,$cmp1,$iter1_type,$cmp2,i,mask,$iter1_idx,y,x,$iter2_array;
		mask = (typeof Mask == "undefined"?$m['Mask']:Mask)(surface['width'], surface['height']);
		if ((($bool2=!(($bool1=mask['bit']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return null;
		}
		pixels = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(surface['width'])*(4), surface['height']]), 2, null);
		width = $tupleassign1[0];
		height = $tupleassign1[1];
		$iter1_iter = $p['xrange'](0, height);
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			y = $iter1_nextval;
			xpix = 0;
			i = ((y)*(width))+(3);
			$iter2_iter = $p['xrange'](0, width, 4);
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				x = $iter2_nextval;
				if ((($bool3=((($cmp1=surface['_getPixel'](pixels, (i)+(x)))===($cmp2=threshold)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					mask['set_at']($p['tuple']([xpix, y]));
				}
				xpix += 1;
			}
		}
		return mask;
	};
	$m['from_surface']['__name__'] = 'from_surface';

	$m['from_surface']['__bind_type__'] = 0;
	$m['from_surface']['__args__'] = [null,null,['surface'],['threshold', 127]];
	$m['from_threshold'] = function(surface, color, threshold) {
		if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][4][1];
		var $attr35,$bool10,$bool11,$bool12,$9,$bool14,$bool15,$iter4_type,$attr38,$cmp12,$38,$iter6_type,$iter3_iter,$iter5_idx,$iter7_type,$and8,$bool13,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$iter6_array,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$iter7_nextval,$iter4_nextval,x,$iter5_nextval,$iter7_idx,$iter5_array,$iter6_iter,$iter6_idx,pixels,c,$cmp11,col,$cmp10,$iter3_array,height,$iter5_type,$iter4_iter,$iter3_nextval,$32,width,$iter7_iter,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$8,$attr34,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$36,$iter5_iter,$iter4_array,ix,$35,$cmp9,$33,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$iter6_nextval,$29,$28,$iter3_idx,$21,$20,$23,$22,$25,$24,$27,$26,$eq8,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$cmp15,$cmp14,$cmp17,$cmp16,$attr19,$attr18,$cmp13,$iter3_type,$attr15,$attr17,$attr16,$cmp18,xpix,$cmp5,$cmp4,$cmp7,$cmp6,$cmp3,i,$37,$34,$iter7_array,mask,$cmp8,$30,$31,$iter4_idx,y;
		mask = (typeof Mask == "undefined"?$m['Mask']:Mask)(surface['width'], surface['height']);
		if ((($bool5=!(($bool4=mask['bit']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4['__nonzero__']=='function'?
					$bool4['__nonzero__']() :
					(typeof $bool4['__len__']=='function'?
						($bool4['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			return null;
		}
		pixels = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		if ((($bool6=(($eq1=threshold)===($eq2=$p['tuple']([0, 0, 0, 255]))&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			color = $m['Color'](color);
			color = $p['tuple']([color['r'], color['g'], color['b']]);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(surface['width'])*(4), surface['height']]), 2, null);
			width = $tupleassign2[0];
			height = $tupleassign2[1];
			$iter3_iter = $p['xrange'](0, height);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				y = $iter3_nextval;
				xpix = 0;
				i = (y)*(width);
				$iter4_iter = $p['xrange'](0, width, 4);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					x = $iter4_nextval;
					ix = (i)+(x);
					if ((($bool10=((($bool7=$and1=(($eq3=surface['_getPixel'](pixels, ix))===($eq4=(typeof ($1=color)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](0)))&&$eq3===null?true:
						($eq3===null?false:($eq4===null?false:
							((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
								((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
									$eq3==$eq4)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool8=$and2=(($eq5=surface['_getPixel'](pixels, (ix)+(1)))===($eq6=(typeof ($3=color)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](1)))&&$eq5===null?true:
						($eq5===null?false:($eq6===null?false:
							((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
								((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
									$eq5==$eq6)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool9=$and3=(($eq7=surface['_getPixel'](pixels, (ix)+(2)))===($eq8=(typeof ($5=color)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=2]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](2)))&&$eq7===null?true:
						($eq7===null?false:($eq8===null?false:
							((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
								((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
									$eq7==$eq8)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((((($cmp3=surface['_getPixel'](pixels, (ix)+(3)))===($cmp4=(typeof ($7=threshold)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=3]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](3)))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1):$and3):$and2):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						mask['set_at']($p['tuple']([xpix, y]));
					}
					xpix += 1;
				}
			}
		}
		else {
			color = $m['Color'](color);
			col = $p['dict']([]);
			$iter5_iter = $p['enumerate']($p['tuple'](['r', 'g', 'b']));
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter5_nextval, 2, null);
				i = $tupleassign3[0];
				c = $tupleassign3[1];
				if ((($bool11=(typeof ($9=threshold)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](i))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					col['__setitem__']((c)+('1'), (((typeof ($11=color)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](i)))-((typeof ($13=threshold)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](i))))-(1));
					col['__setitem__']((c)+('2'), (((typeof ($15=color)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](i)))+((typeof ($17=threshold)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](i))))+(1));
				}
				else {
					col['__setitem__']((c)+('1'), ((typeof ($19=color)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](i)))-(1));
					col['__setitem__']((c)+('2'), ((typeof ($21=color)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=i]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](i)))+(1));
				}
			}
			col['__setitem__']('a', ((typeof ($23=threshold)['__array'] != 'undefined'?
				((typeof $23['__array'][$24=3]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](3)))-(1));
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([(surface['width'])*(4), surface['height']]), 2, null);
			width = $tupleassign4[0];
			height = $tupleassign4[1];
			$iter6_iter = $p['xrange'](0, height);
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				y = $iter6_nextval;
				xpix = 0;
				i = (y)*(width);
				$iter7_iter = $p['xrange'](0, width, 4);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					x = $iter7_nextval;
					ix = (i)+(x);
					if ((($bool15=((($bool12=$and5=(((($cmp5=(typeof ($25=col)['__array'] != 'undefined'?
						((typeof $25['__array'][$26='r1']) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']('r1')))===($cmp6=($compare1 = surface['_getPixel'](pixels, ix)))?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)&&((($cmp7=$compare1)===($cmp8=($compare2 = (typeof ($27=col)['__array'] != 'undefined'?
						((typeof $27['__array'][$28='r2']) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__']('r2'))))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == -1))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool13=$and6=(((($cmp9=(typeof ($29=col)['__array'] != 'undefined'?
						((typeof $29['__array'][$30='g1']) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__']('g1')))===($cmp10=($compare3 = surface['_getPixel'](pixels, (ix)+(1))))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == -1)&&((($cmp11=$compare3)===($cmp12=($compare4 = (typeof ($31=col)['__array'] != 'undefined'?
						((typeof $31['__array'][$32='g2']) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__']('g2'))))?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == -1))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool14=$and7=(((($cmp13=(typeof ($33=col)['__array'] != 'undefined'?
						((typeof $33['__array'][$34='b1']) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__']('b1')))===($cmp14=($compare5 = surface['_getPixel'](pixels, (ix)+(2))))?0:
						(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
							($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
							$p['cmp']($cmp13, $cmp14))) == -1)&&((($cmp15=$compare5)===($cmp16=($compare6 = (typeof ($35=col)['__array'] != 'undefined'?
						((typeof $35['__array'][$36='b2']) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__']('b2'))))?0:
						(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
							($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
							$p['cmp']($cmp15, $cmp16))) == -1))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp17=surface['_getPixel'](pixels, (ix)+(3)))===($cmp18=(typeof ($37=col)['__array'] != 'undefined'?
						((typeof $37['__array'][$38='a']) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__']('a')))?0:
						(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
							($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
							$p['cmp']($cmp17, $cmp18))) == 1):$and7):$and6):$and5)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						mask['set_at']($p['tuple']([xpix, y]));
					}
					xpix += 1;
				}
			}
		}
		return mask;
	};
	$m['from_threshold']['__name__'] = 'from_threshold';

	$m['from_threshold']['__bind_type__'] = 0;
	$m['from_threshold']['__args__'] = [null,null,['surface'],['color'],['threshold', $p['tuple']([0, 0, 0, 255])]];
	$m['Mask'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mask';
		$method = $pyjs__bind_method2('__init__', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,$attr42,$iter8_nextval,$attr40,$attr41,$attr39,$iter8_type,bitset;
			self['width'] = $p['float_int'](width);
			self['height'] = $p['float_int'](height);
			self['bit'] = $p['list']([]);
			$iter8_iter = $p['range'](self['height']);
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				bitset = $iter8_nextval;
				self['bit']['append']($m['BitSet'](self['width']));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr46,$attr45,$attr43,$attr44;
			return $p['sprintf']('%s(%r)', $p['tuple']([self['__class__'], self['__dict__']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr47,$attr50,$attr48,$attr49;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_at', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}
			var $39,$attr51,$attr52,$43,$42,$41,$40,$44;
			return (typeof ($41=self['bit'])['__array'] != 'undefined'?
				((typeof $41['__array'][$42=(typeof ($39=pos)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__'](1))]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__']((typeof ($39=pos)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__'](1))))['get']((typeof ($43=pos)['__array'] != 'undefined'?
				((typeof $43['__array'][$44=0]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__'](0)));
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['get_at'] = $method;
		$method = $pyjs__bind_method2('set_at', function(pos, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var $attr53,$attr54,$49,$48,$50,$46,$47,$45;
			(typeof ($47=self['bit'])['__array'] != 'undefined'?
				((typeof $47['__array'][$48=(typeof ($45=pos)['__array'] != 'undefined'?
				((typeof $45['__array'][$46=1]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](1))]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__']((typeof ($45=pos)['__array'] != 'undefined'?
				((typeof $45['__array'][$46=1]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](1))))['set']((typeof ($49=pos)['__array'] != 'undefined'?
				((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](0)), value);
			return null;
		}
	, 1, [null,null,['self'],['pos'],['value', 1]]);
		$cls_definition['set_at'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,bitset,$iter9_array;
			$iter9_iter = self['bit'];
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				bitset = $iter9_nextval;
				bitset['fill']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,bitset,$iter10_type,$iter10_iter,$iter10_idx;
			$iter10_iter = self['bit'];
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				bitset = $iter10_nextval;
				bitset['clear']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('invert', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter11_iter,$iter11_type,$attr55,$attr56,bitset,$iter11_array,$iter11_nextval,$iter11_idx;
			$iter11_iter = self['bit'];
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				bitset = $iter11_nextval;
				bitset['flip'](0, self['width']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invert'] = $method;
		$method = $pyjs__bind_method2('count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,bitset,true_bits,$iter12_idx;
			true_bits = 0;
			$iter12_iter = self['bit'];
			if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter['__iter__']();
				$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				bitset = $iter12_nextval;
				true_bits += bitset['cardinality']();
			}
			return true_bits;
		}
	, 1, [null,null,['self']]);
		$cls_definition['count'] = $method;
		$method = $pyjs__bind_method2('overlap', function(mask, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mask = arguments[1];
				offset = arguments[2];
			}
			var $bool18,$bool19,$bool16,$bool17,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,y1,y2,$iter13_array,$attr68,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$bool20,$attr66,$65,$64,$66,$61,$60,$63,$62,$and9,$and10,$iter13_idx,x2,x1,$cmp19,$attr59,$attr58,$iter13_nextval,$iter13_iter,h,$attr57,$iter13_type,$58,$59,w,y,$51,$52,$53,$54,$55,$56,$57;
			if ((($bool16=((($cmp19=(typeof ($51=offset)['__array'] != 'undefined'?
				((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](0)))===($cmp20=0)?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				x1 = (typeof ($53=offset)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](0));
				x2 = 0;
			}
			else {
				x1 = 0;
				x2 = -((typeof ($55=offset)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](0)));
			}
			if ((($bool17=((($cmp21=(typeof ($57=offset)['__array'] != 'undefined'?
				((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__'](1)))===($cmp22=0)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				y1 = (typeof ($59=offset)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=1]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](1));
				y2 = 0;
			}
			else {
				y1 = 0;
				y2 = -((typeof ($61=offset)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=1]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](1)));
			}
			w = $p['min']((self['width'])-(x1), (mask['width'])-(x2));
			h = $p['min']((self['height'])-(y1), (mask['height'])-(y2));
			if ((($bool19=((($bool18=$and9=((($cmp23=w)===($cmp24=0)?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18['__nonzero__']=='function'?
						$bool18['__nonzero__']() :
						(typeof $bool18['__len__']=='function'?
							($bool18['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp25=h)===($cmp26=0)?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == 1):$and9)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				$iter13_iter = $p['range'](h);
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					y = $iter13_nextval;
					if ((($bool20=(typeof ($63=self['bit'])['__array'] != 'undefined'?
						((typeof $63['__array'][$64=(y1)+(y)]) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__']((y1)+(y)))['get'](x1, (x1)+(w))['intersects']((typeof ($65=mask['bit'])['__array'] != 'undefined'?
						((typeof $65['__array'][$66=(y2)+(y)]) != 'undefined'?$65['__array'][$66]:
							$65['__getitem__']($66)):
							$65['__getitem__']((y2)+(y)))['get'](x2, (x2)+(w)))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						return true;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['mask'],['offset']]);
		$cls_definition['overlap'] = $method;
		$method = $pyjs__bind_method2('toString', function(bit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bit = arguments[1];
			}
			if (typeof bit == 'undefined') bit=arguments['callee']['__args__'][3][1];
			var bitstr,$70,$iter14_type,bitset,cbit,$iter14_array,cbitset,$69,$68,$iter14_iter,$67,$iter14_idx,$iter14_nextval;
			cbit = $p['dict']([[true, (typeof ($67=bit)['__array'] != 'undefined'?
				((typeof $67['__array'][$68=0]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__'](0))], [false, (typeof ($69=bit)['__array'] != 'undefined'?
				((typeof $69['__array'][$70=1]) != 'undefined'?$69['__array'][$70]:
					$69['__getitem__']($70)):
					$69['__getitem__'](1))]]);
			cbitset = $p['list']([]);
			$iter14_iter = self['bit'];
			if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter['__iter__']();
				$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				bitset = $iter14_nextval;
				cbitset['append']('\n');
				cbitset['extend'](function(){
					var $72,$71,$iter15_iter,i,$iter15_array,$collcomp1,$iter15_idx,$iter15_nextval,$iter15_type,$attr70,$attr69;
	$collcomp1 = $p['list']();
				$iter15_iter = $p['range'](self['width']);
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
					$collcomp1['append']((typeof ($71=cbit)['__array'] != 'undefined'?
						((typeof $71['__array'][$72=bitset['get'](i)]) != 'undefined'?$71['__array'][$72]:
							$71['__getitem__']($72)):
							$71['__getitem__'](bitset['get'](i))));
				}

	return $collcomp1;}());
			}
			bitstr = ''['join'](cbitset);
			return bitstr;
		}
	, 1, [null,null,['self'],['bit', $p['tuple'](['1', '0'])]]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mask', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mask */


/* end module: pyjsdl.mask */


/*
PYJS_DEPS: ['pyjsdl.pyjsarray.BitSet', 'pyjsdl', 'pyjsdl.pyjsarray', 'pyjsdl.color.Color', 'pyjsdl.color']
*/

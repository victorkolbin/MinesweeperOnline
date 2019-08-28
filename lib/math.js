/* start module: math */
$pyjs['loaded_modules']['math'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['math']['__was_initialized__']) return $pyjs['loaded_modules']['math'];
	var $m = $pyjs['loaded_modules']['math'];
	$m['__repr__'] = function() { return '<module: math>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	$m['__name__'] = __mod_name__;


	$m['ceil'] = function(x) {

		return $p['float'](Math['ceil'](x['valueOf']()));
	};
	$m['ceil']['__name__'] = 'ceil';

	$m['ceil']['__bind_type__'] = 0;
	$m['ceil']['__args__'] = [null,null,['x']];
	$m['fabs'] = function(x) {

		return $p['float'](Math['abs'](x['valueOf']()));
	};
	$m['fabs']['__name__'] = 'fabs';

	$m['fabs']['__bind_type__'] = 0;
	$m['fabs']['__args__'] = [null,null,['x']];
	$m['floor'] = function(x) {

		return $p['float'](Math['floor'](x['valueOf']()));
	};
	$m['floor']['__name__'] = 'floor';

	$m['floor']['__bind_type__'] = 0;
	$m['floor']['__args__'] = [null,null,['x']];
	$m['exp'] = function(x) {

		return $p['float'](Math['exp'](x['valueOf']()));
	};
	$m['exp']['__name__'] = 'exp';

	$m['exp']['__bind_type__'] = 0;
	$m['exp']['__args__'] = [null,null,['x']];
	$m['log'] = function(x, base) {
		if (typeof base == 'undefined') base=arguments['callee']['__args__'][3][1];
		var $bool1;
		if ((($bool1=(base === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return $p['float'](Math['log'](x['valueOf']()));
		}
		return $p['float'](Math['log'](x['valueOf']()) / Math['log'](base['valueOf']()));
	};
	$m['log']['__name__'] = 'log';

	$m['log']['__bind_type__'] = 0;
	$m['log']['__args__'] = [null,null,['x'],['base', null]];
	$m['pow'] = function(x, y) {

		return $p['float'](Math['pow'](x['valueOf'](), y['valueOf']()));
	};
	$m['pow']['__name__'] = 'pow';

	$m['pow']['__bind_type__'] = 0;
	$m['pow']['__args__'] = [null,null,['x'],['y']];
	$m['sqrt'] = function(x) {

		return $p['float'](Math['sqrt'](x['valueOf']()));
	};
	$m['sqrt']['__name__'] = 'sqrt';

	$m['sqrt']['__bind_type__'] = 0;
	$m['sqrt']['__args__'] = [null,null,['x']];
	$m['cos'] = function(x) {

		return $p['float'](Math['cos'](x['valueOf']()));
	};
	$m['cos']['__name__'] = 'cos';

	$m['cos']['__bind_type__'] = 0;
	$m['cos']['__args__'] = [null,null,['x']];
	$m['sin'] = function(x) {

		return $p['float'](Math['sin'](x['valueOf']()));
	};
	$m['sin']['__name__'] = 'sin';

	$m['sin']['__bind_type__'] = 0;
	$m['sin']['__args__'] = [null,null,['x']];
	$m['tan'] = function(x) {

		return $p['float'](Math['tan'](x['valueOf']()));
	};
	$m['tan']['__name__'] = 'tan';

	$m['tan']['__bind_type__'] = 0;
	$m['tan']['__args__'] = [null,null,['x']];
	$m['acos'] = function(x) {

		return $p['float'](Math['acos'](x['valueOf']()));
	};
	$m['acos']['__name__'] = 'acos';

	$m['acos']['__bind_type__'] = 0;
	$m['acos']['__args__'] = [null,null,['x']];
	$m['asin'] = function(x) {

		return $p['float'](Math['asin'](x['valueOf']()));
	};
	$m['asin']['__name__'] = 'asin';

	$m['asin']['__bind_type__'] = 0;
	$m['asin']['__args__'] = [null,null,['x']];
	$m['atan'] = function(x) {

		return $p['float'](Math['atan'](x['valueOf']()));
	};
	$m['atan']['__name__'] = 'atan';

	$m['atan']['__bind_type__'] = 0;
	$m['atan']['__args__'] = [null,null,['x']];
	$m['atan2'] = function(x, y) {

		return $p['float'](Math['atan2'](x['valueOf'](), y['valueOf']()));
	};
	$m['atan2']['__name__'] = 'atan2';

	$m['atan2']['__bind_type__'] = 0;
	$m['atan2']['__args__'] = [null,null,['x'],['y']];
	$m['pi'] = $p['float'](Math['PI']);
	$m['e'] = $p['float'](Math['E']);
	$m['__log10__'] = $p['float'](Math['LN10']);
	$m['__log2__'] = $m['log'](2);
	$m['fsum'] = function(x) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,xx,$4,$2,$3,$iter2_array,$1;
		xx = function(){
			var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = $p['enumerate'](x);
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
			i = $tupleassign1[0];
			v = $tupleassign1[1];
			$collcomp1['append']($p['tuple']([$m['fabs'](v), i]));
		}

	return $collcomp1;}();
		xx['sort']();
		sum = 0;
		$iter2_iter = xx;
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			i = $iter2_nextval;
			sum += (typeof ($3=x)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=(typeof ($1=i)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=1]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](1))]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__']((typeof ($1=i)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=1]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](1))));
		}
		return sum;
	};
	$m['fsum']['__name__'] = 'fsum';

	$m['fsum']['__bind_type__'] = 0;
	$m['fsum']['__args__'] = [null,null,['x']];
	$m['frexp'] = function(x) {
		var e,$eq1,m,$bool2,$eq2;
		if ((($bool2=(($eq1=x)===($eq2=0)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return $p['tuple']([0.0, 0]);
		}
		e = ($p['float_int'](($m['log']($p['abs'](x)))/($m['__log2__'])))+(1);
		m = (x)/(Math['pow'](2.0,e));
		return $p['tuple']([m, e]);
	};
	$m['frexp']['__name__'] = 'frexp';

	$m['frexp']['__bind_type__'] = 0;
	$m['frexp']['__args__'] = [null,null,['x']];
	$m['ldexp'] = function(x, i) {

		return (x)*(Math['pow'](2,i));
	};
	$m['ldexp']['__name__'] = 'ldexp';

	$m['ldexp']['__bind_type__'] = 0;
	$m['ldexp']['__args__'] = [null,null,['x'],['i']];
	$m['log10'] = function(arg) {

		return ($m['log'](arg))/($m['__log10__']);
	};
	$m['log10']['__name__'] = 'log10';

	$m['log10']['__bind_type__'] = 0;
	$m['log10']['__args__'] = [null,null,['arg']];
	$m['degrees'] = function(x) {

		return ((x)*(180))/($m['pi']);
	};
	$m['degrees']['__name__'] = 'degrees';

	$m['degrees']['__bind_type__'] = 0;
	$m['degrees']['__args__'] = [null,null,['x']];
	$m['radians'] = function(x) {

		return ((x)*($m['pi']))/(180);
	};
	$m['radians']['__name__'] = 'radians';

	$m['radians']['__bind_type__'] = 0;
	$m['radians']['__args__'] = [null,null,['x']];
	$m['hypot'] = function(x, y) {

		x = $p['abs'](x);
		y = $p['abs'](y);
		var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['max'](x, y), $p['min'](x, y)]), 2, null);
		x = $tupleassign2[0];
		y = $tupleassign2[1];
		return (x)*($m['sqrt']((1)+(((y)/(x))*((y)/(x)))));
	};
	$m['hypot']['__name__'] = 'hypot';

	$m['hypot']['__bind_type__'] = 0;
	$m['hypot']['__args__'] = [null,null,['x'],['y']];
	return this;
}; /* end math */


/* end module: math */



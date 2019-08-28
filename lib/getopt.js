/* start module: getopt */
$pyjs['loaded_modules']['getopt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['getopt']['__was_initialized__']) return $pyjs['loaded_modules']['getopt'];
	var $m = $pyjs['loaded_modules']['getopt'];
	$m['__repr__'] = function() { return '<module: getopt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'getopt';
	$m['__name__'] = __mod_name__;


	$m['__all__'] = $p['list'](['GetoptError', 'error', 'getopt', 'gnu_getopt']);
	$m['GetoptError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'getopt';
		$cls_definition['opt'] = '';
		$cls_definition['msg'] = '';
		$method = $pyjs__bind_method2('__init__', function(msg, opt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
				opt = arguments[2];
			}
			if (typeof opt == 'undefined') opt=arguments['callee']['__args__'][4][1];

			self['msg'] = msg;
			self['opt'] = opt;
			$p['Exception']['__init__'](self, msg, opt);
			return null;
		}
	, 1, [null,null,['self'],['msg'],['opt', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return self['msg'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GetoptError', $p['tuple']($bases), $data);
	})();
	$m['error'] = $m['GetoptError'];
	$m['getopt'] = function(args, shortopts, longopts) {
		if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
		var $8,$9,$eq3,$eq1,$eq2,$and1,$and2,$eq6,$eq4,$eq5,$bool2,$bool3,$and3,$bool1,$bool6,$bool4,$bool5,$6,$7,$4,$5,$2,$3,$1,$10,$11,$12,opts;
		opts = $p['list']([]);
		if ((($bool1=(($eq1=$p['type'](longopts))===($eq2=$p['type'](''))&&$eq1===null?true:
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
			longopts = $p['list']([longopts]);
		}
		else {
			longopts = $p['list'](longopts);
		}
		while ((($bool4=((($bool2=$and1=args) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2['__nonzero__']=='function'?
					$bool2['__nonzero__']() :
					(typeof $bool2['__len__']=='function'?
						($bool2['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($bool3=$and2=(typeof ($1=args)['__array'] != 'undefined'?
			((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__'](0))['startswith']('-')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3['__nonzero__']=='function'?
					$bool3['__nonzero__']() :
					(typeof $bool3['__len__']=='function'?
						($bool3['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq3=(typeof ($3=args)['__array'] != 'undefined'?
			((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
				$3['__getitem__']($4)):
				$3['__getitem__'](0)))===($eq4='-')&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
						$eq3==$eq4))))):$and2):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			if ((($bool5=(($eq5=(typeof ($5=args)['__array'] != 'undefined'?
				((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](0)))===($eq6='--')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				args = $p['__getslice'](args, 1, null);
				break;
			}
			if ((($bool6=(typeof ($7=args)['__array'] != 'undefined'?
				((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](0))['startswith']('--')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				var $tupleassign1 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice']((typeof ($9=args)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](0)), 2, null), longopts, $p['__getslice'](args, 1, null)), 2, null);
				opts = $tupleassign1[0];
				args = $tupleassign1[1];
			}
			else {
				var $tupleassign2 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice']((typeof ($11=args)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](0)), 1, null), shortopts, $p['__getslice'](args, 1, null)), 2, null);
				opts = $tupleassign2[0];
				args = $tupleassign2[1];
			}
		}
		return $p['tuple']([opts, args]);
	};
	$m['getopt']['__name__'] = 'getopt';

	$m['getopt']['__bind_type__'] = 0;
	$m['getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
	$m['gnu_getopt'] = function(args, shortopts, longopts) {
		if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
		var $bool10,prog_args,$bool12,$bool13,all_options_first,$eq10,$eq11,$eq12,$21,$20,$23,$22,$24,$bool11,$eq8,$eq9,$eq7,$bool7,$bool8,$bool9,$14,$15,$16,$17,$13,$18,$19,opts;
		opts = $p['list']([]);
		prog_args = $p['list']([]);
		if ((($bool7=$p['isinstance'](longopts, $p['str'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			longopts = $p['list']([longopts]);
		}
		else {
			longopts = $p['list'](longopts);
		}
		if ((($bool8=shortopts['startswith']('+')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			shortopts = $p['__getslice'](shortopts, 1, null);
			all_options_first = true;
		}
		else {
			all_options_first = false;
		}
		while ((($bool9=args) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			if ((($bool10=(($eq7=(typeof ($13=args)['__array'] != 'undefined'?
				((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](0)))===($eq8='--')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				prog_args += $p['__getslice'](args, 1, null);
				break;
			}
			if ((($bool11=(($eq9=$p['__getslice']((typeof ($15=args)['__array'] != 'undefined'?
				((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](0)), 0, 2))===($eq10='--')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				var $tupleassign3 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice']((typeof ($17=args)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](0)), 2, null), longopts, $p['__getslice'](args, 1, null)), 2, null);
				opts = $tupleassign3[0];
				args = $tupleassign3[1];
			}
			else if ((($bool12=(($eq11=$p['__getslice']((typeof ($19=args)['__array'] != 'undefined'?
				((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](0)), 0, 1))===($eq12='-')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				var $tupleassign4 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice']((typeof ($21=args)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](0)), 1, null), shortopts, $p['__getslice'](args, 1, null)), 2, null);
				opts = $tupleassign4[0];
				args = $tupleassign4[1];
			}
			else {
				if ((($bool13=all_options_first) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					prog_args += args;
					break;
				}
				else {
					prog_args['append']((typeof ($23=args)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=0]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](0)));
					args = $p['__getslice'](args, 1, null);
				}
			}
		}
		return $p['tuple']([opts, prog_args]);
	};
	$m['gnu_getopt']['__name__'] = 'gnu_getopt';

	$m['gnu_getopt']['__bind_type__'] = 0;
	$m['gnu_getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
	$m['do_longs'] = function(opts, opt, longopts, args) {
		var $bool18,$25,$or1,$bool19,i,$bool14,$bool15,$bool16,$bool17,$bool20,$26,$or2,has_arg,$eq13,$eq14,optarg;
		i = opt['find']('=');
		if ((($bool14=(($eq13=i)===($eq14=-(1))&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			optarg = null;
		}
		else {
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](opt, 0, i), $p['__getslice'](opt, (i)+(1), null)]), 2, null);
			opt = $tupleassign5[0];
			optarg = $tupleassign5[1];
		}
		var $tupleassign6 = $p['__ass_unpack']((typeof long_has_args == "undefined"?$m['long_has_args']:long_has_args)(opt, longopts), 2, null);
		has_arg = $tupleassign6[0];
		opt = $tupleassign6[1];
		if ((($bool15=has_arg) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
			if ((($bool16=(optarg === null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool18=!(($bool17=args) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					throw ($m['GetoptError']($p['sprintf']('option --%s requires argument', opt), opt));
				}
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([(typeof ($25=args)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](0)), $p['__getslice'](args, 1, null)]), 2, null);
				optarg = $tupleassign7[0];
				args = $tupleassign7[1];
			}
		}
		else if ((($bool19=optarg) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			throw ($m['GetoptError']($p['sprintf']('option --%s must not have an argument', opt), opt));
		}
		opts['append']($p['tuple']([('--')+(opt), ((($bool20=$or1=optarg) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
			false :
			(typeof $bool20=='object'?
				(typeof $bool20['__nonzero__']=='function'?
					$bool20['__nonzero__']() :
					(typeof $bool20['__len__']=='function'?
						($bool20['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:'')]));
		return $p['tuple']([opts, args]);
	};
	$m['do_longs']['__name__'] = 'do_longs';

	$m['do_longs']['__bind_type__'] = 0;
	$m['do_longs']['__args__'] = [null,null,['opts'],['opt'],['longopts'],['args']];
	$m['long_has_args'] = function(opt, longopts) {
		var $bool25,$cmp1,$28,$cmp2,$len1,$27,possibilities,$bool24,$bool27,$bool26,$len2,$bool23,$bool22,has_arg,$eq15,$eq16,unique_match;
		possibilities = function(){
			var o,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$bool21,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = longopts;
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			o = $iter1_nextval;
			if ((($bool21=o['startswith'](opt)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				$collcomp1['append'](o);
			}
		}

	return $collcomp1;}();
		if ((($bool23=!(($bool22=possibilities) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
			false :
			(typeof $bool22=='object'?
				(typeof $bool22['__nonzero__']=='function'?
					$bool22['__nonzero__']() :
					(typeof $bool22['__len__']=='function'?
						($bool22['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
			throw ($m['GetoptError']($p['sprintf']('option --%s not recognized', opt), opt));
		}
		if ((($bool24=possibilities['__contains__'](opt)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
			return $p['tuple']([false, opt]);
		}
		else if ((($bool25=possibilities['__contains__']((opt)+('='))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
			return $p['tuple']([true, opt]);
		}
		if ((($bool26=((($cmp1=(($len1=possibilities) === null?0:
			(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
				(typeof $len1['__len__'] == 'function'?$len1['__len__']():
					(typeof $len1['length'] != 'undefined'?$len1['length']:
						$p['len']($len1))))))===($cmp2=1)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
			throw ($m['GetoptError']($p['sprintf']('option --%s not a unique prefix', opt), opt));
		}
		if (!( (($eq15=(($len2=possibilities) === null?0:
			(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
				(typeof $len2['__len__'] == 'function'?$len2['__len__']():
					(typeof $len2['length'] != 'undefined'?$len2['length']:
						$p['len']($len2))))))===($eq16=1)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
						$eq15==$eq16))))) )) {
		   throw $p['AssertionError']();
		 }
		unique_match = (typeof ($27=possibilities)['__array'] != 'undefined'?
			((typeof $27['__array'][$28=0]) != 'undefined'?$27['__array'][$28]:
				$27['__getitem__']($28)):
				$27['__getitem__'](0));
		has_arg = unique_match['endswith']('=');
		if ((($bool27=has_arg) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
			unique_match = $p['__getslice'](unique_match, 0, -(1));
		}
		return $p['tuple']([has_arg, unique_match]);
	};
	$m['long_has_args']['__name__'] = 'long_has_args';

	$m['long_has_args']['__bind_type__'] = 0;
	$m['long_has_args']['__args__'] = [null,null,['opt'],['longopts']];
	$m['do_shorts'] = function(opts, optstring, shortopts, args) {
		var $29,opt,$eq20,$32,$bool32,$30,$31,$eq18,$eq19,$bool30,$bool31,optarg,$bool29,$bool28,$eq17;
		while ((($bool28=!(($eq17=optstring)===($eq18='')&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
			var $tupleassign8 = $p['__ass_unpack']($p['tuple']([(typeof ($29=optstring)['__array'] != 'undefined'?
				((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](0)), $p['__getslice'](optstring, 1, null)]), 2, null);
			opt = $tupleassign8[0];
			optstring = $tupleassign8[1];
			if ((($bool29=(typeof short_has_arg == "undefined"?$m['short_has_arg']:short_has_arg)(opt, shortopts)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				if ((($bool30=(($eq19=optstring)===($eq20='')&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					if ((($bool32=!(($bool31=args) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						throw ($m['GetoptError']($p['sprintf']('option -%s requires argument', opt), opt));
					}
					var $tupleassign9 = $p['__ass_unpack']($p['tuple']([(typeof ($31=args)['__array'] != 'undefined'?
						((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__'](0)), $p['__getslice'](args, 1, null)]), 2, null);
					optstring = $tupleassign9[0];
					args = $tupleassign9[1];
				}
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([optstring, '']), 2, null);
				optarg = $tupleassign10[0];
				optstring = $tupleassign10[1];
			}
			else {
				optarg = '';
			}
			opts['append']($p['tuple']([('-')+(opt), optarg]));
		}
		return $p['tuple']([opts, args]);
	};
	$m['do_shorts']['__name__'] = 'do_shorts';

	$m['do_shorts']['__bind_type__'] = 0;
	$m['do_shorts']['__args__'] = [null,null,['opts'],['optstring'],['shortopts'],['args']];
	$m['short_has_arg'] = function(opt, shortopts) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,$34,$33,$eq23,$eq21,$bool33,$iter2_idx,$eq22,$len3,$iter2_array,$eq24;
		$iter2_iter = $p['range']((($len3=shortopts) === null?0:
			(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
				(typeof $len3['__len__'] == 'function'?$len3['__len__']():
					(typeof $len3['length'] != 'undefined'?$len3['length']:
						$p['len']($len3))))));
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			i = $iter2_nextval;
			if ((($bool33=((($eq21=opt)===($eq22=($compare1 = (typeof ($33=shortopts)['__array'] != 'undefined'?
				((typeof $33['__array'][$34=i]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](i))))&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))&&!(($eq23=$compare1)===($eq24=($compare2 = ':'))&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24))))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				return shortopts['startswith'](':', (i)+(1));
			}
		}
		throw ($m['GetoptError']($p['sprintf']('option -%s not recognized', opt), opt));
		return null;
	};
	$m['short_has_arg']['__name__'] = 'short_has_arg';

	$m['short_has_arg']['__bind_type__'] = 0;
	$m['short_has_arg']['__args__'] = [null,null,['opt'],['shortopts']];
	return this;
}; /* end getopt */


/* end module: getopt */



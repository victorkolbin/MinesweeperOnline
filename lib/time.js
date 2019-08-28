/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	var $eq2,$eq1,$bool2,$bool1,$4,$2,$3,$1,$cmp1,$cmp2;

	$m['math'] = $p['___import___']('math', null);
	$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
	$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
	if ((($bool1=((($cmp1=$m['altzone'])===($cmp2=$m['timezone'])?0:
		(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
			($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
			$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['d'] = $m['timezone'];
		$m['timezone'] = $m['altzone'];
		$m['altzone'] = $m['d'];
	}
	$m['_dst'] = ($m['timezone'])-($m['altzone']);
	$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
	$m['d'] = (typeof ($1=$p['str']($m['d']['toLocaleString']())['$$split']())['__array'] != 'undefined'?
		((typeof $1['__array'][$2=-(1)]) != 'undefined'?$1['__array'][$2]:
			$1['__getitem__']($2)):
			$1['__getitem__'](-(1)));
	if ((($bool2=(($eq1=(typeof ($3=$m['d'])['__array'] != 'undefined'?
		((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
			$3['__getitem__']($4)):
			$3['__getitem__'](0)))===($eq2='(')&&$eq1===null?true:
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
		$m['d'] = $p['__getslice']($m['d'], 1, -(1));
	}
	$m['tzname'] = $p['tuple']([$m['d'], null]);
	delete $m['d'];
	$m['__c__days'] = $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
	$m['__c__months'] = $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
	$m['time'] = function() {

		return $p['float'](new Date()['getTime']() / 1000.0);
	};
	$m['time']['__name__'] = 'time';

	$m['time']['__bind_type__'] = 0;
	$m['time']['__args__'] = [null,null];
	$m['struct_time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'time';
		$cls_definition['n_fields'] = 9;
		$cls_definition['n_sequence_fields'] = 9;
		$cls_definition['n_unnamed_fields'] = 0;
		$cls_definition['tm_year'] = null;
		$cls_definition['tm_mon'] = null;
		$cls_definition['tm_mday'] = null;
		$cls_definition['tm_hour'] = null;
		$cls_definition['tm_min'] = null;
		$cls_definition['tm_sec'] = null;
		$cls_definition['tm_wday'] = null;
		$cls_definition['tm_yday'] = null;
		$cls_definition['tm_isdst'] = null;
		$method = $pyjs__bind_method2('__init__', function(ttuple) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ttuple = arguments[1];
			}
			if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];
			var $bool4,$21,$20,$22,$bool3,$8,$9,$6,$7,$5,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19;
			if ((($bool4=!(($bool3=(ttuple === null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['tm_year'] = (typeof ($5=ttuple)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](0));
				self['tm_mon'] = (typeof ($7=ttuple)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](1));
				self['tm_mday'] = (typeof ($9=ttuple)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=2]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](2));
				self['tm_hour'] = (typeof ($11=ttuple)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=3]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](3));
				self['tm_min'] = (typeof ($13=ttuple)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=4]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](4));
				self['tm_sec'] = (typeof ($15=ttuple)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=5]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](5));
				self['tm_wday'] = (typeof ($17=ttuple)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=6]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](6));
				self['tm_yday'] = (typeof ($19=ttuple)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=7]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](7));
				self['tm_isdst'] = (typeof ($21=ttuple)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=8]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](8));
			}
			return null;
		}
	, 1, [null,null,['self'],['ttuple', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$attr15,$attr18,t,$attr10,$attr14,$attr17,$attr16,$attr11,$attr3,$attr13,$attr12;
			t = $p['tuple']([self['tm_year'], self['tm_mon'], self['tm_mday'], self['tm_hour'], self['tm_min'], self['tm_sec'], self['tm_wday'], self['tm_yday'], self['tm_isdst']]);
			return t['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(idx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$24,$attr33,$attr32,$attr31,$attr30,$attr19,$attr36,$attr35,$attr34,$23;
			return (typeof ($23=$p['list']([self['tm_year'], self['tm_mon'], self['tm_mday'], self['tm_hour'], self['tm_min'], self['tm_sec'], self['tm_wday'], self['tm_yday'], self['tm_isdst']]))['__array'] != 'undefined'?
				((typeof $23['__array'][$24=idx]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](idx));
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}
			var $attr51,$attr50,$attr52,$attr54,$attr46,$attr47,$attr44,$attr45,$attr37,$attr43,$attr40,$attr41,$attr42,$attr39,$attr38,$attr53,$attr48,$attr49;
			return $p['__getslice']($p['list']([self['tm_year'], self['tm_mon'], self['tm_mday'], self['tm_hour'], self['tm_min'], self['tm_sec'], self['tm_wday'], self['tm_yday'], self['tm_isdst']]), lower, upper);
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
	})();
	$m['gmtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var startOfYear,$mod2,tm_year,tm,$assign1,$bool5,date,$mod1;
		if ((($bool5=(t === null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			t = $m['time']();
		}
		date = new Date(t*1000);
		tm = $m['struct_time']();
		$assign1 = $p['float_int'](date['getUTCFullYear']());
		tm_year = $assign1;
		tm['tm_year'] = $assign1;
		tm['tm_mon'] = ($p['float_int'](date['getUTCMonth']()))+(1);
		tm['tm_mday'] = $p['float_int'](date['getUTCDate']());
		tm['tm_hour'] = $p['float_int'](date['getUTCHours']());
		tm['tm_min'] = $p['float_int'](date['getUTCMinutes']());
		tm['tm_sec'] = $p['float_int'](date['getUTCSeconds']());
		tm['tm_wday'] = (($mod1=($p['float_int'](date['getUTCDay']()))+(6))!=null && ($mod2=7)!=null && typeof $mod1=='string'?
			$p['sprintf']($mod1,$mod2):
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1));
		tm['tm_isdst'] = 0;
		startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
		tm['tm_yday'] = (1)+($p['float_int'](((t)-((startOfYear['getTime']())/(1000)))/(86400)));
		return tm;
	};
	$m['gmtime']['__name__'] = 'gmtime';

	$m['gmtime']['__bind_type__'] = 0;
	$m['gmtime']['__args__'] = [null,null,['t', null]];
	$m['localtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var startOfYearOffset,$mod3,$mod4,$eq3,tm_mday,startOfYear,startOfDay,$eq4,tm_year,$assign4,tm,$bool6,$assign3,$assign2,date,tm_mon,dt,$bool7,dateOffset;
		if ((($bool6=(t === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			t = $m['time']();
		}
		date = new Date(t*1000);
		dateOffset = date['getTimezoneOffset']();
		tm = $m['struct_time']();
		$assign2 = $p['float_int'](date['getFullYear']());
		tm_year = $assign2;
		tm['tm_year'] = $assign2;
		$assign3 = ($p['float_int'](date['getMonth']()))+(1);
		tm_mon = $assign3;
		tm['tm_mon'] = $assign3;
		$assign4 = $p['float_int'](date['getDate']());
		tm_mday = $assign4;
		tm['tm_mday'] = $assign4;
		tm['tm_hour'] = $p['float_int'](date['getHours']());
		tm['tm_min'] = $p['float_int'](date['getMinutes']());
		tm['tm_sec'] = $p['float_int'](date['getSeconds']());
		tm['tm_wday'] = (($mod3=($p['float_int'](date['getDay']()))+(6))!=null && ($mod4=7)!=null && typeof $mod3=='string'?
			$p['sprintf']($mod3,$mod4):
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3));
		tm['tm_isdst'] = ((($bool7=(($eq3=$m['timezone'])===($eq4=(60)*(date['getTimezoneOffset']()))&&$eq3===null?true:
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
				 true ) )? (0) : (1));
		startOfYear = new Date(tm_year,0,1);
		startOfYearOffset = startOfYear['getTimezoneOffset']();
		startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
		dt = ($p['float']((startOfDay['getTime']())-(startOfYear['getTime']())))/(1000);
		dt = (dt)+((60)*((startOfYearOffset)-(dateOffset)));
		tm['tm_yday'] = (1)+($p['float_int']((dt)/(86400.0)));
		return tm;
	};
	$m['localtime']['__name__'] = 'localtime';

	$m['localtime']['__bind_type__'] = 0;
	$m['localtime']['__args__'] = [null,null,['t', null]];
	$m['mktime'] = function(t) {
		var tm_sec,$29,$28,$25,ts,$27,$26,tm_mon,tm_min,$eq8,tm_hour,$eq6,$eq7,$eq5,tm_year,date,$bool8,$bool9,utc,$38,$36,$37,tm_mday,$35,$32,$33,$30,$31,$34;
		tm_year = (typeof ($25=t)['__array'] != 'undefined'?
			((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
				$25['__getitem__']($26)):
				$25['__getitem__'](0));
		tm_mon = ((typeof ($27=t)['__array'] != 'undefined'?
			((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
				$27['__getitem__']($28)):
				$27['__getitem__'](1)))-(1);
		tm_mday = (typeof ($29=t)['__array'] != 'undefined'?
			((typeof $29['__array'][$30=2]) != 'undefined'?$29['__array'][$30]:
				$29['__getitem__']($30)):
				$29['__getitem__'](2));
		tm_hour = (typeof ($31=t)['__array'] != 'undefined'?
			((typeof $31['__array'][$32=3]) != 'undefined'?$31['__array'][$32]:
				$31['__getitem__']($32)):
				$31['__getitem__'](3));
		tm_min = (typeof ($33=t)['__array'] != 'undefined'?
			((typeof $33['__array'][$34=4]) != 'undefined'?$33['__array'][$34]:
				$33['__getitem__']($34)):
				$33['__getitem__'](4));
		tm_sec = (typeof ($35=t)['__array'] != 'undefined'?
			((typeof $35['__array'][$36=5]) != 'undefined'?$35['__array'][$36]:
				$35['__getitem__']($36)):
				$35['__getitem__'](5));
		date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
		utc = (Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))/(1000);
		ts = (date['getTime']())/(1000);
		if ((($bool8=(($eq5=(typeof ($37=t)['__array'] != 'undefined'?
			((typeof $37['__array'][$38=8]) != 'undefined'?$37['__array'][$38]:
				$37['__getitem__']($38)):
				$37['__getitem__'](8)))===($eq6=0)&&$eq5===null?true:
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
					 true ) )) {
			if ((($bool9=(($eq7=(ts)-(utc))===($eq8=$m['timezone'])&&$eq7===null?true:
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
						 true ) )) {
				return ts;
			}
			return (ts)+($m['_dst']);
		}
		return ts;
	};
	$m['mktime']['__name__'] = 'mktime';

	$m['mktime']['__bind_type__'] = 0;
	$m['mktime']['__args__'] = [null,null,['t']];
	$m['strftime'] = function(fmt, t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
		var firstMonday,tm_sec,$bool10,$bool11,$bool12,$bool13,$bool14,$mod5,$mod6,result,$eq10,tm_min,remainder,$49,$48,tm_mon,tm_hour,$43,$42,$41,$40,$47,$46,$45,$44,$eq9,format,$and1,$and2,startOfYear,firstWeek,tm_year,tm_yday,date,tm_wday,$bool38,$cmp4,$cmp3,$39,tm_mday,weekNo,$len1,$50,$51,$52,$53,$54,re_pct;
		if ((($bool10=(t === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			t = $m['localtime']();
		}
		else {
			if ((($bool13=((($bool12=$and1=!(($bool11=$p['isinstance'](t, $m['struct_time'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					 true ) )?!(($eq9=(($len1=t) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))))===($eq10=9)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10))))):$and1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				throw ($p['TypeError']('argument must be 9-item sequence, not float'));
			}
		}
		tm_year = (typeof ($39=t)['__array'] != 'undefined'?
			((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
				$39['__getitem__']($40)):
				$39['__getitem__'](0));
		tm_mon = (typeof ($41=t)['__array'] != 'undefined'?
			((typeof $41['__array'][$42=1]) != 'undefined'?$41['__array'][$42]:
				$41['__getitem__']($42)):
				$41['__getitem__'](1));
		tm_mday = (typeof ($43=t)['__array'] != 'undefined'?
			((typeof $43['__array'][$44=2]) != 'undefined'?$43['__array'][$44]:
				$43['__getitem__']($44)):
				$43['__getitem__'](2));
		tm_hour = (typeof ($45=t)['__array'] != 'undefined'?
			((typeof $45['__array'][$46=3]) != 'undefined'?$45['__array'][$46]:
				$45['__getitem__']($46)):
				$45['__getitem__'](3));
		tm_min = (typeof ($47=t)['__array'] != 'undefined'?
			((typeof $47['__array'][$48=4]) != 'undefined'?$47['__array'][$48]:
				$47['__getitem__']($48)):
				$47['__getitem__'](4));
		tm_sec = (typeof ($49=t)['__array'] != 'undefined'?
			((typeof $49['__array'][$50=5]) != 'undefined'?$49['__array'][$50]:
				$49['__getitem__']($50)):
				$49['__getitem__'](5));
		tm_wday = (typeof ($51=t)['__array'] != 'undefined'?
			((typeof $51['__array'][$52=6]) != 'undefined'?$51['__array'][$52]:
				$51['__getitem__']($52)):
				$51['__getitem__'](6));
		tm_yday = (typeof ($53=t)['__array'] != 'undefined'?
			((typeof $53['__array'][$54=7]) != 'undefined'?$53['__array'][$54]:
				$53['__getitem__']($54)):
				$53['__getitem__'](7));
		date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
		startOfYear = new Date(tm_year,0,1);
		firstMonday = ((1)-((($mod5=(startOfYear['getDay']())+(6))!=null && ($mod6=7)!=null && typeof $mod5=='string'?
			$p['sprintf']($mod5,$mod6):
			(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))))+(7);
		firstWeek = new Date(tm_year,0,firstMonday);
		weekNo = (date['getTime']())-(firstWeek['getTime']());
		if ((($bool14=((($cmp3=weekNo)===($cmp4=0)?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			weekNo = 0;
		}
		else {
			weekNo = (1)+($p['float_int']((weekNo)/(604800000)));
		}
		format = function(c) {
			var $bool18,$bool19,$eq52,$eq38,$eq53,$eq46,$bool15,$bool16,$bool17,$eq18,$eq19,$mod7,$eq31,$eq36,$eq37,$eq34,$eq35,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,$bool32,$eq39,$mod9,$mod8,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$mod11,$mod10,$mod12,$eq51,$eq49,$eq21,$eq20,$eq23,$eq22,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,$eq48,$cmp5,$eq32,$cmp6,$eq33,$eq43,$eq42,$eq41,$eq40,$eq47,$eq30,$eq45,$eq44,$58,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$eq50,$eq54,$55,$56,$57;
			if ((($bool15=(($eq11=c)===($eq12='%')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				return '%';
			}
			else if ((($bool16=(($eq13=c)===($eq14='a')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				return $p['__getslice'](format('A'), 0, 3);
			}
			else if ((($bool17=(($eq15=c)===($eq16='A')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return (typeof ($55=$m['__c__days'])['__array'] != 'undefined'?
					((typeof $55['__array'][$56=format('w')]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](format('w')));
			}
			else if ((($bool18=(($eq17=c)===($eq18='b')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				return $p['__getslice'](format('B'), 0, 3);
			}
			else if ((($bool19=(($eq19=c)===($eq20='B')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				return (typeof ($57=$m['__c__months'])['__array'] != 'undefined'?
					((typeof $57['__array'][$58=(tm_mon)-(1)]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']((tm_mon)-(1)));
			}
			else if ((($bool20=(($eq21=c)===($eq22='c')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				return date['toLocaleString']();
			}
			else if ((($bool21=(($eq23=c)===($eq24='d')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				return $p['sprintf']('%02d', tm_mday);
			}
			else if ((($bool22=(($eq25=c)===($eq26='H')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				return $p['sprintf']('%02d', tm_hour);
			}
			else if ((($bool23=(($eq27=c)===($eq28='I')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				return $p['sprintf']('%02d', (($mod7=tm_hour)!=null && ($mod8=12)!=null && typeof $mod7=='string'?
					$p['sprintf']($mod7,$mod8):
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7)));
			}
			else if ((($bool24=(($eq29=c)===($eq30='j')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return $p['sprintf']('%03d', tm_yday);
			}
			else if ((($bool25=(($eq31=c)===($eq32='m')&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				return $p['sprintf']('%02d', tm_mon);
			}
			else if ((($bool26=(($eq33=c)===($eq34='M')&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				return $p['sprintf']('%02d', tm_min);
			}
			else if ((($bool27=(($eq35=c)===($eq36='p')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				if ((($bool28=((($cmp5=tm_hour)===($cmp6=12)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					return 'AM';
				}
				return 'PM';
			}
			else if ((($bool29=(($eq37=c)===($eq38='S')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				return $p['sprintf']('%02d', tm_sec);
			}
			else if ((($bool30=(($eq39=c)===($eq40='U')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
			}
			else if ((($bool31=(($eq41=c)===($eq42='w')&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				return $p['sprintf']('%d', (($mod9=(tm_wday)+(1))!=null && ($mod10=7)!=null && typeof $mod9=='string'?
					$p['sprintf']($mod9,$mod10):
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9)));
			}
			else if ((($bool32=(($eq43=c)===($eq44='W')&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				return $p['sprintf']('%d', weekNo);
			}
			else if ((($bool33=(($eq45=c)===($eq46='x')&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				return $p['sprintf']('%s', date['toLocaleDateString']());
			}
			else if ((($bool34=(($eq47=c)===($eq48='X')&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				return $p['sprintf']('%s', date['toLocaleTimeString']());
			}
			else if ((($bool35=(($eq49=c)===($eq50='y')&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				return $p['sprintf']('%02d', (($mod11=tm_year)!=null && ($mod12=100)!=null && typeof $mod11=='string'?
					$p['sprintf']($mod11,$mod12):
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11)));
			}
			else if ((($bool36=(($eq51=c)===($eq52='Y')&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
							$eq51==$eq52)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				return $p['sprintf']('%04d', tm_year);
			}
			else if ((($bool37=(($eq53=c)===($eq54='Z')&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
			}
			return ('%')+(c);
		};
		format['__name__'] = 'format';

		format['__bind_type__'] = 0;
		format['__args__'] = [null,null,['c']];
		result = '';
		remainder = fmt;
		re_pct = /([^%]*)%(.)(.*)/;
var a, fmtChar;
		while ((($bool38=remainder) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
		}
		return $p['str'](result);
	};
	$m['strftime']['__name__'] = 'strftime';

	$m['strftime']['__bind_type__'] = 0;
	$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
	$m['asctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $69,$68,$65,$64,$67,$66,$61,$60,$63,$62,$mod14,$mod13,$72,$73,$70,$71,$76,$74,$75,$59,$bool39;
		if ((($bool39=(t === null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
			t = $m['localtime']();
		}
		return $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']((typeof ($61=$m['__c__days'])['__array'] != 'undefined'?
			((typeof $61['__array'][$62=(($mod13=((typeof ($59=t)['__array'] != 'undefined'?
			((typeof $59['__array'][$60=6]) != 'undefined'?$59['__array'][$60]:
				$59['__getitem__']($60)):
				$59['__getitem__'](6)))+(1))!=null && ($mod14=7)!=null && typeof $mod13=='string'?
			$p['sprintf']($mod13,$mod14):
			(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13))]) != 'undefined'?$61['__array'][$62]:
				$61['__getitem__']($62)):
				$61['__getitem__']((($mod13=((typeof ($59=t)['__array'] != 'undefined'?
			((typeof $59['__array'][$60=6]) != 'undefined'?$59['__array'][$60]:
				$59['__getitem__']($60)):
				$59['__getitem__'](6)))+(1))!=null && ($mod14=7)!=null && typeof $mod13=='string'?
			$p['sprintf']($mod13,$mod14):
			(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13)))), 0, 3), (typeof ($65=$m['__c__months'])['__array'] != 'undefined'?
			((typeof $65['__array'][$66=((typeof ($63=t)['__array'] != 'undefined'?
			((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
				$63['__getitem__']($64)):
				$63['__getitem__'](1)))-(1)]) != 'undefined'?$65['__array'][$66]:
				$65['__getitem__']($66)):
				$65['__getitem__'](((typeof ($63=t)['__array'] != 'undefined'?
			((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
				$63['__getitem__']($64)):
				$63['__getitem__'](1)))-(1))), (typeof ($67=t)['__array'] != 'undefined'?
			((typeof $67['__array'][$68=2]) != 'undefined'?$67['__array'][$68]:
				$67['__getitem__']($68)):
				$67['__getitem__'](2)), (typeof ($69=t)['__array'] != 'undefined'?
			((typeof $69['__array'][$70=3]) != 'undefined'?$69['__array'][$70]:
				$69['__getitem__']($70)):
				$69['__getitem__'](3)), (typeof ($71=t)['__array'] != 'undefined'?
			((typeof $71['__array'][$72=4]) != 'undefined'?$71['__array'][$72]:
				$71['__getitem__']($72)):
				$71['__getitem__'](4)), (typeof ($73=t)['__array'] != 'undefined'?
			((typeof $73['__array'][$74=5]) != 'undefined'?$73['__array'][$74]:
				$73['__getitem__']($74)):
				$73['__getitem__'](5)), (typeof ($75=t)['__array'] != 'undefined'?
			((typeof $75['__array'][$76=0]) != 'undefined'?$75['__array'][$76]:
				$75['__getitem__']($76)):
				$75['__getitem__'](0))]));
	};
	$m['asctime']['__name__'] = 'asctime';

	$m['asctime']['__bind_type__'] = 0;
	$m['asctime']['__args__'] = [null,null,['t', null]];
	$m['ctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

		return $m['asctime']($m['localtime'](t));
	};
	$m['ctime']['__name__'] = 'ctime';

	$m['ctime']['__bind_type__'] = 0;
	$m['ctime']['__args__'] = [null,null,['t', null]];

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

	$m['_strptime'] = function(datestring, format) {
		var $pyjs_try_err;
		try {
			return $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
			}
		}
		return null;
	};
	$m['_strptime']['__name__'] = '_strptime';

	$m['_strptime']['__bind_type__'] = 0;
	$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
	$m['strptime'] = function(datestring, format) {
		var tt,$pyjs_try_err;
		try {
			tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
			tt['tm_isdst'] = -(1);
			return tt;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
			}
		}
		return null;
	};
	$m['strptime']['__name__'] = 'strptime';

	$m['strptime']['__bind_type__'] = 0;
	$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/

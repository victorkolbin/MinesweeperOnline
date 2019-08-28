/* start module: pyjsdl.rect */
$pyjs['loaded_modules']['pyjsdl.rect'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.rect']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.rect'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.rect'];
	$m['__repr__'] = function() { return '<module: pyjsdl.rect>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.rect';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['rect'] = $pyjs['loaded_modules']['pyjsdl.rect'];
	var $attr643,$bool66,$attr639,$attr644,$attr641,$attr642,$attr640;

	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Rect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		$cls_definition['__slots__'] = $p['list'](['x', 'y', 'width', 'height']);
		var 		$lambda1 = function(self, val) {
			var $attr1,$attr2,$attr4,$attr3,$4,$2,$3,$1;
			return self['setLocation'](((typeof ($1=val)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)))-($p['float_int']((self['width'])/(2))), ((typeof ($3=val)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)))-($p['float_int']((self['height'])/(2))));
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['self'],['val']];
		var 		$lambda2 = function(self, val) {
			var $attr8,$attr5,$attr7,$attr6;
			return self['setLocation']((val)-($p['float_int']((self['width'])/(2))), self['y']);
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['self'],['val']];
		var 		$lambda3 = function(self, val) {
			var $attr9,$attr11,$attr10,$attr12;
			return self['setLocation'](self['x'], (val)-($p['float_int']((self['height'])/(2))));
		};
		$lambda3['__name__'] = '$lambda3';

		$lambda3['__bind_type__'] = 0;
		$lambda3['__args__'] = [null,null,['self'],['val']];
		var 		$lambda4 = function(self, val) {
			var $attr14,$attr13;
			return self['setLocation'](self['x'], val);
		};
		$lambda4['__name__'] = '$lambda4';

		$lambda4['__bind_type__'] = 0;
		$lambda4['__args__'] = [null,null,['self'],['val']];
		var 		$lambda5 = function(self, val) {
			var $attr15,$attr16;
			return self['setLocation'](val, self['y']);
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['self'],['val']];
		var 		$lambda6 = function(self, val) {
			var $attr20,$attr19,$attr18,$attr17;
			return self['setLocation'](self['x'], (val)-(self['height']));
		};
		$lambda6['__name__'] = '$lambda6';

		$lambda6['__bind_type__'] = 0;
		$lambda6['__args__'] = [null,null,['self'],['val']];
		var 		$lambda7 = function(self, val) {
			var $attr21,$attr22,$attr23,$attr24;
			return self['setLocation']((val)-(self['width']), self['y']);
		};
		$lambda7['__name__'] = '$lambda7';

		$lambda7['__bind_type__'] = 0;
		$lambda7['__args__'] = [null,null,['self'],['val']];
		var 		$lambda8 = function(self, val) {
			var $8,$6,$7,$5;
			return self['setLocation']((typeof ($5=val)['__array'] != 'undefined'?
				((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](0)), (typeof ($7=val)['__array'] != 'undefined'?
				((typeof $7['__array'][$8=1]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](1)));
		};
		$lambda8['__name__'] = '$lambda8';

		$lambda8['__bind_type__'] = 0;
		$lambda8['__args__'] = [null,null,['self'],['val']];
		var 		$lambda9 = function(self, val) {
			var $10,$11,$12,$attr25,$attr26,$9;
			return self['setLocation']((typeof ($9=val)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](0)), ((typeof ($11=val)['__array'] != 'undefined'?
				((typeof $11['__array'][$12=1]) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__'](1)))-(self['height']));
		};
		$lambda9['__name__'] = '$lambda9';

		$lambda9['__bind_type__'] = 0;
		$lambda9['__args__'] = [null,null,['self'],['val']];
		var 		$lambda10 = function(self, val) {
			var $14,$15,$16,$13,$attr27,$attr28;
			return self['setLocation'](((typeof ($13=val)['__array'] != 'undefined'?
				((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](0)))-(self['width']), (typeof ($15=val)['__array'] != 'undefined'?
				((typeof $15['__array'][$16=1]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](1)));
		};
		$lambda10['__name__'] = '$lambda10';

		$lambda10['__bind_type__'] = 0;
		$lambda10['__args__'] = [null,null,['self'],['val']];
		var 		$lambda11 = function(self, val) {
			var $17,$20,$18,$19,$attr32,$attr31,$attr30,$attr29;
			return self['setLocation'](((typeof ($17=val)['__array'] != 'undefined'?
				((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](0)))-(self['width']), ((typeof ($19=val)['__array'] != 'undefined'?
				((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](1)))-(self['height']));
		};
		$lambda11['__name__'] = '$lambda11';

		$lambda11['__bind_type__'] = 0;
		$lambda11['__args__'] = [null,null,['self'],['val']];
		var 		$lambda12 = function(self, val) {
			var $21,$22,$24,$attr33,$attr34,$23;
			return self['setLocation'](((typeof ($21=val)['__array'] != 'undefined'?
				((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](0)))-($p['float_int']((self['width'])/(2))), (typeof ($23=val)['__array'] != 'undefined'?
				((typeof $23['__array'][$24=1]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](1)));
		};
		$lambda12['__name__'] = '$lambda12';

		$lambda12['__bind_type__'] = 0;
		$lambda12['__args__'] = [null,null,['self'],['val']];
		var 		$lambda13 = function(self, val) {
			var $28,$25,$27,$26,$attr36,$attr35;
			return self['setLocation']((typeof ($25=val)['__array'] != 'undefined'?
				((typeof $25['__array'][$26=0]) != 'undefined'?$25['__array'][$26]:
					$25['__getitem__']($26)):
					$25['__getitem__'](0)), ((typeof ($27=val)['__array'] != 'undefined'?
				((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](1)))-($p['float_int']((self['height'])/(2))));
		};
		$lambda13['__name__'] = '$lambda13';

		$lambda13['__bind_type__'] = 0;
		$lambda13['__args__'] = [null,null,['self'],['val']];
		var 		$lambda14 = function(self, val) {
			var $29,$32,$30,$31,$attr37,$attr40,$attr39,$attr38;
			return self['setLocation'](((typeof ($29=val)['__array'] != 'undefined'?
				((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](0)))-($p['float_int']((self['width'])/(2))), ((typeof ($31=val)['__array'] != 'undefined'?
				((typeof $31['__array'][$32=1]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](1)))-(self['height']));
		};
		$lambda14['__name__'] = '$lambda14';

		$lambda14['__bind_type__'] = 0;
		$lambda14['__args__'] = [null,null,['self'],['val']];
		var 		$lambda15 = function(self, val) {
			var $36,$34,$35,$33,$attr44,$attr42,$attr43,$attr41;
			return self['setLocation'](((typeof ($33=val)['__array'] != 'undefined'?
				((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](0)))-(self['width']), ((typeof ($35=val)['__array'] != 'undefined'?
				((typeof $35['__array'][$36=1]) != 'undefined'?$35['__array'][$36]:
					$35['__getitem__']($36)):
					$35['__getitem__'](1)))-($p['float_int']((self['height'])/(2))));
		};
		$lambda15['__name__'] = '$lambda15';

		$lambda15['__bind_type__'] = 0;
		$lambda15['__args__'] = [null,null,['self'],['val']];
		var 		$lambda16 = function(self, val) {
			var $38,$39,$37,$40;
			return self['setSize']((typeof ($37=val)['__array'] != 'undefined'?
				((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
					$37['__getitem__']($38)):
					$37['__getitem__'](0)), (typeof ($39=val)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__'](1)));
		};
		$lambda16['__name__'] = '$lambda16';

		$lambda16['__bind_type__'] = 0;
		$lambda16['__args__'] = [null,null,['self'],['val']];
		var 		$lambda17 = function(self, val) {
			var $attr46,$attr45;
			return self['setSize'](val, self['height']);
		};
		$lambda17['__name__'] = '$lambda17';

		$lambda17['__bind_type__'] = 0;
		$lambda17['__args__'] = [null,null,['self'],['val']];
		var 		$lambda18 = function(self, val) {
			var $attr47,$attr48;
			return self['setSize'](self['width'], val);
		};
		$lambda18['__name__'] = '$lambda18';

		$lambda18['__bind_type__'] = 0;
		$lambda18['__args__'] = [null,null,['self'],['val']];
		var 		$lambda19 = function(self, val) {
			var $attr50,$attr49;
			return self['setSize'](val, self['height']);
		};
		$lambda19['__name__'] = '$lambda19';

		$lambda19['__bind_type__'] = 0;
		$lambda19['__args__'] = [null,null,['self'],['val']];
		var 		$lambda20 = function(self, val) {
			var $attr51,$attr52;
			return self['setSize'](self['width'], val);
		};
		$lambda20['__name__'] = '$lambda20';

		$lambda20['__bind_type__'] = 0;
		$lambda20['__args__'] = [null,null,['self'],['val']];
		var 		$lambda21 = function(self, val) {
			var $attr53,$attr54;
			return self['setLocation'](val, self['y']);
		};
		$lambda21['__name__'] = '$lambda21';

		$lambda21['__bind_type__'] = 0;
		$lambda21['__args__'] = [null,null,['self'],['val']];
		var 		$lambda22 = function(self, val) {
			var $attr55,$attr56;
			return self['setLocation'](self['x'], val);
		};
		$lambda22['__name__'] = '$lambda22';

		$lambda22['__bind_type__'] = 0;
		$lambda22['__args__'] = [null,null,['self'],['val']];
		$cls_definition['_xy'] = $p['dict']([['center', $lambda1], ['centerx', $lambda2], ['centery', $lambda3], ['top', $lambda4], ['left', $lambda5], ['bottom', $lambda6], ['right', $lambda7], ['topleft', $lambda8], ['bottomleft', $lambda9], ['topright', $lambda10], ['bottomright', $lambda11], ['midtop', $lambda12], ['midleft', $lambda13], ['midbottom', $lambda14], ['midright', $lambda15], ['size', $lambda16], ['width', $lambda17], ['height', $lambda18], ['w', $lambda19], ['h', $lambda20], ['x', $lambda21], ['y', $lambda22]]);
		var 		$lambda23 = function(self) {
			var $attr59,$attr58,$attr64,$attr60,$attr61,$attr57,$attr63,$attr62;
			return $p['tuple']([(self['x'])+($p['float_int']((self['width'])/(2))), (self['y'])+($p['float_int']((self['height'])/(2)))]);
		};
		$lambda23['__name__'] = '$lambda23';

		$lambda23['__bind_type__'] = 0;
		$lambda23['__args__'] = [null,null,['self']];
		var 		$lambda24 = function(self) {
			var $attr65,$attr67,$attr68,$attr66;
			return (self['x'])+($p['float_int']((self['width'])/(2)));
		};
		$lambda24['__name__'] = '$lambda24';

		$lambda24['__bind_type__'] = 0;
		$lambda24['__args__'] = [null,null,['self']];
		var 		$lambda25 = function(self) {
			var $attr72,$attr69,$attr71,$attr70;
			return (self['y'])+($p['float_int']((self['height'])/(2)));
		};
		$lambda25['__name__'] = '$lambda25';

		$lambda25['__bind_type__'] = 0;
		$lambda25['__args__'] = [null,null,['self']];
		var 		$lambda26 = function(self) {
			var $attr74,$attr73;
			return self['y'];
		};
		$lambda26['__name__'] = '$lambda26';

		$lambda26['__bind_type__'] = 0;
		$lambda26['__args__'] = [null,null,['self']];
		var 		$lambda27 = function(self) {
			var $attr76,$attr75;
			return self['x'];
		};
		$lambda27['__name__'] = '$lambda27';

		$lambda27['__bind_type__'] = 0;
		$lambda27['__args__'] = [null,null,['self']];
		var 		$lambda28 = function(self) {
			var $attr77,$attr80,$attr79,$attr78;
			return (self['y'])+(self['height']);
		};
		$lambda28['__name__'] = '$lambda28';

		$lambda28['__bind_type__'] = 0;
		$lambda28['__args__'] = [null,null,['self']];
		var 		$lambda29 = function(self) {
			var $attr82,$attr83,$attr81,$attr84;
			return (self['x'])+(self['width']);
		};
		$lambda29['__name__'] = '$lambda29';

		$lambda29['__bind_type__'] = 0;
		$lambda29['__args__'] = [null,null,['self']];
		var 		$lambda30 = function(self) {
			var $attr88,$attr86,$attr87,$attr85;
			return $p['tuple']([self['x'], self['y']]);
		};
		$lambda30['__name__'] = '$lambda30';

		$lambda30['__bind_type__'] = 0;
		$lambda30['__args__'] = [null,null,['self']];
		var 		$lambda31 = function(self) {
			var $attr94,$attr91,$attr90,$attr93,$attr92,$attr89;
			return $p['tuple']([self['x'], (self['y'])+(self['height'])]);
		};
		$lambda31['__name__'] = '$lambda31';

		$lambda31['__bind_type__'] = 0;
		$lambda31['__args__'] = [null,null,['self']];
		var 		$lambda32 = function(self) {
			var $attr95,$attr97,$attr96,$attr99,$attr98,$attr100;
			return $p['tuple']([(self['x'])+(self['width']), self['y']]);
		};
		$lambda32['__name__'] = '$lambda32';

		$lambda32['__bind_type__'] = 0;
		$lambda32['__args__'] = [null,null,['self']];
		var 		$lambda33 = function(self) {
			var $attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr101,$attr108;
			return $p['tuple']([(self['x'])+(self['width']), (self['y'])+(self['height'])]);
		};
		$lambda33['__name__'] = '$lambda33';

		$lambda33['__bind_type__'] = 0;
		$lambda33['__args__'] = [null,null,['self']];
		var 		$lambda34 = function(self) {
			var $attr111,$attr110,$attr112,$attr114,$attr113,$attr109;
			return $p['tuple']([(self['x'])+($p['float_int']((self['width'])/(2))), self['y']]);
		};
		$lambda34['__name__'] = '$lambda34';

		$lambda34['__bind_type__'] = 0;
		$lambda34['__args__'] = [null,null,['self']];
		var 		$lambda35 = function(self) {
			var $attr119,$attr118,$attr115,$attr117,$attr116,$attr120;
			return $p['tuple']([self['x'], (self['y'])+($p['float_int']((self['height'])/(2)))]);
		};
		$lambda35['__name__'] = '$lambda35';

		$lambda35['__bind_type__'] = 0;
		$lambda35['__args__'] = [null,null,['self']];
		var 		$lambda36 = function(self) {
			var $attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128;
			return $p['tuple']([(self['x'])+($p['float_int']((self['width'])/(2))), (self['y'])+(self['height'])]);
		};
		$lambda36['__name__'] = '$lambda36';

		$lambda36['__bind_type__'] = 0;
		$lambda36['__args__'] = [null,null,['self']];
		var 		$lambda37 = function(self) {
			var $attr133,$attr132,$attr131,$attr130,$attr136,$attr135,$attr134,$attr129;
			return $p['tuple']([(self['x'])+(self['width']), (self['y'])+($p['float_int']((self['height'])/(2)))]);
		};
		$lambda37['__name__'] = '$lambda37';

		$lambda37['__bind_type__'] = 0;
		$lambda37['__args__'] = [null,null,['self']];
		var 		$lambda38 = function(self) {
			var $attr138,$attr137,$attr139,$attr140;
			return $p['tuple']([self['width'], self['height']]);
		};
		$lambda38['__name__'] = '$lambda38';

		$lambda38['__bind_type__'] = 0;
		$lambda38['__args__'] = [null,null,['self']];
		var 		$lambda39 = function(self) {
			var $attr142,$attr141;
			return self['width'];
		};
		$lambda39['__name__'] = '$lambda39';

		$lambda39['__bind_type__'] = 0;
		$lambda39['__args__'] = [null,null,['self']];
		var 		$lambda40 = function(self) {
			var $attr143,$attr144;
			return self['height'];
		};
		$lambda40['__name__'] = '$lambda40';

		$lambda40['__bind_type__'] = 0;
		$lambda40['__args__'] = [null,null,['self']];
		$cls_definition['_at'] = $p['dict']([['center', $lambda23], ['centerx', $lambda24], ['centery', $lambda25], ['top', $lambda26], ['left', $lambda27], ['bottom', $lambda28], ['right', $lambda29], ['topleft', $lambda30], ['bottomleft', $lambda31], ['topright', $lambda32], ['bottomright', $lambda33], ['midtop', $lambda34], ['midleft', $lambda35], ['midbottom', $lambda36], ['midright', $lambda37], ['size', $lambda38], ['w', $lambda39], ['h', $lambda40]]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $62,arg,$attr146,$attr147,$attr145,ln,$attr149,$49,$48,$43,$42,$41,$65,$47,$46,$45,$44,$eq2,$eq3,$eq1,$eq6,$eq4,$eq5,$bool2,$bool3,$bool1,$bool4,$64,$attr154,$66,$attr151,$attr150,$attr153,$attr152,$61,$attr148,$60,$58,$59,$len2,$63,$len1,$50,$51,$52,$53,$54,$55,$56,$57;
			if ((($bool1=(($eq1=(($len1=args) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
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
				arg = (typeof ($41=args)['__array'] != 'undefined'?
					((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__'](0));
			}
			else {
				arg = args;
			}
			ln = (($len2=arg) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))));
			if ((($bool2=(($eq3=ln)===($eq4=4)&&$eq3===null?true:
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
				self['setLocation']((typeof ($43=arg)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=0]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__'](0)), (typeof ($45=arg)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=1]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__'](1)));
				self['setSize']((typeof ($47=arg)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=2]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](2)), (typeof ($49=arg)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=3]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](3)));
			}
			else if ((($bool3=(($eq5=ln)===($eq6=2)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['setLocation']((typeof ($53=(typeof ($51=arg)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](0)), (typeof ($57=(typeof ($55=arg)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](1)));
				self['setSize']((typeof ($61=(typeof ($59=arg)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=1]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](0)), (typeof ($65=(typeof ($63=arg)['__array'] != 'undefined'?
					((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $65['__array'][$66=1]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__'](1)));
			}
			else {
				if ((($bool4=$p['hasattr'](arg, 'rect')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					arg = arg['rect'];
				}
				self['setLocation'](arg['x'], arg['y']);
				self['setSize'](arg['width'], arg['height']);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr155,$attr157,$attr156,$attr160,$attr159,$attr158,$attr162,$attr161;
			return $p['sprintf']('<rect(%d, %d, %d, %d)>', $p['tuple']([self['x'], self['y'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr168,$attr169,$attr164,$attr165,$attr167,$attr172,$attr171,$attr163,$attr170,$attr166;
			return $p['sprintf']('%s(%d,%d,%d,%d)', $p['tuple']([self['__class__'], self['x'], self['y'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $attr176,$attr175,$attr174,$attr173,$68,$bool5,$67;
			if ((($bool5=self['_at']['__contains__'](attr)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return (typeof ($67=self['_at'])['__array'] != 'undefined'?
					((typeof $67['__array'][$68=attr]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__'](attr))(self);
			}
			else {
				throw ($p['AttributeError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				val = arguments[2];
			}
			var $attr179,$70,$attr178,$attr177,$attr180,$bool6,$69;
			if ((($bool6=self['_xy']['__contains__'](attr)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				(typeof ($69=self['_xy'])['__array'] != 'undefined'?
					((typeof $69['__array'][$70=attr]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](attr))(self, val);
				return null;
			}
			else {
				throw ($p['AttributeError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['attr'],['val']]);
		$cls_definition['__setattr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $72,$71,$attr188,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr181;
			return (typeof ($71=$p['list']([self['x'], self['y'], self['width'], self['height']]))['__array'] != 'undefined'?
				((typeof $71['__array'][$72=key]) != 'undefined'?$71['__array'][$72]:
					$71['__getitem__']($72)):
					$71['__getitem__'](key));
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				val = arguments[2];
			}
			var $73,$74,value,$lambda41,$lambda42,$lambda43,$lambda44;
			value = $p['float_int'](val);
			var 			$lambda41 = function(value) {

				return self['__setattr__']('x', value);
			};
			$lambda41['__name__'] = '$lambda41';

			$lambda41['__bind_type__'] = 0;
			$lambda41['__args__'] = [null,null,['value']];
			var 			$lambda42 = function(value) {

				return self['__setattr__']('y', value);
			};
			$lambda42['__name__'] = '$lambda42';

			$lambda42['__bind_type__'] = 0;
			$lambda42['__args__'] = [null,null,['value']];
			var 			$lambda43 = function(value) {

				return self['__setattr__']('width', value);
			};
			$lambda43['__name__'] = '$lambda43';

			$lambda43['__bind_type__'] = 0;
			$lambda43['__args__'] = [null,null,['value']];
			var 			$lambda44 = function(value) {

				return self['__setattr__']('height', value);
			};
			$lambda44['__name__'] = '$lambda44';

			$lambda44['__bind_type__'] = 0;
			$lambda44['__args__'] = [null,null,['value']];
			(typeof ($73=$p['list']([$lambda41, $lambda42, $lambda43, $lambda44]))['__array'] != 'undefined'?
				((typeof $73['__array'][$74=key]) != 'undefined'?$73['__array'][$74]:
					$73['__getitem__']($74)):
					$73['__getitem__'](key))(value);
			return null;
		}
	, 1, [null,null,['self'],['key'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr189,$attr196;
			return $p['iter']($p['list']([self['x'], self['y'], self['width'], self['height']]));
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
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr197,$attr199,$attr198,$attr200,$bool7,$and1,$and2;
			return ((($bool7=$and1=self['width']) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['height']:$and1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool10,$eq10,$eq11,$eq12,$eq13,$eq14,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$attr201,$attr203,$attr202,$eq8,$eq9,$and3,$and4,$eq7,$and6,$and5,$bool8,$bool9,$attr212,$attr213,$attr210,$attr211,$attr216,$attr214,$attr215;
			return ((($bool8=$and3=(($eq7=self['x'])===($eq8=other['x'])&&$eq7===null?true:
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
					 true ) )?((($bool9=$and4=(($eq9=self['y'])===($eq10=other['y'])&&$eq9===null?true:
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
					 true ) )?((($bool10=$and5=(($eq11=self['width'])===($eq12=other['width'])&&$eq11===null?true:
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
					 true ) )?(($eq13=self['height'])===($eq14=other['height'])&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14))))):$and5):$and4):$and3);
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
			var $attr230,$attr231,$attr232,$or4,$bool11,$bool12,$bool13,$eq18,$eq19,$or1,$eq15,$eq16,$eq17,$or3,$or2,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr220,$attr229,$attr228,$eq21,$eq20,$eq22,$attr218,$attr219,$attr217;
			return ((($bool11=$or1=!(($eq15=self['x'])===($eq16=other['x'])&&$eq15===null?true:
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
					 true ) )?$or1:((($bool12=$or2=!(($eq17=self['y'])===($eq18=other['y'])&&$eq17===null?true:
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
					 true ) )?$or2:((($bool13=$or3=!(($eq19=self['width'])===($eq20=other['width'])&&$eq19===null?true:
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
					 true ) )?$or3:!(($eq21=self['height'])===($eq22=other['height'])&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22))))))));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		$method = $pyjs__bind_method2('setLocation', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['x'] = $p['float_int'](x);
			self['y'] = $p['float_int'](y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setLocation'] = $method;
		$method = $pyjs__bind_method2('setSize', function(w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				h = arguments[2];
			}

			self['width'] = $p['float_int'](w);
			self['height'] = $p['float_int'](h);
			return null;
		}
	, 1, [null,null,['self'],['w'],['h']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('_setLocation', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](x));
			$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](y));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['_setLocation'] = $method;
		$method = $pyjs__bind_method2('_setSize', function(w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				h = arguments[2];
			}

			$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](w));
			$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](h));
			return null;
		}
	, 1, [null,null,['self'],['w'],['h']]);
		$cls_definition['_setSize'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr233,$attr238,$attr239,$attr240;
			return $m['Rect'](self['x'], self['y'], self['width'], self['height']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $attr241,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr248;
			return $m['Rect']((self['x'])+(x), (self['y'])+(y), self['width'], self['height']);
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('move_ip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var pos = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var pos = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr256,$attr254,$attr255,$attr252,$attr250,$attr251,$86,$attr249,$bool14,$85,$84,$83,$82,$81,$attr253,$eq23,$eq24,$80,$76,$77,$75,$78,$79,$len3;
			if ((($bool14=(($eq23=(($len3=pos) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))===($eq24=2)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['setLocation']((self['x'])+((typeof ($75=pos)['__array'] != 'undefined'?
					((typeof $75['__array'][$76=0]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__'](0))), (self['y'])+((typeof ($77=pos)['__array'] != 'undefined'?
					((typeof $77['__array'][$78=1]) != 'undefined'?$77['__array'][$78]:
						$77['__getitem__']($78)):
						$77['__getitem__'](1))));
			}
			else {
				self['setLocation']((self['x'])+((typeof ($81=(typeof ($79=pos)['__array'] != 'undefined'?
					((typeof $79['__array'][$80=0]) != 'undefined'?$79['__array'][$80]:
						$79['__getitem__']($80)):
						$79['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $81['__array'][$82=0]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](0))), (self['y'])+((typeof ($85=(typeof ($83=pos)['__array'] != 'undefined'?
					((typeof $83['__array'][$84=0]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $85['__array'][$86=1]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__'](1))));
			}
			return null;
		}
	, 1, ['pos',null,['self']]);
		$cls_definition['move_ip'] = $method;
		$method = $pyjs__bind_method2('inflate', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $attr258,$attr259,$attr263,$attr257,$attr260,$attr264,$attr262,$attr261;
			return $m['Rect']((self['x'])-($p['float_int'](($p['float'](x))/(2))), (self['y'])-($p['float_int'](($p['float'](y))/(2))), (self['width'])+(x), (self['height'])+(y));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['inflate'] = $method;
		$method = $pyjs__bind_method2('inflate_ip', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $attr269,$attr268,$attr270,$attr271,$attr267,$attr266,$attr265,$attr272;
			self['setSize']((self['width'])+(x), (self['height'])+(y));
			self['setLocation']((self['x'])-($p['float_int'](($p['float'](x))/(2))), (self['y'])-($p['float_int'](($p['float'](y))/(2))));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['inflate_ip'] = $method;
		$method = $pyjs__bind_method2('clip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr278,$attr279,$attr299,$bool19,$attr273,$attr274,$bool15,$bool16,$bool17,$attr302,$attr285,$attr284,$attr287,$attr286,$attr281,$attr280,$attr283,$attr282,$attr303,$attr289,$attr288,$bool20,$attr304,$cmp5,$attr300,$attr301,$bool18,$attr293,$cmp7,$attr275,$cmp6,$attr276,$attr296,$attr277,$attr297,$attr292,$cmp4,$attr290,$attr291,$cmp1,$attr294,$cmp3,$cmp2,h,$attr298,$attr295,$cmp8,s,r,w,y,x;
			if ((($bool16=!(($bool15=self['intersects'](rect)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15['__nonzero__']=='function'?
						$bool15['__nonzero__']() :
						(typeof $bool15['__len__']=='function'?
							($bool15['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				return $m['Rect'](0, 0, 0, 0);
			}
			else {
				x = ((($bool17=((($cmp1=self['x'])===($cmp2=rect['x'])?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['x']) : (rect['x']));
				y = ((($bool18=((($cmp3=self['y'])===($cmp4=rect['y'])?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18['__nonzero__']=='function'?
							$bool18['__nonzero__']() :
							(typeof $bool18['__len__']=='function'?
								($bool18['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['y']) : (rect['y']));
				s = (self['x'])+(self['width']);
				r = (rect['x'])+(rect['width']);
				w = (((($bool19=((($cmp5=s)===($cmp6=r)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (s) : (r)))-(x);
				s = (self['y'])+(self['height']);
				r = (rect['y'])+(rect['height']);
				h = (((($bool20=((($cmp7=s)===($cmp8=r)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (s) : (r)))-(y);
				return $m['Rect'](x, y, w, h);
			}
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clip'] = $method;
		$method = $pyjs__bind_method2('intersection', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['clip'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('contains', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr317,$attr316,$attr315,$attr314,$attr313,$attr312,$attr311,$attr310,$attr319,$attr318,$and9,$attr328,$bool21,$bool23,$bool22,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$and8,$attr305,$attr306,$attr307,$attr308,$attr309,$and7,$cmp15,$cmp14,$and10,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp9;
			return ((($bool21=$and7=((($cmp9=self['x'])===($cmp10=rect['x'])?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21['__nonzero__']=='function'?
						$bool21['__nonzero__']() :
						(typeof $bool21['__len__']=='function'?
							($bool21['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool22=$and8=((((($cmp11=(self['x'])+(self['width']))===($cmp12=(rect['x'])+(rect['width']))?0:
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
					 true ) )?((($bool23=$and9=((($cmp13=self['y'])===($cmp14=rect['y'])?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23['__nonzero__']=='function'?
						$bool23['__nonzero__']() :
						(typeof $bool23['__len__']=='function'?
							($bool23['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp15=(self['y'])+(self['height']))===($cmp16=(rect['y'])+(rect['height']))?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))))|1) == 1):$and9):$and8):$and7);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['contains'] = $method;
		$method = $pyjs__bind_method2('intersects', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr352,$attr351,$attr350,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,$bool25,$bool24,$attr329,$attr348,$attr349,$attr340,$attr341,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$and12,$and13,$cmp17,$and11,$bool26,$and14,$cmp19,$cmp18,$attr339,$attr338,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
			return ((($bool24=$and11=((($cmp17=self['x'])===($cmp18=(rect['x'])+(rect['width']))?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24['__nonzero__']=='function'?
						$bool24['__nonzero__']() :
						(typeof $bool24['__len__']=='function'?
							($bool24['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool25=$and12=((($cmp19=rect['x'])===($cmp20=(self['x'])+(self['width']))?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25['__nonzero__']=='function'?
						$bool25['__nonzero__']() :
						(typeof $bool25['__len__']=='function'?
							($bool25['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool26=$and13=((($cmp21=self['y'])===($cmp22=(rect['y'])+(rect['height']))?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26['__nonzero__']=='function'?
						$bool26['__nonzero__']() :
						(typeof $bool26['__len__']=='function'?
							($bool26['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp23=rect['y'])===($cmp24=(self['y'])+(self['height']))?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1):$and13):$and12):$and11);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('union', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr371,$attr370,$attr359,$attr358,$attr375,$attr374,$attr373,$attr376,$attr353,$attr378,$attr357,$attr356,$attr355,$attr354,$attr372,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,$attr377,$attr384,$attr380,$attr381,$attr382,$attr383,$attr379,$bool27,$cmp31,$bool29,$bool28,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr361,$cmp32,$cmp30,h,s,r,$bool30,w,y,x;
			x = ((($bool27=((($cmp25=self['x'])===($cmp26=rect['x'])?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27['__nonzero__']=='function'?
						$bool27['__nonzero__']() :
						(typeof $bool27['__len__']=='function'?
							($bool27['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['x']) : (rect['x']));
			y = ((($bool28=((($cmp27=self['y'])===($cmp28=rect['y'])?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28['__nonzero__']=='function'?
						$bool28['__nonzero__']() :
						(typeof $bool28['__len__']=='function'?
							($bool28['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['y']) : (rect['y']));
			s = (self['x'])+(self['width']);
			r = (rect['x'])+(rect['width']);
			w = (((($bool29=((($cmp29=s)===($cmp30=r)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29['__nonzero__']=='function'?
						$bool29['__nonzero__']() :
						(typeof $bool29['__len__']=='function'?
							($bool29['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(x);
			s = (self['y'])+(self['height']);
			r = (rect['y'])+(rect['height']);
			h = (((($bool30=((($cmp31=s)===($cmp32=r)?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) == 1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30['__nonzero__']=='function'?
						$bool30['__nonzero__']() :
						(typeof $bool30['__len__']=='function'?
							($bool30['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(y);
			return $m['Rect'](x, y, w, h);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('union_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$cmp40,$attr388,$attr389,$attr385,$attr387,r,$attr409,$attr408,$bool34,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$bool32,$bool33,s,$bool31,w,h,y,x,$attr386;
			x = ((($bool31=((($cmp33=self['x'])===($cmp34=rect['x'])?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31['__nonzero__']=='function'?
						$bool31['__nonzero__']() :
						(typeof $bool31['__len__']=='function'?
							($bool31['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['x']) : (rect['x']));
			y = ((($bool32=((($cmp35=self['y'])===($cmp36=rect['y'])?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
				false :
				(typeof $bool32=='object'?
					(typeof $bool32['__nonzero__']=='function'?
						$bool32['__nonzero__']() :
						(typeof $bool32['__len__']=='function'?
							($bool32['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['y']) : (rect['y']));
			s = (self['x'])+(self['width']);
			r = (rect['x'])+(rect['width']);
			w = (((($bool33=((($cmp37=s)===($cmp38=r)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$p['cmp']($cmp37, $cmp38))) == 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33['__nonzero__']=='function'?
						$bool33['__nonzero__']() :
						(typeof $bool33['__len__']=='function'?
							($bool33['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(x);
			s = (self['y'])+(self['height']);
			r = (rect['y'])+(rect['height']);
			h = (((($bool34=((($cmp39=s)===($cmp40=r)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34['__nonzero__']=='function'?
						$bool34['__nonzero__']() :
						(typeof $bool34['__len__']=='function'?
							($bool34['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(y);
			self['x'] = x;
			self['y'] = y;
			self['width'] = w;
			self['height'] = h;
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union_ip'] = $method;
		$method = $pyjs__bind_method2('unionall', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $attr418,$attr419,$attr438,$attr439,$attr436,$attr437,$attr434,$attr435,$attr432,$attr433,$attr430,$iter1_iter,$cmp42,$cmp48,$attr444,$cmp43,y1,$iter1_nextval,y2,$cmp46,$cmp47,$cmp44,$cmp45,x1,$attr441,$attr440,$attr443,$iter1_array,rx2,$bool37,$attr421,$attr420,$attr423,$attr422,$attr425,$attr424,$attr427,$attr426,$attr429,$attr428,$attr442,$attr431,$cmp41,x2,$attr417,$iter1_type,r,$bool36,$iter1_idx,$bool35,$bool38,ry2;
			x1 = self['x'];
			y1 = self['y'];
			x2 = (self['x'])+(self['width']);
			y2 = (self['y'])+(self['height']);
			$iter1_iter = rect_list;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				r = $iter1_nextval;
				if ((($bool35=((($cmp41=r['x'])===($cmp42=x1)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					x1 = r['x'];
				}
				if ((($bool36=((($cmp43=r['y'])===($cmp44=y1)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					y1 = r['y'];
				}
				rx2 = (r['x'])+(r['width']);
				if ((($bool37=((($cmp45=rx2)===($cmp46=x2)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					x2 = rx2;
				}
				ry2 = (r['y'])+(r['height']);
				if ((($bool38=((($cmp47=ry2)===($cmp48=y2)?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == 1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					y2 = ry2;
				}
			}
			return $m['Rect'](x1, y1, (x2)-(x1), (y2)-(y1));
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall'] = $method;
		$method = $pyjs__bind_method2('unionall_ip', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $attr454,$attr455,$attr456,$attr457,$attr450,$attr451,$attr452,$attr453,$attr458,$attr459,$cmp51,$cmp49,y1,y2,$cmp52,$iter2_iter,$attr469,$attr468,$attr471,$attr465,$attr464,$attr467,$attr466,$attr461,$attr460,$attr463,$attr462,$attr447,$attr446,$attr445,$iter2_type,$bool42,$bool41,$bool40,$attr449,$attr448,$iter2_idx,x2,$cmp50,$cmp53,x1,$cmp55,$cmp54,$cmp56,$iter2_nextval,rx2,r,$attr472,$attr470,$bool39,ry2,$iter2_array;
			x1 = self['x'];
			y1 = self['y'];
			x2 = (self['x'])+(self['width']);
			y2 = (self['y'])+(self['height']);
			$iter2_iter = rect_list;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				r = $iter2_nextval;
				if ((($bool39=((($cmp49=r['x'])===($cmp50=x1)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					x1 = r['x'];
				}
				if ((($bool40=((($cmp51=r['y'])===($cmp52=y1)?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					y1 = r['y'];
				}
				rx2 = (r['x'])+(r['width']);
				if ((($bool41=((($cmp53=rx2)===($cmp54=x2)?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					x2 = rx2;
				}
				ry2 = (r['y'])+(r['height']);
				if ((($bool42=((($cmp55=ry2)===($cmp56=y2)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == 1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					y2 = ry2;
				}
			}
			self['x'] = x1;
			self['y'] = y1;
			self['width'] = (x2)-(x1);
			self['height'] = (y2)-(y1);
			return null;
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall_ip'] = $method;
		$method = $pyjs__bind_method2('clamp', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr540,$attr539,$attr538,$attr537,$attr536,$attr535,$attr534,$attr533,$attr532,$attr531,$attr530,$attr502,$attr503,$attr500,$attr501,$attr506,$attr507,$attr504,$attr505,x,$attr508,$attr509,$attr515,$attr514,$attr517,$attr516,$attr511,$attr510,$attr513,$attr512,$attr519,$attr518,$bool47,$bool46,$bool45,$bool44,$bool43,$bool48,$cmp59,$cmp58,$attr478,$attr479,$attr473,$attr476,$attr477,$attr474,$attr475,$cmp64,$cmp65,$cmp66,$cmp67,$cmp60,$cmp61,$cmp62,$cmp63,$cmp68,$cmp57,$attr490,$attr491,$attr492,$attr493,$attr494,$attr495,$attr496,$attr497,$attr498,$attr499,$attr483,$attr482,$attr481,$attr480,$attr487,$attr486,$attr485,$attr484,$attr489,$attr488,$attr524,$attr528,$attr529,y,$attr525,$attr526,$attr527,$attr520,$attr521,$attr522,$attr523;
			if ((($bool43=((($cmp57=self['width'])===($cmp58=rect['width'])?0:
				(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
					($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
					$p['cmp']($cmp57, $cmp58))) == -1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43['__nonzero__']=='function'?
							$bool43['__nonzero__']() :
							(typeof $bool43['__len__']=='function'?
								($bool43['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool44=((($cmp59=self['x'])===($cmp60=rect['x'])?0:
					(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
						($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
						$p['cmp']($cmp59, $cmp60))) == -1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					x = rect['x'];
				}
				else if ((($bool45=((($cmp61=(self['x'])+(self['width']))===($cmp62=(rect['x'])+(rect['width']))?0:
					(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
						($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
						$p['cmp']($cmp61, $cmp62))) == 1)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					x = ((rect['x'])+(rect['width']))-(self['width']);
				}
				else {
					x = self['x'];
				}
			}
			else {
				x = (rect['x'])-($p['float_int'](((self['width'])-(rect['width']))/(2)));
			}
			if ((($bool46=((($cmp63=self['height'])===($cmp64=rect['height'])?0:
				(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
					($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
					$p['cmp']($cmp63, $cmp64))) == -1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				if ((($bool47=((($cmp65=self['y'])===($cmp66=rect['y'])?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))) == -1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					y = rect['y'];
				}
				else if ((($bool48=((($cmp67=(self['y'])+(self['height']))===($cmp68=(rect['y'])+(rect['height']))?0:
					(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
						($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
						$p['cmp']($cmp67, $cmp68))) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					y = ((rect['y'])+(rect['height']))-(self['height']);
				}
				else {
					y = self['y'];
				}
			}
			else {
				y = (rect['y'])-($p['float_int'](((self['height'])-(rect['height']))/(2)));
			}
			return $m['Rect'](x, y, self['width'], self['height']);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp'] = $method;
		$method = $pyjs__bind_method2('clamp_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $bool54,$attr588,$attr589,$attr582,$attr583,$attr580,$attr581,$attr586,$attr587,$attr584,$attr585,$bool50,$bool51,$bool53,$attr599,$attr598,$attr595,$attr594,$attr597,$attr596,$attr591,$attr590,$attr593,$attr592,x,$attr560,$attr561,$attr562,$attr563,$attr564,$attr565,$attr566,$attr567,$attr568,$attr569,$attr573,$attr572,$attr571,$attr570,$attr577,$attr576,$attr575,$attr574,$attr579,$attr578,$bool49,$attr601,$attr600,$attr603,$attr602,$attr604,$attr546,$attr547,$attr544,$attr545,$attr542,$attr543,$bool52,$attr541,$cmp69,$attr548,$attr549,$cmp73,$cmp72,$cmp71,$cmp70,$cmp77,$cmp76,$cmp75,$cmp74,$cmp79,$cmp78,$cmp80,$attr559,$attr558,$attr551,$attr550,$attr553,$attr552,$attr555,$attr554,$attr557,$attr556,y;
			if ((($bool49=((($cmp69=self['width'])===($cmp70=rect['width'])?0:
				(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
					($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
					$p['cmp']($cmp69, $cmp70))) == -1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool50=((($cmp71=self['x'])===($cmp72=rect['x'])?0:
					(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
						($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
						$p['cmp']($cmp71, $cmp72))) == -1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					x = rect['x'];
				}
				else if ((($bool51=((($cmp73=(self['x'])+(self['width']))===($cmp74=(rect['x'])+(rect['width']))?0:
					(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
						($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
						$p['cmp']($cmp73, $cmp74))) == 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					x = ((rect['x'])+(rect['width']))-(self['width']);
				}
				else {
					x = self['x'];
				}
			}
			else {
				x = (rect['x'])-($p['float_int'](((self['width'])-(rect['width']))/(2)));
			}
			if ((($bool52=((($cmp75=self['height'])===($cmp76=rect['height'])?0:
				(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
					($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
					$p['cmp']($cmp75, $cmp76))) == -1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool53=((($cmp77=self['y'])===($cmp78=rect['y'])?0:
					(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
						($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
						$p['cmp']($cmp77, $cmp78))) == -1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53['__nonzero__']=='function'?
								$bool53['__nonzero__']() :
								(typeof $bool53['__len__']=='function'?
									($bool53['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					y = rect['y'];
				}
				else if ((($bool54=((($cmp79=(self['y'])+(self['height']))===($cmp80=(rect['y'])+(rect['height']))?0:
					(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
						($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
						$p['cmp']($cmp79, $cmp80))) == 1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					y = ((rect['y'])+(rect['height']))-(self['height']);
				}
				else {
					y = self['y'];
				}
			}
			else {
				y = (rect['y'])-($p['float_int'](((self['height'])-(rect['height']))/(2)));
			}
			self['setLocation'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp_ip'] = $method;
		$method = $pyjs__bind_method2('set', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool55,$bool56,$bool57,$98,$99,$110,$111,$94,$95,$96,$97,$90,$91,$92,$93,$eq30,arg,$112,$attr611,$attr613,$107,ln,$106,$109,$attr614,$101,$100,$103,$102,$105,$104,$89,$88,$87,$108,$attr610,$eq25,$eq27,$eq26,$eq29,$eq28,$attr612,$bool58,$attr609,$attr608,$len4,$len5,$attr605,$attr607,$attr606;
			if ((($bool55=(($eq25=(($len4=args) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4))))))===($eq26=1)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55['__nonzero__']=='function'?
							$bool55['__nonzero__']() :
							(typeof $bool55['__len__']=='function'?
								($bool55['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				arg = (typeof ($87=args)['__array'] != 'undefined'?
					((typeof $87['__array'][$88=0]) != 'undefined'?$87['__array'][$88]:
						$87['__getitem__']($88)):
						$87['__getitem__'](0));
			}
			else {
				arg = args;
			}
			ln = (($len5=arg) === null?0:
				(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
					(typeof $len5['__len__'] == 'function'?$len5['__len__']():
						(typeof $len5['length'] != 'undefined'?$len5['length']:
							$p['len']($len5)))));
			if ((($bool56=(($eq27=ln)===($eq28=4)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56['__nonzero__']=='function'?
							$bool56['__nonzero__']() :
							(typeof $bool56['__len__']=='function'?
								($bool56['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setLocation']((typeof ($89=arg)['__array'] != 'undefined'?
					((typeof $89['__array'][$90=0]) != 'undefined'?$89['__array'][$90]:
						$89['__getitem__']($90)):
						$89['__getitem__'](0)), (typeof ($91=arg)['__array'] != 'undefined'?
					((typeof $91['__array'][$92=1]) != 'undefined'?$91['__array'][$92]:
						$91['__getitem__']($92)):
						$91['__getitem__'](1)));
				self['setSize']((typeof ($93=arg)['__array'] != 'undefined'?
					((typeof $93['__array'][$94=2]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__'](2)), (typeof ($95=arg)['__array'] != 'undefined'?
					((typeof $95['__array'][$96=3]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__'](3)));
			}
			else if ((($bool57=(($eq29=ln)===($eq30=2)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57['__nonzero__']=='function'?
							$bool57['__nonzero__']() :
							(typeof $bool57['__len__']=='function'?
								($bool57['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setLocation']((typeof ($99=(typeof ($97=arg)['__array'] != 'undefined'?
					((typeof $97['__array'][$98=0]) != 'undefined'?$97['__array'][$98]:
						$97['__getitem__']($98)):
						$97['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $99['__array'][$100=0]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__'](0)), (typeof ($103=(typeof ($101=arg)['__array'] != 'undefined'?
					((typeof $101['__array'][$102=0]) != 'undefined'?$101['__array'][$102]:
						$101['__getitem__']($102)):
						$101['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $103['__array'][$104=1]) != 'undefined'?$103['__array'][$104]:
						$103['__getitem__']($104)):
						$103['__getitem__'](1)));
				self['setSize']((typeof ($107=(typeof ($105=arg)['__array'] != 'undefined'?
					((typeof $105['__array'][$106=1]) != 'undefined'?$105['__array'][$106]:
						$105['__getitem__']($106)):
						$105['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $107['__array'][$108=0]) != 'undefined'?$107['__array'][$108]:
						$107['__getitem__']($108)):
						$107['__getitem__'](0)), (typeof ($111=(typeof ($109=arg)['__array'] != 'undefined'?
					((typeof $109['__array'][$110=1]) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $111['__array'][$112=1]) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__'](1)));
			}
			else {
				if ((($bool58=$p['hasattr'](arg, 'rect')) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58['__nonzero__']=='function'?
								$bool58['__nonzero__']() :
								(typeof $bool58['__len__']=='function'?
									($bool58['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					arg = arg['rect'];
				}
				self['setLocation'](arg['x'], arg['y']);
				self['setSize'](arg['width'], arg['height']);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('collidepoint', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $116,$attr622,$114,$attr620,$attr627,$113,$attr625,$cmp86,$cmp87,$cmp84,$cmp85,$cmp82,$bool59,$118,$cmp81,$eq32,$eq31,$attr634,$115,$121,$attr626,$120,$attr630,$cmp88,$cmp93,$attr624,$bool60,$cmp95,$attr636,$attr623,$attr635,$attr629,$attr616,$attr617,$attr631,$attr615,$cmp89,$bool61,$cmp92,$attr637,$attr638,$cmp94,$cmp96,$cmp91,$cmp90,$attr618,$cmp83,$and16,$and17,$and15,$123,$122,$and18,$attr619,$attr632,$119,$124,$117,$len6,$attr621,$attr628,$attr633;
			if ((($bool59=(($eq31=(($len6=point) === null?0:
				(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
					(typeof $len6['__len__'] == 'function'?$len6['__len__']():
						(typeof $len6['length'] != 'undefined'?$len6['length']:
							$p['len']($len6))))))===($eq32=2)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59['__nonzero__']=='function'?
							$bool59['__nonzero__']() :
							(typeof $bool59['__len__']=='function'?
								($bool59['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return ((($bool60=$and15=(((($cmp81=self['x'])===($cmp82=($compare1 = (typeof ($113=point)['__array'] != 'undefined'?
					((typeof $113['__array'][$114=0]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__'](0))))?0:
					(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
						($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
						$p['cmp']($cmp81, $cmp82))) < 1)&&((($cmp83=$compare1)===($cmp84=($compare2 = (self['x'])+(self['width'])))?0:
					(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
						($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
						$p['cmp']($cmp83, $cmp84))) == -1))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
					false :
					(typeof $bool60=='object'?
						(typeof $bool60['__nonzero__']=='function'?
							$bool60['__nonzero__']() :
							(typeof $bool60['__len__']=='function'?
								($bool60['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp85=self['y'])===($cmp86=($compare3 = (typeof ($115=point)['__array'] != 'undefined'?
					((typeof $115['__array'][$116=1]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__'](1))))?0:
					(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
						($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
						$p['cmp']($cmp85, $cmp86))) < 1)&&((($cmp87=$compare3)===($cmp88=($compare4 = (self['y'])+(self['height'])))?0:
					(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
						($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
						$p['cmp']($cmp87, $cmp88))) == -1)):$and15);
			}
			else {
				return ((($bool61=$and17=(((($cmp89=self['x'])===($cmp90=($compare5 = (typeof ($119=(typeof ($117=point)['__array'] != 'undefined'?
					((typeof $117['__array'][$118=0]) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $119['__array'][$120=0]) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__'](0))))?0:
					(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
						($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
						$p['cmp']($cmp89, $cmp90))) < 1)&&((($cmp91=$compare5)===($cmp92=($compare6 = (self['x'])+(self['width'])))?0:
					(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
						($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
						$p['cmp']($cmp91, $cmp92))) == -1))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61['__nonzero__']=='function'?
							$bool61['__nonzero__']() :
							(typeof $bool61['__len__']=='function'?
								($bool61['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp93=self['y'])===($cmp94=($compare7 = (typeof ($123=(typeof ($121=point)['__array'] != 'undefined'?
					((typeof $121['__array'][$122=0]) != 'undefined'?$121['__array'][$122]:
						$121['__getitem__']($122)):
						$121['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $123['__array'][$124=1]) != 'undefined'?$123['__array'][$124]:
						$123['__getitem__']($124)):
						$123['__getitem__'](1))))?0:
					(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
						($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
						$p['cmp']($cmp93, $cmp94))) < 1)&&((($cmp95=$compare7)===($cmp96=($compare8 = (self['y'])+(self['height'])))?0:
					(typeof $cmp95==typeof $cmp96 && ((typeof $cmp95 == 'number')||(typeof $cmp95 == 'string')||(typeof $cmp95 == 'boolean'))?
						($cmp95 == $cmp96 ? 0 : ($cmp95 < $cmp96 ? -1 : 1)):
						$p['cmp']($cmp95, $cmp96))) == -1)):$and17);
			}
			return null;
		}
	, 1, ['point',null,['self']]);
		$cls_definition['collidepoint'] = $method;
		$method = $pyjs__bind_method2('colliderect', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['intersects'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['colliderect'] = $method;
		$method = $pyjs__bind_method2('collidelist', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter3_idx,i,$iter3_type,$bool62,$iter3_iter,$iter3_array,$iter3_nextval,rect;
			$iter3_iter = $p['enumerate'](rects);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval, 2, null);
				i = $tupleassign1[0];
				rect = $tupleassign1[1];
				if ((($bool62=self['intersects'](rect)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return i;
				}
			}
			return -(1);
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelist'] = $method;
		$method = $pyjs__bind_method2('collidelistall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $bool63,i,$iter4_nextval,$iter4_idx,$iter4_array,collided,$iter4_type,$iter4_iter,rect;
			collided = $p['list']([]);
			$iter4_iter = $p['enumerate'](rects);
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter4_nextval, 2, null);
				i = $tupleassign2[0];
				rect = $tupleassign2[1];
				if ((($bool63=self['colliderect'](rect)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63['__nonzero__']=='function'?
								$bool63['__nonzero__']() :
								(typeof $bool63['__len__']=='function'?
									($bool63['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					collided['append'](i);
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelistall'] = $method;
		$method = $pyjs__bind_method2('collidedict', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter5_nextval,$bool64,$iter5_array,$128,$iter5_iter,$125,$iter5_idx,$iter5_type,$127,$126,rect;
			$iter5_iter = rects;
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				rect = $iter5_nextval;
				if ((($bool64=self['colliderect']((typeof ($125=rects)['__array'] != 'undefined'?
					((typeof $125['__array'][$126=rect]) != 'undefined'?$125['__array'][$126]:
						$125['__getitem__']($126)):
						$125['__getitem__'](rect)))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
						false :
						(typeof $bool64=='object'?
							(typeof $bool64['__nonzero__']=='function'?
								$bool64['__nonzero__']() :
								(typeof $bool64['__len__']=='function'?
									($bool64['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['tuple']([rect, (typeof ($127=rects)['__array'] != 'undefined'?
						((typeof $127['__array'][$128=rect]) != 'undefined'?$127['__array'][$128]:
							$127['__getitem__']($128)):
							$127['__getitem__'](rect))]);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedict'] = $method;
		$method = $pyjs__bind_method2('collidedictall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $bool65,$iter6_idx,$iter6_type,$129,$iter6_array,$130,collided,$131,$iter6_iter,$132,rect,$iter6_nextval;
			collided = $p['list']([]);
			$iter6_iter = rects;
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				rect = $iter6_nextval;
				if ((($bool65=self['colliderect']((typeof ($129=rects)['__array'] != 'undefined'?
					((typeof $129['__array'][$130=rect]) != 'undefined'?$129['__array'][$130]:
						$129['__getitem__']($130)):
						$129['__getitem__'](rect)))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					collided['append']($p['tuple']([rect, (typeof ($131=rects)['__array'] != 'undefined'?
						((typeof $131['__array'][$132=rect]) != 'undefined'?$131['__array'][$132]:
							$131['__getitem__']($132)):
							$131['__getitem__'](rect))]));
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedictall'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Rect', $p['tuple']($bases), $data);
	})();
	if ((($bool66=$m['env']['pyjs_mode']['strict']) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
		$m['Rect']['setLocation'] = $m['Rect']['_setLocation'];
		$m['Rect']['setSize'] = $m['Rect']['_setSize'];
	}
	$m['RectPool'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr645,$attr646,$attr647,$attr648;
			$p['list']['__init__'](self);
			self['add'] = self['append'];
			self['addAll'] = self['extend'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var $bool67,rect;
			if ((($bool67=self) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
				rect = self['pop']();
				rect['x'] = x;
				rect['y'] = y;
				rect['width'] = width;
				rect['height'] = height;
				return rect;
			}
			else {
				return $m['Rect'](x, y, width, height);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('copy', function(r) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				r = arguments[1];
			}
			var $attr663,$attr664,$attr661,$bool68,$attr651,$attr652,$attr653,$attr650,$attr656,$attr657,$attr654,$attr655,$attr658,$attr659,$attr649,$attr662,rect,$attr660;
			if ((($bool68=self) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				rect = self['pop']();
				rect['x'] = r['x'];
				rect['y'] = r['y'];
				rect['width'] = r['width'];
				rect['height'] = r['height'];
				return rect;
			}
			else {
				return $m['Rect'](r['x'], r['y'], r['width'], r['height']);
			}
			return null;
		}
	, 1, [null,null,['self'],['r']]);
		$cls_definition['copy'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RectPool', $p['tuple']($bases), $data);
	})();
	$m['rectPool'] = $m['RectPool']();
	return this;
}; /* end pyjsdl.rect */


/* end module: pyjsdl.rect */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl']
*/

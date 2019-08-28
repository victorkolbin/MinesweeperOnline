/* start module: pyjamas.Canvas.PathElement */
$pyjs['loaded_modules']['pyjamas.Canvas.PathElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.PathElement']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.PathElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.PathElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['PathElement'] = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['ARC'] = ' ar';
	$m['CLOSE'] = ' x';
	$m['END'] = ' e';
	$m['LINETO'] = ' l';
	$m['MOVETO'] = ' m';
	$m['CUBIC'] = ' c';
	$m['arc'] = function(x, y, radius, startAngle, endAngle, antiClockwise, canvas) {
		var cy,ar,matrix,$eq2,$and2,$attr8,startX,startY,$attr1,$and1,$attr3,$attr2,$attr5,$attr4,$attr7,realStartAngle,$bool2,$bool3,$bool1,$bool4,$bool5,realEndAngle,$attr6,endY,endX,arcX,arcY,cx,context,$eq1;
		matrix = canvas['matrix'];
		context = canvas['context'];
		if ((($bool2=!(($bool1=antiClockwise) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			realStartAngle = endAngle;
			realEndAngle = startAngle;
		}
		else {
			realStartAngle = startAngle;
			realEndAngle = endAngle;
		}
		ar = (radius)*(10);
		startX = ((x)+(($m['math']['cos'](realStartAngle))*(ar)))-(5);
		startY = ((y)+(($m['math']['sin'](realStartAngle))*(ar)))-(5);
		endX = ((x)+(($m['math']['cos'](realEndAngle))*(ar)))-(5);
		endY = ((y)+(($m['math']['sin'](realEndAngle))*(ar)))-(5);
		if ((($bool5=((($bool3=$and1=(($eq1=startX)===($eq2=endX)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3['__nonzero__']=='function'?
					$bool3['__nonzero__']() :
					(typeof $bool3['__len__']=='function'?
						($bool3['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($bool4=antiClockwise) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4['__nonzero__']=='function'?
					$bool4['__nonzero__']() :
					(typeof $bool4['__len__']=='function'?
						($bool4['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) ):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			startX += 0.125;
		}
		cx = canvas['getCoordX'](matrix, x, y);
		cy = canvas['getCoordY'](matrix, x, y);
		arcX = (context['arcScaleX'])*(ar);
		arcY = (context['arcScaleY'])*(ar);
		return ((((((((((((((($m['ARC'])+($p['str']($p['float_int']($m['math']['floor'](((cx)-(arcX))+(0.5))))))+(','))+($p['str']($p['float_int']($m['math']['floor'](((cy)+(arcY))+(0.5))))))+(' '))+($p['str']($p['float_int']($m['math']['floor'](((cx)+(arcX))+(0.5))))))+(','))+($p['str']($p['float_int']($m['math']['floor'](((cy)-(arcY))+(0.5))))))+(' '))+($p['str'](canvas['getCoordX'](matrix, startX, startY))))+(','))+($p['str'](canvas['getCoordY'](matrix, startX, startY))))+(' '))+($p['str'](canvas['getCoordX'](matrix, endX, endY))))+(','))+($p['str'](canvas['getCoordY'](matrix, endX, endY)));
	};
	$m['arc']['__name__'] = 'arc';

	$m['arc']['__bind_type__'] = 0;
	$m['arc']['__args__'] = [null,null,['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise'],['canvas']];
	$m['bezierCurveTo'] = function(c1x, c1y, c2x, c2y, x, y, canvas) {
		var $attr9,matrix,$attr10;
		matrix = canvas['matrix'];
		return ((((((((((($m['CUBIC'])+($p['str'](canvas['getCoordX'](matrix, c1x, c1y))))+(','))+($p['str'](canvas['getCoordY'](matrix, c1x, c1y))))+(','))+($p['str'](canvas['getCoordX'](matrix, c2x, c2y))))+(','))+($p['str'](canvas['getCoordY'](matrix, c2x, c2y))))+(','))+($p['str'](canvas['getCoordX'](matrix, x, y))))+(','))+($p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['bezierCurveTo']['__name__'] = 'bezierCurveTo';

	$m['bezierCurveTo']['__bind_type__'] = 0;
	$m['bezierCurveTo']['__args__'] = [null,null,['c1x'],['c1y'],['c2x'],['c2y'],['x'],['y'],['canvas']];
	$m['closePath'] = function() {

		return $m['CLOSE'];
	};
	$m['closePath']['__name__'] = 'closePath';

	$m['closePath']['__bind_type__'] = 0;
	$m['closePath']['__args__'] = [null,null];
	$m['lineTo'] = function(x, y, canvas) {
		var matrix,$attr11,$attr12;
		matrix = canvas['matrix'];
		return ((($m['LINETO'])+($p['str'](canvas['getCoordX'](matrix, x, y))))+(','))+($p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['lineTo']['__name__'] = 'lineTo';

	$m['lineTo']['__bind_type__'] = 0;
	$m['lineTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
	$m['moveTo'] = function(x, y, canvas) {
		var matrix,$attr14,$attr13;
		matrix = canvas['matrix'];
		return ((($m['MOVETO'])+($p['str'](canvas['getCoordX'](matrix, x, y))))+(','))+($p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['moveTo']['__name__'] = 'moveTo';

	$m['moveTo']['__bind_type__'] = 0;
	$m['moveTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
	return this;
}; /* end pyjamas.Canvas.PathElement */


/* end module: pyjamas.Canvas.PathElement */


/*
PYJS_DEPS: ['math']
*/

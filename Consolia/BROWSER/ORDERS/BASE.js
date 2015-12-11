
function 출력() {
	
	var
	// msg
	msg = '',
	
	// styles
	styles = [];
	
	EACH(arguments, function(param, i) {
		
		var
		// style
		style;
		
		if (i === 0 && isNaN(param) !== true) {
			REPEAT(param, function() {
				msg = '  ' + msg;
			});
		}
		
		else if (CHECK_IS_DATA(param) === true) {
			msg += '%c';
			style = '';
			EACH(param, function(v, name) {
				style += name.replace(/([A-Z])/g, function($1){
					return '-' + $1.toLowerCase();
				}) + ':';
				style += v + ';';
			});
			styles.push(style);
		}
		
		else {
			msg += param + '%c';
			styles.push('');
		}
	});
	
	console.log.apply(console, COMBINE([[msg], styles]));
}
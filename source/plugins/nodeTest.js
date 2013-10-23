(function () {
"use strict";

function command ( args, cb ) {
	IO.jsonp({
		url : 'http://127.0.0.1:1337',
		jsonpName : 'callback',
		data : {},
		fun : finish
	});

	function finish ( resp ) {
		console.log('node test');
		console.log('******************************');
		console.log(resp);
		var res = resp.response;


		if ( cb && cb.call ) {
			cb( res );
		}
		else {
			args.reply( res );
		}
	}
}

bot.addCommand({
	name : 'nodeTest',
	fun : command,
	permissions : {
		del : 'NONE'
	},

	description : 'Search Wikipedia. `/wiki term`',
	async : true
});
})();

require(process.env.UPPERCASE_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		defaultBoxName : 'Consolia',
		webServerPort : 8121
	},
	NODE_CONFIG : {
		dbName : 'Consolia-test'
	}
});

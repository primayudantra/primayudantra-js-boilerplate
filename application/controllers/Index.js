let path = require('path');

module.exports = {
	/** --------------------------------------------
	  *
	  *   Routing index
	  *   / (routing / index)
	  *
	  -------------------------------------------- **/
	index: function(req,res,next){
		res.sendFile(path.resolve('public/index.html'));
	},
	api: function(req,res,next){
		res.send("Welcome to the API");
	},
	apiTest: function(req,res,next){
		var data = {
			name 		: "primayudantra",
			age 		: 23,
			status 	: "single"
		}
		res.send(data);
	}
}
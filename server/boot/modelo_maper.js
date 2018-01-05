module.exports=function(app) {
	console.log("paso")
	var mongoDs=app.datasources.test;
	mongoDs.autoupdate ("Note",function (ex,result) {
		//console.log(ex);
		//console.log(result);
	});
	
};
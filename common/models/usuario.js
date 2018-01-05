'use strict';

module.exports = function(Usuario) {
	Usuario.updateProfile=function (id,datos,cb) {
		console.log(id +" "+datos);
		Usuario.findById(id)
		.then(function (userInstance) {
			userInstance.updateAttributes(datos,function (ex,userResult) {
				if (ex) {
					console.log(ex);
					cb(ex);
				}else{
					cb(null,userResult);
				}
			});
		})
		.catch(function (ex) {
			cb(ex);
		})
	}
};

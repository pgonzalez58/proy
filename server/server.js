'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var bodyparser = require('body-parser'); //corresponde a HTTP, leer la documentacion
var app = module.exports = loopback();
app.use(bodyparser.urlencoded({ extended: false }));//configuracion para que convierta el body de la solicitud HTTP (Middelware)
//app.use(bodyparser.json());
app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    //testInsert(app);
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

function testInsert(app) {
  app.models.Note.create({ title: "Prueba", content: "Contenido" }, function (ex, results) {
    if (ex) console.log(ex);
    else
      console.log(results);
  });
  app.models.User.create({ password: "clave", email: "pgonzalez58@gmail.com" }, function (ex, results) {
    if (ex) console.log(ex);
    else
      console.log(results);
  });

}
app.post("/login", function (req, res, next) {

  console.log(req.body);
  next();
});
app.post("/login", function (req, res, next) {
  //aca se llama a un metodo del modelo
  app.models.User.login({ password: req.body.Password1, email: req.body.Email1 }, function (ex, results) {
    if (ex) {
      console.log(ex);
      var resp = {error:ex}
      res.send(resp);
      
    }
      
    else {
      
      console.log(results);
      res.send({payload:results});
    }

  });

});
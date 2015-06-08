var express = require("express");
var app = express();

// Body parser
// See: https://codeforgeek.com/2014/09/handle-get-post-request-express-4/
// See: https://www.npmjs.com/package/body-parser
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// For using static files
// See: http://expressjs.com/starter/static-files.html
app.use(express.static("public"));

app.get("/", function(request, response){
	response.render("index");
});

app.post("/menu", function(request, response){
	var menu = [
		{
			name: "Info", 
			url: "/info"
		},
		{
			name: "Otro",
			url: "/otro"
		},
		{
			name:  "¡Hay caramba!",
			url: "/hay-caramba"
		}
	]
	response.send(menu);
});

app.get("/home", function(request, response){
	response.render("home.html");
})

app.post("/login", parseUrlencoded, function(request, response){
	var info =  request.body
	response.redirect("/home")
})

app.get("/test", function(request, response){
	var data = ["Info", "Otro", "¡Hay caramba!"];
	response.send(data);
})

app.listen("3000", function(){
	console.log("Servidor inicializado...");
});
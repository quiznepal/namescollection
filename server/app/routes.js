// expose the routes to our app with module.exports
module.exports = function(app) {

    app.use('/api',require('./api.controller'));

	/*app.use("/login",require("./login.controller"));
    app.use("/logout",require("./logout.controller"));
    app.use("/register",require("./register"));
*/
    app.use("/",require("./app.controller"));
    
};

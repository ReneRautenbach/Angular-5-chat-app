var path =  require("path");

var DIST_DIR = path.join(__dirname, "dist");
var CLIENT_DIR = path.join(__dirname,"src");

module.exports = {
    context : CLIENT_DIR,
    entry : "./entry",

    output : {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    resolve : {
        extensions: ['','.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
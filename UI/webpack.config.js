var path = require('path');

var DIST_PATH = path.resolve( __dirname, 'dist' );
var SOURCE_PATH = path.resolve( __dirname, 'src' );

module.exports = {
   entry: SOURCE_PATH + '/app/main.js',
   output: {
       path: path.join(__dirname,DIST_PATH),   
       filename: 'app.dist.js',
       publicPath: '/app/'
   },  
   module: {
       loaders: [
           {
               test: /.js?$/,  
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                   presets: [
                       'es2015',
                       'react',
                       'stage-2'
                   ]
               }
           }
       ]
   }
};
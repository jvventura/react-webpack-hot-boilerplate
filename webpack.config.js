var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	devServer:{
		contentBase: 'public',
		historyApiFallback: true
		/*
		proxy: {
			// Catch all requests, always return index.html no matter the route.
			// react-router should handle view generation depending on route.
			'target': '/index.html',
			'/**': {
				bypass: function(req, res, opt){
					return '/index.html';
				}
			}
		}
		*/
	},
	module : {
		loaders : [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel',
				query: {
					presets: ['es2015','stage-2','react']
				}
			},
			{
				test: /\.json?/,
				loader: 'json'
			},
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.(png|jpg|svg)$/,
				loaders: ['url-loader?limit=50000&name=assets/[hash].[ext]']
			}
		]
	},
	resolve: {
	  root: [
	    path.resolve('./app')
	  ]
	}
};

module.exports = config;
var HTLMWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTLMWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.css$/,
                loader: 'style!css!less',
                include: __dirname + '/app/styles/'
            }
        ]
    },
    output : {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins:[
        HTMLWebpackPluginConfig
    ]
};

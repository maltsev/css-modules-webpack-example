module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.html/,
                loaders: ['html?interpolate'],
            },
            {
                test:   /\.css/,
                loaders: ['style', 'css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]'],
            },
        ],
    }
};
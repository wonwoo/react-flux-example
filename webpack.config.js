
module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: './build'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ]
            },
        ]
    }
};

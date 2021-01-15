const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    mode: NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.ts'),
    target: 'node',
    watch: NODE_ENV === 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: ['yarn run:dev'],
                blocking: false,
                parallel: true
            }
        })
    ]
}
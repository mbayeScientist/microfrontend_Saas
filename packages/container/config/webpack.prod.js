const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const path = require('path');

const domain= process.env.PRODUCTION_DOMAIN;
const prodConfig = {
    mode : 'production',
    entry: './src/index.js', // Point d'entrée principal
    output: {
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
        filename: '[name].[contenthash].js', // Nom des fichiers JS générés
        publicPath: '/<repository-name>/', // Chemin public GitHub Pages
        clean: true, // Nettoie le dossier dist avant chaque build
    },
plugins:[
    new ModuleFederationPlugin({
        name : 'container',
        remotes:{
            marketing: `marketing@${domain}/marketing/remoteEntry.js`
        },
        shared : packageJson.dependencies
    })
]

};

module.exports = merge(commonConfig , prodConfig)
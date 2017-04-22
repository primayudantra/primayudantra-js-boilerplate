/** --------------------------------------------
*
*   App Configuration
*
-------------------------------------------- **/

import express from 'express';
import Pipa from 'pipa';
import bodyParser from 'body-parser';


import Config from '../config/config.js';

import WebpackConfig from '../webpack.config.js'

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
/** --------------------------------------------
*
*   Pipa JS Controllers and Routes Path
*		And Config File for Host and Port
*
-------------------------------------------- **/

let Common = Config.url
const controllersPath = 'application/controllers';
const routesPath = 'application/routes';

let app = express();
let compiler = webpack(WebpackConfig);


/** --------------------------------------------
*
*   App Setup
*
-------------------------------------------- **/

app.set('views', './public');
app.set('view engine', 'html');

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: WebpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

/** --------------------------------------------
*
*   PIPA JS and App listen
*
-------------------------------------------- **/

(new Pipa(app, routesPath, controllersPath)).open();
app.listen(Common.port);

console.log("===================================");
console.log("- EXPRESS REACT NODE MOBX BOILERPLATE");
console.log("- primayudantra");
console.log("- HOST: " + Common.host + ", PORT: " +Common.port);
console.log("===================================");


export default app;
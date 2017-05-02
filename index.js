import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import index from './routes/index/index_route';

const app = express (path.resolve ('public'));

app.set ('environment', 'dev');

// setting global folder
app.use (express.static (path.resolve ('public')));
app.use (express.static (path.resolve ('views')));
app.use (express.static (path.resolve ('bower_components')))

// configuring middlewares
app.use (morgan(app.get ('environment')));
app.use (bodyParser.json());

// configuring routes
app.use ('/', index);

module.exports.initializer = app;

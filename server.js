'use strict';

var config = require('./server/config');
var items = require('./server/data/items');
var express = require('express');
var handlebars = require('express-handlebars');
var compression = require('compression');
var app = express();

// Set cron
var CronJob = require('cron').CronJob;
new CronJob('0 */1 * * * *', function () {
    console.log('run update');
    require('./server/updaters/tablesUpdater').update(true);
    require('./server/updaters/resultsUpdater').update(true);
    require('./server/updaters/scorersUpdater').update(true);
    require('./server/updaters/assistsUpdater').update(true);
}, null, true);

// Middlewares configuration
var tenMinutes = 600000;
app.use(compression());
app.use(express.static('build', { maxAge: tenMinutes }));

// Handlebars configuration
app.set('views', 'client/views');
app.engine('.hbs', handlebars({
    extname: '.hbs',
    partialsDir: ['client/views/partials/', 'client/views/components/'],
    defaultLayout: __dirname + '/client/views/_layout.hbs'
}));
app.set('view engine', '.hbs');

// Starts application listening
app.listen(config.port, (err) => {
    console.log('running on ' + config.port);
});

// Regsiters routes
app.use('/', require('./server/routes/sitemapRoute'));
app.use('/', require('./server/routes/indexRoute'));
app.use('/', require('./server/routes/itemRoute'));
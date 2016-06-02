'use strict';

var gulp = require('gulp');

// Updates data
gulp.task('update', () => {
    require('./server/updaters/tablesUpdater').update();
    require('./server/updaters/scorersUpdater').update();
    require('./server/updaters/assistsUpdater').update();
    require('./server/updaters/resultsUpdater').update();
});

// Updates logos
gulp.task('update-logos', () => {
    require('./server/updaters/logosUpdater').update();
});

// Check coding rules
gulp.task('check', () => {
    var jshint = require('gulp-jshint');
    var jscs = require('gulp-jscs');
    gulp.src(['./*.js', './server/**/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

// Build the application
gulp.task('build', () => {
    var less = require('gulp-less');
    var minifyCSS = require('gulp-minify-css');
    var concatCss = require('gulp-concat-css');
    gulp.src('./client/styles/**/*.less')
        .pipe(less())
        .pipe(concatCss('app.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));

    gulp.src('./client/images/**/*')
        .pipe(gulp.dest('./build/images'));
});

// Start the node server
gulp.task('start', () => {
    var nodemon = require('gulp-nodemon');
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: { 'PORT': 5000 },
        watch: ['server']
    };

    return nodemon(options).on('restart', () => {
        console.log('Restarting...');
    });
});

// Manage build, start the node server and open the browser
gulp.task('default', ['build', 'start'], () => {
    gulp.watch(['./client/styles/**/*'], ['build']);

    var openBrowser = require('gulp-open');
    gulp.src('/').pipe(openBrowser({ uri: '127.0.0.1:5000', app: 'chrome' }));
});
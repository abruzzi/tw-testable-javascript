var gulp = require('gulp'),
    jshint = require('gulp-jshint');
var _ = require('lodash');
var karma = require('karma').server;

gulp.task('jshint', function() {
    'use strict';
    return gulp.src(['scripts/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
});

var Config = function() {
    'use strict';

    var config = this;

    this.set = function(newConfig) {
        Object.keys(newConfig).forEach(function(key) {
            config[key] = newConfig[key];
        });
    };
};

var conf = new Config();
var func = require('./karma.conf.js');

func(conf);

gulp.task('ci', function(done) {
    karma.start(_.assign({}, conf, {singleRun: true}), done);
});

gulp.task('tdd', function(done) {
    karma.start(conf, done);
});

gulp.task('default', function() {
    gulp.start('jshint', 'ci');
});

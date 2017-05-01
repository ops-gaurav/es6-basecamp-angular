/**
 * gulp for building and assembling files
 */
var gulp = require ('gulp'),
	concat = require ('gulp-concat'),
	rename = require ('gulp-rename'),
	uglify = require ('gulp-uglify'),
	babel = require ('gulp-babel');

var sourceFiles = 'public/scripts/angular/**/*.js',
	destinationFiles = 'public/scripts';

gulp.task ('scripts', function () {
	return gulp.src (sourceFiles)
		.pipe (concat ('app.all.js'))
		.pipe (gulp.dest (destinationFiles))
		.pipe (rename ('app.min.js'))
		.pipe (	babel ({presets: ['es2015']}))
		.pipe (uglify ({mangle: false}))
		.pipe (gulp.dest (destinationFiles));
});
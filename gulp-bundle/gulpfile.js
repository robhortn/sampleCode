
// gulpfile for gulp-bundle

var gulp = require('gulp');						// Our task runner
var concat = require('gulp-concat');			// Concats files 
var uglify = require('gulp-uglify');			// Removes unnecessary spaces from file(s)

gulp.task('scripts', function(){
	gulp.src('./js/*.js')						// Grab all js files using globbing pattern
		.pipe(concat('appScripts.js'))			// Concat all files into one
		.pipe(uglify())							// Uglify the file, removing all unnecessary space
		.pipe(gulp.dest('./dest/'));			// Copy formatted file to the destination folder
});

gulp.task('default', ['scripts']);
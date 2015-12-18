
// gulpfile for gulp-basicsite

var gulp = require('gulp');						// Our task runner
var gulp = require('gulp-connect')				// Opens a website in the browser

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost'
}

gulp.task('basic', function() {
	return console.log('basic task activated');
});

gulp.task('default', ['basic']);
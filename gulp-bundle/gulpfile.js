
// gulpfile for gulp-bundle

var gulp = require('gulp');						// Our task runner
var concat = require('gulp-concat');			// Concats files 
var uglify = require('gulp-uglify');			// Removes unnecessary spaces from file(s)

var config = {
	paths: {
		js: './src/**/*.js', 
		dist: './dist'
	}
}

gulp.task('js', function() {
	gulp.src(config.paths.js)									// Grab all js files using globbing pattern
		.pipe(concat('bundle.js'))								// Concat all files into one
		.pipe(uglify())											// Uglify the file, removing all unnecessary space
		.pipe(gulp.dest(config.paths.dist + '/scripts'))		// Copy formatted file to the destination folder
});

gulp.task('default', ['js']);
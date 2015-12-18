
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
	//return console.log('scripts task ran');
	gulp.src('./js/*.js')
		.pipe(concat('appScripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dest/'));
});

// Concat the JS files
// Uglify the JS files

gulp.task('default', ['scripts']);

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	//return console.log('scripts task ran');
	gulp.src('./js/*.js')
		.pipe(concat('appScripts.js'))
		.pipe(gulp.dest('./dest/'));
});

// Concat the JS files
// Uglify the JS files

gulp.task('default', ['scripts']);
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');


//task less
gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

//watch


//default
gulp.task('default',['less']);

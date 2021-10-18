const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('js', (done) => {
  gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
  done();
});

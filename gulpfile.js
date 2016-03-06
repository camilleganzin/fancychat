var gulp = require('gulp');
var browserSync = require('browser-sync'); /*to serve on localhost*/
var sass = require('gulp-sass'); /*to use sass*/
var inject = require('gulp-inject'); /*to inject dependencies in index*/
 
/*to serve on localhost*/
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

/*to use sass*/
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/index.html', ['browserSync']);
})


/*to inject dependencies in index*/
gulp.task('inject', function () {
  var target = gulp.src('app/index.html');
  var sources = gulp.src(['/css/*.css', 'bower_components/**/*.css', 'bower_components/**/*.js', '/components/**/*.js'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('app'));
});
var gulp = require('gulp');
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        host: '0.0.0.0',
        port: 9000,
        livereload: true,
        middleware: function(connect, opt) {
            return [
                connect().use(
                  '/bower_components', connect.static('./bower_components')
                )
            ]
        }
    });
});
 
gulp.task('html', function () {
    gulp.src('./app/*.html').pipe(connect.reload());
});
 
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);


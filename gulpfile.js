const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
// function style() {
    // 1where is my scss file
    // return gulp.src('.css/**/*.scss');
    // 2.pass that file throu sass compiler
    // .pipe(sass())
    // 3.where do i save the compiled css
    // .pipe(gulp.dest('./css'))
    // 4stream changes to all browsers
    // .pipe(browserSync.stream());
// }

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./css/*.sass').on('change', browserSync.reload);;
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload)
}

// exports.style = style;
exports.watch = watch;
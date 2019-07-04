'use strict';

let gulp = require ('gulp');
let sass = require("gulp-sass");
let gcmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

let paths = {
    scss: {
        dir: 'src',
        main: 'src/responsive-display-properties.scss',
        files: 'src/**/*.scss'
    },
    dist: {
        dir: 'dist'
    }
};

function scss() {
    return gulp.src (paths.scss.main)
        .pipe(sass())
        .pipe(gcmq())
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest (paths.dist.dir));
}

// Watch
gulp.task('watch', () => {
    // SCSS
    gulp.watch(paths.scss.files, gulp.series(scss));
});

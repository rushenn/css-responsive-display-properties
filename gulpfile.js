'use strict';

let gulp = require ('gulp');
let sass = require("gulp-sass");
let gcmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

let paths = {
    src: {
        dir: 'src',
        main: 'src/responsive-display-utilities.scss',
        files: 'src/**/*.scss'
    },
    dist: {
        dir: 'dist'
    }
};

// Compile SCSS to CSS
// Combine Media Queries
// Minify CSS
// Rename CSS (.min)
gulp.task('handle-css', () => {
    return gulp.src (paths.src.main)
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
});

// Watch
gulp.task('watch', () => {
    // SCSS
    gulp.watch(paths.src.files, gulp.parallel('handle-css'));
});

// Default task
gulp.task('default', gulp.parallel('handle-css'));

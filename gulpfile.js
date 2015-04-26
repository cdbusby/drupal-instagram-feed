// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function () {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(minifycss())
        .pipe(gulp.dest('drupal_instagram_feed/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src(['vendor/**/*.js', 'src/js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./drupal_instagram_feed/js'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.start('lint', 'sass', 'scripts');

    gulp.watch('./src/js/*.js', ['lint', 'scripts']);
    gulp.watch('./src/sass/*.scss', ['sass']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['drupal_instagram_feed/**']).on('change', livereload.changed);
});

// Default Task
gulp.task('default', function() {
    gulp.start('lint', 'sass', 'scripts');
});
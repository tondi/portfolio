var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');

var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>'

    })
};

// TODO unify copied code
gulp.task('_sass', function() {
    return gulp.src('./scss/style.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('.'))
        // no livereload
})

gulp.task('sass', function() {
    return gulp.src('./scss/style.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('.'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./scss/**/*.scss', ['sass']);
});

// build
gulp.task('copy', function() {
    gulp.src(['index.html', 'style.css', 'projects.js'])
        .pipe(gulp.dest('build'))

    return gulp.src('assets/*').pipe(gulp.dest('build/assets'));
});

gulp.task('build', gulp.series(['_sass', 'copy']));


gulp.task('default', gulp.parallel(['sass', 'watch']));
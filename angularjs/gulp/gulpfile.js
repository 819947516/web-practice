/**
 * Created by Administrator on 2017/11/22.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rev = require('gulp-rev');
var revCollevtor = require('gulp-rev-collector');
gulp.task('less',function () {

    gulp.src('./less/studyGulp.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rev())
        .pipe('')
        .pipe(gulp.dest('./css'))

});
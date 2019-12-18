var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var fileinclude = require('gulp-file-include');
// var imagemin = require('gulp-imagemin');
// var del = require('del');
// var runSequence = require('run-sequence');
// var Hexo = require('hexo');

// 1
// 压缩public目录下的所有css
gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 2
// 压缩public目录下的所有html
// gulp.task('minify-html', function () {
//     return gulp.src('./public/**/*.html')
//         .pipe(fileinclude())
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('./public'))
// });

// gulp.task('minify-html', function () {
//     return gulp.src('./public/**/*.html')
//         .pipe(htmlclean())
//         .pipe(htmlmin({
//             removeComments: true,
//             minifyJS: true,
//             minifyCSS: true,
//             minifyURLs: true,
//         }))
//         .pipe(gulp.dest('./public'))
// });
//3
// 压缩public目录下的所有js
gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

// 压缩public目录下的所有img： 这个采用默认配置
// gulp.task('minify-img', function () {
//     return gulp.src('./public/images/**/*.*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./public/images'))
// })

// 同上，压缩图片，这里采用了： 最大化压缩效果。
// gulp.task('minify-img-aggressive', function () {
//     return gulp.src('./public/images/**/*.*')
//         .pipe(imagemin(
//             [imagemin.gifsicle({ 'optimizationLevel': 3 }),
//             imagemin.jpegtran({ 'progressive': true }),
//             imagemin.optipng({ 'optimizationLevel': 7 }),
//             imagemin.svgo()],
//             { 'verbose': true }))
//         .pipe(gulp.dest('./public/images'))
// })

// // 用run-sequence并发执行，同时处理html，css，js，img
// gulp.task('compress', function (cb) {
//     runSequence(['minify-html', 'minify-css', 'minify-js', 'minify-img-aggressive'], cb);
// });
// // 执行顺序： 清除public目录 -> 产生原始博客内容 -> 执行压缩混淆
// gulp.task('build', function (cb) {
//     runSequence('clean', 'generate', 'compress', cb)
// });
// gulp.task('default', ['build'])

// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-css', 'minify-js'
]);
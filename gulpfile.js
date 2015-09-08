var g = require('gulp');
var img64 = require('gulp-img64');
var pandoc = require('gulp-pandoc');

g.task('build:slide', ['build:copy_img'], function(){
  g.src('src/**/*.md')
    .pipe(pandoc({
      from: 'markdown',
      to:   'revealjs',
      ext:  '.html',
      args: [
        '-V', 'revealjs-url:../components/reveal.js',
        '--template', './templates/my.revealjs'
      ]
    }))
    .pipe(g.dest('build'))
  ;
});

g.task('build:copy_img', function(){
  g.src('src/**/*.{jpg,jpeg,png,gif}')
    .pipe(g.dest('build'))
  ;
});

g.task('build:img64', function(){
  g.src('build/**/*.html')
    .pipe(img64())
    .pipe(g.dest('build'))
  ;
});

var gulp = require('gulp')
var sass= require('gulp-sass')

//helps with older browser and fixes the css code for you  
    //    var postcss= require('gulp-postcss')
        //var autoprefixer = require('autoprefixer')

gulp.task('default',function(){
    
})

//command gulp scss

gulp.task('scss',function(){
    
    //create processer var
   // var processors = [
     //   autoprefixer({browsers:['last 2 versions']})
    //];
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    
    //add the proccessor after the scss
    // .pipe(postcss(processors))
     .pipe(gulp.dest('./css'))
})

//command gulp watch

gulp.task('watch',function(){
    gulp.watch('./scss/**/*.scss',['scss'])
})
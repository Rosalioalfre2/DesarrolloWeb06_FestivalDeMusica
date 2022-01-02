//Solicitamos la dependencia
const { src , dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    console.log('Compilando SASS....')

    //Pasos

        src('src/scss/app.scss') //1. Identificar el archivo .SCSS a compilar
            .pipe(sass()) //2. Compilarlo
            .pipe(dest('build/css')) //3. Almacenarlo

    done();
}

exports.css = css;
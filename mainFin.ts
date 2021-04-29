import * as rl from 'readline-sync';
import {Movie} from './Movie';
import { Imdb } from './Imdb';
import * as fs from 'file-system';

////creamos objeto pelicula e imdb
let pelicula:Movie = new Movie('',0,'','');
let imdb:Imdb = new Imdb([]);

function pedirDatos():void  {
    //obtenemos datos de la pelicula
    console.log('Introduce los datos para crear una nueva pelicula:\n');
    pelicula.title = rl.question('dime title\n');
    pelicula.releaseYear = rl.question('dime releaseYear\n');
    pelicula.nationality = rl.question('dime nationality\n');
    pelicula.genre = rl.question('dime genre\n');
}

function crearInstanciaImdb():void  {
    //generamos una nueva instancia del imdb atendiendo al archivo leido e incluimos la nueva peli
    imdb = imdb.obtenerInstanciaIMDB('imdbBBDD.json');
    imdb.peliculas.push(pelicula);
}

function escribir():void    {
    //borramos el archivo anterior
    fs.unlinkSync('imdbBBDD.json');
    //volvemos a crear el archivo actualizado
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
}

pedirDatos();
crearInstanciaImdb();
escribir();



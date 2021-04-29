import { Imdb } from './Imdb';
import {Movie} from './Movie';
import * as fs from 'file-system';

let movie_1:Movie = new Movie('Joker', 2019, 'estadounidense', 'suspense');
let movie_2:Movie = new Movie('Parasito', 2019, 'coreana', 'suspense');

let peliculas:Movie[] = [movie_1, movie_2];
let imdb:Imdb = new Imdb(peliculas);

let imdbJSON = JSON.stringify(imdb);

//escribir fichero
//fs.writeFileSync('imdbBBDD.json', imdbJSON, {encoding:'utf8', flag:'a+', mode: 0o666});

//leer fichero
let JSONLeido = fs.readFileSync('imdbBBDD.json');
JSONLeido = JSON.parse(JSONLeido);
let ImdbLeido:Imdb = new Imdb(JSONLeido.peliculas);

imdb.escribirEnFicheroJSON('pepe.json');
console.log(imdb.obtenerInstanciaIMDB('pepe.json'));
import { Imdb } from './Imdb';
import {Movie} from './Movie';

let movie_1:Movie = new Movie('Joker', 2019, 'estadounidense', 'suspense');
let movie_2:Movie = new Movie('Parasito', 2019, 'coreana', 'suspense');

let peliculas:Movie[] = [movie_1, movie_2];
let imdb:Imdb = new Imdb(peliculas);

console.log(imdb);
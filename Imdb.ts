import {Movie} from './Movie';
import * as fs from 'file-system';

export class Imdb   {

    public peliculas:Movie[];

    constructor(peliculas:Movie[])  {
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero:string):void {
        let imdbJSON = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, imdbJSON, {encoding:'utf8', flag:'a+', mode: 0o666});
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb   {
        let JSONLeido = fs.readFileSync(nombreFichero);
        JSONLeido = JSON.parse(JSONLeido);
        let ImdbLeido:Imdb = new Imdb(JSONLeido.peliculas);
        //console.log(ImdbLeido);
        
        return ImdbLeido;
    }
}
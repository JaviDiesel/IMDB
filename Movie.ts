import {Professional} from './Professional';

export class Movie  {

    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:Professional;
    public distributor:Professional;
    public genre:string;

    constructor(title:string, releaseYear:number, nationality:string, genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    public printMovie():void    {
        console.log(`\t\t\t
                    title: ${this.title}\n
                    releaseYear: ${this.releaseYear}\n
                    actors: ${this.actors}\n
                    nationality: ${this.nationality}\n
                    director: ${this.director}\n
                    writer: ${this.writer}\n
                    language: ${this.language}\n
                    plataform: ${this.plataform}\n
                    isMCU: ${this.isMCU}\n
                    mainCharacterMain: ${this.mainCharacterName}\n
                    producer: ${this.producer}\n
                    distributor: ${this.distributor}\n
                    genre: ${this.genre}`);
    }
}
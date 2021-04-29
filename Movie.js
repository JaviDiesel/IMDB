"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.printMovie = function () {
        console.log("\t\t\t\n                    title: " + this.title + "\n\n                    releaseYear: " + this.releaseYear + "\n\n                    actors: " + this.actors + "\n\n                    nationality: " + this.nationality + "\n\n                    director: " + this.director + "\n\n                    writer: " + this.writer + "\n\n                    language: " + this.language + "\n\n                    plataform: " + this.plataform + "\n\n                    isMCU: " + this.isMCU + "\n\n                    mainCharacterMain: " + this.mainCharacterName + "\n\n                    producer: " + this.producer + "\n\n                    distributor: " + this.distributor + "\n\n                    genre: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;

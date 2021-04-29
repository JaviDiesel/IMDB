"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfessional = function () {
        console.log("\t\t\t\n                    name: " + this.name + "\n\n                    age: " + this.age + "\n\n                    genre: " + this.genre + "\n\n                    weight: " + this.weight + " kg\n\n                    height: " + this.height + " cm\n\n                    hairColor: " + this.hairColor + "\n\n                    eyeColor: " + this.eyeColor + "\n\n                    race: " + this.race + "\n\n                    isRetired: " + this.isRetired + "\n\n                    nationality: " + this.nationality + "\n\n                    oscarsNumber: " + this.oscarsNumber + "\n\n                    profession: " + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;

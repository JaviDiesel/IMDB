export class Professional   {

    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

    constructor(name:string, age:number, genre:string, weight:number, height:number, hairColor:string, 
                eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, 
                profession:string) {
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

    public printProfessional():void {
        console.log(`\t\t\t
                    name: ${this.name}\n
                    age: ${this.age}\n
                    genre: ${this.genre}\n
                    weight: ${this.weight} kg\n
                    height: ${this.height} cm\n
                    hairColor: ${this.hairColor}\n
                    eyeColor: ${this.eyeColor}\n
                    race: ${this.race}\n
                    isRetired: ${this.isRetired}\n
                    nationality: ${this.nationality}\n
                    oscarsNumber: ${this.oscarsNumber}\n
                    profession: ${this.profession}\n`);
    }
}
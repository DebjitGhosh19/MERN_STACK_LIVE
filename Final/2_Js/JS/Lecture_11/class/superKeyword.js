class parent{
    constructor(){
        this.fatherName = "Schwerznegger";
        console.log(this.fatherName);
        
    }
    eat(){
        console.log("Eating...");
        
    }

};
class child extends parent{
    constructor(name){
        super();
        this.name = name;
        console.log(name);
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new child("Arnold");
baby.eat();

console.log(baby.getFullName());
// const obj={
//     name:"Rahul",
//     age:23,
//     FullName:function(){
//        return this.name;
//     },
//     calculate(){
//         return this.age;
//     }
// }
// const Name=obj.FullName(); 
// console.log(Name); //Output: Rahul
// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj.calculate());


// Prototype

const obj1={
    fullName:'Debjit Ghosh',
    age:22,
}
const obj2={
    calculaed(){
        console.log('Tax is 10%');
        
    }

}
obj1.__proto__=obj2;
obj1.calculaed();



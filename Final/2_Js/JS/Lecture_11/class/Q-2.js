class User{
  constructor(name,email){
    this.name = name;
    this.email = email;
    console.log(`Name: ${this.name} Email: ${this.email}`);
    
  }
  viewData(){
    console.log(`Name: ${this.name} Email: ${this.email}`);
  }
}
class Admin extends User{
 constructor(name,email){
  super(name,email)
 }
}
const stu1=new User('John','ggasjj@.com');
stu1.viewData();

const admin=new Admin('Debjit','Ghosh@email');
admin.viewData()
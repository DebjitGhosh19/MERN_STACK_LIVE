class user{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log(`Name: ${this.name} Email: ${this.email}`);
  }
}
const stu1=new user('John','ggasjj@.com');
stu1.viewData();
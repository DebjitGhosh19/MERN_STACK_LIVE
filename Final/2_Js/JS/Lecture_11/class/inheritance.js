class parent{
  hello(){
    console.log("Hello from parent class");
  }
}
class child extends parent{}
let obj =new child();
obj.hello();
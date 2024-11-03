const registerHome=[];
module.exports =class Home{
  constructor(houseName){
    this.houseName=houseName;
  }
save(){
registerHome.push(this);
}
static fatchAll(){
  return registerHome;
}
}


exports.registerHome=registerHome;
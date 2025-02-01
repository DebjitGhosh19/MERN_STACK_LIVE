class car{
  constructor(price){
    console.log('Car is created');
    this.price=price;
    console.log('Price is',this.price);
  }
    
  start(){
    console.log('Car is starting');
  }
  stop(){
    console.log('Car is stopping');
  }
  Brand(brand){
    this.brand=brand;
    console.log('Brand is',this.brand);
  }
}
const Fortunar=new car(200000);
Fortunar.start();
Fortunar.stop();
Fortunar.Brand('Toyota');
const Lesxus=new car();
Lesxus.start();
Lesxus.stop();
Lesxus.Brand('Lesxus');

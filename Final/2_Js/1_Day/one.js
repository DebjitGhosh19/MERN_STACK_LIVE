
let value=0;
const para=document.querySelector('#para');

function AddToBag(){
  value+=1;
  para.innerHTML=`Your Bag has ${value} items`
}

function AddTwo(){
  value+=2;
  para.innerHTML=`Your Bag has ${value} items`
}

function wishlist(){
  value-=1;
  para.innerHTML=`Your Bag has ${value} items`
}
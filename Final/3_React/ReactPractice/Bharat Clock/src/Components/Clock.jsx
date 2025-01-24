import React from 'react'

const Clock = () => {
  const date= new Date();
  const day=String(date.getDay());
  const month=String(date.getMonth()+1);
  const year=String(date.getFullYear());
  let fullTime;
  setInterval(() => {
    let hour=String(date.getHours());
    let min=String(date.getMinutes());
    let sec=String(date.getSeconds());
    
    
     fullTime=`${hour}:${min}:${sec}`    
  },1000)
  return (
    <p>This is the current time: {day}/{month}/{year} -{fullTime}</p>
  )
}

export default Clock
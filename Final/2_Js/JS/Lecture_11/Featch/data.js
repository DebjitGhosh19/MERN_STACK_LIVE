// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()
// ).then((data)=>console.log(data)
// ).catch((err)=>console.log(err)
// )

// async await

const getData=async(url)=>{
  const res=await fetch(url);
  if(!res.ok){
    const mes=`mess:${res.status}`
    throw new Error (mes)
  }
  const data=await res.json()
  return data
}
const boka=()=>{
  getData("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res)
  ).catch((err)=>console.log(err)
  )
}
boka()
let demo=[
{
  id:1,
  name:"d",
  cgpa:8.4
},
{
  id:2,
  name:"A",
  cgpa:5
},
{
  id:3,
  name:"B",
  cgpa:6
}
]

demo.filter(x=> x.cgpa>5).map(y=>console.log(y.name))

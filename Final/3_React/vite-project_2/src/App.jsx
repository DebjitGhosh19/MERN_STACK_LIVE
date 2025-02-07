import Card from "./Components/Card"


function App() {
  
const Card1="Shadowblade Sorcerer";
const Card2="Crimson Phoenix";
const Card3="Mystic Grove Guardian";
const Card4="Ironclad Warlord";
  return (
    <>
    <Card cardTitle={Card1} img="/images/1.jpg"/>
    <Card cardTitle={Card2} img="/images/4.jpg"/>
    <Card cardTitle={Card3} img="/images/1.jpg"/>
    <Card cardTitle={Card4} img="/images/4.jpg"/>
    </>
  )
}

export default App

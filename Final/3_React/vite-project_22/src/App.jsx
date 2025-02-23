import { useState, useEffect } from 'react';
import './App.css';

import Countries from './Countries';
import Search from './Search';

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterData, setfilterData] = useState([])
  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilterData(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.log("m",err.message);
      
    }
  };

  useEffect(() => {
    fetchData(url);
  },[]);

const removeCuntry=(cn)=>{
console.log(cn);
const filter=filterData.filter((country)=>country.name.common!==cn)
  setfilterData(filter)

  
}

  return (
    <>
  
      <h1>Country App</h1>
      <Search/>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error:{error}</h3>}
      {countries && <Countries countries={filterData} removeCuntry={removeCuntry}/>}
    </>
  );
}

export default App;

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
const searchHandelar=(SearchValue)=>{
  const value=SearchValue.toLowerCase();
  const NewCountry=countries.filter((countries)=>{
    const country=countries.name.common.toLowerCase();
    return country.startsWith(value)
  })
  setfilterData(NewCountry)
}
  return (
    <>
  
      <h1>Country App</h1>
      <Search searchHandelar={searchHandelar}/>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error:{error}</h3>}
      {countries && <Countries countries={filterData} removeCuntry={removeCuntry}/>}
    </>
  );
}

export default App;

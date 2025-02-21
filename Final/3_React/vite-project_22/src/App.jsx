import { useState, useEffect } from 'react';
import './App.css';

import Countries from './Countries';

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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



  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error:{error}</h3>}
      {countries && <Countries countries={countries}/>}
    </>
  );
}

export default App;

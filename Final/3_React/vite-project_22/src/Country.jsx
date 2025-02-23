import React from "react";

import style from './country.module.css'

const Country = ({ country,removeCuntry}) => {
 const handelar=(name)=>{
  removeCuntry(name)
 }
  return (
    <article className={style.country}>
      <div>
      <img src={country.flags.png} alt={country.name.common}  className={style.flag}/>
      <h3>Name:{country.name.common}</h3>
      <h3>Population:{country.population}</h3>
      <h3>Capital:{country.capital}</h3>
      <h3>Area:{country.area}</h3>
      <button className={style.btn} onClick={()=>{
        handelar(country.name.common)
      }}>Remove</button>
      </div>
    </article>
  );
};

export default Country;

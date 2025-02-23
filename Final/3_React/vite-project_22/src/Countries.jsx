import React from "react";
import Country from "./Country";

import { v4 as uuidv4 } from "uuid";
import style from './countries.module.css'
const Countries = ({ countries,removeCuntry }) => {


  return (
    <section className={style.countries}>
      {countries.map((country) => {
        const countriNew = { country, id: uuidv4() };
        return <Country key={countriNew.id} country={countriNew.country} removeCuntry={removeCuntry}/>;
      })}
    </section>
  );
};

export default Countries;

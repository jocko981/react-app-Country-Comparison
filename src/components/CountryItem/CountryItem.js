import React from "react";
import "./CountryItem.css";

const CountryItem = ({ country, addItem }) => {

    return (
        <div className="checkbox-div">
            <input type="checkbox" id={country.id} value={country.id} onChange={addItem} />
            <label>{country.name}</label>
        </div>
    );
    
}

export default CountryItem;
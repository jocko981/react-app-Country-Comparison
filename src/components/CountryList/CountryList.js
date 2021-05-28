import React, { useEffect, useState } from "react";
import "./CountryList.css";
import CountryItem from "../CountryItem/CountryItem";
import SearchInput from "../SearchInput/SearchInput";

const CountryList = ({ countryList, selectedCountries, addItem, compare, compareErr }) => {

    useEffect(() => { 
        setFilteredCountries(countryList)
    }, [countryList])

    const [filteredCountries, setFilteredCountries] = useState(countryList);

    // console.log("filteredCountries:", filteredCountries)
    
    const handleChange = (event) => {
        const newValue = event.target.value;

        setFilteredCountries(countryList.filter((items) => {
            if(newValue === "" || items.name.toLowerCase().includes(newValue.toLowerCase())) {
                return items
            }
            return null
        }))
    }

    return (
        <div className="country-list-wrapper">
            <h3>Country List</h3>
            <SearchInput handleChange={handleChange} />
            <p>Selected:  {selectedCountries.map(item => item.name + ", ")}</p>

            <div className="country-list">
                {filteredCountries.map((item, index) => 
                    <CountryItem 
                        key={index}
                        country={item}
                        addItem={addItem}
                    />
                )}
            </div>
            <div className="compare">
                <div>
                    <p>{compareErr}</p>
                </div>
                <div className="btn-div">
                    <button onClick={compare} type="submit">Compare</button>
                </div>
            </div>
        </div>
    );
}

export default CountryList;
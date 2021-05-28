import React from "react";
import "./PopulationDiff.css";

const PopulationDiff = ({ countriesToCompare }) => {
    
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const mostPopulation = Math.max(...countriesToCompare.map(item => item.population))
    const leastPopulation = Math.min(...countriesToCompare.map(item => item.population))
    const difference = mostPopulation - leastPopulation;

    const mostName = countriesToCompare.filter((item) => item.population === mostPopulation)[0]
    const leastName = countriesToCompare.filter((item) => item.population === leastPopulation)[0]

    return (
        <div className="population-compared">
            <p>Most populated country is: <strong>{mostName.name}</strong> with <strong>{numberWithCommas(mostPopulation)}</strong> inhabitants.</p>
            <p>Most least populated country is: <strong>{leastName.name}</strong> with <strong>{numberWithCommas(leastPopulation)}</strong> inhabitants.</p>
            <p>Difference of population is: <strong>{numberWithCommas(difference)}</strong> inhabitants.</p>            
        </div>
    );
}

export default PopulationDiff;
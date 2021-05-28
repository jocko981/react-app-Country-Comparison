import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { fetchCountryList } from "../../actions";

import PopulationDiff from "../../components/PopulationDiff/PopulationDiff";
import CountryList from "../../components/CountryList/CountryList";
import CompareChart from "../../components/CompareChart/CompareChart";

const Dashboard = ( { state, fetchCountryList }) => {

    useEffect(() => {
        fetchCountryList();
    }, [fetchCountryList])
    
    // useStates
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [countriesToCompare, setCountriesToCompare] = useState([]);
    const [compareErr, setCompareErr] = useState("");
    const [render, setRender] = useState(false);

    const compare = () => {
        if(selectedCountries.length < 2) {
            setCompareErr("You need to select at least 2 countries.")
        } else {
            setCompareErr("")
            setCountriesToCompare(selectedCountries)
            setRender(true)
        }
    }

    const addItem = (e) => {
        const checked = e.target.checked
        let id = e.target.value

        if(checked && selectedCountries.length < 4) {
            setCompareErr("")
            setSelectedCountries((prevItems) => {
                return [...prevItems, state[id]]
            });
        } else {            
            setSelectedCountries((prevItems) => {
                e.target.checked = false
                return prevItems.filter((item, index) => {
                    return item.id != id
                })
            });

            if(selectedCountries.length > 3) {
                setCompareErr("Maximum 4 countries can be compared.")
            }
        }

        if(!checked) {
            setCompareErr("")
        }
    }    
    
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard">
                <div className="component">
                    {render && <PopulationDiff countriesToCompare={countriesToCompare} />}
                </div>
                <div className="component">
                    <CountryList countryList={state} selectedCountries={selectedCountries} addItem={addItem} compare={compare} compareErr={compareErr} />
                </div>
            </div>
            <div className="chart">
                {render && <CompareChart countriesToCompare={countriesToCompare} />}            
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state };
}

export default connect(mapStateToProps, { fetchCountryList })(Dashboard);
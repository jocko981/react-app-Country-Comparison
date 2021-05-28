import axios from "axios";

const FETCH_LIST = "FETCH_LIST";

export const fetchCountryList = () => async dispatch => {
    
    const response = await axios.get("https://restcountries.eu/rest/v2")

    // console.log(response);
    let allCountries = response.data.map((item, index) => {
        return {
            id: index,
            name: item.name,
            population: item.population
        };
    });
    console.log(allCountries, " this is state from fetchCountryList() Action call");

    dispatch ({
        type: FETCH_LIST,
        payload: allCountries
    });
}
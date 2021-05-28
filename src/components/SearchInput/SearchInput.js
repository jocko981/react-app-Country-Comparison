import React from "react";
import "./SearchInput.css";

const SearchInput = ({ handleChange }) => {

    return (
        <div className="search-div">
            <input onChange={handleChange} type="text" placeholder="Search..." />
        </div>
    );
}

export default SearchInput;
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setCity } from "../redux/weatherSlice";
import { fetchData } from "../redux/weatherSlice";

function SearchBar() {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(setCity(query));
    dispatch(fetchData(query));
  };

  return (
    <div>
      <form className="search">
        <input
          placeholder="City"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            onClickHandler(e);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar

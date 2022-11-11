import { useState, useEffect } from "react";

import axios from "axios";

const Search = () => {
  const [title, setTitle] = useState("");
  const [minprice, setMinPrice] = useState(0);
  const [maxprice, setMaxPrice] = useState();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
          {
            title,
            priceMin: minprice,
            priceMax: maxprice,
            sort: sort,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [title, minprice, maxprice, sort]);

  return (
    <div className="filters">
      <div className="search">
        <input
          type="search"
          placeholder="Recherche des articles"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="price-and-sort">
        <input
          type="text"
          placeholder="Prix min"
          value={minprice}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Prix max"
          value={maxprice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="tri"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;

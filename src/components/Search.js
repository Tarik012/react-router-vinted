const Search = ({
  title,
  minprice,
  maxprice,
  sort,
  setTitle,
  setMinPrice,
  setMaxPrice,
  setSort,
}) => {
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

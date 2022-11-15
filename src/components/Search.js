import MultiRangeSlider from "./MultiRangeSlider";
// import Sort from "./Sort";

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
        {/* <input
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
        ></input> */}
        <div className="button-sort">
          <input
            type="text"
            placeholder="tri"
            title="put 'price-asc' or 'price-desc'"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          ></input>
          {/* <Sort /> */}
        </div>
        <div>
          <MultiRangeSlider
            minprice={0}
            maxprice={1000}
            onChange={
              ({ minprice, maxprice }) => {
                setMinPrice(minprice);
                setMaxPrice(maxprice);
              }
              // console.log(`min = ${minprice}, max = ${maxprice}`)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

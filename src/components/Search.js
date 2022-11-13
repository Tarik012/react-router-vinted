import MultiRangeSlider from "./MultiRangeSlider";

const Search = ({
  title,
  minprice,
  maxprice,
  sort,
  setTitle,
  setMinPrice,
  setMaxPrice,
  setSort,
  multirangeslider,
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
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          ></input>
        </div>
        <div className="multi-range-slider-container">
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

import { useState } from "react";

const Sort = () => {
  const [displayA, setDisplayA] = useState(true);
  const [displayD, setDisplayD] = useState(false);

  return (
    <div className="sort-container">
      <div
        className={displayA && "A"}
        onClick={() => {
          setDisplayA(!displayA);
          setDisplayD(!displayD);
        }}
      >
        A
      </div>
      <div
        className={displayD && "D"}
        onClick={() => {
          setDisplayD(!displayD);
          setDisplayA(!displayA);
        }}
      >
        Tri
      </div>
    </div>
  );
};

export default Sort;

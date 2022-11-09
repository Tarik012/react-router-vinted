import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  //console.log("params=>", id);
  return (
    <div className="offer">
      <h1>IMAGE DE OFFER</h1>
      <p>Id of offer:{id}</p>
      <div>
        <Link to="/offer/:id">Offer</Link>
      </div>
    </div>
  );
};

export default Offer;

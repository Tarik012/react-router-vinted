import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      {/* AJOUTER COMPOSANT HEADER */}
      {/* METTRE DANS COMPOSANT OFFERS */}
      {data.offers.map((offer) => {
        return (
          //METTRE DANS COMPOSANT OFFER
          <Link to={`/offer/${offer._id}`}>
            <div className="tabimages" key={offer._id}>
              {offer.product_pictures[0]?.secure_url ? (
                <img
                  src={offer.product_pictures[0].secure_url}
                  alt={offer.product_description}
                ></img>
              ) : (
                <img
                  src="https://res.cloudinary.com/lereacteur/image/upload/v1667579398/api/vinted-v2/offers/63653e0536dd4584809e40fa/l25mrpifm8dw43zmlrgw.jpg"
                  alt="text"
                ></img>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;

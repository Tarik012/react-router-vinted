import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log("id==>", id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}` //on interroge de nouveau la base pour avoir en GET l'article avec son id
        );
        console.log("data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offer">
      <div className="offer-image">
        <img src={data.product_image.secure_url} alt="offer"></img>
      </div>
      <div className="offer-cart">
        <div>
          <p>{data.product_price}</p>
        </div>
        <div>
          <p>MARQUE : {data.product_details[0]["MARQUE"]}</p>
          <p>ETAT : {data.product_details[1]["ETAT"]}</p>
          <p>COULEUR : {data.product_details[2]["COULEUR"]}</p>
          <p>EMPLACEMENT : {data.product_details[3]["EMPLACEMENT"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;

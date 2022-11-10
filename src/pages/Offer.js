import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
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
    // <div className="tabimages">
    //   {data.product_pictures[0]?.secure_url && (
    //     <img
    //       src={data.product_pictures[0].secure_url}
    //       alt={data.product_description}
    //     ></img>
    //   )}
    // </div>
    <div className="tabimages">
      <div className="offer">
        <Link to="/">Retour liste articles</Link>
        <div className="offer-image">
          <img src={data.product_image.secure_url} alt="offer"></img>
        </div>
        <div className="offer-cart">
          <div>
            <p>{data.product_price}</p>
          </div>

          <div>
            {data.product_details.map((detail, index) => {
              const key = Object.keys(detail)[0];
              return (
                <p key={index}>
                  {key} : {detail[key]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

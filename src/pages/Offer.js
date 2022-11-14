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
        //console.log("data==>", response.data);
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
    <div className="tab-images">
      <div className="offer">
        <Link to="/">Retour liste articles</Link>
        <div className="offer-image">
          <img src={data.product_image.secure_url} alt="offer"></img>
        </div>
        <div className="offer-cart">
          <div>
            <p>{data.product_price} €</p>
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

          <div>
            <p>{data.product_name}</p>
          </div>
          <div>
            <p>{data.product_description}</p>
          </div>
          <div className="owner">
            <img
              src={data.owner.account.avatar.secure_url}
              alt="owner"
              style={{ height: 25, width: 25 }}
            />
            <p>{data.owner.account.username}</p>
          </div>
          <div className="button-buy">
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

import Cookies from "js-cookie";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const jeton = Cookies.get("tokenCookie");

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
      <div>
        <Link to="/">Retour liste articles</Link>
      </div>
      <div className="offer">
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
                <div key={index} className="offercart-details">
                  <div>
                    <p>{key}</p>
                  </div>
                  <div>
                    <p>{detail[key]}</p>
                  </div>
                </div>
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

          <Link
            to={jeton ? "/payment" : "/"}
            state={
              jeton
                ? {
                    title: `${data.product_name}`,
                    price: `${data.product_price}`,
                  }
                : ""
            }
          >
            <div className="button-buy-offer">
              <button>Acheter</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;

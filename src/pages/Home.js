import { useState, useEffect } from "react";

import axios from "axios";

import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers" // je récupère tout mes articles
        );
        //console.log(response.data);
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
    <div>
      <div>
        <Hero />
      </div>
      <div className="container">
        {data.offers.map((offer) => {
          //console.log("offer==>", offer);
          return <Offers key={offer._id} offerInfos={offer} />;
        })}
      </div>
    </div>
  );
};

export default Home;

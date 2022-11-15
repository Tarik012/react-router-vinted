import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ token, title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  //console.log("token, title, amount ==>", token, title, amount);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // On récupère ici les données bancaires que l'utilisateur rentre
      const cardElement = elements.getElement(CardElement);

      // Demande de création d'un token via l'API Stripe
      // On envoie les données bancaires dans la requête
      const stripeResponse = await stripe.createToken(cardElement, {
        name: `${token}`,
      });
      //console.log("stripeResponse ===>", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // Une fois le token reçu depuis l'API Stripe
      // Requête vers notre serveur
      // On envoie le token reçu depuis l'API Stripe
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: amount,
        }
      );
      console.log("response.data ===>", response.data);
      // Si la réponse du serveur est favorable, la transaction a eu lieu
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <div className="card-element">
            <CardElement />
          </div>
          <div className="btn-payment">
            <button>Pay</button>
          </div>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};

export default CheckoutForm;

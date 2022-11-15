import { useLocation, Navigate, Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  const [payment, setPayment] = useState(false);
  const location = useLocation();
  const { price, title } = location.state;

  const fraisProtection = "0.4";
  const fraisPort = "0.8";

  const total = (
    Number(price) +
    Number(fraisProtection) +
    Number(fraisPort)
  ).toFixed(2);

  return token ? (
    <div className="payment-container">
      {!payment ? ( // si le paiement n'est pas effectué, on affiche le récapitulatif de la commande
        <div className="div-payment">
          <div className="section-payment sp1">
            <div>Résumé de la commande</div>
            <div></div>
          </div>
          <div className="section-payment sp2">
            <div>Commande</div>
            <div className="align">{price} €</div>
          </div>
          <div className="section-payment sp3">
            <p>Frais protection acheteur</p>
            <p>O.40 €</p>
          </div>
          <div className="section-payment sp4">
            <p>Frais de port</p>
            <p>O.80 €</p>
          </div>
          <div className="section-payment sp5"></div>
          <div className="section-payment sp6">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>Total</p>
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>{total}</p>
          </div>
          <div className="section-payment sp7">
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              Il ne vous plus qu'une étape pour vous offrir{" "}
              <span style={{ fontWeight: "bold" }}>{title}</span>. Vous allez
              payer <span style={{ fontWeight: "bold" }}>{total} €</span> (frais
              de protection et frais de port inclus).
            </p>
          </div>
          <div className="section-payment sp8"></div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                token={token}
                title={title}
                amount={price}
                payment={payment}
                setPayment={setPayment}
              />
            </Elements>
          </div>
        </div>
      ) : (
        <div className="div-success-payment">
          <p>Paiement effectué !!</p>
          <Link to="/">
            <p>Continuer mes achats</p>
          </Link>
        </div>
      )}
    </div>
  ) : (
    Navigate("/")
  );
};

export default Payment;

import { useLocation, Navigate } from "react-router-dom";

const Payment = ({ token }) => {
  const location = useLocation();
  const { price, title } = location.state;

  const fraisProtection = 0.4;
  const fraisPort = 0.8;

  const total = (
    Number(price) +
    Number(fraisProtection) +
    Number(fraisPort)
  ).toFixed(2);

  return token ? (
    <div className="payment-container">
      <div className="div-payment">
        <div className="section-payment">
          <div>Résumé de la commande</div>
          <div></div>
        </div>
        <div className="section-payment">
          <div>Commande</div>
          <div>{price} €</div>
        </div>
        <div className="section-payment">
          <p>Frais protection acheteur</p>
          <p>O.40 €</p>
        </div>
        <div className="section-payment">
          <p>Frais de port</p>
          <p>O.80 €</p>
        </div>
        <div className="section-payment">
          <p style={{ fontWeight: "bold" }}>Total</p>
          <p style={{ fontWeight: "bold" }}>{total}</p>
        </div>
        <div className="section-payment">
          <p>
            Il ne vous plus qu'une étape pour vous offrir{" "}
            <span style={{ fontWeight: "bold" }}>{title}</span>. Vous allez
            payer <span style={{ fontWeight: "bold" }}>{total} €</span> (frais
            de protection et frais de port inclus).
          </p>
        </div>
        <div>Mon strip</div>
        <div className="btn-payment">
          <button>Pay</button>
        </div>
      </div>
    </div>
  ) : (
    Navigate("/")
  );
};

export default Payment;

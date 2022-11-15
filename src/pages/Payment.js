import { useLocation } from "react-router-dom";

const Payment = ({ token }) => {
  //console.log(token);
  const location = useLocation();
  const { price } = location.state;

  //   const fraisProtection = "0,4";
  //   const fraisPort = "0,8";
  //   const total = Number(price + fraisProtection + fraisPort).fixedto(2);
  //   console.log("total=>", total);
  return <span>{price}</span>;

  // <div className="payment-container">
  //   <div className="section-payment">
  //     <div>Résumé de la commande</div>
  //     <div></div>
  //   </div>
  //   <div>
  //     <div>Commande</div>
  //     <div>{price}</div>
  //   </div>
  //   <div>
  //     <p>Frais protection acheteur</p>
  //     <p>O.40 €</p>
  //   </div>
  //   <div>
  //     <p>Frais de port</p>
  //     <p>O.80 €</p>
  //   </div>
  //   <div>
  //     <p>Total</p>
  //     <p>total</p>
  //   </div>
  // </div>
};

export default Payment;

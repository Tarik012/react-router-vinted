import { Link } from "react-router-dom";

const Offers = ({ offerInfos }) => {
  // affiche les offres pour que l'on clique dessus afin d'aller sur la page de l'article
  return (
    offerInfos.owner && (
      <div className="offers">
        <Link to={`/offer/${offerInfos._id}`} className="offer-card-container">
          <div className="owner">
            {offerInfos.owner.account.avatar && (
              <img
                src={offerInfos.owner.account.avatar.secure_url}
                alt="owner"
                style={{ height: 25, width: 25 }}
              />
            )}
            <p>{offerInfos.owner.account.username}</p>
          </div>
          <img
            src={offerInfos.product_image.secure_url}
            alt="product"
            style={{ height: 400, width: 200, objectFit: "cover" }}
          />
          <div className="offers-product-details">
            <p className="offers-product-price">{offerInfos.product_price} €</p>
            {offerInfos.product_details.map((detail, index) => {
              if (detail.TAILLE) {
                return <p key={index}>{detail.TAILLE}</p>;
              } else {
                return null;
              }
            })}
            {offerInfos.product_details.map((detail, index) => {
              if (detail.MARQUE) {
                return <p key={index}>{detail.MARQUE}</p>;
              } else {
                return null;
              }
            })}
          </div>
        </Link>
      </div>
    )
  );
};

export default Offers;

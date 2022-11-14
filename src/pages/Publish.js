import axios from "axios";
import { useState } from "react";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [price, setPrice] = useState("");
  const [change, setChange] = useState(false);
  const [data, setData] = useState();

  const url = "https://lereacteur-vinted-api.herokuapp.com/offer/publish";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", etat);
      formData.append("city", lieu);
      formData.append("brand", marque);
      formData.append("size", taille);
      formData.append("color", couleur);
      formData.append("picture", picture);

      const response = await axios.post(url, formData, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setData(response.data);
      console.log("data=>", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="div-publish">
        <div className="div-h1">
          <h1>Vends ton article</h1>
        </div>
      </div>

      <div className="publish-container">
        <form onSubmit={handleSubmit}>
          <div className="section-publish">
            <div>
              <p>Ajouter une photo</p>
            </div>
            <div>
              <input
                type="file"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                }}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Titre</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                type="text"
                placeholder="ex: Chemise Sézane verte"
                value={title}
              ></input>
            </div>
          </div>
          <div className="section-publish">
            <div>
              <label>Décris ton article</label>
            </div>
            <div>
              <textarea
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                cols="40"
                rows="10"
                placeholder="ex: porté quelques fois, taille corectement"
                value={description}
              ></textarea>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Marque</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setMarque(event.target.value);
                }}
                type="text"
                placeholder="ex: Zara"
                value={marque}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Taille</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setTaille(event.target.value);
                }}
                type="text"
                placeholder="ex: L / 40 / 12"
                value={taille}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Couleur</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setCouleur(event.target.value);
                }}
                type="text"
                placeholder="ex: Fuschia"
                value={couleur}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Etat</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setEtat(event.target.value);
                }}
                type="text"
                placeholder="ex: Neuf avec étiquette"
                value={etat}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Lieu</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setLieu(event.target.value);
                }}
                type="text"
                placeholder="ex: Paris"
                value={lieu}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <label>Prix</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                type="text"
                placeholder="ex: 0,00 €"
                value={price}
              ></input>
            </div>
          </div>

          <div className="section-publish">
            <div></div>
            <div>
              <input
                type="checkbox"
                checked={change}
                onChange={() => {
                  setChange(!change);
                }}
              ></input>
              <p>S'inscrire à notre newsletter</p>
            </div>
          </div>

          <div className="section-publish">
            <div>
              <button>Publier</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Publish;

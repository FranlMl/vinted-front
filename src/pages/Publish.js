import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null); //picture

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();

  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  console.log(token);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <form className="form-box-publish" onSubmit={handleSubmit}>
      <input
        type="file"
        placeholder="Photo de l'article"
        onChange={(event) => {
          setPicture(event.target.files[0]);
          setPreview(URL.createObjectURL(event.target.files[0]));
        }}
      />

      <h1>Vends un article</h1>

      <br />

      <img src={preview} alt="" />

      <label>Titre</label>
      <input
        type="text"
        placeholder="ex: Chemise Sézane"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label>Décris ton article</label>
      <input
        type="text"
        placeholder="ex: Bon etat"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label>Marque</label>
      <input
        type="text"
        placeholder="ex: H&M"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />

      <label>Taille</label>
      <input
        type="text"
        placeholder="ex: S M.."
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />

      <label>Couleur</label>
      <input
        type="text"
        placeholder="ex: Rouge, beige.."
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      <label>Etat</label>
      <input
        type="text"
        placeholder="ex: Bon etat, neuf sans étiquette"
        value={condition}
        onChange={(event) => setCondition(event.target.value)}
      />

      <label>Lieu</label>
      <input
        type="text"
        placeholder="ex: Paris, Toulon.."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <label>Prix</label>
      <input
        type="text"
        placeholder="ex: 10€, 20€ .."
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit"> Envoyer </button>
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;

import "../App.scss";

import { Link } from "react-router-dom";

const Header = ({ handleToken, token }) => {
  return (
    <div className="box1">
      
      <header className="box-header">
          
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1>Vint-Ed</h1>
        </Link>

        <input type="text" placeholder="Rechercher des articles" />

        {!token ? (
          <>
            <Link to="/login">
              {" "}
              <button> Connexion </button>{" "}
            </Link>
            <Link to="/signup">
              {" "}
              <button> S'incrire </button>{" "}
            </Link>{" "}
          </>
        ) : (
          <>
            <Link to="/publish">
              <button> Vendre un article </button>{" "}
            </Link>

            <button
              onClick={() => {
                handleToken();
              }}
            >
              Déconnexion
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;

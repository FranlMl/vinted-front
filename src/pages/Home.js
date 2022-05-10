import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //const affi = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=10"
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <div> Is Still loading</div>
  ) : (
    <div className="box1">
      <main>
        <img src={require("../assets/homme.jpg")} />

        <div className="in-box">
          <h1>Prets a faire du tri dans vos placards ?</h1>

          <Link to="/publish">
            <button>Commencer a vendre</button>
          </Link>
        </div>

        <div className="products">
          <div className="products-box">
            {data.offers.map((offer) => {
              return (
                <Link to={`/offer/${offer._id}`}>
                  
                  <div className="card" key={offer._id}>
                    <img src={offer.product_image.secure_url} alt="" />

                    <h2> {offer.product_name} </h2>
                    <p> {offer.product_price} € </p>
                  
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

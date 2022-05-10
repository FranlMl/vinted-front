import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return isLoading === true ? (

    <div> Still downloading </div>
  ) : (
    <div className="box2">

      <div className="box2-1">
          
        <h2> {data.product_name} </h2>

        <span> {data.product_price} </span>

        <img src= {data.product_image.secure_url} alt="" style= {{ width: "100px" }} />

        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);

          return (
            <div key={index}>

              {keys[0]} : {item[keys[0]]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

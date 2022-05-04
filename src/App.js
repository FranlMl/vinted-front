import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //const affi = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
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
    <div className="App">
      <h1>Test</h1>

      {data.offers}
    </div>
  );
}

export default App;

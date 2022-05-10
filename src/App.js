// Import Pages:


import Home from "./pages/Home";
import Offer from "./pages/Offer";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Publish from "./pages/Publish";

// Import Components :

import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cookies from "js-cookie";
import { useState } from "react";

import "./App.scss";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token !== null) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("userToken");
    }
    setUserToken(token);
  };

  return (

    <div className="App">

      <Router>

        <Header handleToken={handleToken} token={userToken} />

        <Routes>

          <Route path="/home" element={<Home />} />

          <Route path="/offer/:id" element={<Offer />} />
          
          <Route path="/signup" element={<Signup handleToken={handleToken} />}/>

          <Route path="/login" element={<Login handleToken={handleToken} />} />

          <Route path="/publish" element={<Publish token={userToken} />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;

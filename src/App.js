import React, { useEffect, useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";

import Aries from "./components/assets/Aries.svg";
import Aquarius from "./components/assets/Aquarius.svg";
import Cancer from "./components/assets/Cancer.svg";
import Capricorn from "./components/assets/Capricorn.svg";
import Gemini from "./components/assets/Gemini.svg";
import Leo from "./components/assets/Leo.svg";
import Libra from "./components/assets/Libra.svg";
import Pisces from "./components/assets/Pisces.svg";
import Sagittarius from "./components/assets/Sagittarius.svg";
import Scorpio from "./components/assets/Scorpio.svg";
import Taurus from "./components/assets/Taurus.svg";
import Virgo from "./components/assets/Virgo.svg";

function App() {
  const [res, setRes] = useState([]);
  const Signs = [
    { name: "Aries", symbol: Aries, color: "#FF5353" },
    { name: "Aquarius", symbol: Aquarius, color: "#80BFEA" },
    { name: "Cancer", symbol: Cancer, color: "#C8C8C8" },
    { name: "Capricorn", symbol: Capricorn, color: "#666B67" },
    { name: "Gemini", symbol: Gemini, color: "#FFE152" },
    { name: "Leo", symbol: Leo, color: "#FFA35A" },
    { name: "Libra", symbol: Libra, color: "#FDBDBD" },
    { name: "Pisces", symbol: Pisces, color: "#A1E2C4" },
    { name: "Sagittarius", symbol: Sagittarius, color: "#C0ADEF" },
    { name: "Scorpio", symbol: Scorpio, color: "#242424" },
    { name: "Taurus", symbol: Taurus, color: "#80C181" },
    { name: "Virgo", symbol: Virgo, color: "#B08366" },
  ];

  function fetchData() {
    fetch(
      "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",
      {
        method: "POSt",
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "8b0a085527msh3d897192fabe33fp1aff4ajsnae90fb6eec6c",
          "content-type": "application/x-www-form-urlencoded",
        },

        body: {},
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // setRes(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(fetchData);

  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Sidebar Signs={Signs} />
        <Body Signs={Signs} />
      </div>
    </div>
  );
}

export default App;

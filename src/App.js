import React, { useState, useEffect } from "react";
import "./App.css";
import Spinners from "./Spinner";
import EntirePage from "./Portfolio/EntirePage";

const App = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return <>{loading ? <Spinners /> : <EntirePage />}</>;
};

export default App;

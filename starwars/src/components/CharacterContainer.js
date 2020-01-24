import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCards from "./CharacterCards";

export default function CharacterContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log("I am the axios call", response.data.results);
        setData(response.data.results);
      })
      .catch(error => console.log("Data is not available", error));
  }, []);

  return (
      <div>
          <CharacterCards postData = {data}/>
      </div>
  )
}

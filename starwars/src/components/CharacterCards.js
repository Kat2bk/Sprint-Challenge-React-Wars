import React from "react";
import Characters from "./Characters";

const CharacterCards = (props) => {
    console.log(props)
    return (
        <>
        {props.postData.map((item, index) => (
          <Characters key={index} post = {item}/>
        ))}
        </>
    );
  };

export default CharacterCards;
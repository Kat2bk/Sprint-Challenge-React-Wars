import React from "react";
import Characters from "./Characters";

const CharacterCards = (props) => {
    return (
      <div className="wrapper">
        {props.postData.map(item => (
          <Characters post = {item}/>
        ))}
      </div>
    );
  };

export default CharacterCards;
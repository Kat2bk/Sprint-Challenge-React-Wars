import React from "react";
import Characters from "./Characters";
import styled from 'styled-components'

const GridCard = styled.div`
display: grid;
grid-template-columns: auto auto auto;
padding: 10px;
`

const CharacterCards = (props) => {
    console.log(props)
    return (
        <GridCard>
        {props.postData.map((item, index) => (
          <Characters key={index} post = {item}/>
        ))}
        </GridCard>
    );
  };

export default CharacterCards;
import React from "react";
import { Card, CardTitle } from 'reactstrap';
import styled from 'styled-components'

const CharDiv = styled.div`
margin: 2%;
background-color: rgba(168, 107, 50, 0.3);
width: 300px;
border: 1px solid brown;
border-radius: 10px;
`

export default function Characters(props) {
  return (
    <CharDiv>
       <h2>Name: {props.post.name}</h2>
       <h2> Height: {props.post.height}</h2>
       <h2>Gender: {props.post.gender}</h2>
       <h2>Date of Birth: {props.post.birth_year}</h2>
    </CharDiv>
  );
}

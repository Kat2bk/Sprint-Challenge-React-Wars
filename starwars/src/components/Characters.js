import React from "react";
import { Card, CardTitle } from "reactstrap";
import styled from "styled-components";

const CharDiv = styled.div`
margin: 5%;
background-color: rgba(168, 107, 50, 0.3);
width: 300px;
border: 1px solid brown;
border-radius: 10px;
text-shadow: 2px 3px #000;
padding: 1%;
color:  #ffb31a;
text-align: center;
box-shadow:  inset 0 0 50px #fff,      
inset 10px 0 80px #0064D1,  
inset -10px 0 80px #0ff,  
inset 10px 0 300px #3287E3,  
inset -20px 0 300px #2D3CE2, 
0 0 50px #fff,           
-10px 0 80px #6DA7E6,     
10px 0 80px #0ff; 
`;

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

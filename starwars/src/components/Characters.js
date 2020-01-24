import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Col
  } from "reactstrap";

export default function Characters(props) {
  return (
    <div className="card">
        <Col xs="12" md="6" xl="3">
     <Card>
         <CardBody xs="6" md="12" xl="3">
       <CardTitle>Name: {props.post.name}</CardTitle>
       <h2> Height: {props.post.height}</h2>
       <h2>Gender: {props.post.gender}</h2>
       <h2>Date of Birth: {props.post.birth_year}</h2>
       </CardBody>
     </Card>
     </Col>
    </div>
  );
}

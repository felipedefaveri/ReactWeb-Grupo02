import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./card.css";

export default function ProdutoCard({ produto }) {
  return (
    <Card border="secondary" bg="dark">
      <Card.Img variant="top" src={produto.fotoLink} />
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>R$ {produto.valor}</Card.Text>
        <Button variant="secondary">
          <FontAwesomeIcon icon={faCartPlus} /> Comprar
        </Button>
      </Card.Body>
    </Card>
  );
}

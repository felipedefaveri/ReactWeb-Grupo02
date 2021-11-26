import React, { useState, useEffect } from "react";
import ProdutoCard from "../../components/ProdutoCard";
import api from "../../Services/api";
import { Row, Col } from "react-bootstrap";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <Row xs={1} md={4} className="g-4 mt-2">
        {produtos === undefined
          ? "Loading"
          : produtos.map((produto) => (
              <Col>
                <ProdutoCard key={produto.id} produto={produto} />
              </Col>
            ))}
      </Row>
    </div>
  );
}

export default Home;

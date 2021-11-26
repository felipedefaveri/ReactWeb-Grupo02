
import React, { useState, useEffect } from 'react';
import api from '../../Services/api';

function Produto(){

    const [data,setData] = useState([])

    useEffect(() => {
        api
          .get("/produto")
          .then((response) => setData(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
return(
    <div><h1>Listar</h1>
   
        <body>
                {Object.values(data).map(produto =>(
              <div key={produto.id}>
                  <div>{produto.id}</div>
                  <div>{produto.nome}</div>
                  <div><img src={`${produto.fotoLink}`}/></div>
                  <div>R$:{produto.valor}</div>






              </div>
            ))}
        </body>
   
    
    
    
    
    
    </div>
   
)


}



import React, { useState, useEffect } from "react";

function Produto() {
  return (
    <div>
      <h1>Listar</h1>

      <body></body>
    </div>
  );
}

export default Produto;


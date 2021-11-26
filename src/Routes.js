import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import Home from './Pages/Home';




import Carrinho from "./components/Cart";
import Sobre from "./components/About";
import Contato from "./components/Contact";

import NavBar from "./components/Navbar"
import Header from "./components/Header";
import Produto from "./components/Produto";


import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Produto from "./components/Produto";
import Footer from "./components/Footer";


function Routes() {
  return (
    <BrowserRouter>


    <Header/>
    <NavBar />
    <Produto/>

      <Header />
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrinho" exact component={Carrinho} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/contato" exact component={Contato} />


      </Switch>

      </Switch>
      <Footer />

    </BrowserRouter>
  );
}



export default Routes;


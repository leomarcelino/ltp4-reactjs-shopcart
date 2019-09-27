import React from "react";
import Header from "../Header";

import { Container, ItemList } from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />
      <ItemList>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
            alt=""
          />
          <h3> Cat Tee Black T-shirt</h3>
          <h4> R$ 19,90 </h4>
          <small>ou 10x R$ 1,99</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
            alt=""
          />
          <h3> Dark thug blue navy T-shirt</h3>
          <h4> R$ 29,90 </h4>
          <small>ou 10x R$ 2,99</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
            alt=""
          />
          <h3> Sphynx Tie Dye Wine T-shirt</h3>
          <h4> R$ 24,90 </h4>
          <small>ou 10x R$ 2,49</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg"
            alt=""
          />
          <h3> Skull T-shirt</h3>
          <h4> R$ 23,90 </h4>
          <small>ou 10x R$ 2,39</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg"
            alt=""
          />
          <h3> Wine Skull T-shirt</h3>
          <h4> R$ 11,90 </h4>
          <small>ou 10x 1,19</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg"
            alt=""
          />
          <h3> Cat Tee Black T-shirt</h3>
          <h4> R$ 15,60 </h4>
          <small>ou 10x 1,56</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg"
            alt=""
          />
          <h3> Sphynx Tie Dye Grey T-shirt </h3>
          <h4> R$ 14,90 </h4>
          <small>ou 10x R$ 1,49</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg"
            alt=""
          />
          <h3> Danger Knife Grey T-shirt</h3>
          <h4> R$ 19,90 </h4>
          <small>ou 10x 1,99</small>
          <button>Adicionar ao carrinho</button>
        </li>
        <li>
          <img
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg"
            alt=""
          />
          <h3> White DGK Script Tee T-shirt</h3>
          <h4> R$ 25,90 </h4>
          <small>ou 10x R$ 2,59</small>
          <button>Adicionar ao carrinho</button>
        </li>
      </ItemList>
    </Container>
  );
}

import React from "react";
import { SizeList, Container } from "./styles";

export default function Filter() {
  return (
    <Container>
      <h3>Sizes:</h3>
      <SizeList>
        <li>XS</li>
        <li>S</li>
        <li>M</li>
        <li>ML</li>
        <li>L</li>
        <li>XL</li>
        <li>XXL</li>
      </SizeList>
    </Container>
  );
}

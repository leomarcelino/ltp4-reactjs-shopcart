import React from "react";
import { Container, SearchResults } from "./styles";

export default function Header() {
  return (
    <Container>
      <SearchResults>16 produtos encontrados</SearchResults>
      <select name="" id="">
        <option value="menorParaMaior">Menor para maior</option>
        <option value="maiorParaMenor">Maior para menor</option>
      </select>
    </Container>
  );
}

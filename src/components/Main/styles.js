import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    button {
      width: 250px;
      height: 50px;
      background: #000;
      color: #fff;
      font-size: 16px;
    }
    h3 {
      margin: 10px;
    }
    h4 {
      font-size: 22px;
      margin: 5px;
    }
    small {
      margin: 1px 5px 5px 5px;
      color: #9c9b9b;
    }
  }
`;

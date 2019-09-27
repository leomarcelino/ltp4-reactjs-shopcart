import styled from "styled-components";
export const SizeList = styled.ul`
  list-style: none;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 35px;
    heigth: 35px;
    background-color: #ececec;
    border-radius: 50%;
    margin: 5px;
    padding: 5px;
    line-height: 35px;
    text-align: center;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  h3 {
    margin: 10px;
  }
`;

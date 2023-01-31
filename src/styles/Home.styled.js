import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  div {
    display: flex;
    align-items: center;
    a {
      list-style: none;
      margin-left: 2rem;
      font-weight: bold;
      @media (max-width: 476px) {
        display: none;
      }
    }
    @media (max-width: 768px) {
      img {
        width: 36px;
        height: 20px;
      }
    }
  }
  .userImg {
    background-color: lightgray;
    width: 2rem;
    height: 2rem;
    padding: 4px 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InnerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  justify-items: center;
  div {
    width: 240px;
    margin: 1rem;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 0 0;
    letter-spacing: 0.5px;
  }
  p {
    color: #485562;
  }
  .price {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    p {
      color: #2ca551;
      font-size: 1rem;
      font-weight: bold;
    }
    img {
      width: auto;
    }
  }
`;

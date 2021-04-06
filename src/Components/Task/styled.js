import styled from 'styled-components';

export const Card = styled.div`
  height: auto;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12rem;
  padding: 3rem 1rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 1rem rgba(#000, 0.25);
  background-color: ${({ status }) => (status ? "green" : "yellow")};
  span {
    font-weight: bold;
  }
  .status {
    background-color: #fff;
    border: none;
    width: max-content;
    height: min-content;
    padding: 1rem;
    cursor: pointer;
  }
  .entrega {
    padding: 0.5rem 1rem;
    border-radius: 4rem;
  }
  h3 {
    margin-bottom: -1rem;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    time {
      font-style: italic;
    }
  }
  .buttons {
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    svg {
      height: 2.4rem;
      margin: 0 0.6rem;
      &:nth-child(1) {
        color: green;
      }
      &:nth-child(2) {
        color: red;
      }
    }
  }
`;

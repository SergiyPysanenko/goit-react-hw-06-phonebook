import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  width: 400px;

  & td {
    padding: 10px;
  }

  & td:first-child {
    font-weight: bold;
  }

  & button {
    padding: 5px 10px;
    background-color: #d4d4d4;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }

  & button:hover {
    background-color: #8f94f7;
    transform: scale(1.05);
  }
`;

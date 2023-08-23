import styled from '@emotion/styled';

export const Row = styled.tr`
  background-color: gray;
  height: 3em;
  tbody > &:nth-of-type(odd) {
    background-color: lightgray;
  }
`;

export const ItemData = styled.td`
  padding: 5pt 10pt;
`;

export const DateData = styled.td`
  padding: 5pt 10pt;
  width: auto;
`;

export const DeleteData = styled.td`
  text-align: right;
  padding-right: 0.5em;
  width: auto;
`;
export const Button = styled.button`
  border: none;
  background-color: inherit;
`;

export const Image = styled.img`
  height: 16pt;
  width: 16pt;
`;

import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  gap: 0;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  background-color: #cfe5ff;
  box-shadow: 0 0 5px #e0e0e0;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px #e0e0e0;
    transform: scale(1.07);
    z-index: 3;
    transition: 0.2s ease-in-out;
  }
`;

export const CardBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  max-height: 390px;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px 0;
  border-radius: 10px;
  background: none;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px;
  max-width: 780px;
  margin: 0 auto;
`;

export const Type = styled(Typography)`
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 10px;
  width: fit-content;
  padding: 3px 15px;
  border: 1px solid blue;
  bottom: 3px;
`;

export const TypeContainer = styled.div`
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "auto"
`;

export const Title = styled(Typography)`
  font-size: 17px;
  max-width: 70%;
  line-height: 1.2;
  padding: 5px;
`;

export const Balance = styled(Typography)`
  font-size: 1.5rem;
  padding: 5px;
`;

export const AccountNumber = styled.span`
  font-weight: 200;
  font-size: 0.8rem;
  padding: 5px;
`;

export const MoveButton = styled.button`
  border: none;
  border-radius: 10px;
  height: fit-content;
  color: black;
  font-weight: 600;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    box-shadow: 0 0 5px #e0e0e0;
  }
`;
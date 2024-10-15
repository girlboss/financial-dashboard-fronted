import styled from '@emotion/styled';

export const Header = styled("Typography")`
  font-size: 1.3rem;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  margin-top: 20px !important;
  margin: 0 auto;
  justify-content: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f0f0f0;
`;

export const BalanceTitle = styled("Typography")`
  font-size: 1.1rem;
  font-weight: 250;
`;

export const BalanceAmount = styled("Typography")`
  font-size: 1.2rem;
  font-weight: 500;
  color: blue;
`;

export const BalanceCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background: none;
  z-index: 2;
`;

export const VectorWrapper = styled.img`
  width: 26px;
  height: 25px;
  border-radius: 10px;
  object-fit: contain;
  padding: 5px;
  background-color: #D9D9D9;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
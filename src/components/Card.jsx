import { CardWrapper, Type, AccountNumber, Title, Balance, TypeContainer } from "../styles/Card";
import { currencyMap } from "../contexts/DataProvider";

const Card = ({ title, id, balance, currency, type }) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <AccountNumber>{id}</AccountNumber>
      <Balance>{currencyMap[currency].symbol} {balance}</Balance> 
      <TypeContainer>
        <Type>{type}</Type>
      </TypeContainer>
    </CardWrapper>
  );
}

export default Card;

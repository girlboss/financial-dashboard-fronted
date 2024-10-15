import {
  BalanceCard,
  TitleWrapper,
  VectorWrapper,
  BalanceTitle,
  BalanceAmount
} from '../styles/Balance';

import { currencyMap } from '../contexts/DataProvider';

const BalanceCardComp = ({ title, balance, vect, currency }) => {
  return (
    <BalanceCard>
      <TitleWrapper>
        <VectorWrapper src={vect} alt="vector" />
        <BalanceTitle>{title}</BalanceTitle>
      </TitleWrapper>
      <BalanceAmount>{currencyMap[currency].symbol} {balance}</BalanceAmount>
    </BalanceCard>
  )
}

export default BalanceCardComp;
import { useData } from "../contexts/DataProvider";
import { BalanceWrapper, Header } from "../styles/Balance";
import BalanceCardComp from "./BalanceCardComp";
import invest from "/assets/invest.png";
import credit from "/assets/card.png";
import dollar from "/assets/dollar.png";

const Balance = () => {
  const { total } = useData();
  return (
    <BalanceWrapper>
      <Header>
        My Balance
      </Header>
      {
        Object.entries(total).map(([key, value]) => (
          <BalanceCardComp
            key={key}
            title={key}
            balance={value}
            vect={key === 'Investments' ? invest : key === 'Credit Cards' ? credit : dollar}
            currency={'CAD'}
          />
        ))
      }
    </BalanceWrapper>
  )
}

export default Balance;
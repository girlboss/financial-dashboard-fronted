import Card from './Card';
import { useData } from '../contexts/DataProvider';
import { Wrapper, CardBoxWrapper, MoveButton, OuterWrapper } from '../styles/Card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { Typography } from '@mui/material';

const CardBox = () => {
  const { data } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 6; 

  const moveForward = () => {
    if (currentIndex < data.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <OuterWrapper>
      <Typography variant='h5' style={{ margin: '0' }}>My Accounts</Typography>
      <Wrapper>
        <MoveButton onClick={moveBackward}>
          <ArrowBackIosIcon fontSize='large' />
        </MoveButton>
        <CardBoxWrapper>
          {
            data.slice(currentIndex, currentIndex + cardsPerView).map((card) => (
              <Card
                key={card.accountID}
                id={card.accountID}
                title={card.accountName}
                balance={card.balance}
                currency={card.currency}
                type={card.type}
              />
            ))
          }
        </CardBoxWrapper>
        <MoveButton onClick={moveForward}>
          <ArrowForwardIosIcon fontSize='large' />
        </MoveButton>
      </Wrapper>
    </OuterWrapper>
  );
}
export default CardBox;

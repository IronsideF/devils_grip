import React from 'react'
import styled from 'styled-components';


const StockPile = ({drawThreeFromStock, resetStock, deckAtZero}) => {
  
    return (
    <>
        {deckAtZero? <StockHolder onClick={resetStock}></StockHolder>: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg" alt="Card Back" onClick={drawThreeFromStock} />}
    </>
  )
}

const StockHolder = styled.div`
  border: solid 5px black;
  border-radius: 5px;
  width: 208px;
  height: 303px
`;

export default StockPile
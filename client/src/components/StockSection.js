import React from 'react'
import StockPile from './StockPile.js'
import TalonPile from './TalonPile.js'

const StockSection = ({talon, drawThreeFromStock, setFromTalon, resetStock, deckAtZero}) => {
  return (
    <>
        <StockPile
            drawThreeFromStock={drawThreeFromStock}
            resetStock={resetStock}
            deckAtZero={deckAtZero}
        />
        <TalonPile
            talon={talon}
            setFromTalon={setFromTalon}
        />
    </>
  )
}

export default StockSection
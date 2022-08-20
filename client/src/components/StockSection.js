import React from 'react'
import StockPile from './StockPile.js'
import TalonPile from './TalonPile.js'

const StockSection = ({talon, drawThreeFromStock, takeFromTalon, resetStock, deckAtZero}) => {
  return (
    <>
        <StockPile
            drawThreeFromStock={drawThreeFromStock}
            resetStock={resetStock}
            deckAtZero={deckAtZero}
        />
        <TalonPile
            talon={talon}
            takeFromTalon={takeFromTalon}
        />
    </>
  )
}

export default StockSection
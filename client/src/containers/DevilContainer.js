import React from 'react'
import DevilGrid from '../components/DevilGrid'
import StockSection from '../components/StockSection'
import Buttons from '../components/Buttons'

const DevilContainer = () => {

  const gridCards = [
    {card_id: "2S"}, {card_id: "3D"}, {card_id: "4H"}, {card_id: "5C"},
    {card_id: "6S"}, {card_id: "7D"}, {card_id: "8H"}, {card_id: "9C"},
    {card_id: "0S"}, {card_id: "JD"}, {card_id: "QH"}, {card_id: "KC"},
    {card_id: "2C"}, {card_id: "3H"}, {card_id: "4D"}, {card_id: "5S"},
    {card_id: "6C"}, {card_id: "7H"}, {card_id: "8D"}, {card_id: "9S"},
    {card_id: "0C"}, {card_id: "JH"}, {card_id: "QD"}, {card_id: "KS"}
  ]


  return (
    <>
      <h1>Devil's Grip Card Table</h1>
      <DevilGrid cards={gridCards}/>
    </>
  )
}

export default DevilContainer
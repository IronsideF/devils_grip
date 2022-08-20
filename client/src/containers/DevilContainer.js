import React from 'react'
import DevilGrid from '../components/DevilGrid'
import StockSection from '../components/StockSection'
import Buttons from '../components/Buttons'
import { addToTalon, listTalonCards, drawFromTalon, returnTalonToDeck } from '../services/DevilService'

const DevilContainer = () => {
  
    const [talon, setTalon] = useState([])

    const updateTalon = () => {
        addToTalon(deckID);
        
    }


    return (
    <>
    <h1>Devil's Grip</h1>
    <DevilGrid/>
    <StockSection />
    </>
  )
}

export default DevilContainer
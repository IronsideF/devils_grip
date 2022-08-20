import React, { useState, useEffect } from 'react'
import GridItem from './GridItem'

const DevilGrid = ({cards}) => {

  const [startGrid, setStartGrid] = useState([])

  useEffect(()=>{
    const startGridItems = cards.map((card_id) => {
    return Object.values(card_id)
    })
    setStartGrid(startGridItems)
  }, [])
  
  return (
    <>
      <div>
        <h2>The thing here is a hell starting grid</h2>
        <GridItem startSet={startGrid} />
      </div>
    </>
  )
}

export default DevilGrid
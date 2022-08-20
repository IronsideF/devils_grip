import React from 'react'

const GridItem = ({startSet}) => {
  
  const gridItemTest = startSet.map((card) => {
    return (
      <li>
        {card}
      </li>
    )
  })
  
  return (
    <>
      {gridItemTest}
    </>
  )
}

export default GridItem
import React from 'react'
import styled from 'styled-components';

const TalonPile = ({talon, takeFromTalon}) => {
  
  const topCard = talon.at(-1)
  
  return (
    <>
    {talon.length?<img src={topCard.image} alt={topCard.code} onClick={takeFromTalon} />:<TalonHolder></TalonHolder>}
    </>
  )
}

const TalonHolder = styled.div`
  width:226px;
  height:314px;
  border: solid 5px red;
  border-radius:5px;
`;

export default TalonPile
import React from 'react';

const GridItem = ({cards, setCard, positionX, positionY}) => {


    const topCard = cards.at(-1)

    const handleClick = () => {
        setCard(positionX, positionY)
    } 

    return <span><img onClick={handleClick} src={topCard.image} width="12.5%"/></span>

};

export default GridItem;
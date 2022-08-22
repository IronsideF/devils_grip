import React from 'react';

const GridItem = ({topCard, setCard, index}) => {

    const handleClick = () => {
        setCard(index)
    } 

    return <span><img onClick={handleClick} src={topCard.image} width="12.5%"/></span>

};

export default GridItem;
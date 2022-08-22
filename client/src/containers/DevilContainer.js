import React, { useState, useEffect } from "react";
import DevilGrid from "../components/DevilGrid.js";
import StockSection from "../components/StockSection.js";
import Buttons from "../components/Buttons.js";
import { drawFromDeck, resetDeck } from '../services/DevilService.js'

const DevilContainer = () => {
	const [deck, setDeck] = useState({});
	const [gridCards, setGridCards] = useState([]);
    const [talon, setTalon] = useState([])
    const [deckAtZero, setDeckAtZero] = useState(false)

	const deckUrl =
		"https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH";

	const getDeck = (deckUrl) => {
		fetch(deckUrl)
			.then((res) => res.json())
			.then((result) => {
				setDeck(result);
				return fetch(
					"https://www.deckofcardsapi.com/api/deck/" +
						result.deck_id +
						"/draw/?count=24"
				);
			})
			.then((res) => res.json())
			.then((cards) => {
				setGridCards(cards.cards);
			});
	};
    // getDeck(deckUrl);

    const drawThreeFromStock = () => {
        drawFromDeck(deck.deck_id, 3).then(data=> {
            const copyTalon = [...talon].concat(data.cards)
            setTalon(copyTalon)
            return data.remaining
        }).then(deckCount => {
                if (deckCount===0){
                    setDeckAtZero(true)
                }
            })
        }
    const takeFromTalon = () => {
        const copyTalon = [...talon];
        copyTalon.pop();
        setTalon(copyTalon);
    }
    const resetStock = () => {
        resetDeck(talon).then(newDeck=>setDeck(newDeck))
        setTalon([]);
        setDeckAtZero(false);
    }
    

	useEffect(() => {
		getDeck(deckUrl);
	}, []);




  	return (
		<>
			<h1>Devil's Grip</h1>
			<p>Deck Id: {deck.deck_id}</p>
			<DevilGrid gridCards={gridCards} />
            <StockSection
                talon={talon}
                drawThreeFromStock={drawThreeFromStock}
                takeFromTalon={takeFromTalon}
                resetStock={resetStock}
                deckAtZero={deckAtZero}
            />
		</>
	);
};

export default DevilContainer;

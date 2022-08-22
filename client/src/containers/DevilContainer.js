import React, { useState, useEffect } from "react";
import DevilGrid from "../components/DevilGrid.js";
import StockSection from "../components/StockSection.js";
import {valueConverter, checkIfStackable} from "../services/GameLogic.js";
import Buttons from "../components/Buttons.js";
import { drawFromDeck, resetDeck } from '../services/DevilService.js'

const DevilContainer = () => {
	const [deck, setDeck] = useState(null);
	const [gridCards, setGridCards] = useState([]);
    const [talon, setTalon] = useState([]);
    const [deckAtZero, setDeckAtZero] = useState(false);
    const [cardtop, setCardTop] = useState("");
    const [cardbot, setCardBot] = useState("");
    const [score, setScore] = useState(null);


	const deckUrl =
		"https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH";

	const getDeck = () => {
        return fetch(deckUrl)
			.then((res) => res.json())
			.then((result) => {
				setDeck(result);
                console.log(result.deck_id);
				return fetch(
					"https://www.deckofcardsapi.com/api/deck/" +
						result.deck_id +
						"/draw/?count=24"
				);
			})
			.then((res) => res.json())
			.then((cards) => {
				setGridCards(cards.cards);
                setScore(72)
			});
	};

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

    const stackFromTalon = () => {
        const copyGridCards = [...gridCards];
        copyGridCards[cardbot] = cardtop;
        setGridCards(copyGridCards)
        takeFromTalon();
    }
    const takeFromTalon = () => {
        const copyTalon = [...talon];
        copyTalon.pop();
        setTalon(copyTalon);
        setScore(score-1)
    }
    const resetStock = () => {
        resetDeck(talon).then(newDeck=>setDeck(newDeck))
        setTalon([]);
        setDeckAtZero(false);
    }
    const setCard = (position) => {
        if (cardtop === "") {
          setCardTop(position);
          console.log(cardtop);
        } else if (cardbot === "") {
          setCardBot(position);
        } else {
          console.log("no free slots");
        }
      };

    const setFromTalon = (object) => {
        setCardTop(object)
    }

    const swapGridCards = (topCard, botCard) => {
        const copyGridCards = [...gridCards];
        const card1 = gridCards[topCard];
        const card2 = gridCards[botCard];
        copyGridCards[topCard] = card2;
        copyGridCards[botCard] = card1;
        setGridCards(copyGridCards)
    }
    const stackGridCards = (topCard, botCard) => {
        const copyGridCards = [...gridCards];
        const card1 = gridCards[topCard];
        copyGridCards[botCard] = card1;
        drawFromDeck(deck.deck_id, 1)
            .then(newCards=> newCards.cards[0])
            .then(newCard => {
                copyGridCards[topCard] = newCard
                setGridCards(copyGridCards)
                setScore(score-1)
        });
        
    }

	useEffect(() => {
		// getDeck();
        console.log('Running useEffect')
	}, []);

    useEffect(() => {
        if (!(cardbot==="")&&!(cardtop.code)){
            const canStack = checkIfStackable(gridCards[cardtop], gridCards[cardbot])
            if (canStack){
                stackGridCards(cardtop, cardbot)
                setCardTop("")
                setCardBot("")
            } else {
                swapGridCards(cardtop, cardbot)
                setCardTop("")
                setCardBot("")
            }
        } else if (!(cardbot==="")) {
            const canStack = checkIfStackable(cardtop, gridCards[cardbot]);
            if (canStack) {
                stackFromTalon()
                setCardTop("")
                setCardBot("")
            } else {
                setCardTop("")
                setCardBot("")
            };
        };
    }, [cardbot])






  	return (
		<>
			<h1>Devil's Grip</h1>
			{deck?<p>Deck Id: {deck.deck_id}</p>:null}
			<DevilGrid getDeck={getDeck} gridCards={gridCards} setCard={setCard} />
            {deck?<StockSection
                talon={talon}
                drawThreeFromStock={drawThreeFromStock}
                setFromTalon={setFromTalon}
                resetStock={resetStock}
                deckAtZero={deckAtZero}
            />:null}
		</>
	);
};

export default DevilContainer;

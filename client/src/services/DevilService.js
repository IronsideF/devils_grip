import fetch from 'node-fetch'
const baseURL = 'http://www.deckofcardsapi.com/api/deck/'
const scoresURL = 'http://localhost:9000/api/scores'

export const drawFromDeck = (deckID, count) => {
    return fetch(`${baseURL}${deckID}/draw/?count=${count}`)
        .then(res=> res.json())
        .then(data=> data)
}

export const resetDeck = (cards) => {
    const cardCodes = cards.map(card => card.code)
    const inputCodes = cardCodes.toString()
    return fetch(`${baseURL}/new/?cards=${inputCodes}`).then(res=>res.json()).then(data=>data)
}

export const getScores = () => {
    return fetch(scoresURL)
        .then(res => res.json())
}

export const postScore = (payload) => {
    return fetch(scoresURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json());
}

// export const addToTalon = (deckID, cards) => {
//     const cardCodes = cards.map(card => card.code);
//     const inputCodes = cardCodes.toString();
//     return fetch(`${baseURL}${deckID}/pile/talon/add/?cards=${inputCodes}`)
//         .then(res=>res.json())
//         .then(data=>data.remaining)
// }

// Currently unused
// export const listTalonCards = (deckID) => {
//     return fetch(`${baseURL}${deckID}/pile/talon/list`).then(res => res.json()).then(data=>data.piles.talon.cards);
// }

// export const drawFromTalon = (deckID) => {
//     return fetch(`${baseURL}${deckID}/pile/talon/draw`).then(res=> res.json()).then(data=>data.cards[0])
// };

// export const returnTalonToDeck = async (deckID) => {
//     const response = await fetch(`${baseURL}${deckID}/pile/talon/return`)
//     const data = await response.json();
//     const pileCount = data.piles.talon.remaining;
//     return pileCount
// }


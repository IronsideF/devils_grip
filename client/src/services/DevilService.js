import fetch from 'node-fetch'
const baseURL = 'http://www.deckofcardsapi.com/api/deck/'

export const addToTalon = async (deckID) => {
    const deckResponse = await fetch(`${baseURL}${deckID}/draw/?count=3`);
    const deckData = await deckResponse.json();
    const cardCodes = deckData.cards.map(card => card.code);
    const pileResponse = await fetch(`${baseURL}${deckData.deck_id}/pile/talon/add/?cards=${cardCodes}`);
    const pileData = await pileResponse.json();
    const pileRemaining = pileData.piles.talon.remaining
    return pileRemaining
}

export const listTalonCards = async (deckID) => {
    const response = await fetch(`${baseURL}${deckID}/pile/talon/list`);
    const data = await response.json();
    const cardsInTalon = data.piles.talon.cards;
    return cardsInTalon
}

export const drawFromTalon = async (deckID) => {
    const response = await fetch(`${baseURL}${deckID}/pile/talon/draw`);
    const data = await response.json();
    const drawnCard = data.cards
    return drawnCard
};

export const returnTalonToDeck = async (deckID) => {
    const response = await fetch(`${baseURL}${deckID}/pile/talon/return`)
    const data = await response.json();
    const pileCount = data.piles.talon.remaining;
    return pileCount
}


// import assert from 'assert';
// import fetch from 'node-fetch'
// import {addToTalon, listTalonCards, drawFromTalon, returnTalonToDeck} from '../services/DevilService.js'


// describe('Talon', function() {
//     let deckID;

//     beforeEach( async () => {
//         const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         const data = await response.json()
//         deckID = data.deck_id
//     })

//     it('should create pile and add cards', async () => {
//         const actual = await addToTalon(deckID);
//         assert.strictEqual(actual, 3);
//     })
//     it('should list the cards in the pile', async () => {
//         await addToTalon(deckID);
//         const actual = await listTalonCards(deckID);
//         assert.strictEqual(actual.length, 3)
//     })
//     it('should draw a card from the pile', async () => {
//         await addToTalon(deckID);
//         const actual = await drawFromTalon(deckID);
//         assert.notStrictEqual(actual.value, undefined)
//     })
//     it('should return the pile to the deck', async () => {
//         await addToTalon(deckID);
//         const actual = await returnTalonToDeck(deckID);
//         assert.strictEqual(actual, 0)
//     })
// })
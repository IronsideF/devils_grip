describe('DevilContainer', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Can click on start game", () => {
        cy.get('#start-button').click()
    })

    it("Can click on end game", () => {
        cy.get('#start-button').click()
        cy.get('#end-button').click()
    })
    
    it("Can click on grid cards", () => {
        cy.get('#start-button').click()
        cy.get('#card-image').click()
    })

    it("Can click on stock pile", () => {
        cy.get('#start-button').click()
        cy.get('#card-back').click()
    })

    it("Can click on talon pile", () => {
        cy.get('#start-button').click()
        cy.get('#card-back').click()
        cy.get('#tallon-top-card').click()
    })

    it("Can view current score", () => {
        cy.get('#start-button').click()
        const testScore = cy.get('#score')
        testScore.should('contain', '72')
    })

    it("Displays instructions", () => {
        const viewInstructions = cy.get('#instructions')
        viewInstructions.should('contain', 'How To Play')
    })

    it("can save your score", () => {
        cy.get('#start-button').click()
        cy.get('#end-button').click()
        cy.get('.name').type('jonathan')
        cy.get('#score-submit').submit()
        const scoreBoard = cy.get('.player-name')
        scoreBoard.should('contain', 'jonathan - 72')
    })

})
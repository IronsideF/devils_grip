describe('DevilContainer', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Can click on start game", () => {
        cy.get('#start-button').click()
    })

    xit("Can click on end game", () => {
        cy.get('#start-button').click()
        cy.get('#end-button').click()
    })
    
    xit("Can click on grid cards", () => {
        cy.get('#start-button').click()
        cy.get('#card-image').click()
    })

    xit("Can click on stock pile", () => {
        cy.get('#start-button').click()
        cy.get('#card-back').click()
    })

    xit("Can view current score", () => {
        cy.get('#start-button').click()
        const testScore = cy.get('#score')
        testScore.should('contain', '72')
    })

})
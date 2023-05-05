describe("Newsletter Subscribe Form", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", ()=>{
        cy.getByData("email-input").type("johndoe@johndoe.com", {force: true})
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should('exist').contains("johndoe@johndoe.com")
    })

    it("does not allow invalid email address", ()=>{
        cy.getByData("email-input").type("johndoe",{force:true})
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("user already exist", ()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should('exist').contains('already exists. Please use a different email address')
    })
})
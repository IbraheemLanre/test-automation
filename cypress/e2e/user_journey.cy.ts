describe("User Journey", ()=>{
    it("a user can find a course on the home page and complete the lessons", ()=>{

        cy.visit("/")
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        
    })
})
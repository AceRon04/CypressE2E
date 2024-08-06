///<reference types="cypress" />

describe('US #01 : Localizadores2',()=>{
    beforeEach('trying_to_locate_objects',()=>{
        cy.visit('https://www.demoblaze.com/');

    })
    
    it('US #01 | TC#1: Trying to locate objects',()=>{
        cy.get('[href="#"]')
            .eq(7)
            .click()
        //cy.get('[src="imgs/sony_vaio_5.jpg"]')
    })
    
    it('US #01 | TC#2: Select one item',()=>{
        cy.get('[src="imgs/sony_vaio_5.jpg"]')
            .eq(0)
            .click()
        cy.get('#nava')
            .click()
    })

    it('US #1 | TC#3: Select option Contact and insert all data',()=>{
        cy.get('[href="#"]')
        .eq(0)
        .click()
        cy.get('#exampleModal')
        cy.get('#recipient-email').type('reef1234@tmail.com')
        //cy.get('#recipient-email').should('have.value', 'reef1234@gmail.com')
        cy.get('#recipient-name').type('John Mayer')
        cy.get('#message-text').type('asdf 12e awed asef')
        cy.get('[onclick="send()"]').click()

    })

    
})

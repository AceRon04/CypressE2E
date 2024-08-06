/// <reference types="cypress" />

describe('localizadores',()=>{
    it('tipo_localizadores',()=>{
        cy.visit('https://www.google.com/');

    //localizar por tagname o textarea, no muy recomendable
    //cy.get('textarea')

    //Localizar por id se coloca el signo #
    //con clase se coloca . (punto), las clases pueden repertirse en otros elementos.
    //cy.get('.gLFyf')

    //Localizar por Atributo (atribute) se coloca entre [] corchetes.
   // cy.get('[maxlength]')
    cy.get('[maxlength="2048"]')

    //Combinar localizadores
    cy.get('textarea[maxlength="2048"].gLFyf')
    })
})

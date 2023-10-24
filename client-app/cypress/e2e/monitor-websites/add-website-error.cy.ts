/// <reference types="cypress" />

describe('add-website-error.js', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have an input field', () => {
        cy.get('[aria-label="input-add-website"]').eq(0).should('be.visible') 
    })

    it('should show error toast after adding website', () => {
        cy.intercept('POST', '**/v1/monitor/add').as('addWebsite');
        
        cy.get('[aria-label="input-add-website"]').eq(0).type('https://invalid-example.com{enter}')

      
   
        cy.wait('@addWebsite').its('response.statusCode').should('eq', 500);

        cy.contains('Oops, something happened:').should('be.visible') 
    })
})
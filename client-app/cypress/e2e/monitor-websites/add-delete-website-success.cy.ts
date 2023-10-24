/// <reference types="cypress" />


describe('add-website-success.js', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the website input field on the homepage', () => {
      
        cy.get('[aria-label="input-add-website"]').eq(0).should('be.visible') 
    })

    it('should successfully show success toast after adding website', () => {
       
        cy.intercept('POST', '**/v1/monitor/add').as('addWebsite');
        cy.get('[aria-label="input-add-website"]').eq(0).type('https://example.com{enter}')
        cy.wait('@addWebsite').its('response.statusCode').should('eq', 200);

        cy.contains('added!').should('be.visible') 
        cy.contains('https://example.com').should('be.visible');
    })
})

describe('delete-website-success.js', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a delete button', () => {
        cy.get('[data-cy-delete="https://example.com"]').should('be.visible') 
    })

    it('should successfully delete the website', () => {
        cy.intercept('DELETE', '**/v1/monitor/remove').as('deleteWebsite');
        
        cy.get('[data-cy-delete="https://example.com"]').click()

      
   
        cy.wait('@deleteWebsite').its('response.statusCode').should('eq', 200);

        cy.contains('Deleted!').should('be.visible') 
    })
})
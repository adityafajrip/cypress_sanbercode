// / <reference types="cypress" />

const {constant} = require("lodash")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const username = 'test123'
const name = 'test ajalah'

describe('demo qa com', () => {
    it('test text box', () => {
        cy.visit('http://demoqa.com');
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1)').click();
        cy.url().should('include', '/elements');
        cy.get('#item-0').click();
        cy.url().should('include', '/text-box');
        cy.get('#userName').type('Aditya Fajri Putra');
        cy.get('#userName').should('have.value', 'Aditya Fajri Putra');
        cy.get('#userEmail').type('test@gmail.com');
        cy.get('#userEmail').should('have.value', 'test@gmail.com');
        cy.get('#currentAddress').type('test{enter} wadidaw aweuu');
        cy.get('#permanentAddress').type('test ajalah{enter}');
        cy.get('#submit').click();
        cy.get('#name').should('have.id', 'name')
    })
    it('test checkbox', () => {
        cy.visit('http://demoqa.com');
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1)').click();
        cy.url().should('include', '/elements');
        cy.get('#item-1').click();
        cy.url().should('include', '/checkbox');
        cy.get('.rct-option-expand-all').click();
        cy.get('#tree-node > ol > li > ol').should('be.visible');

    })


})


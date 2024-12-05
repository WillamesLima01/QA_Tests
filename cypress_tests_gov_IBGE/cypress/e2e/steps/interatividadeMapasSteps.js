/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I access the main page from IBGE", () => {
    cy.visit("https://www.ibge.gov.br/");
});

When("I navigate to the regional maps page", () => {
    cy.contains('Mapas Regionais').click();
});

Then("the data for {string} should be displayed", (region) => {
    cy.get('.productTitle').should('contain.text', region);
});

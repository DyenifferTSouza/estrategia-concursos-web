/* global Given, Then, When */

import Home from '../pageobjects/Home'
const home = new Home

Given("acesso o site Estratégia Concursos", () => {
    home.acessarSite();
})

When("acesso a página inicial", () => {
    //cy.get - busca um elemento
    // .type insere um texto
    cy.title().should('contain', 'Estratégia Concursos')
  
})

Then("devo visualizar a página inicial do site ", () => {
    home.acessarSite();
})
/* global Given, Then, When */

Given("acesso o site Estratégia Concursos", () => {
    cy.visit('/')
})

When(`utilizo a busca {string} com nome de {string}`, (porAssunto, nomeAssunto) => {
    
    cy.get('.nav-header > .container > .nav-header-inner > .nav-header-links > a:nth-child(3)').click()
    
    cy.visit('/')

    cy.get('.section-header > div > .page-courses-filters > .search > input').click()

    cy.get('.section-header > div > .page-courses-filters > .search > input').type('Ena Loiola')

    cy.get('section > .page-result-list > .card-prod > .card-prod-title > a').click()

    cy.visit('https://www.estrategiaconcursos.com.br/cursos/professor/')
})

Then("devo escolher um dos cursos que estarão disponíveis", () => {
     cy.get('.container > .js-cur-content > .js-card-prod-container > .card-prod:nth-child(1) > .card-prod-details').click()
    
     cy.visit('/cursosPorProfessor/ena-loiola-800/')
    
})
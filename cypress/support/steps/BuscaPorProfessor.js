/* global Given, Then, When */

Given("acesso o site Estratégia Concursos", () => {
    cy.visit('https://www.estrategiaconcursos.com.br/')
    
    cy.viewport(1366, 625)
 
    cy.visit('https://www.estrategiaconcursos.com.br/')
})

When("utilizo a busca Por Professor com nome de Ena Loiola", () => {
    
    cy.get('.nav-header > .container > .nav-header-inner > .nav-header-links > a:nth-child(3)').click()
    
       cy.visit('https://www.estrategiaconcursos.com.br/')
    
       cy.get('.section-header > div > .page-courses-filters > .search > input').click()
    
       cy.get('.section-header > div > .page-courses-filters > .search > input').type('Ena Loiola')
    
       cy.get('section > .page-result-list > .card-prod > .card-prod-title > a').click()
    
       cy.visit('https://www.estrategiaconcursos.com.br/cursos/professor/')
})

Then("devo escolher um dos cursos que estarão disponíveis", () => {
     cy.get('.container > .js-cur-content > .js-card-prod-container > .card-prod:nth-child(1) > .card-prod-details').click()
    
     cy.visit('https://www.estrategiaconcursos.com.br/cursosPorProfessor/ena-loiola-800/')
    
})
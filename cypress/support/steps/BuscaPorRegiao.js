/* global Given, Then, When */

Given("acesso o site Estratégia Concursos", () => {
    cy.visit('/')
 
    cy.get('.nav-header > .container > .nav-header-inner > .nav-header-links > a:nth-child(5)').click()
})

When(`utilizo a busca {string} e seleciono na região {string} por {string}`, (tipoBusca, regiao, estado) => {
    cy.visit('/cursos/regiao/')
    
    cy.get('#b_cursos > .section-content > .container > .regions-list').click()
 
    cy.get('.regions-list > .regions-list-item:nth-child(5) > ul > li:nth-child(2) > a').click()
   
})

Then(`deve exibir os {string}`, (resultado) => {
    cy.visit('/cursos/regiao/?estado=RS')
})

   
     
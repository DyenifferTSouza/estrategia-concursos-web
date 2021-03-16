/* global Given, Then, When */

Given("acesso o site Estratégia Concursos", () => {
    cy.viewport(1366, 625)
    
    cy.visit('https://www.estrategiaconcursos.com.br/')
 
    cy.get('.nav-header > .container > .nav-header-inner > .nav-header-links > a:nth-child(5)').click()
})

When("utilizo a busca Por Região e seleciono na região Sul por Rio Grande do Sul", () => {
    cy.visit('https://www.estrategiaconcursos.com.br/cursos/regiao/')
    
    cy.get('#b_cursos > .section-content > .container > .regions-list').click()
 
    cy.get('.regions-list > .regions-list-item:nth-child(5) > ul > li:nth-child(2) > a').click()
   
})

Then("deve exibir os Cursos em Rio Grande do Sul", () => {
    cy.visit('https://www.estrategiaconcursos.com.br/cursos/regiao/?estado=RS')
    
})

   
     
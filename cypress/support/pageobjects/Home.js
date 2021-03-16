/// <reference types="Cypress" />

//import HomeElements from '../elements/HomeElements'
//const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class Home {
    
    acessarSite() {
        cy.visit("https://www.estrategiaconcursos.com.br/")
    }
  
    visualizarHome() {
        cy.visit("https://www.estrategiaconcursos.com.br/")
    }
}

export default Home;
/// <reference types="Cypress" />

//import HomeElements from '../elements/HomeElements'
//const homeElements = new HomeElements

class Home {
    
    acessarSite() {
        cy.visit("/")
    }
}

export default Home;
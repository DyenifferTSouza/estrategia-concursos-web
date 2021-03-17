Feature: Acessar a home do site Estratégia Concursos

    @ignore
    Scenario: Visualizar a home do site Estratégia Concursos
        Given acesso o site Estratégia Concursos
        When acesso a página inicial
        Then devo visualizar a página inicial do site 

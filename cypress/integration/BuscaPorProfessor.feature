Feature: Utilizar a busca pro professor

    Scenario: Validar busca por professor com sucesso
        Given acesso o site Estratégia Concursos
        When utilizo a busca "Por Professor" com nome de "Ena Loiola"
        Then devo escolher um dos cursos que estarão disponíveis
         


        
        

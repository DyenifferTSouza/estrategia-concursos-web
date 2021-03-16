Feature: Utilizar a busca por Região

    Scenario: Validar busca por região Sul 
        Given acesso o site Estratégia Concursos
        When utilizo a busca "Por Região"
        And seleciono na região "Sul" por "Rio Grande do Sul"
        Then deve exibir os "Cursos em Rio Grande do Sul"
         


        
        

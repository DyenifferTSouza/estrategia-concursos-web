Feature: Valor do curso na listagem de professor

    @ignore
    Scenario: Validar se o valor do curso na listagem de cursos do professor é o mesmo da página de detalhes do curso
        Given pesquiso pela professora "Ena Loiola"
        When escolho um dos cursos que estão disponíveis
        Then verifico que o valor do curso na listagem de cursos da professora bate com o valor da página de detalhes do curso
        And verifico também se o valor parcelado do curso bate com o valor total do curso.
         
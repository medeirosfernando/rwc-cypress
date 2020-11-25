/// <reference types="cypress" />

import articles from '../support/pages/articles'
import routes from '../support/routes'

context('Artigos', () => {

    beforeEach(() => {
        // Arrange/ Preparação
        cy.backgroundLogin()  
        articles.acessarFormularioNovaPublicacao()      
    })

    it('Criar um novo artigo', () => {
        // Action/ Execução-Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()

        //Assert /Verificação
        articles.verificarCriacaoDaPublicacao()
    })
})
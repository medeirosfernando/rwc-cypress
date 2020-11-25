/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar novo usuário', () => {
        // Arrange/ Preparação
        cadastro.acessarPaginaCadastro()

        // Action/ Execução-Ação
        cadastro.preencherFormulário()
        cadastro.submeterFormulario()

        // Assert/ Verificação
        cadastro.verificarNovoCadastro()
    })
})
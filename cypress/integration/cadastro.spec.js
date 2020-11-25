/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar novo usuário', () => {
        cadastro.acessarPaginaCadastro()
        cadastro.preencherFormulário()
        cadastro.submeterFormulario()
    })
})
/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Login do usuário com sucesso', () => {
        // Arragen/ Preparação
        login.acessarSite()

        // Action/ Execução-Ação
        login.preencherFormulario()
        login.submeterFormulario()

        // Assert/ Verificação
        login.verificarLoginUser()
    })
})
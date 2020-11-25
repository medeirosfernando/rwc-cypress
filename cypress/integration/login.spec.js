/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Login do usuário com sucesso', () => {
        login.acessarSite()
        login.preencherFormulario()
        login.submeterFormulario()  
    })
})
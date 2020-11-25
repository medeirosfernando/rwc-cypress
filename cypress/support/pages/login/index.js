import routes from '../../routes'

const el = require('./elements').ELEMENTS

class Login {

    acessarSite() {
        cy.visit('login')
    }

    preencherFormulario() {
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
    }

    submeterFormulario() {
        cy.get(el.buttonSubmit).click()
    }

    verificarLoginUser() {
        cy.wait(`@${routes.as.postUsersLogin}`).then((resPostLogin) => {
            expect(resPostLogin.response.statusCode).to.eq(200)
            expect(resPostLogin.response.body.user).to.have.property('email', 'rwc-test@email.com')
        })
    }
}

export default new Login()
import routes from '../../routes'

const faker = require('faker')
const el = require('./elements').ELEMENTS

class Cadastro {

    acessarPaginaCadastro() {
        cy.visit('register')        
    }

    preencherFormulário() {
        cy.get(el.inputUserName).type(faker.name.firstName() + ' ' + faker.name.lastName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputPassword).type(faker.internet.password())        
    }

    submeterFormulario() {
        cy.get(el.buttonSubmit).click()
    }

    verificarNovoCadastro() {
        cy.wait(`@${routes.as.postListUser}`).then((resListUser) => {
            expect(resListUser.response.statusCode).to.eq(200)
            expect(resListUser.response.body.user).to.have.property('token')
        })
    }
}

export default new Cadastro()
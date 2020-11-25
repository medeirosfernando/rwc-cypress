/// <reference types="cypress" />

import routes from '../../routes'

const faker = require('faker')
const el = require('./elements').ELEMENTS

class Articles {

    acessarFormularioNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario() {
        cy.get(el.inputTitle).type('Agilizei - Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textareaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('Cypress')
    }
    
    submeterPublicacao() {
        cy.get(el.buttonBubmit).click()        
    }

    verificarCriacaoDaPublicacao() {
        cy.wait(`@${routes.as.postArticles}`).then((resPostArticle) => {
            expect(resPostArticle.response.statusCode).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticlesTitle}`).then((resPostArticleTitle) => {
            expect(resPostArticleTitle.response.statusCode).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((resPostArticleTitleComments) => {
            expect(resPostArticleTitleComments.response.statusCode).to.eq(200)
        })
    }
}

export default new Articles()
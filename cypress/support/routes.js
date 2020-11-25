class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesTitleComments: 'getArticlesTitleComments'
    }

    init() {
        cy.intercept('POST','**/api/articles' ).as(this.as.postArticles)
        cy.intercept('GET','**/api/articles/agilizei-title**' ).as(this.as.getArticlesTitle)
        cy.intercept('GET','**/api/articles/**/comments' ).as(this.as.getArticlesTitleComments)
    }
}

export default new Routes()
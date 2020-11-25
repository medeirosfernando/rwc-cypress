class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesTitleComments: 'getArticlesTitleComments',
        postUsersLogin: 'postUsersLogin',
        postListUser: 'postListUser',
        getTags: 'getTags'
    }

    init() {
        cy.intercept('POST','**/api/articles' ).as(this.as.postArticles)
        cy.intercept('GET','**/api/articles/agilizei-title**' ).as(this.as.getArticlesTitle)
        cy.intercept('GET','**/api/articles/**/comments' ).as(this.as.getArticlesTitleComments)
        cy.intercept('POST', '**/api/users/login').as(this.as.postUsersLogin)
        cy.intercept('POST', '**/api/users').as(this.as.postListUser)
        cy.intercept('GET', '**/api/tags').as(this.as.getTags)
    }
}

export default new Routes()
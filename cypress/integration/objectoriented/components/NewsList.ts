class NewsList {
    getNewsListElements() {
        return cy.get('.newsList > li')
    }
}
export default NewsList
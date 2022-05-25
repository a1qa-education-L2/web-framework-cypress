


describe('shop zo', () => {
    beforeEach(function(){
        cy.visit('/');
        cy.fixture('searchQueries').then(searchQueries => {
            this.searchQueries = searchQueries;
        });
    });
    it('test shop zo', function() {
        cy.isMainPageOpen();
        cy.typeSearchRequest(this.searchQueries.nameBook);
        cy.searchInputContainsText(this.searchQueries.nameBook);  
        cy.clickSearchButton();
        cy.isProductCardPresent();
        cy.clickOnSorting();
        cy.chooseSorting('Сначала дешёвые');
        cy.isProductsSortedAscending(20);
        cy.clickProductCard()
        cy.isDetailProductPage()
    });
});

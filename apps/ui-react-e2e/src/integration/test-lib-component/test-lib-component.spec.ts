describe('ui-react: TestLibComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testlibcomponent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-react!');
    });
});

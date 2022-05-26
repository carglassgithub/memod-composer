
describe('Compose a new Memo', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should type a title', () => {
    const titleInput = cy.findByPlaceholderText('Your amazing title')
    titleInput.type('Test Title')
    titleInput.should('have.value', 'Test Title')
  })

  it('Should allow add bullet', () => {
    cy.findByText('Add New Bullet').click()
    cy.get('.main-list').its('children').should('have.length', 2)
  })
})

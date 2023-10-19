describe('Test API GET Users', () => {
  it('Get List of User', () => {
    cy.request
    ('GET',
     'https://reqres.in/api/users')
      .its('status')
      .should('equal', 200);
  });

  it('Get user by ID', () => {
    cy.request('GET', 'https://reqres.in/api/users/1')
      .its('status')
      .should('equal', 200);
  });

});

describe('Test API Create User', () => {
    it('Create User', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'Aditya Fajri',
          job: 'QA Aminnn Ya Rabb',
        },
      })
        .then((response) => {
        expect(response.status).to.equal(201) //201 = Data Created
        expect(response.body).has.property("name", "Aditya Fajri")
        })
        
    });
  });
  
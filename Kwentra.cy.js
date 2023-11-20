
describe('Profile Creation', () => {
  

  beforeEach(() => {
    cy.visit('https://testingtasks.kwentra.com/account/login/?next=/frontoffice/#/profileslist?tenant_id=59');
    cy.get('#id_auth-username').type('testuser');
      cy.get('#id_auth-password').type('Test_user1234');
      cy.get('#login-submit-btn.btn').click();
  });
  /*feature: Profile Creation with all Required fields

  Scenario: Create a new Profile with FirstName and LastName
    Given I am on the Profiles List page
    When I create a new profile with the FirstName "Aya" and LastName "Sobhy"
    Then the new profile should be listed on the Profiles List page*/

  it('Check that the new profile will be created when enter (all Required fields) FirstName and LastName', () => {
    cy.get('#create-btn').click();
    cy.get('#first_name-field').type('Aya');
    cy.get('#last_name-field').type('Sobhy');
    cy.get('#saveAndAdd-btn').click();
    
});

/*feature: Fail Profile Creation

  Scenario: Create a new Profile without (required field) like LastName
    Given I am on the Profiles List page
    When I create a new profile with only the FirstName "Rashad" 
    Then the validation MSG will appear */

    it('Check that the validation MSG will appear when required field isnot entered' , ()=>{
    cy.get('#create-btn').click();
    cy.get('#first_name-field').type('Rashad');
    cy.get('#saveAndAdd-btn').click();
    cy.log('this field is required');
    });

    
  });

  describe('Profile Search', () => {
    beforeEach(() => {
      cy.visit('https://testingtasks.kwentra.com/account/login/?next=/frontoffice/#/profileslist?tenant_id=59');
      cy.get('#id_auth-username').type('testuser');
        cy.get('#id_auth-password').type('Test_user1234');
        cy.get('#login-submit-btn.btn').click();
    });

    /*feature: Reset button

  Scenario: All fields will be empty by using reset button
    Given I am on the Profiles List page
    When  I enter data in any field 
    And  Click on reset button 
    Then All entered fields will be empty */

    it('Check that All fields will be empty when click on reset button after enter data' , ()=> {
     cy.get('#name-field').type('Aya Sobhy');
     cy.get('#reset-button').click();
     cy.get('#name-field').should('have.value', '');
    });
  
  });





  
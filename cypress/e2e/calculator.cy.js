describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


// Do the number buttons update the display of the running total?
  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5');
  })

// Do the arithmetical operations update the display with the result of the operation?
it('should update the display with the result', () => {
  cy.get('#number2').click();
  cy.get('#operator-add').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '7');
})

// Can multiple operations be chained together?
it('should be able to chain operations', () => {
  cy.get('#number2').click();
  cy.get('#operator-add').click();
  cy.get('#number5').click();
  cy.get('#operator-multiply').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '21');
})
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('should handle negative numbers', () => {
  cy.get('#number2').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-3');
})

it('should handle decimal numbers', () => {
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '2.5');
})

it('should handle very large numbers', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('.display').should('contain', '1.0000000000000003e+21')
})

// What does the code do in exceptional circumstances? 
// Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass 
// (you will need to modify the Calculator model to meet this requirement).

it('should handle division by zero', () => {
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Error');
})
})
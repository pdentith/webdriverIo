describe('Vercel App Tests', () => {

  //setting selectors
  beforeEach('Visit the Page', () => {
    cy.visit('https://the-flock.vercel.app/')
      .get('h3')
      .first()
      .parent()
      .find('input')
      .as('calculatorInput')
      .get('h3')
      .parent()
      .next()
      .parent()
      .find('input')
      .eq(1)
      .as('todoInput')
      .get('h3')
      .last()
      .parent()
      .find('button')
      .first()
      .as('counterDec')
      .get('h3')
      .last()
      .parent()
      .find('button')
      .last()
      .as('counterInc')
      .get('h3')
      .last()
      .parent()
      .find('div')
      .first()
      .find('div')
      .first()
      .next()
      .as('counterValue')

  })

  it('Calculator Addition', () => {
    cy.get('@calculatorInput')
      .type('10 + 15 {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '25')
  })

  it('Calculator Subtraction', () => {
    cy.get('@calculatorInput')
      .type('10 - 15 {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '-5')
  })

  it('Calculator Division', () => {
    cy.get('@calculatorInput')
      .type('100 / 3 {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '33.333333333333336')
  })

  it('Calculator Multiply', () => {
    cy.get('@calculatorInput')
      .type('100 * 22 {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '2200')
  })

  //this fails
  it('Calculator Exponential ', () => {
    cy.get('@calculatorInput')
      .type('1 ^ 4 {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '0')
  })

  it('Calculator Alpha chars ', () => {
    cy.get('@calculatorInput')
      .type('Hello Friends {enter}')
      .get('@calculatorInput')
      .invoke('val')
      .should('be.eq', '0')
  })

  it('Counter Inc', () => {
    cy.get('@counterDec')
      .click()
      .get('@counterValue')
      .invoke('text')
      .should('be.eq', ' -1 ')
  })

  it('Counter Inc', () => {
    cy.get('@counterInc')
      .click()
      .get('@counterValue')
      .invoke('text')
      .should('be.eq', ' 1 ')
  })

  it('Counter Load', () => {
    for(let i = 0; i < 41; i++){
      cy.get('@counterInc')
      .click()
      .get('@counterValue')
      .invoke('text')
      .should('be.eq', ` ${i + 1} `)
    }
    for(let j = 1; j < 45; j++){
      cy.get('@counterDec')
      .click()
      .get('@counterValue')
      .invoke('text')
      .should('be.eq', ` ${41 - j} `)
    }

  })

  //Bug where the entry below will remain checked
  it('Add 11 Todos, Delete Todo Entry 5', () => {
    for(let i = 0; i < 11; i++){
    cy.get('@todoInput')
      .type(`Todo ${i} {enter}`)
    }
    cy.get('li')
      .should('have.length', 11)
      .eq(5)
      .should('have.text', ' Todo 5  ')
      .find('input')
      .click()
      .get('li')
      .should('have.length', 10)
  })

  //timing issue here, same bug as above
  it('Add 5 Todos, Delete 5 at once', () => {
    for(let i = 0; i < 5; i++){
    cy.get('@todoInput')
      .type(`Todo ${i} {enter}`)
    }
    cy.get('li')
      .should('have.length', 5)
      .find('input')
      .click({multiple:true})
      .get('li')
      .should('have.length', 0)
  })
})
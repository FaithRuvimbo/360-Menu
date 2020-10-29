/// <reference types="cypress" />

context('Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')
  })
  it('should add orders', () => {
    cy.get('.card-root').first().get('.card-button').click()
    cy.wait(1000)
    cy.get('.product-view-root .button').click()
    cy.wait(1000)
    cy.get('.details-new-orders .order-item-root').should('have.length', 3)
  })
  it('should submit orders', () => {
    cy.get('.card-root').first().get('.card-button').click()
    cy.get('.product-view-root .button').click()
    cy.get('.details-root .button').click()
    cy.get('.details-active-orders .order-item-root.order-disabled').should(
      'have.length',
      5
    )
  })
  it('it should select orders', () => {
    cy.get('.details-new-orders .order-item-root')
      .first()
      .find('.order-item-title')
      .should('have.text', 'Seafood')

    cy.get('.details-new-orders .order-item-root')
      .first()
      .find('.edit-button')
      .click()

    cy.get('.product-view-details .title').should('have.text', 'Seafood')
  })
  it('should select custom options', () => {
    cy.get('.details-new-orders .order-item-root')
      .eq(1)
      .find('.edit-button')
      .click()
    cy.get('.product-view-options .options input').eq(2).click()
    cy.get('.product-view-options .options input')
      .eq(2)
      .should('have.value', 2)
  })
  it('should add custom notes to order', () => {
    cy.get('.details-new-orders .order-item-root')
      .first()
      .find('.edit-button')
      .click()
    cy.get('.product-view-instructions .notes').click()
    cy.get('.editor-notes-input input').clear()
    cy.get('.editor-notes-input input').type('12345-#')
    cy.get('.editor-notes-done-btn').scrollIntoView()
    cy.get('.editor-notes-done-btn').click({ force: true })

    cy.get('.product-view-instructions .notes').should('have.text', '12345-#')
    cy.get('.product-view-root .button').click()

    cy.get('.details-new-orders .order-item-root')
      .first()
      .find('.order-item-notes')
      .should('have.text', '12345-#')
  })
})

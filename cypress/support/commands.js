Cypress.Commands.add('login', function(){
    cy.visit('/')
})

Cypress.Commands.add('login_assertions', function(){
    cy.get('.my-investments > :nth-child(3)').should('be.visible')
    cy.get('.total').should('be.visible')
    cy.get('.other-investments').should('be.visible')
})

Cypress.Commands.add('click_TGN', function(){
    cy.xpath("//button[contains(text(),'Transportadora Gas del Norte')]").click()
})

Cypress.Commands.add('buy_field', function(buy){
    cy.get('input').type(buy)
})

Cypress.Commands.add('buy_button', function(){
    cy.xpath("//button[contains(text(),'Realizar compra')]").click()
})

Cypress.Commands.add('buy_confirmed', function(){
    cy.xpath("//p[contains(text(),'Operación realizada.')]").should('be.visible')
    cy.xpath("//strong[contains(text(),'Cantidad adquirida')]").should('be.visible')
    cy.xpath("//strong[contains(text(),'Valor total')]").should('be.visible')
})

Cypress.Commands.add('click_BOCAN22', function(){
    cy.xpath("//button[contains(text(),'BOCAN 2022')]").click()
})

Cypress.Commands.add('click_Aluar', function(){
    cy.xpath("//button[contains(text(),'Aluar')]").first().click()
})

Cypress.Commands.add('sell_field', function(sell){
    cy.get('input').next(cy.xpath("//p[contains(text(),'Vender')]")).type(sell)
})

Cypress.Commands.add('sell_button', function(){
    cy.xpath("//button[contains(text(),'Realizar venta')]").click()
})

Cypress.Commands.add('sell_confirmed', function(){
    cy.xpath("//p[contains(text(),'Operación realizada.')]").should('be.visible')
    cy.xpath("//strong[contains(text(),'Cantidad adquirida')]").should('be.visible')
    cy.xpath("//strong[contains(text(),'Valor total')]").should('be.visible')
})
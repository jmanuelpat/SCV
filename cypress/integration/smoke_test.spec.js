const buy = 10
const sell = 5

describe('Regression tests', function(){
    
    beforeEach('Login', function (){
        cy.login()
        cy.login_assertions()
    })

    it('Buy TGN', function(){
        cy.click_TGN()
        cy.buy_field(buy)
        cy.buy_button()
        cy.buy_confirmed()
    })

    it('Sell Aluar',function(){
        cy.click_Aluar()
        cy.sell_field(sell)
        cy.sell_button()
        cy.sell_confirmed()
    })

    it('Buy and sell BOCAN 2022', function(){
        cy.click_BOCAN22()
        cy.buy_field(buy)
        cy.buy_button()
        cy.buy_confirmed()
        cy.sell_field(sell)
        cy.sell_button()
        cy.sell_confirmed()
    })
})

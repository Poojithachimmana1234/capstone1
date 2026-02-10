Feature: Add product to cart
Scenario: User adds a product to cart successfully
Given User launches the demoblaze application
When User selects a product 
And User adds the product to cart 
Then product should be added to cart successfully 
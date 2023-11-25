Feature: Inventory

        #@demo
        Scenario Outline: Login to inventory app and validate the price of the products
        Given Login to the inventory web application
        Then Inventory page should list <NoOfProducts>
        Then Validate all the products have valid price

        Examples:
            | Test Id | NoOfProducts |
            | INV 001 | 6            |
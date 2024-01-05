Feature: Inventory

    @demo
    Scenario Outline: <TestID>: Login to inventory app and validate the price of the products
        Given As a standard user I login to the inventory web application
            | UserType | Username                |
            | StdUser  | standard_user           |
            | ProbUser | problem_user            |
            | PerfUser | performance_glitch_user |
        Then Inventory page should list <NoOfProducts>
        Then Validate all the products have valid price

        Examples:
            | TestID | NoOfProducts |
            | INTV_001 | 6            |
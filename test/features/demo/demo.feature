Feature: Demo feature

    
    Scenario Outline: Run first demo feature
        Given Google browser is launched
        When Search with <SearchItem>
        Then Click on the search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |
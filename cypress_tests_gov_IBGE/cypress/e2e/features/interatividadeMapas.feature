Feature: Interactivity of Maps
    Verify the usability and interactivity of map tools, such as zoom, region selection, and data display.

    Scenario: Select a region and verify displayed data
        Given I access the main page from IBGE
        When I navigate to the regional maps page
        And I click on "Amazônia Legal"
        Then the data for "Amazônia Legal" should be displayed


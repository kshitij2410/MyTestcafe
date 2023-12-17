Feature: Login Feature

  Scenario: Login feature Scenario
    Given user is on login page
    When user enters username "student"
    When user enters password "Password123"
    When user clicks on submit button
    Then user will login into application

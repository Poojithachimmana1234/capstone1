
Feature:homepage_search
Scenario:validate google search is working


Given browser is open
And user is on google search page
When user enters a text in search box
Then user is navigated to search results

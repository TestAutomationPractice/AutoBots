@Autothon
Feature: Moive Rental Service Login Functionality


Scenario Outline: Login with valid admin Credential
    Given User is home page
    When 	User Click on # button
    Then  User Click on login link
    Then 	User enter valid "<username>" 
    And 	User enter password and "<password>"
    Then  User click on login button
    
Examples: 
      |username|password|
      | admin|password|
      
Scenario Outline: Add movie as admin 
    Given User is home page
    When 	User Click on # button
    Then  User Click on login link
    Then 	User enter valid "<username>" 
    And 	User enter password and "<password>"
    Then  User click on login button
    And 	User click on add movie button
    Then  User enter movie Title "<Title>"	
    Then 	User enter director name "<Director>"	
    Then 	User enter Description "<Desc>"	
    Then 	User select category
    Then 	User enter movie URL "<URL>"
    Then 	Click on save mobie button
    
Examples: 
      |username|password|Title|Driector|Desc|URL|
      | admin|password|Autothon|Kamakshi|Interviewwith|http://www.facebook.com|

  
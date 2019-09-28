$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Moive Rental Service Login Functionality",
  "description": "",
  "id": "moive-rental-service-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Autothon"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login with valid admin Credential",
  "description": "",
  "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on # button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter valid \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter password and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 15,
      "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5658905300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with valid admin Credential",
  "description": "",
  "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Autothon"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on # button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter valid \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter password and \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_is_home_page()"
});
formatter.result({
  "duration": 3677168500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_button()"
});
formatter.result({
  "duration": 205472400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_login()"
});
formatter.result({
  "duration": 186189400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "LoginPage.user_enter_username(String)"
});
formatter.result({
  "duration": 127553400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginPage.user_enter_password(String)"
});
formatter.result({
  "duration": 120239900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_login_btn()"
});
formatter.result({
  "duration": 72524600,
  "status": "passed"
});
formatter.after({
  "duration": 701653100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add movie as admin",
  "description": "",
  "id": "moive-rental-service-login-functionality;add-movie-as-admin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User Click on # button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enter valid \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter password and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User click on add movie button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter movie Title \"\u003cTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User enter director name \"\u003cDirector\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enter Description \"\u003cDesc\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User select category",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enter movie URL \"\u003cURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on save mobie button",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "moive-rental-service-login-functionality;add-movie-as-admin;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Title",
        "Driector",
        "Desc",
        "URL"
      ],
      "line": 33,
      "id": "moive-rental-service-login-functionality;add-movie-as-admin;;1"
    },
    {
      "cells": [
        "admin",
        "password",
        "Autothon",
        "Kamakshi",
        "Interviewwith",
        "http://www.facebook.com"
      ],
      "line": 34,
      "id": "moive-rental-service-login-functionality;add-movie-as-admin;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4731201800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Add movie as admin",
  "description": "",
  "id": "moive-rental-service-login-functionality;add-movie-as-admin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Autothon"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User Click on # button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enter valid \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter password and \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User click on add movie button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter movie Title \"Autothon\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User enter director name \"\u003cDirector\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enter Description \"Interviewwith\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User select category",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enter movie URL \"http://www.facebook.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on save mobie button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_is_home_page()"
});
formatter.result({
  "duration": 2990148600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_button()"
});
formatter.result({
  "duration": 190000500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_login()"
});
formatter.result({
  "duration": 150433300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "LoginPage.user_enter_username(String)"
});
formatter.result({
  "duration": 122228900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginPage.user_enter_password(String)"
});
formatter.result({
  "duration": 125529500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_login_btn()"
});
formatter.result({
  "duration": 77566100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_add_movie()"
});
formatter.result({
  "duration": 2093700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:305)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat com.AutoBots.cucumber.steps.BaseSteps.waitForElement(BaseSteps.java:121)\r\n\tat com.AutoBots.cucumber.steps.LoginPage.user_click_on_add_movie(LoginPage.java:104)\r\n\tat ✽.And User click on add movie button(Login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autothon",
      "offset": 24
    }
  ],
  "location": "LoginPage.enter_movie_tittle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cDirector\u003e",
      "offset": 26
    }
  ],
  "location": "LoginPage.enter_director_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Interviewwith",
      "offset": 24
    }
  ],
  "location": "LoginPage.enter_descriprion(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.select_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.facebook.com",
      "offset": 22
    }
  ],
  "location": "LoginPage.movie_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1232210400,
  "status": "passed"
});
});
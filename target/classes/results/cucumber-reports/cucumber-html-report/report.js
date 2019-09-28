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
  "name": "User Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter valid \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter password and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;1"
    },
    {
      "cells": [
        "administrator",
        "tm77dac"
      ],
      "line": 14,
      "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;2"
    },
    {
      "cells": [
        "hitesh",
        "tm77da"
      ],
      "line": 15,
      "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4713827100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "name": "User Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter valid \"administrator\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter password and \"tm77dac\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_is_home_page()"
});
formatter.result({
  "duration": 902128700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_login()"
});
formatter.result({
  "duration": 2032300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.AutoBots.cucumber.TestUtils.TestUtil.getElement(TestUtil.java:23)\r\n\tat com.AutoBots.cucumber.steps.LoginPage.user_click_on_login(LoginPage.java:61)\r\n\tat ✽.When User Click on login link(Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "administrator",
      "offset": 18
    }
  ],
  "location": "LoginPage.user_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "tm77dac",
      "offset": 25
    }
  ],
  "location": "LoginPage.user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.user_click_login_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1193484100,
  "status": "passed"
});
formatter.before({
  "duration": 3116895000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with valid admin Credential",
  "description": "",
  "id": "moive-rental-service-login-functionality;login-with-valid-admin-credential;;3",
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
  "name": "User Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter valid \"hitesh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter password and \"tm77da\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_is_home_page()"
});
formatter.result({
  "duration": 611094500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_login()"
});
formatter.result({
  "duration": 298200,
  "error_message": "java.lang.NullPointerException\r\n\tat com.AutoBots.cucumber.TestUtils.TestUtil.getElement(TestUtil.java:23)\r\n\tat com.AutoBots.cucumber.steps.LoginPage.user_click_on_login(LoginPage.java:61)\r\n\tat ✽.When User Click on login link(Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "hitesh",
      "offset": 18
    }
  ],
  "location": "LoginPage.user_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "tm77da",
      "offset": 25
    }
  ],
  "location": "LoginPage.user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.user_click_login_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1153095600,
  "status": "passed"
});
});
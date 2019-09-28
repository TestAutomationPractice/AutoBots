package com.AutoBots.cucumber.steps;

import java.io.IOException;

import org.json.JSONException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.AutoBots.cucumber.TestUtils.DriverManager;
import com.AutoBots.cucumber.TestUtils.TestUtil;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class LoginPage extends BaseSteps
{
	
    @Before
    public void setupLoginSteps () throws IOException
   {                         
                              
        initializeTheDriver();
    }
    
    @After
    public void teardown (Scenario scenario) {
              if (scenario.isFailed()) {
                    // Take a screenshot...
                    final byte[] screenshot = ((TakesScreenshot) DriverManager.getDriver()).getScreenshotAs(OutputType.BYTES);
                    scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
              }
              
              
              
              System.out.println("test teardown!");
              System.out.println("Closing driver!");
               
               teardownTheDriver();
                 
               /*
               * System.out.println("Stopping Appium Server!"); stopServer();
               */
               
              
        
    }
	
	@Given("^User is home page$")
	public void user_is_home_page()
	{
	   driver.get("https://autothon-nagarro-frontend-c06.azurewebsites.net/");
	   System.out.println("User Navigate to appliaction");
	   driver.manage().window().maximize();
	}
	
	@When("^User Click on # button$")
	public void user_click_on_button() throws JSONException
	{
		waitForElement(TestUtil.getElement(configProperty.getProperty("platformname"), "#_link"));
		WebElement _link =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "#_link"));
		_link.click();
	}

	@When("^User Click on login link$")
	public void user_click_on_login() throws JSONException
	{
		waitForElement(TestUtil.getElement(configProperty.getProperty("platformname"), "login_link"));
		WebElement log_link =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "login_link"));
		log_link.click();
	    
	}

	@Then("^User enter valid \"([^\"]*)\"$")
	public void user_enter_username(String username) throws JSONException
	{
		WebElement user_name =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "username"));
		user_name.sendKeys(username);

	}

	@Then("^User enter password and \"([^\"]*)\"$")
	public void user_enter_password(String Password) throws JSONException
	{
		WebElement pwd =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "password"));
		pwd.sendKeys(Password);
	    
	}

	@Then("^User click on login button$")
	public static void user_click_login_btn() throws JSONException
	{
		WebElement login_btn =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "login_btn"));
		login_btn.click();
	    
	}
	
	@And("^User click on add movie button$")
	public void user_click_on_add_movie() throws JSONException
	{
		waitForElement(TestUtil.getElement(configProperty.getProperty("platformname"), "add_movie_btn"));
		WebElement add_movie_btn =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "add_movie_btn"));
		add_movie_btn.click();
	    
	}
	
	
	@Then("^User enter movie Title \"([^\"]*)\"$")
	public void enter_movie_tittle(String title) throws JSONException
	{
		
		WebElement movie_title =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "movie_title"));
		movie_title.sendKeys(title);
	    
	}

	@Then("^User enter director name \"([^\"]*)\"$")
	public void enter_director_name(String dirName) throws JSONException
	{
		WebElement movie_title =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "director"));
		movie_title.sendKeys(dirName);
	  
	}

	@Then("^User enter Description \"([^\"]*)\"$")
	public void enter_descriprion(String descripation) throws JSONException
	{
		WebElement movie_title =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "description"));
		movie_title.sendKeys(descripation);
	   
	}

	@Then("^User select category$")
	public void select_category() throws JSONException
	{
		
		WebElement movie_title =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "category"));
		Select s = new Select(movie_title);
		s.selectByVisibleText("Comedy");
		s.selectByVisibleText("Drama ");  
	    
	}

	@Then("^User enter movie URL \"([^\"]*)\"$")
	public void  movie_url(String url) throws JSONException
	{
		
		WebElement movie_title =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "url"));
		movie_title.sendKeys(url);
	   
	}

	@Then("^Click on save mobie button$")
	public void click_save_button() throws JSONException
	{
		WebElement save_btn =  DriverManager.getDriver().findElement(TestUtil.getElement(configProperty.getProperty("platformname"), "save_btn"));
		save_btn.click();
	}





}

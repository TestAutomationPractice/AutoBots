package Schrack.APIREST;
import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;

import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import io.qameta.allure.Story;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.specification.RequestSpecification;

public class Movie extends Base
{
	Map<String,String> obj5;
	public long newid;
	public static String ansid;
	private static final Logger log = Logger.getLogger(AnswerTest.class);

@Test(priority=0,description="valid movie creation")
@Severity(SeverityLevel.BLOCKER)
@Epic("AnswerMovie")
@Feature("Positive scenario-Successful")
@Story("valid movie creation")
public void createmovie() throws JSONException
{
{
	{
	log.debug("Createmovie");
	Reporter.log("Createmovie");
	RequestSpecification httpsreq1=RestAssured.given();
	JSONObject obj1=new JSONObject();
        JSONObject obj2=new JSONObject();
	obj2.put("title","dummy title");
        obj2.put("director","dummy title director");
        obj2.put("description","dummy title director");
        obj2.put("categories","Comedy");
        obj2.put("image","http://www.facebook.com");
        obj2.put("rating","5");	
        //obj2.put("reviews","5");
	obj1.put("movie",obj1);

	obj5=new HashMap<String,String>();
	obj5.put("user", login.valid);
        obj5.put("Postman-Token","763562d6-afe4-405e-8086-d3d6b61c7e31");
	
	String resp = given().body(obj1.toString()).when().contentType(ContentType.JSON).headers(obj5).post("/movies").then().log().body().and().
	assertThat().statusCode(200).and().contentType(ContentType.JSON).and().extract().response().asString();	
	JsonPath js=new JsonPath(resp);
	String valid= js.get("id");
        System.out.println(valid);
}
}

}

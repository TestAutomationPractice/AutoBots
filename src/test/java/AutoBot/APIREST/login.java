package Schrack.APIREST;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.specification.RequestSpecification;

public class login extends Base
{
	@Test(priority=0,description="successful login")
	public void successdata() throws JSONException
	{
	log.debug("LoginAPI->-valid credentials");
	Reporter.log("LoginAPI->-valid credentials");
	RequestSpecification httpsrequest=RestAssured.given();
	JSONObject obj=new JSONObject();
	obj.put("username",keyword.username);
	obj.put("password",keyword.password);

	 String resp = given().body(obj.toString()).when().contentType(ContentType.JSON).header("deviceId",Keyword.DeviceId).post("/login").then().log().body().and().
				assertThat().statusCode(200).and().contentType(ContentType.JSON).and().body("status.returnMessage",equalTo("Failure")).extract().response().asString();		
				// System.out.println("response is:" + resp);
				 JsonPath js=new JsonPath(resp);
				 String valid= js.get("id");
                                 System.out.println(valid);
				 //log.info("Error message is::"+val.toString());
}
		
		}

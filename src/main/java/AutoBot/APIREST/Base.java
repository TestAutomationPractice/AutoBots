package Schrack.APIREST;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.JsonDocument;
import io.qameta.allure.Step;
import io.restassured.RestAssured;
import org.apache.log4j.Logger;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class Base {

    public String URL;
    public static String Env1;
    private static final Logger log = Logger.getLogger(Base.class);

    String Env="UAT"

    @BeforeMethod
    public void setup(String Env) throws IOException {
        //BasicConfigurator.configure();
        if (Env == null) {
            log.info("Environment variable is not defined");
        } else 
        {
        Env1 = Env;
        System.setProperty("log4j.debug", "");
        log.info("Starting Automation on::" + Env);

        log.info("********************Hit the URL*********************");

        if (Env.equalsIgnoreCase("QA")) {
            URL = Keyword.BaseURIQA1;
            RestAssured.baseURI = URL;
        } else if (Env.equalsIgnoreCase("Dev")) {
            URL = Keyword.BaseURIDev1;
            RestAssured.baseURI = URL;
        } else if (Env.equalsIgnoreCase("UAT")) {
            URL = Keyword.BaseURIUAT1;
            RestAssured.baseURI = URL;
        }

        log.info("BaseURI is: " + URL);
    }
    }

   

    @AfterMethod
    public void teardown() throws IOException {
        /*
         * try (FileWriter fileWriter = new
         * FileWriter("C:\\Users\\kamakshikhosla\\APIREST\\logs\\logging.txt");
         * PrintStream printStream = new PrintStream(new WriterOutputStream(fileWriter),
         * true)) {
         *
         * RestAssured.config =
         * RestAssured.config().logConfig(LogConfig.logConfig().defaultStream(
         * printStream)); }
         */
        //ExtentTest test = extent.createTest("TestName");

        //test.log(Status.PASS, "pass");
//	test.pass("pass");

        //test.log(Status.FAIL, "fail");
        //test.fail("fail");
    }
}

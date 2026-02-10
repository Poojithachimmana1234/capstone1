package testglue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class login_glue {
	WebDriver driver;
	@Given("user open the demoblaze homepage")
	public void user_open_the_demoblaze_homepage() throws InterruptedException {
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://demoblaze.com/");
	    Thread.sleep(2000);
	}
	@Then("Home Page should be displayed")
	public void home_page_should_be_displayed() {
	  driver.quit();
	}
}

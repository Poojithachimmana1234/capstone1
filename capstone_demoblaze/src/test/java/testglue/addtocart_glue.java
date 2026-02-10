package testglue;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class addtocart_glue {
	WebDriver driver;
	
	@Given("User launches the demoblaze application")
	public void user_launches_the_demoblaze_application() {
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get("https://demoblaze.com/"); 
	}

	@When("User selects a product")
	public void user_selects_a_product() throws InterruptedException {
		driver.findElement(By.linkText("Samsung galaxy s6")).click();
		Thread.sleep(2000);
	}
	@When("User adds the product to cart")
	public void user_adds_the_product_to_cart() throws InterruptedException {
		driver.findElement(By.linkText("Add to cart")).click();
		WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(20));
		Alert alert = wait.until(ExpectedConditions.alertIsPresent());
		alert.accept();
	}
	@Then("product should be added to cart successfully")
	public void product_should_be_added_to_cart_successfully() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(10));
		WebElement cartlink = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Cart")));
		cartlink.click();
		WebElement product=wait.until(ExpectedConditions.visibilityOfElementLocated
				(By.xpath("//td[text()='Samsung galaxy s6']")));
		
		Assert.assertTrue(product.isDisplayed());
		driver.quit();
		
	}
}

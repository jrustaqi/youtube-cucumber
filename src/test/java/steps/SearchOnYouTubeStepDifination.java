package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pages.GooglePage;
import pages.GoogleSearchPage;
import pages.TestBase;
import pages.YouTubePage;

public class SearchOnYouTubeStepDifination extends TestBase{

	GooglePage googlePage;
	GoogleSearchPage googleSearchPage;
	YouTubePage youTubePage;
	
	@Before
	public void setup() {
		initDriver();
		
		googlePage = PageFactory.initElements(driver, GooglePage.class);
		googleSearchPage = PageFactory.initElements(driver, GoogleSearchPage.class);
		youTubePage = PageFactory.initElements(driver, YouTubePage.class);
	}
	
	@Given("^User is on google home page$")
	public void user_is_on_google_home_page(){
		driver.get("https://www.google.com/");
	}
		
	@When("^User enters the YouTube \"([^\"]*)\" in GoogleSearch field of Google page$")
	public void user_enters_the_YouTube_in_GoogleSearch_field_of_Google_page(String url){
		googlePage.insertYouTubeUrl(url);
	}

	@When("^User clicks on search button$")
	public void user_clicks_on_search_button(){
		googlePage.clickGoogleSearchButton();
	}

	@Then("^User should land on Google Search page$")
	public void user_should_land_on_Google_Search_page(){
		String expectedTitle = "https://www.youtube.com/ - Google Search";
		String actualTitle = googlePage.getPageTitle();
		Assert.assertEquals("Page title texts are not matching!", expectedTitle, actualTitle);
		takeScreenshot(driver);
	}

	@When("^User clicks on YouTube url$")
	public void user_clicks_on_YouTube_url(){
		googleSearchPage.clickUtubeUrlInGoogleSearchPage();
	}

	@Then("^User should land on YouTube page$")
	public void user_should_land_on_YouTube_page(){
		String expectedTitle = "YouTube";
		String actualTitle = googlePage.getPageTitle();
		Assert.assertEquals("Page title texts are not matching!", expectedTitle, actualTitle);
	}

	@Then("^User enters \"([^\"]*)\" in YouTubeSearch field of YouTube page$")
	public void user_enters_in_YouTubeSearch_field_of_YouTube_page(String myFavorite){
		youTubePage.userShouldBeAbleToTypeInYouTubeSearchBox(myFavorite);
	}

	@When("^User clicks on YouTube Search button$")
	public void user_clicks_on_YouTube_Search_button(){
		youTubePage.ClickYouTubeSearchButton();
	}

	@Then("^User should be able to see the search result successfully$")
	public void user_should_be_able_to_see_the_search_result_successfully(){
		takeScreenshot(driver);
	}
}

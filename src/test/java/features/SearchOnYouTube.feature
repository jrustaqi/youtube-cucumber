

Feature: YouTube searching validation


@Scenario1
Scenario Outline: User should be able to get to YouTube website and serch for something
	Given User is on google home page
	When User enters the YouTube "<url>" in GoogleSearch field of Google page
	And User clicks on search button
	Then User should land on Google Search page
	When User clicks on YouTube url
	Then User should land on YouTube page
	And User enters "<myFavorite>" in YouTubeSearch field of YouTube page 
	When User clicks on YouTube Search button
	Then User should be able to see the search result successfully
	
	
	Examples:
	|	url												|	myFavorite	  |	
	|	https://www.youtube.com/	|	Tom and Jerry	|

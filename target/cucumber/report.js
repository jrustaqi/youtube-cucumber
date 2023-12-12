$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchOnYouTube.feature");
formatter.feature({
  "line": 3,
  "name": "YouTube searching validation",
  "description": "",
  "id": "youtube-searching-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to get to YouTube website and serch for something",
  "description": "",
  "id": "youtube-searching-validation;user-should-be-able-to-get-to-youtube-website-and-serch-for-something",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters the YouTube \"\u003curl\u003e\" in GoogleSearch field of Google page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Google Search page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on YouTube url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should land on YouTube page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cmyFavorite\u003e\" in YouTubeSearch field of YouTube page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on YouTube Search button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see the search result successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "youtube-searching-validation;user-should-be-able-to-get-to-youtube-website-and-serch-for-something;",
  "rows": [
    {
      "cells": [
        "url",
        "myFavorite"
      ],
      "line": 20,
      "id": "youtube-searching-validation;user-should-be-able-to-get-to-youtube-website-and-serch-for-something;;1"
    },
    {
      "cells": [
        "https://www.youtube.com/",
        "Tom and Jerry"
      ],
      "line": 21,
      "id": "youtube-searching-validation;user-should-be-able-to-get-to-youtube-website-and-serch-for-something;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3601536600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to get to YouTube website and serch for something",
  "description": "",
  "id": "youtube-searching-validation;user-should-be-able-to-get-to-youtube-website-and-serch-for-something;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters the YouTube \"https://www.youtube.com/\" in GoogleSearch field of Google page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Google Search page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on YouTube url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should land on YouTube page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"Tom and Jerry\" in YouTubeSearch field of YouTube page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on YouTube Search button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see the search result successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_is_on_google_home_page()"
});
formatter.result({
  "duration": 1429509300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.youtube.com/",
      "offset": 25
    }
  ],
  "location": "SearchOnYouTubeStepDifination.user_enters_the_YouTube_in_GoogleSearch_field_of_Google_page(String)"
});
formatter.result({
  "duration": 292062100,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 2394738800,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_should_land_on_Google_Search_page()"
});
formatter.result({
  "duration": 175047900,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_clicks_on_YouTube_url()"
});
formatter.result({
  "duration": 4227060700,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_should_land_on_YouTube_page()"
});
formatter.result({
  "duration": 121081600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom and Jerry",
      "offset": 13
    }
  ],
  "location": "SearchOnYouTubeStepDifination.user_enters_in_YouTubeSearch_field_of_YouTube_page(String)"
});
formatter.result({
  "duration": 6041875800,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_clicks_on_YouTube_Search_button()"
});
formatter.result({
  "duration": 5227938200,
  "status": "passed"
});
formatter.match({
  "location": "SearchOnYouTubeStepDifination.user_should_be_able_to_see_the_search_result_successfully()"
});
formatter.result({
  "duration": 220494100,
  "status": "passed"
});
});
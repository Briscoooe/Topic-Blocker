//content.js

// http://stackoverflow.com/questions/8746882/jquery-contains-selector-uppercase-and-lower-case-issue
jQuery.expr[':'].containsInsensitive = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

$(document).ready(function() {
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("bae")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("kardashian")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("cian twomey")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("katie hopkins")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("hotline")').remove();
	$('li[data-item-type=*"tweet"]:containsInsensitive("obama")').remove();
	//$('li[class*="js-stream-item"]:containsInsensitive("obama")').remove();



});

$(window).scroll(function () {
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("bae")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("kardashian")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("cian twomey")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("katie hopkins")').remove();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("hotline")').remove();
	$('li[data-item-type*="tweet"]:containsInsensitive("obama")').remove();
	//$('li[class*="js-stream-item"]:containsInsensitive("obama")').remove();

});

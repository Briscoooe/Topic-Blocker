//content.js

// http://stackoverflow.com/questions/8746882/jquery-contains-selector-uppercase-and-lower-case-issue
jQuery.expr[':'].containsInsensitive = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

$(document).ready(function() {
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Jenner")').hide();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Kardashian")').hide();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Mr Cian Twomey")').hide();
});

$(window).scroll(function () {
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Jenner")').hide();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Kardashian")').hide();
	$('div[data-testid*="fbfeed_story"]:containsInsensitive("Mr Cian Twomey")').hide();
});

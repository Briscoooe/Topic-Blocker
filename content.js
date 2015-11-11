//content.js

$(document).ready(function() {
	$('div[data-testid*="fbfeed_story"]:contains("Jenner")').hide();
});

$(window).scroll(function () {
	$('div[data-testid*="fbfeed_story"]:contains("Jenner")').hide();
});

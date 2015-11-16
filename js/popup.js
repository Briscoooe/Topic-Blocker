function addToList () {
    var topic = $("#topic-text").val();
    if(topic.length > 0) {
        $("#block-list").append("<li> " + topic + " </li>");
        localStorage.item1 = topic;
    }

    else {
        alert("Oops! You must enter something into the box if you want to block it");
    }
};

function loadBlockList () {
    $("#block-list").append("<li>" + localStorage.item1 + " </li>");
};

document.addEventListener("DOMContentLoaded", function() {
    loadBlockList();
    document.getElementById("block-button").addEventListener("click", addToList);
});
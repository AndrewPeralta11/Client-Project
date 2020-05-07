/* global $ */
$("#genre").click(function() {
  let userInput = $("input").val();
  fetch("https://api.soundcloud.com/tracks?genres=" + userInput + "&client_id=5aa8e389ba4e24b6106af5159ab3e344")
  .then(function(response){
    return response.json
  })
  .then(function() {
    
  })
});

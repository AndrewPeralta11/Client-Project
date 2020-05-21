/* global $ */
let playlist_songs = [];

function searchGenre() {
  $("#grid").empty();
  let userInput = $("input").val();
  fetch("https://api.soundcloud.com/tracks?genres=" + userInput + "&client_id=5aa8e389ba4e24b6106af5159ab3e344")
  .then(function(response){
    return response.json();
  })
  .then(function(info) {
    // info = { tracks: [...] }
    // info = [ ... ]
    console.log(info);
    info.forEach(function(song) {
      $("#grid").append(`<h3> ${song.title} </h3> <h3> ${song.genre} </h3> <h3> <a href = ${song.permalink_url} target = "_blank" > Listen </a> </h3> <button class='playlist' > Add to Playlist </button`);
    })
  })
}

$("#genre").click(function() {
  searchGenre();
});

$("input").keypress(function(key) {
  if(key.which === 13) {
    searchGenre();
} else {}
});


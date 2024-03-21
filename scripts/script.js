import { GameData } from "./GameData.js";

$(function () {
  // iterate over GameData array without knowing how many objects in the DOM

  $.each(GameData, function (index, item) {
    
    // make cards "cooking"
    var elem = `<div class='card text-center mx-auto bg-dark green' style="width: 200px"> \
  <button class="text-white" style="background-color: #121212;"'cardOpen btn btn-outline-info'> ${item.gameName} </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${item.gameURL}" target="_blank" class="link-info" >Game URL</a> \
       <p class="text-white">Author: ${item.gameAuthor} </p> \
       <br> \
       <button class='btn btn-outline-info cardClose'>Close</button> \
   </div>
 </div>`;

    $("#cards").append(elem);
  });
});


// cool card script: adopt/orphan
$(function () {
    $(".cardClose").click(function () {
      $(this).parent().hide();
    });  
  
    $(".cardOpen").click(function () {
      $(this).parent().children().show();
    });
  });
   
    // toggle adopt/orphan
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    

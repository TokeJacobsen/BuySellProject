$(document).ready(function() {

var playerIMG = "<i class='fas fa-user'></i>"

for (var i = 1; i < 100; i++) {
$("#field").append("<div class='#grid-item-"+i+"'> 10 </div>")
}

$("#grid-item-44").innerHTML = "?"

for (var i = 0; i < 10 ; i++) {
  let randomNumber = Math.floor((Math.random() * 99) + 1);
  console.log(randomNumber);
  $("#grid-item-"+randomNumber+"").val("TEST")
  //document.getElementById("grid-item-"+randomNumber+"").innerHTML = "Paragraph changed!";
  $("#grid-item-"+randomNumber+"").css("background-color","blue")

}
})

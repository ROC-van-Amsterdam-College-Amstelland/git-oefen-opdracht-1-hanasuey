<button onclick="like()" id="button1">like</button>
  <span id="like1"></span>
  <button id="button2">dislike</button>
  <span id="like2"></span>



var whichButton = "";
var counter = 0;
var counter2 = 0;

$("button").on("click", function(){
  whichButton = this.id;
  if (whichButton === "button1") {
    counter++; 
    $("#like1").html(counter);
  } else {
    counter2++
    $("#like2").html(counter2);
  }
}
 )


function like() {
    document.body.style.backgroundColor = "#FF0000";
    window.setTimeout("chBackColor()",2);
  }
const lettera = document.getElementById("a")
var StartButtton = document.getElementById("start")
const list = document.getElementById("list")
timeText = document.getElementById("time")

StartButtton.addEventListener("click", startgame);
function timer(){
            var counter = 10;
            setInterval(function() {
              counter--;
               if (counter >= 0) {
                  span = document.getElementById("time");
                  span.innerHTML = counter;
               }
               else {
                window.location.reload();
                   alert ("sorry out of time.")
                  clearInterval(counter);
                }
                timeText.textContent = counter;
              }, 1000);
         };
function startgame(){
    console.log("hello")
    timer()
    list.classList.remove("hide");
}

function keypress() {
    object.addEventListener("keypress", a);
}
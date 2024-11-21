var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function leeftijdcheck() {
    const inputValue = document.getElementById('input').value;
    if(inputValue >= 18) {
     window.location.href = "https://neal.fun/"
    }
    else {
     window.location.href =  "cookiewall.html"
    }
}
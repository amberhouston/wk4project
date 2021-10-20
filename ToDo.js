// Click Event
    var list = document.querySelector("#myToDo");
	  list.addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "LI") {
      e.target.classList.toggle('checked');
    }});


// Make a "closing button"
var mytest = document.querySelector("#myToDo");
var myNodelist = mytest.querySelectorAll("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// destroy the list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
// div.style.display = "none"; the nonviolent method, maybe for more functions
  }
}

// New Items
function newElement() {  
  $("#button1").addClass("animate__animated animate__jello");
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You SURE you have nothing to do?");
  } else {
    document.getElementById("myToDo").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.remove();

  setTimeout(function reanimate(){
	$("#button1").removeClass("animate__animated animate__jello");
},500);
  }}};

// Destroy everything
function destroyAll() {
	$("#button2").addClass("animate__animated animate__jello");
	kill = document.querySelectorAll('li');
	for (let i = 0; i < kill.length; i++) {
		kill[i].remove();
	}
	setTimeout(function reanimate(){
		$("#button2").removeClass("animate__animated animate__jello");
	},500);

}


// For fun
function hover(element) {
	element.setAttribute('src', "data:image/jpeg;base64,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");
  }
  
function unhover(element) {
	element.setAttribute('src', 'assets/Code_Clowder.png');
}
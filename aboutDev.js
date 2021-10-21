// For fun
function hover(element) {
    $(element).addClass("animate__animated animate__jello");
}
  
function unhover(element) {
	$(element).removeClass("animate__animated animate__jello");
}

function boop(){
    var change = document.querySelector("#changed");
    change.setAttribute('src','assets/RealMe.png')
    setTimeout(function rewind(){
        change.setAttribute('src','assets/CouldBeMe.png')
		// $("#button2").removeClass("animate__animated animate__jello");
	},800);
}
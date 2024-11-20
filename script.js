//your JS code here. If required.
function focusSquare(){
	let square1 = document.getElementById("square1");
	let square2 = document.getElementById("square2");
	let square3 = document.getElementById("square3");

	function resetColors(){
		square1.style.backgroundColor = "#E6E6FA";
		square2.style.backgroundColor = "#E6E6FA";
		square3.style.backgroundColor = "#E6E6FA";
	}

	square1.addEventListener("mouseover",function() {

		square2.style.backgroundColor = "#6F4E37";
		square3.style.backgroundColor = "#6F4E37";
	});

	square2.addEventListener("mouseover",function() {

		square1.style.backgroundColor = "#6F4E37";
		square3.style.backgroundColor = "#6F4E37";
	});

	square3.addEventListener("mouseover",function() {

		square1.style.backgroundColor = "#6F4E37";
		square2.style.backgroundColor = "#6F4E37";
	});

	[square1 , square2 , square3].forEach((square) =>{
		square.addEventListener("mouseout" , resetColors);
	});
	
}
focusSquare();
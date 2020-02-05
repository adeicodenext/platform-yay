//set the CANVAS "resolution" to match the screen
let CANVAS= document.getElementById("display")
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight

//create 2D context object for drawing on the CANVAS
let CTX = CANVAS.getContext("2d")

// draw 
console.log(CTX)

function ERASE () {
	CTX.fillStyle = "hotpink"
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)

	CTX.fillStyle = "violet"
	CTX.fillRect(0, 0, 400, 100)	
}


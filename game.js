// todo stretc goals

// x & y should go 
//support 3+ random colors
//randomize the width and height

window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	let color = "lightpink"
	if (colorIndex < 0.5) {
		color = "lightblue"
	}
	ctx.fillStyle = color

	let x = Math.random() * 1250
	let y = Math.random() * 700
	new Shape(x, y, 200, 100).draw()
})

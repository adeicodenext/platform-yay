
let hero = new Hero()
let shapes = []

ERASE()
hero.draw()

//setup a function to run whenever a key is presssed
window.addEventListener("keydown", event => {
	if (event.code === "KeyS") {
		let colorIndex = Math.random()
		let color = "lightpink"
		if (colorIndex < 0.5) {
			color = "lightblue"
		}
		CTX.fillStyle = color

		let x = Math.random() * 1250
		let y = Math.random() * 700
		let s = new Shape(x, y, 200, 100)
		shapes.push(s)
	}
	if (event.code === "ArrowRight") {
		hero.moveRight()
	}
	ERASE()
	shapes.forEach(s => s.draw())
	hero.draw()
})

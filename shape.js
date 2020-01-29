
class Shape { 
	constructor (x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}
	draw() {
		ctx.fillRect(
			this.x,
			this.y,
			this.width,
			this.height
		)
	}
}

ctx.fillStyle = "lightpurple"
new Shape(100, 100, 200, 200) .draw()
new Shape(200, 200, 200, 200) .draw()
new Shape(300, 300, 200, 200) .draw()
new Shape(400, 400, 200, 200) .draw()
new Shape(500, 500, 200, 200) .draw()
new Shape(600, 600, 200, 200) .draw()
new Shape(700, 700, 200, 200) .draw()
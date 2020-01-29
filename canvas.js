//set the canvas "resolution" to match the screen
let canvas = document.getElementById("display")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

//create 2D
let ctx = canvas.getContext("2d")

console.log(ctx)

ctx.fillStyle = "hotpink"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "violet"
ctx.fillRect(0, 0, 400, 100)

let canvas = document.getElementById("display")

console.log(canvas)

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext("2d")

console.log(ctx)

ctx.fillStyle = "hotpink"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "violet"
ctx.fillRect(0, 0, 400, 100)
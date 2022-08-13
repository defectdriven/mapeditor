
let tiles = []
let rows = 0
let columns = 0

draw_gridlines = (height, width) => {
  let canvas = document.getElementById('map')
  let ctx = canvas.getContext('2d')
  let x = 0, y = 0, count = 0
  canvas.addEventListener('mousedown', function (e) {
    tile_clicked(canvas, e)
  })

  fix_dpi(canvas)
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, height, width)
  while (y < canvas.height) {
    while (x < canvas.width) {
      ctx.strokeRect(x, y, height, width);
      ctx.fillRect(x, y, height, width)
      count += 1
      x += width;
    }
    if (columns === 0) {
      columns = count
    }
    x = 0;
    y += height;
    rows += 1
  }
  while (count--) tiles[count] = 0
}

load_tileset = () => {
  let canvas = document.getElementById('tileset')
  let ctx = canvas.getContext('2d')
  let img = new Image()
  fix_dpi(canvas)
  img.src = './public/Castle2.png'
  img.onload = function () {
    ctx.drawImage(img, 0, 0, img.width,    img.height, 
                   0, 0, canvas.width, canvas.height)
  }
}

tile_clicked = (canvas, e) => {
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = "#FF0FFF";
  const rect = canvas.getBoundingClientRect()
  let pointX = translatedX(canvas, rect, e.clientX)
  let pointY = translatedY(canvas, rect, e.clientY)
  let colX = pointX % 32 === 0 ? pointX : pointX - (pointX % 32)
  let colY = pointY % 32 === 0 ? pointY : pointY - (pointY % 32)
  ctx.fillRect(colX, colY, 32, 32)
}

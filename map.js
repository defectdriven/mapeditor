
let tiles = []
let rows = 0
let columns = 0
let cellHeight = 0
let cellWidth = 0

draw_gridlines = (height, width) => {
  let canvas = document.getElementById('map')
  let ctx = canvas.getContext('2d')
  let x = 0, y = 0, count = 0
  cellHeight = height
  cellWidth = width
  canvas.addEventListener('mousedown', function (e) {
    tile_clicked(canvas, e)
  })

  fix_dpi(canvas)
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, cellHeight, cellWidth)
  while (y < canvas.height) {
    while (x < canvas.width) {
      ctx.strokeRect(x, y, cellHeight, cellWidth);
      ctx.fillRect(x, y, cellHeight, cellWidth)
      count += 1
      x += cellWidth;
    }
    if (columns === 0) {
      columns = count
    }
    x = 0;
    y += cellHeight;
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

load_tileviewer = () => {
  let canvas = document.getElementById('tileviewer')
  let ctx = canvas.getContext('2d')
  let img = new Image()
  fix_dpi(canvas)
  img.src = './public/Castle2.png'
  img.onload = function() {
    ctx.drawImage(img, 0, 190, 35, 35, 
      0, 190, 32, 32)
  }
}

tile_clicked = (canvas, e) => {
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = "#FF0FFF"
  let point = translateCoordinates(canvas, e.clientX, e.clientY)
  let colX = point.x % cellWidth === 0 ? point.x : point.x - (point.x % cellWidth)
  let colY = point.y % cellHeight === 0 ? point.y : point.y - (point.y % cellHeight)
  let img = new Image()
  img.onload = function () {
    ctx.drawImage(img, 0, 190, 35, 35, colX, colY, 32, 32)
  }
  img.src = './public/Castle2.png'
}

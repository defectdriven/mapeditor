
let tiles = []
let rows = 0
let columns = 0
let tile_width = 16
let tile_height = 16

draw_gridlines = (height, width) => {
  let canvas = document.getElementById('map')
  let ctx = canvas.getContext('2d')
  let x = 0, y = 0, count = 0

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

tile_clicked = (e) => {
  let canvas = document.getElementById('map')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = "#FF0FFF";
  let pointX = e.clientX - 300
  let grid_width = columns * tile_width
  let column = columns
  let grid_height = rows * tile_height
  let row = rows
  while (pointX < grid_width) {
    grid_width -= tile_width
    column -= 1
  }
  while (e.clientY < grid_height) {
    grid_height -= tile_height
    row -= 1
  }
  y = (row + 1) * (tile_height * 2)
  x = column * (tile_width * 2)
  
  ctx.fillRect(x, y, tile_height * 2, tile_width * 2)
}
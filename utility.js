fix_dpi = (canvas) => {
  let dpi = window.devicePixelRatio
  canvas.setAttribute('width', +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2) * dpi)
  canvas.setAttribute('height', +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2) * dpi)
}

translateCoordinates = (canvas, x, y) => {
  return {
    x: translatedX(canvas, x),
    y: translatedY(canvas, y)
  }
}

translatedX = (canvas, x) => {
  let rect = canvas.getBoundingClientRect()
  return (canvas.width / rect.width) * (x - rect.left)
}

translatedY = (canvas, y) => {
  let rect = canvas.getBoundingClientRect()
  return (canvas.height / rect.height) * (y - rect.top)
}
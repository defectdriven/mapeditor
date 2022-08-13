
fix_dpi = (canvas) => {
  let dpi = window.devicePixelRatio
  canvas.setAttribute('width', +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2) * dpi)
  canvas.setAttribute('height', +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2) * dpi)
}

translatedX = (canvas, rect, x) => {
  return (canvas.width / rect.width) * (x - rect.left)
}

translatedY = (canvas, rect, y) => {
  return (canvas.height / rect.height) * (y - rect.top)
}
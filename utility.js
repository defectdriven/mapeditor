
fix_dpi = (canvas) => {
  let dpi = window.devicePixelRatio
  canvas.setAttribute('width', +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2) * dpi)
  canvas.setAttribute('height', +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2) * dpi)
}

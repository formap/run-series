var Rectangle = require('./Rectangle')

function Square (side) {
  this.width = side
  this.height = side
  // Para emular clases. Llamamos a Rectangle con implicito el this
  // y parametros side y side
  // Rectangle.call(this, side, side)
}

Square.prototype = new Rectangle()
// tambien funciona pero son cuando cambie square,
// estare cambiando tambien rectangle
// Square.prototype = Rectangle.prototype

module.exports = Square

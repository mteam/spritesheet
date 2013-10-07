var Snippet = require('snippet'),
    Grid = require('grid');

function Spritesheet(image, cols, rows) {
  var width = image.width / cols;
  var height = image.height / rows;
  var sprites = this.sprites = [];

  this.grid = new Grid(cols, rows, width, height);
  this.grid.iterate(function(x, y) {
    var snippet = new Snippet(image, x, y, width, height);
    sprites.push(snippet);
  });
}

Spritesheet.prototype = {

  get: function(n) {
    return this.sprites[n - 1];
  }

};

module.exports = Spritesheet;

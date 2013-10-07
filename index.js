var Snippet = require('snippet'),
    Grid = require('grid');

function Spritesheet(image, opts) {
  opts.width = opts.width || image.width / opts.cols;
  opts.height = opts.height || image.height / opts.rows;
  opts.cols = opts.cols || image.width / opts.width;
  opts.rows = opts.rows || image.height / opts.height;

  this.sprites = [];
  this.grid = new Grid(opts.cols, opts.rows, opts.width, opts.height);

  var sprites = this.sprites;
  this.grid.iterate(function(x, y) {
    var snippet = new Snippet(image, x, y, opts.width, opts.height);
    sprites.push(snippet);
  });
}

Spritesheet.prototype = {

  get: function(n) {
    return this.sprites[n - 1];
  }

};

module.exports = Spritesheet;

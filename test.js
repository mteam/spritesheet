var Spritesheet = require('spritesheet'),
    assert = require('assert');

describe('Spritesheet', function() {
  
  it('creates snippets', function() {
    var img = new Image;
    img.width = 200;
    img.height = 100;

    var ss = new Spritesheet(img, 30, 40);
    assert.equal(ss.sprites.length, 12);
    assert.equal(String(ss.get(8).rect), 'rect[30;40 30x40]');
  });

});

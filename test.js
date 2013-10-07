var Spritesheet = require('spritesheet'),
    assert = require('assert');

describe('Spritesheet', function() {
  
  it('creates snippets', function() {
    var img = new Image;
    img.width = 210;
    img.height = 120;

    var ss = new Spritesheet(img, { width: 30, height: 40 });
    assert.equal(ss.sprites.length, 21);
    assert.equal(String(ss.get(9).rect), 'rect[30;40 30x40]');
  });

});

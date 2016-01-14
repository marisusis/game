var method = Player.prototype;
var Inventory = require('./Player/Inventory');

function Player(username) {
  this.username = username;
}

method.setInventory = function(_inventory) {
  this.inventory = _inventory;
}

module.exports = Player;

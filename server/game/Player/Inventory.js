var method = Inventory.prototype;

function Inventory(items) {
  if (items.length >= 10) {
    throw new Error("Too many items.");
  }
  this.items = items;
}

method.addItem = function(item) {
  this.items.push(item);
}

method.removeItem = function(item) {
  this.items.splice(item,1);
}

method.clear = function() {
  this.items = [];
}


module.exports = Inventory;
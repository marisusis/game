var method = Item.prototype;

function Item(data) {
  this.name = data.name;
  this.type = data.type;
  if (this.type == 'weapon') {
    if (data.damage === undefined) {
      data.damage = 0;
    }
    this.damage = data.damage;
  }
  if (this.type == 'armor') {
    if (data.defense === undefined) {
      data.defense = 0;
    }
    this.defense = data.defense;
  }
}

module.exports = Item;
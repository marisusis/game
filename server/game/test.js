var items = require('./items.json');
var Player = require('./Player');
var Inventory = require('./Player/Inventory');
var Item = require('./Item');
for (var key in items) {
    // skip loop if the property is from prototype
    if (!items.hasOwnProperty(key)) continue;

    var obj = items[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;
if (prop == 'name'){
        // your code
        console.log(key + ' = ' +obj[prop]);
}
    }
}

var me = new Player('spacegeek224');

me.setInventory(new Inventory([]));

me.inventory.addItem(new Item(items.wood_sword));

console.log(JSON.stringify(me.inventory.items))

for (var key in me.inventory.items) {
    // skip loop if the property is from prototype
    if (!items.hasOwnProperty(key)) continue;

    var obj = items[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;

        // your code
        console.log(key + ' = ' +obj[prop]);

    }
}

me.inventory.items.forEach(function(a,b,c) {
  console.log(a.name);
});

me.inventory.addItem(new Item(items.wood_bow));

me.inventory.items.forEach(function(a,b,c) {
  console.log(a.name + ' Type: ' + a.type);
});
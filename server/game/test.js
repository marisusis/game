var Player = require('./Player');
var Item = require('./Item');
var Inventory = require('./Player/Inventory');
var log = require('util').log;
var inspect = require('util').inspect;
var fs = require('fs');

var me = new Player(process.argv[2]);
log(me.username);
me.setInventory(new Inventory(['a']));

var a = fs.readFileSync('./items.json');
me.inventory.addItem(JSON.parse(a).wood_sword);
log(me.inventory.items);
log(JSON.stringify(me.inventory));
fs.writeFileSync('./me.json',JSON.stringify(me));
me.inventory.clear()

log(me.inventory.items);
var apple = new Item(JSON.parse(a).wood_helmet);
console.log(apple);
me.inventory.addItem(JSON.parse(a).apple);
log(JSON.stringify(me.inventory));
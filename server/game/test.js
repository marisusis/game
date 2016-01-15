var items = require('./items.json');
for (var key in items) {
    // skip loop if the property is from prototype
    if (!items.hasOwnProperty(key)) continue;

    var obj = items[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;
if (prop == 'name'){
        // your code
        console.log(obj[prop]);
}
    }
}

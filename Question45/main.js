function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], values = _a[1];
        car[key.trim()] = values.trim();
    });
    return car;
}
;
var my_car = creat_car("Toyota", "Corolla", "Color : Black", "Sunroof : True", "Year : 2024");
console.log(my_car);

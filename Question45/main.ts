function creat_car (manufacturer , model , ...options) {

    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach(option => {
        let [key , values] = option.split(":");
        car [key.trim()] = values.trim();
    });

    return car
};

let my_car = creat_car(
  "Toyota",
  "Corolla",
  "Color : Black",
  "Sunroof : True",
  "Year : 2024"
);

console.log(my_car);

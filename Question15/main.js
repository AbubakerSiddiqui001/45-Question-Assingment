var guests = ["Elon Musk", "Mukesh Ambani", "Mark Zukerburg", "Sam Altman"];
var dontCome = guests[1];
console.log(dontCome, "Can't come");
guests.splice(1, 1, "Zia Khan");
guests.forEach(function (addoneGuest) { return console.log("Hello, ".concat(addoneGuest, " would you like dinner for me?")); });

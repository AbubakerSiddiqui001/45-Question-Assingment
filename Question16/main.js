var guestslist = ["Abubaker", "Awais", "Usman", "Shaheryar"];
var dontCome = guestslist[0];
console.log(dontCome, "Can't come");
guestslist.splice(0, 1, "Huzaifa");
console.log("Good News! We have found a bigger table for a dinner");
guestslist.unshift("Umair");
guestslist.push("Huraira");
var middleGuest = Math.floor(guestslist.length / 2);
guestslist.splice(middleGuest, 0, "Maham");
console.log("Updated guests");
guestslist.forEach(function (addguest) { return console.log("Hello, ".concat(addguest, " would you like to dinner with me?")); });
// Creating a guest list arrey
var guestslist = ["Abubaker", "Awais", "Usman", "Shaheryar"];
// Making variable those guest who not come
var dontCome = guestslist[0];
// Print the name of guest who Can't come
console.log(dontCome, "Can't come");
// Add or remove value from guest list arrey
guestslist.splice(0, 1, "Huzaifa");
// Print messege for Bigger table
console.log("Good News! We have found a bigger table for a dinner");
// Adding a new guest at starting index of array
guestslist.unshift("Umair");
// Adding a new guest at ending index of array
guestslist.push("Huraira");
// Making a variable for storing a middle index of our guestlist array
var middleGuest = Math.floor(guestslist.length / 2);
// Adding a new guest middle of array
guestslist.splice(middleGuest, 0, "Maham");
// Print new guests
console.log("Updated guests");
// Sending invitation messege to our guests one by one
guestslist.forEach(function (addguest) { return console.log("Hello, ".concat(addguest, " would you like to dinner with me?")); });
// Print Only two Guests invite
console.log("Sorry, I can invite two Guests to dinner with me!");
// Inform that only two guests invite in dinner
while (guestslist.length > 2) {
    var removeGuest = guestslist.pop();
    console.log("Sorry ".concat(removeGuest, " I can't invite you to dinner"));
}
// Sending invitation to the last two guests on the list
console.log("Invitation to the 2 Guests");
guestslist.forEach(function (twoGuest) { return console.log(" Wellcome ".concat(twoGuest, " you are invite to dinner")); });
// Remove from two guests on the list
guestslist.pop();
guestslist.pop();
console.log("Empty", guestslist);

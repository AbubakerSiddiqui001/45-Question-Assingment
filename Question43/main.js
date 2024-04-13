// Define a function to print each magicians name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array containing magicians Name
var magiciansName = ["Harry Poter", "Spider Man", "Bat Man"];
var copy_magicians_Name = magiciansName.slice();
var copy_great_magicians = make_great(copy_magicians_Name);
// Original
console.log("Original Array\n");
show_magicians(magiciansName);
// Copy
console.log("\nCopy Array\n");
show_magicians(copy_great_magicians);

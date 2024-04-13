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
// Call make_great function to modify magicians name
var great_magicians = make_great(magiciansName);
// Call show magicians that show modified list of magicians
show_magicians(great_magicians);

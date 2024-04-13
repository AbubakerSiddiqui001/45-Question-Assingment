// Define a function to print each magicians name from an Array
function show_magicians (magicians: string []) {
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify Array
function make_great (magicians: string []) {
    return magicians.map(name => `The Great ${name}`)
}

// Define an Array containing magicians Name
let magiciansName = ["Harry Poter", "Spider Man", "Bat Man"];

// Making a copy of original Array through .slice() function
let copy_magicians_Name = magiciansName.slice();

// Modify the copied Array To include "The Great" with their names
let copy_great_magicians = make_great (copy_magicians_Name);

// Original
console.log("Original Array\n");
show_magicians(magiciansName);

// Copied
console.log("\nCopy Array\n");
show_magicians(copy_great_magicians);

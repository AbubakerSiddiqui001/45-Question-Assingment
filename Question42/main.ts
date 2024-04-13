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

// Call make_great function to modify magicians name
let great_magicians = make_great (magiciansName);

// Call show magicians that show modified list of magicians
show_magicians(great_magicians);
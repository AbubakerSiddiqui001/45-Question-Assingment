// Define a function to print each magicians name from an Array
function show_magicians (magicians: string []) {
    magicians.forEach(name => console.log(name));
}

// Define an Array containing magicians Name
let magiciansName = ["Harry Poter", "Spider Man", "Bat Man"];

// Call the function to print each magicians Name
show_magicians (magiciansName)
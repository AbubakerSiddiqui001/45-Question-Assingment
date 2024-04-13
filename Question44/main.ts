// Define a function rest parameters that accept items arguments representing our Sandwich
function makeSandwich (...items: string[]) {
    console.log("\n Making a sandwich with the following items \n")

items.forEach(newItems => console.log("-" + newItems));

console.log("\n Now Enjoy Sandwich \n");
}

// Call the function 3 times with the 3 different number of arguments
makeSandwich("Chicken" , "Chesse" , "Mayo" , "Egg");

makeSandwich("Bread" , "Butter");

makeSandwich("Bread" , "Butter" , "Chicken" , "Chesse" , "Mayo" , "Egg" , "Lettuce" , "Tomato");



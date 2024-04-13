let apple = "apple";
let uppercaseApple = "APPLE";
let eight = 8
let three = 3
let courses = ["Javascript", "Typescript", "CSS"];

console.log("\n Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");

console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

// Numerical test
console.log("\n Is eight is equal to three?");
console.log(eight == 3);

console.log("\n Is eight is not equal to three?");
console.log(eight != 3);

console.log("\n Is 9 is greater than 2?");
console.log(9 > 2);

console.log("\n Is nine is less than 2?");
console.log(9 < 2);

console.log("\n Is fifteen is greater than Or equal to ten?");
console.log(15 >= 10);

console.log("\n Is ten is less than Or equal to fifteen?");
console.log(15 <= 10);

// Using and operators (&&)
console.log("\n eight is not equal to three and eight is greater than three?");
console.log(eight != 3 && eight > 3);

console.log("\n eight is not equal to three and eight is greater than ten?");
console.log(eight != 3 && eight > 10);

// Using OR operators (||)
console.log("\n eight is not equal to three and eight is greater than three?");
console.log(eight <= 3 || eight > 3);

console.log("\n eight is not equal to three and eight is greater than ten?");
console.log(eight <= 3 || eight > 10);

// Test whether an item is includes in array
console.log("\n Is Typescript includes in our courses?");
console.log(courses.includes ("Typescript"));

console.log("\n Is CSS includes in our courses?");
console.log(!courses.includes ("CSS"));















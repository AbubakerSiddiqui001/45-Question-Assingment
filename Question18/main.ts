// Making a array of countries and print its Original Order
let countriesName: string[] = ["Chaina", "Denmark", "Brazil", "Australia"];
console.log("Orignal Order", countriesName);

// Print the array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order", [...countriesName].sort());

// Show that the array in still in Original Order 
console.log("Still in Original Order", countriesName);

// Print the array in Reverse Order without modifying the actual array list
console.log("Reverse Order", [...countriesName].reverse());

// Show that the array in still in Original Order 
console.log("Still in Original Order", countriesName);

// We have change the original Array order now
console.log("Original Array reversed", countriesName.reverse());

// Print the array to show that's its back in Original Order
console.log("Back to original Order", countriesName.reverse());

// Print the array to show that his order has been change in Alphabetical Order 
console.log("Sorted in Alphabetical Order", countriesName.sort());

// We have change the original Array order now
console.log("Original Array reversed", countriesName.reverse());
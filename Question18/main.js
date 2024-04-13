var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its Original Order
var countriesName = ["Chaina", "Denmark", "Brazil", "Australia"];
console.log("Orignal Order", countriesName);
// Print the array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order", __spreadArray([], countriesName, true).sort());
// Show that the array in still in Original Order 
console.log("Still in Original Order", countriesName);
// Print the array in Reverse Order without modifying the actual array list
console.log("Reverse Order", __spreadArray([], countriesName, true).reverse());
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

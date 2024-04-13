// Making a function
function make_shirt (size: string = "Large" , pritMessege: string = "I Love TypeScript") {
    console.log(`Creating a ${size} size shirt with the ${pritMessege} print on it`);
};

// Calling a function with by-default values
make_shirt();

// Calling a function now with medium size and default messege
make_shirt("Medium");

// Calling a function now with small size and also differeent Print messege
make_shirt("Small" , "I Love HTML");
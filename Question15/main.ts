let guests = ["Elon Musk", "Mukesh Ambani", "Mark Zukerburg", "Sam Altman"];

let dontCome = guests[1];

console.log(dontCome, "Can't come" );

guests.splice(1, 1, "Zia Khan");

guests.forEach(addoneGuest => console.log(`Hello, ${addoneGuest} would you like dinner for me?`));

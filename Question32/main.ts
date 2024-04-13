// Array of current user
let current_users = ["Abubaker", "Usman", "Awais", "Shaheryar", "Huzaifa"];

// Array of new user
let new_users = ["Shahzaib", "Maham", "HUZAIFA", "Muzammil", "Abubaker"];

// Loop through new_users to check username avaibility
new_users.forEach((new_one_user) => {

  // Making a condition for username already exist and save in conditions variable
  let conditions = current_users.some(
    (one_current_user) => one_current_user.toLowerCase() === new_one_user.toLowerCase());

    // Print different messege if else statement 
  if(conditions) {
    console.log(`Sorry ${new_one_user} is aleady taken`);
}
else {
    console.log(`This username ${new_one_user} is available`);
}
});

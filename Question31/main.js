var userName = ["Admin", "Abubaker", "Usman", "Awais", "Shaheryar"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array is Empty! We need to find some users");
}
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});

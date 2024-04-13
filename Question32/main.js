var current_users = ["Abubaker", "Usman", "Awais", "Shaheryar", "Huzaifa"];
var new_users = ["Shahzaib", "Maham", "HUZAIFA", "Muzammil", "Abubaker"];
new_users.forEach(function (new_one_user) {
    var conditions = current_users.some(function (one_current_user) { return one_current_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (conditions) {
        console.log("Sorry ".concat(new_one_user, " is aleady taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});

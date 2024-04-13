function make_shirt(size, pritMessege) {
    if (size === void 0) { size = "Large"; }
    if (pritMessege === void 0) { pritMessege = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " size shirt with the ").concat(pritMessege, " print on it"));
}
;
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love HTML");

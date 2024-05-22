//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, 
// and a method describe() that logs a sentence about the laptop.
var laptop = {
    maker: "hp",
    model: "HP EliteBook Folio 1040 G3",
    year: "2020",
    describe: function () {
        console.log(" This laptop is ".concat(laptop.maker, " of model ").concat(laptop.model, " in year ").concat(laptop.year));
    }
};
console.log(laptop); // print the entire object
laptop.describe(); // print function "describe" of object
console.log(laptop.year); // print  value of 'maker'
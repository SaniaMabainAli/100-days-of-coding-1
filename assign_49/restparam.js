//Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function restParameter() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (hobby) {
        return console.log("You really enjoy ".concat(hobby));
    });
}
restParameter("reading", "swiming", "coding", "painting");

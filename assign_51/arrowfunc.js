// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
var arrowFunc = function (Length, width) {
    var area_of_rectangle = Length * width;
    return area_of_rectangle;
};
console.log("Area of Rectangle = ".concat(arrowFunc(5, 4)));
// Refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };

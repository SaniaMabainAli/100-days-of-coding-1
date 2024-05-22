// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.



let arrowFunc = (Length : number, width : number)  : number =>{  
    let area_of_rectangle = Length * width
    return area_of_rectangle
}

console.log(`Area of Rectangle = ${arrowFunc(5 , 4)}`)




// Refactored into an arrow function
// let calculateAreaArrow = (width: number, height: number): number => width * height;


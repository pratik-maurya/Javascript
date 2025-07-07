// Area of rectanle = length * width;
function area(length, width) {
    if (length <= 0 || width <= 0) {
        console.log("Invalid input: Length and width must be positive numbers.");
        return;
    }
    let area = length * width;
    console.log("The area of the rectangle is: " + area);
}
area(0, -798)
area(100, 798)
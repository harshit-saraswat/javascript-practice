// Calculate Rectangle Area
function getArea(length, width) {
    let area;
    // Write your code here
    area=length*width;
    return area;
}

// Calculate Rectangle Perimeter
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter=2*(length+width);
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
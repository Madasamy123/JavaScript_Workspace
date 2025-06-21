thiru murugan
7:43 AM
// // Objects and Array


// Arrys///


// let arr = [1, 2, 3, 4, 5];

// // Accessing elements
// console.log(arr[0]); // 1

// //removing elements
// arr.pop(); // Removes the last element
// console.log(arr); // [1, 2, 3, 4]
// arr.shift(); // Removes the first element
// console.log(arr); // [2, 3, 4]

// // Adding elements
// arr.push(6); // Adds 6 to the end
// console.log(arr); // [2, 3, 4, 6]
// arr.unshift(0); // Adds 0 to the beginning
// console.log(arr); // [0, 2, 3, 4, 6 ]

// //fin
thiru murugan
7:45 AM
// //finding elements
// console.log(arr.indexOf(3)); // 2 (index of element 3) //-1
// console.log(arr.includes(5)); // false (checks if 5 is in the array)


// // Iterating over an array
// arr.forEach((element, index) => {
//   console.log(`Element at index ${index}: ${element}`);
// });

// //iterete by index
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Element at index ${i}: ${arr[i]}`);
// }

// //iterateby element
// for (const element of arr) {
//   console.log(`Element:
// //iterateby element
// for (const element of arr) {
//   console.log(`Element: ${element}`);
// }

// // Mapping an array returns a new array with the results of calling a provided function on every element in the calling array.
// const doubled = arr.map((element) => element * 2);

// //filtering an array returns a new array with all elements that pass the test implemented by the provided function.
// const evenNumbers = arr.filter((element) => element % 2 === 0);


//  find the dublicate nu
//  find the dublicate numbers in an array
const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const duplicates = numbers.filter((item, index) => numbers.indexOf(item) !== index);
console.log(duplicates); // [1, 2, 3, 4, 5]


let array = [1, 2, 3, 4, 5];
// 12%array.length 2

// right rotate
// 1=> [5, 1, 2, 3, 4]

// 2=> [4, 5, 1, 2, 3]

// 3=> [3, 4, 5, 1, 2]

// 4=> [2, 3, 4, 5, 1]

// 5=> [1, 2, 3, 4, 5]

// [1,2,3,4,5]
// left rotate
// 1=> [2, 3, 4, 5, 1]
// 2=> [3, 4, 5, 1, 2]
// 3=> [4, 5, 1, 2, 3]
// 4=> [5, 1, 2, 3, 4] 
// 5=> [1, 2, 3, 4, 5]
thiru murugan
8:03 AM
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    static species() {
        console.log("Humans belong to the species");
    }
}
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }
    // Overriding the greet method
    greet() {
        console.log(`Hello, my name is ${this._name}, I am ${this.age} years old and I work as a ${this.position}.`);
    }
}
thiru murugan
8:07 AM
// This code defines a class `Car` with a getter and setter for the `carInfo` property.
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    get carInfo() {
        return `${this.brand} ${this.model}`;
    }
    
    set carInfo(info) {
        const [brand, model] = info.split(" ");
        this.brand = brand;
        this.model = model;
    }
}


let car1 = new Car("Toyota", "Corolla");
console.log(car1.carInfo); // Toyota Corolla
let car1 = new Car("Toyota", "Corolla");
console.log(car1.carInfo); // Toyota Corolla
car1.carInfo = "Honda Civic";
console.log(car1.carInfo); // Honda Civic

car1.brand = "Ford";
car1.model = "Focus";

console.log(car1.carInfo); // Ford Focus
thiru murugan
8:20 AM
String.prototype.some = function() {
    console.log("Hello from String prototype method");
}

let str = new String("Hello");
str.some(); // Output: Hello from String prototype method
// exteds  Array Class


class myArray extends Array {
    constructor(...args) {
        super(...args);
    }

    // Method to get the last element of the array
    last() {
        return this[this.length - 1];
    }

    // Method to get the first element of the array
    first() {
        return this[0];
    }

    // Method to get a random element from the array
    random() {
        return this[Math.floor(Math.random() * this.length)];
    }
}

// Example usage
const arr = new myArray(1
// Example usage
const arr = new myArray(1, 2, 3, 4, 5);
console.log(arr.last());   // Output: 5
console.log(arr.first());  // Output: 1
console.log(arr)
arr.push(6);
console.log(arr.toLocaleString())
console.log(arr)
thiru murugan
8:27 AM
response = {
    status: 200,
    data: null
}
try {

    let res = AbortController.getresponse(); // This will throw an error if not defined
    response.data = res;
}
catch (error) {
    console.error("An error occurred:", error.message);
    response.status = 500; // Set an error status
    response.data = error.message; // Clear data on error
}
finally {
return response;
}
thiru murugan
8:54 AM
function arraryRotate(arr, rotation) {

    // find the effective rotation
    rotation = rotation % arr.length;
    
    // if rotation is negative, convert it to positive equivalent
    if (rotation < 0) rotation += arr.length;

    const rotatedArray = [];

    for (let i = arr.length-rotation; i < arr.length; i++) {

        rotatedArray.push(arr[i]);
    }
    for (let i = 0; i < arr.length-rotation; i++) {
        rotatedArray.push(arr[i]);
    }
    return rotatedArray;
}
function rightRotate(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
}

function leftRotate(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let first = arr.shift();
        arr.push(first);
    }
}
function rotate(arr, rotation) {
    // find the effective rotation
    rotation = rotation % arr.length;
    if (rotation > 0) {
        rightRotate(arr, rotation);
    } else {
        leftRotate(arr, -rotatio
hnx-dnkx-gqe
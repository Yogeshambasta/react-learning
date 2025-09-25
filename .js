console.log("Hello, Welcome to my page");

// variables 

fullName = "Yogesh Ambasta";
age = 24;
roll = 10;
console.log(roll);
x = null;
console.log(x);
y = undefined;
isFollow = true;
console.log(isFollow);

// let, const & var keywords

let name = "tony";
let age = 26;
age = 34;
console.log(name)
console.log(age)

const PI = 3.14;

// datatypes

let no = 33;
let price = 100.65;

fullName = "aman";

let x;
let y = null;

let z = BigInt("1234");
let u = Symbol("hello");

//objects
// it is a collection of values

const student = {
    fullName : "rahul kumar",
    cgpa : 8.5,
    age: 20,
    isPass: true,
};

console.log(student["age"]);

// operators

let a = 10;
let b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  
console.log(a ** b); 

// Logical Operators

let agee = 20;

console.log(age > 18 && age < 30); 
console.log(age > 18 || age < 18); 
console.log(!(age > 18));  

// functions

function myFunction(){
    console.log("Hello")
}

function greet(name) {
  return `Hello, ${name}!`;
}

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Yogesh")); // Hello, Yogesh!

// import & export 

// Default export
// file: Header.js
import React from "react";

export default function Header() {
  return <h1>This is the Header</h1>;
}

// Named export
// file: Footer.js
import React from "react";

export function Footer() {
  return <h3>This is the Footer</h3>;
}

// Import default export
// file: App.js
import React from "react";
import Header from "./Header";   // no {} needed

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

// Import named export
// file: App.js
import React from "react";
import { Footer } from "./Footer";   // {} required

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;

// Mixing default + named
// file: Layout.js
import React from "react";

export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export function Sidebar() {
  return <aside>Sidebar</aside>;
}

// file: App.js
import React from "react";
import Layout, { Sidebar } from "./Layout";

function App() {
  return (
    <Layout>
      <Sidebar />
      <h1>Main Content</h1>
    </Layout>
  );
}

export default App;


// Used for mathematical operations.

let x = 10;
let i = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// Assignment Operators


let x = 5;

x += 3;  
x -= 2;  
x *= 4;  
x /= 6;  
x %= 3;  

// Logical Operators


let age = 20;

console.log(age > 18 && age < 30); // true (AND)
console.log(age > 25 || age < 18); // false (OR)
console.log(!(age > 18));  //  false (NOT)

// Function definition with parameters (a, b)
function addNumbers(a, b) {
  return a + b;
}

// Function call with arguments 
console.log(addNumbers(5, 7)); 

// Function with Default Parameter
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Yogesh");  
greet();         

// Function with Multiple Parameters
function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
}

console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-")); 

// An arrow function in JavaScript is a shorter and cleaner way to write functions, introduced in ES6 (ECMAScript 2015).
// It uses the => ("arrow") syntax.

// syntax

const functionName = (parameters) => {
  // function body
};

// // Normal function
function add(a, b) {
  return a + b;
}

// Arrow function (shorter)
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); 

// Arrow Function with One Parameter
const greet = name => `Hello, ${name}!`;

console.log(greet("Yogesh")); 

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))


// objects and classes

class railwayForm {
  submit(){
    alert("form submitted")
  }
  cancel(){
    alert("This form is Cancelled")
  }
}

let yogesh = new railwayForm()
let ankit = new railwayForm()

yogesh.submit()
ankit.submit()
ankit.cancel()



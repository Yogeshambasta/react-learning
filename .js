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

// end

// hello!
// end2


// arrays
// Using array literal
let fruits = ["apple", "banana", "mango"];
console.log(fruits); 

// Using Array constructor
let numbers = new Array(1, 2, 3, 4);
console.log(numbers); 

// Empty array
let emptyArr = [];
console.log(emptyArr); 

//Common Array Methods
// Adding & Removing Elements
let colors = ["red", "green", "blue"];

// push() - add to end
colors.push("yellow");
console.log(colors); 

// pop() - remove from end
let lastColor = colors.pop();
console.log(lastColor); 
console.log(colors); 

// unshift() - add to start
colors.unshift("purple");
console.log(colors); 

// shift() - remove from start
let firstColor = colors.shift();
console.log(firstColor); 
console.log(colors); 

// splice and slice

let numbers = [10, 20, 30, 40];

// slice(start, end) - returns a portion (does not modify original)
let part = numbers.slice(1, 3);
console.log(part); 

// splice(start, deleteCount, items...) - modify original array
numbers.splice(1, 2, 25, 35);
console.log(numbers); 

// length - get number of elements
console.log(numbers.length); 

// convert string uppercase with map() method

let fruits = ["apple", "banana", "mango"];

let upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits); 

// basic syntax

let newArray = array.map(function(currentValue, index, array) {
    // return the new value for the new array
});

// Arrow Function Syntax
let newArray = array.map((currentValue, index, array) => {
    // return the new value
});


// spread and rest operator

//example rest

function addNumbers(a,b,c,...other){
  console.log(other[1])
  return a+b+c;

}

const result = addNumbers(2,5,6,8,9)
console.log(result)

// spread

var names = ["ajay","ankit","yogesh"];
function getNames(name1,name2,name3){
  console.log(name1,name2,name3)
}
getNames(names[0],name[1],names[2])
getNames(...names)

// functions inside functions


function outerFunction() {
  console.log("This is the outer function.");

  function innerFunction() {
    console.log("This is the inner function.");
  }

  // Calling inner function
  innerFunction();
}

// Call outer function
outerFunction();

// Two-Way-Binding

// app.js

import React from "react";
import Review from "./components/Review";

export default function App() {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredFeedback, setEnteredFeedback] = React.useState("");

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }

  function handleFeedbackChange(event) {
    setEnteredFeedback(event.target.value);
  }

  return (
    <div>
      <section id="feedback">
        <h2>Share your Feedback</h2>
        <input
          type="text"
          placeholder="Your Title"
          value={enteredTitle}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Your Feedback"
          value={enteredFeedback}
          onChange={handleFeedbackChange}
        />
        <button>Save</button>
      </section>

      <Review title={enteredTitle} feedback={enteredFeedback} />
    </div>
  );
}

// review.js

// src/components/Review.js
import React from "react";

export default function Review({ title, feedback }) {
  return (
    <figure className="review">
      <figcaption>
        <h2>{title}</h2>
      </figcaption>
      <p>{feedback}</p>
    </figure>
  );
}

// one way binding

import React, { useState } from "react";

function OneWayBinding() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h2>Hello, {name}</h2>
      {/* Here UI changes don’t affect state directly */}
      <input value={name} readOnly />
    </div>
  );
}

export default OneWayBinding;

// two way binding

import React, { useState } from "react";

function TwoWayBinding() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Hello, {name}</h2>
      
      {/* Input value comes from state, 
          onChange updates the state when user types */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default TwoWayBinding;

// end 03.10



// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (x,y,cb) {
  return cb(x,y);
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

// Everything after the callback argument becomes the consume parameter in the add funtion
// Because of that we can invoke it like a function. Calback is a callback to watever we invoke or show first as an argument that is a callback funtion.
// consume parameter will become an anonymous function, this argument. 
// That achieves the callback function, anytime you pass a function to another function as an argument, 
// That function will become a callback, It can be invoked later. 

// SUM of two numbers
const add = (x,y,cb) => {
  return(x+y);
};
add(8, 20, sum =>{
  console.log(`The sum is ${sum}`)
});

//Product of two numbers
const multiple = (x,y,cb) => {
  return(x*y);
}; 
multiply(8, 20, multiply =>{
  console.log(`The product is ${multiply}`)
});

//Greeting that returns "Hello first-name last-name, nice to meet you!"
const greeting = (first_name, last_name, cb) => {
 return("first_name + last_name"); 
  }
  //greeting(John, Jacob, greeting) => {
  
  console.log(`Hello ${greeting}, nice to meet you!`)
  



/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//Two - pass compilers ??? 
//
// 1. Define all funciton declarions 
// nestedFunction, myFuntion. Found all the functions
// 2. It goes into nesting and locates all the references.
// (internal) Found all the references - internal looks in its own function nestedFunction to find the value of internal and if it's not there 
// it looks outside the function and goes to myFunction to find the value of (internal), and grabs the value of (internal) which is ""Hello! I'm inside myFunction!""
// This means (internal)'s lexical scope belongs to myFunction. Thats where it was initially deifned. Where it was originated initially. 
// That initial belonging gives (internal) a home base. Inner environment references the outer environment that surrounds it. 
// It's like an Onion, every subsequent layer below is nested within.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
### The Complete JavaScript Course 2024

#### Course link--> https://www.udemy.com/course/the-complete-javascript-course/

- ES6 --> 2015
- Console is just an environment to show results immediately
- Camel case naming convention
- Reserve key words not allowed in JS
- not with capital letter but for OOP
- Constants Capital letter for constants
- Descriptive
- in JS type of value not variable
- Object and primitive(number or float, strings, boolean, undefined, null, symbol-->ES2015, Bigint)
- --> typeof operator
- variable declaritions with let var const
- but for dynamic typing do not use let again.
- typeof null --> object --> bug in JS
- let --> mutate later, const --> immutable values, var --> mutate later
- arithmetic operators, + for concatenate strings, Assignment operator--> = += \*= ++ --
- ">, <, =<, >=" --> true or false,
- mdm docs --> Operator precedence --> some executes right to left and some left to right
- Tempelate literal --> `${}` for better handling strings effectively, `` for every string, multiple line strings.
- Control statements --> if(){}, else{}, variables define in a block of code do not have global access.
- Type coercion --> conversion(manualy) new converted version not the original one and NaN, and coercion(automatically) --> when in an operation one 2 values has different types then the JS behind the scenes and operator like + for type coercion
- 5 falsy value --> 0, '', undefined, NaN, null
- and -,\*,/ in the case converts to numbers
- typeof NaN is number
- Functions --> capital letter
- Truty and Falsy value give us a boolean value to play with.
- NOT ! is more percedened than AND,&& and OR,||
- Switch statement: with break and default value
- expression --> produce a value str & int, statement --> not produces a value some actions ";"
- Conditional operator: ? :, Ternary operator is a expression and it has three parts.
- if a variable is assigned in ablock is not accessable outside of the block.
- Ternary operator can be used for --> declaring variables dynamically, and in tempelate literal.
- a single statement execution.
- ECMA script, ES6 backward compatible to ES1.
- Releases of JS, Babel --> Transpile and polyfilling,
- ES5 as transpilling target
- ES6+(ES6 to 2020) not supported in older browsers.
- ES2021(infinity)
- "Use strict" --> to strict us from making bugs with varibale names and reserved key words.
- Functions --> for reusable code and as machines that gives us data nad we can pass data to it.
- Function expression(Anonymous functions) work same as function declarations but can be store in a container.
- Function is just a expression which produces a value
- In Js you can call functions before its declarations but function expression can not be called before their intializations.
- in ES6 --> Arrow function just like function expression --> shorter.
- The main difference between Arrow function vs function declarations and function expression is that the arrow function does not get "this" keyword.
- function calling other functions.
- kindly accept DRY principle.
- console.log is not return at the end just a log in the console.
- you can not pass function as parameter to arrow functions.
- only primitive values that we declare with const can not be mutated but cosnt with other datatypes can be mutated.
- Array methods --> push method and it returns the length of new array.
- unshift method, pop menthod this with out any argument and it returns the removed element, shift method to remove from the start and with no arguments.
- indexof method, includes method returns a boolean value with strict qulaity.
- objects --> key value pair or property.
- object literal context, order of retrieving values do not matter.
- dot notation, bracket notation ["expression"] or computed notation.
- when property not exist then it return undefined.
- . and ['string'()] both are high priority and work left to right.
- object methods --> we can add functions to objects.
- in object's property can hold a function as it is a expression for creating methods.
- method is property that holds a function as a value.
- this --> gives us the access of that object.
- we can make new property with this.property and can access that through dot operator.
- arrays are also object because we can use methods on top of them.
- for (while condition is true), continue, break
- while
- console.log, console.warn, console.error, comsole.table, debugger.
- - selector in css global one.
- Dom manipulation --> queryselector.
- event listners-> for listening events we use addEventListener('eventname',eventhandler())

# Interview Notes

DOM: Travewrsing, updating, re-rendering.
An event listener is a function or a method that listens for and responds to events. It is used to handle actions such as user interactions (clicks, typing, etc.)
element.addEventListener(eventType, callbackFunction, useCapture);
button.addEventListener('click', handleClick);
bubbles up to the root.
Click: Triggered when an element is clicked.
Submit: Triggered when a form is submitted.
Keydown: Triggered when a key is pressed down.
Mouseover: Triggered when the mouse pointer moves over an element.
Load: Triggered when a resource (e.g., an image or the window) is fully loaded.
getelementbyid(), getelementbyclassname(), getelementbytagname(), querySelector(selector), querySelectorAll(selector),

JS:
Everything in Js happens in a execution context --> in key value pair.
(variable component --> memory, code --> thread of execution)
synchrons single threaded language.

Memory creation phase --> in this phase define variables in the memory component with undefined, and stores whole code of function with their key:value pair.
when function invokation happens it creates a new execution context and memory is allocated to parameters and variables inside of function.
return the control of the program where the function is invoked and the execution context is deleted.
and then at the end the whole GEC is deleted.
call stack--> when the context is deleted new execution context is put into the call stack.
call-stack maitains the order of execution of execution context.

Hoisting: if you want to access variables and functions before Initialize it then this is called.
variables are undefined, and functions has the whole code in it.
in arrow functions it behaves like an variable so it gets an error.
but for proper function declarations we get the function.

js look for value in that EContext.
window is an object which is created with GEC -->
this keyword: this points to the window object and also to window(Global)
variables attach to global object.

JavaScript: a synchronously single threaded language.
js has a callstack and 1 thing execute at a time.
Global execution context put into the callstack.
if a function is executed then another GEC is put into the call stack.
if something comes in the callstack then it executes instantly.
browser is powerfull it has timer, local storage and many other.
for accessing web browser features we use web api.
settimeout()
DOM APIs
fetch()
local storage
console
location
we can use web apis through window(Global object).
when an callbackFunction executed then it first goes to callbackqueue then the event loop put the callbackFunction in the callstack
and it monitores callstack and callback queue.
multiple clicks example.
fetch() --> request a api call, returns a promise and when that promise resolves then callback() function executes
We have a microtask queue(higher priority) and the callbacks that are come from promises and mutations observer.
when in a microtask queue the tasks increases and there will never be a chance to excute the callback from the callbackqueue this is called starvation.

lossely typed language.

undefined --> placeholder, taking memory-->not empty.

Scope chain: where you can access variable or a function.
Lexical(means in sequence) scope: when ever an execution context created a lexical environment is created. lexical environment is local memory and it also has environment of it's parent and it's parent this is called scope chain. Physically present.
in GEC --> the lexical environment is pointing to Null.

let & const are hosited: in the temporal dead zone.

var: is accessabe and hoisted and with the GEC.
let and const is also hoisted but not with GEC but in Temporal dead zone--> time from it initilized and assign a value, and cannot access in the temporal dead zone.

you can redeclare and initalize again var, not let
but can not do const.

systax(redeclarations), reference(tries to find variable), type(cosnt type) --> errors.

Block: Compound statement {}, combining multiple js statement into a group and where js expects 1 statement.
block scope(let and cosnt).

shadowing: same name varibale shadowed each other, var got changed points to changed varaible
let is of block scope and shadows from temporal dead zone.
const is of block scope

illegal shadowing : let to var

legal shadowing: let to let in block scope.

block has lexical scope chain pattern.

function is block scope.

closure: a function bind together with it's lexical environment, data hiding

you can return a function and when it's returned it remembers it's lexical scope reference means returns closure.
nesting functions are closures.

settimeoutexample --> stores function with a timer.
let is blocked scoped and its bind to new copy.
with var you can use closure.

function statment or declaration, expression(not hoisted) ,

Anonymous function: it does not have it's own identity, and it uses as a value,

named function assigned to variable and is called named function expression.

arguments vs parameters.

first class functions --> functions are treated as values. as arguments and returning that.

a function passed into a another function is a callback for async things.

call stack is the main thread.

event listeners are also callback function. callback function is handler.

event listners is computation heavy and closures. and we remove at the end.

Js run time environment--> api's, event loop, js engine, queues.

js engine -->
parsing --> converts to abstract syntax tree.
compilation --> JIT compiler. (both interpreter and compiler)
execution --> from interpreter it converts and optimized by compiler on runtime it converts to byte code.
it has call stack and memory heap(assigned memory to variables and functions).
Garbage collector --> clears memory by mark& sweep algorithm.

settimeout(){}: date api and Concurrency model and do not block the main thread.

Higher order functions: a function takes an another function as an argument or return a funtion is called HOF.

modular code. array.protype.element --> for all array.

in higher order fucntion like map, reduce(func(accumulator,current),intial value), filter and pass fucntion into that.
const output = users.map((x)=> x.firstname + x.lastname);
const output = users.reduce((x)=>(acc,curr){
acc =  
if{acc[curr.age]}
{acc[curr.age] = ++acc[curr.age]}else
{acc[curr.age] = 1}}),{});
const output = users.filter((x)=>{
if(x.age>30){return x.name}
})
const output = users.filter((x) => x.age>30).map((x)=> x.firstname)

callback hell(pyramid of doom)-->
function passing to another function is called callbacks and for async operations we use it.
one call back to another callback and it grows horizontaly.
inversion of control-->
lose control of our code basically we give our function code control to some other code.

Promises:
it is used to handle async operations. it is an object{data:undefined} at that moment and after sometime it filled.
we can attach a callback funcrtion to a promise --> promise.then(callback).
in callbacks we are passing a function and in promises we attach a callback to a promise object when there's a data in it and call it only once.
fetch() api gives us a promise.
promise{promisestate-->pending.fullfiled.rejected,promiseresult-->data(readable stream} this are immutable
initially the promise in pending state but when all the data arrives it converts to fullfilled state.
promise spatial object brings a garantee that this object only resolved once.

- placeholder which will be filled at a later time, object which will be filled untill we recived a value from async operation. A promise is an object represeting the eventual completion or failure of an async object.
  promise chaining and must return.

for creating a promise we use new Promise(function(resolve, reject){logic})--> constructor.
.catch(failure callback)

Promise chaining. when we returning promises in chain web should return the previous promise.

Promise API's:

- promise.all().
- promise.allsettled().
- promise.race([])
- promise.any()

promise.all([] or iterable): for parallel api calls, multiple promises, return an array[result1,result2,result3]
and waited them all of them to finish. if any one of them gets rejected or failed the promise.all() returns failure.
promise.allsettled([]): if one of the api fails but we want to get all other promises settled then this is used.
promise.race([]): the promise which returns the fastest settled promise -->(one value) only one value
promise.any(): the first one to be successfull promise it will returned. if all the fails --> aggregated error[allerrors]--> not default but you have to make an array.

Async await: used before a function to make it async.
Always return a promise or if any other value then it always return a promise
async await used to handle promises. use
const val = await promise.
await is a keyword use inside a async function.
in the async await case the js wait for the promise to be resolved or settled and then the other things execute.
if first promise takes 10 sec and the other takes 5 sec then it waits for 10 then prints all at once.
if resolving a promise with await it suspends the function execution and put it out of the main thread and after resolved and it comes in the main thread.

fetch() is a promise response object response.json() => json value.

when you have an async code wrape it in inside a try catch.

async await is like a syntactic sugar.
(.catch() => console.log)
by async await we do not do promise chaining.

Note: this substitution: if this == undefined or null replaced by global object in non strict mode.
This keyboard:
global spcae: window has global object.
in function: behaves differently in strict(undefined) and non strict mode(window).
also depends on how this is called: x()--> defined, window.x() --> window, x()--> non strict mode --> window, inside an object then it gives the whole object,
arrow functions: enclosing lexical context.
DOM element: reference to html element.

call(), apply(), bind() --> sharing methods with different objects, student.printname.call(student2);
bind basically copy the method and return us that.

object: array is an object.
properties and methods and build in ones.
new string('') --> constructor.
encapsulation, class Name{
constructor(parameters){
this.parameters
}
methods(){}
}
classes are just syntactical sugar.
prototype: every object has. like a map. only constructors has prototype property.
apply(this, args)
Admin.prototype= object.create(user.prototype)

all objects in js are linked to an prototype(all objects that are linked to that prototype can access its methods and data).
instance inheriting from a class --> prototypal inheritance.

behavior of the object is delegated to the prototype object.

array is delegated its bejavior to its prototype.

Constructor function
ES6 classes --> styntatic sugar.
object.create

constructor function with new operator.
arrow functions does not have their own this keyword.
new -->

1. empty object
2. this binds with {}
3. linked to protype
4. return {}
   instances from a constructor function.
   every function in js has a property know as prototype and constructor has a prototype
   we should never do functions inside an constructor function because everytime we instantiate every object has that function
   so for that prototype inheritance and when an object is created it has access to functions through the constructor prototype

--> prototype chain. and the object linked to that constructors protype is **prototype** : Constructor.prototype
object.prototype.constructor --> constructor function

Constructor.prototype is also a {} and every object in js also has a prototype and the constructor.prototype's prototype is object.prototype --> constructor.objects() --> null

protype inheritance is used by all the data types for accessing methods from their objects project function.

In ES6 class keyword introduced. it works behind the scenes with prototype inheritence and there are class expressions and class declarations.

constructor() --> should name this.

functions that we create outside of construtor is just with out prototypal inheritance syntax.

classes are not hoisted, are first class citizens, strict mode.

Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays, objects, and other data structures and assign them to variables in a concise way

getters(get) and setters(set): accessors properties of an object but implemented as a function and can have the same name.

Static methods in JavaScript are methods that are defined as part of a class or object, but are called on the class itself rather than on instances of the class. and "this" returns is constructor function. and static before function. Array.from()

object.create --> implemented a prototype function and implement methods --> object.create(prototype)

create functions or behaviors with prototype inheritance and every instance can have that method.
and **proto** == Constructor.protype(--< this is not the prototype of a function but all the instances created from the the this functions's prototype)

you can set data on a prototype.

in regular function call the "this" = undefined
constructor.call(this,paramters)
inheritance:
when we make child class we pass the same parameters with additional ones.
and setting prototype chain. means we want to set childclass prototype property to its parent class prototype
and we use object.create(prototype)
--------------> childclass.protype = object.create(parentclassprototype)
we should implement additional behavior after connection because it overwrites it.
methods lookup in the protype chain.

every object has a prototype and the child class prototype should equals to the parent class prototype.

js use first one prototype function --> overriding
parentclass.call()
childclass = object.create(parentclass.prototype)

















AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create dynamic and interactive web applications. It allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that parts of a web page can be updated without having to reload the entire page.

### Key Concepts of AJAX:

1. **Asynchronous**:

   - AJAX requests are asynchronous, meaning they do not block the execution of JavaScript code while waiting for a server response. The user can continue interacting with the page while the request is processed.

2. **Data Formats**:

   - Although originally named for XML, AJAX is not limited to XML. It can use various formats for data exchange, including JSON (most common), HTML, plain text, and even XML.

3. **Key Technologies Involved**:
   - **JavaScript**: The scripting language used to make AJAX requests and handle the response.
   - **XMLHttpRequest (XHR)**: An API available in web browsers that is used to send HTTP or HTTPS requests to a server and receive a response.
   - **DOM (Document Object Model)**: Allows JavaScript to dynamically update the content, structure, and style of a web page.
   - **JSON**: A lightweight data format often used to transmit data between server and client.

### How AJAX Works:

1. **User Action**: A user action (like clicking a button or submitting a form) triggers an event in the browser.
2. **AJAX Request**: JavaScript creates an `XMLHttpRequest` object and sends a request to the server.
3. **Server Processing**: The server processes the request and sends back a response, typically in JSON or XML format.
4. **AJAX Response**: The browser receives the response and JavaScript processes it.
5. **DOM Update**: JavaScript updates the webpage content dynamically based on the server’s response, without reloading the entire page.

### Example of a Simple AJAX Call:

```javascript
// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the function to be executed when the server response is ready
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById("myDiv").innerHTML = xhr.responseText;
  }
};

// Initialize the request
xhr.open("GET", "data.txt", true);

// Send the request to the server
xhr.send();
```

In this example:

- A request is sent to `data.txt` on the server.
- When the server responds, the content of `data.txt` is inserted into the HTML element with the ID `myDiv`.

### Benefits of AJAX:

- **Faster Interactions**: Only necessary data is sent and received, leading to faster updates.
- **Improved User Experience**: Pages feel more responsive as they do not require a full reload.
- **Reduced Server Load**: Less data is transferred, and only the necessary information is processed.

### Common Use Cases:

- **Form Validation**: Validate form inputs on the server without a page refresh.
- **Auto-Save**: Save user inputs automatically in the background.
- **Infinite Scrolling**: Load additional content as the user scrolls down the page.
- **Real-Time Updates**: Display real-time data, like stock prices or news feeds, without reloading the page.

AJAX is a fundamental technique in modern web development, enabling more interactive and efficient web applications.



const sayHello = function (name = "Edgar") {
    console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
sayHello();


const sayHelloToConsole = function (name) {
  console.log("Hello, " + name)
}
sayHelloToConsole("john");

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);
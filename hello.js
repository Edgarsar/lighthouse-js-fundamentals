const sayHello = function() {
  console.log("Hello, world");
}

sayHello();

const sayHello = function (name = "edgar") {
    console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
sayHello();
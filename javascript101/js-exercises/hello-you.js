function hello(name) {
  console.log("Hello, " + name + "!");
}

function hello2(name) {
  if (name == undefined) {
    console.log("Hello, world!");
  } else {
    console.log("Hello, " + name + "!");
  }
}

hello("Sherri");
hello2();
hello2("Sherri");

const player = {
  name: "mogi",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);
console.log(player["fat"]);

player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
console.log(player.points);

console.log("Hello my name is Mogi");
console.log("Hello my name is Mogi");

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("mogi", 10);
sayHello("abcd", 23);
sayHello("nico", 21);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(3, 60);
divide(98, 20);

const playe2 = {
  name: "mogi",
  sayHello: function (otherPersonsName) {
    console.log("hello!" + otherPersonsName + " nice to meet you");
  },
};

player2.sayHello("lynn");
player2.sayHello("mogi");

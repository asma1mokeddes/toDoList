const User = require("../user.js");
var validator = require("email-validator");
const ToDo = require("../toDo");

describe("test valid user", () => {
  it.only("Test if a user is valid", () => {
    let user = new User(
      "Asma",
      "MOKEDDES",
      "asmao@pmail.com",
      new Date().getFullYear() - 40,
      "Mkdsdsdsds1"
    );
    expect(user.isValid()).toBe(true);
  });

  it.only("Test todoList creation with a valid user who already have a todoList", () => {
    let user = new User(
      "Asma",
      "MOKEDDES",
      "asmao@pmail.com",
      new Date().getFullYear() - 40,
      "Mkdsdsdsds1"
    );
    user.todoList = new ToDo();
    expect(() => user.createTodo()).toThrow(
      /^Cannot create a Todo. You already have one.$/
    );
  });
});

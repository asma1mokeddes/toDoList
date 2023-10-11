const emailValidator = require("email-validator");
const ToDo = require("./toDo");

class User {
  constructor(firstname, lastname, email, birthday, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthday = birthday;
    this.password = password;
    this.todoList = null;
  }

  isValid() {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    const isEmailValid = emailValidator.validate(this.email);
    const isValidPassword = regexPassword.test(this.password);
    const isAgeValid = new Date().getFullYear() - this.birthday >= 13;

    // Validation des prénoms/noms
    const isNameValid =
      this.firstname.trim() !== "" && this.lastname.trim() !== "";

    // Retourne true si toutes les conditions sont satisfaites
    return isEmailValid && isValidPassword && isAgeValid && isNameValid;
  }

  createTodo() {
    if (this.isValid() && this.todoList === null) {
      this.todoList = new ToDo();
    } else {
      console.log("ELLSEEEEE");
      throw new Error("Cannot create a Todo. You already have one.");
    }
  }
}

module.exports = User;

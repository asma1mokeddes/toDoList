const emailValidator = require("email-validator");

class User {
  constructor(firstname, lastname, email, birthdate, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
    this.password = password;
  }

  isValid() {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    const isEmailValid = emailValidator.validate(this.email);
    const isValidPassword = regexPassword.test(this.password);
    const isAgeValid = new Date().getFullYear() - this.birthdate >= 13;

    // Validation des prénoms/noms
    const isNameValid =
      this.firstname.trim() !== "" && this.lastname.trim() !== "";

    // Retourne true si toutes les conditions sont satisfaites
    return isEmailValid && isValidPassword && isAgeValid && isNameValid;
  }
}

module.exports = User;

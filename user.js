const emailValidator = require('email-validator');

class User {
  constructor(firstname, lastname, email, birthdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
  }


  isValid() {
    const isEmailValid = emailValidator.validate(this.email);
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    const isDateValid = dateFormatRegex.test(this.birthdate);
    const isAgeValid =  new Date().getFullYear() - new Date(this.birthdate).getFullYear() >= 13;

    // Validation des prénoms/noms
    const isNameValid = this.firstname.trim() !== "" && this.lastname.trim() !== "";

    // Retourne true si toutes les conditions sont satisfaites
    return isEmailValid && isDateValid && isAgeValid && isNameValid;
  }
}

module.exports = User;

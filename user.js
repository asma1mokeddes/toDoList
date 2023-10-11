const emailValidator = require("email-validator");

class User {
<<<<<<< HEAD
  constructor(firstname, lastname, email, birthday, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthday = birthday;
=======
  constructor(firstname, lastname, email, birthdate, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
>>>>>>> 49d0ce9b6d908decc1725419493926ae51de876e
    this.password = password;
  }

  isValid() {
<<<<<<< HEAD
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    return this.firstname && this.lastname && regex.test(this.email);
  }

  //   isValidEmail() {
  //     // Expression régulière pour vérifier le format d'un email
  //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     // Teste si l'email correspond à l'expression régulière
  //     return emailRegex.test(this.email);
  //   }

  //   isValidAge() {
  //     const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  //     if (!dateFormatRegex.test(this.birthday)) {
  //       return false;
  //     }

  //     const today = new Date();
  //     const birthday = new Date(this.birthday);

  //     return today.getFullYear() - birthday.getFullYear() >= 13;
  //   }

  //   isValidNameOrFirstName() {
  //     return this.firstname !== "" && this.lastname !== "";
  //   }
=======
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    const isEmailValid = emailValidator.validate(this.email);
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    const isValidPassword = regexPassword.test(this.password);
    const isValidDate = dateFormatRegex.test(this.birthdate);
    const isAgeValid =
      new Date().getFullYear() - new Date(this.birthdate).getFullYear() >= 13;

    // Validation des prénoms/noms
    const isNameValid =
      this.firstname.trim() !== "" && this.lastname.trim() !== "";

    // Retourne true si toutes les conditions sont satisfaites
    return (
      isEmailValid &&
      isValidDate &&
      isValidPassword &&
      isAgeValid &&
      isNameValid
    );
  }
>>>>>>> 49d0ce9b6d908decc1725419493926ae51de876e
}

module.exports = User;

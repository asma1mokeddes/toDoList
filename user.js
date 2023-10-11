class User {
  constructor(firstname, lastname, email, birthdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
  }

  isValidEmail() {
    // Expression régulière pour vérifier le format d'un email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Teste si l'email correspond à l'expression régulière
    return emailRegex.test(this.email);
  }

  isValidAge() {
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateFormatRegex.test(this.birthdate)) {
      return false;
    }

    const today = new Date();
    const birthDate = new Date(this.birthdate);

    return today.getFullYear() - birthDate.getFullYear() >= 13;
  }

  isValidNameOrFirstName() {
    return this.firstname !== "" && this.lastname !== "";
  }

  isValid() {
    return this.isValidEmail() && this.isAge() && this.name();
  }
}

module.exports = User;

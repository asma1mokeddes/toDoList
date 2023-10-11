class User {
  constructor(firstname, lastname, email, birthday, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthday = birthday;
    this.password = password;
  }

  isValid() {
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
}

module.exports = User;

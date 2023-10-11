const User = require("../user.js");
var validator = require("email-validator");

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

  //   it.only("Email doesnt have the good format must be true", () => {
  //     let user = new User("", "", "asma   uyopmail.com", "");
  //     expect(user.isValidEmail()).toBe(false);
  //   });

  //   it.only("User name is true", () => {
  //     let user = new User("", "MOKEDDES", "", 21);
  //     expect(user.isValidNameOrFirstName()).toBe(false);
  //   });

  //   it.only("User name is true", () => {
  //     let user = new User("Asma", "MOKEDDES", "", 21);
  //     expect(!user.isValidNameOrFirstName()).toBe(false);
  //   });

  //   it.only("AGE", () => {
  //     let user = new User("Asma", "MOKEDDES", "", "2017-03-17");
  //     expect(user.isValidAge()).toBe(false);
  //   });
});

const User = require("../user.js");
var validator = require("email-validator");

describe("test valid user", () => {
    it("Test if a user is valid with valid input", () => {
        let user = new User(
            "John",
            "Doe",
            "johndoe@pmail.com",
            new Date().getFullYear() - 40,
            "Mkdsdsdsds1"
        );
        expect(user.isValid()).toBe(true);
    });

    it("Test if a user is valid with an invalid email", () => {
        let user = new User(
            "Alice",
            "Smith",
            "invalid-email",
            new Date().getFullYear() - 70,
            "Mkdsdsdsds1"
        );
        expect(user.isValid()).toBe(false);
    });

    it("Test if a user is valid with a birthdate indicating under 13 years old", () => {
        let user = new User(
            "Eva",
            "Adams",
            "eva@example.com",
            new Date().getFullYear() - 5,
            "StrongPassword123"
        );
        expect(user.isValid()).toBe(false);
    });

    it("Test if a user is valid with empty first name and last name", () => {
        let user = new User(
            "",
            "",
            "empty@example.com",
            new Date().getFullYear() - 30,
            "ComplexPassword123"
        );
        expect(user.isValid()).toBe(false);
    });

    it("Test if a user is valid with a weak password", () => {
        let user = new User(
            "Bob",
            "Johnson",
            "bob@example.com",
            new Date().getFullYear() - 60,
            "weak"
        );
        expect(user.isValid()).toBe(false);
    });
});

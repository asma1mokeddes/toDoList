const User = require('../user.js');

describe("test user email", () =>{

    it.only('Email have the good format', () => {
        let user = new User("Asma", "MOKEDDES", "asma@yopmail.com", 21);
        expect(user.isValidEmail()).toBe(true);

    })

    it.only('Email doesnt have the good format must be true', () => {
        let user = new User("", "", "asma   uyopmail.com", "");
        expect(user.isValidEmail()).toBe(false);

    })

    it.only('User name is true', () => {
        let user = new User("", "MOKEDDES", "", 21);
        expect(user.isValidNameOrFirstName()).toBe(false);

    })


    it.only('User name is true', () => {
        let user = new User("Asma", "MOKEDDES", "", 21);
        expect(!user.isValidNameOrFirstName()).toBe(false);

    })

    it.only('AGE', () => {
        let user = new User("Asma", "MOKEDDES", "", "2017-03-17");
        expect(user.isValidAge()).toBe(false);

    })
})
const Item = require("./item.js");
const emailSenderService = require("./emailSenderService.js");

class ToDo {
    constructor(emailSenderService) {
        this.items = [];
        this.emailSenderService = emailSenderService;
    }

    verifyItemType(item) {
        if (item instanceof Item) {
            return true;
        }
        return false;
    }

    canAddItem(item) {
        if (this.items.length >= 10 || !this.verifyItemType(item)) {
            return false;
        }

        const isUniqueName = this.items.every(
            (existingItem) => existingItem.name !== item.name
        );

        const isContentValid = item.content.length <= 1000;

        return isUniqueName && isContentValid;
    }

    add(item) {
        if (this.canAddItem(item)) {
            if (this.items.length === 0) {
                this.items.push(item);
            } else {
                const lastItem = this.items[this.items.length - 1];
                const timeDifference =
                    (item.creationDate - lastItem.creationDate) / (1000 * 60);

                if (timeDifference >= 30) {
                    this.items.push(item);
                    if (this.items.length === 8) {
                        this.emailSenderService.send(
                            "Vous ne pouvez ajouter que 2 items."
                        );
                    }
                } else {
                    throw new Error("The 30 minute period was not respected.");
                }
            }
        } else {
            throw new Error("Cannot add item.");
        }
    }
}

module.exports = ToDo;

class  ToDo{

    constructor() {
        this.items = [];
    }
    
    canAddItem() {
        if (this.items.length >= 10) {
            return false;
        }
        const isUniqueName = this.items.every(existingItem => existingItem.name !== item.name);

        const isContentValid = item.content.length <= 1000;

        return isUniqueName && isContentValid;
    }

    add(item) {
        if (this.canAddItem()) {
            this.items.push(item);
        } else {
            throw new Error("Cannot add item");
        }
    }  
}

module.exports = ToDo;
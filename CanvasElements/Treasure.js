class Treasure extends GeneratedElement {
    value = 0;

    constructor(index) {
        super();
        this.id = index;
        this.value = Math.floor(Math.random() * (9)) * 100 + 100;
    }
}
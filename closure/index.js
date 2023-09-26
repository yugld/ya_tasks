const object = {
    value: '42',
    type() {
        return typeof this.value;
    },
    print() {

        console.log(`${this.value} is ${this.type()}`);
    }
}
object.print(); 

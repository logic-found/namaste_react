
//---------------------- Inheritance in JS --------------------
class Parent {
    name = 'parent'
}
class Child extends Parent{
    constructor(age) {
        super()
        this.age= age
    }
} 

const childObj = new Child(24)
console.log(childObj.age, childObj.name)
//console.log(Parent.constructor)



// ----------------- Async Fun -------------------------
const fun = async () => {
    return () => {
        console.log('hy')
    }
}

console.log(fun())
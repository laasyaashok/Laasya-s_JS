const person1 = {
    name: "Spongebob",
    FavFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)}
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}

}
const person2 = {
    name: "Patrick",
    FavFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)}
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();
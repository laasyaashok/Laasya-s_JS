class Person{

    constructor(firstname, lastName, age){
        this.firstName = this.firstName;
        this.lastName = lastName;
        this.age = age;

    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
    }
    else{
        console.error("First name must be a non-empty string");

    }
    
}

set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.lentgh > 0 ){
        this._lastName = newLastName;
    }
    else{
        console.error("Last name must be a non-empty string");

    }
}

set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
        this._age = newAge;
    }
    else{
        console.error("Age must be a non-negative number");
    }
}

get lastName(){
    return this._lastName;
}

get fullName(){
    return this._firstName + "" + this._lastName;
}

get age(){
    return this._age;
}
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.lengthfullName);
console.log(person.age);
class Person{

    constructor(name){
        this.name = name;
    }

    greet(){
        return 'Hi '+this.name;
    }

}

console.log(new Person('john').greet());
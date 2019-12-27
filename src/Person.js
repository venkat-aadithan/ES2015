class Person{

    constructor(name){
        console.log(name);
        this.names = name;
    }

    greet(){
        this.names.forEach( name => console.log(name) );
    }

}

class names{
    
    constructor(nm){
        console.log(nm);
        this.name = nm;
    }

}

new Person([new names('sam'),new names('adam'),new names('jeff')]).greet();

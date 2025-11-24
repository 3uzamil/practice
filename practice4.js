class Car {
    constructor(make,model,variant){
        this.make = make;
        this.model = model;
        this.variant = variant;
    }

    start(){
        console.log(`The car ${this.model} by ${this.make} (${this.variant}) is starting!`);
    }
};

const firstCar = new Car('Toyota','Corolla','Altis X');
const secondCar = new Car('Suzuki','Swift','GLX');
firstCar.start();
secondCar.start();

class Animal{
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    introduce(){
        console.log(`${this.name} is ${this.type} animal and ${this.sound} is it's sound.`);
    }

};

const cat = new Animal('domestic','cat','meow');
const wolf = new Animal('wild','wolf','howl');

cat.introduce();
wolf.introduce();
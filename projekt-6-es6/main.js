"use strict"
// //1
//     function Animal(name) {
//         this.type = "animal";
//         this.name = name;
//     }

//     Animal.prototype.eat = function() {
//         return "I eat food";
//     }
//     const animal = new Animal('Puszek');

//     console.log(animal.eat());


// //2
//     function Car(name) {
//         this.type = "car";
//         this.name = name;
//     }

//     Car.prototype.drive = function() {
//         return 'Im driving now';
//     }
//     const car = new Car('bmw');

//     console.log(car.drive())

// //3
//     class Animal {
//         constructor(name) {
//             this.name = name;
//             this.type = 'animal';
//         }
//     }
//     const animal = new Animal('Puszek');
//     console.log(animal)

// //4
//     class Animal  {
//         constructor(name) {
//             this.name = name;
//             this.type = "animal";
//         }

//         eat(co) {
//             return this.name + " jem " + co;
//         }

//         sleep() {
//             return this.name + " spie";
//         }
//     }

//     const animal = new Animal('Puszek');
//     console.log(animal,animal.eat('szynke'), animal.sleep());

// //5
// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.type = 'animal';
//         console.log(this.name, this.type);
//     }
//     eat() {
//         return this.name + ' jem';
//     }

//     sleep() {
//         return this.name + ' spie';
//     }
// }

// class Bird extends Animal {
//     constructor(name, type) {
//         super(name);
//         this.type = type;
//     }

//     eat() {
//         const text = super.eat();
//         return text + ' - exactly seed!'
//     }

//     fly() {
//         return 'I can fly';
//     }
// }

// const bird = new Bird('Janusz', 'ptak');
// console.log(bird, bird.eat(), bird.sleep(), bird.fly())


//6
class Brick {
    constructor(x, y, width, height, type) {
        this.x = x
        this.y = y
        this.graphic = 'yellow.png'
        this.width = width
        this.height = height
        this.type = type
        this.live = 10
    }
        print(){
            return [this.x, this.y, this.graphic, this.width, this.height, this.type, this.live]
        }

        init() {
            console.log('Dodano na plansze')
        }
    }

class BrickBlue extends Brick {
    constructor(x, y, width, height, type){
        super(x, y, width, height, type)

        this.graphic = 'blue.png'
        this.live = 10
    }
}


class BrickRed extends Brick {
    constructor(x, y, width, height, type){
        super(x, y, width, height, type)

        this.graphic = 'red.png'
        this.live = 15
    }
}
class BrickGreen extends Brick {
    constructor(x, y, width, height, type){
        super(x, y, width, height, type)

        this.graphic = 'green.png'
        this.live = 20
    }
}

const brick = new BrickBlue(1, 2 , 100, 200, 'brick')
const brick2 = new BrickRed(1, 2 , 500, 200, 'brick')
const brick3 = new BrickGreen(1, 2 , 560, 200, 'brick')
console.log(brick)
console.log(brick2)
console.log(brick3)


class BrickAnim extends Brick {
    constructor(x, y, width, height, type, speed) {
        super(x, y, width, height, type)
        this.speed = speed
    }
    moveHorizontal() {
        return 'Poruszam sie poziomo z szybkoscia ' + this.speed
    }
}

const move = new BrickAnim(1, 2 , 560, 200, 'anim', 100)
console.log(move, move.moveHorizontal())
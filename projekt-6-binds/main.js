// function talk() {
//     return this.sound;
// }

// var bark = function(target, target2) {
//     return `${this.sound} do a dog ${target}, ${target2}`
// }

// let dog = {
//     sound: ' hau hau',
// }

// let cat = {
//     sound: 'miau miau'
// }

// let boundedDog = talk.bind(cat);
// console.log(boundedDog())

// let calledDog = bark.call(dog, 'sss', 'ddd')
// console.log(calledDog)

// let applyDog = bark.apply(dog, ['ggg', 'ddd'])
// console.log(applyDog)








// var animals = {
//     eat: function() {
//         return 'Dont eat ' + this.name;
//     }
// };

// var cat = Object.create(animals, {
//     'name': {
//         value: 'milk',
//         enumerable:false,
//         writable:false,
//     }
// })

// console.log(cat.eat(), cat)








// let a = {name: 'aaa'};
// let b = {lastName: 'bbb'};

// let ab = Object.assign({}, a, b)
// console.log(ab)





// function Car(model, year) {
//     this.model = model;
//     this.year = '( ' + year + ' )'; 
// }

// var firstCar = new Car('BMW', 2005);
// console.log(firstCar)



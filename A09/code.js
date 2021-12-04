"use strict";
// Zusammenarbeit mit Eileen Harr
var Aufgabe9_1;
(function (Aufgabe9_1) {
    // Class Animal
    class Animal {
        // Constructor
        constructor(_name, _type, _food, _hunger, _sound, _stock) {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.hunger = _hunger;
            this.sound = _sound;
            this.stock = _stock;
        }
        // function sing and eat for every animal
        sing() {
            return `<br> ${this.name}: I eat ${this.hunger} Kg ${this.food} <br><br> Old MacDonalds had a farm I-A-I-A-O <br> And on his Farm he had a ${this.type} I-A-I-A-O 
            <br> With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there <br>
            here a ${this.sound}, there a ${this.sound} <br> everywhere a ${this.sound} ${this.sound} <br> 
            Old MacDonalds had a farm I-A-I-A-O <br>  `;
        }
        eat() {
            return `${this.food} : ${this.stock} Kg <br>`;
        }
    }
    window.addEventListener("load", handleLoad);
    // add div to write everything in it
    let stockdiv;
    let animaldiv;
    let nextDay;
    let firstanimal = new Animal("Coco", "cow", "grass", 10, "mooh", 250);
    let secondanimal = new Animal("Biggi", "pig", "junk", 6, "oink", 60);
    let thirdanimal = new Animal("Dodo", "dog", "meat", 4, "woof", 85);
    let forthanimal = new Animal("Katty", "cat", "milk", 1, "miau", 7);
    let fifthanimal = new Animal("Chichi", "chicken", "grain", 2, "bock", 16);
    function handleLoad(_event) {
        animaldiv = document.getElementById("animals");
        stockdiv = document.getElementById("food");
        nextDay = document.getElementById("button");
        stockdiv.innerHTML = firstanimal.eat() + secondanimal.eat() + thirdanimal.eat() + forthanimal.eat() + fifthanimal.eat();
        //help??? dafuck.
        document.querySelector("button").addEventListener("click", cow);
        setTimeout(cow, 500);
        // function for all the animals 
        function cow() {
            nextDay.style.display = "none";
            firstanimal.stock = firstanimal.stock - firstanimal.hunger;
            animaldiv.innerHTML = firstanimal.sing();
            stocknew();
            setTimeout(pig, 500);
        }
        function pig() {
            secondanimal.stock = secondanimal.stock - secondanimal.hunger;
            animaldiv.innerHTML += secondanimal.sing();
            stocknew();
            setTimeout(dog, 500);
        }
        function dog() {
            thirdanimal.stock = thirdanimal.stock - thirdanimal.hunger;
            animaldiv.innerHTML += thirdanimal.sing();
            stocknew();
            setTimeout(cat, 500);
        }
        function cat() {
            forthanimal.stock = forthanimal.stock - forthanimal.hunger;
            animaldiv.innerHTML += forthanimal.sing();
            stocknew();
            setTimeout(chicken, 500);
        }
        function chicken() {
            fifthanimal.stock = fifthanimal.stock - fifthanimal.hunger;
            animaldiv.innerHTML += fifthanimal.sing();
            nextDay.style.display = "inline";
            stocknew();
        }
        function stocknew() {
            stockdiv.innerHTML = firstanimal.eat() + secondanimal.eat() + thirdanimal.eat() + forthanimal.eat() + fifthanimal.eat();
        }
    }
})(Aufgabe9_1 || (Aufgabe9_1 = {}));
//# sourceMappingURL=code.js.map
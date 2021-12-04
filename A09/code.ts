// Zusammenarbeit mit Eileen Harr
namespace Aufgabe9_1 {

    // Class Animal
    class Animal {
        name: string;
        type: string;
        food: string;
        hunger: number;
        sound: string;
        stock: number;

        // Constructor
        constructor(_name: string, _type: string, _food: string, _hunger: number, _sound: string, _stock: number) {

            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.hunger = _hunger;
            this.sound = _sound;
            this.stock = _stock;
        }

        // function sing and eat for every animal
        sing(): string {
            return `<br> ${this.name}: I eat ${this.hunger} Kg ${this.food} <br><br> Old MacDonalds had a farm I-A-I-A-O <br> And on his Farm he had a ${this.type} I-A-I-A-O 
            <br> With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there <br>
            here a ${this.sound}, there a ${this.sound} <br> everywhere a ${this.sound} ${this.sound} <br> 
            Old MacDonalds had a farm I-A-I-A-O <br>  `;
        }

        eat(): string {
            return `${this.food} : ${this.stock} Kg <br>`;
        }
    }

    window.addEventListener("load", handleLoad);

    // add div to write everything in it
    let stockdiv: HTMLDivElement;
    let animaldiv: HTMLDivElement;
    let nextDay: HTMLButtonElement;

    let firstanimal: Animal = new Animal("Coco", "cow", "grass", 10, "mooh", 250);
    let secondanimal: Animal = new Animal("Biggi", "pig", "junk", 6, "oink", 60);
    let thirdanimal: Animal = new Animal("Dodo", "dog", "meat", 4, "woof", 85);
    let forthanimal: Animal = new Animal("Katty", "cat", "milk", 1, "miau", 7);
    let fifthanimal: Animal = new Animal("Chichi", "chicken", "grain", 2, "bock", 16);

    function handleLoad(_event: Event): void {

        animaldiv = <HTMLDivElement>document.getElementById("animals");
        stockdiv = <HTMLDivElement>document.getElementById("food");
        nextDay = <HTMLButtonElement>document.getElementById("button");

        stockdiv.innerHTML = firstanimal.eat() + secondanimal.eat() + thirdanimal.eat() + forthanimal.eat() + fifthanimal.eat();
        //help??? dafuck.
        document.querySelector("button").addEventListener("click", cow);
        setTimeout(cow, 500);

        // function for all the animals 
        function cow(): void {
            nextDay.style.display = "none";
            firstanimal.stock = firstanimal.stock - firstanimal.hunger;
            animaldiv.innerHTML = firstanimal.sing();
            stocknew();
            setTimeout(pig, 500);
        }

        function pig(): void {
            secondanimal.stock = secondanimal.stock - secondanimal.hunger;
            animaldiv.innerHTML += secondanimal.sing();
            stocknew();
            setTimeout(dog, 500);
        }
        function dog(): void {
            thirdanimal.stock = thirdanimal.stock - thirdanimal.hunger;
            animaldiv.innerHTML += thirdanimal.sing();
            stocknew();
            setTimeout(cat, 500);
        }
        function cat(): void {
            forthanimal.stock = forthanimal.stock - forthanimal.hunger;
            animaldiv.innerHTML += forthanimal.sing();
            stocknew();
            setTimeout(chicken, 500);
        }

        function chicken(): void {
            fifthanimal.stock = fifthanimal.stock - fifthanimal.hunger;
            animaldiv.innerHTML += fifthanimal.sing();
            nextDay.style.display = "inline";
            stocknew();
        }

        function stocknew(): void {
            stockdiv.innerHTML = firstanimal.eat() + secondanimal.eat() + thirdanimal.eat() + forthanimal.eat() + fifthanimal.eat();
        }
    }
}

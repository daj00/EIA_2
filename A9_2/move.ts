namespace Herbscht {

    export class Moveable {
        position: Vector;
        velocity: Vector;
       
        constructor(_position: number, _x?: number, _y?: number) {
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Es wird gemooooved");
        }

        draw(): void {
            console.log("Es wird gedrawwwwt");
        }
    }
}
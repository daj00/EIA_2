namespace Herbscht {

    export class Squirrel extends Moveable {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 10);
            this.velocity.scale(0.1);
        }

        move(_timeslice: number): void {
            console.log("I´m not moving - I play Grünes Licht, Rotes Licht");
        }

        draw(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            squirrel({ _x: 50, _y: 730 }, { x: 250, y: 250 });
            squirrel({ _x: 650, _y: 750 }, { x: 250, y: 250 });
        }
    }

    function squirrel(_position: Vector, _size: Vector): void {

        //Körper
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
        crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Ohren
        crc2.beginPath();
        crc2.fillStyle = "darkred";
        crc2.arc(_position.x + 143, _position.y + -38, 12, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();

        //Schwanz
        crc2.beginPath();
        crc2.fillStyle = "darkred";
        crc2.arc(_position.x + 170, _position.y + -10, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 150, _position.y + 30, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();


    }
}
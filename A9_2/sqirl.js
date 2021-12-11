"use strict";
var Herbscht;
(function (Herbscht) {
    class Squirrel extends Herbscht.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Herbscht.Vector(_x, _y);
            this.velocity = new Herbscht.Vector(0, 0);
            this.velocity.random(10, 10);
            this.velocity.scale(0.1);
        }
        move(_timeslice) {
            console.log("I´m not moving - I play Grünes Licht, Rotes Licht");
        }
        draw() {
            Herbscht.crc2.resetTransform();
            Herbscht.crc2.save();
            Herbscht.crc2.translate(this.position.x, this.position.y);
            squirrel({ _x: 50, _y: 730 }, { x: 250, y: 250 });
            squirrel({ _x: 650, _y: 750 }, { x: 250, y: 250 });
        }
    }
    Herbscht.Squirrel = Squirrel;
    function squirrel(_position, _size) {
        //Körper
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "brown";
        Herbscht.crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Augen
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "black";
        Herbscht.crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Ohren
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "darkred";
        Herbscht.crc2.arc(_position.x + 143, _position.y + -38, 12, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Schwanz
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "darkred";
        Herbscht.crc2.arc(_position.x + 170, _position.y + -10, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 150, _position.y + 30, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
    }
})(Herbscht || (Herbscht = {}));
//# sourceMappingURL=sqirl.js.map
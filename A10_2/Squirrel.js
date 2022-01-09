"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Squirrel extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(-200, 0);
        }
        draw() {
            //Body
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(-200 + this.position.x, 20 + this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Eyes
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "black";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Mouth
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "grey";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Ears
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(143, -38, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(+120, +-38, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Paws
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "grey";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Paws2
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Tail
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            //Body
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Eyes
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "black";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Mouth
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "grey";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Ears
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(143, -38, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(+120, +-38, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Paws
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "grey";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Paws2
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            //Tail
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Squirrel = Squirrel;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Squirrel.js.map
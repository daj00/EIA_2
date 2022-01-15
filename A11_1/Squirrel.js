"use strict";
var L11_1_GoldenerHerbst_Advanced;
(function (L11_1_GoldenerHerbst_Advanced) {
    class Squirrel extends L11_1_GoldenerHerbst_Advanced.Moveable {
        isHungry;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
            this.velocity = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
        }
        draw() {
            //Body
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.translate(+200 + this.position.x, 40 + this.position.y);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Eyes
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "black";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Mouth
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "grey";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Ears
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(143, -38, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(+120, +-38, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Paws
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "grey";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Paws2
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Tail
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            //Body
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.translate(-50 + this.position.x, this.position.y);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Eyes
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "black";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Mouth
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "grey";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Ears
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(143, -38, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(+120, +-38, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Paws
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "grey";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Paws2
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            //Tail
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst_Advanced.Squirrel = Squirrel;
})(L11_1_GoldenerHerbst_Advanced || (L11_1_GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=Squirrel.js.map
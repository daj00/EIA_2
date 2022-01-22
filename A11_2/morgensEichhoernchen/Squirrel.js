"use strict";
var L11_2_GoldenerHerbst3;
(function (L11_2_GoldenerHerbst3) {
    class Squirrel extends L11_2_GoldenerHerbst3.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_2_GoldenerHerbst3.Vector(0, 0);
            this.velocity = new L11_2_GoldenerHerbst3.Vector(-200, 0);
        }
        draw() {
            //Körper        
            L11_2_GoldenerHerbst3.crc2.beginPath();
            L11_2_GoldenerHerbst3.crc2.save();
            L11_2_GoldenerHerbst3.crc2.translate(-200 + this.position.x, 20 + this.position.y);
            L11_2_GoldenerHerbst3.crc2.fillStyle = "brown";
            L11_2_GoldenerHerbst3.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            //Auge
            L11_2_GoldenerHerbst3.crc2.beginPath();
            L11_2_GoldenerHerbst3.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst3.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            //Ohren
            L11_2_GoldenerHerbst3.crc2.beginPath();
            L11_2_GoldenerHerbst3.crc2.fillStyle = "darkred";
            L11_2_GoldenerHerbst3.crc2.arc(143, -38, 12, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            //Schwanz
            L11_2_GoldenerHerbst3.crc2.beginPath();
            L11_2_GoldenerHerbst3.crc2.fillStyle = "brown";
            L11_2_GoldenerHerbst3.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            L11_2_GoldenerHerbst3.crc2.restore();
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.beginPath();
        }
    }
    L11_2_GoldenerHerbst3.Squirrel = Squirrel;
})(L11_2_GoldenerHerbst3 || (L11_2_GoldenerHerbst3 = {}));
//# sourceMappingURL=Squirrel.js.map
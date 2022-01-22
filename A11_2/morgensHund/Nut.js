"use strict";
var L11_2_GoldenerHerbst4;
(function (L11_2_GoldenerHerbst4) {
    class Nut extends L11_2_GoldenerHerbst4.Moveable {
        nut;
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_2_GoldenerHerbst4.crc2.save();
            L11_2_GoldenerHerbst4.crc2.beginPath();
            L11_2_GoldenerHerbst4.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst4.crc2.fillStyle = "yellow";
            L11_2_GoldenerHerbst4.crc2.fill();
            L11_2_GoldenerHerbst4.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst4.Nut = Nut;
})(L11_2_GoldenerHerbst4 || (L11_2_GoldenerHerbst4 = {}));
//# sourceMappingURL=Nut.js.map
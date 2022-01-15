"use strict";
var L11_1_GoldenerHerbst_Advanced;
(function (L11_1_GoldenerHerbst_Advanced) {
    class Nut extends L11_1_GoldenerHerbst_Advanced.Moveable {
        wasEaten;
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            L11_1_GoldenerHerbst_Advanced.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst_Advanced.crc2.fill();
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst_Advanced.Nut = Nut;
})(L11_1_GoldenerHerbst_Advanced || (L11_1_GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=Nut.js.map
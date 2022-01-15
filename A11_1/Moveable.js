"use strict";
var L11_1_GoldenerHerbst_Advanced;
(function (L11_1_GoldenerHerbst_Advanced) {
    class Moveable {
        position;
        velocity;
        size;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
            this.velocity = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbst_Advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_GoldenerHerbst_Advanced.crc2.canvas.height;
            if (this.position.x > L11_1_GoldenerHerbst_Advanced.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbst_Advanced.crc2.canvas.width;
            if (this.position.y > L11_1_GoldenerHerbst_Advanced.crc2.canvas.height)
                this.position.y -= L11_1_GoldenerHerbst_Advanced.crc2.canvas.height;
        }
        draw() {
            // console.log("Movable draw");
        }
    }
    L11_1_GoldenerHerbst_Advanced.Moveable = Moveable;
})(L11_1_GoldenerHerbst_Advanced || (L11_1_GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=Moveable.js.map
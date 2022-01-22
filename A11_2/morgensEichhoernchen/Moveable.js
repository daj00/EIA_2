"use strict";
var L11_2_GoldenerHerbst3;
(function (L11_2_GoldenerHerbst3) {
    class Moveable {
        position;
        velocity;
        size;
        expendable = false;
        eatRadius = 0;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L11_2_GoldenerHerbst3.Vector(750, 470);
            this.velocity = new L11_2_GoldenerHerbst3.Vector(1000, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_2_GoldenerHerbst3.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2_GoldenerHerbst3.crc2.canvas.height;
            if (this.position.x > L11_2_GoldenerHerbst3.crc2.canvas.width)
                this.position.x -= L11_2_GoldenerHerbst3.crc2.canvas.width;
            if (this.position.y > L11_2_GoldenerHerbst3.crc2.canvas.height)
                this.position.y -= L11_2_GoldenerHerbst3.crc2.canvas.height;
        }
    }
    L11_2_GoldenerHerbst3.Moveable = Moveable;
})(L11_2_GoldenerHerbst3 || (L11_2_GoldenerHerbst3 = {}));
//# sourceMappingURL=Moveable.js.map
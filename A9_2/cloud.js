"use strict";
// Zusammenarbeit mit Eileen Harr
// Die Wolke
var Herbscht;
(function (Herbscht) {
    class Cloud extends Herbscht.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Herbscht.Vector(_x, _y);
            this.velocity = new Herbscht.Vector(10, 10);
            this.velocity.scale(3);
        }
        move(_timeslice) {
            let offset = new Herbscht.Vector(1, 2);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < Herbscht.crc2.canvas.width) {
                this.position.x += 1;
            }
            if (this.position.y < 0) {
                this.position.y = 0;
            }
            if (this.position.x > Herbscht.crc2.canvas.width) {
                this.position.x = 0;
            }
            if (this.position.y > 150) {
                this.position.y = 10;
            }
        }
        draw() {
            Herbscht.crc2.resetTransform();
            Herbscht.crc2.save();
            Herbscht.crc2.translate(this.position.x, this.position.y);
            cloud({ _x: 300, _y: 125 }, { x: 250, y: 75 });
        }
    }
    Herbscht.Cloud = Cloud;
    function cloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let rParcticles = 50; // r=radius
        let particle = new Path2D();
        let gradient = Herbscht.crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(30, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(30, 50%, 100%, 0)");
        Herbscht.crc2.save();
        Herbscht.crc2.translate(_position.x, _position.y);
        Herbscht.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Herbscht.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Herbscht.crc2.translate(x, y);
            Herbscht.crc2.fill(particle);
            Herbscht.crc2.restore();
        }
        Herbscht.crc2.restore();
    }
})(Herbscht || (Herbscht = {}));
//# sourceMappingURL=cloud.js.map
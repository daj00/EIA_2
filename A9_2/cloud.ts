// Zusammenarbeit mit Eileen Harr
// Die Wolke

namespace Herbscht {

    export class Cloud extends Moveable {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(10, 10);
            this.velocity.scale(3);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(1, 2);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < crc2.canvas.width) {
                this.position.x += 1;
            }
            if (this.position.y < 0) {
                this.position.y = 0;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x = 0;
            }
            if (this.position.y > 150) {
                this.position.y = 10;
            }
        }

        draw(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            
            cloud({ _x: 300, _y: 125 }, { x: 250, y: 75 });
        }

    }

    function cloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);
        let nParticles: number = 40;
        let rParcticles: number = 50;                                            // r=radius
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);

        particle.arc(0, 0, rParcticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(30, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(30, 50%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
}

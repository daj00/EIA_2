namespace Herbscht {

    export class Leave extends Moveable {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.scale(5);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < -50) {
                
                this.velocity.set(40, -20);
                this.velocity.scale(5);
            }
            if (this.position.y < 500) {
                this.velocity.set(50, 10);
                this.velocity.scale(5);
            }
            if (this.position.x > 1000) {
                this.position.x = -100;
                this.velocity.scale(5);
            }
            if (this.position.y > 600) {
                this.velocity.set(50, -10);
                this.velocity.scale(5);
            }

        }

        draw(): void {
            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            crc2.restore();

            leaf({ x: 500, y: 800 }, { x: 1000, y: 400 });
            leaf2({ x: 500, y: 800 }, { x: 1000, y: 400 });
        }
    }

    function leaf(_position: Vector, _size: Vector): void {
        console.log("Leave", _position, _size);
        let nParticles: number = 15;
        let rParcticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);

        particle.arc(0, 0, rParcticles, 0, 0.9 * Math.PI);
        gradient.addColorStop(0, "orange");

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

    function leaf2(_position: Vector, _size: Vector): void {
        console.log("Leave2", _position, _size);
        let nParticles: number = 15;
        let rParcticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);

        particle.arc(0, 0, rParcticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "red");


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
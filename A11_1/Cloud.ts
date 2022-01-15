namespace L11_1_GoldenerHerbst_Advanced {
    export class Cloud extends Moveable {
       
        constructor(_size: number, _position?: Vector) {
            super(_position);


            if (_position)
                this.position = _position;
            else
                this.position = new Vector(20, 100);

            this.velocity = new Vector(100, 0);
            this.size = _size;

        }

        public draw(): void {
            crc2.beginPath();
            let radiusParticle: number = 3000;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            crc2.save();
            crc2.translate(-200 + this.position.x, -50 + this.position.y);
            crc2.fillStyle = gradient;

            crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            crc2.arc(130, 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.restore();

            crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            crc2.save();
            crc2.translate(-100 + this.position.x, 80 + this.position.y);
            crc2.fillStyle = gradient;

            crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            crc2.arc(130, 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(1 / 50);
            console.log("move Cloud");
        }
    }
}

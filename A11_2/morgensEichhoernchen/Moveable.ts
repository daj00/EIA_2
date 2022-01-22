namespace L11_2_GoldenerHerbst3 {

    export abstract class Moveable {

        public position: Vector;
        public velocity: Vector;
        public size: number;
        public expendable: boolean = false;
        protected eatRadius: number = 0;

        constructor(_position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(750, 470);

            this.velocity = new Vector(1000, 0);
        }

        public move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        abstract draw(): void;
    }
}
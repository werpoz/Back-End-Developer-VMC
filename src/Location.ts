import { Direction } from "./Direction";

export class Location {

     posX: number = 0;
     posY: number = 0;
     direction: string = ""

    constructor(parameters = { posX: 0, posY: 0, direction: Direction.NORTE }) {
        this.posY = parameters.posY;
        this.posX = parameters.posX;
        this.direction = parameters.direction;
    }

    spinLeft() {
        switch (this.direction) {
            case Direction.NORTE:
                this.direction = Direction.OCCIDENTE;
                break;
            case Direction.SUR:
                this.direction = Direction.ORIENTE;
                break;
            case Direction.ORIENTE:
                this.direction = Direction.NORTE;
                break;
            case Direction.OCCIDENTE:
                this.direction = Direction.SUR;
                break;
        }
    }

    spinRight() {
        switch (this.direction) {
            case Direction.NORTE:
                this.direction = Direction.ORIENTE;
                break;
            case Direction.SUR:
                this.direction = Direction.OCCIDENTE;
                break;
            case Direction.ORIENTE:
                this.direction = Direction.SUR;
                break;
            case Direction.OCCIDENTE:
                this.direction = Direction.NORTE;
                break;
        }
    }

    step() {
        let r = -1;
        switch (this.direction) {
            case Direction.NORTE:
                this.posY++;
                r = Math.abs(this.posY);
                break;
            case Direction.SUR:
                this.posY--;
                r = Math.abs(this.posY);
                break;
            case Direction.ORIENTE:
                this.posX++;
                r = Math.abs(this.posY);
                break;
            case Direction.OCCIDENTE:
                this.posX--;
                r = Math.abs(this.posY);
                break;
        }
        return r
    }
    

}
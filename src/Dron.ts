import { exit } from "process";
import { Direction } from "./Direction";
import { Location } from "./Location";
import { Report } from "./Report";
export class Dron {

    id: number = 1;
    bound: number = 0;
    limit: number = 2;
    location: Location = new Location();
    schema: string = ""

    constructor(id: number, bound: number = 10, limit: number = 3 ) {
        this.bound = bound;
        this.id = id;
        this.limit = limit;
        this.schema = "";
    }

    move() {
        if (this.schema) {
            let moves: Array<string> = this.schema.split("")
            for (const move of moves) {
                switch (move) {
                    case 'A':
                             this.location.step();
                        break;
                    case 'I':
                            this.location.spinLeft()
                        break;
                    case 'D':
                            this.location.spinRight()
                        break;
                    default:
                        break;
                }
            }
        }
    }

    report(guide : Array<string>){
        let r = new Report();
        let c = 1
        for (const g of guide) {
            this.schema = g ;
            if(c > this.limit){
                break;
            }
            this.move();
            if(Math.abs(this.location.posX) > this.bound){
                throw new Error("El dron esta fuera del mapa");
            } 
            if(Math.abs(this.location.posY) > this.bound){
                throw new Error("El dron esta fuera del mapa");
            } 
            r.build(this);
            c++;
        }
        r.generate()
    }
}
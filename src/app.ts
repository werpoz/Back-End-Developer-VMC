import { Dron } from "./Dron";
import { FindFileDrone } from "./FindFileDrone";



class Restaurant {
    nDrones: number = 2;
    nSquare: number = 10;
    nLimit: number = 3;
    Drones: Array<Dron> = this.initDrones(this.nDrones);
    
    initDrones(arg0: number): Dron[] {
        let drones: Array<Dron> = [];
        for (let index = 1; index <= arg0; index++) {
            drones.push(
                new Dron(index, this.nSquare, this.nLimit)
            );
        }
        return drones;
    }

    reportRoutes() {
        for (const drone of this.Drones) {
            let schemas : Array<string> = new FindFileDrone(drone).get();
            drone.report(schemas);
        }
    }

}

let app = new Restaurant();
app.reportRoutes();

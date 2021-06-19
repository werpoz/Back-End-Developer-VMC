export class Direction {

    direction: string = "";

    static NORTE: Readonly<string> = "Norte";
    static ORIENTE: Readonly<string> = "Oriente";
    static SUR: Readonly<string> = "Sur";
    static OCCIDENTE: Readonly<string> = "Occidente";

    constructor(parameters: string = "Norte") {
        this.direction = parameters;
    }
}
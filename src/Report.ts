import { Dron } from "./Dron";
import * as fs from "fs";
import * as path from "path";

export class Report {
    
    private fileName : string = "";
    headfile : string = "==Reporte de entregas==\r\n"; 
    data : string = "";

    constructor(data : string = "") {
           this.data +=this.headfile;
           this.data += data;
    }
    name(dron :Dron){
        this.fileName = `out${String(dron.id).padStart(2,'0')}.txt` ;
    }
    push(data : string = ""){
        this.data += data;
    }

    build(dron: Dron){
        this.data += `(${dron.location.posX},${dron.location.posY}) direccion ${dron.location.direction}\r\n`
        this.fileName =  `out${String(dron.id).padStart(2,'0')}.txt` ;
    }

    generate(){
        fs.writeFileSync('./report/'+this.fileName, this.data);
        console.log(this.data)
    }
}
import { Dron } from "./Dron";
import * as fs from "fs";
import * as path from "path";

export class FindFileDrone {

    fileName : string = "";
    data : Array<string> = [] ;

    constructor(dron : Dron) {
        this.fileName = `in${String(dron.id).padStart(2,'0')}.txt`
        this.fileLoad();
    }

    fileLoad(){
        let data = "";
        try {
            data = fs.readFileSync('./routes/'+this.fileName,'utf-8');
        } catch (error) {
            throw new Error("error no se encontro el archivo "+this.fileName);
        }

        for (const iterator of data.split('\r\n')) {
            this.data.push(iterator);
        }
        return this.data;
    }
    
    get(){
        return this.data;
    }
}
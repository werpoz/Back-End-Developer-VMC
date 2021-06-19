import { Dron } from "../src/Dron";
import { FindFileDrone } from "../src/FindFileDrone";


describe("file",()=>{
    test("foundFile",()=>{
        const expeted = new FindFileDrone(new Dron(1))
        const result  = expeted.fileName;
        expect(result).toStrictEqual('in01.txt');
    });
    test("foundFileget",()=>{
        const expeted = new FindFileDrone(new Dron(1)).get()
        expect(expeted).toBeInstanceOf(Array);
    });
    test("noFoundFile",()=>{

        const result = () => {
            new FindFileDrone(new Dron(999))
        }
        expect(result).toThrow(Error)
        
    });
})
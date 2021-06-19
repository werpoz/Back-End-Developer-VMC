import { Direction } from "../src/Direction";
import { Location } from "../src/Location";

describe("spin",()=>{
    test("spinLeft",()=>{
        const expeted = new Location();
        const result  = Direction.OCCIDENTE;
        expeted.spinLeft()
        expect(result).toStrictEqual(expeted.direction);
    });
    test("spinRight",()=>{
        const expeted = new Location();
        const result  = Direction.ORIENTE;
        expeted.spinRight()
        expect(result).toStrictEqual(expeted.direction);
    })
})
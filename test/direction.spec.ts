import { Direction } from "../src/Direction";

describe("direcciones",()=>{
    test("inicial",()=>{
        const expeted = new Direction(Direction.NORTE);
        const result  = Direction.NORTE;
        expect(result).toStrictEqual(expeted.direction);
    });
    test("modificado",()=>{
        const expeted = new Direction().direction = Direction.SUR;
        const result  = Direction.SUR;
        expect(result).toStrictEqual(expeted);
    })
})
import { Direction } from "../src/Direction";
import { Dron } from "../src/Dron";
import { Report } from "../src/Report";

describe("file", () => {
    test("foundFile", () => {
        const expeted = new Dron(1, 2, 3);
        expeted.schema = "AAAAD"
        expeted.move();
        const result = expeted.location.direction
        expect(result).toStrictEqual(Direction.ORIENTE);
    });
    test("report error over range", () => {

        const dron = new Dron(1, 5, 1);
        let schema = ["AAAAD"]
        dron.report(schema)

        expect('==Reporte de entregas==\r\n').toStrictEqual(new Report().headfile)
    });
    test("report error over range", () => {
        const expeted = () => {
            const dron = new Dron(1, 2, 3);
            let schema = ["AAAADI"]
            dron.report(schema)
        }
        expect(expeted).toThrow(Error)
    });
    test("overflow delivery", () => {
        const expeted = () => {
            const dron = new Dron(1, 2, 1);
            let schema = ["AAAAD", "AAAAD", "AAAAD"]
            dron.report(schema)
        }
        expect(expeted).toThrow(Error)
    });
});
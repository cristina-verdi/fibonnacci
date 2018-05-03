import { FibonacciGenerator } from "../src/fibonacci-should";

describe("Fibonacci Generator should", () => {

    let fibonacciGenerator: FibonacciGenerator;
    let nthNumber;
    beforeEach(() => {
        fibonacciGenerator  = new FibonacciGenerator();
    });

    test("return zero in position zero", () => {
        nthNumber = fibonacciGenerator.getNthNumber(0);
        expect(nthNumber).toBe(0);
   });

    test("return one in position one", () => {
        nthNumber = fibonacciGenerator.getNthNumber(1);
        expect(nthNumber).toBe(1);
   });

    test("return two in position one", () => {
       nthNumber = fibonacciGenerator.getNthNumber(2);
       expect(nthNumber).toBe(1);
   });

    test("return three in position 2", () => {
        nthNumber = fibonacciGenerator.getNthNumber(3);
        expect(nthNumber).toBe(2);
    });
});

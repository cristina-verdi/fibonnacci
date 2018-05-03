export class FibonacciGenerator {
    public getNthNumber(position: number) {

        if (position <= 1) {
            return position;
        }

        return this.getNthNumber(position - 1) + this.getNthNumber(position - 2);
    }
}
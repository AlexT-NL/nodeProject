export function sum(...values:number[]): number{
    return values.reduce((prevVal:number, currVal:number) => prevVal + currVal);
    }
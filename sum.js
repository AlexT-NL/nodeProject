function sum(...values){
    return values.reduce((prevVal, currVal) => prevVal + currVal);
    }

module.exports = sum;
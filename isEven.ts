export const isEven = (num: number): boolean => {
    if(num < 0){
      num *= -1
    }
    if(num == 0 ){
      return true
    }
    else if(num == 1 ){
      return false
    }
    else {
      return isEven(num-2)
    }
  }
  
  // module.exports = isEven;
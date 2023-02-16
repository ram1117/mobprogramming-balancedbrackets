class Stack {
  constructor() {
    this.arr = [];
  }
  popArr() {
    return this.arr.pop();
  }

  pushArr(char) {
    this.arr.push(char);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

}

function balancedBrackets(string) {

  let braceStr = string.match(/[\[\]\(\)\{\}]/g);
  let stack = new Stack();
  for (let i = 0; i < braceStr.length; i += 1) {
    if (braceStr[i] === '[' || braceStr[i] === '(' || braceStr[i] === '{') { stack.pushArr(braceStr[i]) }
    else {
      if (stack.arr.length===0) { return false }
      else {
        let head = stack.popArr();
        if (head === '(' && braceStr[i] !== ')' || head === '[' && braceStr[i] !== ']' || head === '{' && braceStr[i] !== '}') {
          return false;
        }
      }

    }
  }
  return stack.arr.length===0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true
console.log(balancedBrackets('([)]'))
// => false
console.log(balancedBrackets(')]'))
console.log(balancedBrackets('{()[]}()'))

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets

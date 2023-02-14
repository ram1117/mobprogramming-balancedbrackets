class Stack {
  constructor(){
    this.arr=[];
  }
  popArr(){
    return this.arr.pop();
  }

  pushArr(char){
    this.arr.push(char);
  }
}

function balancedBrackets(string) {
  
let braceStr = string.match(/[\[\]\(\)\{\}]/g);
for(let i=0;i<braceStr.length;i+=1){
  let stack = new Stack();
  if(braceStr[i]==='['||braceStr[i]==='('||braceStr[i]==='{'){ stack.pushArr(braceStr[i])}
  else{
    let head = stack.popArr();
    if(head==='('&& braceStr[i]!==')'||head==='['&& braceStr[i]!==']'||head==='{'&& braceStr[i]!=='}'){
      return false;
    }
    return stack.arr.isEmpty;
  }
}
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets

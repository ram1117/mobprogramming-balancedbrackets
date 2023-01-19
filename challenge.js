class Stack{
  constructor(){
    this.stackArr=[];
  }
  push(char){
    this.stackArr.push(char);
  }
  pop(){
    return this.stackArr.pop();
  }
  empty(){
    return this.stackArr.length===0;
  }
}

function balancedBrackets(string) {
  // your code here
  const stck = new Stack();
  let braces = string.match(/[\[\]\(\)\{\}]/g);

  for(let i = 0;i<braces.length;i+=1){
    if(braces[i]==='{'||braces[i]==='['||braces[i]==='('){
      stck.push(braces[i]);
    }
    else{
      if(stck.empty()){return false;}
      let top = stck.pop();
      if((top==='[' && braces[i]!==']')||(top==='(' && braces[i]!==')')||(top==='{' && braces[i]!=='}'))
      {
        return false;
      }
    }

  }
  return stck.empty();
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets

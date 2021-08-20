console.clear();
// -------------------Question 1-----------------
console.log("1. Write a program to find all pairs of an integer array whose sum is equal to a given number?")
 const Pairs=(inp,sum)=>
 {
     let set = [];
     for (i=0;i<inp.length;i++)
         for (j=i+1;j<inp.length;j++)
             if(inp[i]+inp[j]===sum){
                let obj={};
               obj.first=inp[i];
               obj.second=inp[j];
               set.push(obj)
                 }
      return set;
 }

 let arr = [1,2,3,4,5,6,7,8,9]
 let sum = 7
 console.log(Pairs(arr,sum));

 // ************ Question 2  **********
console.log("2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.")
const reverseArray=(a)=>{
     for(i=0;i<a.length/2;i++)
         [a[i],a[a.length-1-i]]=[a[a.length-1-i],a[i]];
     return a;
 } 
 console.log(reverseArray([1,2,3,4,5,6]))

 /*************Question3 *****************/
 console.log("Q3. Write a program to check if two strings are a rotation of each other?")
  const Rotation=(str1,str2)=> {
     str1.length===str2.length
       ?(str1+str1).includes(str2)
         ? console.log( str2 + " is a rotation")
        :console.log( str2+ " is not a rotation")
     :  console.log("length must be  same")
  }

  Rotation("akash","hakas")

   // ************Question4 ****************
 console.log("Q4. Write a program to print the first non-repeated character from a string")

 function nonRepeat(str){
     let temp = str.split("")
    let output ={}
    let answer = []
    for(i=0;i<temp.length;i++)
        output[temp[i].toLowerCase()] ? output[temp[i]] +=1 : output[temp[i].toLowerCase()]=1
    var temp2 = Object.entries(output)
    for (j=0;j<temp2.length;j++)
         (temp2[j])[1]===1 && answer.push((temp2[j])[0])
    console.log("First Non repeating character is "  + answer[0] )
 }
 nonRepeat("Akash")

     // ************Question 5  ****************
 console.log("Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it")

 function TOH(length,source, destination, buffer) {
    if (length) {
      TOH(length - 1,source, buffer, destination);
      console.log('Move the disk from Tower ',source, ' to Tower ', destination);        
      TOH(length - 1, buffer, destination,source);
    }
    return;
  }
  TOH(4,"D", "C", "A", "B");


       // ************Question 6  ****************
console.log("Q6. Write a program to convert postfix to prefix expression.")      
function isOperator(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}
function postToPre(post_exp)
{
    let s = [];
    let length = post_exp.length;
    for (let i = 0; i < length; i++) {
        if (isOperator(post_exp[i])) {
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();
            let temp = post_exp[i] + op2 + op1;
            s.push(temp);
        }
        else s.push(post_exp[i] + "");
    }

    let ans = "";
    while (s.length > 0)
        ans += s.pop();
    return ans;
}
console.log(postToPre("ABC/-AK/L-*"))

 
           // ************Question 7  ****************
 console.log("Q7. Write a program to convert prefix expression to infix expression.")
  // +ab => a+b as soon as we find first opreator then we will find two opreands   
  function isOperator(x)
  {
      switch (x) {
      case '+':
      case '-':
      case '/':
      case '*':
          return true;
      }
      return false;
  }
  function preToIn(post_exp)
  {
      let s = [];
      let length = post_exp.length;
      for (let i = length-1; i >= 0; i--) {
        if (isOperator(post_exp[i])) {
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();
            let temp = "("+op1 + post_exp[i] + op2 +")";
            s.push(temp);
        }
        else {
            s.push(post_exp[i] + "");
        }
      }
      let ans = "";
      while (s.length > 0)
          ans += s.pop();
      return ans;
  }
  console.log(preToIn("*+AB-CD"))
  
   
// /*******Question 8 *******************/
console.log("Q8. Write a program to check if all the brackets are closed in a given code snippet.")
const q="{(){[()()]}()}";

const check=()=>
{ 
  let z=Array.from(q);
  let out=[];
  if(q.length%2) return 0;
       for(let i=0;i<z.length;i++)
           {
               if(z[i]==="("|| z[i]==="["|| z[i]==="{") out.push(z[i]);
               else
                  if(out.length)
                    {
                        if(out[out.length-1]==="(" && z[i]===")") out.pop();
                        if(out[out.length-1]==="[" && z[i]==="]") out.pop();
                        if(out[out.length-1]==="{" && z[i]==="}") out.pop();
                    }
                  else  return 0;
           }
        if(out.length) return 0;
        else return 1;
}
  let u=check();
  if(u) console.log("balanced and all brackets are closed")
  else console.log("Unbalanced")

// ************Question 9*******
console.log("Q9. Write a program to reverse a stack.")
function StackReversal(stack){
    let ReversedStack = []
    let len = stack.length
    for(i=0;i<len;i++)ReversedStack.push(stack.pop())
    console.log("Your stack is reversed as ",ReversedStack)
}
 StackReversal(["a","b","c","d"])

 // ************Question 10*******
 console.log("Q10. Write a program to find the smallest number using a stack")
 function SmallestInStack(stack){
 let smallest = stack.pop();
 let len = stack.length
 for(let i=0;i<len;i++){
     let temp = stack.pop()
     if(temp<smallest)smallest=temp
 }
 console.log(smallest)
  }
   SmallestInStack([2,3,4,5,6])


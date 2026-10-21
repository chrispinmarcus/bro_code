//function = A section of reusable code.
//         Declare code once, use it whanever you want.
//         Cell the function to execute that code.

function  happyBirthday(userName, age){
  console.log(`Happy birthday ${userName} you are ${age} years old!`)
}
function isEven (number){
  
 return number%2 === 0 ? true : false;
  }
console.log(isEven(9));

function isValidemail (email){
  return email.includes("@") ? true : false;
}
console.log(isValidemail('jean@gmail.com'))
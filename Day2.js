// Print Even Numbers using Loops

for(i=0;i<=10;i++){
    if(i%2==0){
    console.log(i);
    }
    }
    
    // Print Odd Numbers using Loops
    for(i=0;i<=10;i++){
        if(i%2 !=0){
            console.log(i);
        }
    }

// By using functions we have to print 1 to 10 numbers and 1 to 30 numbers

function a(){
    for(i=1;i<=10;i++){
        console.log(i);
}
}
a();

function b(){
    var i=1;
    while(i<=10){
console.log(i);
i++
    }
}
b();

function c(){
    var i=0;
  do{

      console.log(i);
      i++
  }
  while(i<=10);}
c(); 

// Print 30 numbers using loops

function d(){
    for(i=1;i<=30;i++){
        console.log(i)
    }
}
d();

function e(){
var i=1;
while(i<=30){
    console.log(i)
    i++;
}
}
e();
function f(){
    var i=0;
  do{

      console.log(i);
      i++
  }
  while(i<=30);}
f();

// Add 2 names and one operand in the parameters by using switch case:

function abc(x,y,z){
    
    let operation;
    switch(z){
        case "+":
            operation=x+y;
            break;
            case "-":
                operation=x-y;
                break;
                case "*":
            operation= x*y;
            break;
            default:
            operation=("Nothing to do")
    }
  return operation;  
}
console.log(abc(4,8,"+"))
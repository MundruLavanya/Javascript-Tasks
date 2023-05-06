// Print even or odd numbers 
for(i=0;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

// odd

for(i=0;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Atm pin 

var otp=prompt("enter the value:");

if(otp==101010){
    console.log("Show Generated")
}else{
    console.log("Not Generated")
}
// vowels and consonants

let word = "lavanyamundru";
let vowels = "";
let consonants = "";

for (let i = 0; i < word.length; i++) {
  let ml = word[i];
  if (ml === "a" || ml === "e" || ml === "i" || ml === "o" || ml === "u") {
    vowels += ml + " ";
  } else if (ml >= "a" && ml <= "z") {
    consonants += ml + " ";
  }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
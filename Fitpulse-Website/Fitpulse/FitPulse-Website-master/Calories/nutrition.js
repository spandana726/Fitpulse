const calories = document.getElementById("calories");

const calculateBtn = document.getElementById("btn");

const Age = document.getElementById("Age");

const height = document.getElementById("height");

const weight = document.getElementById("weight"); 
const maintain = document.getElementById("main"); 
const losew = document.getElementById("losew"); 
const gainw = document.getElementById("gainw"); 

console.log(maintain)
console.log(losew)
console.log(gainw)

// BMR = 10*weight + 6.25*height - 5*age + 5
// BMR = 10*weight + 6.25*height - 5*age - 161;


const calculateBMR = (weight, height, Age, genderValue) => {
    if (genderValue == "male")
      return 10*weight + 6.25*height - 5*Age + 5;   
    else
      return 10*weight + 6.25*height - 5*Age - 161; 
};

function Btnclick(){
console.log(calories);
console.log(calculateBtn);
console.log(Age.value);
console.log(height.value);
console.log(weight.value);

    let genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value;

    let BMR = calculateBMR(weight.value, height.value, Age.value, genderValue); 

    calories.innerHTML = BMR;
    maintain.innerText = BMR + 600;
    gainw.innerText = BMR + 900;
    losew.innerText = BMR + 300;

}

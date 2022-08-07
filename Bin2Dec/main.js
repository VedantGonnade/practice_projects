// import
const prompt = require('prompt-sync')({sigint: true});

// greeting and variable defination
console.log("Hello");
const num = prompt("Enter a valid binary number to convert it into a decimal format (Number should contain only 1 and 0): ");
let lengthOfNum = num.length;
let initialLength = 0;
let valid = true;

// function to check whether the entered number is a valid binary number.
async function checkValidBinry(numbers){
    if(lengthOfNum > 8){
        console.log("Sorry! The maximum length of number must be less than 8");
        valid = false

    }
    else if(lengthOfNum === 0) {console.log("No number is entered"); valid = false;}
    else{
        for (const number of numbers){
            if (number !== '1'&& number !=='0') {
                console.log("invalid binary number");
                valid = false;
                break;
            }else
            {
                initialLength++
                if (initialLength === lengthOfNum){
                    valid = true;
                    console.log("The number is a valid binary number")
                }
            }
        }
    }
    return valid
}

// function which converted binary to its decimal equivalent
async function convertBinToDec(){
    const status = await checkValidBinry(num)
    let totalSum = 0;
    if (status == true){
        for (let number in num){
            number = Number(num[number]);
            let sum = number* 2**(lengthOfNum - 1);
            totalSum = totalSum + sum;
            lengthOfNum--;             
        }
        console.log(totalSum);
    }
    return totalSum
}

// calling the fuction
convertBinToDec();


console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count < 0){
        console.log(`Invalid Input`);
        return;
    }
for(let i = 0; i <= count; i ++){
    if(i % 2 !== 0){
        console.log(`${i} is an odd number`);
    }
    else{
        console.log(`${i} is an even number`);
    }
}  


}
printOdds(-3);

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{

    if(!userName || !age){
    console.log(`PLease provide your info.`)
    return;
    }


    let aboveSixteen = `Congrats, ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you cant drive`;

    if( age < 16){
        console.log(belowSixteen);
    } else{
        console.log(aboveSixteen);
    }
  
}

checkAge();
checkAge("William", 36);


checkAge(`Peter`, 14);







console.log(`ex 3 \n----------------`);

function Cartesian(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x === 0 && y !== 0) {
        return "y-axis";
    } else if (x !== 0 && y === 0) {
        return "x-axis";
    } else {
        return "origin";
    }

}
console.log (Cartesian(0, 0));
console.log (Cartesian(1, 1));
console.log (Cartesian(-1, -1));
console.log (Cartesian(-1, 1));
console.log (Cartesian(0, 0));



console.log(`ex 4 \n------------------`)
function isValidTriangle(a, b, c){
return a + b > c || a + c > b || c + b > a
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle (a, b, c);
    if(isValid){
        if(a == b && b == c){
            return (`equallateral`)
        }
        else if (a === b || b === c || a === c) {
            return "isosceles";
        } else {
            return "scalene";
        }
    } else {
        return "Not a valid triangle";
    }
}


            console.log(checkTriangle(3, 3, 4)); 
            console.log(checkTriangle(3, 4, 5)); 
            console.log(checkTriangle(1, 2, 3)); 
            console.log(checkTriangle(3, 3, 3)); 

    






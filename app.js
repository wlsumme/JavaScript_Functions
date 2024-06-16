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

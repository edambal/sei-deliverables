// Write a for loop that will log the numbers 1 through 20.
// 🔴 The commit message should read:
// "Commit 1 - Easy Going answered"

for(let i=1;i<=20;i++){
    console.log(i);
}


// ## Get Even
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 2 - Get Even answered"

for(let i=0;i<=200;i+=2){
    console.log(i);
}


// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// >Hint: You will need to use Math.random()

// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 3 - Excited Kittens answered"
// <hr>
const random1Array = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."];
const nonrandom = "Love me, pet me! HSSSSSS!";
for(let i=0;i<20;i++){
    
    if(i%2 !== 0){
        console.log(random1Array[Math.floor(Math.random()*3)]);
    }
    else{
        console.log(nonrandom);
    }
}


// ## Fizz Buzz 

// >NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

// Write a javascript application that logs all numbers from 1 - 100 **AND**: 

//   1. If a number is divisible by 3 log "Fizz" instead of the number.
  
//   1. If a number is divisible by 5 log "Buzz" instead of the number.
  
//   1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
    
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 4 - Fizz Buzz answered"
// <hr></hr>

for(let i=1;i<=100;i++){
    if(i%3===0 && i%5 ===0)
        console.log("FizzBuzz");
    else if(i%3===0)
        console.log("Fizz");
    else if(i%5===0)
        console.log("Buzz");
    else
        console.log(i);
}
// Credit - Youtube Coder Foundy
// Wanted to use the ternary operator

for(let i=1;i<=100;i++){

    let result = '';
    result+= ((i%3===0 ? 'Fizz' : '') + (i%5 === 0 ? 'Buzz':'') || i);
    console.log(result);
    
}
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the `kenny` array and replace it with "Gameboy".

// kenny.shift();
// kenny.unshift("Gameboy");
//kenny.splice(0,1,"Gameboy");
kenny[kenny.indexOf("Kenny")] = "Gameboy";
console.log(kenny);

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was

jimClark[1]+=1;
console.log(jimClark);

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = "Gotham City";
console.log(ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.splice(2,1,"chicago");
console.log(reuben);

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

jimHaff.pop() && jimHaff.push("Beijing","Lhasa","Tokyo");
console.log(jimHaff);

// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)
jimHaff.splice(2,1);
console.log(jimHaff);


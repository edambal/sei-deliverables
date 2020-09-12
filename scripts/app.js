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

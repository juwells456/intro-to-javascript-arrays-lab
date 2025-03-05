// // const movies = ["Barbie", "Interstellar", "Get Out"]

// // // Grab the first element in the movie array

// // "Barbie"
// // const firstEl = movies[1]
// // console.log(firstElnode)

// // movies.push("Aliens")
// // console.log(movies)

// // // Assign an empty array to a variable named books.
// // // Add ‘The Shining’ and ‘Pride and Prejudice’ or 2 other books of your choice to the books array.
// // // console.log() the second element of books.
// // // Update the second element by assigning to it ‘Dune’ or another book of your choice.
// // // Iterate over the entire books array and console.log() each book string.

// // // Step 1: Assign an empty array to a variable named books.

// // const books = []

// // // Step 2: Add ‘The Shining’ and ‘Pride and Prejudice’ or 2 other books of your choice to the books array.

// // push.books('The Shining', 'Pride and Prejudice');

// // // Step 3: // console.log() the second element of books.

// // console.log('Pride and Prejudice')

// // // Step 4: // Update the second element by assigning to it ‘Dune’ or another book of your choice.

// // movies[1] = "Dune"

// // Step 5: // Iterate over the entire books array and console.log() each book string.

// // movies.forEach(())


// // // JS Arrays
// // const movies = ["Barbie", "Interstellar", "Get Out"]

// // // Grab the first element in the movie array
// // const firstEl = movies[0]
// // console.log(firstEl)

// // // Length
// // console.log(movies.length)

// // // Get the last item in an array
// // const lastEl = movies[movies.length - 1]

// // // Updating an array
// // movies[1] = "Arrival"
// // console.log(movies)

// // // Adding and removing from the end of the array
// // movies.push("Inherent Vice", "Top Gun")
// // console.log(movies)

// // movies.pop()
// // console.log(movies)

// // // Looping
// // for(let i = 0; i < movies.length; i++) {
// //   console.log(`Movie ${movies[i]} is in index ${i}`)
// // }

// // // Looping using the forEach iterator method
// // movies.forEach((movie, index) => {
// //   console.log(`Movie ${movie} is in index ${index}`)
// // })

// // // Join
// // const joinMovies = movies.join(" ^ ")
// // console.log(typeof joinMovies)

// const music = {
//     currentTrack: 'Just Ken',
//     currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];
//     volume: 70,
//     myPlaylist: 'Linkin Park', 'Bob Marley', 'Coldplay',
// }

// console.log(myPlaylist)

// delete myPlaylist

// console.log(music)

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

// const foods = ["pizza", "cheeseburger"]

foods.push("pizza", "cheeseburger")

console.log('Exercise 2 result:', foods);




/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// const foods = ["pizza", "cheeseburger"]
 
// Used the unshift button to remove pizza and replaced pizza with the string taco

foods.unshift("taco")

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/



let favFood = foods[1]

// const foods = ["pizza", "cheeseburger"]

// const foods = ["pizza", "cheeseburger"]

console.log('Exercise 4 result:', favFood);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/


// const foods = ["pizza", "cheeseburger"]

foods.splice(2, 0, "tofu")

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// const foods = ["pizza", "cheeseburger"]

foods.splice(1, 1, "sushi", "cupcake");

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// let foods = ["sushi", "cupcake", "cheeseburger"];

let yummy = foods.slice(1, 3);

console.log('Exercise 7 result:', yummy);



/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// let foods = ["sushi", "cupcake", "tofu", "cheeseburger"];

let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

// let foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];

let allFoods = foods.join(" -> ");

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

// let foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];

let hasSoup = foods.includes("soup");

console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

// nums.forEach(num => {
//     if (num % 2 !== 0) {
//         odds.push(num);
//     }
// });

for (let index = 0; index < nums.length; index++ ) {
    let num = nums[index]
    
    if (num % 2 !== 0) {
        odds.push(num);
    }   
}

console.log('Exercise 11 result:', odds);



/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

// const nums = [3, 5, 10, 15, 18, 20, 30, 33, 35, 45, 60, 75, 90, 100]

let fizz = [];
let buzz = [];
fizzbuzz = [];

nums.forEach(num => {
    if (num % 3 === 0) {
        fizz.push(num);
    } 
    if (num % 5 === 0) {
        buzz.push(num);
    }
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]; 

console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);


/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0 

// const numsArrays = [[100, 5, 23], [15, 21, 72, 9] [45, 66] [7, 81, 90]]

for (let index = 0; index < numArrays.length; index++){
    const numArray = numArrays[index]
    // console.log(numArray)

    for ( let inner = 0; inner < numArray.length; inner++) {
        // console.log(numArray[inner])
        total += numArray[inner]
    }

}

console.log('Exercise 15 result:\n', total);



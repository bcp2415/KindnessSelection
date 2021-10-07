function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];




//Experiment with the code above. Try to:
//a) Print 3 random selections from each array.

/*for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}
*/

//b) Have the code randomly pick one array, and then print 2 random items from it.

const arrayContainer = [happiness, words];

/*
function print2FromRandomArray() {
  const arrayChoice = Math.floor(Math.random() * 2);

  for (let i = 0; i < 2; i++) {
    console.log(randomSelection(arrayContainer[arrayChoice]));
  };
}


print2FromRandomArray();
*/

//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

let newArray = [];

for (let i = 0; i < 2; i++) {
  newArray.push(randomSelection(arrayContainer[i]));
};
console.log(newArray);
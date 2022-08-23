console.log("1. Lowest to Highest")

const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

array.sort((a, b) => a - b)
console.log(array);




console.log("------------------------------------")

console.log("2. Aphabetical Order")

const string = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

string.sort()

console.log(string);



console.log("------------------------------------")

console.log("Bonus ex 1.")




console.log("------------------------------------")

console.log("Bonus ex 2.")

const nameLength = ["Danica", "Lala", "Daniel" , "Alina", "Bob"];

nameLength.sort(function(a,b) {
    a.length - b.length 
    return a.length -b.length
});

console.log(nameLength);
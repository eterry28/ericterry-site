---
title: "Generate Drink Options"
date: "2019-07-29"
excerpt: "Our team has once again been tasked with creating a solution for her latest ask – A Drink Flavor Generator."
category: ["Comrade Cola", "typescript"]
tags: ["comrade-cola", "typescript"]
---
The Chairwoman is overjoyed. The Comrade Cola machines are a huge success. She is now ready to take her legacy to the next level. Our team has once again been tasked with creating a solution for her latest ask – A Drink Flavor Generator. Who would want to miss out on exciting and exotic flavors like Cherry Dr. Dimitri or Vanilla Babushka Tea? Let’s see how we’ll go about implementing a way to generate options with javascript.

Contents   
1 The Structure
2 So Many Choices
3 Some Rando
4 Time to Generate Options
5 Day 10 : July 29, 2019 Monday
6 Related
The Structure
We’ll make it so the Chairwoman can dream up new flavors from her browser. Remember, do your best to maintain the separation of responsibilities. Here are the files needed for that.

Index.js – The objects and their actions.
Index.html – The structural support.
Styles.css – The look and feel of elements.
So Many Choices
Index.js is the star of the show for our solution. It contains two functions: generateDrink(), and displayDrink().

function generateDrink() {
    ...
}

function displayDrink(drink) {
    ...
}
First up, a trip to Flavorland. Here, we have an array of flavors to choose from. We will also use arrays to hold the base drink options and the sweetener options.

var flavors = ["Cherry", "Vanilla", "Lemon", "Lime", "Strawberry", "Grape", "Orange", "Sour Apple", "Watermelon", "Peach", "Raspberry", "Blackberry", "Mango", "Tutti Frutti"];

var bases = ["Comrade Cola", "Dr. Dimitri", "Babushka Tea", "Mistery Mountain", "Gulag Punch", "Unity Water"];

var sugars = ["Zero Sugar", "Original", "Saccharin Enhanced"];
Some Rando
JavaScript has a built-in Math object. We’ll make use of the Math.random() function which is a pseudo-random number between 0 and 1. Math.floor() will give us  the largest integer less than or equal to a number. Together with the length of the array, these functions will help us generate options for a new drink for the Chairwoman. 

var randomFlavor = Math.floor(Math.random() * flavors.length);
var randomBase = Math.floor(Math.random() * bases.length);
var randomSugar = Math.floor(Math.random() * sugars.length);
It is time to construct the drink now that we have the building blocks. The drink is an object.

var drink = {
        flavor: flavors[randomFlavor],
        base: bases[randomBase],
        sugar: sugars[randomSugar]
};

return drink;
The structure of that object should have a familiar key-value look. We are using javascript’s object notation – JSON.

Returning the drink object is the last bit for this function.

Time to Generate Options
Earlier we saw the method definition is expecting a drink to be passed whenever it is called. It is easy to forget that drink is an object since javascript is not a typed language. Here’s how we will use the the object.

var newDrink = "The next big drink is: " + drink.sugar + " " + drink.flavor + " " + drink.base;
console.log(newDrink);
The web view is much more user friendly. And we want to keep the Chairwoman on our side, right? She can generate options all day long with this.

[Drink Generator](/comrade/drink-generator)
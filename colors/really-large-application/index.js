const colors = require('colors');

const chosenColor = colors.getRandomColor();
console.log(`You should use ${chosenColor.name}`);

const favoriteColor = colors.getBlue();
console.log(`My favorite color is ${favoriteColor.name}, btw`);
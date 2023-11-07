// 1. Package 1 : sillyname
// var generateName = require("sillyname");    // 모듈 불러오기

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// 2. Package 2 : superheroes
import superheroes from "superheroes";

var heroName = superheroes.random()

console.log(`I am ${heroName}!`);
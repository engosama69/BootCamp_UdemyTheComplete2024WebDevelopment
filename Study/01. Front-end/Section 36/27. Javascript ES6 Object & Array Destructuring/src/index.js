// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

// Practice 1
console.log(animals);
const [cat, dog] = animals;
console.log(cat);

const { name: catName, sound: catSound } = cat; // 각각의 속성들에 별칭 추가
console.log(catName, catSound);

const { name = "Fluffy", sound = "Purr" } = cat; // name이 undefined일 경우, 해당 name에 Fluffy가 들어간다.
console.log(name);

const {
  feedingRequirements: { food, water: catWater },
} = cat;
console.log(food, catWater);

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      length(animal.sound);
    },
  ];
}

// Practice 2
const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

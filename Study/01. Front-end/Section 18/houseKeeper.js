/*
var houseKeeper1 = {
    yearOfExperience: 12,
    name: "Jade",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}
*/

function houseKeeper(yearOfExperience, name, cleaningRepertoire) {
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new houseKeeper(12, "Jade", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new houseKeeper(8, "Tom", ["lobby"]);

houseKeeper1.clean();   // 메서드 동작
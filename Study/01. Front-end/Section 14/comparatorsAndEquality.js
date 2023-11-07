var a = "1";
var b = 1;

console.log(typeof(a));    // string
console.log(typeof(b));    // number

// yes
if (a == b) {
    console.log("yes");
}
else {
    console.log("no");
}

// no
if (a === b) {    // 자료형(Data Type)까지 체크
    console.log("yes");
}
else {
    console.log("no");
}
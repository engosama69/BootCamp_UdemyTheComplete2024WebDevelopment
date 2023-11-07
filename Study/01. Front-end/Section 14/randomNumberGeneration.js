yourName = prompt("What is your name?");
theirName = prompt("What is their name?");

var loveScore = Math.random();           // 0 ~ 0.9999...
loveScore = loveScore * 100;             // 0 ~ 99.9999....
loveScore = Math.floor(loveScore) + 1;   // 1 ~ 100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "% You love each other a lot!");
}
else {
    alert("Your love score is " + loveScore + "%");
}
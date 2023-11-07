// length 사용하기
var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + "characters, you have " + (140 - tweetCount) + "characters remaining.");

// slice 사용하기
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140)
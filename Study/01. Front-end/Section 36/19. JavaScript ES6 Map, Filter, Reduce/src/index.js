import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100); // 첫 100자만 추출
});

console.log(newEmojipedia);

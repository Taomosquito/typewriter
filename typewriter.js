// values that are both predictable and setting the stage for the rest of the code.
const sentence = "hello there from lighthouse labs";
let delay = 0


for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
};
setTimeout(() => {
  process.stdout.write('\n');
}, delay)
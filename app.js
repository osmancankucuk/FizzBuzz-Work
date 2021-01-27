let x = 15;
for (let i = 0; i < 200; i = i + 1) {
  if (i == 0) {
    console.log(0);
    continue;
  }
  if (i % x == 0) {
    console.log("Fizzbuzz");
    continue;
  }
  if (i % 3 == 0) {
    console.log("Fizz");
    continue;
  }
  if (i % 5 == 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}

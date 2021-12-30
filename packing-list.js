const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

for (let i = 0; i < packingList.length; i++) {
  let a = 0;
  if (packingList[i] === "plates") {
    a = packingList[1];
}
console.log(a);

}

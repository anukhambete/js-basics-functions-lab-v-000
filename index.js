// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(block -42);
}

function distanceFromHqInFeet (block) {
  distanceFromHqInBlocks(block)*264;
}

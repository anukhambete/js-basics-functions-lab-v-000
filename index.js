// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(block -42);
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (a,b) {
  return (Math.abs(a-b) * 264);
}

calculatesFarePrice (start, destination) {
  let dist = function distanceTravelledInFeet (start, destination)

    if (dist <= 400) {
      return 0;
    } else if (dist > 400 && dist <= 2000) {
      return dist * 0.02;
    } else if (dist > 2000 && dist < 2500) {
      return 25;
    } else if (dist > 2000) {
      return 'cannot travel that far';
    }
}

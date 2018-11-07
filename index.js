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

function calculatesFarePrice (start, destination) {
  const dist = function distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}

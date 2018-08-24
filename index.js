// Code your solution in this file!
function distanceInBlocks(point1, point2) {
  return Math.abs(point1 - point2);
}
function blocksToFeet(blocks) {
  return blocks * 264;
}
function distanceFromHqInBlocks(location) {
  return distanceInBlocks(location, 42);
}
function distanceFromHqInFeet(location) {
  return blocksToFeet(distanceFromHqInBlocks(location));
}

function distanceTravelledInFeet(point1, point2) {
  return blocksToFeet(distanceInBlocks(point1,point2));
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if ( distance>400 && distance<2000 ) {
    return distance * .02;
  } else if ( distance > 2000 ) {
    return 25;
  } else if ( distance > 2500 ) {
    return "cannot travel that far";
  }
  else {
    return 0
  }
}

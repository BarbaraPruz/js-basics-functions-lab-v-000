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
  distance -= 400
  if ( distance <= 0 )
    return 0;
  else if distance < 1600 ) {
    return distance * .02;
  } else if ( distance < 2100 ) {
    return 25;
  }  else
    return "cannot travel that far";
  }

}

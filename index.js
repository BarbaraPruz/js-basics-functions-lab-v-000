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

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
  console.log("p1=" + point1 + " p2=" + point2);
  console.log("dinb=" + distanceInBlocks(point1,point2));
  console.log("btf=" + blocksToFeet(distanceInBlocks(point1,point2)));
    blocksToFeet(distanceInBlocks(point1,point2));
}

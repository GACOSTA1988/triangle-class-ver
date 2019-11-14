Triangle.prototype.checkType = function() {
  // checks
  // each input is a number, or a string with a number
  // each input is > 0
  // each side must be less than the sum of the other two
  // figure out which triangle you have


  // if
  // ((isNaN(this.side1) === true ) ||
  // ((isNaN(this.side2) === true )) ||
  // (( isNaN(this.side3) === true ))) {
  //   return "this string does not contain a number"

  // } else if
  // ((typeof this.side1 === "string" ) ||
  // (typeof this.side2 === "string" ) ||
  // ( typeof this.side3 === "string" )) {
  //   return "this is string cheese"

  // } else if
  // ((parseInt(this.side1) <= 0 ) ||
  // (parseInt(this.side2) <= 0 ) ||
  // (parseInt(this.side3) <= 0 )) {
  //   return "this is a negative number"

  // } else if
  // ((this.side1 > (this.side2 + this.side3)) ||
  // (this.side2 > (this.side1 + this.side3)) ||
  // (this.side3 > (this.side1 + this.side2))) {
  //   return "not a triangle"

  // } else if
  // ((this.side1 !== this.side2) &&
  // (this.side1 !== this.side3) &&
  // (this.side2 !== this.side3)){
  //   return "scalene triangle"

  // } else if
  // ((this.side1 === this.side2) &&
  // (this.side1 === this.side3) &&
  // (this.side2 === this.side3)) {
  //   return "equilateral triangle";

  // } else if
  // ((this.side1 === this.side2) ||
  // (this.side1 === this.side3) ||
  // (this.side2 === this.side3)) {
  //   return "isosceles triangle";
  // }
};


export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

// addSides :: triangleObject -> number
// function receives a triangle, returns the sum of the sides
export function addSides(triangle) {
  var a = triangle.side1;
  var b = triangle.side2;
  var c = triangle.side3;

  return a + b + c;
}

// multiplySides :: triangleObject -> number
// function receives a triangle, returns the product of the sides
// eslint-disable-next-line no-unused-vars
export function multiplySides(triangle) {
  var a = triangle.side1;
  var b = triangle.side2;
  var c = triangle.side3;

  return a * b * c;
}
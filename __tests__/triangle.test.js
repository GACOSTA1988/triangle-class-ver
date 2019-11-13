import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly determine whether the input string contains a number', () => {
    var stringWithNumber = new Triangle("e","e","e")
    expect(stringWithNumber.checkType()).toEqual("this string does not contain a number");
  });
  test('should correctly determine whether the input is a string', () => {
    var string = new Triangle("2","2","2")
    expect(string.checkType()).toEqual("this is string cheese");
  });
  test('should correctly determine whether the input is a negative number', () => {
    var negNumber = new Triangle(-8,-3,-3)
    expect(negNumber.checkType()).toEqual("this is a negative number");
  });
  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle(2,9,5);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test('Should correctly determine whether threee lengths make a scalene triangle', function(){
    var scalTraingle = new Triangle(4,5,7)
    expect(scalTraingle.checkType()).toEqual("scalene triangle");
  });
  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    var isoTriangle = new Triangle(5,5,7)
    expect(isoTriangle.checkType()).toEqual("isosceles triangle");
  });
  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    var equilTriangle = new Triangle(5,5,5)
    expect(equilTriangle.checkType()).toEqual("equilateral triangle");
  });
});

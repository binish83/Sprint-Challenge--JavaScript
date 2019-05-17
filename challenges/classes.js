// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
//CuboidMaker Constructor
function CuboidMaker(CMattributes){
    this.length = CMattributes.length;
    this.width = CMattributes.width;
    this.height = CMattributes.height;
  }
//Methods for CuboidMaker Constructor
  CuboidMaker.prototype.volume = function(length,width,height){
    return `Cuboid's Volume is equal to (${this.length} * ${this.width} * ${this.height})`;
  }

// Class CuboidMaker  
class CuboidMaker{
    constructor(CMAttributes){
        this.length = CMattributes.length;
        this.width = CMattributes.width;
        this.height = CMattributes.height;
    }
    
}
//CLASS Method for Volume of CuboidMaker
volume(length,width,height) {
    return `Cuboid's Volume is equal to (${this.length} * ${this.width} * ${this.height})`
}


  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
  
  volume(length,width,height) {
      return `Cuboid's Volume is equal to (${this.length} * ${this.width} * ${this.height})`
  }
  
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  CuboidMaker.prototype.surfaceArea = function(length,width,height){
    return `Surface = (2 * (${this.length} * ${this.width} + ${length.width} * ${this.height} + ${this.width} * ${this.height})`
  }
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboid = new CuboidMaker({
    'length': 4,
    "width": 5,
    "height": 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  // console.log(cuboid.volume()); // 100
  // console.log(cuboid.surfaceArea()); // 130
  
  
  

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


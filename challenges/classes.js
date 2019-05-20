// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


// Class CuboidMaker Constructor Function 
class CuboidMaker{
    constructor(CMAttributes){
        this.length = CMattributes.length;
        this.width = CMattributes.width;
        this.height = CMattributes.height;
    }
    volume() {
        return `Cuboid's Volume is equal to (${this.length} * ${this.width} * ${this.height})`
    }
    surfaceArea(){
        return `Surface = (2 * (${this.length} * ${this.width} + ${length.width} * ${this.height} + ${this.width} * ${this.height})`
    }
}
//CLASS Method for Volume of CuboidMaker

//CLASS Method for Volume of CuboidMaker


  
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


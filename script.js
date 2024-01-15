//ES5
const Carr = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};
const car1 = new Carr("Lambo", "Huracan", "2019");
console.log(car1);
//ES6 Syntax for constructors

class Vehicle {
  constructor(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
  }
}

class Car extends Vehicle {
  // constructor(make, model, year, horsePower) {
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.horsePower = horsePower;
  // }
  constructor(make, model, year, horsePower, type) {
    super(make, model, year, type || "Car");

    this.horsePower = horsePower;
  }
  startCar() {
    console.log(`The ${this.make} has started!`);
  }
  stopCar() {
    console.log(`The ${this.make} has stopped!`);
  }
}
class Truck extends Vehicle {
  constructor(make, model, year, tires, type) {
    super(make, model, year, type || "Truck");
    this.tires = tires;
  }
}

const AudiA4 = new Car("Audi", "A4", "2019", 198);
console.log(AudiA4);
const ToyotaSupra = new Car("Toyota", "Supra", "1997", 326, "Car");
console.log(ToyotaSupra);
const NissanGTR = new Car("Nissan", "SkylineGTR R34", "2002", 280, "SuperCar");
console.log(NissanGTR);

const truck1 = new Truck("Truck", "Sky", "2003", "OffRoad");
console.log(truck1);

class Driver {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  driveVehicle(vehObj) {
    console.log(
      `${this.name} is driving a ${vehObj.type}, ${
        (vehObj.make, vehObj.model)
      } with ${vehObj.horsePower || "400"} hp!`
    );
  }
}
const driver1 = new Driver("Mark", 25, 7);
console.log(driver1);
const driver2 = new Driver("Jon", 21, 2);
console.log(driver2);
const driver3 = new Driver("Charles", 29, 10);
console.log(driver3);

driver3.driveVehicle(NissanGTR);
driver1.driveVehicle(truck1);

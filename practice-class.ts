class Car {
  id: number;
  model: string;

  constructor(id: number, model: string) {
    this.id = id;
    this.model = model;
  }

  // return type void since we are not returning a value just printing
  displayMakeAndId(): void {
    console.log("ID = " + this.id + ", Car Model = " + this.model);
  }
}

let car = new Car(1, "Mustang");
car.displayMakeAndId(); // ID = 1, Car Model = Mustang

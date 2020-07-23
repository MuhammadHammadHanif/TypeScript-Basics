class Machine {
  drive(): void {
    console.log('chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Machine {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();

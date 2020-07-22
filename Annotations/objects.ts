const profile = {
  name: 'Hammad',
  age: 25,
  coords: {
    x: 20,
    y: 10,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Properties destructuring

const { age }: { age: number } = profile;

const {
  coords: { x, y },
}: { coords: { x: number; y: number } } = profile;

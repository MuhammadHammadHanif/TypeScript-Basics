// Annotation: Tell typescript what type of arguments a function will recieve and what type of value it will return
// Inference: Typescript tries to figure out type of value function will return but not figure out the type of aruguments a function has

const addNumber = (a: number, b: number): number => {
  return a + b;
};

const logger = (message: string): void => {
  console.log(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

// Simple
const forCast = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(`${todaysWeather.date} and ${todaysWeather.weather}`);
};

// Destucture
const forCast1 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(`${date} and ${weather}`);
};

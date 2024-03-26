export type Weather = {
  id: number;
  city: string;
  temperature: number;
  description: string;
};

export const weatherData = [
  { id: 1, city: "Paris", temperature: 20, description: "Sunny" },
  { id: 2, city: "London", temperature: 15, description: "Cloudy" },
  { id: 3, city: "Berlin", temperature: 18, description: "Rainy" },
  { id: 4, city: "Madrid", temperature: 27, description: "Sunny" },
  { id: 5, city: "Rome", temperature: 25, description: "Cloudy" },
  { id: 6, city: "Amsterdam", temperature: 16, description: "Rainy" },
  { id: 7, city: "Brussels", temperature: 17, description: "Sunny" },
  { id: 8, city: "Vienna", temperature: 19, description: "Cloudy" },
  { id: 9, city: "Prague", temperature: 22, description: "Rainy" },
  { id: 10, city: "Dublin", temperature: 14, description: "Sunny" },
  { id: 11, city: "Helsinki", temperature: 11, description: "Cloudy" },
];

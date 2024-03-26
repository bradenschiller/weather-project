"use client";

import React, { useState } from "react";
import { weatherData, Weather } from "@/app/data/weatherData";
import WeatherCard from "./WeatherCard";

export default function WeatherList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteWeather, setFavoriteWeather] = useState<Weather[]>([]);
  const [remainingWeather, setRemainingWeather] =
    useState<Weather[]>(weatherData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredWeatherData = remainingWeather.filter((weather) =>
    weather.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onAddFavorite = (cityId: number) => {
    const weather = weatherData.find((weather) => weather.id === cityId);

    if (weather) {
      setFavoriteWeather([...favoriteWeather, weather]);
      setRemainingWeather(remainingWeather.filter((w) => w.id !== cityId));
    }
  };

  const onRemoveFavorite = (cityId: number) => {
    const weather = favoriteWeather.filter((weather) => weather.id !== cityId);
    const removedWeather = favoriteWeather.find(
      (weather) => weather.id === cityId
    );

    if (weather && removedWeather) {
      setFavoriteWeather([...weather]);
      setRemainingWeather([...remainingWeather, removedWeather]);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search city"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 text-black w-full"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="border border-white rounded-lg shadow">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-4">City</th>
              <th className="px-4 py-4">Temperature</th>
              <th className="px-4 py-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredWeatherData.map((weather) => (
              <WeatherCard
                key={weather.id}
                weather={weather}
                onAddFavorite={onAddFavorite}
                onRemoveFavorite={onRemoveFavorite}
                isFavorite={false}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col item-center border border-white shadow rounded-lg">
        <h2 className="text-4xl text-center font-bold">Favorites</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-4">City</th>
              <th className="px-4 py-4">Temperature</th>
              <th className="px-4 py-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {favoriteWeather.map((weather) => (
              <WeatherCard
                key={weather.id}
                weather={weather}
                onAddFavorite={onAddFavorite}
                onRemoveFavorite={onRemoveFavorite}
                isFavorite={true}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

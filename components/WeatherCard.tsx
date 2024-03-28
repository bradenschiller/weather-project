"use client";

import * as React from "react";
import { Weather } from "@/app/data/weatherData";
import { convertToFahrenheit } from "@/app/utils/temperature";

export interface WeatherCardProps {
  weather: Weather;
  onRemoveFavorite: (cityId: number) => void;
  onAddFavorite: (cityId: number) => void;
  isFavorite: boolean;
}

export default function WeatherCard(props: WeatherCardProps) {
  const [toFahrenheit, setToFahrenheit] = React.useState<boolean>(false);
  const { weather, onRemoveFavorite, onAddFavorite, isFavorite } = props;

  const handleClick = (cityId: number) => {
    if (isFavorite) {
      onRemoveFavorite(weather.id);
    } else {
      onAddFavorite(weather.id);
    }
  };

  return (
    <tr key={weather.id}>
      <td className="border px-4 py-2">{weather.city}</td>
      <td
        onClick={() => setToFahrenheit(!toFahrenheit)}
        className="border px-4 py-2"
      >
        {toFahrenheit
          ? `${convertToFahrenheit(weather.temperature)} °F`
          : `${weather.temperature} °C`}
      </td>
      <td className="border px-4 py-2">{weather.description}</td>
      <td className="border px-4 py-2">
        <button
          onClick={() => handleClick(weather.id)}
          className={`${
            isFavorite ? "bg-red-600" : "bg-green-600"
          } py-2 px-2 rounded-md`}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </td>
    </tr>
  );
}

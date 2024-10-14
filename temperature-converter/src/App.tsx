import React, { Component } from "react";

interface TemperatureConverterState {
  temperature: number;
  scale: "C" | "F";
}

class TemperatureConverter extends Component<{}, TemperatureConverterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      scale: "C",
    };
  }

  // Method to handle input change
  handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ temperature: parseFloat(event.target.value) });
  };

  // Method to handle scale change (Celsius or Fahrenheit)
  handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ scale: event.target.value as "C" | "F" });
  };

  // Convert Celsius to Fahrenheit
  toFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }

  // Convert Fahrenheit to Celsius
  toCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }

  render() {
    const { temperature, scale } = this.state;
    const convertedTemp =
      scale === "C"
        ? this.toFahrenheit(temperature)
        : this.toCelsius(temperature);
    const scaleLabel = scale === "C" ? "Celsius" : "Fahrenheit";
    const convertedLabel = scale === "C" ? "Fahrenheit" : "Celsius";

    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-poppins">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full">
          <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
            Temperature Converter
          </h1>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Enter temperature in {scaleLabel}:
            </label>
            <input
              type="number"
              value={temperature}
              onChange={this.handleTemperatureChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Select Scale:
            </label>
            <select
              value={scale}
              onChange={this.handleScaleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            >
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
            </select>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg shadow-md">
              Converted Temperature: {convertedTemp.toFixed(2)} {convertedLabel}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;

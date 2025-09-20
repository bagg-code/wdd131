// Set footer year and last modified
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // Weather static values
  const temp = 24; // Celsius
  const wind = 12; // km/h

  document.getElementById("temp").textContent = temp;
  document.getElementById("wind").textContent = wind;

  // Windchill calculation (Celsius version)
  function calculateWindChill(t, v) {
    // Only valid for T <= 10°C and wind > 4.8 km/h
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
  }

  let windchill = "N/A";
  if (temp <= 10 && wind > 4.8) {
    windchill = Math.round(calculateWindChill(temp, wind)) + "°C";
  }
  document.getElementById("windchill").textContent = windchill;

  // Show SVG icon in mobile, emoji in large view
  const weatherEmoji = document.getElementById("weather-emoji");
  if (window.innerWidth < 700) {
    weatherEmoji.innerHTML = ""; // SVG is shown in mobile by HTML
  } else {
    weatherEmoji.textContent = "⛅";
  }
});
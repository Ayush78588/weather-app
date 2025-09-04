export async function getWeather(city) {
  try {
    // First get coordinates of city using geocoding api
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }
    const { latitude, longitude } = geoData.results[0];

    // Fetch weather using lat/lon
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    return {
      city: geoData.results[0].name,
      country: geoData.results[0].country,
      ...weatherData.current_weather,
    };
  } catch (err) {
    throw err;
  }
}

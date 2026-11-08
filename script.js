async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city");
        return;
    }

    try {
        const API_KEY = "a9ab6ebaa2ec1e10c42a2ce33ac12996";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = `<p>City not found</p>`;
            return;
        }

        document.getElementById("result").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🤒 Feels Like: ${data.main.feels_like} °C</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p>Error fetching data</p>`;
    }
}
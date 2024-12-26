const API_KEY = "64f5daff420da604726b73d6079ba73d";

function geoOK(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log("you live in", lat, lon);
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(weatherUrl)
        .then(r => r.json())
        .then(data => {
                const city = document.querySelector("#weather span:last-child");
                const weather = document.querySelector("#weather span:first-child");

                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;

            }
        );
}

function geoError() {
    console.log("Can't Find you");
}

navigator.geolocation.getCurrentPosition(geoOK, geoError);


//
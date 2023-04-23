const root = document.getElementById("root");

// show the loading (spinner) before getting the data
root.innerHTML = `<div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;

// geolocation success function to get the location
const success = async ({ coords }) => {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);

  // talk to the weather api
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5300a6cd4a0c2f03900336d917e11d6f`
  );

  setWeather(data.list);
};

// set the weather on the html page
const setWeather = (list) => {
  // create html
  const html = list.map((item) => {
    return `<div class="item">
                        <h1>${new Date(item.dt * 1000).toLocaleString()}</h1>
                        <p>${
                          Math.round((item.main.temp - 273.15) * 10) / 10
                        }&#8451</p>
                        <p>${item.weather[0].description}</p>
                    </div>`;
  });

  // override html with new data from api
  root.innerHTML = html.join("");
};

const error = (error) => {
  console.log(error);
};

const config = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 2000,
};

navigator.geolocation.getCurrentPosition(success, error, config);

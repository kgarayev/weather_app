// console.log(`Hello world!`);

// const start = Date.now();

// const result = axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`);

// console.log(result);

// result
//   .then((result) => {
//     console.log(result);
//     console.log(Date.now() - start);
//   })
//   .catch((error) => {
//     console.log("dassag");
//   });

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.504238&lon=-0.467070&appid=5300a6cd4a0c2f03900336d917e11d6f`;

// show the loading (spinner) before getting the data
document.getElementById("root").innerHTML = `<div class="lds-spinner">
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

// this is simply to check that the spinner logic works
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// get data function
const getData = async () => {
  try {
    const demo = await delay(2000);

    console.log(demo);

    const { data } = await axios.get(apiURL);

    // console.log(data.list);

    // get the data
    const html = data.list.map((item) => {
      return `<div class="item">
                    <h1>${new Date(item.dt * 1000).toLocaleString()}</h1>
                    <p>${
                      Math.round((item.main.temp - 273.15) * 10) / 10
                    }&#8451</p>
                    <p>${item.weather[0].description}</p>
                </div>`;

      //   console.log(new Date(item.dt * 1000).toLocaleString());
      //   console.log(Math.round((item.main.temp - 273.15) * 10) / 10);
      //   console.log(item.weather[0].description);
    });

    // override html with new data from api
    document.getElementById("root").innerHTML = html.join("");
  } catch (error) {
    alert("Something went wrong!");
    console.log(`dassag`, error);
  }
};

getData();

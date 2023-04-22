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

const getData = async () => {
  try {
    const { data } = await axios.get(apiURL);
    console.log(data);
  } catch (error) {
    console.log(`dassag`, error);
  }
};

getData();

const axios = require("axios");
cidade = "New York";
limit = 1.0;
appid = "7b2cd3cc5568e58b3ddb64196db91746";
const url = (`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=${limit}&appid=${appid}`);
axios
    .get(url)
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .then((res) => {
        for (let coordenadas of res) {
         console.log(`
         ${'longitude: ' + coordenadas.lon}, ${'Latitude: ' + coordenadas.lat},`);
         const longitude = coordenadas.lon
         const latitude = coordenadas.lat
         }
         return res;
         })

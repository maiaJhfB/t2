const axios = require('axios')
let limit = 1.0;
const appid = "7b2cd3cc5568e58b3ddb64196db91746";
let cidade = "New York";
async function getCoord(cidade,limit,appid){
    const url = (`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=${limit}&appid=${appid}`);
    let res = await axios.get(url)
    return res.data
}
async function getCond(lat, lon) { 
        const url2 = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`);
        let res = await axios.get(url2)
        let {main, weather} = res.data;
        let {sensacao} = main;
        let descricao = weather[0].description;

        console.log(`Sensação Térmica é de, ${sensacao}`);
        console.log(`Sua descrição é, ${descricao}`);

    }

async function getResponse(){                                                     
   let res = await getCoord(cidade,limit,appid)
   let longitude
   let latitude
    for (let coordenadas of res) {
        let longitude = coordenadas.lon
        let latitude = coordenadas.lat
        console.log(`${'longitude: ' + longitude}, ${'Latitude: ' + latitude}.`);
    result = getCond(latitude, longitude)    
}}
getResponse()

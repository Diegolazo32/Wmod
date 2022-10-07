//const axios = require('axios').default;

/*
En este código intentamos obtener los ids de todos los libros que están en esta url remota y luego
basado en esto hacemos una consulta basada en cada id. Finalmente imprimimos todos los datos.
Usamos axios .get que devuelve una promesa.
*/
/*const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfWork = resp.data.work;
      console.log("respuesta" + resp.data);
      return listOfWork.map((work)=>{
        console.log("id" + work.workid);
        return work.workid
      })
    }).then((workids)=>{
        let promisesArr = [];
        workids.forEach((workid)=>{
            const req = axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
            promisesArr.push(req);
            req.then(resp=>{
                console.log(resp.data.titleAuth);
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');*/

let SanM = document.getElementById("SanM");
let Usu = document.getElementById("Usu");
let SanS = document.getElementById("SanS");


const axios = require('axios').default;

async function connectToURL(url, lat, lon) {
    const resp = await axios.get(url);

    const req = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=78a21ef19440fd21f659455f994e9e78`);
    console.log(req.data.main.temp);
    console.log(req.data.name);
    console.log(req.data.weather[0].description);
}

SanM.addEventListener("click", () => {
    lat = 13.3438204;
    lon = -88.4382264;
    connectToURL(`https://openweathermap.org/api`,lat,lon);
});
import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const CLEAN_VIDEOGAMES= "CLEAN_VIDEOGAMES"

export const getVideogames=()=> {              // function cambia a const con arrow
  return async function (dispatch) {          // asyn vamos a realizar una llamada a un externo
    try {                                     // try = tratamos   Await= espere hasta que tenga el dato no siga
    let json = await axios.get("http://localhost:3001/videogames");  // lo que me va a llegar es un json -axios nos permite hace un llamado al back (rutas)
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: json.data,
    });
  }catch (e){
    console.log(e);
  }
  };
}
export const cleanVideogames=(dispatch) => {
  return dispatch({
    type: CLEAN_VIDEOGAMES,
    payload: [],
  }) 

}         
///////////////////////////////   AQUI SE UNEN EL API Y EL CLIENT   ///////////////////

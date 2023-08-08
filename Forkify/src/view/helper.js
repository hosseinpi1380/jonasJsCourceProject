import { async } from "regenerator-runtime";
import * as config from '../config.js'
//couple of function that we use many time.
const timeout=function(s){
    return new Promise((_,reject)=>{
        setTimeout(reject, s*1000);
    })
};
export const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(url),timeout(config.TIME)]) ;
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  }
  catch(err){
    throw err;
  }
};

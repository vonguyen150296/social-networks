import axios from "axios";
import * as config from "../config";

export default function callApi(endpoint, method, data){
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    })

}
import axios from 'axios';
import { URLs } from '../config/scrapper.config'

export class AxiosService {
    
    async getLeerManga(url : string = URLs.main){
        try{

            let config = {
                method: 'get',
                url
            };
              
            const response = await axios(config)
            let data = response.data

            return data 

        }catch (error) {
            console.log(`Axios Service: ${error}`)
        }
    }
}
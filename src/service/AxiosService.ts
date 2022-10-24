import axios from 'axios';
import { main, URLs } from '../config/scrapper.config'

export class AxiosService {
    private config;

    public constructor () {
        this.config = {
            method: 'get',
            url: main
        }
    }
    
    public getLeerManga = async() =>{
        const res = await axios(this.config)            
        return res 
    }

    public getComic = async (
        id : string
    ) => {
        this.config.url = URLs.manga + id
        return await this.getLeerManga()
    }

    public getEpisode =async (
        id : string  = ""
    ) => {
        this.config.url = URLs.episode + id.toString()
        return await this.getLeerManga()
    }

    public getLibrary =async (
        page : string = ""
    ) => {
        this.config.url = URLs.library + page
        return await this.getLeerManga()
    }

    public getGender =async (
        type : string = "",
        page : string = ""
    ) => {
        this.config.url = URLs.gender + type + "?page=" + page
        return await this.getLeerManga()
    }

    public getSearch =async (
        name : string = "",
        page : string = ""
    ) => {
        this.config.url = URLs.library + page + "&search=" + name
        return await this.getLeerManga()
    }

}
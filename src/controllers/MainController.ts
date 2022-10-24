import { Response, Request } from "express";
import { HttpResponse } from "../http/HttpResponse";
import { module } from "../scripts"
import { AxiosService } from "../service/AxiosService";

export class MainController{
    private query : AxiosService = new AxiosService();

    public getMangaRecommend = (req: Request, res: Response) =>{

        this.query.getLeerManga().then(async response=>{

            module.setData(response.data)
            let data = await module.getRecommend()

            HttpResponse.request(res,data)
        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }

    public getMangaLastEpisodes = (req: Request, res: Response) => {
        this.query.getLeerManga().then(async response=>{

            module.setData(response.data)
            let data = await module.getLastEpisodes()

            HttpResponse.request(res,data)
        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }

    public getMangaLatest = (req: Request, res: Response) => {
        this.query.getLeerManga().then(async response=>{

            module.setData(response.data)
            let data = await module.getLastAdded()

            HttpResponse.request(res,data)
        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }

    public getMangaById = (req: Request, res: Response) => {

        this.query.getComic(req.params.id).then(async response=>{

            module.setData(response.data)
            let data = await module.getComic()

            HttpResponse.request(res, data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })

    }

    public getEpisodeById = (req: Request, res: Response) => {

        //HttpHelper.emptyParam(req, res)
        this.query.getEpisode(req.params.id).then(async response=>{

            module.setData(response.data)
            let data = await module.getEpisode()

            HttpResponse.request(res, data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
        
    }

    public getLibraryByPage = (req: Request, res: Response) => {

        this.query.getLibrary(req.query.page?.toString()).then(async response=>{

            module.setData(response.data)
            let data = await module.getLibrary()

            HttpResponse.request(res,data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }

    public getGenderByType = (req: Request, res: Response) => {

        this.query.getGender(req.params.name,req.query.page?.toString()).then(async response=>{

            module.setData(response.data)
            let data = await module.getGender()

            HttpResponse.request(res,data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })

    }

    
    public getMangaByName = (req: Request, res: Response) => {

        this.query.getSearch(req.params.name, req.query.page?.toString()).then(async response=>{

            module.setData(response.data)
            let data = await module.getSearch()

            HttpResponse.request(res,data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }

    
    public getGenderList = (req: Request, res: Response) => {
        this.query.getLibrary().then(async response=>{

            module.setData(response.data)
            let data = await module.getGenderList()

            HttpResponse.request(res,data)

        }).catch(err =>{
            HttpResponse.notFound(res,err)
        })
    }
}



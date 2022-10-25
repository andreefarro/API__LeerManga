import { Image as DataImage } from '../models/Image';
import { Selectors as selector, URLs } from '../config/scrapper.config';
import * as cheerio from 'cheerio';


export class Scrapper{
    private data : string = "";
    private $ : any = cheerio.load("")
    
    public setData = (data: any) =>{
        this.data = data
    }

    public getInfoCard = async(section : string) =>{

        //let __dom = await this.data.getLeerManga()
        this.$ = cheerio.load(this.data)

        let listCard =  this.$(section).toArray().map( (x: any) => {

            let strId      = this.$(x).find(selector.card.id).attr("href")
            let strEpisode = this.$(x).find(selector.card.episode).html()?.trim()
            let title      = this.$(x).find(selector.card.title).text().trim()            
            let comic      = this.$(x).find(selector.card.comic).text()          

            let id         = this.__parseIdManga(strId!!)
            let episodes   = this.__parseIntEpisodes(strEpisode!!)
            let image      = this.__attrImage(x, selector.card.image)

            return {
                id, title, comic, episodes, image            
            }

        })

        return listCard

    }

    public getInfoPoster = async(section : string) => {
        //let __dom = await this.data.getLeerManga()
        this.$ = cheerio.load(this.data)

        let listPoster =  this.$(section).toArray().map( (x: any) => {

            let strId      = this.$(x).find(selector.poster.id).attr("href")
            let strEpisode = this.$(x).find(selector.poster.episode).text()   
            let title      = this.$(x).find(selector.poster.title).text()  

            let image      = this.__attrImage(x ,selector.poster.image)
            let id         = this.__parseIdEpisode(strId!!)
            let episode    = this.__parseIntEpisodes(strEpisode!!)

            return {
                id, title, episode, image            
            }
        
        })

        return listPoster
    }

    public getInfoComic = async () => {
        //let __dom = await this.data.getComic(id)
        this.$ = cheerio.load(this.data)

        let title      = this.$(selector.comic.title).text()
        let comic      = this.$(selector.comic.type).text()        
        let year       = parseInt(this.$(selector.comic.year).text().trim())
        let synopsis   = this.$(selector.comic.synopsis).text().replace(/[\n\t\r]/g,"")

        let generes    = this.$(selector.comic.generes).toArray().map((x: any) => this.$(x).text())        
        let episodes   = this.$(selector.comic.episodes).toArray().map((x: any) => {
            
            let strEpisode = this.$(x).text().trim()
            let strId      = this.$(x).attr("href")

            let id         = this.__parseIdEpisode(strId!!)
            let number     = this.__parseIntEpisodes(strEpisode)

            return{
                id, number
            }
        })

        let numberOfEpisodes = episodes.length

        return{
            title, comic, year, synopsis, generes, numberOfEpisodes, episodes
        }

    }

    public getInfoEpisode = async () => {
        //let __dom = await this.data.getEpisode(id)
        this.$ = cheerio.load(this.data)
        
        let episode = this.$(selector.episode.images).toArray().map((x: any) => this.$(x).attr("data-src") )
        let numberOfImages = episode.length

        return {
            numberOfImages,
            episode
        }
    }   

    public getInfoLibrary = async () => {
        //let __dom = await this.data.getLibrary(page)
        this.$ = cheerio.load(this.data)
        
        let library = this.__filterManga()

        return library
    } 
    
    public getInfoGender = async () => {
        //let __dom = await this.data.getGender(type,page)
        this.$ = cheerio.load(this.data)
        
        let gender = this.__filterManga()

        return gender
    } 

    public getInfoSearch = async () => {
        //let __dom = await this.data.getSearch(name,page)
        this.$ = cheerio.load(this.data)
        
        let comicsSearch = this.__filterManga()

        return comicsSearch
    }

    
    public getInfoListGender = async () => {
        //let __dom = await this.data.getLibrary()
        this.$ = cheerio.load(this.data)
        
        let genders = this.$(selector.listGenders).toArray().map((x: any)=> this.$(x).text().trim() )
        let numberOfgenders = genders.length

        return { numberOfgenders, genders }
    }
    
    private __filterManga = () =>{
        let page         = parseInt(this.$(selector.posterLibrary.page).text()) || 1
        let number_pages = this.$(selector.posterLibrary.last_page).toArray().map((x: any) => this.$(x).text())
        let last_page    = parseInt(number_pages.reverse()[1]) || 1
        
        let comics    =  this.$(selector.library).toArray().map((x: any) => {

            let strId  = this.$(x).find(selector.posterLibrary.id).attr("href")
            let title  = this.$(x).find(selector.posterLibrary.title).text().trim()
            let comic  = this.$(x).find(selector.posterLibrary.type).text().trim()

            let id     = this.__parseIdManga(strId!!)
            let image  = this.__attrImage(x ,selector.posterLibrary.image)

            return{
                id, title, comic, image
            }
        })

        return {
            page, last_page ,comics
        }
    }

    private __parseIntEpisodes = (str: string) => {
        return parseFloat(str.split(" ")[1])
    }

    private __parseIdManga = (id: string) =>{
        return id.replace(URLs.manga, "")
    }

    private __parseIdEpisode = (id: string) =>{
        return id.replace(URLs.episode, "")
    }

    private __attrImage = (elemt : any, img : string) => {

        let dataImage = new DataImage()
        let elemtImage = this.$(elemt).find(img)

        dataImage.setSrc(elemtImage.attr("src")!!)
        dataImage.setAlt(elemtImage.attr("alt")!!)

        return dataImage.data()

    }

    

}
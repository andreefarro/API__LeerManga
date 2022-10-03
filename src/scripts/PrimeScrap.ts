import cheerio, { AnyNode, CheerioAPI } from 'cheerio';
import { Image as DataImage } from '../models/Image';
import { AxiosService } from '../service/AxiosService';
import { primeSelectors as selector } from '../config/scrapper.config';


export class PrimeScrap{
    private data : AxiosService = new AxiosService()
    private $ : CheerioAPI = cheerio.load("")
    
    async getRecommend(){
        let recommend = await this.getInfoCard(selector.recommend)
        return recommend
    }

    async getLast(){
        let lastAdded = await this.getInfoCard(selector.lastAdded)
        return lastAdded
    }

    async getInfoCard(section : string){

        let __dom = await this.data.getLeerManga()
        this.$ = cheerio.load(__dom)

        let listCard =  this.$(section).toArray().map( x => {

            let title      = this.$(x).find(selector.card.title).text().trim()
            let strChapter = this.$(x).find(selector.card.chapter).html()?.trim()
            let comic      = this.$(x).find(selector.card.comic).text()            

            let chapters   = this.__parseIntChapters(strChapter!!)
            let image      = this.__attrImage(x)

            return {
                title, comic, chapters, image            
            }

        })

        return listCard

    }

    __parseIntChapters = (str: String) => {
        return parseInt(str.split(" ")[1])
    }

    __attrImage = (elemt : AnyNode) => {

        let dataImage = new DataImage()
        let elemtImage = this.$(elemt).find('img')

        dataImage.setSrc(elemtImage.attr("src")!!)
        dataImage.setAlt(elemtImage.attr("alt")!!)

        return dataImage.data()

    }

}

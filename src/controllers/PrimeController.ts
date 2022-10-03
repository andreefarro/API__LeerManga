import { Response, Request } from "express";
import { PrimeScrap } from "../scripts/PrimeScrap"

export class PrimeController{
    private scrap : PrimeScrap;

    constructor(){
        this.scrap  = new PrimeScrap()
    }

    public async popular(req: Request, res: Response) {
        let a = await this.scrap.getRecommend()
        res.send(a)
    }

    public async trending(req: Request, res: Response) {
       
    }

    public async latest(req: Request, res: Response) {
        let a = await this.scrap.getLast()
        res.send(a)
    }

    public weekly(req: Request, res: Response) {
        res.send("top semanal")
    }
    
    public annual(req: Request, res: Response) {
        res.send("top anual")
    }
}


/*import { Request, Response } from "express";
import { HttpResponse } from "./HttpResponse";

export class HttpHelper{
    public static emptyParam = (req: Request, res: Response) => {
        let empty = {
            'status': false,
            'message' : 'the following parameters are empty =>',
        }

        for(let param in req.params){
            if(`:${param}` == req.params[param]){
                empty.status = true
                empty.message += ` :${param}`
            }
        }
        if(empty.status)
            HttpResponse.badRequest(res,empty.message)
            
    }

}
*/
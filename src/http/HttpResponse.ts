import { Response, Request, response } from "express";

export class HttpResponse{
    public static notFound(res: Response, err : any) : Response  {
        return res.status(err.response.status).json({
            'status'  : err.response.status,
            'type'    : 'BadResponseException',
            'message'   : err.response.statusText,
        })
    }

    public static badRequest(res: Response, message: any, status = 400) : Response  {
        return res.status(status).json({
            'status'  : status,
            'type'    : 'BadResponseException',
            'message' : 'Invalid or incomplete request',
            'error'   : `${status} on ${message}`
        })
    }

    public static request(res: Response, data: any, status = 200) : Response {
        return res.status(status).json({
            status,
            data
        });
    }

}
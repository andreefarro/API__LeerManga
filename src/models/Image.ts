export class Image {
    private _src : string = "";
    private _alt : string = "";
    private _type: string = "";

    constructor(src : string = "", alt : string = ""){
        this._src = src;
        this._alt = alt;
    }

    public setAlt = (alt: string) => {
        this._alt = alt;
    }

    public setSrc = (src: string) =>{
        this._src = src;
        this.__parseType()
    }

    private __parseType = () =>{
        this._type = "image/" + (this._src.split(".").reverse().shift() || "")
    }

    public data = () =>{
        let imagen = {
            src : this._src,
            alt : this._alt,
            type: this._type 
        }

        return imagen
    }
}
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {Express} from 'express';


let PATH_URL = ""
let slash = "://"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LeerManga API Documentation",
            description: "The API was dedicated to obtaining data through Web scraping to the page `LeerManga.net` tracking its library, Mangas, Chapters, latest added manga, recent episodes, filters by genre and pagination.",
            version: "1.0.0"
        },
        components:{
            schemas:{ 
                Card:{
                    type: "object",
                    properties: { 
                        status: {
                            type : "integer"
                        },
                        data: {
                            type: "array",
                            items: {                    
                                type: "object",
                                properties: {                    
                                    id: {
                                        type: "string",
                                    },
                                    title: {
                                        type: "string",
                                    },
                                    comic: {
                                        type: "string",
                                    },
                                    episodes: {
                                        type: "number",
                                        format: "float",
                                    },
                                    image: {
                                        "$ref": "#/components/schemas/Image"                   
                                    }
                                }                       
                            }
                        }
                    },
                    example:{
                        status: 200,
                        data: [
                            {
                                "id": "the-sword-of-dawn",
                                "title": "The sword of dawn",
                                "comic": "Manhwa",
                                "episodes": 25,
                                "image": {
                                    "src": "https://img.leermanga.net/cover/62bf5015d8576.jpg",
                                    "alt": "The sword of dawn",
                                    "type": "image/jpg"
                                }
                            },  
                            {
                                "id": "....",
                                "title": "......",
                                "comic": "..........."                            
                            }
                        ]
                    }
                    
                },
                Poster:{
                    type: "object",
                    properties: {   
                        status: {
                            type: "integer"
                        },
                        data:{
                            type: "object",
                            properties: {   
                                page: {
                                    type: "integer",
                                    example : 1
                                },
                                last_page: {
                                    type: "integer",
                                    example : 700
                                },
                                comics:{
                                    type: "array",
                                    items: {                                        
                                        type: "object",
                                        properties: {                    
                                            id: {
                                                type: "string",
                                            },
                                            title: {
                                                type: "string",
                                            },
                                            comic: {
                                                type: "string",
                                            },                        
                                            image: {
                                                "$ref": "#/components/schemas/Image"                   
                                            }
                                        }
                                    }
                                },                        
                                
                            }
                        }                       
                        
                    },
                    example:{
                        "status": 200,
                        "data": {
                            "page": 2,
                            "last_page": 780,
                            "comics": [
                                {
                                    "id": "ayudeme-maestro",
                                    "title": "Ayúdeme , maestro",
                                    "comic": "manhwa",
                                    "image": {
                                    "src": "https://img.leermanga.net/cover/63472d957e2f1.jpg",
                                    "type": "image/jpg"
                                    }
                                },
                                {
                                    "id": "...",
                                    "title": ".......",
                                    "comic": ".......",                
                                }
                            ]
                        }
                    }
                },
                Manga:{
                    type: "object",
                    properties: {   
                        status: {
                            type: "integer"
                        },
                        data:{
                            type: "object",
                            properties: {   
                                title: { type: "string" },
                                comic: { type: "string" },
                                year: { type: "string" },
                                synopsis: { type: "string" },
                                generes: {
                                    type: "array",
                                    items: {
                                        type: "string"
                                    }
                                },
                                numberOfEpisodes:{ type: "string" },
                                episodes:{
                                    type: "array",
                                    items: {                                        
                                        type : "object",
                                        properties:{
                                            id: { type: "string" },
                                            number: { type: "integer" },
                                        }
                                    }
                                },                        
                                
                            }
                        }                       
                        
                    },
                    example:{
                        "status": 200,
                        "data": {
                            "title": "The sword of dawn",
                            "comic": "Manhwa",
                            "year": 2021,
                            "synopsis": "El protagonista murió en un accidente de avión, fue transportado a una extraña...",
                            "generes": [
                            " Aventura",
                            " Fantasia",
                            " Ciencia Ficción"
                            ],
                            "numberOfEpisodes": 25,
                            "episodes": [
                                {
                                    "id": "the-sword-of-dawn-25.00",
                                    "number": 25
                                },
                                {
                                    "id": "...",
                                    "number": 1
                                }
                            ]
                        }
                    }
                },
                LastEpisodes:{
                    type: "object",
                    properties: {   
                        status: {
                            type: "integer"
                        },
                        data:{
                            type: "array",      
                            items:{
                                type : "object",
                                properties:{
                                    id: { type: "string"},
                                    title: { type: "string"},
                                    episode: { type: "string"},
                                    image: {
                                        "$ref": "#/components/schemas/Image"                   
                                    }                                
                                }
                            }
                        }                       
                        
                    },
                    example:{
                        "status": 200,
                        "data": [
                            {
                            "id": "maldita-reencarnacion-37.00",
                            "title": "Maldita Reencarnación",
                            "episode": 37,
                            "image": {
                                "src": "https://img.leermanga.net/cover/62eb46a96fd62.jpg",
                                "alt": "Maldita Reencarnación",
                                "type": "image/jpg"
                            }
                            },
                            {
                                "id": "....",
                                "title": "...",                            
                            }
                        ]
                    }
                },
                Episode:{
                    type: "object",
                    properties: {   
                        status: {
                            type: "integer"
                        },
                        data:{
                            type : "object",
                            properties:{
                                numberOfImages: { type: "integer"},
                                episode:{
                                    type : "array",
                                    items:{
                                        type : "string"
                                    }
                                }                            
                            }                            
                        }                       
                        
                    },
                    example:{
                        "status": 200,
                        "data": {
                            "numberOfImages": 41,
                            "episode": [
                                "https://i3.pixl.is/0280b745ef25cbaefe.jpg",
                                "https://i3.pixl.is/038c53965d1f4edb41.jpg",
                                "https://i3.pixl.is/04d3a4bc06098802e8.jpg",
                                "https://i3.pixl.is/05c9d71dadbecaf63f.jpg",
                                ".....",
                                ".....",
                                ".....",
                                "https://i3.pixl.is/131f0412bd0ebf2029.jpg"
                            ]
                        }
                    }
                },
                Genders:{
                    type: "object",
                    properties: {   
                        status: {
                            type: "integer"
                        },
                        data:{
                            type : "object",
                            properties:{
                                numberOfGenders: { type: "integer"},
                                genders:{
                                    type : "array",
                                    items:{
                                        type : "string"
                                    }
                                }                            
                            }                            
                        }                       
                        
                    },
                    example:{
                        "status": 200,
                        "data": {
                            "numberOfgenders": 48,
                            "genders": [
                            "Acción",
                            "Aventura",
                            "Comedia",
                            "....",
                            "....",
                            "....",
                            "Niños",
                            "Realidad",
                            "Telenovela",
                            "Guerra",
                            "Oeste"
                            ]
                        }
                    }
                },
                Image:{
                    type: "object",
                    properties:{
                        src: {
                            type: "string",
                        },
                        alt: {
                            type: "string",
                            nullable: true
                        },
                        type: {
                            type: "string",
                        },
                    },
                },


                Failed:{
                    type: "object",
                    properties: {                    
                        status: {
                            type: "integer",
                            example: 404
                        },
                        type: {
                            type: "string",
                            example: "BadResponseException"
                        },
                        message: {
                            type: "integer",
                            example: "Not Found"
                        }
                          
                    }
                }
                
            }            
        }
    },
    apis:[
        "src/api/v1/*.ts"
    ]
}

const swaggerSpec = swaggerJSDoc(options)


export const swaggerDocs = (app: Express, port: any) =>{

    /*app.get('/',(req, res) =>  {
        let hostName = req.header("host"); 
        PATH_URL = req.protocol+slash+hostName
        options.definition.servers[0].url = PATH_URL
    })*/

    app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

    console.log(`version 1 Docs http://localhost:${port}`)


}


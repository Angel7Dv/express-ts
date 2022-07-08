import { Request, Response } from "express"


class Index {
    path:string = 'index'
    title:string = 'hola mundo'

    constructor(path:string, title:string ){
        this.path = path
        this.title = title
    }
    public index(req:Request, res:Response){
        res.render('index', {title: "hola mundo"}) // renderisa la pagina './views/index.hbs'
    }
}


export default Index
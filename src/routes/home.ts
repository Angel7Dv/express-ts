import { Router, Request, Response } from "express"

const router: Router = Router()


router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: "hola mundo" })
})


router.get('/test', (req: Request, res: Response) => {
    res.render('test', { title: "i am test view" })
})


export default router
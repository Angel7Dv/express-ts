import { Router, Request, Response } from "express"
import block_model from '../models/blocks'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {

    block_model.find({}).lean().then(Query => {
            res.render('blocks/index', { title: "i am test view", Query })
        })

})

router.post('/', async (req: Request, res: Response) => {
    const { field } = req.body // fields from html

    console.log(field)
    const newblock = new block_model({ field }) // mongodb
    await newblock.save().then(res => console.log("field saved"))
    res.redirect("/blocks")

})



export default router
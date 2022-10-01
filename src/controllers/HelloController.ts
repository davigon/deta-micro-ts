import { Request, Response, Router } from "express"

class HelloController {
  hello = (_: Request, res: Response) => {
    res.send("Hello World TS")
  }
}

const helloController = new HelloController()

const router = Router()

router.get("/", helloController.hello)

export default router

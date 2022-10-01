import { Router } from "express"
import defaultRoutes from "./controllers/HelloController"

const router = Router()

router.use("/", defaultRoutes)

export default router

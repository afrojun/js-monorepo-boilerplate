import { Router } from 'express'
import healthCheckHandler from './healthCheckHandler'

const router = Router()

router.get('/v1/health-check', healthCheckHandler)

export default router

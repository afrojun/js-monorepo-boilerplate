import { Request, Response } from 'express'

async function healthCheckHandler(request: Request, response: Response): Promise<void> {
    response.status(200).json({ message: 'ok' })
}

export default healthCheckHandler

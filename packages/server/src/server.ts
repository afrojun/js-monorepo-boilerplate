import cors from 'cors'
import express from 'express'

import routes from './router/routes'

const app = express()

app.use(express.json())
app.set('port', process.env.PORT || 3001)

app.use(cors({ credentials: true, origin: /localhost/ }))
app.use('/', routes)

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

// Export our app for testing purposes
export default app

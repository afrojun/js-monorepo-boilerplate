import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'

import healthCheckHandler from './healthCheckHandler'

chai.use(chaiHttp)

describe('healthCheckHandler', () => {
    it('returns 200 response', () => {
        chai.request(app)
            .get('/v1/health-check')
            .end((err, res) => {
                expect(res.body).to.deep.equal({ message: 'ok' })
                expect(res.status).to.equal(200)
            })
    })
})

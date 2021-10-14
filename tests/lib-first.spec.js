const mockupGenerator = require('../index')
const generator = new mockupGenerator({ key: process.env.API_TOKEN })

describe('mockup generator lib', () => {
    test('init lib and fetch info', (done) => {
        generator
            .getInfo('iphone7-red')
            .then((response) => {
                console.log('response', response)

                expect(response.status).toBe('success')
                expect(response.data).not.toBeNull()
                expect(response.data).toHaveProperty('slug')
                expect(response.data).toHaveProperty('name')
                expect(response.data).toHaveProperty('fields')
                expect(typeof response.data.slug).toBe('string')
                expect(typeof response.data.name).toBe('string')
                expect(typeof response.data.fields).toBe('object')

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                expect(e).toBeNull()
                done(e)
            })
    })

    test('init lib and fetch invalid mockup', (done) => {
        generator
            .getInfo('invalid-mockup')
            .then((response) => {
                console.log('response', response)

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                expect(e).toContain('Invalid request with exception')
                done()
            })
    })

    test('init lib with no key', (done) => {
        const generator = new mockupGenerator({ host: process.env.API_URL })

        generator
            .getInfo('invalid-mockup')
            .then((response) => {
                console.log('response', response)

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                expect(e).toContain('Invalid request with exception')
                done()
            })
    })
})

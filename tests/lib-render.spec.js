const mockupGenerator = require('../index')
const generator = new mockupGenerator({ host: process.env.API_URL, key: process.env.API_TOKEN })

describe('mockup generator lib', () => {
    test('render simple mockup', (done) => {
        const data = {
            zoomLevel: 0.5,
            format: 'jpg',
            input: []
        }

        generator
            .render('iphone7-red', data)
            .then((response) => {
                console.log('response', response)

                expect(response.status).toBe('success')
                expect(response.data).not.toBeNull()
                expect(response.data).toHaveProperty('slug')
                expect(response.data).toHaveProperty('name')
                expect(response.data).toHaveProperty('status')
                expect(response.data).toHaveProperty('zoomLevel')
                expect(response.data).toHaveProperty('format')
                expect(response.data).toHaveProperty('result')
                expect(typeof response.data.slug).toBe('string')
                expect(typeof response.data.name).toBe('string')
                expect(typeof response.data.status).toBe('string')
                expect(typeof response.data.zoomLevel).toBe('number')
                expect(typeof response.data.format).toBe('string')
                expect(typeof response.data.result).toBe('object')

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                done(e)
            })
    }, 120000)

    test('render mockup with image', (done) => {
        const data = {
            zoomLevel: 0.5,
            format: 'jpg',
            input: ['https://dummyimage.com/750x1334/7dffb8/000000']
        }

        generator
            .render('iphone7-red', data)
            .then((response) => {
                console.log('response', response)

                expect(response.status).toBe('success')
                expect(response.data).not.toBeNull()
                expect(response.data).toHaveProperty('slug')
                expect(response.data).toHaveProperty('name')
                expect(response.data).toHaveProperty('status')
                expect(response.data).toHaveProperty('zoomLevel')
                expect(response.data).toHaveProperty('format')
                expect(response.data).toHaveProperty('result')
                expect(typeof response.data.slug).toBe('string')
                expect(typeof response.data.name).toBe('string')
                expect(typeof response.data.status).toBe('string')
                expect(typeof response.data.zoomLevel).toBe('number')
                expect(typeof response.data.format).toBe('string')
                expect(typeof response.data.result).toBe('object')

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                done(e)
            })
    }, 120000)

    test('render mockup with website', (done) => {
        const data = {
            zoomLevel: 0.5,
            format: 'jpg',
            input: ['https://m.imdb.com/title/tt2395427/']
        }

        generator
            .render('iphone7-red', data)
            .then((response) => {
                console.log('response', response)

                expect(response.status).toBe('success')
                expect(response.data).not.toBeNull()
                expect(response.data).toHaveProperty('slug')
                expect(response.data).toHaveProperty('name')
                expect(response.data).toHaveProperty('status')
                expect(response.data).toHaveProperty('zoomLevel')
                expect(response.data).toHaveProperty('format')
                expect(response.data).toHaveProperty('result')
                expect(typeof response.data.slug).toBe('string')
                expect(typeof response.data.name).toBe('string')
                expect(typeof response.data.status).toBe('string')
                expect(typeof response.data.zoomLevel).toBe('number')
                expect(typeof response.data.format).toBe('string')
                expect(typeof response.data.result).toBe('object')

                done()
            })
            .catch((e) => {
                console.log('exception', e)
                done(e)
            })
    }, 120000)
})

const mockupGenerator = require('../index');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

describe('mockup generator lib', () => {

    test('init lib and fetch info', (done) => {

        generator.getInfo('iphone7-red')
            .then((response) => {
                console.log('response', response);

                expect(response.status).toBe('success');
                expect(response.data).not.toBeNull();

                done();
            })
            .catch((e) => {
                console.log('exception', e);
                done(e);
            })
    })

    test('init lib and fetch invalid mockup', (done) => {

        generator.getInfo('invalid-mockup')
            .then((response) => {
                console.log('response', response);

                done();
            })
            .catch((e) => {
                console.log('exception', e);
                expect(e).toContain('Invalid request with exception');
                done();
            })
    })

    test('init lib with no key', (done) => {

        const generator = new mockupGenerator({host: process.env.API_URL});

        generator.getInfo('invalid-mockup')
            .then((response) => {
                console.log('response', response);

                done();
            })
            .catch((e) => {
                console.log('exception', e);
                expect(e).toContain('Invalid request with exception');
                done();
            })
    })
})
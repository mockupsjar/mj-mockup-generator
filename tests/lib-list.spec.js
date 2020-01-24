const mockupGenerator = require('../index');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

describe('mockup generator lib', () => {

    test('list all mockups', (done) => {

        generator.list()
            .then((response) => {
                console.log('response', response);

                try {
                    expect(response.status).toBe('success');
                    expect(response.data).not.toBeNull();
                    expect(response.data.length).toBeGreaterThan(10);
                    response.data.forEach((data) => {
                        expect(data).toHaveProperty('slug');
                        expect(data).toHaveProperty('name');
                        expect(data).toHaveProperty('width');
                        expect(data).toHaveProperty('height');
                        expect(data).toHaveProperty('previewURL');
                        expect(typeof data.slug).toBe('string');
                        expect(typeof data.name).toBe('string');
                        expect(typeof data.width).toBe('number');
                        expect(typeof data.height).toBe('number');
                        expect(typeof data.previewURL).toBe('string');
                    })
                    done();
                } catch (e) {
                    done(e);
                }
            })
            .catch((e) => {
                console.log('exception', e);
                done(e);
            })
    })
})
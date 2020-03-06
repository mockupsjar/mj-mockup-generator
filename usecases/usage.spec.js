const mockupGenerator = require('../index');

describe.skip('mockup generator use cases', () => {

    test('usage', async (done) => {

        const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

        const data = {
            zoomLevel: 0.5,
            format: "jpg",
            input: ['https://dummyimage.com/750x1334/7dffb8/000000']
        };

        let response = await generator.render('iphone7-red', data);
        console.log('response', response);
        return done();

    }, 120000)

    test('list all mockups', async (done) => {

        const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

        let response = await generator.list();
        console.log(response);
        return done();

    }, 120000)

    test('get info about a mockup', async (done) => {

        const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

        let response = await generator.getInfo('iphone7-red');
        console.log(response);
        return done();

    }, 120000)
})

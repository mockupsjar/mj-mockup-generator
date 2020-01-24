const mockupGenerator = require('../index');

describe.skip('mockup generator use cases', () => {

    test('usage', async (ddone) => {

        const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

        const data = {
            zoomLevel: 0.5,
            format: "jpg",
            input: ['https://dummyimage.com/750x1334/7dffb8/000000']
        };

        let response = await generator.render('iphone7-red', data);
        console.log('response', response);
        // {
        //     status: 'success',
        //         data: {
        //     slug: 'iphone7-red',
        //         name: 'iPhone7 RED',
        //         status: 'successful',
        //         zoomLevel: 0.5,
        //         format: 'jpg',
        //         result: {
        //         url: 'https:/path.../renders/mockup-z0yIcUtWFZjFyeNU.jpg',
        //             previewUrl: 'https://path.../renders/PcOniA1ANn6HLnX7-RFgaz9u5IiH7Ryud.jpg'
        //     }
        // }

    }, 120000)
})

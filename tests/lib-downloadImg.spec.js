const fs = require('fs');
const mockupGenerator = require('../index');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

describe('mockup generator lib', () => {

    test('render and download image',async (done) => {

        const data = {
            zoomLevel: 0.5,
            format: "jpg",
            input: []
        };

        let task = await generator.render("iphone7-red", data);
        expect(task).not.toBeNull();
        expect(task.data).not.toBeNull();
        expect(task.data.result.url).toBeTruthy();
        expect(task.data.result.previewUrl).toBeTruthy();
        console.log('task', task);

        let imagePath = await generator.downloadImage(task.data.result.previewUrl, "output.jpg");
        expect(imagePath).toBeTruthy();
        console.log('download path', imagePath);

        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

        done();
    }, 120000)
});
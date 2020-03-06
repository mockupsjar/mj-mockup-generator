# mj-mockup-generator

Simple & easy to use mockup generator from MockupsJar

[![install size](https://packagephobia.now.sh/badge?p=mj-mockup-generator)](https://packagephobia.now.sh/result?p=mj-mockup-generator)
[![Known Vulnerabilities](https://snyk.io/test/github/mockupsjar/mj-mockup-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mockupsjar/mj-mockup-generator?targetFile=package.json)

## Install

```
$ npm install mj-mockup-generator
```

## Usage

```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: ['https://dummyimage.com/750x1334/7dffb8/000000']
};

let response = await generator.render('iphone7-red', data);
console.log('response', response);
```

##### List all mockups
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

let response = await generator.list();
console.log(response);
 ```
 
##### Get info about a mockup
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

let response = await generator.getInfo('iphone7-red');
console.log(response);
```

##### Render simple mockup
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: []
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```

##### Render mockup with image
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: ['https://dummyimage.com/750x1334/7dffb8/000000']
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```

##### Render mockup with website
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({host: process.env.API_URL, key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: ['https://m.imdb.com/title/tt2395427/']
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```
# mj-mockup-generator

Simple & easy to use mockup generator from MockupsJar

[![install size](https://packagephobia.now.sh/badge?p=mj-mockup-generator)](https://packagephobia.now.sh/result?p=mj-mockup-generator)
[![Known Vulnerabilities](https://snyk.io/test/github/mockupsjar/mj-mockup-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mockupsjar/mj-mockup-generator?targetFile=package.json)

## Install

```
$ npm install mj-mockup-generator
```

## How to use the library

- Register a user on https://mockupsjar.com/
- Go to your profile page and generate a key https://mockupsjar.com/profile
- Use the key with your preferred API tool or library (this package, [Postman](https://www.postman.com/), [Axios](https://github.com/axios/axios))

## Usage

```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({key: process.env.API_TOKEN});

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
const generator = new mockupGenerator({key: process.env.API_TOKEN});

let response = await generator.list();
console.log(response);
 ```
 
##### Get info about a specific mockup
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({key: process.env.API_TOKEN});

let response = await generator.getInfo('iphone7-red');
console.log(response);
```

##### Render simple mockup
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: []
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```

##### Render mockup with input image
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: ['https://dummyimage.com/750x1334/7dffb8/000000']
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```

##### Render mockup with input website url
 
```js
const mockupGenerator = require('mj-mockup-generator');
const generator = new mockupGenerator({key: process.env.API_TOKEN});

const data = {
    zoomLevel: 0.5,
    format: "jpg",
    input: ['https://m.imdb.com/title/tt2395427/']
};

let task = await generator.render("iphone7-red", data);
console.log(task);
```

## Resources

[MockupsJar - MockupsJar website](https://mockupsjar.com/)

[MockupsJar API Intro - quick introduction](https://mockupsjar.com/api)

[MockupsJar API Doc - full API documentation](https://mockupsjar.com/apidoc)

[MockupsJar NPM Package](https://www.npmjs.com/package/mj-mockup-generator)

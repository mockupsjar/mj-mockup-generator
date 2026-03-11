const fs = require('fs')
const path = require('path')
const axios = require('axios')

const MJ_DEFAULT_HOST = 'https://api.mockupsjar.com'

class MockupGenerator {
    constructor(params) {
        this.API_URL = params ? params.host || MJ_DEFAULT_HOST : MJ_DEFAULT_HOST
        this.API_KEY = params ? params.key : ''
        this.DEBUG = params ? params.debug || false : false
    }

    list() {
        if (this.DEBUG) console.log(`${this.API_URL}/mockups/list`)

        return new Promise((resolve, reject) => {
            axios({ method: 'get', url: `${this.API_URL}/mockups/list`, headers: { Authorization: this.API_KEY ? 'Bearer ' + this.API_KEY : '' } })
                .then((response) => {
                    if (response.status !== 200) return reject(`Invalid request with response=${response.status}`)
                    else return resolve(response.data)
                })
                .catch((e) => {
                    return reject(`Invalid request with exception=${e}`)
                })
        })
    }

    getInfo(mockupName) {
        if (this.DEBUG) console.log(`getInfo mockupName=${mockupName}`)
        if (this.DEBUG) console.log(`${this.API_URL}/mockups/getinfo/${mockupName}`)

        return new Promise((resolve, reject) => {
            axios({ method: 'get', url: `${this.API_URL}/mockups/getinfo/${mockupName}`, headers: { Authorization: this.API_KEY ? 'Bearer ' + this.API_KEY : '' } })
                .then((response) => {
                    if (response.status !== 200) return reject(`Invalid request with response=${response.status}`)
                    else return resolve(response.data)
                })
                .catch((e) => {
                    return reject(`Invalid request with exception=${e}`)
                })
        })
    }

    render(mockupName, data) {
        if (this.DEBUG) console.log(`getInfo mockupName=${mockupName} data=${data}`)
        if (this.DEBUG) console.log(`${this.API_URL}/mockups/render/${mockupName}`)

        return new Promise((resolve, reject) => {
            axios({ method: 'post', url: `${this.API_URL}/mockups/render/${mockupName}`, headers: { Authorization: this.API_KEY ? 'Bearer ' + this.API_KEY : '' }, data: data })
                .then((response) => {
                    if (response.status !== 200) return reject(`Invalid request with response=${response.status}`)
                    else return resolve(response.data)
                })
                .catch((e) => {
                    return reject(`Invalid request with exception=${e}`)
                })
        })
    }

    downloadImage(url, filename) {
        if (this.DEBUG) console.log(`downloadImage url=${url} filename=${filename}`)

        return new Promise(async (resolve, reject) => {
            try {
                const headResponse = await axios.head(url)
                const contentType = headResponse.headers['content-type']
                const contentLength = headResponse.headers['content-length']

                // Build filename from uri
                if (!filename) filename = url.split('/').pop()

                // Check for file extension
                if (filename.split('.').length === 1) {
                    if (contentType) filename += '.' + contentType.split('/').pop()
                }

                if (contentType && contentLength) {
                    const response = await axios({ method: 'get', url, responseType: 'stream' })
                    response.data
                        .pipe(fs.createWriteStream(filename))
                        .on('close', () => resolve(path.resolve(filename)))
                        .on('error', (err) => reject(err))
                }
            } catch (e) {
                reject(e)
            }
        })
    }
}

module.exports = MockupGenerator

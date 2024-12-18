import {WebSurfer, WebSurferConfig} from './web-surfer.js'
import server from './http.js'

const config: WebSurferConfig = {
    defaultBrowser: 'firefox',
    browserLaunchers: {
        firefox: 'ws://lapdell:3000/firefox/playwright?token=6R0W53R135510&launch={options}',
        chrome: 'ws://lapdell:3000/chrome/playwright?token=6R0W53R135510&launch={options}',
        chromium: 'ws://lapdell:3000/chromium/playwright?token=6R0W53R135510&launch={options}',
        webkit: 'ws://lapdell:3000/webkit/playwright?token=6R0W53R135510&launch={options}',
    }
}

const webSurfer = new WebSurfer(config)
await server(webSurfer)

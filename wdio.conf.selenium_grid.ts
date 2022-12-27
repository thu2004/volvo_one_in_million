import { config as baseConfig } from './wdio.conf.js'

export let config = {
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
}

config.capabilities[0]["maxInstances"] = 1

// replace 'chromedriver' with 'docker'

const i = config.services.indexOf('chromedriver')
if (i > -1) { // only splice array when item is found
    config.services.splice(i, 1);
}
config.services = config.services.concat(['docker'])
import { config as baseConfig } from './wdio.conf.js'

export const config = {
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    services: ['docker']
}
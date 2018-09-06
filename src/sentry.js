const Sentry = require('@sentry/electron')
const config = require('./config')
console.log('init sentry')
if (config.enableSentry) {
  Sentry.init({
    // 此处需要配置sentrykey'
    dsn: config.sentryKey,
    allowSecretKey: true
  })
}


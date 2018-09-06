import * as Sentry from '@sentry/electron'
import config from './config'
// const Sentry =  require('@sentry/electron');
// const config =  require('./config')
export const logErrorRemotely = (e, msg) => {
  if (config.enableSentry) {
    Sentry.captureException(e)
  }
  if (config.enableErrorConsoleLogging) {
    console.log(msg || "", e); // eslint-disable-line
  }
}

export const logWarningToSentry = (msg) => {
  if (config.enableSentry) {
    Sentry.captureMessage(msg, {
      level: Sentry.Severity.Warning
    })
  }
}

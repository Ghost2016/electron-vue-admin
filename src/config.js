
const config = {
  // enableSentry: process.env.NODE_ENV === 'production',
  enableSentry: true,
  // 此处需要配置sentrykey，另外在mainProcess有一处扔需要手动改sentryKey
  sentryKey: 'http://84377d7f9c754926a94cbc016e304ef6:dc865d209e6f486abb21a665b189ee3d@sentry.pinbot.me/32',
  // 以下属性用于腾讯云IM --->start
  sdkAppID: 1400136813,
  accountType: 37487
}

export default config

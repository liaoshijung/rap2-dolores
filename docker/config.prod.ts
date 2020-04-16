const config: IConfig = {
  serve: `http://${window.location.hostname}/api`,
  keys: ['some secret hurr'],
  session: {
    key: 'koa:sess',
  },
  isLdap: true
}

export default config

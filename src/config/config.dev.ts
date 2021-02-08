
const config: IConfig = {
  serve: `${document.location.origin}/api`,
  keys: ['some secret hurr'],
  session: {
    key: 'koa:sess',
  },
  isLdap: true
}

export default config

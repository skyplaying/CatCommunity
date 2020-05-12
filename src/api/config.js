/**
 * 配置不同环境接口前缀
 * 如果未配置dev为默认配置
 * @param {*} base
 * @example
 * {
 *   dev: 'dev环境配置信息',
 *   test: 'test环境配置信息',
 *   prod: '线上环境配置信息'
 * }
 */
function conf (base = {}) {
  if (process.env.NODE_ENV === 'production') { // 生产环境下
    const env = process.env.ENV_CONFIG || 'dev'
    return base[env] || base['dev']
  }
  // 开发环境
  return base['dev']
}

// PORTAL 接口
export const POR_LOGIN_LOGOUT = conf({
  dev: 'http://`````',
  test: 'http://`````',
  prod: 'http://`````'
})

const BaseController = require('./BaseController')

export default class PlayUrl extends BaseController {
  async index () {
    const { ctx, service } = this
    const { mid, type, br } = ctx.query

    if (!mid) {
      ctx.body = {
        code: 500,
        message: '参数错误',
        result: null,
        success: false,
      }
      return false
    }

    const res = await service.playUrl.getPlayUrl(mid, type, br)
    res.mid = mid
    ctx.body = res
  }
}

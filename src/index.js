/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-07-26 16:23:02
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-20 17:22:25
 * @Description: file content
 */

const chalk = require('chalk') // eslint-disable-line
const msgPath = process.env.HUSKY_GIT_PARAMS
const childProcess = require('child_process')
// const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
console.log('branch',branch);
const checkMerge = childProcess.execSync(`git log master ^${branch}`).toString().replace(/\s+/, '')

module.exports = class Service {
  constructor(context, { inlineOptions } = {}) {
    this.initialized = false
    this.context = context
    this.inlineOptions = inlineOptions
  }
  init() {
    console.log('checkMerge',checkMerge);
    // const commitRE = /^((v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|merge)(\(.+\))?!?: .{1,50}))|(.?Merge\sbranch)/
    if (0) {
      console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
          `commit message 提交信息：‘${msg}’不符合提交约束规范！！！`
        )}\n\n` +
          chalk.red(`  commit message 提交信息规范：请参考以下提示:\n\n`) +
          `    ${chalk.green(
            `feat: 类型为 feat 的提交表示在代码库中新增了一个功能。 git commit -am"feat: 增加了...功能"`
          )}\n` +
          `    ${chalk.green(
            `fix:  类型为 fix 的提交表示在代码库中修复了一个bug。 git commit -am"fix: 修复了...bug"`
          )}\n\n` +
          chalk.red(`  See https://shudong.wang/10647.html for more details.\n`)
      )
      process.exit(1)
    }
  }
  async run() {
    this.init()
  }
}

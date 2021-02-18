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
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
console.log(chalk.green(`current branch：${branch}`));
childProcess.execSync(`git fetch --all`)
const checkMerge = childProcess.execSync(`git log master ^${branch}`).toString().replace(/\s+/, '')

module.exports = class Service {
  constructor(context, { inlineOptions } = {}) {
    this.initialized = false
    this.context = context
    this.inlineOptions = inlineOptions
  }
  init() {
    if (!!checkMerge.length) {
      console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
          `当前分支没有merge maser，请检查代码`
        )}\n\n` +
          chalk.red(`请参考以下提示:\n\n`) +
          `    ${chalk.green(
            `温馨提醒：当前分支远离master，请主动把master拉取到最新，然后merge到当前分支上面`
          )}\n` +
          `    ${chalk.green(
            `脚本: git checkout master && git pull origin master && git checkout - && git merge master "`
          )}\n\n`
      )
      process.exit(1)
    }
  }
  async run() {
    this.init()
  }
}

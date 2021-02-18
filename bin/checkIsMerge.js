#!/usr/bin/env node

/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-07-26 16:23:02
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-20 17:22:25
 * @Description: file content
 */

const Service = require('../src')
const service = new Service(process.cwd())
service.run().catch(err => {
  console.error(err)
  process.exit(1)
})

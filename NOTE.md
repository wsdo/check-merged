<!--
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-12-12 10:32:14
 * @LastEditors: starkwang
 * @LastEditTime: 2019-12-12 10:59:11
 * @Description: file content
 -->
## git commit 约束
#### 目标
* 可读性好，清晰，不必深入看代码即可了解当前commit的作用。
* 为 Code Reviewing做准备
* 方便跟踪工程历史
* 让其他的开发者在运行 git blame 的时候想跪谢
* 提高项目的整体质量，提高个人工程素质
#### 不要
* 不要提交类似”fix bug“ 无意义的信息
* 不要提交类似”修复bug“  无意义的信息
* 不要提交类似”优化代码“  无意义的信息

#### 建议
* 提交信息：动作（修复、优化）+描述（具体做的事情）
* 包含：解决了什么具体问题

#### 类型
> 用于说明 commit 的类别，只允许使用下面7个标识。
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动
* 如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

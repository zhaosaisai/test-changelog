const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|chore)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`无效的 commit message 格式`)}\n\n` +
    chalk.red(`  为了能够自动创建 changelog，规范的 commit message 是必须的。例如:\n\n`) +
    `    ${chalk.green(`feat(real-info): add three emergency contacts for 'real-info' component`)}\n` +
    `    ${chalk.green(`fix(loan-index): handle button is not clickable (jira link)`)}\n\n` +
    chalk.red(`  你也可以使用 ${chalk.cyan(`npm run commit`)} 命令来交互式的创建 commit message。\n`)
  )
  process.exit(1)
}

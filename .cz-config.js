module.exports = {
  types: [{
      value: 'feat',
      name: 'feat:    添加新功能（feature）'
    },
    {
      value: 'fix',
      name: 'fix:     修补bug'
    },
    {
      value: 'docs',
      name: 'docs:     更新文档（documentation）'
    },
    {
      value: 'style',
      name: 'style:     修改样式（不影响代码运行的变动）',
    },
    {
      value: 'refactor',
      name: 'refactor:  对某部分内容进行了重构——即不是新增功能，也不是修改bug的代码变动',
    },
    {
      value: 'perf',
      name: 'perf:     提升性能的操作',
    },
    {
      value: 'test',
      name: 'test:     补充测试'
    },
    {
      value: 'chore',
      name: 'chore:    构建过程或辅助工具的变动',
    },
    {
      value: 'revert',
      name: 'revert:  Revert某次commit的提交'
    },
  ],
  messages: {
    type: '请选择此次提交的操作类型<type>:',
    scope: '明确影响范围<scope> (可选):',
    customScope: '明确影响范围<scope> (可选):',
    subject: '本次提交的简短描述<subject>:',
    body: '本次提交的详细描述。使用"|"作为换行分隔符<body>:',
    breaking: '本次提交是否包含BREAKING CHANGES (可选):',
    footer: '本次提交是否修复了某些Issue (optional). 例如: #31, #34:',
    confirmCommit: '确认提交吗?',
  }
};

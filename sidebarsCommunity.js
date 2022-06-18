module.exports = {
  // But you can create a sidebar manually
  community: [
    // 'support',
    'members',
    {
      type: 'category',
      label: '贡献指南',
      link: {
        type: 'doc',
        id: 'contribution/index',
      },
      items: [
        'contribution/compile/description',
        'contribution/compile/console',
        'contribution/compile/region',
      ]
    },
    {
      type: 'category',
      label: '版本变更',
      link: {
        type: 'doc',
        id: 'change/index'
      },
      items: [
        'change/5.7.0',
        'change/5.6.0',
        'change/5.5.0',
        'change/5.4.0',
        'change/5.3.3',
        'change/5.3.2',
        'change/5.3.1',
      ]
    },
    'faqs',
  ]
};
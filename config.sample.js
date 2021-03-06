const config = {
  database: { 
    address: 'mongodb://localhost:27017/',
    db: 'newBlog',
  },
  port: 1234,
  favicon: null,
  title: 'ntzyz\'s space',
  subtitle: '∠( ᐛ 」∠)_',
  footer: [
    'Copyright © 2016-2018 ntzyz. All rights reversed.',
    'Except where otherwise noted, content on this blog is licensed under CC-BY 2.0.'
  ],
  url: 'https://new.ntzyz.cn', // no slash at the end of url
  language: 'zh-CN',
  components: {
    title: true,
    categories: true,
    tags: true,
    replies: true
  },
  meta: {
    themeColor: '#FFFFFF'
  },
  page: {
    size: 5,
  },
  reply: {
    enableMarkdownSupport: true,
  },
  allowedOrigins: [
    'https://example.ntzyz.cn',
    'http://example2.ntzyz.cn',
  ],
  plugins: {
    gallery: {
      enabled: true,
      mountPoint: '/projects',
      title: 'Projects'
    },
    'rss-feed': {
      enabled: true,
    }
  }
};

module.exports = config;

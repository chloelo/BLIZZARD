module.exports = {
  // 預設狀況下，部署到 GitHub Pages 可能會無法顯示畫面
  // 因此需要多設置該屬性
  // 官方文件：https://cli.vuejs.org/zh/config/#publicpath
  publicPath: './',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args;
      obj.title = '暴雪娛樂';
      obj.meta = {
        keywords: 'Vue, JavaScript, 練習 Vue CLI + tailwindcss 切版',
        description: '暴雪娛樂的作品包括《魔獸世界》、《暗黑破壞神》、《星海爭霸》和《鬥陣特攻》系列遊戲，是業界首屈一指的遊戲開發商，專門打造有史以來最史詩的娛樂體驗。',
      };
      // obj.icon = '123.png';
      return args;
    });
  },
};

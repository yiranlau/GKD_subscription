import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'yqtrack.app',
  name: '17Track',
  groups: [
    {
      key: 1,
      name: '其他-主界面广告',
      desc: '自动点击关闭',
      enable: true,
      fastQuery: false,
      rules: [
        {
          key: 0,
          activityIds: ['yqtrack.app.MainActivity'],
          matches: '@Button[id="cbb"]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

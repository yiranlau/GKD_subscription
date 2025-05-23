import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.reddit.frontpage',
  name: 'Reddit',
  groups: [
    {
      key: 1,
      name: '其他-Promoted广告',
      desc: '自动点击[Optional]',
      enable: true,
      fastQuery: false,
      rules: [
        {
          key: 0,
          activityIds: ['com.reddit.launch.main.MainActivity'],
          matches: '[desc*="Promoted"][visibleToUser=true][top>285][top<2200]',
          position: {
            right: 80,
            top: 72,
          },
        },
        {
          key: 1,
          preKeys: [0],
          activityIds: ['com.reddit.launch.main.MainActivity'],
          matches: '[text="About this ad"] -1 * < * -1 *',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 3,
      name: '其他-关闭订阅社区消息提示',
      desc: '自动点击[Not Now]',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches:
            '[vid="sheet_container"] > [vid="cancel_button"][text="Not Now"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/b640f2c9-4564-420f-8a2f-20f461032f3d',
          snapshotUrls: [
            'https://i.gkd.li/i/13649914',
            'https://i.gkd.li/i/17269009',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '其他-NSFW 内容提示',
      desc: '自动点击 continue',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: 'Button[text="Cancel"] + Button[text="Continue"]',
          snapshotUrls: 'https://i.gkd.li/i/13649992',
        },
      ],
    },
  ],
});

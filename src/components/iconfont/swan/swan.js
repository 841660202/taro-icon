Component({
  properties: {
    // mianxingbingbao | mianxingbaoyu | mianxingdafeng | mianxingcaihong | mianxingdabaoyu | mianxingdayu | mianxingdongyu | mianxingfuchen | mianxingdiwen | mianxingduoyun | mianxingdaxue | mianxingleizhenyu | mianxinggaowen | mianxingganzao | mianxingqiangshachenbao | mianxingqingtian | mianxingshachenbao | mianxingriyue | mianxingshirun | mianxingtedabaoyu | mianxingtedabaoxue | mianxingwu | mianxingwumai | mianxingtianqiyubao | mianxingyewan | mianxingyintian | mianxingxueren | mianxingxiaoxue | mianxingyangsha | mianxingzhongyu | mianxingzhenyu | mianxingyusan | mianxingzhenxue | mianxingyujiaxue | mianxingzhongxue | canchugongju | daican | bike | huiyuanzhuanshu | jiankangdangan | erke | changwei | meirong | hongpei | shipu | shiliaojihua | neike | shiwureliang | xinzangke | yiliaoshipu | yinpin | yaocai | naoke | xiaobaizhuanqu | yanke | yinshibaike | yingyangzixunshi | yingyangketang | pifuke | yinshijihua | yake | roulei | shucai | shuiguo | erke1 | danxuan-xuanzhong | weixuanzhong | jifenxiangqing | didian | zixun | shouye | dingwei | saoma | xiaoxi | wode | xiangji | erweima | shouhuoxinxi | shouye1 | weizhi | xiaoxi1 | paibandaka
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * swan.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    quot: '"',
    svgSize: 18 / 750 * swan.getSystemInfoSync().windowWidth,
    isStr: true,
  },
});

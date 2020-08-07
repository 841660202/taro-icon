Component({
  props: {
    // mianxingbingbao | mianxingbaoyu | mianxingdafeng | mianxingcaihong | mianxingdabaoyu | mianxingdayu | mianxingdongyu | mianxingfuchen | mianxingdiwen | mianxingduoyun | mianxingdaxue | mianxingleizhenyu | mianxinggaowen | mianxingganzao | mianxingqiangshachenbao | mianxingqingtian | mianxingshachenbao | mianxingriyue | mianxingshirun | mianxingtedabaoyu | mianxingtedabaoxue | mianxingwu | mianxingwumai | mianxingtianqiyubao | mianxingyewan | mianxingyintian | mianxingxueren | mianxingxiaoxue | mianxingyangsha | mianxingzhongyu | mianxingzhenyu | mianxingyusan | mianxingzhenxue | mianxingyujiaxue | mianxingzhongxue | canchugongju | daican | bike | huiyuanzhuanshu | jiankangdangan | erke | changwei | meirong | hongpei | shipu | shiliaojihua | neike | shiwureliang | xinzangke | yiliaoshipu | yinpin | yaocai | naoke | xiaobaizhuanqu | yanke | yinshibaike | yingyangzixunshi | yingyangketang | pifuke | yinshijihua | yake | roulei | shucai | shuiguo | erke1 | danxuan-xuanzhong | weixuanzhong | jifenxiangqing | didian | zixun | shouye | dingwei | saoma | xiaoxi | wode | xiangji | erweima | shouhuoxinxi | shouye1 | weizhi | xiaoxi1 | paibandaka
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});

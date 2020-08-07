import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import IconFont from '../../components/iconfont'
/**
 * a= `name枚举类型`
 * b = a.replace(/\s|'/g,"").split("|")
 */
const icons =["mianxingbingbao", "mianxingbaoyu", "mianxingdafeng", "mianxingcaihong", "mianxingdabaoyu", "mianxingdayu", "mianxingdongyu", "mianxingfuchen", "mianxingdiwen", "mianxingduoyun", "mianxingdaxue", "mianxingleizhenyu", "mianxinggaowen", "mianxingganzao", "mianxingqiangshachenbao", "mianxingqingtian", "mianxingshachenbao", "mianxingriyue", "mianxingshirun", "mianxingtedabaoyu", "mianxingtedabaoxue", "mianxingwu", "mianxingwumai", "mianxingtianqiyubao", "mianxingyewan", "mianxingyintian", "mianxingxueren", "mianxingxiaoxue", "mianxingyangsha", "mianxingzhongyu", "mianxingzhenyu", "mianxingyusan", "mianxingzhenxue", "mianxingyujiaxue", "mianxingzhongxue", "canchugongju", "daican", "bike", "huiyuanzhuanshu", "jiankangdangan", "erke", "changwei", "meirong", "hongpei", "shipu", "shiliaojihua", "neike", "shiwureliang", "xinzangke", "yiliaoshipu", "yinpin", "yaocai", "naoke", "xiaobaizhuanqu", "yanke", "yinshibaike", "yingyangzixunshi", "yingyangketang", "pifuke", "yinshijihua", "yake", "roulei", "shucai", "shuiguo", "erke1", "danxuan-xuanzhong", "weixuanzhong", "jifenxiangqing", "didian", "zixun", "shouye", "dingwei", "saoma", "xiaoxi", "wode", "xiangji", "erweima", "shouhuoxinxi", "shouye1", "weizhi", "xiaoxi1", "paibandaka"]
export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <View className="flex-row">
          {icons.map(item => <View  key={item} className="icon-item"><IconFont name={item} size={50} /></View>)}
        </View>
      </View>
    )
  }
}

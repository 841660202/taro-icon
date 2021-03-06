/* eslint-disable */

import Taro from '@tarojs/taro';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

IconFont.config = {
  usingComponents: {
    iconfont: './qq/qq',
  },
};

export default IconFont;

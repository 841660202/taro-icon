/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconweixuanzhong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-416 0a416 416 0 1 0 832 0 416 416 0 1 0-832 0Z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M512 960c-60.5 0-119.1-11.8-174.4-35.2-53.4-22.6-101.3-54.9-142.4-96-41.1-41.1-73.4-89-96-142.4C75.8 631.1 64 572.5 64 512s11.8-119.1 35.2-174.4c22.6-53.4 54.9-101.3 96-142.4 41.1-41.1 89-73.4 142.4-96C392.9 75.8 451.5 64 512 64s119.1 11.8 174.4 35.2c53.4 22.6 101.3 54.9 142.4 96 41.1 41.1 73.4 89 96 142.4C948.2 392.9 960 451.5 960 512s-11.8 119.1-35.2 174.4c-22.6 53.4-54.9 101.3-96 142.4-41.1 41.1-89 73.4-142.4 96C631.1 948.2 572.5 960 512 960z m0-832c-211.7 0-384 172.3-384 384s172.3 384 384 384 384-172.3 384-384-172.3-384-384-384z"
        fill={getIconColor(color, 1, '#666666')}
      />
    </Svg>
  );
};

Iconweixuanzhong.defaultProps = {
  size: 18,
};

export default Iconweixuanzhong;

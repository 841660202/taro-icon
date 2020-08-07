/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconmianxingdongyu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M935.5 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2H256.7c-1 0-1.9-0.1-2.9-0.2-1.6 0.1-3.4 0.2-5.4 0.2-42.8 0-83-16.6-113.2-46.8-30.2-30.2-46.8-70.4-46.8-113.2s16.6-83 46.9-113.2c27.5-27.4 63.1-43.7 101.5-46.4-0.1-1.7-0.1-3.4-0.1-5.1 0-124.6 101.3-225.9 225.9-225.9 14 0 27.7 1.3 41 3.7 87.7 16.1 158.4 82.9 178.8 170.7 19.4-6.5 39.5-9.7 60.1-9.7 106.4 0 193 86.6 193 193z"
        fill={getIconColor(color, 0, '#97EBFF')}
      />
      <Path
        d="M268.4 710.4c-11 0-20 9-20 20v67.2c0 11 9 20 20 20s20-9 20-20v-67.2c0-11-9-20-20-20zM523.6 730.4v67.2c0 11.1-8.9 20-20 20-11 0-20-8.9-20-20v-67.2c0-11.1 9-20 20-20 11.1 0 20 8.9 20 20zM396 849.6h-34c-17.6 0-32 14.4-32 32v34c0 17.6 14.4 32 32 32h34c17.6 0 32-14.4 32-32v-34c0-17.6-14.4-32-32-32z"
        fill={getIconColor(color, 1, '#07DBFF')}
      />
      <Path
        d="M523.6 730.4v67.2c0 11.1-8.9 20-20 20V710.4c11.1 0 20 8.9 20 20z"
        fill={getIconColor(color, 2, '#0BA8FF')}
      />
      <Path
        d="M935.5 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2H503.6V75.8c87.7 16.1 158.4 82.9 178.8 170.7 19.4-6.5 39.5-9.7 60.1-9.7 106.4 0 193 86.6 193 193z"
        fill={getIconColor(color, 3, '#07DBFF')}
      />
      <Path
        d="M678 881.6v34c0 17.6-14.4 32-32 32h-34c-17.6 0-32-14.4-32-32v-34c0-17.6 14.4-32 32-32h34c17.6 0 32 14.4 32 32zM758.8 730.4v67.2c0 11.1-9 20-20 20s-20-8.9-20-20v-67.2c0-11.1 9-20 20-20s20 8.9 20 20z"
        fill={getIconColor(color, 4, '#0BA8FF')}
      />
    </Svg>
  );
};

Iconmianxingdongyu.defaultProps = {
  size: 18,
};

export default Iconmianxingdongyu;

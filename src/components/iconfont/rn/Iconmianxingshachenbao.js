/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconmianxingshachenbao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M216.5 193.1m-51.1 0a51.1 51.1 0 1 0 102.2 0 51.1 51.1 0 1 0-102.2 0Z"
        fill={getIconColor(color, 0, '#F0E203')}
      />
      <Path
        d="M527.6 862m-51.1 0a51.1 51.1 0 1 0 102.2 0 51.1 51.1 0 1 0-102.2 0Z"
        fill={getIconColor(color, 1, '#F0E203')}
      />
      <Path
        d="M247.6 686.5c-28.2 0-51.1 22.9-51.1 51.1s22.9 51.1 51.1 51.1 51.1-22.9 51.1-51.1-22.9-51.1-51.1-51.1zM936.4 395.3c0 62.5-50.8 113.3-113.3 113.3H92c-11 0-20-8.9-20-20 0-11 9-20 20-20h731.1c40.4 0 73.3-32.9 73.3-73.3S863.5 322 823.1 322s-73.3 32.9-73.3 73.3c0 11-9 20-20 20s-20-9-20-20c0-62.5 50.8-113.3 113.3-113.3s113.3 50.8 113.3 113.3z"
        fill={getIconColor(color, 2, '#F0E203')}
      />
      <Path
        d="M656.4 302c0 62.5-50.8 113.3-113.3 113.3H185.3c-11 0-20-9-20-20s9-20 20-20h357.8c40.4 0 73.3-32.9 73.3-73.3s-32.9-73.3-73.3-73.3c-5.3 0-10.5 0.6-15.5 1.6-33 7.1-57.8 36.6-57.8 71.7 0 11-9 20-20 20s-20-9-20-20c0-57.2 42.6-104.7 97.8-112.2 5.1-0.7 10.2-1.1 15.5-1.1 62.5 0 113.3 50.8 113.3 113.3zM780.8 675.3c0 62.5-50.8 113.3-113.3 113.3s-113.3-50.8-113.3-113.3c0-11 9-20 20-20s20 9 20 20c0 40.4 32.9 73.3 73.3 73.3s73.3-32.9 73.3-73.3-32.9-73.3-73.3-73.3H340.9c-11.1 0-20-9-20-20s8.9-20 20-20h326.6c62.5 0 113.3 50.8 113.3 113.3z"
        fill={getIconColor(color, 3, '#F0E203')}
      />
      <Path
        d="M578.7 862c0 28.2-22.9 51.1-51.1 51.1V810.9c28.2 0 51.1 22.9 51.1 51.1zM656.4 302c0 62.5-50.8 113.3-113.3 113.3h-15.5v-40h15.5c40.4 0 73.3-32.9 73.3-73.3s-32.9-73.3-73.3-73.3c-5.3 0-10.5 0.6-15.5 1.6v-40.6c5.1-0.7 10.2-1.1 15.5-1.1 62.5 0.1 113.3 50.9 113.3 113.4zM780.8 675.3c0 62.5-50.8 113.3-113.3 113.3s-113.3-50.8-113.3-113.3c0-11 9-20 20-20s20 9 20 20c0 40.4 32.9 73.3 73.3 73.3s73.3-32.9 73.3-73.3-32.9-73.3-73.3-73.3H527.6v-40h139.9c62.5 0 113.3 50.8 113.3 113.3z"
        fill={getIconColor(color, 4, '#ED9507')}
      />
      <Path
        d="M807.6 162m-51.1 0a51.1 51.1 0 1 0 102.2 0 51.1 51.1 0 1 0-102.2 0Z"
        fill={getIconColor(color, 5, '#ED9507')}
      />
      <Path
        d="M823.1 508.6H527.6v-40h295.5c40.4 0 73.3-32.9 73.3-73.3S863.5 322 823.1 322s-73.3 32.9-73.3 73.3c0 11-9 20-20 20s-20-9-20-20c0-62.5 50.8-113.3 113.3-113.3s113.3 50.8 113.3 113.3-50.8 113.3-113.3 113.3z"
        fill={getIconColor(color, 6, '#ED9507')}
      />
      <Path
        d="M900.9 582m-51.1 0a51.1 51.1 0 1 0 102.2 0 51.1 51.1 0 1 0-102.2 0Z"
        fill={getIconColor(color, 7, '#ED9507')}
      />
    </Svg>
  );
};

Iconmianxingshachenbao.defaultProps = {
  size: 18,
};

export default Iconmianxingshachenbao;

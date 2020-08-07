/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingzhongyu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M383.4 947c-11 0-20-9-20-20v-68.6c0-11 9-20 20-20s20 9 20 20V927c0 11-9 20-20 20z"
        fill={getIconColor(color, 0, '#07DBFF')}
      />
      <path
        d="M623.4 947c-11 0-20-9-20-20v-68.6c0-11 9-20 20-20s20 9 20 20V927c0 11-9 20-20 20z"
        fill={getIconColor(color, 1, '#0BA8FF')}
      />
      <path
        d="M263.4 837c-11 0-20-9-20-20v-68.6c0-11 9-20 20-20s20 9 20 20V817c0 11-9 20-20 20zM523.4 748.4V817c0 11-9 20-20 20s-20-9-20-20v-68.6c0-11 9-20 20-20s20 9 20 20z"
        fill={getIconColor(color, 2, '#07DBFF')}
      />
      <path
        d="M743.4 837c-11 0-20-9-20-20v-68.6c0-11 9-20 20-20s20 9 20 20V817c0 11-9 20-20 20zM523.4 748.4V817c0 11-9 20-20 20V728.4c11 0 20 9 20 20z"
        fill={getIconColor(color, 3, '#0BA8FF')}
      />
      <path
        d="M952 448.5c0 110.3-89.7 200-200 200-2.1 0-4-0.1-5.7-0.2-0.9 0.1-1.9 0.2-2.9 0.2H246.3c-1 0-2-0.1-2.9-0.2-1.7 0.1-3.6 0.2-5.7 0.2-91.4 0-165.7-74.3-165.7-165.7 0-44.3 17.2-85.9 48.5-117.2 28.6-28.6 65.8-45.4 105.9-48.1-0.1-2.1-0.1-4.1-0.1-6.1 0-62.6 24.4-121.4 68.6-165.7 44.3-44.2 103.1-68.6 165.7-68.6 14.6 0 28.9 1.3 42.8 3.9 91.1 16.8 164.6 86.5 185.4 177.9 20.4-6.9 41.6-10.4 63.2-10.4 110.3 0 200 89.7 200 200z"
        fill={getIconColor(color, 4, '#97EBFF')}
      />
      <path
        d="M952 448.5c0 110.3-89.7 200-200 200-2.1 0-4-0.1-5.7-0.2-0.9 0.1-1.9 0.2-2.9 0.2h-240V81c91.1 16.8 164.6 86.5 185.4 177.9 20.4-6.9 41.6-10.4 63.2-10.4 110.3 0 200 89.7 200 200z"
        fill={getIconColor(color, 5, '#07DBFF')}
      />
    </svg>
  );
};

Iconmianxingzhongyu.defaultProps = {
  size: 18,
};

export default Iconmianxingzhongyu;

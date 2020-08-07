/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingdayu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M935.5 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2H256.7c-1 0-1.9-0.1-2.9-0.2-1.6 0.1-3.4 0.2-5.4 0.2-42.8 0-83-16.6-113.2-46.8-30.2-30.2-46.8-70.4-46.8-113.2s16.6-83 46.9-113.2c27.5-27.4 63.1-43.7 101.5-46.4-0.1-1.7-0.1-3.4-0.1-5.1 0-124.6 101.3-225.9 225.9-225.9 13.9 0 27.6 1.3 40.8 3.7 87.8 16 158.6 82.9 179 170.7 19.4-6.5 39.5-9.7 60.1-9.7 106.4 0 193 86.6 193 193z"
        fill={getIconColor(color, 0, '#97EBFF')}
      />
      <path
        d="M263.4 672c-11 0-20 9-20 20v68.6c0 11 9 20 20 20s20-9 20-20V692c0-11-9-20-20-20zM523.4 692v68.6c0 11.1-9 20-20 20-11.1 0-20-8.9-20-20V692c0-11 8.9-20 20-20s20 9 20 20zM383.4 757.7c-11 0-20 9-20 20v68.6c0 11 9 20 20 20s20-9 20-20v-68.6c0-11-9-20-20-20z"
        fill={getIconColor(color, 1, '#07DBFF')}
      />
      <path
        d="M623.4 757.7c-11 0-20 9-20 20v68.6c0 11 9 20 20 20s20-9 20-20v-68.6c0-11-9-20-20-20zM743.4 672c-11 0-20 9-20 20v68.6c0 11 9 20 20 20s20-9 20-20V692c0-11-9-20-20-20z"
        fill={getIconColor(color, 2, '#0BA8FF')}
      />
      <path
        d="M263.4 860.6c-11 0-20 9-20 20v68.5c0 11 9 20 20 20s20-9 20-20v-68.5c0-11-9-20-20-20zM523.4 880.6v68.5c0 11.1-9 20-20 20-11.1 0-20-8.9-20-20v-68.5c0-11 8.9-20 20-20s20 8.9 20 20z"
        fill={getIconColor(color, 3, '#07DBFF')}
      />
      <path
        d="M743.4 860.6c-11 0-20 9-20 20v68.5c0 11 9 20 20 20s20-9 20-20v-68.5c0-11-9-20-20-20zM523.4 692v68.6c0 11.1-9 20-20 20V672c11.1 0 20 9 20 20zM523.4 880.6v68.5c0 11.1-9 20-20 20V860.6c11.1 0 20 8.9 20 20z"
        fill={getIconColor(color, 4, '#0BA8FF')}
      />
      <path
        d="M935.5 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2H503.4V75.8c87.8 16 158.6 82.9 179 170.7 19.4-6.5 39.5-9.7 60.1-9.7 106.4 0 193 86.6 193 193z"
        fill={getIconColor(color, 5, '#07DBFF')}
      />
    </svg>
  );
};

Iconmianxingdayu.defaultProps = {
  size: 18,
};

export default Iconmianxingdayu;

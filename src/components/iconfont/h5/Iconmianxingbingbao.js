/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingbingbao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M263.4 823.4c-11 0-20-9-20-20v-68.5c0-11 9-20 20-20s20 9 20 20v68.5c0 11-9 20-20 20zM523.4 734.9v68.5c0 11-9 20-20 20-11.1 0-20-9-20-20v-68.5c0-11.1 8.9-20 20-20s20 8.9 20 20zM763.4 734.9v68.5c0 11-9 20-20 20-11.1 0-20-9-20-20v-68.5c0-11.1 8.9-20 20-20s20 8.9 20 20zM392 834.8c-34.7 0-62.9 28.2-62.9 62.9s28.2 62.9 62.9 62.9 62.9-28.2 62.9-62.9-28.2-62.9-62.9-62.9zM632 834.8c-34.7 0-62.9 28.2-62.9 62.9s28.2 62.9 62.9 62.9 62.9-28.2 62.9-62.9-28.2-62.9-62.9-62.9z"
        fill={getIconColor(color, 0, '#07DBFF')}
      />
      <path
        d="M952 434.8c0 110.3-89.7 200-200 200-2.1 0-4-0.1-5.7-0.2-1 0.1-1.9 0.2-2.9 0.2H246.3c-1 0-2-0.1-2.9-0.2-1.7 0.1-3.6 0.2-5.7 0.2-91.4 0-165.7-74.3-165.7-165.7 0-87.5 68.3-159.4 154.4-165.3-0.1-2-0.1-4.1-0.1-6.1 0-62.6 24.4-121.4 68.7-165.7 44.2-44.2 103-68.6 165.6-68.6 14.6 0 28.9 1.3 42.8 3.9 91.1 16.8 164.6 86.6 185.4 177.9 20.4-6.9 41.5-10.3 63.2-10.3 53.4 0 103.6 20.8 141.4 58.5 37.8 37.8 58.6 88 58.6 141.4z"
        fill={getIconColor(color, 1, '#97EBFF')}
      />
      <path
        d="M523.4 734.9v68.5c0 11-9 20-20 20V714.9c11.1 0 20 8.9 20 20z"
        fill={getIconColor(color, 2, '#0BA8FF')}
      />
      <path
        d="M621.946191 959.794928a62.9 62.9 0 1 0 20.154233-124.175065 62.9 62.9 0 1 0-20.154233 124.175065Z"
        fill={getIconColor(color, 3, '#0BA8FF')}
      />
      <path
        d="M763.4 734.9v68.5c0 11-9 20-20 20-11.1 0-20-9-20-20v-68.5c0-11.1 8.9-20 20-20s20 8.9 20 20z"
        fill={getIconColor(color, 4, '#0BA8FF')}
      />
      <path
        d="M952 434.8c0 110.3-89.7 200-200 200-2.1 0-4-0.1-5.7-0.2-1 0.1-1.9 0.2-2.9 0.2h-240V67.3c91.1 16.8 164.6 86.6 185.4 177.9 20.4-6.9 41.5-10.3 63.2-10.3 53.4 0 103.6 20.8 141.4 58.5 37.8 37.8 58.6 88 58.6 141.4z"
        fill={getIconColor(color, 5, '#07DBFF')}
      />
    </svg>
  );
};

Iconmianxingbingbao.defaultProps = {
  size: 18,
};

export default Iconmianxingbingbao;

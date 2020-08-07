/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingyusan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 785.1c-11 0-20-9-20-20V241.6c0-11 9-20 20-20s20 9 20 20v523.5c0 11-9 20-20 20zM512 131.8c-11 0-20-9-20-20V74.3c0-11 9-20 20-20s20 9 20 20v37.5c0 11-9 20-20 20z"
        fill={getIconColor(color, 0, '#3F1E01')}
      />
      <path
        d="M722 527.5c-0.5-33.7-16.8-63.5-41.9-82.3-17.6-13.2-39.4-21.1-63.1-21.1-58 0-105 47-105 105v-420h0.7C639.4 204.8 721.5 356.5 722 527.5z"
        fill={getIconColor(color, 1, '#5CE094')}
      />
      <path
        d="M512 109.1v420c0-58-47-105-105-105-23.7 0-45.5 7.8-63.1 21.1-25.1 18.9-41.4 48.7-41.9 82.3 0.5-170.9 82.6-322.7 209.3-418.4h0.7z"
        fill={getIconColor(color, 2, '#F0E203')}
      />
      <path
        d="M511.3 109.1C384.6 204.8 302.5 356.5 302 527.5v1.6c0-58-47-105-105-105s-105 47-105 105c0-231.8 187.7-419.7 419.3-420z"
        fill={getIconColor(color, 3, '#E73F5F')}
      />
      <path
        d="M932 529.1c0-58-47-105-105-105s-105 47-105 105v-1.6c-0.5-170.9-82.6-322.7-209.3-418.4 231.6 0.3 419.3 188.2 419.3 420z"
        fill={getIconColor(color, 4, '#07DBFF')}
      />
      <path
        d="M512 108.6l-0.2 0.5h-0.4c0.2-0.2 0.4-0.4 0.6-0.5zM512 108.6c0.2 0.1 0.4 0.3 0.7 0.5h-0.4l-0.3-0.5z"
        fill={getIconColor(color, 5, '#3F1E01')}
      />
      <path
        d="M537.3 839.5v-95.8c0-3.1-2.5-5.6-5.6-5.6h-39.5c-3.1 0-5.6 2.5-5.6 5.6v95.8c0 41.9 34.1 76.1 76.1 76.1 41.6 0 75.6-33.6 76.1-75.2 0.2-14.1-11.2-26.3-25.3-26.3-14 0-25.4 11.4-25.4 25.4 0 14-11.4 25.4-25.4 25.4-14-0.1-25.4-11.4-25.4-25.4z"
        fill={getIconColor(color, 6, '#0BA8FF')}
      />
    </svg>
  );
};

Iconmianxingyusan.defaultProps = {
  size: 18,
};

export default Iconmianxingyusan;

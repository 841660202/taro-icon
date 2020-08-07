/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingfuchen = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M952 881.6c0 11.1-9 20-20 20H92c-11 0-20-8.9-20-20 0-11 9-20 20-20h840c11 0 20 8.9 20 20z"
        fill={getIconColor(color, 0, '#F0E203')}
      />
      <path
        d="M209.6 730.4m-70.4 0a70.4 70.4 0 1 0 140.8 0 70.4 70.4 0 1 0-140.8 0Z"
        fill={getIconColor(color, 1, '#F0E203')}
      />
      <path
        d="M462.213723 578.580701a70.4 70.4 0 1 0 99.558897-99.562372 70.4 70.4 0 1 0-99.558897 99.562372Z"
        fill={getIconColor(color, 2, '#F0E203')}
      />
      <path
        d="M260 394.4m-70.4 0a70.4 70.4 0 1 0 140.8 0 70.4 70.4 0 1 0-140.8 0Z"
        fill={getIconColor(color, 3, '#F0E203')}
      />
      <path
        d="M565.6 192.8c0 33-22.9 60.8-53.6 68.4-5.4 1.3-11 2-16.8 2-38.8 0-70.4-31.6-70.4-70.4s31.6-70.4 70.4-70.4c5.8 0 11.4 0.7 16.8 2 30.7 7.6 53.6 35.4 53.6 68.4z"
        fill={getIconColor(color, 4, '#F0E203')}
      />
      <path
        d="M512 261.2V124.4c30.7 7.5 53.6 35.3 53.6 68.4 0 33-22.9 60.8-53.6 68.4zM512 599.2V458.4c38.8 0 70.4 31.6 70.4 70.4s-31.6 70.4-70.4 70.4z"
        fill={getIconColor(color, 5, '#ED9507')}
      />
      <path
        d="M714.210894 712.981873a70.4 70.4 0 1 0 99.558898-99.562373 70.4 70.4 0 1 0-99.558898 99.562373Z"
        fill={getIconColor(color, 6, '#ED9507')}
      />
      <path
        d="M764.612773 376.984408a70.4 70.4 0 1 0 99.558897-99.562372 70.4 70.4 0 1 0-99.558897 99.562372Z"
        fill={getIconColor(color, 7, '#ED9507')}
      />
      <path
        d="M952 881.6c0 11.1-9 20-20 20H512v-40h420c11 0 20 8.9 20 20z"
        fill={getIconColor(color, 8, '#ED9507')}
      />
    </svg>
  );
};

Iconmianxingfuchen.defaultProps = {
  size: 18,
};

export default Iconmianxingfuchen;

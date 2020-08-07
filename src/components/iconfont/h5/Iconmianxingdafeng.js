/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingdafeng = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M595.8 305.9v386.5l-137.3 53.5-102.7 40c-5.2 2.3-10.7 3.5-16.2 3.5-7.4 0-14.9-2.1-21.4-6.3-11.6-7.4-18.6-20-18.6-33.8V249c0-13.8 6.9-26.4 18.5-33.7 11.3-7.2 25.4-8.3 37.7-2.8l102.7 40 137.3 53.4z"
        fill={getIconColor(color, 0, '#97EBFF')}
      />
      <path
        d="M226.2 245.8v636.9c0 26.9-21.4 48.7-48.1 49.4h-1.3c-27.3 0-49.4-22.1-49.4-49.4V245.8h98.8z"
        fill={getIconColor(color, 1, '#F0E203')}
      />
      <path
        d="M261.6 176.8c0 28.4-14 53.6-35.5 69-13.6 9.7-30.1 15.5-48 15.8h-1.3c-18.4 0-35.4-5.8-49.3-15.8-21.5-15.4-35.5-40.6-35.5-69C92 130 130 92 176.8 92h1.3c46.2 0.7 83.5 38.4 83.5 84.8z"
        fill={getIconColor(color, 2, '#F0E203')}
      />
      <path
        d="M595.8 305.9v386.5l-137.3 53.4V252.4z"
        fill={getIconColor(color, 3, '#07DBFF')}
      />
      <path
        d="M291.6 688.6c-2 0-4-0.3-5.9-0.9l-65.4-20.3c-10.5-3.3-16.4-14.5-13.2-25 3.3-10.5 14.5-16.4 25-13.2l65.4 20.3c10.5 3.3 16.4 14.5 13.2 25-2.7 8.6-10.6 14.1-19.1 14.1z m-65.4-336.2c-8.5 0-16.4-5.5-19.1-14.1-3.3-10.5 2.6-21.8 13.2-25l65.4-20.3c10.5-3.3 21.8 2.6 25 13.2 3.3 10.5-2.6 21.8-13.2 25l-65.4 20.3c-1.9 0.6-3.9 0.9-5.9 0.9z"
        fill={getIconColor(color, 4, '#3F1E01')}
      />
      <path
        d="M226.1 245.8h0.1v636.9c0 26.9-21.4 48.7-48.1 49.4V92c46.2 0.7 83.5 38.4 83.5 84.8 0 28.4-14 53.6-35.5 69z"
        fill={getIconColor(color, 5, '#ED9507')}
      />
      <path
        d="M951.7 499.1c0 33.2-20 62.5-51 74.5l-41.1 16V408.5l41.1 16c31 12.1 51 41.3 51 74.6z"
        fill={getIconColor(color, 6, '#075CD8')}
      />
      <path
        d="M859.6 408.5v181.2l-137.3 53.4v-288z"
        fill={getIconColor(color, 7, '#0F82EA')}
      />
      <path
        d="M595.8 305.9v386.5l126.5-49.3v-288z"
        fill={getIconColor(color, 8, '#0BA8FF')}
      />
    </svg>
  );
};

Iconmianxingdafeng.defaultProps = {
  size: 18,
};

export default Iconmianxingdafeng;

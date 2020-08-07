/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingbaoyu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M248.5 770.8c-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c4.9-9.9 16.9-13.9 26.8-9 9.9 4.9 13.9 16.9 9 26.8l-32.9 65.9c-3.5 7-10.6 11.1-17.9 11.1zM529.9 693.8L497 759.7c-0.4 0.9-0.9 1.7-1.4 2.4-3.8 5.5-10 8.6-16.5 8.6-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c0.4-0.9 0.9-1.7 1.4-2.4 5.6-8.1 16.4-11 25.4-6.5 9.9 4.9 13.9 17 9 26.8zM363.8 853.2c-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c4.9-9.9 16.9-13.9 26.8-9 9.9 4.9 13.9 16.9 9 26.8l-32.9 65.9c-3.5 7-10.6 11.1-17.9 11.1zM100.2 853.2c-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9 9.9 4.9 13.9 17 8.9 26.8l-33 65.9c-3.5 7-10.6 11-17.9 11zM645.2 776.2l-32.9 65.9c-3.5 7-10.6 11.1-17.9 11.1-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c4.9-9.9 16.9-13.9 26.8-9 9.9 4.9 13.9 16.9 9 26.8zM875.8 776.2l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9s13.8 17 8.9 26.8zM760.5 693.9l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9 9.8 4.9 13.8 16.9 8.9 26.8zM248.5 952c-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c4.9-9.9 16.9-13.9 26.8-9 9.9 4.9 13.9 16.9 9 26.8l-32.9 65.9c-3.5 7-10.6 11.1-17.9 11.1zM529.9 875L497 940.9c-0.4 0.9-0.9 1.7-1.4 2.4-3.8 5.5-10 8.6-16.5 8.6-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c0.4-0.9 0.9-1.7 1.4-2.4 5.6-8.1 16.4-11 25.4-6.5 9.9 4.9 13.9 17 9 26.8zM760.5 875l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9s13.8 17 8.9 26.8z"
        fill={getIconColor(color, 0, '#07DBFF')}
      />
      <path
        d="M943.8 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2H265c-1 0-1.9-0.1-2.9-0.2-1.6 0.1-3.4 0.2-5.4 0.2-42.8 0-83-16.6-113.2-46.8-30.2-30.2-46.8-70.4-46.8-113.2s16.6-83 46.9-113.2c27.4-27.4 63.1-43.7 101.5-46.4 0-1.7-0.1-3.4-0.1-5.1 0-60.4 23.5-117.1 66.2-159.8 42.7-42.6 99.4-66.1 159.7-66.1 8.3 0 16.5 0.5 24.6 1.3 95.1 10.4 173.5 80 195.1 173.1 19.4-6.5 39.5-9.7 60.1-9.7 106.5 0 193.1 86.6 193.1 193z"
        fill={getIconColor(color, 1, '#97EBFF')}
      />
      <path
        d="M943.8 429.8c0 106.4-86.5 192.9-192.9 192.9-2 0-3.8-0.1-5.4-0.2-0.9 0.1-1.9 0.2-2.9 0.2h-247V73.4c95.1 10.4 173.5 80 195.1 173.1 19.4-6.5 39.5-9.7 60.1-9.7 106.4 0 193 86.6 193 193z"
        fill={getIconColor(color, 2, '#07DBFF')}
      />
      <path
        d="M529.9 875L497 940.9c-0.4 0.9-0.9 1.7-1.4 2.4v-88.6c5.6-8.1 16.4-11 25.4-6.5 9.8 4.9 13.8 17 8.9 26.8zM529.9 693.8L497 759.7c-0.4 0.9-0.9 1.7-1.4 2.4v-88.6c5.6-8.1 16.4-11 25.4-6.5 9.8 4.9 13.8 17 8.9 26.8zM645.2 776.2l-32.9 65.9c-3.5 7-10.6 11.1-17.9 11.1-3 0-6-0.7-8.9-2.1-9.9-4.9-13.9-16.9-9-26.8l32.9-65.9c4.9-9.9 16.9-13.9 26.8-9 9.9 4.9 13.9 16.9 9 26.8zM760.5 875l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9s13.8 17 8.9 26.8zM760.5 693.9l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9 9.8 4.9 13.8 16.9 8.9 26.8zM875.8 776.2l-33 65.9c-3.5 7-10.6 11-17.9 11-3 0-6.1-0.7-8.9-2.1-9.9-4.9-13.9-17-8.9-26.8l33-65.9c4.9-9.9 17-13.9 26.8-8.9s13.8 17 8.9 26.8z"
        fill={getIconColor(color, 3, '#0BA8FF')}
      />
    </svg>
  );
};

Iconmianxingbaoyu.defaultProps = {
  size: 18,
};

export default Iconmianxingbaoyu;

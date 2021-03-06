/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconweizhi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M701.1 726.4C558.9 684.9 455 553.6 455 398c0-105.4 47.7-199.7 122.7-262.4 0 0 426.4 102.1 123.4 590.8z"
        fill={getIconColor(color, 0, '#E4F7F9')}
      />
      <path
        d="M512 550c-68.1 0-123.5-55.4-123.5-123.5S443.9 303 512 303s123.5 55.4 123.5 123.5S580.1 550 512 550z m0-190c-36.7 0-66.5 29.8-66.5 66.5S475.3 493 512 493s66.5-29.8 66.5-66.5S548.7 360 512 360z"
        fill={getIconColor(color, 1, '#2EC99D')}
      />
      <path
        d="M512 920.5c-133.3 0-277.6-275.3-312.3-370.2-13.4-36.6-20.2-75.1-20.2-114.3 0-183.3 149.2-332.5 332.5-332.5S844.5 252.7 844.5 436c0 39.3-6.8 77.7-20.2 114.3-34.7 94.9-179 370.2-312.3 370.2z m0-760c-151.9 0-275.5 123.6-275.5 275.5 0 32.6 5.6 64.4 16.7 94.7C301.1 661.6 433.9 863.5 512 863.5c78.2 0 210.9-201.9 258.8-332.8 11.1-30.3 16.7-62.1 16.7-94.7 0-151.9-123.6-275.5-275.5-275.5z"
        fill={getIconColor(color, 2, '#0F1110')}
      />
    </svg>
  );
};

Iconweizhi.defaultProps = {
  size: 18,
};

export default Iconweizhi;

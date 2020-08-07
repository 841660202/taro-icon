/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshouye1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M170.9 754.5l196.9-196.9c14.8-14.8 38.8-14.8 53.6 0L743 879.1H170.9V754.5z"
        fill={getIconColor(color, 0, '#E4F7F9')}
      />
      <path
        d="M578.3 913.4H445.7c-15.7 0-28.4-12.7-28.4-28.4V648.1c0-52.2 42.5-94.7 94.7-94.7s94.7 42.5 94.7 94.7V885c0 15.7-12.7 28.4-28.4 28.4z m-104.2-56.8h75.8V648.1c0-20.9-17-37.9-37.9-37.9s-37.9 17-37.9 37.9v208.5z"
        fill={getIconColor(color, 1, '#2EC99D')}
      />
      <path
        d="M928.8 477.6c-6.1 0-12.3-2-17.5-6L526.5 171.3c-8.3-5.6-20.9-5.5-30.6 1.1L112.6 471.6c-12.4 9.7-30.2 7.4-39.9-4.9-9.7-12.4-7.5-30.2 4.9-39.9l384.8-300.3c30.7-21 68.4-21 97.6-1.1l386.3 301.4c12.4 9.7 14.6 27.5 4.9 39.9-5.5 7.1-13.9 10.9-22.4 10.9z"
        fill={getIconColor(color, 2, '#0F1110')}
      />
      <path
        d="M815.2 913.4H208.8c-36.6 0-66.3-29.8-66.3-66.3V411.3c0-15.7 12.7-28.4 28.4-28.4s28.4 12.7 28.4 28.4v435.8c0 5.2 4.3 9.5 9.5 9.5h606.3c5.2 0 9.5-4.3 9.5-9.5V411.3c0-15.7 12.7-28.4 28.4-28.4s28.4 12.7 28.4 28.4v435.8c0.1 36.5-29.7 66.3-66.2 66.3z"
        fill={getIconColor(color, 3, '#0F1110')}
      />
    </svg>
  );
};

Iconshouye1.defaultProps = {
  size: 18,
};

export default Iconshouye1;

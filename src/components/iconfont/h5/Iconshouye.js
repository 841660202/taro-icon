/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshouye = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 138.56l320 293.44v453.44H192V432l320-293.44m0-64a64 64 0 0 0-43.2 16.64L148.8 384A64 64 0 0 0 128 432v453.44a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V432a64 64 0 0 0-20.8-48l-320-293.44a64 64 0 0 0-43.2-16z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <path
        d="M640 864a32 32 0 0 1-32-32v-160a32 32 0 0 0-32-32h-128a32 32 0 0 0-32 32v160a32 32 0 0 1-64 0v-160a96 96 0 0 1 96-96h128a96 96 0 0 1 96 96v160a32 32 0 0 1-32 32z"
        fill={getIconColor(color, 1, '#F4CA1C')}
      />
    </svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

export default Iconshouye;

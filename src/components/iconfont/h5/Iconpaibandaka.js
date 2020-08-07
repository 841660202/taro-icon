/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconpaibandaka = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M0 0h1024v1024H0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <path
        d="M512 972c41.176 0 400-199.068 400-508.888C912 238.272 732.912 56 512 56S112 238.268 112 463.112C112 769.248 470.824 972 512 972z"
        fill={getIconColor(color, 1, '#4DBB88')}
      />
      <path
        d="M212 463.112a305.332 300 90 1 0 600 0 305.332 300 90 1 0-600 0Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <path
        d="M542 429.184h80c22.092 0 40 17.908 40 40v4.816c0 22.092-17.908 40-40 40h-120c-22.092 0-40-17.908-40-40V299.556c0-22.092 17.908-40 40-40s40 17.908 40 40v129.628z"
        fill={getIconColor(color, 3, '#4DBB88')}
      />
    </svg>
  );
};

Iconpaibandaka.defaultProps = {
  size: 18,
};

export default Iconpaibandaka;

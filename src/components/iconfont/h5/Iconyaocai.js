/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyaocai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M615.57 393.1c0 123.39-123.52 207.05-275.6 207.05S64.24 531.22 64.84 393.1c-9.4-173.87 123.28-229.96 275.36-229.96s275.37 52.59 275.37 229.96z"
        fill={getIconColor(color, 0, '#E04646')}
      />
      <path
        d="M460.32 563.69l432.83-344.62"
        fill={getIconColor(color, 1, '#999999')}
      />
      <path
        d="M456.789 559.257l432.823-344.632 7.064 8.871-432.823 344.632z"
        fill={getIconColor(color, 2, '#B1F1A8')}
      />
      <path
        d="M648.115 408.768l13.271-84.032 11.202 1.77-13.27 84.031z"
        fill={getIconColor(color, 3, '#B1F1A8')}
      />
      <path
        d="M695.38 175.78s-70.76 75.35-29.31 157.21c0 0 74.22-18.75 29.31-157.21zM751.864 326.157l13.626-86.285 11.202 1.77-13.627 86.284z"
        fill={getIconColor(color, 4, '#B1F1A8')}
      />
      <path
        d="M796.76 162.13s-69.41 40.15-26.58 85.99c0 0 73.84-8.93 26.58-85.99zM769.041 312.608l85.943-1.538 0.203 11.337-85.943 1.54z"
        fill={getIconColor(color, 5, '#B1F1A8')}
      />
      <path
        d="M934.13 312.26s-58.25-56.95-86.63-0.53c0 0 31.19 70.75 86.63 0.53z"
        fill={getIconColor(color, 6, '#B1F1A8')}
      />
      <path
        d="M657.148 401.17l89.584-2.133 0.27 11.337-89.584 2.133z"
        fill={getIconColor(color, 7, '#B1F1A8')}
      />
      <path
        d="M893.24 406.09s-84.04-58.64-153.43-0.95c0 0 31.4 72.65 153.43 0.95zM930.14 182.3c44.74 8.59 44.08 34.25-40.55 45.02-4.73 0.6-8.61-2.78-8.65-7.62-0.24-27.79 1.91-109.58 38-45.45 2.37 4.23 6.41 7.13 11.2 8.05z"
        fill={getIconColor(color, 8, '#B1F1A8')}
      />
      <path
        d="M98.18 299.65a247.58 138.06 0 1 0 495.16 0 247.58 138.06 0 1 0-495.16 0Z"
        fill={getIconColor(color, 9, '#FB6F68')}
      />
      <path
        d="M366.601751 333.079285a117.29 79.74 9.352 1 0 25.915404-157.360295 117.29 79.74 9.352 1 0-25.915404 157.360295Z"
        fill={getIconColor(color, 10, '#FFAD9F')}
      />
      <path
        d="M400.129824 261.842193a19.25 13.09 9.352 1 0 4.254234-25.832032 19.25 13.09 9.352 1 0-4.254234 25.832032Z"
        fill={getIconColor(color, 11, '#FFFFFF')}
      />
      <path
        d="M812.47 666.65c0 123.39-123.52 207.05-275.6 207.05s-275.73-68.94-275.13-207.05c-9.4-173.87 123.28-229.96 275.36-229.96s275.37 52.58 275.37 229.96z"
        fill={getIconColor(color, 12, '#FB6F68')}
      />
      <path
        d="M397.17 655.12a139.7 54.97 0 1 0 279.4 0 139.7 54.97 0 1 0-279.4 0Z"
        fill={getIconColor(color, 13, '#E59D63')}
      />
      <path
        d="M397.17 655.12a139.7 54.97 0 1 0 279.4 0 139.7 54.97 0 1 0-279.4 0Z"
        fill={getIconColor(color, 14, '#CC8554')}
      />
      <path
        d="M547.840887 666.285571a109.87 30.66 2.499 1 0 2.673671-61.261684 109.87 30.66 2.499 1 0-2.673671 61.261684Z"
        fill={getIconColor(color, 15, '#E59D63')}
      />
      <path
        d="M479.9 623.67a78.63 18.71 0 1 0 157.26 0 78.63 18.71 0 1 0-157.26 0Z"
        fill={getIconColor(color, 16, '#EFAE82')}
      />
      <path
        d="M294.32 530.96s295.1-164.19 503.73 42.61c0 0-26.94-130.77-238.74-136.49 0.01 0-189.48-16.9-264.99 93.88z"
        fill={getIconColor(color, 17, '#FFAD9F')}
      />
      <path
        d="M776.01 773.6s-322.89 166.1-506.15-48.43c0 0 24.46 148.26 250.85 148.26 0 0 160.72 10.76 255.3-99.83z"
        fill={getIconColor(color, 18, '#E04646')}
      />
    </svg>
  );
};

Iconyaocai.defaultProps = {
  size: 18,
};

export default Iconyaocai;

/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxiaoxi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M320.64 512m0-32l0-64q0-32 32-32l0 0q32 0 32 32l0 64q0 32-32 32l0 0q-32 0-32-32Z"
        fill={getIconColor(color, 0, '#F4CA1C')}
      />
      <path
        d="M480 512m0-32l0-64q0-32 32-32l0 0q32 0 32 32l0 64q0 32-32 32l0 0q-32 0-32-32Z"
        fill={getIconColor(color, 1, '#F4CA1C')}
      />
      <path
        d="M640 512m0-32l0-64q0-32 32-32l0 0q32 0 32 32l0 64q0 32-32 32l0 0q-32 0-32-32Z"
        fill={getIconColor(color, 2, '#F4CA1C')}
      />
      <path
        d="M512 64C264.64 64 64 236.16 64 448c0 141.76 89.6 265.6 224 332.16v146.56a32 32 0 0 0 48 27.84L545.6 832c231.68-14.72 416-180.48 416-384C960 236.16 759.36 64 512 64z m234.24 638.08A431.04 431.04 0 0 1 534.4 768a32 32 0 0 0-14.4 4.16l-91.84 53.76L352 871.36v-111.04a32 32 0 0 0-19.84-29.44A378.88 378.88 0 0 1 288 707.84 307.52 307.52 0 0 1 128 448C128 271.68 300.16 128 512 128s384 143.68 384 320a305.6 305.6 0 0 1-149.76 254.08z"
        fill={getIconColor(color, 3, '#444444')}
      />
    </svg>
  );
};

Iconxiaoxi.defaultProps = {
  size: 18,
};

export default Iconxiaoxi;

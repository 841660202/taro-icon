/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondingwei = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 320a96 96 0 1 1-96 96 96 96 0 0 1 96-96m0-64a160 160 0 1 0 160 160 160 160 0 0 0-160-160z"
        fill={getIconColor(color, 0, '#F4CA1C')}
      />
      <path
        d="M512 64A349.12 349.12 0 0 0 162.88 414.08a341.12 341.12 0 0 0 8.64 77.12c0 4.8 2.24 9.6 3.52 14.4s2.24 6.72 3.2 10.24l3.84 11.84c1.92 5.76 4.16 11.2 6.4 16.96l4.8 11.52c2.56 6.08 5.76 12.16 8.64 17.92l4.8 9.28A265.6 265.6 0 0 0 224 608l9.92 13.44 228.16 309.76a64 64 0 0 0 103.04 0l224-304.64 3.2-4.16 10.56-14.4a317.76 317.76 0 0 0 21.12-36.48c2.88-5.76 5.76-11.2 8.64-17.28v-2.56l5.76-14.72c1.92-5.12 3.84-10.24 5.44-15.36l4.8-15.68 3.84-16a338.24 338.24 0 0 0 8.64-76.8A348.8 348.8 0 0 0 512 64z m268.8 444.8a291.2 291.2 0 0 1-40.32 74.88l-118.4 160L512 896l-110.08-149.44-116.48-159.36-9.92-13.76a289.6 289.6 0 0 1-32-64 264.32 264.32 0 0 1-15.68-74.88v-20.8a285.12 285.12 0 0 1 570.24 0v20.48a278.08 278.08 0 0 1-17.28 75.52z"
        fill={getIconColor(color, 1, '#444444')}
      />
    </svg>
  );
};

Icondingwei.defaultProps = {
  size: 18,
};

export default Icondingwei;

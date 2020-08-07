/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxiangji = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M718.72 268.8l-32-96A64 64 0 0 0 625.6 128h-227.52a64 64 0 0 0-60.8 43.84l-32 96-192 41.28A64 64 0 0 0 64 371.52V832a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V371.84a64 64 0 0 0-50.88-64zM896 832H128V397.44a32 32 0 0 1 25.28-32l128-27.84 54.4-11.52a32 32 0 0 0 23.68-21.12l9.92-29.44 8-24 20.8-59.52h227.84l20.48 61.44 7.68 22.72 10.24 30.4a32 32 0 0 0 23.68 21.12l54.4 11.52 128 27.2a32 32 0 0 1 25.6 32z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <path
        d="M512 448a96 96 0 1 1-96 96 96 96 0 0 1 96-96m0-64a160 160 0 1 0 160 160 160 160 0 0 0-160-160z"
        fill={getIconColor(color, 1, '#F4CA1C')}
      />
    </svg>
  );
};

Iconxiangji.defaultProps = {
  size: 18,
};

export default Iconxiangji;

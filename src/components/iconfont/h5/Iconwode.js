/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconwode = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M641.6 470.08l5.12-3.2a224 224 0 1 0-269.44 0l5.12 3.2A381.76 381.76 0 0 0 128 829.76 130.24 130.24 0 0 0 258.24 960h507.2A130.56 130.56 0 0 0 896 829.76a381.76 381.76 0 0 0-254.4-359.68zM352 288a160 160 0 1 1 64 128 160 160 0 0 1-64-128z m413.44 608H258.24A66.24 66.24 0 0 1 192 829.76 317.76 317.76 0 0 1 509.44 512h4.8A318.08 318.08 0 0 1 832 829.76 66.56 66.56 0 0 1 765.44 896z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <path
        d="M480 576m32 0l0 0q32 0 32 32l0 96q0 32-32 32l0 0q-32 0-32-32l0-96q0-32 32-32Z"
        fill={getIconColor(color, 1, '#F4CA1C')}
      />
    </svg>
  );
};

Iconwode.defaultProps = {
  size: 18,
};

export default Iconwode;

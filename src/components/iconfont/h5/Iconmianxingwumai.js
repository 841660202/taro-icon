/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingwumai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M193.4 300.3h217.2c11 0 20-9 20-20s-9-20-20-20H193.4c-11 0-20 9-20 20s9 20 20 20zM575.4 468.6c0 11.1-9 20-20 20h-362c-11.1 0-20-8.9-20-20 0-11 8.9-20 20-20h362c11.1 0 20 8.9 20 20zM381.7 636.8H193.4c-11 0-20 9-20 20s9 20 20 20h188.3c11 0 20-9 20-20s-9-20-20-20zM604.4 656.8c0 11-9 20-20 20H454.1c-11 0-20-9-20-20s9-20 20-20h130.3c11.1 0 20 9 20 20zM879.6 280.3c0 11-8.9 20-20 20H483c-11 0-20-9-20-20s9-20 20-20h376.6c11.1 0 20 8.9 20 20zM367.2 334.6h-0.1c-27 0-49 22-49 49s22 49 49 49 49-22 49-49c0-26.9-21.9-48.8-48.9-49z"
        fill={getIconColor(color, 0, '#F0E203')}
      />
      <path
        d="M120.9 323.7m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 1, '#F0E203')}
      />
      <path
        d="M532 576.4c0 16.2-7.9 30.5-20 39.5-8.1 6-18.2 9.5-29 9.5-27 0-49-22-49-49s22-49 49-49c10.8 0 20.9 3.5 29 9.5 12.1 8.9 20 23.3 20 39.5z"
        fill={getIconColor(color, 2, '#F0E203')}
      />
      <path
        d="M338.2 758.2m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 3, '#F0E203')}
      />
      <path
        d="M512 615.9V537c12.1 8.9 20 23.3 20 39.5 0 16.1-7.9 30.5-20 39.4zM555.4 488.6H512v-40h43.4c11 0 20 9 20 20 0 11.1-8.9 20-20 20zM584.4 676.8H512v-40h72.4c11 0 20 9 20 20s-8.9 20-20 20z"
        fill={getIconColor(color, 4, '#ED9507')}
      />
      <path
        d="M627.8 845.1m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 5, '#ED9507')}
      />
      <path
        d="M700.2 367.2m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 6, '#ED9507')}
      />
      <path
        d="M801.6 178.9m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 7, '#ED9507')}
      />
      <path
        d="M879.6 656.8c0 11-8.9 20-20 20H656.8c-11 0-20-9-20-20s9-20 20-20h202.8c11.1 0 20 9 20 20zM627.9 448.6h231.7c11.1 0 20 9 20 20 0 11.1-8.9 20-20 20H627.9c-11.1 0-20-8.9-20-20s8.9-20 20-20zM859.6 300.3H512v-40h347.6c11.1 0 20 9 20 20s-8.9 20-20 20z"
        fill={getIconColor(color, 8, '#ED9507')}
      />
      <path
        d="M903 536.5m-49 0a49 49 0 1 0 98 0 49 49 0 1 0-98 0Z"
        fill={getIconColor(color, 9, '#ED9507')}
      />
    </svg>
  );
};

Iconmianxingwumai.defaultProps = {
  size: 18,
};

export default Iconmianxingwumai;

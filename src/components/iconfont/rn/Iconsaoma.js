/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconsaoma = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M352 96H192a96 96 0 0 0-96 96v160a32 32 0 0 0 64 0V192a32 32 0 0 1 32-32h160a32 32 0 0 0 0-64zM352 864H192a32 32 0 0 1-32-32v-160a32 32 0 0 0-64 0v160a96 96 0 0 0 96 96h160a32 32 0 0 0 0-64zM896 640a32 32 0 0 0-32 32v160a32 32 0 0 1-32 32h-160a32 32 0 0 0 0 64h160a96 96 0 0 0 96-96v-160a32 32 0 0 0-32-32zM832 96h-161.92a32 32 0 0 0 0 64H832a32 32 0 0 1 32 32v160a32 32 0 0 0 64 0V192a96 96 0 0 0-96-96z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <Path
        d="M224 480m31.36 0l513.28 0q31.36 0 31.36 31.36l0 1.28q0 31.36-31.36 31.36l-513.28 0q-31.36 0-31.36-31.36l0-1.28q0-31.36 31.36-31.36Z"
        fill={getIconColor(color, 1, '#F4CA1C')}
      />
    </Svg>
  );
};

Iconsaoma.defaultProps = {
  size: 18,
};

export default Iconsaoma;

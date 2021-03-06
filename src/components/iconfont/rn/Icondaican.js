/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icondaican = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M656.73 250.54H344.41c-11.58 0-20.97-9.39-20.97-20.97v-68.52c0-11.58 9.39-20.97 20.97-20.97h312.31c11.58 0 20.97 9.39 20.97 20.97v68.52c0.01 11.58-9.38 20.97-20.96 20.97z"
        fill={getIconColor(color, 0, '#FFE5E1')}
      />
      <Path
        d="M710.08 956.09H313.92c-78.71 0-142.51-63.8-142.51-142.51V376.27c0-78.71 63.8-142.51 142.51-142.51h396.16c78.71 0 142.51 63.8 142.51 142.51v437.31c0 78.7-63.8 142.51-142.51 142.51z"
        fill={getIconColor(color, 1, '#FFE5E1')}
      />
      <Path
        d="M823.13 842.05H197.57c-14.45 0-26.16-12.31-26.16-27.49V408.5h681.18v405.08c0 15.55-14.66 28.47-29.46 28.47zM716.55 150.2H293.74c-20.85 0-37.75-16.9-37.75-37.75v-6.78c0-20.85 16.9-37.75 37.75-37.75h422.81c20.85 0 37.75 16.9 37.75 37.75v6.78c0 20.85-16.9 37.75-37.75 37.75z"
        fill={getIconColor(color, 2, '#FFD599')}
      />
      <Path
        d="M509.98 703.76l-14.25-28.79c-4.71-9.51-8.22-10-25.77-8.93l-157.29 11.31c-1.48 0.7-2.87-1.01-1.89-2.32 5.26-7.07 8.72-15.58 9.48-25.02 2.07-25.9-16.37-48.5-41.66-52.38-5.45-19.29-22.26-34.15-43.42-35.84-23.08-1.85-56.69 10.56-63.72 31.56v80.12s91.33 73.15 97.44 73.99c64.38 8.84 232.6-17.85 232.6-17.85 9.41-4.85 13.18-16.36 8.48-25.85z"
        fill={getIconColor(color, 3, '#FFE5E1')}
      />
      <Path
        d="M520.56 655.45m-63.24 0a63.24 63.24 0 1 0 126.48 0 63.24 63.24 0 1 0-126.48 0Z"
        fill={getIconColor(color, 4, '#CEA3A3')}
      />
      <Path
        d="M471.62 706.4m-63.24 0a63.24 63.24 0 1 0 126.48 0 63.24 63.24 0 1 0-126.48 0Z"
        fill={getIconColor(color, 5, '#D6B5B0')}
      />
      <Path
        d="M471.62 706.4m-24.12 0a24.12 24.12 0 1 0 48.24 0 24.12 24.12 0 1 0-48.24 0Z"
        fill={getIconColor(color, 6, '#FFD599')}
      />
      <Path
        d="M789.43 640.83H660.37c-6.34 0-11.48-5.14-11.48-11.48v-2.44c0-6.34 5.14-11.48 11.48-11.48h129.05c6.34 0 11.48 5.14 11.48 11.48v2.44c0.01 6.34-5.13 11.48-11.47 11.48zM789.43 711H660.37c-6.34 0-11.48-5.14-11.48-11.48v-2.44c0-6.34 5.14-11.48 11.48-11.48h129.05c6.34 0 11.48 5.14 11.48 11.48v2.44c0.01 6.34-5.13 11.48-11.47 11.48zM789.43 779.8H660.37c-6.34 0-11.48-5.14-11.48-11.48v-2.44c0-6.34 5.14-11.48 11.48-11.48h129.05c6.34 0 11.48 5.14 11.48 11.48v2.44c0.01 6.34-5.13 11.48-11.47 11.48z"
        fill={getIconColor(color, 7, '#F5F5FF')}
      />
      <Path
        d="M852.59 536.68h-422.2c-14.19 0-25.69-11.5-25.69-25.69 0-14.19 11.5-25.69 25.69-25.69h422.2v51.38z"
        fill={getIconColor(color, 8, '#C9C1F5')}
      />
    </Svg>
  );
};

Icondaican.defaultProps = {
  size: 18,
};

export default Icondaican;

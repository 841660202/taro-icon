/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconshouhuoxinxi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M394.79 401.57c0-66.25 50.96-117.2 117.21-117.2s117.2 50.96 117.2 117.2-50.96 117.2-117.2 117.2-117.21-50.95-117.21-117.2z m295.56 0c0-96.82-81.53-178.35-178.35-178.35s-178.35 81.53-178.35 178.35S415.18 579.93 512 579.93s178.35-76.44 178.35-178.36z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M506.9 125.47c143.57 0 261.5 117.82 261.5 261.25 0 184.41-189.72 368.81-246.12 420.04-66.66-51.22-271.76-235.63-271.76-420.04-5.12-143.43 112.82-261.25 256.38-261.25z m0 747.88c5.13 5.12 10.26 5.12 20.51 5.12 5.13 0 15.38 0 20.51-5.12 10.25-10.24 287.14-235.63 287.14-486.63C835.06 207.43 691.49 64 512.03 64 332.57 64 189 207.43 189 386.71c-5.13 245.88 302.52 476.39 317.9 486.64z"
        fill={getIconColor(color, 1, '#00C050')}
      />
      <Path
        d="M770.56 659.35c-15.36 0-30.72 15.29-30.72 30.58s15.36 30.57 30.72 30.57c0 0 92.16 10.19 102.4 178.35H151.04c10.24-173.26 102.4-178.35 102.4-178.35 20.48 0 30.72-15.29 30.72-30.57 0-15.29-15.36-30.58-30.72-30.58-46.08 0-163.84 50.96-163.84 270.08 0 15.29 15.36 30.57 30.72 30.57h783.36c15.36 0 30.72-15.29 30.72-30.57 0-224.22-117.76-270.08-163.84-270.08z"
        fill={getIconColor(color, 2, '#00C050')}
      />
    </Svg>
  );
};

Iconshouhuoxinxi.defaultProps = {
  size: 18,
};

export default Iconshouhuoxinxi;
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IcondanxuanXuanzhong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 985C250.77 985 39 773.23 39 512S250.77 39 512 39s473 211.77 473 473-211.77 473-473 473z"
        fill={getIconColor(color, 0, '#2F54EB')}
      />
      <Path
        d="M391.84 648.34l321.887-321.635c15.627-15.615 40.953-15.605 56.568 0.022 15.615 15.627 15.605 40.953-0.022 56.568L419.957 733.338c-15.679 15.666-41.108 15.597-56.7-0.156L201.571 569.845c-15.541-15.7-15.412-41.027 0.288-56.568 15.7-15.541 41.026-15.413 56.568 0.288L391.84 648.34z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IcondanxuanXuanzhong.defaultProps = {
  size: 18,
};

export default IcondanxuanXuanzhong;

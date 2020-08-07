/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icondidian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M522.94144 456.192m-240.128 0a240.128 240.128 0 1 0 480.256 0 240.128 240.128 0 1 0-480.256 0Z"
        fill={getIconColor(color, 0, '#CAE4FF')}
      />
      <Path
        d="M517.09952 345.6c55.296 0 100.352 45.056 100.352 100.352s-45.056 100.352-100.352 100.352-100.352-45.056-100.352-100.352c0-26.624 10.752-51.712 29.184-70.656 18.944-18.944 44.544-29.696 71.168-29.696m0-60.416c-89.088 0-161.28 72.704-161.28 161.792 0 89.088 72.704 161.28 161.792 161.28 89.088 0 161.28-72.704 161.28-161.792 0-43.008-16.896-83.968-47.616-114.176-30.208-30.208-71.168-47.104-114.176-47.104z"
        fill={getIconColor(color, 1, '#0972E7')}
      />
      <Path
        d="M794.09152 160.768c-147.968-152.576-391.68-156.672-544.256-9.216l-9.216 9.216c-152.576 157.696-152.576 408.064 0 566.272l276.48 283.136 276.48-283.136c153.088-157.696 153.088-408.576 0.512-566.272z m-41.984 526.336l-235.008 241.664-235.008-241.664c-130.048-133.632-130.048-346.624 0-480.256 125.952-130.048 333.312-133.12 462.848-7.168 2.56 2.048 4.608 4.608 7.168 7.168 130.048 133.632 130.048 346.624 0 480.256z"
        fill={getIconColor(color, 2, '#0972E7')}
      />
    </Svg>
  );
};

Icondidian.defaultProps = {
  size: 18,
};

export default Icondidian;

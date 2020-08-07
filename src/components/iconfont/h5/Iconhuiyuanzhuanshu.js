/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhuiyuanzhuanshu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M913.63 908.34H110.37c-23.78 0-43.06-19.28-43.06-43.06V429.76c0-23.78 19.28-43.06 43.06-43.06h803.26c23.78 0 43.06 19.28 43.06 43.06v435.52c0 23.78-19.28 43.06-43.06 43.06z"
        fill={getIconColor(color, 0, '#EFF7FF')}
      />
      <path
        d="M67.31 458.56h889.38v70.29H67.31z"
        fill={getIconColor(color, 1, '#D7DBFF')}
      />
      <path
        d="M547.38 647.52H164.11c-5.92 0-10.71-4.8-10.71-10.71v-7.71c0-5.92 4.8-10.71 10.71-10.71h383.27c5.92 0 10.71 4.8 10.71 10.71v7.71c0.01 5.91-4.79 10.71-10.71 10.71z"
        fill={getIconColor(color, 2, '#B7B3FF')}
      />
      <path
        d="M866.21 821.99H676.37c-5.95 0-10.76-4.82-10.76-10.76s4.82-10.76 10.76-10.76H866.2c5.95 0 10.76 4.82 10.76 10.76s-4.81 10.76-10.75 10.76z"
        fill={getIconColor(color, 3, '#D7DBFF')}
      />
      <path
        d="M653.69 663.11a73.21 74.92 0 1 0 146.42 0 73.21 74.92 0 1 0-146.42 0Z"
        fill={getIconColor(color, 4, '#B7B3FF')}
      />
      <path
        d="M745.86 663.11a73.21 74.92 0 1 0 146.42 0 73.21 74.92 0 1 0-146.42 0Z"
        fill={getIconColor(color, 5, '#D7DBFF')}
      />
      <path
        d="M203.11 716.96l14.28 29.6a6.178 6.178 0 0 0 4.66 3.43l31.99 4.76c5.1 0.76 7.16 7.01 3.51 10.65l-23.28 23.22a6.315 6.315 0 0 0-1.77 5.51l5.5 32.8c0.85 5.08-4.51 8.92-9.05 6.48l-28.5-15.33a6.168 6.168 0 0 0-5.84 0l-28.5 15.33c-4.54 2.44-9.9-1.4-9.05-6.48l5.5-32.8c0.34-2.01-0.32-4.07-1.77-5.51l-23.28-23.22c-3.65-3.64-1.59-9.9 3.51-10.65l31.99-4.76c2.03-0.3 3.77-1.59 4.66-3.43l14.28-29.6c2.25-4.67 8.9-4.67 11.16 0zM373.96 716.96l14.28 29.6a6.178 6.178 0 0 0 4.66 3.43l32.04 4.76c5.08 0.76 7.13 6.98 3.49 10.61l-23.32 23.26a6.315 6.315 0 0 0-1.77 5.51l5.5 32.8c0.85 5.08-4.51 8.92-9.05 6.48l-28.5-15.33a6.168 6.168 0 0 0-5.84 0l-28.42 15.29c-4.57 2.46-9.97-1.41-9.11-6.53l5.49-32.73c0.34-2-0.32-4.05-1.76-5.48l-23.33-23.27c-3.64-3.63-1.59-9.85 3.49-10.61l32.04-4.76c2.03-0.3 3.77-1.59 4.66-3.43l14.28-29.6c2.26-4.67 8.91-4.67 11.17 0zM544.8 716.96l14.27 29.58c0.9 1.86 2.66 3.15 4.7 3.46l32.02 4.76c5.08 0.76 7.13 6.98 3.49 10.61l-23.32 23.26a6.315 6.315 0 0 0-1.77 5.51l5.5 32.8c0.85 5.08-4.51 8.92-9.05 6.48l-28.5-15.33a6.168 6.168 0 0 0-5.84 0l-28.42 15.29c-4.57 2.46-9.97-1.41-9.11-6.53l5.48-32.72c0.34-2.01-0.32-4.07-1.77-5.51l-23.32-23.26c-3.64-3.63-1.59-9.85 3.49-10.61l32.04-4.76c2.03-0.3 3.77-1.59 4.66-3.43l14.28-29.6c2.27-4.67 8.92-4.67 11.17 0zM827.18 270.09a3.9 3.9 0 0 1-3.48 2.14H617.31c-1.42 0-2.72-0.77-3.42-2l-47.34-84.63c-0.74-1.31-1.79-2.4-2.99-3.31-1.72-1.3-3.27-2.77-4.66-4.38-6.97-8.11-9.55-19.73-5.78-30.63 5.55-16.02 22.74-24.41 38.4-18.74 15.66 5.68 23.86 23.27 18.31 39.29-0.67 1.93-2.02 4.19-3.47 6.29-2.22 3.21-2.33 7.4-0.1 10.6 8.36 11.98 26.02 38.38 44.16 38.38 55.58 0.01 47.24-57.74 46.41-58.91-6.34-8.95-7.88-20.88-2.99-31.3 7.19-15.33 25.54-21.6 40.99-14.01 14.93 7.34 21.69 24.94 15.62 39.95-0.43 1.06-0.66 2.13-0.6 3.27 0.57 10.08 5.42 60.75 43.83 59.57 24.22-0.74 41.1-39.99 45.81-52.33 0.82-2.15 0.73-4.46-0.28-6.53-4.03-8.28-11.68-31.38 11.11-42.93 9.69-4.91 21.15-5.19 30.24 0.74 15.46 10.1 18.49 31.34 7.26 45.46-2.93 3.68-13.09 10.14-13.81 11.56l-46.83 92.45z"
        fill={getIconColor(color, 6, '#FBD9B2')}
      />
      <path
        d="M818.62 342.7h-195.8l-15.14-83.58h225.06z"
        fill={getIconColor(color, 7, '#FF9797')}
      />
      <path
        d="M838.56 386.7H605c-14.32 0-25.92-11.61-25.92-25.92V360c0-14.32 11.61-25.92 25.92-25.92h233.56c14.32 0 25.92 11.61 25.92 25.92v0.78c0.01 14.31-11.6 25.92-25.92 25.92z"
        fill={getIconColor(color, 8, '#FBD9B2')}
      />
    </svg>
  );
};

Iconhuiyuanzhuanshu.defaultProps = {
  size: 18,
};

export default Iconhuiyuanzhuanshu;

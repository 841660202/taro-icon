/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyake = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M479.96 368.83c-1.3-48.24-40.54-95.85-88.3-102.76-38.43-5.56-73.54 16.27-95.54 43.03-4.46 5.43-11.03 8.68-18.06 8.68h-11.12c-7.01 0-13.58-3.22-18.03-8.64-26.15-31.84-70.86-55.42-117.65-37.39-40.98 15.79-65.93 56.77-66.43 100.69-0.61 53.66 29.26 74.8 85.19 74.8 6.61 0 12.02 5.4 12.02 12.01v84.14h0.09v64.28c1.85 66.85 47.15 85.14 67.7 85.76 21.27 0.64 19.87-3.88 19.93-38.49v-60.48c0-17.83 14.45-32.28 32.28-32.28 17.83 0 32.28 14.45 32.28 32.28v59.79c0.35 36.43 6.7 39.19 20.91 39.19 59.59 0 66.44-60.97 66.56-92.45l-0.36-142.3c-0.02-6.46 4.68-11.95 11.04-13.04 48.86-8.41 68.87-25.66 67.49-76.82z"
        fill={getIconColor(color, 0, '#F5F5FF')}
      />
      <path
        d="M263.75 395.23c-15.19 0-27.81-2.09-37.85-4.83-30.08-8.24-44.77-24.17-45.38-24.85-3.96-4.38-3.62-11.14 0.75-15.1 4.36-3.95 11.08-3.63 15.05 0.7 0.33 0.35 12.24 12.69 36.68 19.02 33.15 8.58 74.27 2.26 118.92-18.27 5.36-2.47 11.72-0.12 14.18 5.25 2.47 5.37 0.12 11.72-5.25 14.18-39.41 18.12-71.82 23.9-97.1 23.9z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M486.31 372.84c-0.04-48.25-38.04-96.87-85.6-105.02-21.72-3.72-42.59 1.41-60.73 11.33 24.19 83.79 37.76 211.81 26.98 406.42 29.25-17.26 34.48-58.55 35.2-82.69l3.34-142.26c0.15-6.46 4.99-11.82 11.38-12.75 49.03-7.12 69.48-23.84 69.43-75.03zM677.29 731.29l-13.61 8.75-38.2-69.12 13.61-8.75z"
        fill={getIconColor(color, 2, '#B7B3FF')}
      />
      <path
        d="M700.98 252.62c-13.7-46.27-63.91-82.14-111.84-76.48-38.56 4.55-66.85 34.7-81.19 66.24-2.91 6.4-8.41 11.23-15.21 13.05L482 258.29c-6.78 1.81-13.95 0.39-19.65-3.69-33.48-24.01-82.76-35.25-123.31-5.76-35.52 25.83-49.04 71.87-38.19 114.42 13.26 52 47.58 64.71 101.61 50.27 6.38-1.71 13.01 2.11 14.71 8.5l21.72 81.29 0.09-0.02 16.59 62.1c19.04 64.11 67.53 70.09 87.54 65.38 20.71-4.87 18.19-8.88 9.32-42.33l-15.61-58.43c-4.6-17.23 5.63-34.92 22.86-39.52 17.23-4.6 34.92 5.63 39.52 22.86l15.43 57.76c9.74 35.11 16.59 36.13 30.32 32.46 57.57-15.38 48.45-76.05 40.44-106.49L648.31 359.7c-1.68-6.23 1.44-12.75 7.3-15.45 45.03-20.72 59.9-42.55 45.37-91.63z"
        fill={getIconColor(color, 3, '#F5F5FF')}
      />
      <path
        d="M696.62 236.02c-21.15-43.37-76.59-70.47-122.92-56.99-21.16 6.16-37.68 19.91-49.65 36.76 58.41 64.76 126.62 173.94 202.07 353.65 18.75-28.32 5.38-67.74-4.53-89.76L662.34 350.3c-2.69-5.87-0.68-12.81 4.66-16.44 40.98-27.85 52.05-51.83 29.62-97.84z"
        fill={getIconColor(color, 4, '#B7B3FF')}
      />
      <path
        d="M466.18 338.72c-0.63 0-1.26 0-1.87-0.01-31.19-0.47-49.38-12.24-50.14-12.75-4.93-3.25-6.29-9.88-3.04-14.81 3.24-4.91 9.83-6.28 14.75-3.08 0.4 0.25 15.02 9.24 40.27 9.26h0.11c34.22 0 72.42-16.37 110.5-47.36 4.58-3.73 11.32-3.04 15.04 1.54 3.73 4.58 3.04 11.32-1.54 15.04-52.7 42.9-96.27 52.17-124.08 52.17z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <path
        d="M959.11 365.58c-1.3-48.24-40.54-95.85-88.3-102.76-38.43-5.56-73.54 16.27-95.54 43.03-4.46 5.43-11.03 8.68-18.06 8.68h-11.12c-7.01 0-13.58-3.22-18.03-8.64-26.15-31.84-70.86-55.42-117.65-37.39-40.98 15.79-65.93 56.77-66.43 100.69-0.61 53.66 29.26 74.8 85.19 74.8 6.61 0 12.02 5.4 12.02 12.01v84.14h0.09v64.28c1.85 66.85 47.15 85.14 67.7 85.76 21.27 0.64 19.87-3.88 19.93-38.49v-60.48c0-17.83 14.45-32.28 32.28-32.28 17.83 0 32.28 14.45 32.28 32.28V651c0.35 36.43 6.7 39.19 20.91 39.19 59.59 0 66.44-60.97 66.56-92.45l-0.36-142.3c-0.02-6.46 4.68-11.95 11.04-13.04 48.86-8.41 68.86-25.65 67.49-76.82z"
        fill={getIconColor(color, 6, '#F5F5FF')}
      />
      <path
        d="M959.11 365.58c-1.3-48.24-40.54-95.85-88.3-102.76-21.81-3.15-42.54 2.52-60.42 12.9 26.36 83.13 43.26 210.75 37.54 405.58 28.79-18.02 32.94-59.43 33.03-83.58l-0.36-142.3c-0.02-6.46 4.68-11.95 11.04-13.04 48.84-8.39 68.84-25.63 67.47-76.8z"
        fill={getIconColor(color, 7, '#B7B3FF')}
      />
      <path
        d="M747.11 387.73c-13.8 0-25.4-1.76-34.78-4.13-30.24-7.66-45.22-23.31-45.85-23.97-4.05-4.3-3.84-11.07 0.46-15.12 4.28-4.03 11.01-3.84 15.06 0.41 0.3 0.31 12.45 12.45 37.04 18.31 33.31 7.93 74.3 0.83 118.54-20.56 5.32-2.57 11.71-0.34 14.28 4.97 2.57 5.32 0.34 11.71-4.97 14.28-40.7 19.69-74.05 25.81-99.78 25.81zM607.66 426.61c-2.23 0-4.45-0.93-6.03-2.74-1.33-1.52-32.42-37.6-25.01-75.25 4.04-20.51 18.46-37.09 42.86-49.29a8.015 8.015 0 0 1 10.76 3.59c1.98 3.96 0.38 8.78-3.59 10.76-19.71 9.85-31.24 22.63-34.28 37.99-5.92 29.88 21.07 61.35 21.34 61.66 2.9 3.34 2.56 8.4-0.78 11.31a8.017 8.017 0 0 1-5.27 1.97z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <path
        d="M657.67 295.43m-11.07 0a11.07 11.07 0 1 0 22.14 0 11.07 11.07 0 1 0-22.14 0Z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <path
        d="M553.77 525.06m-165.91 0a165.91 165.91 0 1 0 331.82 0 165.91 165.91 0 1 0-331.82 0Z"
        fill={getIconColor(color, 10, '#B5E1F7')}
      />
      <path
        d="M739.97 832.18l-22.29 14.1c-6.77 4.28-15.38 2-19.23-5.09l-44.05-81.15c-3.85-7.09-1.49-16.31 5.28-20.59l22.29-14.1c6.77-4.28 15.38-2 19.23 5.09l44.05 81.15c3.85 7.09 1.49 16.31-5.28 20.59z"
        fill={getIconColor(color, 11, '#B5E1F7')}
      />
      <path
        d="M553.77 525.06m-116.55 0a116.55 116.55 0 1 0 233.1 0 116.55 116.55 0 1 0-233.1 0Z"
        fill={getIconColor(color, 12, '#FF9797')}
      />
      <path
        d="M524.66 497.15c-7.59 0-16-2.24-25.16-6.72a5.357 5.357 0 0 1-2.46-7.15c1.3-2.65 4.5-3.75 7.15-2.46 12.68 6.2 23.09 7.27 30.94 3.19 12.35-6.42 15.24-23.88 15.27-24.06 0.46-2.91 3.2-4.9 6.1-4.46 2.91 0.45 4.91 3.17 4.46 6.08-0.14 0.93-3.68 22.9-20.83 31.88-4.69 2.47-9.86 3.7-15.47 3.7zM544.97 596.5a5.332 5.332 0 0 1-4.99-7.25c6.33-16.57 15.63-26.65 27.64-29.95 18.67-5.14 36.24 8.5 36.98 9.09a5.344 5.344 0 0 1 0.88 7.51 5.352 5.352 0 0 1-7.5 0.89c-0.14-0.11-14.17-10.9-27.58-7.17-8.52 2.37-15.4 10.26-20.44 23.45a5.346 5.346 0 0 1-4.99 3.43z"
        fill={getIconColor(color, 13, '#FFC7A0')}
      />
      <path
        d="M604.64 487.33m-12.94 0a12.94 12.94 0 1 0 25.88 0 12.94 12.94 0 1 0-25.88 0Z"
        fill={getIconColor(color, 14, '#FFC7A0')}
      />
      <path
        d="M476.75 523.3m-12.94 0a12.94 12.94 0 1 0 25.88 0 12.94 12.94 0 1 0-25.88 0Z"
        fill={getIconColor(color, 15, '#FFC7A0')}
      />
      <path
        d="M501.09 557.43m-12.94 0a12.94 12.94 0 1 0 25.88 0 12.94 12.94 0 1 0-25.88 0Z"
        fill={getIconColor(color, 16, '#FFC7A0')}
      />
      <path
        d="M557.64 525.82m-12.94 0a12.94 12.94 0 1 0 25.88 0 12.94 12.94 0 1 0-25.88 0Z"
        fill={getIconColor(color, 17, '#FFC7A0')}
      />
      <path
        d="M629.42 536.33m-12.94 0a12.94 12.94 0 1 0 25.88 0 12.94 12.94 0 1 0-25.88 0Z"
        fill={getIconColor(color, 18, '#FFC7A0')}
      />
      <path
        d="M352.47 391.14c-2.23 0-4.45-0.93-6.03-2.74-1.33-1.52-32.42-37.6-25.01-75.25 4.04-20.51 18.46-37.09 42.86-49.29a8.015 8.015 0 0 1 10.76 3.59c1.98 3.96 0.38 8.78-3.59 10.76-19.71 9.85-31.24 22.63-34.28 37.99-5.92 29.88 21.07 61.35 21.34 61.66 2.9 3.34 2.56 8.4-0.78 11.31a8.017 8.017 0 0 1-5.27 1.97z"
        fill={getIconColor(color, 19, '#FFFFFF')}
      />
      <path
        d="M395.3 259.96m-11.07 0a11.07 11.07 0 1 0 22.14 0 11.07 11.07 0 1 0-22.14 0Z"
        fill={getIconColor(color, 20, '#FFFFFF')}
      />
      <path
        d="M124.72 427.28c-2.23 0-4.45-0.93-6.03-2.74-1.33-1.52-32.42-37.6-25.01-75.25 4.04-20.51 18.46-37.09 42.86-49.29a8.015 8.015 0 0 1 10.76 3.59c1.98 3.96 0.38 8.78-3.59 10.76-19.7 9.85-31.24 22.63-34.28 37.99-5.92 29.88 21.07 61.35 21.34 61.66 2.9 3.34 2.56 8.4-0.78 11.31a8.017 8.017 0 0 1-5.27 1.97z"
        fill={getIconColor(color, 21, '#FFFFFF')}
      />
      <path
        d="M167.55 296.1m-11.07 0a11.07 11.07 0 1 0 22.14 0 11.07 11.07 0 1 0-22.14 0Z"
        fill={getIconColor(color, 22, '#FFFFFF')}
      />
    </svg>
  );
};

Iconyake.defaultProps = {
  size: 18,
};

export default Iconyake;

/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmeirong = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M384.01 751.94l-15.35 37.08a414.294 414.294 0 0 1-70.54 113.83l-30.93 35.48c-4.98 7.94-0.1 19.1 8.34 19.1h415.23c8.54 0 13.39-11.39 8.21-19.29l-33.04-37.6a270.76 270.76 0 0 1-48.08-78.41l-26.54-66.59c-1.91-2.93-4.88-4.67-8.04-4.73l-190.75-3.79c-3.35-0.08-6.53 1.76-8.51 4.92z"
        fill={getIconColor(color, 0, '#B1F1A8')}
      />
      <path
        d="M191.9 480.55S123.32 66.57 488.18 66.57 787.2 480.55 787.2 480.55H191.9z"
        fill={getIconColor(color, 1, '#FBD297')}
      />
      <path
        d="M250.92 497.76m-65.68 0a65.68 65.68 0 1 0 131.36 0 65.68 65.68 0 1 0-131.36 0Z"
        fill={getIconColor(color, 2, '#F9E2DC')}
      />
      <path
        d="M727.69 484.49m-65.68 0a65.68 65.68 0 1 0 131.36 0 65.68 65.68 0 1 0-131.36 0Z"
        fill={getIconColor(color, 3, '#F9E2DC')}
      />
      <path
        d="M253.79 380.04c0.74-18.37 15.06-34.34 34.74-38.76 35.09-7.87 92.21-32.15 136.99-106.4 69.66-115.49 165.19 27.07 165.19 27.07s45.78-14.44 57.72 21.66c7.05 21.3 29.35 42.6 46.44 56.48 14.6 11.85 23.66 28.18 25.9 45.83 11.58 91.08-7.43 375.16-217.54 394.99 0 0-266.26 17-249.44-400.87z"
        fill={getIconColor(color, 4, '#F9E2DC')}
      />
      <path
        d="M387.04 419.8c-24.89 0-39.05-7.45-50.37-14.43-5.22-3.22-6.84-10.06-3.62-15.28 3.22-5.22 10.06-6.84 15.28-3.62 9.5 5.86 19.61 11.13 38.71 11.13 18.94 0 26.77-3.89 35.06-8.01 1.54-0.76 3.13-1.55 4.8-2.33 5.56-2.58 12.17-0.17 14.75 5.4 2.58 5.56 0.17 12.17-5.4 14.75-1.45 0.67-2.85 1.37-4.27 2.08-9.74 4.82-20.78 10.31-44.94 10.31zM592.08 419.8c-19.64 0-30.62-5.02-39.43-9.04-2.56-1.17-4.98-2.27-7.32-3.1-5.78-2.04-8.82-8.39-6.77-14.17 2.04-5.78 8.39-8.81 14.17-6.77 3.27 1.16 6.26 2.52 9.15 3.84 7.92 3.62 15.4 7.04 30.2 7.04 14.98 0 22.22-3.14 29.89-6.47 3.06-1.33 6.22-2.7 9.79-3.84 5.84-1.86 12.09 1.37 13.95 7.21s-1.37 12.09-7.21 13.95c-2.49 0.79-4.9 1.84-7.68 3.05-8.53 3.69-19.14 8.3-38.74 8.3zM489.92 667.43c-25.05 0-45.62-5.58-62.87-17.06-5.11-3.4-6.49-10.29-3.09-15.4 3.4-5.11 10.29-6.49 15.4-3.09 13.49 8.98 30.03 13.34 50.56 13.34 19.1 0 35.87-4.19 49.84-12.46 5.28-3.12 12.09-1.38 15.21 3.9s1.38 12.09-3.9 15.21c-17.44 10.32-38.02 15.56-61.15 15.56z"
        fill={getIconColor(color, 5, '#FFA9A9')}
      />
      <path
        d="M489.08 508.39s5.23 54.08-24.64 74.31c-2.62 1.77-1.62 6.04 1.48 6.04h49.76"
        fill={getIconColor(color, 6, '#F9E2DC')}
      />
      <path
        d="M515.68 599.84h-49.76c-6.21 0-11.61-4.02-13.44-10-1.89-6.17 0.41-12.74 5.74-16.34 19.92-13.48 21.05-50.81 19.81-64.06-0.57-6.1 3.9-11.52 10-12.1 6.09-0.58 11.52 3.88 12.11 9.98 0.2 2.06 3.87 43.04-15.17 70.31h30.72c6.13 0 11.11 4.97 11.11 11.11s-4.99 11.1-11.12 11.1z"
        fill={getIconColor(color, 7, '#FFA9A9')}
      />
      <path
        d="M622.19 832.38c-138.25 83.93-274.51 0-274.51 0s24.92-49.4 38.3-86.1c0 0 105.81 60.3 204.36 6.51l31.85 79.59z"
        fill={getIconColor(color, 8, '#FFD4CA')}
      />
      <path
        d="M399.61 344.44c-2.67 0-5.35-0.96-7.47-2.9-4.52-4.12-4.87-11.11-0.76-15.65 0.18-0.19 1.8-1.97 4.74-4.64 4.54-4.12 11.56-3.78 15.69 0.76 4.12 4.54 3.78 11.56-0.76 15.69-2.11 1.92-3.22 3.12-3.24 3.13a11.06 11.06 0 0 1-8.2 3.61zM425.77 324.64c-3.85 0-7.59-2-9.65-5.58-3.05-5.32-1.21-12.11 4.11-15.16 2.84-1.63 5.77-3.18 8.71-4.62 5.51-2.69 12.16-0.41 14.85 5.1 2.69 5.51 0.41 12.16-5.1 14.85-2.5 1.22-5 2.54-7.41 3.93a10.938 10.938 0 0 1-5.51 1.48z m33.66-13.76c-4.94 0-9.44-3.31-10.74-8.31-1.54-5.94 2.02-12 7.95-13.54 3.17-0.82 6.4-1.55 9.62-2.16 6.02-1.14 11.84 2.82 12.98 8.84 1.14 6.03-2.82 11.84-8.84 12.98-2.73 0.52-5.48 1.14-8.17 1.83-0.94 0.25-1.88 0.36-2.8 0.36zM574.11 327.56c-1.71 0-3.44-0.4-5.07-1.23-2.6-1.34-5.22-2.62-7.79-3.81-5.56-2.58-7.98-9.19-5.39-14.75 2.58-5.56 9.19-7.98 14.75-5.4 2.84 1.32 5.73 2.73 8.59 4.2 5.46 2.8 7.61 9.5 4.8 14.95a11.102 11.102 0 0 1-9.89 6.04z m-33.69-13.85c-1.08 0-2.17-0.16-3.26-0.49-2.74-0.84-5.51-1.61-8.23-2.29-5.95-1.49-9.56-7.52-8.07-13.47s7.53-9.56 13.47-8.07c3.09 0.77 6.23 1.65 9.34 2.6 5.86 1.8 9.16 8.01 7.36 13.87-1.46 4.77-5.86 7.85-10.61 7.85z m-35.75-6.84c-0.27 0-0.54-0.01-0.82-0.03-2.8-0.2-5.63-0.32-8.42-0.35-6.13-0.06-11.06-5.08-10.99-11.22s5.1-11.07 11.22-10.99c3.24 0.03 6.54 0.17 9.81 0.41 6.12 0.45 10.71 5.77 10.27 11.89-0.43 5.83-5.3 10.29-11.07 10.29zM602.36 344.46c-2.16 0-4.33-0.63-6.25-1.93-1.49-1.01-2.97-2-4.44-2.97-5.13-3.36-6.57-10.24-3.21-15.38 3.36-5.13 10.24-6.57 15.37-3.21 1.59 1.04 3.19 2.11 4.79 3.2 5.07 3.46 6.37 10.36 2.92 15.43-2.14 3.17-5.63 4.86-9.18 4.86zM586.72 704.19c-3.02 0-6.03-1.23-8.22-3.64-4.12-4.54-3.79-11.56 0.75-15.69 2.12-1.92 3.23-3.13 3.24-3.14 4.14-4.5 11.16-4.83 15.68-0.7s4.86 11.11 0.75 15.65c-0.17 0.19-1.79 1.96-4.74 4.63-2.13 1.93-4.8 2.89-7.46 2.89zM521.95 735.89c-5.23 0-9.89-3.71-10.9-9.04-1.14-6.03 2.82-11.84 8.85-12.98 2.73-0.52 5.48-1.13 8.17-1.83 5.93-1.55 12 2.02 13.54 7.95 1.54 5.94-2.02 12-7.95 13.54-3.17 0.83-6.41 1.55-9.63 2.16-0.7 0.14-1.39 0.2-2.08 0.2z m34.54-11.48c-4.11 0-8.06-2.29-9.99-6.23-2.69-5.51-0.41-12.16 5.1-14.85 2.51-1.23 5-2.55 7.41-3.93 5.32-3.05 12.11-1.21 15.16 4.11 3.05 5.32 1.21 12.11-4.11 15.16-2.83 1.62-5.76 3.18-8.71 4.62-1.56 0.75-3.22 1.12-4.86 1.12zM494.75 738.29h-0.12c-3.24-0.03-6.54-0.17-9.8-0.41-6.12-0.45-10.72-5.77-10.27-11.88 0.45-6.12 5.77-10.72 11.88-10.27 2.8 0.2 5.63 0.32 8.42 0.35 6.13 0.06 11.05 5.08 10.99 11.22-0.06 6.09-5.02 10.99-11.1 10.99z m-36.08-4.77c-0.89 0-1.8-0.11-2.71-0.34-3.09-0.77-6.23-1.65-9.34-2.6-5.86-1.8-9.16-8.01-7.36-13.87 1.8-5.86 8.01-9.16 13.87-7.36 2.74 0.84 5.51 1.61 8.23 2.29 5.95 1.49 9.56 7.52 8.07 13.47-1.26 5.05-5.78 8.41-10.76 8.41z m-34.3-12.29c-1.57 0-3.16-0.33-4.67-1.04-2.85-1.32-5.74-2.74-8.59-4.2-5.46-2.8-7.6-9.5-4.8-14.95 2.8-5.46 9.5-7.61 14.96-4.8 2.59 1.33 5.21 2.61 7.79 3.81 5.56 2.58 7.98 9.19 5.4 14.75a11.14 11.14 0 0 1-10.09 6.43zM392.53 703.4c-2.09 0-4.2-0.59-6.07-1.82-1.59-1.04-3.19-2.11-4.79-3.2-5.07-3.46-6.37-10.37-2.92-15.43 3.46-5.07 10.37-6.37 15.43-2.92 1.49 1.01 2.97 2 4.44 2.97 5.13 3.36 6.57 10.24 3.21 15.38a11.102 11.102 0 0 1-9.3 5.02zM270.78 521.35c-0.71 0-1.42-0.07-2.14-0.21-2.92-0.57-4.67-0.79-4.69-0.79-6.08-0.75-10.41-6.28-9.67-12.36 0.74-6.08 6.25-10.42 12.33-9.69 0.25 0.03 2.54 0.31 6.28 1.04 6.02 1.18 9.95 7.01 8.77 13.03-1.02 5.3-5.67 8.98-10.88 8.98zM334.05 553.61c-2.97 0-5.92-1.18-8.11-3.52a74.593 74.593 0 0 0-5.65-5.42c-4.64-4.01-5.16-11.02-1.15-15.66 4.01-4.64 11.02-5.16 15.66-1.15 2.6 2.24 5.08 4.62 7.36 7.06 4.19 4.48 3.96 11.5-0.52 15.7-2.14 2-4.87 2.99-7.59 2.99zM304.9 532.7c-1.63 0-3.29-0.36-4.85-1.12-2.42-1.18-4.96-2.3-7.54-3.34-5.69-2.29-8.44-8.77-6.14-14.46 2.29-5.69 8.77-8.44 14.45-6.14 3.05 1.23 6.06 2.57 8.95 3.97 5.52 2.68 7.81 9.33 5.13 14.85a11.13 11.13 0 0 1-10 6.24zM344.45 655.36c-1.31 0-2.63-0.23-3.93-0.72-5.74-2.17-8.63-8.58-6.46-14.32 1.02-2.69 1.97-5.39 2.82-8.01 1.9-5.83 8.16-9.02 13.99-7.13 5.83 1.9 9.03 8.16 7.13 13.99-0.96 2.95-2.02 5.98-3.17 9-1.67 4.45-5.89 7.19-10.38 7.19z m9.09-34.83c-0.47 0-0.94-0.03-1.42-0.09-6.08-0.77-10.39-6.33-9.61-12.42 0.35-2.74 0.59-5.46 0.71-8.08 0.28-6.13 5.49-10.86 11.6-10.59 6.13 0.28 10.87 5.47 10.59 11.6-0.15 3.22-0.44 6.54-0.86 9.88-0.72 5.61-5.5 9.7-11.01 9.7z m-1.99-35.78c-4.88 0-9.36-3.24-10.71-8.18a64.35 64.35 0 0 0-2.46-7.25c-2.32-5.68 0.39-12.16 6.07-14.49 5.68-2.32 12.16 0.39 14.49 6.07 1.3 3.17 2.42 6.47 3.33 9.81 1.62 5.92-1.87 12.02-7.79 13.64-0.98 0.28-1.96 0.4-2.93 0.4zM330.81 684.98c-1.77 0-3.57-0.42-5.24-1.32-5.41-2.9-7.44-9.63-4.54-15.04 0.85-1.59 1.68-3.17 2.48-4.74 2.8-5.46 9.49-7.62 14.95-4.82 5.46 2.8 7.62 9.49 4.82 14.95-0.86 1.68-1.75 3.38-2.67 5.1-2 3.74-5.83 5.87-9.8 5.87z"
        fill={getIconColor(color, 9, '#FFC2C2')}
      />
      <path
        d="M706.36 523.21c-4.84 0-9.29-3.18-10.68-8.07-1.68-5.9 1.74-12.04 7.64-13.72 3.59-1.02 5.76-1.51 5.99-1.56 5.99-1.34 11.92 2.44 13.26 8.42 1.33 5.98-2.43 11.91-8.41 13.25-0.02 0-1.79 0.41-4.76 1.25-1.01 0.29-2.03 0.43-3.04 0.43zM641.8 558.4c-2.83 0-5.67-1.08-7.84-3.24-4.35-4.33-4.36-11.36-0.03-15.71 2.36-2.37 4.93-4.71 7.63-6.96 4.72-3.92 11.72-3.28 15.64 1.44s3.28 11.72-1.44 15.64c-2.17 1.8-4.22 3.67-6.09 5.55a11.038 11.038 0 0 1-7.87 3.28z m30.12-21.5c-4 0-7.87-2.17-9.85-5.96-2.84-5.44-0.74-12.15 4.69-14.99 2.87-1.5 5.86-2.96 8.89-4.34 5.58-2.54 12.17-0.08 14.71 5.5 2.54 5.58 0.08 12.17-5.5 14.71-2.66 1.21-5.29 2.49-7.8 3.81-1.64 0.86-3.41 1.27-5.14 1.27zM638.61 660.36c-3.73 0-7.37-1.88-9.46-5.28-1.76-2.86-3.43-5.75-4.96-8.58-2.92-5.39-0.91-12.13 4.49-15.05 5.39-2.92 12.13-0.91 15.05 4.49 1.33 2.46 2.79 4.98 4.34 7.49 3.22 5.22 1.59 12.06-3.63 15.28a11.12 11.12 0 0 1-5.83 1.65z m-15.14-33.76c-4.92 0-9.42-3.29-10.73-8.28-0.91-3.44-1.63-6.9-2.13-10.26a11.111 11.111 0 0 1 9.33-12.64c6.07-0.91 11.72 3.26 12.64 9.33 0.39 2.58 0.94 5.24 1.65 7.91 1.56 5.93-1.98 12.01-7.91 13.57-0.96 0.25-1.92 0.37-2.85 0.37z m-0.54-36.71c-0.95 0-1.92-0.12-2.89-0.38-5.92-1.59-9.44-7.68-7.84-13.61 0.94-3.49 2.15-6.96 3.61-10.3 2.45-5.62 8.99-8.2 14.61-5.75 5.63 2.45 8.2 8.99 5.75 14.61a50.937 50.937 0 0 0-2.52 7.21 11.111 11.111 0 0 1-10.72 8.22zM658.35 687.31c-3.16 0-6.3-1.34-8.5-3.95-1.26-1.5-2.48-2.98-3.67-4.45-3.86-4.77-3.12-11.76 1.65-15.62 4.77-3.86 11.76-3.12 15.62 1.65 1.1 1.36 2.23 2.73 3.4 4.12 3.95 4.69 3.35 11.7-1.34 15.65-2.09 1.74-4.63 2.6-7.16 2.6z"
        fill={getIconColor(color, 10, '#FFC2C2')}
      />
      <path
        d="M264.16 421.67c-3.37 0-6.7-1.53-8.88-4.43-2.36-3.14-3.62-5.13-3.75-5.35-3.24-5.21-1.65-12.06 3.55-15.3 5.2-3.24 12.04-1.66 15.28 3.53 0.06 0.09 0.95 1.49 2.65 3.75 3.69 4.9 2.71 11.86-2.19 15.55a10.944 10.944 0 0 1-6.66 2.25zM321.63 466.6c-1.47 0-2.96-0.29-4.39-0.91-3.03-1.31-6.06-2.73-9-4.24-5.46-2.8-7.62-9.49-4.82-14.95 2.8-5.46 9.49-7.62 14.95-4.82 2.51 1.28 5.09 2.5 7.67 3.62 5.63 2.43 8.23 8.96 5.8 14.6-1.82 4.19-5.91 6.7-10.21 6.7z m-31.59-18.82c-2.39 0-4.81-0.77-6.84-2.36-2.58-2.02-5.14-4.16-7.6-6.34-4.59-4.07-5.01-11.09-0.93-15.68 4.07-4.59 11.09-5 15.68-0.93 2.12 1.88 4.33 3.72 6.55 5.46 4.83 3.78 5.68 10.76 1.9 15.59-2.2 2.8-5.46 4.26-8.76 4.26zM384.6 477.83c-5.91 0-10.82-4.65-11.09-10.61-0.27-6.13 4.48-11.31 10.6-11.59 2.82-0.13 5.71-0.34 8.56-0.62 6.11-0.62 11.55 3.83 12.17 9.93 0.62 6.1-3.83 11.55-9.93 12.17-3.27 0.33-6.58 0.57-9.82 0.72h-0.49z m-27.55-1.29c-0.52 0-1.05-0.04-1.58-0.11-3.27-0.47-6.57-1.04-9.79-1.72-6-1.26-9.85-7.15-8.59-13.15 1.26-6 7.15-9.85 13.15-8.59 2.75 0.58 5.56 1.07 8.36 1.47 6.07 0.86 10.3 6.49 9.43 12.56-0.79 5.54-5.54 9.54-10.98 9.54z m63.93-4.29c-4.94 0-9.45-3.33-10.75-8.34-1.53-5.94 2.04-12 7.98-13.53 2.78-0.72 5.6-1.51 8.4-2.37 5.86-1.79 12.07 1.51 13.87 7.37 1.79 5.87-1.51 12.07-7.37 13.87-3.11 0.95-6.25 1.84-9.34 2.63-0.94 0.25-1.87 0.37-2.79 0.37zM455.79 460.09c-4.28 0-8.35-2.48-10.18-6.65-2.46-5.62 0.1-12.17 5.72-14.63 1.61-0.7 3.23-1.43 4.86-2.19 5.56-2.57 12.17-0.15 14.74 5.42 2.58 5.57 0.15 12.17-5.42 14.74-1.77 0.82-3.53 1.61-5.27 2.37-1.45 0.63-2.97 0.94-4.45 0.94z"
        fill={getIconColor(color, 11, '#FFC2C2')}
      />
      <path
        d="M524.13 444.89c-2.79 0-5.57-1.04-7.73-3.13-2.83-2.74-4.39-4.55-4.56-4.75-3.99-4.66-3.44-11.67 1.22-15.66 4.65-3.98 11.65-3.44 15.64 1.19 0.04 0.05 1.13 1.3 3.17 3.27 4.4 4.27 4.51 11.3 0.24 15.7a11.096 11.096 0 0 1-7.98 3.38zM586.5 478.29c-0.79 0-1.58-0.08-2.38-0.26-3.16-0.69-6.33-1.51-9.44-2.42-5.88-1.74-9.24-7.91-7.51-13.8 1.73-5.88 7.91-9.24 13.79-7.51 2.6 0.77 5.26 1.45 7.9 2.03 5.99 1.31 9.79 7.23 8.48 13.22-1.13 5.19-5.73 8.74-10.84 8.74z m-33.47-12.45c-1.78 0-3.58-0.43-5.25-1.33-2.82-1.52-5.64-3.16-8.37-4.87-5.2-3.26-6.77-10.11-3.52-15.31 3.25-5.2 10.11-6.77 15.31-3.52 2.32 1.45 4.71 2.84 7.11 4.13 5.4 2.91 7.42 9.64 4.52 15.04a11.12 11.12 0 0 1-9.8 5.86zM613.23 481.16c-6.13 0-11.15-4.97-11.15-11.11s4.93-11.11 11.07-11.11h0.08c2.68 0 5.41-0.09 8.1-0.28 6.11-0.42 11.42 4.2 11.84 10.32 0.42 6.12-4.2 11.42-10.32 11.84-3.2 0.23-6.44 0.34-9.62 0.34z m35.29-4.75c-4.91 0-9.4-3.28-10.72-8.25-1.58-5.93 1.95-12.01 7.87-13.59 2.64-0.7 5.32-1.5 7.97-2.37 5.83-1.91 12.1 1.25 14.02 7.08s-1.25 12.1-7.08 14.02c-3.05 1-6.14 1.92-9.19 2.74-0.96 0.25-1.92 0.37-2.87 0.37z m33.35-12.89c-4.06 0-7.97-2.23-9.92-6.1-2.77-5.47-0.57-12.15 4.9-14.92 2.48-1.25 5-2.6 7.47-3.98 5.35-3 12.12-1.1 15.12 4.25s1.1 12.12-4.25 15.12c-2.76 1.55-5.56 3.04-8.32 4.44-1.6 0.8-3.31 1.19-5 1.19zM712.41 444.82c-3.46 0-6.86-1.61-9.03-4.63-3.58-4.98-2.44-11.92 2.54-15.5 1.43-1.02 2.86-2.08 4.3-3.15 4.91-3.68 11.87-2.68 15.55 2.23 3.68 4.91 2.68 11.87-2.23 15.55-1.56 1.17-3.11 2.31-4.66 3.42-1.96 1.4-4.23 2.08-6.47 2.08z"
        fill={getIconColor(color, 12, '#FFC2C2')}
      />
      <path
        d="M814.77 851.24l-23.23-45.15 15.03-10.38 31.52 39.65c1.47 1.85 0.44 4.96-2.26 6.82l-13.8 9.52c-2.78 1.93-6.15 1.71-7.26-0.46z"
        fill={getIconColor(color, 13, '#CCD7F2')}
      />
      <path
        d="M498.84 786.56c-7.98 0-25.35-0.76-47.59-6.21-27.81-6.81-68.8-22.58-106.16-59.07-31.77-31.03-56.16-72.18-72.5-122.3-19.59-60.09-27.78-133.83-24.35-219.17l5.55 0.22-5.55-0.22c0.84-20.91 16.91-38.98 39.07-43.95 37.36-8.38 90.84-33.2 133.45-103.85 18.77-31.11 41.32-47.2 67.03-47.81 49.96-1.16 94.71 56.7 105.26 71.4 4.76-1.09 13.21-2.54 22.43-1.9 19.36 1.35 32.58 11.09 38.22 28.16 6.6 19.94 27.93 40.32 44.67 53.92 15.55 12.63 25.46 30.19 27.91 49.44 4.04 31.78 4.59 87.5-6 148.59-8.6 49.6-27.87 120-70.86 173.7-37.46 46.79-86.47 73.35-145.67 78.93l-0.17 0.01c-0.23 0.02-1.88 0.11-4.74 0.11z m-9.53-591.27c-0.43 0-0.85 0.01-1.27 0.02-21.66 0.52-41.09 14.8-57.77 42.44-20.32 33.69-45.14 60.55-73.78 79.83-20.91 14.08-43.37 23.88-66.74 29.12-17.26 3.87-29.76 17.67-30.4 33.56-6.21 154.34 25.25 266.4 93.51 333.08 67.18 65.61 147.2 62.18 149.96 62.03 56.05-5.31 102.46-30.48 137.94-74.81 80.61-100.68 80.8-264.49 74.51-313.94-2.09-16.41-10.57-31.4-23.9-42.22-17.89-14.53-40.77-36.56-48.21-59.05-10.06-30.42-49.13-18.62-50.79-18.1l-3.96 1.23-2.32-3.44c-0.47-0.7-47.39-69.75-96.78-69.75z"
        fill={getIconColor(color, 14, '#F9E2DC')}
      />
      <path
        d="M722.96 702.62c-3.56 0-7.07-1.71-9.21-4.89l-48.88-72.35c-3.43-5.08-2.1-11.99 2.98-15.42 5.08-3.43 11.99-2.1 15.42 2.98l48.88 72.35c3.43 5.08 2.1 11.99-2.98 15.42-1.91 1.3-4.07 1.91-6.21 1.91z"
        fill={getIconColor(color, 15, '#F5F5FF')}
      />
      <path
        d="M737.45 742.82l-30.79-44.61a5.424 5.424 0 0 1 1.38-7.54l20.29-14a5.424 5.424 0 0 1 7.54 1.38l30.79 44.61-29.21 20.16z"
        fill={getIconColor(color, 16, '#CCD7F2')}
      />
      <path
        d="M792.08 822.19l-54.71-79.28 29.21-20.16 54.71 79.28c2.85 4.14 1.82 9.8-2.32 12.66l-14.24 9.83c-4.13 2.84-9.8 1.8-12.65-2.33z"
        fill={getIconColor(color, 17, '#FBD297')}
      />
    </svg>
  );
};

Iconmeirong.defaultProps = {
  size: 18,
};

export default Iconmeirong;

/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconneike = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M732.73 75.8h14.74v35.49h-14.74z"
        fill={getIconColor(color, 0, '#FFC7A0')}
      />
      <path
        d="M757.608 65.143v14.94h-35.01v-14.94zM733.14 271.18h16v38.54h-16z"
        fill={getIconColor(color, 1, '#FFC7A0')}
      />
      <path
        d="M722.134 322.26V304.1h38.02v18.16zM854.728 179.755v16.22h-38.02v-16.22z"
        fill={getIconColor(color, 2, '#FFC7A0')}
      />
      <path
        d="M866.148 207.133h-16v-38.54h16zM627.838 183.394v-14.94h35.01v14.94z"
        fill={getIconColor(color, 3, '#FFC7A0')}
      />
      <path
        d="M617.32 158.18h14.74v35.49h-14.74zM683.61 136.51l10.4-10.59-24.83-25.03-10.39 10.59z"
        fill={getIconColor(color, 4, '#FFC7A0')}
      />
      <path
        d="M644.18 111.24l10.45 10.54 24.69-25.16-10.44-10.54zM670.43 235.48l9.75 11.2-26.24 23.49-9.76-11.2z"
        fill={getIconColor(color, 5, '#FFC7A0')}
      />
      <path
        d="M629.59 258.33l11.05-9.89 23.17 26.6-11.05 9.89z"
        fill={getIconColor(color, 6, '#FFC7A0')}
      />
      <path
        d="M798.56 135.47l-10.6-10.39 24.34-25.52 10.6 10.39z"
        fill={getIconColor(color, 7, '#FFC7A0')}
      />
      <path
        d="M837.5 109.42l-10.25 10.74-25.17-24.66 10.24-10.75z"
        fill={getIconColor(color, 8, '#FFC7A0')}
      />
      <path
        d="M804.21 246.11l-11.4 11.39 26.7 27.43 11.39-11.39z"
        fill={getIconColor(color, 9, '#FFC7A0')}
      />
      <path
        d="M846.76 273.95l-11.24-11.55-27.06 27.06 11.23 11.55z"
        fill={getIconColor(color, 10, '#FFC7A0')}
      />
      <path
        d="M657.59 621.24l-129.25-85.37c-2.09-1.38-3.46-4.65-3.46-8.28V249.23c0-26.59-12.39-50.42-28.92-51.81-17.63-1.48-32.21 21.04-32.21 49.04v282.78c0 3.59-1.34 6.84-3.4 8.24l-129.33 88.26 16.36 75.06L456 626.69c3.68-2.51 7.75 1.83 7.75 8.24v65.71c0 26.59 12.39 50.42 28.92 51.81 17.63 1.48 32.21-21.04 32.21-49.03v-70.59c0-6.37 4.03-10.71 7.69-8.28l109.1 72.06 15.92-75.37z"
        fill={getIconColor(color, 11, '#FFEBC6')}
      />
      <path
        d="M396.25 357.65v363.47c0 64.03-29.15 125.63-81.67 172.75l-64.93 58.26c-12.96 11.63-36.34 7.21-41.69-7.97-40.04-113.46-142.6-480.48 153.05-604.74 16.13-6.77 35.24 3.28 35.24 18.23zM589.74 368.81v356.8c0 62.86 27.75 123.32 77.75 169.58l61.82 57.19c12.34 11.42 34.6 7.08 39.7-7.82 38.12-111.38 135.77-471.66-145.72-593.64-15.36-6.65-33.55 3.22-33.55 17.89z"
        fill={getIconColor(color, 12, '#FFEBC6')}
      />
      <path
        d="M540.11 892.29m-35.23 0a35.23 35.23 0 1 0 70.46 0 35.23 35.23 0 1 0-70.46 0Z"
        fill={getIconColor(color, 13, '#FFEBC6')}
      />
      <path
        d="M283.43 179.75m-43.14 0a43.14 43.14 0 1 0 86.28 0 43.14 43.14 0 1 0-86.28 0Z"
        fill={getIconColor(color, 14, '#FFEBC6')}
      />
      <path
        d="M461.68 823.93m-13.8 0a13.8 13.8 0 1 0 27.6 0 13.8 13.8 0 1 0-27.6 0Z"
        fill={getIconColor(color, 15, '#FFC7A0')}
      />
      <path
        d="M254.61 296.68a11.83 12.88 0 1 0 23.66 0 11.83 12.88 0 1 0-23.66 0Z"
        fill={getIconColor(color, 16, '#FFC7A0')}
      />
      <path
        d="M345.32 569.08a18.38 17.6 0 1 0 36.76 0 18.38 17.6 0 1 0-36.76 0Z"
        fill={getIconColor(color, 17, '#FFC7A0')}
      />
      <path
        d="M332.81 474.94a18.38 17.6 0 1 0 36.76 0 18.38 17.6 0 1 0-36.76 0Z"
        fill={getIconColor(color, 18, '#FFC7A0')}
      />
      <path
        d="M314.43 403.18a18.38 17.6 0 1 0 36.76 0 18.38 17.6 0 1 0-36.76 0Z"
        fill={getIconColor(color, 19, '#FFC7A0')}
      />
      <path
        d="M240.29 474.94a18.38 17.6 0 1 0 36.76 0 18.38 17.6 0 1 0-36.76 0Z"
        fill={getIconColor(color, 20, '#FFC7A0')}
      />
      <path
        d="M194.97 557.71a25.58 24.49 0 1 0 51.16 0 25.58 24.49 0 1 0-51.16 0Z"
        fill={getIconColor(color, 21, '#FFC7A0')}
      />
      <path
        d="M194.97 823.93a12.79 12.24 0 1 0 25.58 0 12.79 12.24 0 1 0-25.58 0Z"
        fill={getIconColor(color, 22, '#FFC7A0')}
      />
      <path
        d="M256.3 636.46a15.51 14.84 0 1 0 31.02 0 15.51 14.84 0 1 0-31.02 0Z"
        fill={getIconColor(color, 23, '#FFC7A0')}
      />
      <path
        d="M183.98 734.92a14.99 14.35 0 1 0 29.98 0 14.99 14.35 0 1 0-29.98 0Z"
        fill={getIconColor(color, 24, '#FFC7A0')}
      />
      <path
        d="M319.49 752.6a13.7 13.93 0 1 0 27.4 0 13.7 13.93 0 1 0-27.4 0Z"
        fill={getIconColor(color, 25, '#FFC7A0')}
      />
      <path
        d="M354.192948 718.513683a12.17 12.87 47.731 1 0 19.047474-17.313039 12.17 12.87 47.731 1 0-19.047474 17.313039Z"
        fill={getIconColor(color, 26, '#FFC7A0')}
      />
      <path
        d="M295.986544 537.833116a12.17 12.87 47.731 1 0 19.047474-17.313039 12.17 12.87 47.731 1 0-19.047474 17.313039Z"
        fill={getIconColor(color, 27, '#FFC7A0')}
      />
      <path
        d="M191.53 658.58a18.38 18.69 0 1 0 36.76 0 18.38 18.69 0 1 0-36.76 0Z"
        fill={getIconColor(color, 28, '#FFC7A0')}
      />
      <path
        d="M308.53 832.84a16.28 15.58 0 1 0 32.56 0 16.28 15.58 0 1 0-32.56 0Z"
        fill={getIconColor(color, 29, '#FFC7A0')}
      />
      <path
        d="M243.3 785.23a18.38 18.69 0 1 0 36.76 0 18.38 18.69 0 1 0-36.76 0Z"
        fill={getIconColor(color, 30, '#FFC7A0')}
      />
      <path
        d="M234.32 885.02a19.61 18.77 0 1 0 39.22 0 19.61 18.77 0 1 0-39.22 0Z"
        fill={getIconColor(color, 31, '#FFC7A0')}
      />
      <path
        d="M327.29 642.95a19.61 18.77 0 1 0 39.22 0 19.61 18.77 0 1 0-39.22 0Z"
        fill={getIconColor(color, 32, '#FFC7A0')}
      />
      <path
        d="M252.2 710.25a19.61 18.77 0 1 0 39.22 0 19.61 18.77 0 1 0-39.22 0Z"
        fill={getIconColor(color, 33, '#FFC7A0')}
      />
      <path
        d="M618.14 405a13.49 13.12 0 1 0 26.98 0 13.49 13.12 0 1 0-26.98 0Z"
        fill={getIconColor(color, 34, '#FFC7A0')}
      />
      <path
        d="M713.98 526.99a25.18 24.49 0 1 0 50.36 0 25.18 24.49 0 1 0-50.36 0Z"
        fill={getIconColor(color, 35, '#FFC7A0')}
      />
      <path
        d="M624.54 492.54a25.18 24.49 0 1 0 50.36 0 25.18 24.49 0 1 0-50.36 0Z"
        fill={getIconColor(color, 36, '#FFC7A0')}
      />
      <path
        d="M699.58 777.57a18.05 17.56 0 1 0 36.1 0 18.05 17.56 0 1 0-36.1 0Z"
        fill={getIconColor(color, 37, '#FFC7A0')}
      />
      <path
        d="M763.94 731.59a15.75 15.32 0 1 0 31.5 0 15.75 15.32 0 1 0-31.5 0Z"
        fill={getIconColor(color, 38, '#FFC7A0')}
      />
      <path
        d="M687.47 446.75a15.75 15.32 0 1 0 31.5 0 15.75 15.32 0 1 0-31.5 0Z"
        fill={getIconColor(color, 39, '#FFC7A0')}
      />
      <path
        d="M751.76 593.57a12.59 12.24 0 1 0 25.18 0 12.59 12.24 0 1 0-25.18 0Z"
        fill={getIconColor(color, 40, '#FFC7A0')}
      />
      <path
        d="M757.66 823.93a12.59 12.24 0 1 0 25.18 0 12.59 12.24 0 1 0-25.18 0Z"
        fill={getIconColor(color, 41, '#FFC7A0')}
      />
      <path
        d="M613.54 667.92a18.09 18.69 0 1 0 36.18 0 18.09 18.69 0 1 0-36.18 0Z"
        fill={getIconColor(color, 42, '#FFC7A0')}
      />
      <path
        d="M757.24 653.83a18.09 18.69 0 1 0 36.18 0 18.09 18.69 0 1 0-36.18 0Z"
        fill={getIconColor(color, 43, '#FFC7A0')}
      />
      <path
        d="M622.22 746.91a19.36 18.82 0 1 0 38.72 0 19.36 18.82 0 1 0-38.72 0Z"
        fill={getIconColor(color, 44, '#FFC7A0')}
      />
      <path
        d="M655.13 831.97a18.09 18.69 0 1 0 36.18 0 18.09 18.69 0 1 0-36.18 0Z"
        fill={getIconColor(color, 45, '#FFC7A0')}
      />
      <path
        d="M691.32 701.02a18.09 18.69 0 1 0 36.18 0 18.09 18.69 0 1 0-36.18 0Z"
        fill={getIconColor(color, 46, '#FFC7A0')}
      />
      <path
        d="M716.37 890.06a19.31 18.77 0 1 0 38.62 0 19.31 18.77 0 1 0-38.62 0Z"
        fill={getIconColor(color, 47, '#FFC7A0')}
      />
      <path
        d="M616.9 577.96a19.31 18.77 0 1 0 38.62 0 19.31 18.77 0 1 0-38.62 0Z"
        fill={getIconColor(color, 48, '#FFC7A0')}
      />
      <path
        d="M679.46 619.84a23.76 23.11 0 1 0 47.52 0 23.76 23.11 0 1 0-47.52 0Z"
        fill={getIconColor(color, 49, '#FFC7A0')}
      />
      <path
        d="M390.65 195.18a11.83 12.88 0 1 0 23.66 0 11.83 12.88 0 1 0-23.66 0Z"
        fill={getIconColor(color, 50, '#FFC7A0')}
      />
      <path
        d="M656.46 193.65a83.4 84.54 0 1 0 166.8 0 83.4 84.54 0 1 0-166.8 0Z"
        fill={getIconColor(color, 51, '#FF9797')}
      />
      <path
        d="M758.97 217.27a9.97 10.1 0 1 0 19.94 0 9.97 10.1 0 1 0-19.94 0Z"
        fill={getIconColor(color, 52, '#FFC7A0')}
      />
      <path
        d="M715.23 163.59a13.8 13.99 0 1 0 27.6 0 13.8 13.99 0 1 0-27.6 0Z"
        fill={getIconColor(color, 53, '#FFC7A0')}
      />
      <path
        d="M698.04 216.07a7.9 8.01 0 1 0 15.8 0 7.9 8.01 0 1 0-15.8 0Z"
        fill={getIconColor(color, 54, '#FFC7A0')}
      />
    </svg>
  );
};

Iconneike.defaultProps = {
  size: 18,
};

export default Iconneike;
